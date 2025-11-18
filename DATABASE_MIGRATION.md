# Database Migration Guide

This guide will help you migrate from the JSON file storage to a proper database (PostgreSQL or MongoDB) when you're ready to scale.

## Current Setup

Currently, subscriber emails are stored in `data/subscribers.json`. This is suitable for:
- Development and testing
- Low traffic (< 1000 subscribers)
- Simple deployments

## When to Migrate

Consider migrating to a database when:
- You have more than 1000 subscribers
- You need better query performance
- You want to add more subscriber fields (name, preferences, etc.)
- You're deploying to multiple servers
- You need better data integrity and backups

---

## Option 1: PostgreSQL with Prisma

PostgreSQL is recommended for production-grade applications with strong data integrity requirements.

### Step 1: Install Dependencies

```bash
npm install @prisma/client
npm install -D prisma
```

### Step 2: Initialize Prisma

```bash
npx prisma init
```

### Step 3: Configure Database

Update `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/yago?schema=public"
```

For Vercel deployment, use Vercel Postgres or Supabase.

### Step 4: Create Schema

Create `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Subscriber {
  id           String   @id @default(cuid())
  email        String   @unique
  subscribedAt DateTime @default(now())
  firstName    String?
  lastName     String?
  source       String?  @default("website")
  emailSent    Boolean  @default(false)

  @@index([email])
  @@index([subscribedAt])
}
```

### Step 5: Run Migration

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Step 6: Create Database Service

Create `lib/db.ts`:

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

### Step 7: Update API Route

Update `app/api/subscribe/route.ts`:

```typescript
import { prisma } from '@/lib/db';
import { sendWelcomeEmail } from '@/lib/mailgun';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    const trimmedEmail = email.trim().toLowerCase();

    // Check if email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email: trimmedEmail },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'You are already subscribed!', alreadySubscribed: true },
        { status: 200 }
      );
    }

    // Create new subscriber
    const subscriber = await prisma.subscriber.create({
      data: {
        email: trimmedEmail,
      },
    });

    // Send welcome email
    sendWelcomeEmail({ email: trimmedEmail }).catch((error) => {
      console.error('Failed to send welcome email:', error);
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in subscribe API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: { subscribedAt: 'desc' },
    });

    return NextResponse.json(
      { count: subscribers.length, subscribers },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Step 8: Migrate Existing Data

Create a migration script `scripts/migrate-to-postgres.ts`:

```typescript
import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function migrate() {
  const dataFile = path.join(process.cwd(), 'data', 'subscribers.json');
  const data = await fs.readFile(dataFile, 'utf-8');
  const subscribers = JSON.parse(data);

  console.log(`Migrating ${subscribers.length} subscribers...`);

  for (const sub of subscribers) {
    await prisma.subscriber.upsert({
      where: { email: sub.email },
      update: {},
      create: {
        email: sub.email,
        subscribedAt: new Date(sub.subscribedAt),
      },
    });
  }

  console.log('Migration complete!');
}

migrate()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

Run migration:
```bash
npx ts-node scripts/migrate-to-postgres.ts
```

---

## Option 2: MongoDB with Mongoose

MongoDB is great for flexibility and rapid iteration.

### Step 1: Install Dependencies

```bash
npm install mongoose
```

### Step 2: Configure Database

Update `.env`:
```env
MONGODB_URI="mongodb://localhost:27017/yago"
# Or for MongoDB Atlas:
# MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/yago"
```

### Step 3: Create Database Connection

Create `lib/mongodb.ts`:

```typescript
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
```

### Step 4: Create Model

Create `models/Subscriber.ts`:

```typescript
import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  firstName: String,
  lastName: String,
  source: {
    type: String,
    default: 'website',
  },
  emailSent: {
    type: Boolean,
    default: false,
  },
});

SubscriberSchema.index({ email: 1 });
SubscriberSchema.index({ subscribedAt: -1 });

export default mongoose.models.Subscriber ||
  mongoose.model('Subscriber', SubscriberSchema);
```

### Step 5: Update API Route

Update `app/api/subscribe/route.ts`:

```typescript
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import { sendWelcomeEmail } from '@/lib/mailgun';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email } = await request.json();
    const trimmedEmail = email.trim().toLowerCase();

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({
      email: trimmedEmail,
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'You are already subscribed!', alreadySubscribed: true },
        { status: 200 }
      );
    }

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email: trimmedEmail,
    });

    // Send welcome email
    sendWelcomeEmail({ email: trimmedEmail }).catch((error) => {
      console.error('Failed to send welcome email:', error);
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in subscribe API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const subscribers = await Subscriber.find()
      .sort({ subscribedAt: -1 })
      .lean();

    return NextResponse.json(
      { count: subscribers.length, subscribers },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Step 6: Migrate Existing Data

Create a migration script `scripts/migrate-to-mongodb.ts`:

```typescript
import mongoose from 'mongoose';
import { promises as fs } from 'fs';
import path from 'path';
import Subscriber from '../models/Subscriber';

async function migrate() {
  await mongoose.connect(process.env.MONGODB_URI!);

  const dataFile = path.join(process.cwd(), 'data', 'subscribers.json');
  const data = await fs.readFile(dataFile, 'utf-8');
  const subscribers = JSON.parse(data);

  console.log(`Migrating ${subscribers.length} subscribers...`);

  for (const sub of subscribers) {
    await Subscriber.findOneAndUpdate(
      { email: sub.email },
      {
        email: sub.email,
        subscribedAt: new Date(sub.subscribedAt),
      },
      { upsert: true }
    );
  }

  console.log('Migration complete!');
  await mongoose.disconnect();
}

migrate().catch(console.error);
```

---

## Deployment Options

### Vercel (Recommended)

1. **With Vercel Postgres**
   - Go to Vercel Dashboard → Storage → Create Database
   - Select Postgres
   - Copy connection string to `.env`

2. **With Vercel KV** (Alternative for simple key-value storage)
   - Create KV database in Vercel
   - Use `@vercel/kv` package

### Other Options

- **Supabase** (Free PostgreSQL with great features)
- **MongoDB Atlas** (Free tier available)
- **PlanetScale** (MySQL-compatible serverless)
- **Railway** (Easy deployment with databases)

---

## Backup Strategy

Once you migrate to a database, implement regular backups:

### PostgreSQL Backups
```bash
pg_dump -U username -d yago > backup.sql
```

### MongoDB Backups
```bash
mongodump --uri="mongodb://..." --out=./backup
```

### Automated Backups
- Use your hosting provider's backup features
- Set up daily backups via cron jobs
- Store backups in S3 or similar

---

## Next Steps After Migration

1. **Add more subscriber fields**:
   - Name, phone, preferences
   - Tags or categories
   - Custom fields

2. **Implement advanced features**:
   - Email unsubscribe
   - Email preferences
   - Segmentation
   - Analytics

3. **Set up monitoring**:
   - Database performance
   - Error tracking (Sentry)
   - Uptime monitoring

4. **Implement rate limiting**:
   - Prevent spam signups
   - API rate limits

---

## Need Help?

If you need assistance with the migration, consider:
- Hiring a database administrator
- Using a database migration service
- Consulting with a DevOps engineer

The current JSON-based solution will work fine for now, but plan your migration based on your growth projections.

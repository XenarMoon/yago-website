import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { sendWelcomeEmail } from '@/lib/mailgun';

const DATA_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

interface Subscriber {
  email: string;
  subscribedAt: string;
}

// Ensure data directory and file exist
async function ensureDataFile() {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('Error ensuring data file:', error);
  }
}

// Read subscribers from file
async function readSubscribers(): Promise<Subscriber[]> {
  try {
    await ensureDataFile();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading subscribers:', error);
    return [];
  }
}

// Write subscribers to file
async function writeSubscribers(subscribers: Subscriber[]) {
  try {
    await ensureDataFile();
    await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2));
  } catch (error) {
    console.error('Error writing subscribers:', error);
    throw error;
  }
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Read existing subscribers
    const subscribers = await readSubscribers();

    // Check if email already exists
    const existingSubscriber = subscribers.find(
      (sub) => sub.email === trimmedEmail
    );

    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'You are already subscribed!', alreadySubscribed: true },
        { status: 200 }
      );
    }

    // Add new subscriber
    const newSubscriber: Subscriber = {
      email: trimmedEmail,
      subscribedAt: new Date().toISOString(),
    };

    subscribers.push(newSubscriber);
    await writeSubscribers(subscribers);

    // Send welcome email (non-blocking)
    sendWelcomeEmail({ email: trimmedEmail }).catch((error) => {
      console.error('Failed to send welcome email:', error);
      // Don't fail the subscription if email fails
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

// Optional: GET endpoint to retrieve subscribers (for admin use)
export async function GET() {
  try {
    const subscribers = await readSubscribers();
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

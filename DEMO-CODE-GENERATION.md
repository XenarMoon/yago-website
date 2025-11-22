# 🎫 Demo Code Generation System

Complete system for generating and validating time-limited demo access codes.

## ✅ What's Implemented

- ✅ Code generation script with 2-hour expiration
- ✅ File-based storage (JSON)
- ✅ API validation with expiration check
- ✅ One-time use codes
- ✅ Automatic cleanup of expired codes
- ✅ NPM scripts for easy management

## 🎯 How It Works

```
Admin generates code → Code saved with 2h expiration → User enters code →
API validates & marks as used → User gets access to webapp
```

## 🚀 Generate a New Demo Code

### Method 1: Using NPM Script (Recommended)

```bash
cd D:\Projects\jovoxYago
npm run generate:demo
```

**Output:**
```
╔═══════════════════════════════════════════════╗
║       DEMO ACCESS CODE GENERATED              ║
╚═══════════════════════════════════════════════╝

  Code:       DEMO-35F6-1CC9
  Valid for:  2 hours (120 minutes)
  Expires:    11/22/2025, 4:07:35 PM
  Created:    11/22/2025, 2:07:35 PM

  Active codes: 1

  Share this code with your user:

  ┌─────────────────────┐
  │  DEMO-35F6-1CC9  │
  └─────────────────────┘
```

### Method 2: Custom Duration

Generate a code valid for custom hours:

```bash
# 1 hour
node scripts/generate-demo-code.js 1

# 24 hours
node scripts/generate-demo-code.js 24

# Default is 2 hours
node scripts/generate-demo-code.js
```

## 📋 View All Active Codes

```bash
npm run list:demos
```

**Output:**
```json
{
  "codes": [
    {
      "code": "DEMO-35F6-1CC9",
      "createdAt": "2025-11-22T14:07:35.000Z",
      "expiresAt": "2025-11-22T16:07:35.000Z",
      "used": false,
      "usedAt": null
    }
  ]
}
```

## 🔐 Code Validation

### What Happens When User Enters Code

1. **API checks code exists** in `data/demo-codes.json`
2. **Validates expiration** - Code must not be expired
3. **Checks if used** - Code can only be used once
4. **Marks as used** - Updates `used: true` and `usedAt` timestamp
5. **Returns session token** - User gets access

### Validation Rules

- ✅ Code must exist
- ✅ Code must not be expired (< 2 hours old)
- ✅ Code must not have been used before
- ✅ Code format: `DEMO-XXXX-XXXX`

### API Response

**Success:**
```json
{
  "success": true,
  "token": "demo_1732283255000_abc123",
  "expiresAt": "2025-11-22T16:07:35.000Z",
  "remainingMinutes": 115,
  "message": "Demo access granted"
}
```

**Expired:**
```json
{
  "message": "This demo code has expired"
}
```

**Already Used:**
```json
{
  "message": "This demo code has already been used"
}
```

**Invalid:**
```json
{
  "message": "Invalid demo code"
}
```

## 📁 File Structure

```
D:\Projects\jovoxYago\
├── scripts/
│   └── generate-demo-code.js    # Code generator script
├── app/api/demo/verify/
│   └── route.ts                 # Validation API
├── data/
│   └── demo-codes.json          # Codes storage (gitignored)
└── components/
    └── DemoAccessModal.tsx      # User-facing modal
```

## 🧪 Testing

### 1. Generate a Code

```bash
npm run generate:demo
```

Copy the generated code (e.g., `DEMO-35F6-1CC9`)

### 2. Test on Website

1. Visit: http://localhost:4500/
2. Click "ASK FOR DEMO" button
3. Enter the generated code
4. Should redirect to webapp

### 3. Try Using Code Again

Same code should fail with "This demo code has already been used"

### 4. Wait for Expiration

Code becomes invalid after 2 hours

## 🎨 Code Format

- **Prefix:** `DEMO-`
- **Part 1:** 4 random hex characters (uppercase)
- **Separator:** `-`
- **Part 2:** 4 random hex characters (uppercase)

**Examples:**
- `DEMO-35F6-1CC9`
- `DEMO-A1B2-C3D4`
- `DEMO-9F8E-7D6C`

## 📊 Monitoring

### Check Active Codes

```bash
npm run list:demos
```

### Manual File Check

```bash
cat data/demo-codes.json
```

### See Code Status

```json
{
  "code": "DEMO-35F6-1CC9",
  "createdAt": "2025-11-22T14:07:35.000Z",
  "expiresAt": "2025-11-22T16:07:35.000Z",
  "used": false,              // ← Not used yet
  "usedAt": null
}
```

After use:
```json
{
  "code": "DEMO-35F6-1CC9",
  "createdAt": "2025-11-22T14:07:35.000Z",
  "expiresAt": "2025-11-22T16:07:35.000Z",
  "used": true,               // ← Marked as used
  "usedAt": "2025-11-22T14:15:00.000Z"
}
```

## 🔄 Cleanup

The system automatically removes expired codes when:
- Generating a new code
- Loading codes for validation

No manual cleanup needed!

## 🚨 Security Features

1. **Time-Limited:** Codes expire after 2 hours
2. **One-Time Use:** Can't reuse same code
3. **Random Generation:** Cryptographically secure random bytes
4. **Server-Side Validation:** All checks happen on server
5. **No Client Bypass:** User can't fake validation

## 💡 Best Practices

### For Admins

1. **Generate on demand** - Don't create codes in advance
2. **Share securely** - Send codes via secure channel
3. **Monitor usage** - Check `npm run list:demos` regularly
4. **Set appropriate duration** - 2 hours is good for demos

### For Production

1. **Use database** instead of JSON file for scalability
2. **Add admin dashboard** for code management
3. **Track IP addresses** for security
4. **Add analytics** for usage patterns
5. **Rate limit** code generation to prevent abuse

## 📝 Quick Commands

```bash
# Generate code (2 hours)
npm run generate:demo

# Generate code (custom hours)
node scripts/generate-demo-code.js 24

# List all codes
npm run list:demos

# Start dev server
npm run dev
```

## 🎯 Example Workflow

**Admin:**
```bash
# Generate code
npm run generate:demo

# Copy code: DEMO-35F6-1CC9
# Send to user via Telegram/Email
```

**User:**
1. Visits http://localhost:4500/
2. Clicks "ASK FOR DEMO"
3. Enters code: DEMO-35F6-1CC9
4. Gets redirected to webapp
5. Can use for 2 hours

**System:**
- Code marked as used
- User session active
- Code expires after 2 hours
- Code cleaned up automatically

---

## 🎉 Your First Code

A code has been generated for you:

**Code:** `DEMO-35F6-1CC9`
**Valid until:** 2 hours from generation
**Status:** Active, not used yet

Test it now at: http://localhost:4500/

Click "ASK FOR DEMO" and enter this code! 🚀

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface DemoCode {
  code: string;
  createdAt: string;
  expiresAt: string;
  used: boolean;
  usedAt: string | null;
}

interface CodesData {
  codes: DemoCode[];
}

function loadCodes(): CodesData {
  const codesFile = path.join(process.cwd(), 'data', 'demo-codes.json');

  try {
    if (fs.existsSync(codesFile)) {
      const data = fs.readFileSync(codesFile, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading codes:', error);
  }

  return { codes: [] };
}

function saveCodes(data: CodesData) {
  const dataDir = path.join(process.cwd(), 'data');
  const codesFile = path.join(dataDir, 'demo-codes.json');

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(codesFile, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { message: 'Demo code is required' },
        { status: 400 }
      );
    }

    const cleanCode = code.trim().toUpperCase();

    // Load codes from file
    const data = loadCodes();

    // Find the code
    const codeIndex = data.codes.findIndex(c => c.code === cleanCode);

    if (codeIndex === -1) {
      return NextResponse.json(
        { message: 'Invalid demo code' },
        { status: 401 }
      );
    }

    const demoCode = data.codes[codeIndex];

    // Check if already used
    if (demoCode.used) {
      return NextResponse.json(
        { message: 'This demo code has already been used' },
        { status: 401 }
      );
    }

    // Check if expired
    const now = new Date();
    const expiresAt = new Date(demoCode.expiresAt);

    if (expiresAt < now) {
      return NextResponse.json(
        { message: 'This demo code has expired' },
        { status: 401 }
      );
    }

    // Mark as used
    data.codes[codeIndex].used = true;
    data.codes[codeIndex].usedAt = now.toISOString();
    saveCodes(data);

    // Generate session token
    const token = 'demo_' + Date.now() + '_' + Math.random().toString(36).substring(2);

    // Calculate remaining time
    const remainingMs = expiresAt.getTime() - now.getTime();
    const remainingMinutes = Math.round(remainingMs / (1000 * 60));

    return NextResponse.json({
      success: true,
      token,
      expiresAt: demoCode.expiresAt,
      remainingMinutes,
      message: 'Demo access granted'
    });

  } catch (error: any) {
    console.error('Demo verification error:', error);
    return NextResponse.json(
      { message: error.message || 'Failed to verify demo code' },
      { status: 500 }
    );
  }
}

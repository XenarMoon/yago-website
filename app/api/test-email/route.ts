import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/mailgun';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('=================================');
    console.log('Testing Mailgun Configuration');
    console.log('=================================');
    console.log('To Email:', email);
    console.log('API Key:', process.env.MAILGUN_API_KEY ? '✓ Set (length: ' + process.env.MAILGUN_API_KEY.length + ')' : '✗ Not set');
    console.log('Domain:', process.env.MAILGUN_DOMAIN || '✗ Not set');
    console.log('=================================');

    const result = await sendWelcomeEmail({ email });

    console.log('Email Send Result:', result);
    console.log('=================================');

    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (error: any) {
    console.error('=================================');
    console.error('Test Email Error:', error);
    console.error('Error Details:', {
      message: error.message,
      status: error.status,
      details: error.details,
      type: error.type
    });
    console.error('=================================');

    return NextResponse.json(
      {
        error: error.message || 'Failed to send test email',
        details: error.details || '',
        status: error.status || 500,
        type: error.type || 'UnknownError'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Email Test Endpoint',
    usage: 'POST to this endpoint with { "email": "test@example.com" }',
    config: {
      apiKeySet: !!process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN || 'Not set',
    }
  });
}

import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);

// Initialize Mailgun client
const mg = process.env.MAILGUN_API_KEY
  ? mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })
  : null;

interface WelcomeEmailParams {
  email: string;
  firstName?: string;
}

export async function sendWelcomeEmail({ email, firstName }: WelcomeEmailParams) {
  // If Mailgun is not configured, log and return
  if (!mg || !process.env.MAILGUN_DOMAIN) {
    console.log('Mailgun not configured. Email would be sent to:', email);
    return { success: false, message: 'Email service not configured' };
  }

  try {
    const recipientName = firstName || email.split('@')[0];

    const emailData = {
      from: `Yago Concierge <hello@${process.env.MAILGUN_DOMAIN}>`,
      to: email,
      'h:Reply-To': 'hello@yago.co.uz',
      'h:List-Unsubscribe': '<mailto:unsubscribe@yago.co.uz>, <https://yago.co.uz/unsubscribe>',
      'h:X-Mailer': 'Yago Concierge',
      'h:Precedence': 'bulk',
      subject: 'Welcome to Yago - Your Exclusive Journey Begins',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Yago</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background-color: #0A0A0A;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
            <tr>
              <td align="center" style="padding: 60px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #000000; box-shadow: 0 20px 60px rgba(255, 107, 90, 0.15);">
                  <!-- Premium Header -->
                  <tr>
                    <td align="center" style="padding: 60px 40px 40px 40px; background: linear-gradient(180deg, #0A0A0A 0%, #000000 100%);">
                      <div style="margin-bottom: 30px;">
                        <h1 style="margin: 0; font-size: 72px; font-weight: 900; color: #FF6B5A; letter-spacing: 12px; font-family: Arial Black, sans-serif; text-transform: uppercase;">
                          YAGO
                        </h1>
                      </div>
                      <div style="height: 3px; background: linear-gradient(to right, transparent, #FF6B5A, #D4AF37, #FF6B5A, transparent); margin: 0 auto; width: 80%; opacity: 0.6;"></div>
                      <p style="margin: 25px 0 0 0; color: #D4AF37; font-size: 13px; letter-spacing: 4px; text-transform: uppercase; font-weight: 600;">
                        Luxury Concierge Services
                      </p>
                    </td>
                  </tr>

                  <!-- Welcome Message -->
                  <tr>
                    <td style="padding: 50px 50px 30px 50px; text-align: center;">
                      <h2 style="margin: 0 0 15px 0; color: #FFFFFF; font-size: 32px; font-weight: 300; letter-spacing: 1px;">
                        Welcome, <span style="color: #FF6B5A; font-weight: 600;">${recipientName}</span>
                      </h2>
                      <p style="margin: 0; color: #999999; font-size: 15px; letter-spacing: 0.5px;">
                        You've joined an exclusive circle
                      </p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 0 50px 40px 50px;">
                      <div style="height: 1px; background: linear-gradient(to right, transparent 0%, #FF6B5A 20%, #D4AF37 50%, #FF6B5A 80%, transparent 100%); margin-bottom: 40px; opacity: 0.3;"></div>

                      <p style="color: #CCCCCC; font-size: 17px; line-height: 1.8; margin: 0 0 30px 0; text-align: center;">
                        Thank you for expressing interest in <strong style="color: #FF6B5A;">Yago</strong>. You've taken the first step toward experiencing luxury concierge services redefined.
                      </p>

                      <!-- Benefits Card -->
                      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border: 1px solid #FF6B5A; border-radius: 8px; padding: 35px; margin: 40px 0;">
                        <div style="text-align: center; margin-bottom: 25px;">
                          <div style="display: inline-block; background: linear-gradient(90deg, #FF6B5A, #D4AF37); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            <h3 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 2px;">
                              EARLY BIRD BENEFITS
                            </h3>
                          </div>
                          <div style="height: 2px; background: linear-gradient(to right, transparent, #FF6B5A, transparent); width: 60%; margin: 15px auto;"></div>
                        </div>

                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: flex; align-items: center;">
                                <span style="color: #FF6B5A; font-size: 20px; margin-right: 15px;">✦</span>
                                <p style="margin: 0; color: #E5E5E5; font-size: 15px; line-height: 1.6;">
                                  <strong style="color: #D4AF37;">Priority Access</strong> to our premium concierge services
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: flex; align-items: center;">
                                <span style="color: #FF6B5A; font-size: 20px; margin-right: 15px;">✦</span>
                                <p style="margin: 0; color: #E5E5E5; font-size: 15px; line-height: 1.6;">
                                  <strong style="color: #D4AF37;">Exclusive Discounts</strong> reserved for founding members
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: flex; align-items: center;">
                                <span style="color: #FF6B5A; font-size: 20px; margin-right: 15px;">✦</span>
                                <p style="margin: 0; color: #E5E5E5; font-size: 15px; line-height: 1.6;">
                                  <strong style="color: #D4AF37;">First Notification</strong> when we officially launch
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: flex; align-items: center;">
                                <span style="color: #FF6B5A; font-size: 20px; margin-right: 15px;">✦</span>
                                <p style="margin: 0; color: #E5E5E5; font-size: 15px; line-height: 1.6;">
                                  <strong style="color: #D4AF37;">Complimentary Consultation</strong> with our concierge team
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <div style="display: flex; align-items: center;">
                                <span style="color: #FF6B5A; font-size: 20px; margin-right: 15px;">✦</span>
                                <p style="margin: 0; color: #E5E5E5; font-size: 15px; line-height: 1.6;">
                                  <strong style="color: #D4AF37;">VIP Treatment</strong> for all your service requests
                                </p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <p style="color: #AAAAAA; font-size: 16px; line-height: 1.8; margin: 35px 0; text-align: center;">
                        We're crafting an unparalleled experience in luxury lifestyle management. You'll be among the first to know when we launch.
                      </p>

                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 45px 0;">
                        <a href="https://www.linkedin.com/company/yagoconcierge"
                           style="display: inline-block; background: linear-gradient(135deg, #FF6B5A 0%, #D4AF37 100%);
                                  color: #000000; text-decoration: none; padding: 18px 50px;
                                  font-weight: 700; font-size: 14px; letter-spacing: 3px; text-transform: uppercase;
                                  border-radius: 50px; box-shadow: 0 10px 30px rgba(255, 107, 90, 0.3);
                                  transition: all 0.3s ease;">
                          STAY CONNECTED
                        </a>
                      </div>

                      <div style="height: 1px; background: linear-gradient(to right, transparent, #333333, transparent); margin: 40px 0;"></div>

                      <p style="color: #666666; font-size: 13px; text-align: center; margin: 0; font-style: italic; letter-spacing: 1px;">
                        Crafted with Excellence, Delivered with Passion
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 45px 50px; text-align: center; background: linear-gradient(180deg, #000000 0%, #0A0A0A 100%); border-top: 1px solid #222222;">
                      <!-- Social Links -->
                      <div style="margin-bottom: 30px;">
                        <p style="color: #888888; font-size: 13px; margin: 0 0 20px 0; letter-spacing: 1px;">
                          CONNECT WITH US
                        </p>
                        <div style="display: inline-block;">
                          <a href="https://www.linkedin.com/company/yagoconcierge" style="display: inline-block; margin: 0 12px; text-decoration: none;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #FF6B5A, #D4AF37); display: flex; align-items: center; justify-content: center;">
                              <span style="color: #000000; font-weight: bold; font-size: 16px;">in</span>
                            </div>
                          </a>
                          <a href="https://twitter.com/yagoconcierge" style="display: inline-block; margin: 0 12px; text-decoration: none;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #FF6B5A, #D4AF37); display: flex; align-items: center; justify-content: center;">
                              <span style="color: #000000; font-weight: bold; font-size: 16px;">𝕏</span>
                            </div>
                          </a>
                          <a href="mailto:hello@yago.co.uz" style="display: inline-block; margin: 0 12px; text-decoration: none;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #FF6B5A, #D4AF37); display: flex; align-items: center; justify-content: center;">
                              <span style="color: #000000; font-weight: bold; font-size: 16px;">✉</span>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div style="height: 1px; background: linear-gradient(to right, transparent, #333333, transparent); margin: 30px auto; width: 60%;"></div>

                      <!-- Company Info -->
                      <div style="margin: 25px 0;">
                        <p style="margin: 0 0 8px 0;">
                          <span style="font-size: 28px; font-weight: 900; color: #FF6B5A; letter-spacing: 6px; font-family: Arial Black, sans-serif;">YAGO</span>
                        </p>
                        <p style="color: #666666; font-size: 11px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
                          Luxury Concierge Services
                        </p>
                      </div>

                      <div style="margin: 25px 0;">
                        <p style="color: #555555; font-size: 12px; margin: 0 0 5px 0;">
                          © ${new Date().getFullYear()} Yago Concierge. All rights reserved.
                        </p>
                        <p style="color: #444444; font-size: 11px; margin: 0; line-height: 1.6;">
                          You're receiving this email because you signed up for early access at yago.co.uz
                        </p>
                      </div>

                      <div style="margin-top: 25px; padding: 20px; background-color: #0f0f0f; border-radius: 4px;">
                        <p style="color: #888888; font-size: 11px; margin: 0 0 10px 0; line-height: 1.6;">
                          This is a one-time welcome email. You'll only hear from us when we officially launch.
                        </p>
                        <p style="color: #666666; font-size: 10px; margin: 0; line-height: 1.6;">
                          <a href="https://yago.co.uz/privacy" style="color: #888888; text-decoration: none;">Privacy Policy</a>
                          <span style="color: #444444;"> • </span>
                          <a href="https://yago.co.uz/terms" style="color: #888888; text-decoration: none;">Terms</a>
                          <span style="color: #444444;"> • </span>
                          <a href="mailto:unsubscribe@yago.co.uz?subject=Unsubscribe" style="color: #888888; text-decoration: none;">Unsubscribe</a>
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
═══════════════════════════════════════
          Y A G O
    Luxury Concierge Services
═══════════════════════════════════════

Welcome, ${recipientName}!

You've joined an exclusive circle.

Thank you for expressing interest in Yago. You've taken the first step toward experiencing luxury concierge services redefined.

───────────────────────────────────────
    EARLY BIRD BENEFITS
───────────────────────────────────────

✦ Priority Access to our premium concierge services
✦ Exclusive Discounts reserved for founding members
✦ First Notification when we officially launch
✦ Complimentary Consultation with our concierge team
✦ VIP Treatment for all your service requests

We're crafting an unparalleled experience in luxury lifestyle management. You'll be among the first to know when we launch.

───────────────────────────────────────

STAY CONNECTED
https://www.linkedin.com/company/yagoconcierge

───────────────────────────────────────

Crafted with Excellence, Delivered with Passion

© ${new Date().getFullYear()} Yago Concierge. All rights reserved.
You're receiving this email because you signed up for early access at yago.co.uz

Privacy Policy | Terms of Service | Unsubscribe
      `,
    };

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, emailData);

    console.log('Welcome email sent successfully:', response);
    return { success: true, message: 'Email sent successfully', id: response.id };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, message: 'Failed to send email', error };
  }
}

// Test email function for admin use
export async function sendTestEmail(toEmail: string) {
  return sendWelcomeEmail({ email: toEmail });
}

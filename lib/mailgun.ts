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
      subject: 'Yago Premium Kutish Ro\'yxatiga xush kelibsiz',
      html: `
        <!DOCTYPE html>
        <html lang="uz">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8f9fa;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);">

                  <!-- Header with Logo -->
                  <tr>
                    <td style="padding: 48px 48px 32px 48px; text-align: center; border-bottom: 1px solid #f0f0f0;">
                      <img src="https://yago.co.uz/logo.png" alt="YAGO" width="140" style="display: block; margin: 0 auto;">
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 48px;">
                      <p style="font-size: 18px; line-height: 1.7; color: #1a1a1a; margin: 0 0 24px 0;">
                        Assalomu alaykum,
                      </p>

                      <p style="font-size: 16px; line-height: 1.8; color: #333333; margin: 0 0 24px 0;">
                        Yagoga bo'lgan qiziqishingiz uchun chin dildan minnatdorchilik bildiramiz. Siz endi Yago'ning <strong style="color: #E85D4C;">Premium Kutish Ro'yxati</strong>ga qo'shildingiz — va bu sizga eng birinchi bo'lib eksklyuziv imkoniyatlardan foydalanish huquqini beradi.
                      </p>

                      <!-- Features Box -->
                      <div style="background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); border-left: 4px solid #E85D4C; border-radius: 0 8px 8px 0; padding: 28px 32px; margin: 32px 0;">
                        <p style="font-size: 15px; font-weight: 600; color: #1a1a1a; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px;">
                          Yago — bu:
                        </p>
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr><td style="padding: 8px 0; font-size: 15px; color: #444444; line-height: 1.6;">✨ Shaxsiy AI-konsierj</td></tr>
                          <tr><td style="padding: 8px 0; font-size: 15px; color: #444444; line-height: 1.6;">✨ Restoran, mehmonxona, transport va tadbirlar bo'yicha 24/7 yordam</td></tr>
                          <tr><td style="padding: 8px 0; font-size: 15px; color: #444444; line-height: 1.6;">✨ Premium xizmat — Dubai & London darajasida</td></tr>
                          <tr><td style="padding: 8px 0; font-size: 15px; color: #444444; line-height: 1.6;">✨ Faqat siz uchun moslashtirilgan tavsiyalar</td></tr>
                          <tr><td style="padding: 8px 0; font-size: 15px; color: #444444; line-height: 1.6;">✨ Real agentlar bilan tezkor aloqa</td></tr>
                          <tr><td style="padding: 8px 0; font-size: 15px; color: #444444; line-height: 1.6;">✨ Maxfiylik va xavfsizlikning eng yuqori darajasi</td></tr>
                        </table>
                      </div>

                      <p style="font-size: 16px; line-height: 1.8; color: #333333; margin: 0 0 24px 0;">
                        Biz hozirda Yagoni yakuniy sinovdan o'tkazmoqdamiz. Platforma ishga tushirilishi bilanoq, siz:
                      </p>

                      <!-- Benefits -->
                      <table cellpadding="0" cellspacing="0" width="100%" style="margin: 0 0 28px 0;">
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fff8f7; border-radius: 6px; margin-bottom: 8px;">
                            <span style="color: #E85D4C; font-weight: 700;">●</span>
                            <span style="font-size: 15px; color: #333333; margin-left: 8px;"><strong>Eng birinchi bo'lib</strong> kirish imkoniga ega bo'lasiz</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px;"></td></tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fff8f7; border-radius: 6px;">
                            <span style="color: #E85D4C; font-weight: 700;">●</span>
                            <span style="font-size: 15px; color: #333333; margin-left: 8px;">Eksklyuziv <strong>Founders Access</strong> sovg'alariga ega bo'lasiz</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px;"></td></tr>
                        <tr>
                          <td style="padding: 12px 16px; background-color: #fff8f7; border-radius: 6px;">
                            <span style="color: #E85D4C; font-weight: 700;">●</span>
                            <span style="font-size: 15px; color: #333333; margin-left: 8px;">Maxsus <strong>Cheklangan Premium Funksiyalarni</strong> birinchi bo'lib sinab ko'rasiz</span>
                          </td>
                        </tr>
                      </table>

                      <p style="font-size: 16px; line-height: 1.8; color: #333333; margin: 0 0 32px 0;">
                        Bu orada, sizning qiziqishingiz biz uchun juda muhim. Agar savollaringiz bo'lsa — bemalol bizga murojaat qiling.
                      </p>

                      <!-- Signature -->
                      <div style="border-top: 1px solid #eee; padding-top: 28px;">
                        <p style="font-size: 16px; color: #333333; margin: 0 0 4px 0;">
                          Hurmat bilan,
                        </p>
                        <p style="font-size: 17px; font-weight: 700; color: #E85D4C; margin: 0 0 8px 0;">
                          Yago Concierge
                        </p>
                        <p style="font-size: 13px; color: #888888; margin: 0; font-style: italic;">
                          Natex Labs tomonidan yaratilgan Premium AI Konsierj
                        </p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 32px 48px; background-color: #1a1a1a; text-align: center;">
                      <p style="font-size: 13px; color: #999999; margin: 0 0 16px 0;">
                        <a href="https://yago.co.uz" style="color: #E85D4C; text-decoration: none;">yago.co.uz</a>
                        <span style="color: #444;"> · </span>
                        <a href="mailto:hello@yago.co.uz" style="color: #999999; text-decoration: none;">hello@yago.co.uz</a>
                      </p>
                      <p style="font-size: 11px; color: #666666; margin: 0;">
                        © ${new Date().getFullYear()} Yago Concierge. Barcha huquqlar himoyalangan.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `Assalomu alaykum,

Yagoga bo'lgan qiziqishingiz uchun chin dildan minnatdorchilik bildiramiz.
Siz endi Yago'ning Premium Kutish Ro'yxatiga qo'shildingiz — va bu sizga eng birinchi bo'lib eksklyuziv imkoniyatlardan foydalanish huquqini beradi.

Yago — bu:
- Shaxsiy AI-konsierj
- Restoran, mehmonxona, transport va tadbirlar bo'yicha 24/7 yordam
- Premium xizmat — Dubai & London darajasida
- Faqat siz uchun moslashtirilgan tavsiyalar
- Real agentlar bilan tezkor aloqa
- Maxfiylik va xavfsizlikning eng yuqori darajasi

Biz hozirda Yagoni yakuniy sinovdan o'tkazmoqdamiz.
Platforma ishga tushirilishi bilanoq, siz:

- Eng birinchi bo'lib kirish imkoniga ega bo'lasiz
- Eksklyuziv Founders Access sovg'alariga ega bo'lasiz
- Maxsus Cheklangan Premium Funksiyalarni birinchi bo'lib sinab ko'rasiz

Bu orada, sizning qiziqishingiz biz uchun juda muhim.
Agar savollaringiz bo'lsa — bemalol bizga murojaat qiling.

Hurmat bilan,
Yago Concierge
Natex Labs tomonidan yaratilgan Premium AI Konsierj

---
yago.co.uz · hello@yago.co.uz
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

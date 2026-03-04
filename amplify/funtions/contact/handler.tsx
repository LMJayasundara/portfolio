import type { Schema } from '../../data/resource';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { NotificationEmail } from './emails/notification';
import { ConfirmationEmail } from './emails/confirmation';

const RECEIVER_EMAIL = 'jmlahirujayasundara@gmail.com';
const SENDER_EMAIL = 'jmlahirujayasundara@gmail.com'; // Must be SES-verified
const region = process.env.AWS_REGION || 'us-east-1';

const ses = new SESClient({ region });

export const handler: Schema['sendContactEmail']['functionHandler'] = async event => {
  const { firstName, lastName, email, message } = event.arguments;

  if (!firstName || !lastName || !email) {
    return {
      success: false,
      message: 'First name, last name, and email are required.',
    };
  }

  const fullName = `${firstName} ${lastName}`;
  const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });

  // ── 1. Send notification email to your inbox ──
  try {
    const notificationHtml = await render(
      <NotificationEmail
        fullName={fullName}
        email={email}
        message={message || undefined}
        submittedAt={now}
      />
    );

    const subject = `New portfolio contact from ${fullName}`;

    await ses.send(
      new SendEmailCommand({
        Source: `Lahiru Contact Form <${SENDER_EMAIL}>`,
        Destination: {
          ToAddresses: [RECEIVER_EMAIL],
        },
        Message: {
          Subject: {
            Data: subject,
            Charset: 'UTF-8',
          },
          Body: {
            Html: {
              Data: notificationHtml,
              Charset: 'UTF-8',
            },
          },
        },
      })
    );
  } catch (err) {
    console.error('Failed to send notification email:', err);
    return {
      success: false,
      message: 'Failed to send your message. Please try again later.',
    };
  }

  // ── 2. Send confirmation email to the sender ──
  try {
    const confirmationHtml = await render(
      <ConfirmationEmail firstName={firstName} message={message || undefined} />
    );

    const confirmSubject = `Thanks for contacting me, ${firstName}!`;

    await ses.send(
      new SendEmailCommand({
        Source: `Lahiru Jayasundara <${SENDER_EMAIL}>`,
        Destination: {
          ToAddresses: [email],
        },
        Message: {
          Subject: {
            Data: confirmSubject,
            Charset: 'UTF-8',
          },
          Body: {
            Html: {
              Data: confirmationHtml,
              Charset: 'UTF-8',
            },
          },
        },
      })
    );
  } catch (err) {
    // Confirmation email failure is non-critical — still return success
    console.error('Failed to send confirmation email:', err);
  }

  return {
    success: true,
    message: 'Your message has been sent successfully! I’ll get back to you as soon as I can.',
  };
};

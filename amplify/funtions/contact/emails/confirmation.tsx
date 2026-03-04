import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components';

interface ConfirmationEmailProps {
  firstName: string;
  message?: string;
}

export const ConfirmationEmail = ({ firstName, message }: ConfirmationEmailProps) => {
  const previewText = `Thanks for reaching out, ${firstName}! I’ll reply as soon as I can.`;

  return (
    <Html>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { color-scheme: light dark; }
              @media (prefers-color-scheme: dark) {
                .email-body { background-color: #0a0a0a !important; }
                .email-container { background-color: #0a0a0a !important; }
                .email-heading { color: #ffffff !important; }
                .email-text { color: #e5e5e5 !important; }
                .email-text-muted { color: #a3a3a3 !important; }
                .email-text-faint { color: #737373 !important; }
                .email-hr { border-color: #333333 !important; }
                .email-msg-box { background-color: #1a1a1a !important; border-left-color: #ffffff !important; }
                .email-msg-label { color: #a3a3a3 !important; }
                .email-msg-text { color: #d4d4d4 !important; }
                .email-cta { background-color: #ffffff !important; color: #000000 !important; }
                .email-link { color: #737373 !important; }
              }
            `,
          }}
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body
        className="email-body"
        style={{
          backgroundColor: '#ffffff',
          margin: 'auto',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <Container
          className="email-container"
          style={{
            marginBottom: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '20px',
            maxWidth: '500px',
          }}
        >
          {/* Title */}
          <Heading
            className="email-heading"
            style={{
              fontSize: '24px',
              color: '#0a0a0a',
              fontWeight: 'normal',
              textAlign: 'center',
              padding: '0',
              margin: '32px 0',
            }}
          >
            Thanks for reaching out, <strong>{firstName}</strong>!
          </Heading>

          <Text
            className="email-text"
            style={{ textAlign: 'left', fontSize: '14px', color: '#1a1a1a' }}
          >
            Hi {firstName},
          </Text>

          <Text
            className="email-text"
            style={{
              textAlign: 'left',
              fontSize: '14px',
              color: '#1a1a1a',
              lineHeight: '1.6',
            }}
          >
            I&apos;ve received your message and I&apos;ll get back to you as soon as possible.
            Thanks for taking the time to reach out.
          </Text>

          {/* Message summary */}
          {message && (
            <Section style={{ margin: '24px 0' }}>
              <div
                className="email-msg-box"
                style={{
                  backgroundColor: '#f5f5f5',
                  borderLeft: '3px solid #0a0a0a',
                  padding: '16px',
                  borderRadius: '0 6px 6px 0',
                }}
              >
                <Text
                  className="email-msg-label"
                  style={{
                    fontSize: '12px',
                    color: '#737373',
                    margin: '0 0 8px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Your message
                </Text>
                <Text
                  className="email-msg-text"
                  style={{
                    fontSize: '14px',
                    color: '#404040',
                    margin: '0',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message}
                </Text>
              </div>
            </Section>
          )}

          <Text
            className="email-text"
            style={{ textAlign: 'left', fontSize: '14px', color: '#1a1a1a' }}
          >
            Best regards,
            <br />
            <strong>Lahiru Jayasundara</strong>
          </Text>

          <Hr
            className="email-hr"
            style={{ borderColor: '#e5e5e5', marginTop: '32px', marginBottom: '16px' }}
          />

          {/* Footer */}
          <Text
            className="email-text-faint"
            style={{
              fontSize: '12px',
              color: '#a3a3a3',
              textAlign: 'center',
              margin: '4px 0 0',
            }}
          >
            You received this because you submitted a contact form on our website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmationEmail;

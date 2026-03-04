import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Column,
  Section,
  Text,
  Link,
} from '@react-email/components';

interface NotificationEmailProps {
  fullName: string;
  email: string;
  message?: string;
  submittedAt: string;
}

export const NotificationEmail = ({
  fullName,
  email,
  message,
  submittedAt,
}: NotificationEmailProps) => {
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
                .email-text-bold { color: #ffffff !important; }
                .email-text-muted { color: #a3a3a3 !important; }
                .email-text-faint { color: #737373 !important; }
                .email-hr { border-color: #333333 !important; }
                .email-border { border-color: #333333 !important; }
                .email-header-border { border-bottom-color: #ffffff !important; }
                .email-link { color: #60a5fa !important; }
              }
            `,
          }}
        />
      </Head>
      <Preview>New contact from {fullName}</Preview>
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
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '24px',
            maxWidth: '520px',
          }}
        >
          {/* Logo + Header */}
          <Section
            className="email-header-border"
            style={{
              borderBottom: '3px solid #0a0a0a',
              paddingBottom: '16px',
              marginBottom: '24px',
            }}
          >
            <Heading
              className="email-heading"
              style={{ fontSize: '22px', fontWeight: 'bold', margin: '0', color: '#0a0a0a' }}
            >
              New Contact Form Submission
            </Heading>
            <Text
              className="email-text-muted"
              style={{ fontSize: '14px', color: '#737373', margin: '4px 0 0' }}
            >
              {submittedAt}
            </Text>
          </Section>

          {/* Fields */}
          <Section>
            <Row
              className="email-border"
              style={{ borderBottom: '1px solid #e5e5e5', padding: '12px 0' }}
            >
              <Column style={{ width: '130px', verticalAlign: 'top' }}>
                <Text
                  className="email-text-bold"
                  style={{ fontSize: '14px', fontWeight: 600, color: '#0a0a0a', margin: '0' }}
                >
                  Name
                </Text>
              </Column>
              <Column>
                <Text
                  className="email-text"
                  style={{ fontSize: '14px', color: '#1a1a1a', margin: '0' }}
                >
                  {fullName}
                </Text>
              </Column>
            </Row>

            <Row
              className="email-border"
              style={{ borderBottom: '1px solid #e5e5e5', padding: '12px 0' }}
            >
              <Column style={{ width: '130px', verticalAlign: 'top' }}>
                <Text
                  className="email-text-bold"
                  style={{ fontSize: '14px', fontWeight: 600, color: '#0a0a0a', margin: '0' }}
                >
                  Email
                </Text>
              </Column>
              <Column>
                <Link
                  href={`mailto:${email}`}
                  className="email-link"
                  style={{ fontSize: '14px', color: '#2563eb', textDecoration: 'none' }}
                >
                  {email}
                </Link>
              </Column>
            </Row>

            <Row style={{ padding: '12px 0' }}>
              <Column style={{ width: '130px', verticalAlign: 'top' }}>
                <Text
                  className="email-text-bold"
                  style={{ fontSize: '14px', fontWeight: 600, color: '#0a0a0a', margin: '0' }}
                >
                  Message
                </Text>
              </Column>
              <Column>
                <Text
                  className="email-text"
                  style={{
                    fontSize: '14px',
                    color: '#1a1a1a',
                    margin: '0',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message || '—'}
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr
            className="email-hr"
            style={{ borderColor: '#e5e5e5', marginTop: '24px', marginBottom: '16px' }}
          />

          <Text
            className="email-text-faint"
            style={{ fontSize: '12px', color: '#a3a3a3', margin: '0' }}
          >
            Sent from your portfolio contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NotificationEmail;

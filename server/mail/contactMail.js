/**
 * HTML + text email templates for contact form (team notification + sender confirmation).
 * Uses inline styles for broad email client support.
 */

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br />');
}

const brand = {
  primary: '#0d9488',
  primaryDark: '#0f766e',
  accent: '#2563eb',
  text: '#1e293b',
  muted: '#64748b',
  bg: '#f8fafc',
  card: '#ffffff',
  border: '#e2e8f0',
};

function wrapEmail({ title, preheader, innerHtml }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <!--[if mso]><style type="text/css">table { border-collapse: collapse; }</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${brand.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${brand.bg};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:${brand.card};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);border:1px solid ${brand.border};">
          <tr>
            <td style="background:linear-gradient(135deg,${brand.primary} 0%,${brand.accent} 100%);padding:28px 24px;text-align:center;">
              <div style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">Tidyzon</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.9);margin-top:6px;">Professional cleaning &amp; home services</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px;color:${brand.text};font-size:15px;line-height:1.6;">
              ${innerHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 24px;border-top:1px solid ${brand.border};background:${brand.bg};">
              <p style="margin:0;font-size:12px;color:${brand.muted};line-height:1.5;text-align:center;">
                Tidyzon LLC &middot; 1000 Corporate Pointe, Suite 300, Culver City, CA 90230<br />
                <a href="mailto:support@tidyzon.com" style="color:${brand.primary};text-decoration:none;">support@tidyzon.com</a>
                &nbsp;|&nbsp;
                <a href="https://tidyzon.com" style="color:${brand.primary};text-decoration:none;">tidyzon.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildTeamNotificationHtml({ name, email, phone, subject, message }) {
  const inner = `
    <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${brand.primary};">New contact form submission</p>
    <h1 style="margin:0 0 20px;font-size:20px;font-weight:700;color:${brand.text};">Someone reached out</h1>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
      <tr><td style="padding:8px 0;border-bottom:1px solid ${brand.border};color:${brand.muted};font-size:13px;width:100px;">Name</td><td style="padding:8px 0;border-bottom:1px solid ${brand.border};font-weight:600;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid ${brand.border};color:${brand.muted};font-size:13px;">Email</td><td style="padding:8px 0;border-bottom:1px solid ${brand.border};"><a href="mailto:${escapeHtml(email)}" style="color:${brand.accent};">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid ${brand.border};color:${brand.muted};font-size:13px;">Phone</td><td style="padding:8px 0;border-bottom:1px solid ${brand.border};">${escapeHtml(phone || '—')}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid ${brand.border};color:${brand.muted};font-size:13px;">Subject</td><td style="padding:8px 0;border-bottom:1px solid ${brand.border};font-weight:600;">${escapeHtml(subject)}</td></tr>
    </table>
    <p style="margin:20px 0 8px;font-size:13px;font-weight:600;color:${brand.text};">Message</p>
    <div style="background:${brand.bg};border:1px solid ${brand.border};border-radius:8px;padding:16px;font-size:14px;line-height:1.6;color:${brand.text};">${escapeHtml(message)}</div>
    <p style="margin:20px 0 0;font-size:13px;color:${brand.muted};">Reply directly to this email — the visitor’s address is set as Reply-To.</p>
  `;
  return wrapEmail({
    title: `Contact: ${subject}`,
    preheader: `New message from ${name} — ${subject}`,
    innerHtml: inner,
  });
}

export function buildTeamNotificationText({ name, email, phone, subject, message }) {
  return [
    'New contact form submission — Tidyzon',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
    '',
    '—',
    'Tidyzon | support@tidyzon.com | tidyzon.com',
  ].join('\n');
}

export function buildSenderConfirmationHtml({ name, subject }) {
  const inner = `
    <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${brand.primary};">We received your message</p>
    <h1 style="margin:0 0 16px;font-size:20px;font-weight:700;color:${brand.text};">Thank you, ${escapeHtml(name)}!</h1>
    <p style="margin:0 0 16px;">Thanks for contacting <strong>Tidyzon</strong>. We’ve received your inquiry regarding <strong>${escapeHtml(subject)}</strong> and our team will get back to you as soon as possible — usually within one business day.</p>
    <p style="margin:0 0 16px;">If your request is urgent, you can also reach us at <a href="mailto:support@tidyzon.com" style="color:${brand.accent};text-decoration:none;font-weight:600;">support@tidyzon.com</a> or call <a href="tel:+16307889081" style="color:${brand.accent};text-decoration:none;font-weight:600;">(630) 788-9081</a>.</p>
    <div style="background:${brand.bg};border-left:4px solid ${brand.primary};border-radius:0 8px 8px 0;padding:14px 16px;margin:20px 0;">
      <p style="margin:0;font-size:14px;color:${brand.text};line-height:1.5;">We appreciate your interest in our cleaning and home services. We look forward to speaking with you soon.</p>
    </div>
    <p style="margin:0;font-size:13px;color:${brand.muted};">— Tidyzon Support</p>
  `;
  return wrapEmail({
    title: 'We received your message',
    preheader: `Thanks for contacting Tidyzon about "${subject}"`,
    innerHtml: inner,
  });
}

export function buildSenderConfirmationText({ name, subject }) {
  return [
    `Hi ${name},`,
    '',
    `Thank you for contacting Tidyzon regarding "${subject}".`,
    '',
    "We've received your message and our team will respond as soon as possible — usually within one business day.",
    '',
    'Urgent? Email support@tidyzon.com or call (630) 788-9081.',
    '',
    '— Tidyzon Support',
    'Tidyzon LLC | support@tidyzon.com | tidyzon.com',
  ].join('\n');
}

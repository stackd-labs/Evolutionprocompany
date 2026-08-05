import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where form notifications land, and who they come from. Both are env-driven so
// the address can change without a code deploy. FROM_EMAIL must be on a domain
// verified in Resend, otherwise sends are rejected.
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "info@epcperform.com";
export const FROM_EMAIL = process.env.FROM_EMAIL ?? "EPC <info@epcperform.com>";

const SITE = "https://epcperform.com";
const CONTACT = "info@epcperform.com";

const C = {
  dark: "#0D0A14",
  panel: "#150C1F", // inner block that sits on the gradient
  cream: "#FFF8F0",
  gold: "#F5C842",
  magenta: "#C2185B", // solid fallback where gradients aren't supported
};

/**
 * The brand gradient card, as an email.
 *
 * Two constraints shape this markup. Gradients are unsupported in Outlook's Word
 * rendering engine, so `background-color` carries a solid magenta fallback and
 * `background-image` layers the gradient on top for clients that handle it —
 * Outlook shows a solid brand colour rather than a broken box. And web fonts
 * don't load in most clients, so Bebas/Cormorant are not used at all; the brand
 * reads through colour and spacing instead of typography. Tables and inline
 * styles throughout, for the same reason.
 */
export function shell(opts: { title: string; content: string; footNote?: string }) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${opts.title}</title>
  </head>
  <body style="margin:0;padding:0;background:${C.dark};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${opts.title}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.dark};padding:28px 12px;">
      <tr>
        <td align="center">
          <!-- gradient card -->
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background-color:${C.magenta};background-image:linear-gradient(135deg,#7B2FBE 0%,#C2185B 55%,#E8334A 100%);border-radius:16px;">
            <tr>
              <td align="center" style="padding:34px 28px 22px;">
                <img src="${SITE}/email-logo.png" width="64" height="64" alt="Evolution Production Company"
                     style="display:block;width:64px;height:64px;border-radius:50%;border:0;outline:none;text-decoration:none;" />
                <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${C.cream};opacity:.9;padding-top:14px;">
                  Evolution Production Company
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 20px 20px;">
                <!-- dark inner block, so copy stays readable on the gradient -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.panel};border-radius:12px;">
                  <tr><td style="padding:30px 28px;font-family:Helvetica,Arial,sans-serif;">${opts.content}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:0 28px 28px;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.7;color:${C.cream};opacity:.85;">
                <a href="mailto:${CONTACT}" style="color:${C.cream};text-decoration:underline;">${CONTACT}</a>
                &nbsp;·&nbsp;
                <a href="${SITE}" style="color:${C.cream};text-decoration:underline;">epcperform.com</a>
                <div style="padding-top:6px;opacity:.75;">Washington DC &amp; surrounding areas</div>
                ${opts.footNote ? `<div style="padding-top:12px;opacity:.7;">${opts.footNote}</div>` : ""}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** Page heading inside the dark block. Exported alongside `shell` so an email
 *  can be rendered to HTML and inspected in a browser without sending it. */
export function heading(text: string) {
  return `<h1 style="margin:0 0 18px;font-family:Helvetica,Arial,sans-serif;font-size:21px;line-height:1.3;color:${C.gold};font-weight:bold;">${text}</h1>`;
}

/** One label/value row. Values must already be HTML-escaped by the caller. */
export function row(label: string, value: string, last = false) {
  const border = last ? "" : "border-bottom:1px solid rgba(255,255,255,.09);";
  return `<tr>
    <td style="padding:11px 0;${border}font-family:Helvetica,Arial,sans-serif;color:rgba(255,248,240,.5);font-size:11px;text-transform:uppercase;letter-spacing:1.5px;width:120px;vertical-align:top;">${label}</td>
    <td style="padding:11px 0;${border}font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:${C.cream};">${value}</td>
  </tr>`;
}

/** Body copy paragraphs for confirmation emails. */
export function paragraphs(...lines: string[]) {
  return lines
    .map(
      (l) =>
        `<p style="margin:0 0 14px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:rgba(255,248,240,.85);">${l}</p>`,
    )
    .join("");
}

/** Numbered "what happens next" list, gold numerals in a table for Outlook. */
export function steps(items: { title: string; detail: string }[]) {
  const rows = items
    .map(
      (s, i) => `
      <tr>
        <td width="34" valign="top" style="padding:0 0 16px;font-family:Helvetica,Arial,sans-serif;font-size:18px;font-weight:bold;color:${C.gold};line-height:1.4;">${i + 1}</td>
        <td valign="top" style="padding:0 0 16px;font-family:Helvetica,Arial,sans-serif;">
          <div style="font-size:14px;font-weight:bold;color:${C.cream};line-height:1.4;">${s.title}</div>
          <div style="font-size:14px;line-height:1.65;color:rgba(255,248,240,.7);padding-top:3px;">${s.detail}</div>
        </td>
      </tr>`,
    )
    .join("");

  return `
    <div style="margin:22px 0 6px;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,248,240,.45);">What happens next</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">${rows}</table>`;
}

/**
 * Notify the studio of a new submission.
 *
 * Never throws. Submissions are written to the database before mail is sent, so
 * a mail failure must not surface as a failed submission — that would tell a
 * performer to try again on data that already saved. Failures are logged for
 * the server operator instead.
 */
export async function notifyAdmin(opts: {
  subject: string;
  heading: string;
  rows: string;
  replyTo?: string;
}) {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: opts.subject,
      replyTo: opts.replyTo,
      html: shell({
        title: opts.subject,
        content:
          heading(opts.heading) +
          `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${opts.rows}</table>`,
        footNote: "Sent automatically from the EPC website.",
      }),
    });
    if (error) throw error;
    return { sent: true as const };
  } catch (err) {
    console.error("[mail] admin notification failed:", err);
    return { sent: false as const };
  }
}

/**
 * Acknowledge the person who submitted. Also never throws, for the same reason.
 */
export async function sendConfirmation(opts: {
  to: string;
  subject: string;
  heading: string;
  body: string;
  steps?: { title: string; detail: string }[];
}) {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: opts.to,
      replyTo: ADMIN_EMAIL,
      subject: opts.subject,
      html: shell({
        title: opts.subject,
        content:
          heading(opts.heading) +
          opts.body +
          (opts.steps?.length ? steps(opts.steps) : ""),
        footNote: `You received this because you submitted a form at epcperform.com.`,
      }),
    });
    if (error) throw error;
    return { sent: true as const };
  } catch (err) {
    console.error("[mail] confirmation failed:", err);
    return { sent: false as const };
  }
}

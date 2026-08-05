import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where form notifications land, and who they come from. Both are env-driven so
// the address can change without a code deploy. FROM_EMAIL must be on a domain
// verified in Resend, otherwise sends are rejected.
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "info@epcperform.com";
export const FROM_EMAIL = process.env.FROM_EMAIL ?? "EPC <info@epcperform.com>";

const BRAND = {
  dark: "#0D0A14",
  cream: "#FFF8F0",
  gold: "#F5C842",
};

/** The shared shell every EPC email sits in. */
function shell(heading: string, body: string, footer?: string) {
  return `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:${BRAND.dark};color:${BRAND.cream};border-radius:12px;">
      <h2 style="color:${BRAND.gold};margin:0 0 20px;">${heading}</h2>
      ${body}
      ${
        footer
          ? `<p style="margin:24px 0 0;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.45);font-size:12px;line-height:1.6;">${footer}</p>`
          : ""
      }
    </div>
  `;
}

/** One label/value row. Values must already be HTML-escaped by the caller. */
export function row(label: string, value: string, last = false) {
  const border = last ? "" : "border-bottom:1px solid rgba(255,255,255,.08);";
  return `<tr>
    <td style="padding:10px 0;${border}color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:130px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;${border}font-size:14px;">${value}</td>
  </tr>`;
}

/** Wraps rows in the table the admin notifications use. */
export function table(rows: string) {
  return `<table style="width:100%;border-collapse:collapse;">${rows}</table>`;
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
      html: shell(opts.heading, table(opts.rows)),
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
}) {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: opts.to,
      replyTo: ADMIN_EMAIL,
      subject: opts.subject,
      html: shell(
        opts.heading,
        opts.body,
        `Evolution Production Company · Washington DC &amp; surrounding areas<br />
         You received this because you submitted a form at epcperform.com.`,
      ),
    });
    if (error) throw error;
    return { sent: true as const };
  } catch (err) {
    console.error("[mail] confirmation failed:", err);
    return { sent: false as const };
  }
}

/** Body copy helper for confirmation emails. */
export function paragraphs(...lines: string[]) {
  return lines
    .map(
      (l) =>
        `<p style="margin:0 0 14px;font-size:14px;line-height:1.7;color:rgba(255,248,240,.8);">${l}</p>`,
    )
    .join("");
}

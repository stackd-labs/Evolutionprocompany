import { NextRequest, NextResponse } from "next/server";
import { saveSubmission } from "@/lib/submissions";
import { notifyAdmin, sendConfirmation, row, paragraphs } from "@/lib/mailer";
import { escapeHtml } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      email.length > 254 || subject.length > 200 ||
      message.length > 2000
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    await saveSubmission({
      kind: "contact",
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eEmail = escapeHtml(email);
    const eSubject = escapeHtml(subject);
    const eMessage = escapeHtml(message);

    await Promise.all([
      notifyAdmin({
        subject: `Contact: ${eSubject} — ${eName}`,
        heading: "New Contact Message",
        replyTo: email,
        rows:
          row("Name", eName) +
          row("Email", eEmail) +
          row("Subject", eSubject) +
          row("Message", eMessage, true),
      }),
      sendConfirmation({
        to: email,
        subject: "We received your message — EPC",
        heading: `Thanks for reaching out, ${escapeHtml(firstName)}`,
        body: paragraphs(
          `We&rsquo;ve received your message about &ldquo;${eSubject}&rdquo; and it&rsquo;s with the right person.`,
        ),
        steps: [
          {
            title: "Your message is with our team",
            detail: "We read everything that comes in.",
          },
          {
            title: "We get back to you soon",
            detail: "Expect a reply within 48 hours for anything that needs one.",
          },
          {
            title: "Reach us any time",
            detail:
              'Reply to this email or write to <a href="mailto:info@epcperform.com" style="color:#F5C842;text-decoration:underline;">info@epcperform.com</a>.',
          },
        ],
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again or reach us at" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { saveSubmission } from "@/lib/submissions";
import { notifyAdmin, sendConfirmation, row, paragraphs } from "@/lib/mailer";
import { escapeHtml } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, role, background, portfolio, why } = body;

    if (!firstName || !lastName || !email || !role || !background) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      email.length > 254 || (phone && phone.length > 20) ||
      role.length > 100 || background.length > 2000 ||
      (portfolio && portfolio.length > 500) ||
      (why && why.length > 2000)
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    await saveSubmission({
      kind: "application",
      firstName,
      lastName,
      email,
      phone,
      role,
      background,
      portfolio,
      why,
    });

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eEmail = escapeHtml(email);
    const ePhone = phone ? escapeHtml(phone) : null;
    const eRole = escapeHtml(role);
    const eBackground = escapeHtml(background);
    const ePortfolio = portfolio ? escapeHtml(portfolio) : null;
    const eWhy = why ? escapeHtml(why) : null;

    await Promise.all([
      notifyAdmin({
        subject: `Full Application: ${eName} — ${eRole}`,
        heading: "New Full Application",
        replyTo: email,
        rows:
          row("Name", eName) +
          row("Email", eEmail) +
          (ePhone ? row("Phone", ePhone) : "") +
          row("Role", eRole) +
          row("Background", eBackground, !ePortfolio && !eWhy) +
          (ePortfolio ? row("Portfolio", ePortfolio, !eWhy) : "") +
          (eWhy ? row("Why EPC", eWhy, true) : ""),
      }),
      sendConfirmation({
        to: email,
        subject: "Your EPC application has been received",
        heading: `Application received, ${escapeHtml(firstName)}`,
        body: paragraphs(
          `We&rsquo;ve received your application for <strong style="color:#FFF8F0;">${eRole}</strong>.`,
        ),
        steps: [
          {
            title: "We review your application",
            detail: "Our team reads every one personally.",
          },
          {
            title: "We get back to you soon",
            detail:
              "If your background fits what we&rsquo;re building, we&rsquo;ll reach out to talk through the role.",
          },
          {
            title: "Reach us any time",
            detail:
              'Reply to this email to add anything, or write to <a href="mailto:info@epcperform.com" style="color:#F5C842;text-decoration:underline;">info@epcperform.com</a>.',
          },
        ],
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again or reach us at" }, { status: 500 });
  }
}

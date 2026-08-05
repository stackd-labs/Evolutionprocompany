import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { notifyAdmin, sendConfirmation, row, paragraphs } from "@/lib/mailer";
import { escapeHtml, limit } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, organization, email, phone, partnershipType, message } = body;

    if (!firstName || !lastName || !organization || !email || !partnershipType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      organization.length > 200 || email.length > 254 ||
      (phone && phone.length > 20) || partnershipType.length > 100 ||
      (message && message.length > 2000)
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    const { error } = await supabase.from("partnership_inquiries").insert({
      first_name: limit(firstName, 100),
      last_name: limit(lastName, 100),
      organization: limit(organization, 200),
      email: limit(email, 254),
      phone: phone ? limit(phone, 20) : null,
      partnership_type: limit(partnershipType, 100),
      message: message ? limit(message, 2000) : null,
    });

    if (error) throw error;

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eOrg = escapeHtml(organization);
    const eEmail = escapeHtml(email);
    const ePhone = phone ? escapeHtml(phone) : null;
    const eType = escapeHtml(partnershipType);
    const eMessage = message ? escapeHtml(message) : null;

    await Promise.all([
      notifyAdmin({
        subject: `Partnership Inquiry: ${eType} — ${eOrg}`,
        heading: "New Partnership Inquiry",
        replyTo: email,
        rows:
          row("Name", eName) +
          row("Organization", eOrg) +
          row("Email", eEmail) +
          (ePhone ? row("Phone", ePhone) : "") +
          row("Type", eType, !eMessage) +
          (eMessage ? row("Message", eMessage, true) : ""),
      }),
      sendConfirmation({
        to: email,
        subject: "Your EPC partnership inquiry — received",
        heading: `Thanks, ${escapeHtml(firstName)}`,
        body: paragraphs(
          `We&rsquo;ve received your <strong style="color:#FFF8F0;">${eType}</strong> inquiry on behalf of ${eOrg}.`,
        ),
        steps: [
          {
            title: "We review your inquiry",
            detail: "Every EPC partnership is built around the partner, not a template.",
          },
          {
            title: "We get back to you soon",
            detail:
              "The next step is a short conversation about what you&rsquo;re trying to achieve, then we come back with a proposal.",
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
    console.error("Partnership error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again or reach us at" }, { status: 500 });
  }
}

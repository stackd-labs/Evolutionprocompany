import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { notifyAdmin, sendConfirmation, row, paragraphs } from "@/lib/mailer";
import { escapeHtml, limit } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, role, background, why } = body;

    if (!firstName || !lastName || !email || !role || !background) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      email.length > 254 || role.length > 100 ||
      background.length > 2000 || (why && why.length > 2000)
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    const { error } = await supabase.from("work_with_us").insert({
      first_name: limit(firstName, 100),
      last_name: limit(lastName, 100),
      email: limit(email, 254),
      role: limit(role, 100),
      background: limit(background, 2000),
      why: why ? limit(why, 2000) : null,
    });

    if (error) throw error;

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eEmail = escapeHtml(email);
    const eRole = escapeHtml(role);
    const eBackground = escapeHtml(background);
    const eWhy = why ? escapeHtml(why) : null;

    await Promise.all([
      notifyAdmin({
        subject: `Work With Us: ${eName} — ${eRole}`,
        heading: "New Work With Us Application",
        replyTo: email,
        rows:
          row("Name", eName) +
          row("Email", eEmail) +
          row("Role", eRole) +
          row("Background", eBackground, !eWhy) +
          (eWhy ? row("Why EPC", eWhy, true) : ""),
      }),
      sendConfirmation({
        to: email,
        subject: "Thanks for your interest in working with EPC",
        heading: `Received, ${escapeHtml(firstName)}`,
        body: paragraphs(
          `Thanks for putting yourself forward as <strong style="color:#FFF8F0;">${eRole}</strong>.`,
          "EPC is building its team and its affiliate network from the ground up, so we read every submission properly. If there&rsquo;s a fit, we&rsquo;ll be in touch to talk it through.",
          "Reply to this email any time if you have something to add.",
        ),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Work with us error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again or reach us at" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { notifyAdmin, sendConfirmation, row, paragraphs } from "@/lib/mailer";
import { UPCOMING_PRODUCTION } from "@/lib/constants";
import { escapeHtml, limit } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, age, cityState, discipline, bio } = body;

    if (!firstName || !lastName || !email || !age || !cityState || !discipline) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate age server-side
    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge < 6 || parsedAge > 99) {
      return NextResponse.json({ error: "Invalid age. Must be between 6 and 99." }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      email.length > 254 || cityState.length > 100 ||
      discipline.length > 100 || (bio && bio.length > 2000)
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    const { error } = await supabase.from("interest_registrations").insert({
      first_name: limit(firstName, 100),
      last_name: limit(lastName, 100),
      email: limit(email, 254),
      age: parsedAge,
      city_state: limit(cityState, 100),
      discipline: limit(discipline, 100),
      bio: bio ? limit(bio, 2000) : null,
    });

    if (error) throw error;

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eEmail = escapeHtml(email);
    const eCityState = escapeHtml(cityState);
    const eDiscipline = escapeHtml(discipline);
    const eBio = bio ? escapeHtml(bio) : null;

    // Mail is sent after the row is safely stored, and neither helper throws —
    // a mail outage must not tell the performer their registration failed.
    await Promise.all([
      notifyAdmin({
        subject: `New Audition Interest: ${eName} — ${eDiscipline}`,
        heading: "New Audition Interest Registration",
        replyTo: email,
        rows:
          row("Name", eName) +
          row("Email", eEmail) +
          row("Age", String(parsedAge)) +
          row("Location", eCityState) +
          row("Discipline", eDiscipline, !eBio) +
          (eBio ? row("Bio", eBio, true) : ""),
      }),
      sendConfirmation({
        to: email,
        subject: "We've got your EPC audition interest",
        heading: `Thanks, ${escapeHtml(firstName)} — you're on the list`,
        body: paragraphs(
          "Your interest in auditioning for Evolution Production Company has been received.",
          // Show name and window from UPCOMING_PRODUCTION so this can't go stale.
          `We are casting the founding company right now, ahead of <strong style="color:#FFF8F0;">${UPCOMING_PRODUCTION.name}</strong> — ${UPCOMING_PRODUCTION.descriptor}, coming to the DMV in ${UPCOMING_PRODUCTION.window}.`,
        ),
        steps: [
          {
            title: "We review your registration",
            detail: "Every one is read by our team, not filtered by a form.",
          },
          {
            title: "We get back to you soon",
            detail:
              "Auditions are by invitation after registration, so the next thing you&rsquo;ll hear from us is an invitation with dates, location, and what to prepare.",
          },
          {
            title: "Reach us any time",
            detail:
              'Reply to this email or write to <a href="mailto:info@epcperform.com" style="color:#F5C842;text-decoration:underline;">info@epcperform.com</a> if you have questions in the meantime.',
          },
        ],
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Register interest error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again or reach us at" }, { status: 500 });
  }
}

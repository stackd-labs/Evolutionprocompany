import { supabase } from "@/lib/supabase";
import { limit } from "@/lib/sanitize";

/**
 * The one place form submissions are persisted.
 *
 * Routes describe *what* was submitted; this module decides *where* it goes and
 * how it's shaped. That boundary exists so the storage backend can be replaced
 * — Supabase today, the Command Center later — by editing this file alone
 * instead of all five route handlers.
 *
 * Column truncation lives here too, since the limits are a property of the
 * storage schema rather than of the HTTP request. Routes still validate lengths
 * and reject oversized input with a 400; this is the belt to that braces.
 *
 * Unlike the mail helpers, this DOES throw. A submission that wasn't stored has
 * genuinely failed, and the caller should surface that to the visitor.
 */
export type Submission =
  | {
      kind: "interest";
      firstName: string;
      lastName: string;
      email: string;
      age: number;
      cityState: string;
      discipline: string;
      bio?: string | null;
    }
  | {
      kind: "contact";
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
    }
  | {
      kind: "application";
      firstName: string;
      lastName: string;
      email: string;
      phone?: string | null;
      role: string;
      background: string;
      portfolio?: string | null;
      why?: string | null;
    }
  | {
      kind: "workWithUs";
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      background: string;
      why?: string | null;
    }
  | {
      kind: "partnership";
      firstName: string;
      lastName: string;
      organization: string;
      email: string;
      phone?: string | null;
      partnershipType: string;
      message?: string | null;
    };

/** Where each kind of submission is stored. */
const TABLE: Record<Submission["kind"], string> = {
  interest: "interest_registrations",
  contact: "contact_messages",
  application: "applications",
  workWithUs: "work_with_us",
  partnership: "partnership_inquiries",
};

const opt = (v: string | null | undefined, max: number) =>
  v ? limit(v, max) : null;

/** Maps a submission onto its stored columns, truncated to schema limits. */
function toRow(s: Submission): Record<string, unknown> {
  const name = {
    first_name: limit(s.firstName, 100),
    last_name: limit(s.lastName, 100),
    email: limit(s.email, 254),
  };

  switch (s.kind) {
    case "interest":
      return {
        ...name,
        age: s.age,
        city_state: limit(s.cityState, 100),
        discipline: limit(s.discipline, 100),
        bio: opt(s.bio, 2000),
      };
    case "contact":
      return {
        ...name,
        subject: limit(s.subject, 200),
        message: limit(s.message, 2000),
      };
    case "application":
      return {
        ...name,
        phone: opt(s.phone, 20),
        role: limit(s.role, 100),
        background: limit(s.background, 2000),
        portfolio: opt(s.portfolio, 500),
        why: opt(s.why, 2000),
      };
    case "workWithUs":
      return {
        ...name,
        role: limit(s.role, 100),
        background: limit(s.background, 2000),
        why: opt(s.why, 2000),
      };
    case "partnership":
      return {
        ...name,
        organization: limit(s.organization, 200),
        phone: opt(s.phone, 20),
        partnership_type: limit(s.partnershipType, 100),
        message: opt(s.message, 2000),
      };
  }
}

/** Persist a submission. Throws if it could not be stored. */
export async function saveSubmission(s: Submission): Promise<void> {
  const { error } = await supabase.from(TABLE[s.kind]).insert(toRow(s));
  if (error) throw error;
}

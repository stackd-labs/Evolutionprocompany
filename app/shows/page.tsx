import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FoundingSeason from "@/components/FoundingSeason";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import {
  ASCEND,
  FUTURE_PRODUCTIONS,
  AUDITION_TIERS,
  SEEKING,
  FAQ,
  AUDITION_FAQ_QUESTIONS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ascend — The Inaugural EPC Production | Evolution Production Company",
  description:
    "Ascend is the inaugural production from Evolution Production Company — a continuous live performance experience blending skating, dance, and movement. Coming in 2027 to the DMV, with dates announced soon. We are casting the founding company now in the Washington DC area.",
};

export default function ShowsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero — Ascend flyer */}
      <section className="relative pt-24 md:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/15 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">
            Ascend — The Inaugural EPC Production, Coming 2027
          </h1>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(123,47,190,0.25)]">
            <Image
              src="/ascend-flyer.png"
              alt="Ascend — The Inaugural EPC Production. A continuous live performance experience blending skating, dance, and movement. Coming 2027, dates coming soon."
              width={1535}
              height={1024}
              priority
              className="w-full h-auto"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shows#register"
              className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Audition Now
            </Link>
            <Link
              href="/company"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Join the Company
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* MOVEMENT 1 — the production.                                   */}
      {/* Ornament budget for this page: 2 eyebrows (one per movement),   */}
      {/* 1 gradient headline (on AUDITION FOR EPC — the conversion      */}
      {/* moment, so the eye is pulled down the page toward it).         */}
      {/* ============================================================= */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 md:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src="/skater.jpg"
                alt="An EPC performer on the ice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase text-cream backdrop-blur-sm"
                  style={{ backgroundColor: ASCEND.color + "cc" }}
                >
                  ● {ASCEND.status}
                </span>
              </div>
            </div>
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                The Inaugural EPC Production
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                ONE CONTINUOUS EXPERIENCE
              </h2>
              <p className="font-dm text-cream/70 text-base leading-relaxed">
                {ASCEND.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production details */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              EVERYTHING YOU NEED TO KNOW
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
              {ASCEND.details.map((detail) => (
                <div
                  key={detail.label}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <p className="font-bebas text-xl text-gold tracking-widest mb-2">
                    {detail.label}
                  </p>
                  <p className="font-dm text-cream/70 text-sm leading-relaxed">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shows#register"
              className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Audition for Ascend
            </Link>
          </div>
        </div>
      </section>

      <FoundingSeason />

      {/* Future productions — two items, so plain rows rather than a
          bordered card grid. Repetition of one layout device isn't rhythm. */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-2xl text-cream/50 tracking-[0.2em] mb-8">
            BEYOND THE FOUNDING SEASON
          </h2>
          <div className="divide-y divide-white/[0.06]">
            {FUTURE_PRODUCTIONS.map((show) => (
              <div
                key={show.theme}
                className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-8 py-6"
              >
                <div>
                  <h3 className="font-bebas text-3xl text-cream tracking-widest leading-none">
                    {show.theme}
                  </h3>
                  <span className="font-dm text-cream/40 text-xs tracking-widest uppercase">
                    {show.window}
                  </span>
                </div>
                <p className="font-dm text-cream/60 text-sm leading-relaxed self-center">
                  {show.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* AUDITIONS — merged from the former /auditions page.            */}
      {/* ============================================================= */}

      {/* MOVEMENT 2 — the audition. Second and last eyebrow, only gradient. */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(232,51,74,0.1)_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Join the Founding Cast of Ascend
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-cream tracking-widest leading-none">
            AUDITION FOR <span className="text-gradient">EPC</span>
          </h2>
          <p className="mt-5 font-dm text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Auditions are by invitation after interest registration. This is not a
            tryout — it&apos;s the start of a career. Register your interest below.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
            <Image
              src="/auditions-flyer.png"
              alt="EPC Founding Company Auditions"
              width={600}
              height={800}
              className="w-full rounded-2xl shadow-[0_0_60px_rgba(123,47,190,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Who should audition — "Who EPC Is For" merged in; both made the same argument. */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              WE ARE SEEKING
            </h3>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-2xl mx-auto">
              If you move, you belong here — skaters and dancers at any experience level who
              want more stage time in original productions, and who are coachable,
              team-oriented, and ready to commit. We&apos;re building the founding cast now.
            </p>
          </div>

          {/* Hairline removed — these 4 colors encode nothing, unlike the
              track colors below, which carry identity across three pages. */}
          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
              {SEEKING.map((role) => (
                <div
                  key={role.title}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <h4 className="font-bebas text-2xl text-cream tracking-widest mb-2">
                    {role.title}
                  </h4>
                  <p className="font-dm text-cream/60 text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              ELIGIBILITY &amp; REQUIREMENTS
            </h3>
            <p className="mt-4 font-dm text-cream/55 text-sm max-w-xl mx-auto">
              What each track needs at the audition. For what each track involves once
              you&apos;re in, see{" "}
              <Link href="/company" className="text-gold hover:underline underline-offset-4">
                the company structure
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
              {AUDITION_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <span
                    className="block h-0.5 w-8 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${tier.color}, ${tier.color}00)` }}
                  />
                  <div
                    className="font-dm text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: tier.color }}
                  >
                    {tier.ages}
                  </div>
                  <h4 className="font-bebas text-3xl text-cream tracking-widest mb-4">
                    {tier.name}
                  </h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm font-dm text-cream/65"
                      >
                        <span className="mt-0.5" style={{ color: tier.color }}>✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bebas text-4xl text-cream tracking-widest mb-10">
            WHAT TO EXPECT
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">Come Prepared</h4>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  Bring your skates or dance attire and your music on a phone or device. A solo (60–90 sec) is only required if you&apos;re seeking a principal role — all other performers just bring their current skill level and readiness.
                </p>
              </div>
              <div>
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">Mindset Matters Most</h4>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  We&apos;re looking for coachability, stage presence, and commitment — not perfection. Come ready to take direction and work as part of a company.
                </p>
              </div>
              <div>
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">Can&apos;t Make It In Person?</h4>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  Video auditions are accepted on a rolling basis. Film in a well-lit space with clear audio and contact us for submission details.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bebas text-xl text-cream tracking-widest mb-4">What We Look For</h4>
              <div className="space-y-2 font-dm text-cream/65 text-sm leading-relaxed">
                <p>→ Technical foundation in your primary discipline</p>
                <p>→ Stage presence and ability to hold an audience</p>
                <p>→ Coachability — takes and applies direction quickly</p>
                <p>→ Full-season commitment and team mentality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audition-relevant questions only — /faq owns the full set. */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              AUDITION QUESTIONS
            </h3>
          </div>
          <FaqAccordion
            items={FAQ.filter((f) => AUDITION_FAQ_QUESTIONS.includes(f.question))}
          />
          <p className="mt-8 text-center font-dm text-cream/50 text-sm">
            Questions about membership, housing, travel, or touring?{" "}
            <Link href="/faq" className="text-gold hover:underline underline-offset-4">
              See all {FAQ.length} answers →
            </Link>
          </p>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  );
}

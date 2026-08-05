import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import Image from "next/image";
import {
  AUDITION_TIERS,
  SEEKING,
  FAQ,
  AUDITION_FAQ_QUESTIONS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join EPC | Evolution Production Company",
  description:
    "Explore EPC's company structure — Youth Company, Junior Company, Company Artists, and the Flex Track — plus training, curriculum, and membership.",
};

const curriculum = [
  {
    name: "Choreography",
    description:
      "Original choreography designed by EPC's creative team. Members learn ensemble and solo work tied to each production's artistic concept.",
  },
  {
    name: "Conditioning",
    description:
      "Strength, endurance, and functional fitness specific to ice and dance performance demands. Every member trains like an athlete.",
  },
  {
    name: "Acting & Stage Presence",
    description:
      "Performance coaching that goes beyond steps. Members develop character, emotional range, and the ability to hold an audience.",
  },
  {
    name: "Flexibility & Mobility",
    description:
      "Structured flexibility programming to prevent injury, increase range of motion, and support the demands of high-level performance.",
  },
  {
    name: "Technical Mastery",
    description:
      "Discipline-specific technique work. Skaters refine edges, jumps, and spins. Dancers deepen their foundational training.",
  },
];


const productionCycle = [
  { months: "Founding Season", show: "Ascend", perform: "Spring 2027" },
  { months: "Following", show: "Illuminate", perform: "Summer 2027" },
  { months: "Following", show: "Ignite", perform: "Winter 2027" },
];

export default function CompanyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero — two columns: Inside EPC alongside the audition flyer. */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Inside EPC
              </p>
              <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-cream tracking-widest leading-none mb-6">
                THE <span className="text-gradient">COMPANY</span>
              </h1>
              <p className="font-dm text-cream/70 text-base md:text-lg leading-relaxed mb-5">
                Evolution Production Company is more than a rehearsal program. It is a collaborative performance company
                built for artists who want to expand their experience, connect with other performers, and take part in
                original productions. Our members come from a variety of studios, skating clubs, teams, and training
                backgrounds. EPC is intended to complement the work performers are already doing by providing additional
                opportunities for performance, storytelling, creativity, and community.
              </p>
              <p className="font-dm text-cream/60 text-base leading-relaxed mb-5">
                EPC works around your existing training schedule, not against it — studio and
                club commitments come first. We proudly support the coaches, studios, and
                skating clubs that develop performers, and we are not here to replace them.
              </p>
              <p className="font-cormorant italic text-cream/60 text-xl">
                One standard. A path for every serious performer.
              </p>
            </div>

            <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/auditions-flyer.png"
                alt="EPC Founding Company Auditions"
                width={600}
                height={800}
                priority
                className="w-full rounded-2xl shadow-[0_0_60px_rgba(123,47,190,0.25)]"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company tracks */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.08)_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              OUR COMPANY STRUCTURE
            </h2>
            <p className="mt-3 font-dm text-cream/50 text-sm max-w-xl mx-auto">
              Four tracks, one standard. Placement is by age — plus a Flex Track for anyone
              who wants to be part of EPC without a performance commitment. Each card shows
              what the track involves and what it asks for at the audition.
            </p>

            {/* Stated once, prominently, instead of a skill-level line on every card. */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-gold/30 bg-gold/[0.07] px-6 py-3">
              <span className="font-bebas text-xl text-gold tracking-widest">
                ACCEPTING MEMBERS OF ALL SKILL LEVELS
              </span>
            </div>
            <p className="mt-4 font-dm text-cream/50 text-sm max-w-xl mx-auto">
              There is no minimum skill requirement for any track. And you commit one
              production cycle at a time — not the whole year. Members carry through from
              cycle to cycle, and you are free to step away at the end of any cycle.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
              {AUDITION_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="group relative bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
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
                  <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                    {tier.name}
                  </h3>
                  <p className="font-dm text-cream/70 text-sm leading-relaxed mb-5">
                    {tier.description}
                  </p>
                  {/* Requirements are merged in here rather than given their own
                      Eligibility section — with auditions now on this page, a
                      second grid of the same four tracks would just repeat. */}
                  <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mb-2">
                    At the audition
                  </p>
                  <ul className="space-y-2">
                    {tier.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm font-dm text-cream/65">
                        <span className="mt-0.5" style={{ color: tier.color }}>✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Fee philosophy stays — it explains what the company does with the
              money. All actual figures, membership and per-show, live on /details. */}
          <p className="mt-12 max-w-2xl mx-auto text-center font-dm text-cream/55 text-sm leading-relaxed">
            Membership fees go directly toward development, choreography, production costs, and costumes — so that EPC can compensate its instructors,
            staff, and performing artists at a professional standard. You&apos;re not paying to be in the company. You&apos;re investing in the infrastructure
            that makes professional performance possible.
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/details"
              className="font-dm text-sm text-gold hover:underline underline-offset-4"
            >
              See membership, fees, and performer pay →
            </Link>
          </div>
        </div>
      </section>

      {/* Training schedule */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-3">
                TRAINING SCHEDULE
              </h2>
              <p className="font-dm text-cream/60 text-sm mb-8 leading-relaxed">
                All members train on a weekly schedule throughout each production cycle.
                Skaters and dancers each have their own session structure — with intentional
                overlap built in for the crossover moments that define every EPC production.
              </p>

              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Both skaters and dancers train on-ice and off-ice each week — sessions fall on the same day so the full company trains together. Specific scheduling is shared with members at the start of each production cycle.
              </p>
              <p className="font-dm text-cream/45 text-sm leading-relaxed mt-3">
                <span className="text-gold font-semibold">Crossover:</span> Skaters and dancers share ice sessions for joint staging and full-company run-throughs — every crossover moment is rehearsed together, not pieced together at showtime.
              </p>

              <div className="mt-8">
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-4">
                  PRODUCTION CALENDAR
                </h3>
                <div className="space-y-3">
                  {productionCycle.map((cycle) => (
                    <div
                      key={cycle.show}
                      className="flex items-center gap-4 py-3"
                    >
                      <div className="w-1 h-12 rounded-full bg-gradient-brand flex-shrink-0" />
                      <div>
                        <p className="font-dm text-xs text-cream/40 tracking-widest uppercase">
                          {cycle.months} → Perform in {cycle.perform}
                        </p>
                        <p className="font-bebas text-xl text-cream tracking-widest">
                          {cycle.show}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-8">
                CURRICULUM BREAKDOWN
              </h2>
              <div className="space-y-5">
                {curriculum.map((item) => (
                  <div key={item.name}>
                    <h4 className="font-bebas text-lg text-cream tracking-widest mb-1">{item.name}</h4>
                    <p className="font-dm text-cream/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Membership — includes, perks, and fees — now lives on /details.
          components/Membership.tsx is left intact but unmounted. */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-bebas text-2xl text-cream tracking-widest mb-2">
                WHAT MEMBERSHIP INCLUDES
              </h2>
              <p className="font-dm text-cream/60 text-sm leading-relaxed max-w-xl">
                Company experiences, member perks, the unified monthly fee, the optional
                Professional Development Track, and role-based performer pay are all laid
                out on one page.
              </p>
            </div>
            <Link
              href="/details"
              className="mt-6 md:mt-0 inline-block flex-shrink-0 px-7 py-3 bg-gold text-dark font-dm font-bold text-sm rounded-lg hover:bg-gold/90 transition-all duration-200"
            >
              View Membership →
            </Link>
          </div>
        </div>
      </section>


      {/* The AUDITION FOR EPC intro is gone — the flyer it carried now sits in
          the page hero. "Auditions are by invitation after interest
          registration" is preserved on the We Are Seeking block below. */}

      {/* Who should audition */}
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
            <p className="mt-3 font-dm text-cream/45 text-sm max-w-2xl mx-auto">
              Auditions are by invitation after interest registration. This is not a
              tryout — it&apos;s the start of a career.
            </p>
          </div>

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

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            READY TO EVOLVE?
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8">
            We are casting now for the founding company. Register your interest
            and be the first to know when audition dates are announced.
          </p>
          <Link
            href="/shows#register"
            className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
          >
            Register Interest
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

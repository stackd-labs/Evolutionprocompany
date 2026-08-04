import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import Link from "next/link";
import {
  AUDITION_TIERS,
  MEMBER_EXPERIENCES,
  PERFORMER_PAY_SUMMARY,
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
  { months: "Founding Season", show: "Ascend", perform: "2027 · Dates TBA" },
  { months: "Following", show: "Illuminate", perform: "Winter 2027" },
  { months: "Following", show: "Ignite", perform: "Spring 2028" },
];

export default function CompanyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Inside EPC
            </p>
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[100px] text-cream tracking-widest leading-none mb-6">
              THE <span className="text-gradient">COMPANY</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-6">
              Evolution Production Company is more than a rehearsal program. It is a collaborative performance company
              built for artists who want to expand their experience, connect with other performers, and take part in
              original productions. Our members come from a variety of studios, skating clubs, teams, and training
              backgrounds. EPC is intended to complement the work performers are already doing by providing additional
              opportunities for performance, storytelling, creativity, and community. Whether you are looking to perform
              more often, challenge yourself artistically, or be part of a fresh and inspiring company environment,
              EPC offers a place to grow.
            </p>
            <p className="font-dm text-cream/60 text-base leading-relaxed max-w-2xl mb-6">
              EPC works around your existing training schedule, not against it — studio and
              club commitments come first. We proudly support the coaches, studios, and
              skating clubs that develop performers, and we are not here to replace them.
            </p>
            <p className="font-cormorant italic text-cream/60 text-xl">
              One standard. A path for every serious performer.
            </p>
          </div>
        </div>
      </section>

      {/* Company tracks */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.08)_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              OUR COMPANY <span className="text-gradient">STRUCTURE</span>
            </h2>
            <p className="mt-3 font-dm text-cream/50 text-sm max-w-xl mx-auto">
              Four tracks, one standard. Placement is by age — plus a Flex Track for anyone
              who wants to be part of EPC without a performance commitment. Audition
              requirements for each track are on{" "}
              <Link href="/shows" className="text-gold hover:underline underline-offset-4">
                the Ascend page
              </Link>
              .
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
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
                  <p className="font-dm text-cream/70 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee philosophy + the pay hook. Rates themselves live on /details. */}
          <p className="mt-12 max-w-2xl mx-auto text-center font-dm text-cream/55 text-sm leading-relaxed">
            Membership fees go directly toward development, choreography, production costs, and costumes — so that EPC can compensate its instructors,
            staff, and performing artists at a professional standard. You&apos;re not paying to be in the company. You&apos;re investing in the infrastructure
            that makes professional performance possible.
          </p>

          <div className="mt-10 max-w-2xl mx-auto rounded-2xl bg-[#0c0913] p-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-2">
              And EPC pays its performers
            </p>
            <p className="font-bebas text-4xl md:text-5xl text-cream tracking-widest leading-none mb-3">
              {PERFORMER_PAY_SUMMARY.perShow}{" "}
              <span className="text-xl text-cream/50">per show</span>
            </p>
            <p className="font-dm text-cream/60 text-sm leading-relaxed max-w-lg mx-auto">
              {PERFORMER_PAY_SUMMARY.eligibility} are eligible for cash compensation based on
              the role earned. {PERFORMER_PAY_SUMMARY.note}
            </p>
            <Link
              href="/details"
              className="mt-6 inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
            >
              See Full Fees &amp; Pay →
            </Link>
          </div>
        </div>
      </section>

      {/* Training schedule */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-3">
                TRAINING <span className="text-gradient">SCHEDULE</span>
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
                CURRICULUM <span className="text-gradient">BREAKDOWN</span>
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

      <Membership />

      {/* Company Experiences & Member Perks */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.1)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(194,24,91,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Experience
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              COMPANY EXPERIENCES <span className="text-gradient">&amp; MEMBER PERKS</span>
            </h2>
          </div>

          <p className="font-dm text-cream/65 text-base leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Membership is about more than rehearsals. EPC builds a full company experience — from production nights and creative retreats to career development and team outings. Open any category to see what it includes.
          </p>

          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="divide-y divide-white/[0.06]">
              {MEMBER_EXPERIENCES.map((cat) => (
                <details key={cat.title} className="group bg-[#0c0913]">
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 transition-colors duration-200 hover:bg-white/[0.02]">
                    <span
                      className="h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <h3 className="font-bebas text-xl tracking-widest text-cream">
                      {cat.title}
                    </h3>
                    <span className="ml-auto font-dm text-lg text-cream/30 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <ul className="space-y-2.5 px-5 pb-5 pl-11">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-dm text-sm leading-relaxed text-cream/65"
                      >
                        <span className="mt-0.5 flex-shrink-0" style={{ color: cat.color }}>
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            READY TO <span className="text-gradient">EVOLVE?</span>
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

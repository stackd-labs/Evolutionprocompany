import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Membership, Casting & Compensation | Evolution Production Company",
  description:
    "How EPC membership, casting, and compensation work — unified $200/mo membership, role-based pay for performers, company credits, profit sharing, and the touring production model. Full transparency, in one place.",
};

const MEMBERSHIP_INCLUDES = [
  "Rehearsals",
  "Production Participation",
  "Performance Opportunities",
  "Artistic Development",
  "Casting Opportunities",
  "Community Events",
  "Company Gatherings",
  "Production Preparation",
  "Company Communications & Resources",
];

const PRO_DEV_BENEFITS = [
  "Professional Development Workshops",
  "Industry Sessions",
  "Corporate Performance Opportunities",
  "Portfolio Development",
  "Professional Media Opportunities",
  "Leadership Opportunities",
  "Mentorship Opportunities",
  "Priority Access to Select Workshops & Events",
];

const DIVISIONS = [
  {
    name: "Youth Company",
    ages: "11 & Under",
    color: "#7B2FBE",
    description:
      "The Youth Company is designed for young performers interested in developing performance skills while participating in EPC productions. Members may include skaters, dancers, movement artists, and emerging performers who demonstrate enthusiasm, commitment, and a willingness to learn.",
    receivesLabel: "Youth Company members receive:",
    receives: [
      "Participation in EPC productions",
      "Rehearsal opportunities",
      "Artistic development",
      "Performance experience",
      "Company events and activities",
      "Eligibility for Ensemble, Featured, and Principal opportunities when appropriate",
    ],
    comp: "Youth performers under age 16 receive company credits based on the role earned within a production.",
  },
  {
    name: "Junior Company",
    ages: "12–15",
    color: "#C2185B",
    description:
      "The Junior Company is designed for developing performers seeking greater artistic responsibility and performance opportunities. Members take part in rehearsals, productions, and company activities while continuing to develop technical and performance skills.",
    receivesLabel: "Junior Company members receive:",
    receives: [
      "Participation in EPC productions",
      "Rehearsal opportunities",
      "Artistic development",
      "Performance experience",
      "Company events and activities",
      "Eligibility for Ensemble, Featured, and Principal opportunities",
    ],
    comp: "Junior performers receive company credits based on the role earned within a production.",
  },
  {
    name: "Company Artists",
    ages: "16+",
    color: "#E8334A",
    description:
      "Company Artists participate fully in EPC productions, rehearsals, and company opportunities — skaters, dancers, movement artists, specialty performers, and multidisciplinary artists. They help shape the culture, artistic direction, and future growth of EPC.",
    receivesLabel: "Company Artists receive:",
    receives: [
      "Participation in EPC productions",
      "Rehearsal opportunities",
      "Artistic development",
      "Professional performance opportunities",
      "Company events and activities",
      "Eligibility for Ensemble, Featured, and Principal opportunities",
      "Eligibility for cash compensation based on role placement",
      "Eligibility for future incentive and profit-sharing programs",
    ],
    comp: "",
  },
  {
    name: "Flex Track",
    ages: "Flexible",
    color: "#F5C842",
    description:
      "The Flex Track is designed for individuals who wish to remain connected to EPC without committing to full production participation. Flex Track participants are not required to perform, and may have different participation requirements depending on the opportunity.",
    receivesLabel: "Flex participants may take part in:",
    receives: [
      "Training opportunities",
      "Workshops",
      "Community events",
      "Networking opportunities",
      "Professional development opportunities",
      "Select company activities",
    ],
    comp: "",
  },
];

const ROLE_COMP = [
  {
    role: "Ensemble Artists",
    perShow: "$50–$100",
    perProduction: "$300–$600",
    color: "#7B2FBE",
    responsibilities: [
      "Ensemble choreography",
      "Group performance work",
      "Scene transitions",
      "Production support",
      "Company ensemble participation",
    ],
  },
  {
    role: "Featured Artists",
    perShow: "$100–$200",
    perProduction: "$600–$1,200",
    color: "#C2185B",
    responsibilities: [
      "Featured performance moments",
      "Specialty acts",
      "Supporting storytelling roles",
      "Significant artistic contributions",
    ],
  },
  {
    role: "Principal Artists",
    perShow: "$200–$400",
    perProduction: "$1,200–$2,400",
    color: "#E8334A",
    responsibilities: [
      "Lead artistic roles",
      "Featured storytelling moments",
      "Major production responsibilities",
    ],
  },
];

const COMP_FAQ = [
  {
    q: "Can anyone audition?",
    a: "Yes. Anyone meeting the age and eligibility requirements may audition for company placement.",
  },
  {
    q: "Do I need to live in Virginia?",
    a: "No. EPC welcomes performers from throughout the DMV region and beyond.",
  },
  {
    q: "Does EPC provide housing?",
    a: "Not currently. Performers are responsible for their own housing arrangements.",
  },
  {
    q: "Does EPC provide travel assistance?",
    a: "Not during the Founding Season. Future travel support programs may be introduced as the company grows.",
  },
  {
    q: "Does EPC sponsor visas?",
    a: "Not currently. Performers must be legally authorized to work and perform in the United States.",
  },
  {
    q: "Can I join without performing?",
    a: "Yes. Individuals interested in training, networking, company support, or professional development may participate through the Flex Track.",
  },
];

// Eyebrow + heading used to open each major section.
function SectionHead({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p className="font-cormorant italic text-gold text-lg tracking-widest mb-3">{eyebrow}</p>
      <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">{children}</h2>
    </div>
  );
}

export default function DetailsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Our Commitment to Transparency
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-cream tracking-widest leading-none mb-6">
            MEMBERSHIP, CASTING &amp; <span className="text-gradient">COMPENSATION</span>
          </h1>
          <p className="font-dm text-cream/65 text-base md:text-lg max-w-2xl mx-auto">
            Performers deserve clear opportunities, fair compensation, and the
            ability to share in the success of the productions they help create.
            Here&apos;s exactly how it works.
          </p>
        </div>
      </section>

      {/* Transparency statement */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 font-dm text-cream/70 text-base leading-relaxed text-center">
            <p className="font-bebas text-2xl text-cream tracking-widest">
              Every company member performs.
            </p>
            <p>
              Not every member earns the same role — but every performer
              contributes to the production and shares in the experience of
              bringing it to life. Our goal is an environment where performers
              understand the opportunities available to them, how productions
              operate, and how compensation is structured.
            </p>
            <p className="text-cream/55">
              As EPC grows, we intend to create additional opportunities for
              performers to benefit from the success of the company they help build.
            </p>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Company Membership">
            ONE MEMBERSHIP, <span className="text-gradient">EVERY DIVISION</span>
          </SectionHead>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="rounded-3xl bg-[#0c0913] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3 className="font-bebas text-3xl text-cream tracking-widest">Standard Company Membership</h3>
              </div>
              <p className="font-bebas text-5xl text-gold tracking-widest mb-3">
                $200 <span className="text-xl text-cream/50">/ month</span>
              </p>
              <p className="font-dm text-cream/60 text-sm leading-relaxed mb-6">
                EPC operates on a unified membership model — all accepted members pay
                the same monthly fee regardless of age or division. Every accepted
                member is included in company productions.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {MEMBERSHIP_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-dm text-cream/75 text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Dev Track */}
            <div className="relative rounded-3xl bg-gradient-brand p-8 shadow-[0_8px_60px_rgba(123,47,190,0.35)]">
              <div className="absolute -top-3 left-8 px-3 py-1 bg-gold text-dark text-xs font-dm font-bold rounded-full tracking-widest uppercase">
                Optional Upgrade
              </div>
              <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">Professional Development Track</h3>
              <p className="font-bebas text-5xl text-cream tracking-widest mb-3">
                $150 <span className="text-xl text-cream/70">/ production cycle</span>
              </p>
              <p className="font-dm text-cream/85 text-sm leading-relaxed mb-6">
                For performers who want to expand their opportunities beyond standard
                membership. Participation does <span className="font-semibold">not</span> affect
                casting — all members remain eligible for Ensemble, Featured, and
                Principal roles.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {PRO_DEV_BENEFITS.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-dm text-cream/90 text-sm">
                    <span className="text-gold mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Who It's For">
            COMPANY <span className="text-gradient">DIVISIONS</span>
          </SectionHead>
          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
              {DIVISIONS.map((d) => (
                <div key={d.name} className="bg-[#0c0913] p-8 flex flex-col">
                  <span
                    className="block h-0.5 w-8 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${d.color}, ${d.color}00)` }}
                  />
                  <div className="font-dm text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: d.color }}>
                    {d.ages}
                  </div>
                  <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">{d.name}</h3>
                  <p className="font-dm text-cream/60 text-sm leading-relaxed mb-5">{d.description}</p>
                  <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mb-2">
                    {d.receivesLabel}
                  </p>
                  <ul className="space-y-1.5">
                    {d.receives.map((x) => (
                      <li key={x} className="flex items-start gap-2 font-dm text-cream/75 text-sm">
                        <span style={{ color: d.color }} className="mt-0.5">✓</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                  {d.comp && (
                    <p className="mt-5 pt-4 border-t border-white/[0.06] font-dm text-cream/55 text-xs leading-relaxed">
                      {d.comp}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance & casting */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="What to Expect">
            PERFORMANCE &amp; <span className="text-gradient">CASTING</span>
          </SectionHead>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl bg-[#0c0913] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="font-dm text-cream/55 text-sm mb-2">Does membership guarantee performance opportunities?</p>
              <p className="font-bebas text-3xl text-gold tracking-widest mb-2">YES</p>
              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Accepted company members participate in EPC productions. Every company member performs.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0c0913] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="font-dm text-cream/55 text-sm mb-2">Does it guarantee a Featured or Principal role?</p>
              <p className="font-bebas text-3xl text-cream/80 tracking-widest mb-2">NOT AUTOMATICALLY</p>
              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Every member performs, but Featured and Principal roles are earned through the casting process for each production.
              </p>
            </div>
          </div>

          <div className="font-dm text-cream/70 text-sm leading-relaxed space-y-4 max-w-3xl">
            <p>
              Every performer takes part in the audition and casting process — auditioning
              for Featured or Principal opportunities, or being invited by the Artistic
              Team for consideration. Many productions need a strong ensemble to support
              the artistic vision, and role assignments vary from production to production:
              a performer may be an Ensemble Artist in one show and a Principal Artist in another.
            </p>
            <p>
              <span className="text-cream font-semibold">Junior performers can be cast as Ensemble, Featured, or Principal Artists.</span>{" "}
              Opportunities are based on the needs of the production and the casting process —
              age alone does not determine role placement.
            </p>
          </div>
        </div>
      </section>

      {/* Performance schedule */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="The Touring Model">
            PERFORMANCE <span className="text-gradient">SCHEDULE</span>
          </SectionHead>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="font-dm text-cream/70 text-sm leading-relaxed space-y-3">
              <p>EPC operates on a touring production model, with most productions structured around performance weekends. A typical cycle may include:</p>
              <ul className="space-y-2">
                {[
                  "Two performances in one city",
                  "Two performances in a second city",
                  "Additional performances based on venue availability and demand",
                  "A recovery or development weekend built into the schedule",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">→</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
              <div className="bg-[#0c0913] p-8 text-center">
                <p className="font-dm text-xs text-cream/40 tracking-widest uppercase mb-2">Minimum</p>
                <p className="font-bebas text-5xl text-cream tracking-widest">4</p>
                <p className="font-dm text-cream/50 text-xs mt-1">performances</p>
              </div>
              <div className="bg-[#0c0913] p-8 text-center">
                <p className="font-dm text-xs text-cream/40 tracking-widest uppercase mb-2">Typical</p>
                <p className="font-bebas text-5xl text-gold tracking-widest">6</p>
                <p className="font-dm text-cream/50 text-xs mt-1">performances</p>
              </div>
            </div>
          </div>
          <p className="mt-4 font-dm text-cream/40 text-xs">
            Actual schedules may vary based on production, venue, and tour plans.
          </p>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="How Performers Are Paid">
            ROLE-BASED <span className="text-gradient">COMPENSATION</span>
          </SectionHead>

          <p className="font-dm text-cream/70 text-base leading-relaxed max-w-3xl mb-8">
            Compensation is tied to the role earned within a production. EPC uses both
            cash and company credits so the company can grow while still creating
            meaningful opportunities for every performer.
          </p>

          {/* Age-based payment method */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl bg-[#0c0913] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="font-bebas text-xl text-gold tracking-widest mb-2">Artists 16 &amp; Older</p>
              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Eligible to receive <span className="text-cream font-semibold">cash compensation</span> based on the role earned within a production.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0c0913] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="font-bebas text-xl text-gold tracking-widest mb-2">Artists Under 16</p>
              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Receive <span className="text-cream font-semibold">company credits</span> — usable toward membership fees, workshops, intensives, merchandise, special events, and select future opportunities.
              </p>
            </div>
          </div>

          {/* Role comp table */}
          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
              {ROLE_COMP.map((r) => (
                <div key={r.role} className="bg-[#0c0913] p-7 flex flex-col">
                  <span
                    className="block h-0.5 w-8 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${r.color}, ${r.color}00)` }}
                  />
                  <h3 className="font-bebas text-2xl text-cream tracking-widest mb-4">{r.role}</h3>

                  <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mb-1">Per show</p>
                  <p className="font-bebas text-4xl text-gold tracking-widest leading-none mb-4">{r.perShow}</p>

                  <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mb-1">Per 6-show production</p>
                  <p className="font-bebas text-2xl text-cream tracking-widest leading-none mb-5">{r.perProduction}</p>

                  <ul className="space-y-1.5 mb-4">
                    {r.responsibilities.map((x) => (
                      <li key={x} className="flex items-start gap-2 font-dm text-cream/60 text-xs leading-relaxed">
                        <span style={{ color: r.color }} className="mt-0.5">•</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto font-dm text-cream/35 text-[11px] italic">
                    Cash or company credits based on eligibility
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profit sharing */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-12">
            <div className="absolute inset-0 bg-gradient-brand opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-lg tracking-widest mb-3">Share in the Success</p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-5">
                SUCCESS BONUSES &amp; PROFIT SHARING
              </h2>
              <p className="font-dm text-cream/85 text-base leading-relaxed max-w-2xl mb-6">
                As attendance, sponsorships, bookings, and company growth increase,
                performers may become eligible for performance bonuses, production
                incentives, profit-sharing, artistic development scholarships, travel
                support, and special recognition.
              </p>
              <p className="font-dm text-cream/70 text-sm leading-relaxed max-w-2xl">
                Profit sharing may be based on production success, ticket sales, sponsorship
                growth, corporate bookings, and overall company revenue. Specific structures
                will be announced as they are implemented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Good to Know">
            COMMON <span className="text-gradient">QUESTIONS</span>
          </SectionHead>
          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
              {COMP_FAQ.map((f) => (
                <div key={f.q} className="bg-[#0c0913] p-7">
                  <h3 className="font-bebas text-lg text-gold tracking-widest mb-2">{f.q}</h3>
                  <p className="font-dm text-cream/65 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            BUILD SOMETHING <span className="text-gradient">FROM THE START</span>
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8 max-w-xl mx-auto">
            Skater, dancer, movement artist, or emerging performer — EPC is the chance to
            help build a company from the very beginning. Register your interest or reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shows#register"
              className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Register Interest
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

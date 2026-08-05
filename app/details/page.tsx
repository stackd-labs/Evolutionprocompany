import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  MEMBERSHIP_TIERS,
  MEMBERSHIP_INCLUDES,
  MEMBER_EXPERIENCES,
  ROLE_COMPENSATION,
  AUDITION_TIERS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Membership | Evolution Production Company",
  description:
    "Everything EPC membership includes — company experiences and member perks, the unified $200/mo fee, the optional Professional Development Track, role-based performer pay from $50 to $400 per show, the touring schedule, and profit sharing.",
};

// Heading used to open each major section. The gold italic eyebrow it used to
// carry is reserved for the page hero, so it doesn't repeat down the page.
function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">{children}</h2>
    </div>
  );
}

export default function MembershipPage() {
  const [standard, proDev] = MEMBERSHIP_TIERS;

  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Our Commitment to Transparency
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-cream tracking-widest leading-none mb-6">
            EPC <span className="text-gradient">MEMBERSHIP</span>
          </h1>
          <p className="font-dm text-cream/65 text-base md:text-lg max-w-2xl mx-auto">
            What membership includes, what it costs, and what performers earn.
            Every number EPC can commit to is on this page.
          </p>
        </div>
      </section>

      {/* Two short prose blocks side by side rather than stacked — both are
          context, neither needs a full row of its own. Stacks on mobile. */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <p className="font-bebas text-2xl text-cream tracking-widest mb-3">
                Every company member performs.
              </p>
              <p className="font-dm text-cream/70 text-sm leading-relaxed">
                Not every member earns the same role, but every performer contributes to
                the production and shares in the experience of bringing it to life. As EPC
                grows, we intend to create additional ways for performers to benefit from
                the success of the company they help build.
              </p>
            </div>
            <div>
              <p className="font-bebas text-2xl text-cream tracking-widest mb-3">
                Where the fees go.
              </p>
              <p className="font-dm text-cream/70 text-sm leading-relaxed">
                Membership fees go directly toward development, choreography, production
                costs, and rehearsal space — so that EPC can compensate its instructors, staff,
                and performing artists at a professional standard. You&apos;re not paying to
                be in the company. You&apos;re investing in the infrastructure that makes
                professional performance possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What membership includes */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead>
            WHAT MEMBERSHIP INCLUDES
          </SectionHead>
          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {MEMBERSHIP_INCLUDES.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-bebas text-2xl text-cream/20 leading-none w-7">
                      0{i + 1}
                    </span>
                    <h3 className="font-bebas text-xl text-cream tracking-widest">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-dm text-cream/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company experiences & member perks — moved here from /company. */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead>
            COMPANY EXPERIENCES &amp; MEMBER PERKS
          </SectionHead>
          <p className="font-dm text-cream/65 text-base leading-relaxed max-w-3xl -mt-4 mb-8">
            Membership is about more than rehearsals. EPC builds a full company experience —
            from production nights and creative retreats to career development and team
            outings. Open any category to see what it includes.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
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
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 px-5 pb-5 pl-11">
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

      {/* Fees. Standard membership is the colour moment — it's what almost
          every member pays. The optional track sits beneath it, unstyled, so
          it reads as an add-on rather than a competing choice. */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead>
            MEMBERSHIP FEES
          </SectionHead>

          {/* Standard — the featured card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-8 md:p-10 shadow-[0_8px_60px_rgba(123,47,190,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
              <div>
                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">
                  {standard.name}
                </h3>
                <p className="font-bebas text-6xl md:text-7xl text-cream tracking-widest leading-none">
                  $200
                </p>
                <p className="font-dm text-cream/80 text-sm tracking-widest uppercase mt-1">
                  per month
                </p>
              </div>
              <div>
                <p className="font-dm text-cream/85 text-sm md:text-base leading-relaxed mb-4">
                  {standard.description}
                </p>
                <p className="font-dm text-cream text-sm leading-relaxed mb-4">
                  <span className="font-semibold">
                    Everything listed above is included
                  </span>{" "}
                  — all {standard.features.length} inclusions, for every division: Youth,
                  Junior, Company Artists, and Flex.
                </p>
                <p className="font-dm text-cream/90 text-sm leading-relaxed rounded-xl bg-dark/25 px-4 py-3">
                  <span className="font-semibold">
                    You only pay dues for the cycles you perform in.
                  </span>{" "}
                  Membership runs for the year, but performers choose which production
                  cycles they take part in, and dues are only owed for those cycles. Full
                  details are covered at the membership informational.
                </p>
              </div>
            </div>
          </div>

          {/* Optional track — deliberately not colourful */}
          <div className="mt-6 rounded-2xl bg-[#0c0913] p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full border border-cream/20 text-cream/60 text-xs font-dm font-semibold tracking-widest uppercase">
                Optional add-on
              </span>
            </div>
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
              <div>
                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">
                  {proDev.name}
                </h3>
                <p className="font-bebas text-5xl md:text-6xl text-gold tracking-widest leading-none">
                  +$150
                </p>
                <p className="font-dm text-cream/50 text-sm tracking-widest uppercase mt-1">
                  per quarter
                </p>
              </div>
              <div>
                <p className="font-dm text-cream/65 text-sm md:text-base leading-relaxed mb-6">
                  {proDev.description}
                </p>

                <p className="font-dm text-cream/75 text-sm leading-relaxed rounded-2xl border border-gold/20 bg-gold/[0.05] px-5 py-4">
                  <span className="font-semibold text-gold">This is in addition to membership.</span>{" "}
                  Members on this track pay the $200 monthly membership fee{" "}
                  <span className="text-cream font-semibold">and</span> the $150 track fee
                  each quarter.
                </p>

                <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mt-6 mb-2">
                  The track adds
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {proDev.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-dm text-cream/70 text-sm"
                    >
                      <span className="text-gold mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {"castingNote" in proDev && proDev.castingNote && (
                  <p className="mt-6 pt-4 border-t border-white/10 font-dm text-cream/55 text-xs leading-relaxed italic">
                    {proDev.castingNote}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* What the fee buys, stated in quantities the site already commits to
              elsewhere (two sessions a week, three productions a year) rather
              than in invented dollar figures. */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="font-bebas text-2xl text-cream tracking-widest mb-2">
              WHAT A YEAR OF MEMBERSHIP ACTUALLY BUYS
            </h3>
            <p className="font-dm text-cream/55 text-sm leading-relaxed max-w-2xl mb-8">
              Priced separately, the coaching alone would cost more than the membership.
              Across a full season, performing all three cycles, a member receives:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  figure: "96+",
                  label: "Coached sessions",
                  note: "Two a week — one on ice, one off — across the season.",
                },
                {
                  figure: "3",
                  label: "Full productions",
                  note: "Original choreography staged and rehearsed for each one.",
                },
                {
                  figure: "12–18",
                  label: "Live performances",
                  note: "Four to six per production, in front of real audiences.",
                },
                {
                  figure: "Included",
                  label: "Production costs",
                  note: "Staging, venue, and production costs for every show are carried by EPC.",
                },
              ].map((v) => (
                <div key={v.label}>
                  <p className="font-bebas text-4xl md:text-5xl text-gold tracking-widest leading-none mb-2">
                    {v.figure}
                  </p>
                  <p className="font-bebas text-lg text-cream tracking-widest leading-none mb-2">
                    {v.label}
                  </p>
                  <p className="font-dm text-cream/50 text-xs leading-relaxed">{v.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <p className="font-dm text-cream/60 text-sm leading-relaxed">
                Add professional media, choreography, industry workshops, and company events
                on top — then set that against{" "}
                <span className="text-cream font-semibold">$200 a month</span> during the
                cycles you perform in, the same fee for every division.
              </p>
              <p className="font-dm text-cream/50 text-sm leading-relaxed">
                <span className="text-cream/80 font-semibold">Costumes are not included.</span>{" "}
                Each production carries a one-time costume fee, separate from membership
                dues. Costs vary by production and are shared with members before each
                cycle begins.
              </p>
            </div>
          </div>

          {/* Transparency — what the fee is and is not. */}
          <div className="mt-6 rounded-2xl bg-[#0c0913] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <h3 className="font-bebas text-2xl text-cream tracking-widest mb-4">
              WE BELIEVE IN BEING STRAIGHT WITH YOU
            </h3>
            <div className="grid md:grid-cols-2 gap-8 font-dm text-sm leading-relaxed">
              <div className="space-y-3">
                <p className="text-cream/70">
                  Membership fees cover the cost of running the company: training and ice
                  time, coaching and instructor fees, choreography, rehearsal space,
                  and production expenses.
                </p>
                <p className="text-cream/70">
                  Those fees are not a wage you are buying back.{" "}
                  <span className="text-cream font-semibold">
                    You are not paying in order to be paid.
                  </span>{" "}
                  You are covering the cost of the training and the productions you take
                  part in.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-cream/70">
                  Compensation is separate, and it is earned entirely through performance.
                  It is based on the role you are cast in and the shows you actually appear
                  in —{" "}
                  <span className="text-cream font-semibold">
                    you must perform to be compensated.
                  </span>
                </p>
                <p className="text-cream/55">
                  Membership does not guarantee a payout, and no fee you pay converts into
                  compensation. The two are tracked independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casting rules and track coverage, side by side — both are short. */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="font-bebas text-3xl md:text-4xl text-cream tracking-widest mb-6">
                HOW ROLES ARE ASSIGNED
              </h2>
              <div className="font-dm text-cream/70 text-sm leading-relaxed space-y-4">
                <p>
                  <span className="text-cream font-semibold">
                    Membership guarantees you perform. It does not automatically guarantee a
                    Featured or Principal role.
                  </span>{" "}
                  Those are earned through the casting process for each production, and role
                  assignments vary from show to show — a performer may be an Ensemble Artist in
                  one production and a Principal Artist in the next.
                </p>
                <p>
                  Every performer takes part in the audition and casting process, either
                  auditioning for Featured or Principal opportunities or being invited by the
                  Artistic Team for consideration. Junior performers are eligible for Ensemble,
                  Featured, and Principal roles — age alone does not determine placement.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0c0913] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)] self-start">
              <h3 className="font-bebas text-2xl text-cream tracking-widest mb-5">
                THE FEE COVERS ALL FOUR TRACKS
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {AUDITION_TIERS.map((tier) => (
                  <div key={tier.name} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tier.color }}
                    />
                    <div>
                      <p className="font-bebas text-lg text-cream tracking-widest leading-none">
                        {tier.name}
                      </p>
                      <p className="font-dm text-cream/45 text-xs mt-1">{tier.ages}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/company"
                className="font-dm text-sm text-gold hover:underline underline-offset-4"
              >
                See what each track involves →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance schedule */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead>
            PERFORMANCE SCHEDULE
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
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
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
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead>
            ROLE-BASED COMPENSATION
          </SectionHead>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 mb-10">
            <div className="self-center">
              <p className="font-dm text-cream/70 text-base leading-relaxed mb-4">
                Compensation is tied to the role earned within a production. EPC uses both
                cash and company credits so the company can grow while still creating
                meaningful opportunities for every performer.
              </p>
              <p className="font-dm text-cream/70 text-base leading-relaxed">
                The figures below are{" "}
                <span className="text-cream font-semibold">starting rates</span>, reviewed
                each production. Compensation is negotiated case by case based on the role,
                the performer&apos;s experience, and what the production asks of them — and
                we expect these rates to grow as the company grows.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#0c0913] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="font-bebas text-xl text-gold tracking-widest mb-2">16 &amp; Older</p>
                <p className="font-dm text-cream/65 text-sm leading-relaxed">
                  Eligible for <span className="text-cream font-semibold">cash compensation</span> based on the role earned, plus future incentive and profit-sharing programs.
                </p>
              </div>
              <div className="rounded-2xl bg-[#0c0913] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="font-bebas text-xl text-gold tracking-widest mb-2">Under 16</p>
                <p className="font-dm text-cream/65 text-sm leading-relaxed">
                  Receive <span className="text-cream font-semibold">company credits</span> — usable toward membership fees, workshops, intensives, merchandise, and special events.
                </p>
              </div>
            </div>
          </div>

          {/* Role comp table */}
          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
              {ROLE_COMPENSATION.map((r) => (
                <div key={r.role} className="bg-[#0c0913] p-7 flex flex-col">
                  <span
                    className="block h-0.5 w-8 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${r.color}, ${r.color}00)` }}
                  />
                  <h3 className="font-bebas text-2xl text-cream tracking-widest mb-4">{r.role}</h3>

                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-5">
                    <div>
                      <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mb-1">
                        Per show, starting at
                      </p>
                      <p className="font-bebas text-4xl text-gold tracking-widest leading-none">{r.perShow}</p>
                    </div>
                    <div>
                      <p className="font-dm text-[11px] text-cream/40 tracking-widest uppercase mb-1">
                        Per production, from
                      </p>
                      <p className="font-bebas text-2xl text-cream tracking-widest leading-none">{r.perProduction}</p>
                    </div>
                  </div>

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

          <p className="mt-6 font-dm text-cream/55 text-sm leading-relaxed max-w-3xl">
            These are starting rates, reviewed each production. Compensation is negotiated
            case by case based on the role, the performer&apos;s experience, and what the
            production asks of them — and we expect these rates to grow as the company and
            its audiences grow.
          </p>
        </div>
      </section>

      {/* Profit sharing */}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-brand opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-bebas text-3xl md:text-4xl text-cream tracking-widest mb-4">
                  SUCCESS BONUSES &amp; PROFIT SHARING
                </h2>
                <p className="font-dm text-cream/85 text-sm md:text-base leading-relaxed">
                  As attendance, sponsorships, bookings, and company growth increase,
                  performers may become eligible for performance bonuses, production
                  incentives, profit-sharing, artistic development scholarships, travel
                  support, and special recognition.
                </p>
              </div>
              <p className="font-dm text-cream/75 text-sm leading-relaxed lg:border-l lg:border-white/20 lg:pl-12">
                Profit sharing may be based on production success, ticket sales, sponsorship
                growth, corporate bookings, and overall company revenue. Specific structures
                will be announced as they are implemented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            BUILD SOMETHING FROM THE START
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8 max-w-xl mx-auto">
            Skater, dancer, movement artist, or emerging performer — EPC is the chance to
            help build a company from the very beginning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shows#register"
              className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Register Interest
            </Link>
            <Link
              href="/faq"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Read the FAQ
            </Link>
          </div>
          <p className="mt-6 font-dm text-cream/40 text-sm">
            Questions about eligibility, housing, travel, or visas are answered on the{" "}
            <Link href="/faq" className="text-gold hover:underline underline-offset-4">
              FAQ page
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

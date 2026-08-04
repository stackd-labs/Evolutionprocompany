import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  MEMBERSHIP_TIERS,
  ROLE_COMPENSATION,
  AUDITION_TIERS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fees & Performer Pay | Evolution Production Company",
  description:
    "Exactly what EPC costs and exactly what performers earn — unified $200/mo membership, role-based pay from $50 to $400 per show, company credits, the touring schedule, and profit sharing.",
};

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
  const [standard, proDev] = MEMBERSHIP_TIERS;

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
            FEES &amp; <span className="text-gradient">PERFORMER PAY</span>
          </h1>
          <p className="font-dm text-cream/65 text-base md:text-lg max-w-2xl mx-auto">
            What membership costs, and what performers earn. Every number EPC can
            commit to is on this page.
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
              Not every member earns the same role, but every performer contributes to
              the production and shares in the experience of bringing it to life. As EPC
              grows, we intend to create additional ways for performers to benefit from
              the success of the company they help build.
            </p>
          </div>
        </div>
      </section>

      {/* Membership cost */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="What It Costs">
            ONE MEMBERSHIP, <span className="text-gradient">EVERY DIVISION</span>
          </SectionHead>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="rounded-3xl bg-[#0c0913] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
              <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">
                {standard.name}
              </h3>
              <p className="font-bebas text-5xl text-gold tracking-widest mb-3">
                $200 <span className="text-xl text-cream/50">/ month</span>
              </p>
              <p className="font-dm text-cream/60 text-sm leading-relaxed mb-6">
                {standard.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {standard.features.map((item) => (
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
              <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">
                {proDev.name}
              </h3>
              <p className="font-bebas text-5xl text-cream tracking-widest mb-3">
                $150 <span className="text-xl text-cream/70">/ production cycle</span>
              </p>
              <p className="font-dm text-cream/85 text-sm leading-relaxed mb-6">
                {proDev.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {proDev.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-dm text-cream/90 text-sm">
                    <span className="text-gold mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              {"castingNote" in proDev && proDev.castingNote && (
                <p className="mt-6 pt-4 border-t border-white/20 font-dm text-cream/80 text-xs leading-relaxed italic">
                  {proDev.castingNote}
                </p>
              )}
            </div>
          </div>

          <p className="mt-6 font-dm text-cream/45 text-sm leading-relaxed max-w-3xl">
            The fee is the same for every division — Youth, Junior, Company Artists, and Flex.
          </p>
        </div>
      </section>

      {/* Which track — pointer to /company, which owns the track descriptions */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0c0913] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <h3 className="font-bebas text-2xl text-cream tracking-widest">
                THE FEE COVERS ALL FOUR TRACKS
              </h3>
              <Link
                href="/company"
                className="font-dm text-sm text-gold hover:underline underline-offset-4"
              >
                See what each track involves →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          </div>
        </div>
      </section>

      {/* Casting rules */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="What to Expect">
            HOW ROLES ARE <span className="text-gradient">ASSIGNED</span>
          </SectionHead>

          <div className="font-dm text-cream/70 text-base leading-relaxed space-y-4 max-w-3xl">
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
                Eligible to receive <span className="text-cream font-semibold">cash compensation</span> based on the role earned within a production, plus eligibility for future incentive and profit-sharing programs.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0c0913] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="font-bebas text-xl text-gold tracking-widest mb-2">Artists Under 16</p>
              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Receive <span className="text-cream font-semibold">company credits</span> based on the role earned — usable toward membership fees, workshops, intensives, merchandise, special events, and select future opportunities.
              </p>
            </div>
          </div>

          {/* Role comp table */}
          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
              {ROLE_COMPENSATION.map((r) => (
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

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            BUILD SOMETHING <span className="text-gradient">FROM THE START</span>
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

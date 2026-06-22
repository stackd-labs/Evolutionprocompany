"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MEMBERSHIP_TIERS, MEMBERSHIP_INCLUDES } from "@/lib/constants";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Membership() {
  return (
    <section id="membership" className="py-24 md:py-32 bg-dark/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits first — what membership includes */}
        <FadeUp>
          <div className="text-center mb-12">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Value
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              WHAT MEMBERSHIP <span className="text-gradient">INCLUDES</span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mb-20 rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {MEMBERSHIP_INCLUDES.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-bebas text-2xl text-gradient leading-none w-7">
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
        </FadeUp>

        {/* Then pricing — transparent, never hidden */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Investment
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              MEMBERSHIP <span className="text-gradient">OPTIONS</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              Choose the membership path that best fits your goals, experience, and level of involvement within the company.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {MEMBERSHIP_TIERS.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.15}>
              <div
                className={`group relative h-full rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-all duration-300 ${
                  tier.featured
                    ? "bg-gradient-brand text-cream shadow-[0_8px_60px_rgba(123,47,190,0.4)]"
                    : "bg-white/[0.03] hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(245,200,66,0.08)]"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark text-xs font-dm font-bold rounded-full tracking-widest uppercase">
                    Optional Upgrade
                  </div>
                )}

                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">
                  {tier.name}
                </h3>
                <p
                  className={`font-dm text-sm mb-4 ${tier.featured ? "text-cream/80" : "text-cream/60"}`}
                >
                  {tier.description}
                </p>
                <p
                  className={`font-dm text-xs italic mb-6 ${tier.featured ? "text-gold/80" : "text-cream/40"}`}
                >
                  Full fees, compensation, and payouts are on the{" "}
                  <Link
                    href="/details"
                    className="underline underline-offset-2 hover:text-gold transition-colors"
                  >
                    Company Details
                  </Link>{" "}
                  page.
                </p>

                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm font-dm ${tier.featured ? "text-cream/90" : "text-cream/70"}`}
                    >
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {"castingNote" in tier && tier.castingNote && (
                  <p className="font-dm text-xs text-cream/50 italic mb-6 leading-relaxed border-t border-white/15 pt-4">
                    {tier.castingNote as string}
                  </p>
                )}

                <Link
                  href="/shows#register"
                  className={`block text-center px-6 py-3 rounded-lg font-dm font-semibold text-sm transition-all duration-200 ${
                    tier.featured
                      ? "bg-gold text-dark hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(245,200,66,0.4)]"
                      : "border border-cream/20 text-cream hover:border-cream/50 hover:bg-white/5"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple/20 via-magenta/20 to-red/20 text-center">
            <p className="font-dm text-cream text-sm leading-relaxed">
              <span className="font-semibold text-gold">Standard membership is $200/month for every division.</span>{" "}
              The optional Professional Development Track adds $150 per production cycle.{" "}
              <Link href="/details" className="text-gold underline underline-offset-2 hover:text-gold/80">
                See full fees &amp; compensation →
              </Link>
            </p>
          </div>
          <p className="mt-4 text-center font-dm text-cream/40 text-xs tracking-wide">
            All casting decisions are strictly audition-based. Membership tier does not
            affect role assignment. Principal and corporate spots are earned on the floor.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

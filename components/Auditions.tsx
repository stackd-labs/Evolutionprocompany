"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { AUDITION_TIERS } from "@/lib/constants";

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

export default function Auditions() {
  return (
    <section id="auditions" className="relative py-14 md:py-20 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(123,47,190,0.09)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              OUR COMPANY{" "}
              STRUCTURE
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              Four tracks, one standard. Every member earns their place through audition,
              and every member cast in a cycle performs in it.
            </p>
          </div>
        </FadeUp>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple/40 to-transparent mb-12" />

        {/* Company tracks — clean teaser */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDITION_TIERS.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.12}>
              <div
                className="pl-5 border-l-2 py-2"
                style={{ borderColor: tier.color }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase mb-3"
                  style={{
                    backgroundColor: tier.color + "22",
                    color: tier.color,
                  }}
                >
                  {tier.ages}
                </div>
                <h3 className="font-bebas text-3xl text-cream tracking-widest">
                  {tier.name}
                </h3>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Track detail lives on /company — this is a teaser only. */}
        <FadeUp delay={0.5}>
          <p className="mt-10 text-center font-dm text-cream/50 text-sm">
            <Link
              href="/company"
              className="text-gold hover:underline underline-offset-4"
            >
              See what each track involves →
            </Link>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

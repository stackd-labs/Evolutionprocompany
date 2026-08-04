"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FOUNDING_SEASON } from "@/lib/constants";

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

export default function FoundingSeason() {
  return (
    <section id="founding-season" className="relative py-14 md:py-20 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-brand">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-lg tracking-widest mb-3">
                Founding Season {FOUNDING_SEASON.year}
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-5">
                BECOME A FOUNDING MEMBER
              </h2>
              <p className="font-dm text-cream/85 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                {FOUNDING_SEASON.intro}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {FOUNDING_SEASON.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl bg-dark/20 backdrop-blur-sm px-4 py-3"
                  >
                    <span className="text-gold text-lg flex-shrink-0">✦</span>
                    <span className="font-dm font-medium text-cream text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/shows#register"
                className="cta-sheen inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
              >
                Join the Founding Company
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

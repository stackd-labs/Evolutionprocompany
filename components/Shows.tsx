"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FUTURE_PRODUCTIONS } from "@/lib/constants";

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

export default function Shows() {
  return (
    <section id="shows" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(123,47,190,0.1)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Beyond the Founding Season
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              FUTURE <span className="text-gradient">PRODUCTIONS</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {FUTURE_PRODUCTIONS.map((show, i) => (
            <FadeUp key={show.theme} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                <div
                  className="h-0.5 w-8 rounded-full mb-4"
                  style={{
                    background: `linear-gradient(90deg, ${show.color}, ${show.color}00)`,
                  }}
                />
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-bebas text-3xl text-cream tracking-widest">
                    {show.theme}
                  </h3>
                  <span className="font-dm text-cream/50 text-xs tracking-widest uppercase">
                    {show.window}
                  </span>
                </div>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  {show.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

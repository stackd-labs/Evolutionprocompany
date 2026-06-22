"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHAT_MAKES_DIFFERENT } from "@/lib/constants";

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

export default function WhatMakesDifferent() {
  return (
    <section id="different" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(194,24,91,0.1)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Experience
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              WHAT MAKES EPC{" "}
              <span className="text-gradient">DIFFERENT?</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              An immersive performance company blending skating, dance, and
              movement into continuous live experiences.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
              {WHAT_MAKES_DIFFERENT.map((card) => (
                <div
                  key={card.title}
                  className="group h-full bg-[#0c0913] p-8 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <div
                    className="h-0.5 w-10 rounded-full mb-6"
                    style={{
                      background: `linear-gradient(90deg, ${card.color}, ${card.color}00)`,
                    }}
                  />
                  <h3 className="font-bebas text-3xl text-cream tracking-widest mb-5">
                    {card.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 font-dm text-cream/70 text-base leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ backgroundColor: card.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

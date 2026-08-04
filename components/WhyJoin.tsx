"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WHY_JOIN } from "@/lib/constants";

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

export default function WhyJoin() {
  return (
    <section id="why-join" className="relative py-14 md:py-20 md:py-20 bg-dark overflow-hidden">
      {/* Gradient bg glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(123,47,190,0.1)_0%,_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_rgba(194,24,91,0.07)_0%,_transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: items */}
          <div>
            <FadeUp>
              <div className="mb-12">
                <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
                  WHY CHOOSE EPC
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-10">
              {WHY_JOIN.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.12}>
                  <div className="flex gap-5 items-start">
                    {/* Big visible number */}
                    <div className="flex-shrink-0 font-bebas text-5xl md:text-7xl leading-none text-cream/20 select-none w-10 md:w-14 text-right">
                      0{i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-bebas text-3xl md:text-4xl text-cream tracking-widest mb-2">
                        {item.title}
                      </h3>
                      <p className="font-dm text-cream/60 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <FadeUp delay={0.2}>
            <div className="relative h-[520px] md:h-[620px] rounded-2xl overflow-hidden md:sticky md:top-24">
              <Image
                src="/the-difference.png"
                alt="Dancer with smoke"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/20 to-transparent" />
              {/* Gradient border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(123,47,190,0.35)" }}
              />
              {/* Bottom label */}
              <div className="absolute bottom-6 left-6">
                <p className="font-cormorant italic text-cream/60 text-lg">
                  &ldquo;Train with purpose. Evolve without limits.&rdquo;
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

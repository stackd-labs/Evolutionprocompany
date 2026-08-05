"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ASCEND } from "@/lib/constants";

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

export default function AscendShowcase() {
  return (
    <section
      id="ascend"
      className="relative py-14 md:py-20 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(194,24,91,0.12)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-10">
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              THE INAUGURAL{" "}
              PRODUCTION
            </h2>
            <p className="mt-3 font-dm font-semibold text-cream/80 text-sm tracking-widest uppercase">
              Coming {ASCEND.performanceWindow} · Dates Coming Soon · Washington DC Area
            </p>
            <p className="mt-4 font-dm text-cream/65 text-base max-w-2xl mx-auto">
              {ASCEND.summary}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Link
            href="/shows"
            className="group block relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(123,47,190,0.22)] hover:border-gold/30 transition-all duration-300"
          >
            <Image
              src="/ascend-flyer.png"
              alt="Ascend — The Inaugural EPC Production. A continuous live performance experience blending skating, dance, and movement. Coming Spring 2027, dates coming soon."
              width={1535}
              height={1024}
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </Link>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shows#register"
              className="cta-sheen inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Audition for Ascend
            </Link>
            <Link
              href="/shows"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Production Details →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

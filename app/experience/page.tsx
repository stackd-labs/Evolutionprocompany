import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import Partners from "@/components/Partners";

export const metadata: Metadata = {
  title: "The EPC Experience | Evolution Production Company",
  description:
    "Discover what makes EPC different — a continuous, immersive performance model blending skating, dance, and movement. No recital format. On-ice seating. Up-close performance zones.",
};

const PILLARS = [
  {
    label: "Continuous Performance Flow",
    color: "#7B2FBE",
    body: "An EPC production never stops to reset. The experience moves as one continuous flow — skating, dance, and movement carrying the audience from the first moment to the last without a break in momentum.",
  },
  {
    label: "No Recital Format",
    color: "#C2185B",
    body: "There are no stop-and-start routines, no waiting between numbers, no list of acts. EPC is built as a single immersive experience — atmosphere and story flowing together, not a sequence of separate performances.",
  },
  {
    label: "Immersive Audience Layout",
    color: "#E8334A",
    body: "Staged in the round with intimate performance zones, the audience is placed inside the experience rather than seated at a distance from it. The action surrounds you.",
  },
  {
    label: "On-Ice Seating",
    color: "#F5C842",
    body: "Select seating is placed directly on the ice surface, putting the audience close enough to feel the edges, the speed, and the energy of the performers.",
  },
  {
    label: "Marley Performance Platform",
    color: "#7B2FBE",
    body: "A marley performance platform lets dancers and movement artists share the same stage as the skaters — a seamless surface where every discipline performs together as one company.",
  },
  {
    label: "Skating and Dance Integration",
    color: "#C2185B",
    body: "Skating and dance are not separate showcases that take turns. They are woven into the same choreography, the same moments, and the same story — integrated movement built for one continuous experience.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(232,51,74,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Unlike Anything You&apos;ve Seen
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            THE EPC <span className="text-gradient">EXPERIENCE</span>
          </h1>
          <p className="font-dm text-cream/70 text-base md:text-lg max-w-2xl mx-auto">
            EPC is an immersive performance company blending skating, dance, and
            movement into continuous live experiences. This is how it&apos;s
            different from a traditional skating show or recital.
          </p>
        </div>
      </section>

      {/* What makes EPC different (relocated from homepage) */}
      <WhatMakesDifferent />

      {/* Intro — the model, with imagery */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 md:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src="/the-difference.png"
                alt="An immersive EPC performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(123,47,190,0.35)" }}
              />
            </div>
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                The Performance Model
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                ONE CONTINUOUS,{" "}
                <span className="text-gradient">IMMERSIVE EVENING</span>
              </h2>
              <p className="font-dm text-cream/70 text-base leading-relaxed mb-4">
                A traditional ice show is a sequence of acts. A recital is a list
                of routines. EPC is neither. We build one continuous experience
                where skating, dance, and movement share the same space and the
                same story — performed close enough for the audience to feel it.
              </p>
              <p className="font-dm text-cream/60 text-base leading-relaxed">
                The result is an evening that flows without interruption,
                surrounds the audience, and feels unlike anything else in live
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The immersive on-ice model */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              One Ice. One Story. Endless Movement.
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              OUR IMMERSIVE{" "}
              <span className="text-gradient">ON-ICE MODEL</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-2xl mx-auto">
              We transform a full-size arena ice rink into an intimate, immersive
              experience — bringing the audience closer on three sides and adding a
              dance-floor stage by the curtain for seamless entrances, exits, and
              featured performances.
            </p>
          </div>

          <div className="space-y-8">
            <figure className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(123,47,190,0.2)]">
              <Image
                src="/immersive-onice-key.png"
                alt="EPC immersive on-ice arena layout — ice performance zone, dance floor by the curtain, audience seating on three sides, and full-width curtain for entrances and exits."
                width={1536}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(194,24,91,0.2)]">
              <Image
                src="/immersive-onice-stage.png"
                alt="EPC immersive on-ice setup in perspective — performers on the full ice surface with a dance-floor stage by the full-width curtain and audience seated close on three sides."
                width={1535}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* The pillars */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              What Sets It Apart
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              SIX THINGS THAT MAKE{" "}
              <span className="text-gradient">EPC DIFFERENT</span>
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className="group bg-[#0c0913] p-8 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-bebas text-4xl md:text-5xl leading-none text-gradient select-none">
                      0{i + 1}
                    </span>
                    <div
                      className="h-0.5 flex-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${pillar.color}, ${pillar.color}00)`,
                      }}
                    />
                  </div>
                  <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-widest mb-3">
                    {pillar.label}
                  </h3>
                  <p className="font-dm text-cream/65 text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership opportunities (relocated from homepage) */}
      <Partners />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            BE PART OF{" "}
            <span className="text-gradient">SOMETHING NEW</span>
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8 max-w-xl mx-auto">
            Ascend is the inaugural EPC production — the first chance to step into
            the experience. Audition for the founding company or bring EPC to your
            event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shows#register"
              className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Audition Now
            </Link>
            <Link
              href="/events"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Book EPC for an Event
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FoundingSeason from "@/components/FoundingSeason";
import ContactForm from "@/components/ContactForm";
import { ASCEND, FUTURE_PRODUCTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ascend — The Inaugural EPC Production | Evolution Production Company",
  description:
    "Ascend is the inaugural production from Evolution Production Company — a continuous live performance experience blending skating, dance, and movement. Coming Spring 2027 to the DMV, with dates announced soon. We are casting the founding company now in the Washington DC area.",
};

export default function ShowsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero — Ascend flyer */}
      <section className="relative pt-24 md:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/15 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">
            Ascend — The Inaugural EPC Production, Coming Spring 2027
          </h1>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(123,47,190,0.25)]">
            <Image
              src="/ascend-flyer.png"
              alt="Ascend — The Inaugural EPC Production. A continuous live performance experience blending skating, dance, and movement. Coming Spring 2027, dates coming soon."
              width={1535}
              height={1024}
              priority
              className="w-full h-auto"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shows#register"
              className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Audition Now
            </Link>
            <Link
              href="/company"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Join the Company
            </Link>
          </div>
        </div>
      </section>

      {/* Ornament budget: 1 eyebrow, 1 gradient. The gradient sits here now
          that the audition movement has moved to /company. */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 md:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src="/skater.jpg"
                alt="An EPC performer on the ice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase text-cream backdrop-blur-sm"
                  style={{ backgroundColor: ASCEND.color + "cc" }}
                >
                  ● {ASCEND.status}
                </span>
              </div>
            </div>
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                The Inaugural EPC Production
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                ONE CONTINUOUS{" "}
                <span className="text-gradient">EXPERIENCE</span>
              </h2>
              <p className="font-dm text-cream/70 text-base leading-relaxed">
                {ASCEND.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production details */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              EVERYTHING YOU NEED TO KNOW
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
              {ASCEND.details.map((detail) => (
                <div
                  key={detail.label}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <p className="font-bebas text-xl text-gold tracking-widest mb-2">
                    {detail.label}
                  </p>
                  <p className="font-dm text-cream/70 text-sm leading-relaxed">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shows#register"
              className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Audition for Ascend
            </Link>
          </div>
        </div>
      </section>

      {/* Future productions — two items, so plain rows rather than a
          bordered card grid. Repetition of one layout device isn't rhythm.
          Sits before the Founding Member card so the card closes the page. */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-2xl text-cream/50 tracking-[0.2em] mb-8">
            BEYOND THE FOUNDING SEASON
          </h2>
          <div className="divide-y divide-white/[0.06]">
            {FUTURE_PRODUCTIONS.map((show) => (
              <div
                key={show.theme}
                className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-8 py-6"
              >
                <div>
                  <h3 className="font-bebas text-3xl text-cream tracking-widest leading-none">
                    {show.theme}
                  </h3>
                  <span className="font-dm text-cream/40 text-xs tracking-widest uppercase">
                    {show.window}
                  </span>
                </div>
                <p className="font-dm text-cream/60 text-sm leading-relaxed self-center">
                  {show.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FoundingSeason />

      <ContactForm />

      <Footer />
    </main>
  );
}

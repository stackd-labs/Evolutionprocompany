import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Evolution Production Company",
  description:
    "Frequently asked questions about Evolution Production Company — performances, eligibility, company tracks, auditions, and joining the founding season.",
};

export default function FaqPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Good to Know
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h1>
          <p className="font-dm text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about performances, eligibility, the
            company tracks, and joining EPC.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="pb-20 pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-4">
            STILL HAVE <span className="text-gradient">QUESTIONS?</span>
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8 max-w-xl mx-auto">
            Reach out and we&apos;ll get you everything you need to take your next
            step with EPC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="cta-sheen inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/shows#register"
              className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
            >
              Register Interest →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

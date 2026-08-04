import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import BookingInquiryForm from "@/components/BookingInquiryForm";

export const metadata: Metadata = {
  title: "Corporate & Special Events | Evolution Production Company",
  description:
    "Book Evolution Production Company for your next event. Immersive live performance blending skating, dance, and movement — for corporate events, brand activations, festivals, private celebrations, and venue productions.",
};

const eventTypes = [
  { title: "Corporate Events", description: "Company celebrations, conferences, and brand activations.", color: "#7B2FBE" },
  { title: "Holiday Events", description: "Seasonal shows and themed performances.", color: "#C2185B" },
  { title: "Festivals & Community Events", description: "Public showcases and live entertainment.", color: "#E8334A" },
  { title: "Private Celebrations", description: "Unique entertainment for special occasions.", color: "#7B2FBE" },
  { title: "Venue Productions", description: "Collaborations with theaters, arenas, and ice rinks.", color: "#C2185B" },
  { title: "Community Partnerships", description: "Events supporting arts, sports, and local initiatives.", color: "#E8334A" },
];

export default function EventsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(232,51,74,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Corporate &amp; Special Events
            </p>
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[100px] text-cream tracking-widest leading-none mb-6">
              BRING EPC TO
              <br />
              <span className="text-gradient">YOUR EVENT</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-8">
              Immersive live performance blending skating, dance, and movement.
              Evolution Production Company creates visually exciting experiences
              designed to elevate corporate events, brand activations, festivals,
              private celebrations, and venue productions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#inquiry"
                className="px-8 py-4 bg-gold text-dark font-dm font-bold text-sm rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
              >
                Request Entertainment
              </Link>
              <Link
                href="/partnerships"
                className="px-8 py-4 border border-cream/20 text-cream font-dm font-semibold text-sm rounded-lg hover:border-cream/50 hover:bg-white/5 transition-all duration-200"
              >
                Partner With EPC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              ENTERTAINMENT THAT{" "}
              <span className="text-gradient">MOVES AN AUDIENCE</span>
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { num: "01", title: "Athletic Artistry", body: "Figure skaters and dancers performing at a professional level — technique and presentation in every movement." },
              { num: "02", title: "Original Choreography", body: "Every performance is purpose-built. No generic routines — EPC crafts experiences designed for your event and your audience." },
              { num: "03", title: "Scalable Productions", body: "From featured acts to full ensemble productions, EPC works with event organizers and venues to deliver memorable performance experiences for audiences of all sizes." },
            ].map((item, i, arr) => (
              <div key={item.num}>
                <div className="grid md:grid-cols-[120px_1fr] gap-8 py-10 items-start">
                  <div className="font-bebas text-5xl md:text-7xl lg:text-8xl text-gradient leading-none select-none">
                    {item.num}
                  </div>
                  <div className="pt-2 md:pt-4">
                    <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-widest mb-3">
                      {item.title}
                    </h3>
                    <p className="font-dm text-cream/60 text-base leading-relaxed max-w-2xl">
                      {item.body}
                    </p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-purple/40 via-magenta/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Where We Perform
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-4">
              TYPES OF EVENTS{" "}
              <span className="text-gradient">WE WORK WITH</span>
            </h2>
            <p className="font-dm text-cream/55 text-base max-w-xl">
              EPC performers can be featured at a variety of events and productions.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {eventTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <div
                    className="h-0.5 w-8 rounded-full mb-4"
                    style={{ background: `linear-gradient(90deg, ${type.color}, ${type.color}00)` }}
                  />
                  <h3 className="font-bebas text-xl text-cream tracking-widest mb-2">
                    {type.title}
                  </h3>
                  <p className="font-dm text-cream/60 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing partnerships are owned by /partnerships — pointer only. */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-bebas text-2xl text-cream tracking-widest mb-2">
                LOOKING FOR AN ONGOING PARTNERSHIP?
              </h2>
              <p className="font-dm text-cream/60 text-sm leading-relaxed max-w-xl">
                Booking a performance is a one-time engagement. Rinks, venues, and sponsors
                looking for a recurring relationship — rehearsal blocks, co-hosted
                productions, season sponsorship — should start here instead.
              </p>
            </div>
            <Link
              href="/partnerships"
              className="mt-6 md:mt-0 inline-block flex-shrink-0 px-7 py-3 border border-purple/50 text-purple font-dm font-semibold text-sm rounded-lg hover:bg-purple/10 hover:border-purple/70 transition-all duration-200"
            >
              View Partnership Options →
            </Link>
          </div>
        </div>
      </section>

      <BookingInquiryForm />

      <Footer />
    </main>
  );
}

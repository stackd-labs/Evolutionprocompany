import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import Link from "next/link";
import { AUDITION_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join EPC | Evolution Production Company",
  description:
    "Explore EPC's company structure — Youth Company, Junior Company, Company Artists, and the Flex Track — plus training, curriculum, and membership.",
};

const EXPERIENCE_CATEGORIES = [
  {
    title: "Company Bonding Experiences",
    color: "#7B2FBE",
    items: [
      "Company Kickoff Event – Start the season together with a welcome gathering for performers and creative team members.",
      "Cast Celebrations – Post-show gatherings to celebrate performances and build community.",
      "End-of-Season Celebration – A special event recognizing the accomplishments of the company.",
    ],
  },
  {
    title: "Creative Retreats",
    color: "#C2185B",
    items: [
      "Choreography Lab Days – Collaborative sessions where skaters and dancers create new pieces and experiment with ideas.",
      "Creative Development Workshops – Dedicated time to develop new show concepts and performance material.",
      "Production Creation Weekends – Intensive weekends focused on building future EPC productions.",
    ],
  },
  {
    title: "Performance Inspiration Trips",
    color: "#E8334A",
    items: [
      "Broadway & Theatre Trips – Group outings to experience professional productions and stage performances.",
      "Dance & Performance Show Visits – Attend professional dance and performance events for inspiration.",
      "Cirque-Style Production Experiences – Watch large-scale entertainment productions and study staging and artistry.",
    ],
  },
  {
    title: "Skating & Dance Event Trips",
    color: "#7B2FBE",
    items: [
      "Figure Skating Competitions – Attend major competitions to watch elite athletes perform.",
      "Theatre on Ice & Synchronized Skating Events – Experience innovative team skating productions.",
      "Professional Ice Show Performances – Attend touring ice shows to learn from professional performers.",
    ],
  },
  {
    title: "Training & Workshop Opportunities",
    color: "#C2185B",
    items: [
      "Guest Artist Workshops – Training sessions with visiting choreographers and performers.",
      "Performance & Acting Classes – Workshops focused on expression, storytelling, and stage presence.",
      "Partnering & Lift Training – Skill development sessions for collaborative performance work.",
    ],
  },
  {
    title: "Content Creation Opportunities",
    color: "#E8334A",
    items: [
      "Company Photoshoots – Professional photography sessions featuring EPC performers.",
      "Performance Video Projects – Filmed choreography and performance pieces for portfolios and promotion.",
      "Behind-the-Scenes Content Days – Creative filming sessions highlighting the company and its artists.",
    ],
  },
  {
    title: "Team Adventures",
    color: "#7B2FBE",
    items: [
      "Group Activity Nights – Fun outings such as bowling, mini golf, or team games.",
      "Adventure Experiences – Activities like rock climbing or ziplining that build trust and teamwork.",
      "Seasonal Group Outings – Summer park days, beach trips, or other seasonal adventures.",
    ],
  },
  {
    title: "Career Development",
    color: "#C2185B",
    items: [
      "Audition Preparation Workshops – Learn how to prepare for auditions and professional opportunities.",
      "Portfolio & Resume Guidance – Support in developing performance resumes and professional materials.",
      "Industry Insight Sessions – Conversations with professionals from the performing arts world.",
    ],
  },
  {
    title: "Special Getaways",
    color: "#E8334A",
    items: [
      "Weekend Creative Retreats – Short retreats focused on artistic collaboration and team building.",
      "Theme Park Performance Trips – Group outings to parks known for entertainment productions.",
      "NYC or Major City Day Trips – Travel together to experience world-class performances.",
    ],
  },
];

const curriculum = [
  {
    name: "Choreography",
    description:
      "Original choreography designed by EPC's creative team. Members learn ensemble and solo work tied to each production's artistic concept.",
  },
  {
    name: "Conditioning",
    description:
      "Strength, endurance, and functional fitness specific to ice and dance performance demands. Every member trains like an athlete.",
  },
  {
    name: "Acting & Stage Presence",
    description:
      "Performance coaching that goes beyond steps. Members develop character, emotional range, and the ability to hold an audience.",
  },
  {
    name: "Flexibility & Mobility",
    description:
      "Structured flexibility programming to prevent injury, increase range of motion, and support the demands of high-level performance.",
  },
  {
    name: "Technical Mastery",
    description:
      "Discipline-specific technique work. Skaters refine edges, jumps, and spins. Dancers deepen their foundational training.",
  },
];


const productionCycle = [
  { months: "Founding Season", show: "Ascend", perform: "September 2026" },
  { months: "Following", show: "Illuminate", perform: "Winter 2026" },
  { months: "Following", show: "Ignite", perform: "Spring 2027" },
];

export default function CompanyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Inside EPC
            </p>
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[100px] text-cream tracking-widest leading-none mb-6">
              THE <span className="text-gradient">COMPANY</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-6">
              Evolution Production Company is more than a rehearsal program. It is a collaborative performance company
              built for artists who want to expand their experience, connect with other performers, and take part in
              original productions. Our members come from a variety of studios, skating clubs, teams, and training
              backgrounds. EPC is intended to complement the work performers are already doing by providing additional
              opportunities for performance, storytelling, creativity, and community. Whether you are looking to perform
              more often, challenge yourself artistically, or be part of a fresh and inspiring company environment,
              EPC offers a place to grow.
            </p>
            <p className="font-cormorant italic text-cream/60 text-xl">
              One standard. A path for every serious performer.
            </p>
          </div>
        </div>
      </section>

      {/* Built to work alongside */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Our Philosophy
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                BUILT TO WORK ALONGSIDE{" "}
                <span className="text-gradient">YOUR TRAINING</span>
              </h2>
              <p className="font-dm text-cream/65 text-base leading-relaxed">
                We proudly support the coaches, studios, skating clubs, and programs that help performers develop
                their craft. EPC is not designed to replace a performer&apos;s home program. Instead, we provide an
                additional outlet for performance, artistry, and collaboration. We believe the strongest artists
                grow through diverse experiences, strong mentorship, and opportunities to work with others
                across disciplines.
              </p>
            </div>
            <div className="space-y-4 font-dm text-cream/60 text-base leading-relaxed">
              <p>EPC works around your existing training schedule — not against it. Studio and club commitments come first.</p>
              <p>Skaters, dancers, and performers from every background train together. The strongest artists grow through diverse experiences and real stage time beyond competitions and recitals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company tracks */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.08)_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              OUR COMPANY <span className="text-gradient">STRUCTURE</span>
            </h2>
            <p className="mt-3 font-dm text-cream/50 text-sm max-w-xl mx-auto">
              All casting is audition-based. Principal spots and corporate spots are earned
              on the floor — not by membership tier or age.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
              {AUDITION_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="group relative bg-[#0c0913] p-7 transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <span
                    className="block h-0.5 w-8 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${tier.color}, ${tier.color}00)` }}
                  />
                  <div
                    className="font-dm text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: tier.color }}
                  >
                    {tier.ages}
                  </div>
                  <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                    {tier.name}
                  </h3>
                  <p className="font-dm text-cream/70 text-sm leading-relaxed mb-5">
                    {tier.description}
                  </p>
                  <ul className="space-y-2">
                    {tier.requirements.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-dm text-cream/65">
                        <span className="mt-0.5" style={{ color: tier.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Fee philosophy note + link to full details */}
          <p className="mt-12 max-w-2xl mx-auto text-center font-dm text-cream/55 text-sm leading-relaxed">
            Membership fees go directly toward development, choreography, production costs, and costumes — so that EPC can compensate its instructors,
            staff, and performing artists at a professional standard. You&apos;re not paying to be in the company. You&apos;re investing in the infrastructure
            that makes professional performance possible.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/details"
              className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
            >
              See Full Fees, Compensation &amp; Schedule →
            </Link>
            <p className="mt-3 font-dm text-cream/40 text-xs">
              Every track, fee, and payout — laid out on the Company Details page.
            </p>
          </div>
        </div>
      </section>

      {/* Training schedule */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-3">
                TRAINING <span className="text-gradient">SCHEDULE</span>
              </h2>
              <p className="font-dm text-cream/60 text-sm mb-8 leading-relaxed">
                All members train on a weekly schedule throughout each production cycle.
                Skaters and dancers each have their own session structure — with intentional
                overlap built in for the crossover moments that define every EPC production.
              </p>

              <p className="font-dm text-cream/65 text-sm leading-relaxed">
                Both skaters and dancers train on-ice and off-ice each week — sessions fall on the same day so the full company trains together. Specific scheduling is shared with members at the start of each production cycle.
              </p>
              <p className="font-dm text-cream/45 text-sm leading-relaxed mt-3">
                <span className="text-gold font-semibold">Crossover:</span> Skaters and dancers share ice sessions for joint staging and full-company run-throughs — every crossover moment is rehearsed together, not pieced together at showtime.
              </p>

              <div className="mt-8">
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-4">
                  PRODUCTION CALENDAR
                </h3>
                <div className="space-y-3">
                  {productionCycle.map((cycle) => (
                    <div
                      key={cycle.show}
                      className="flex items-center gap-4 py-3"
                    >
                      <div className="w-1 h-12 rounded-full bg-gradient-brand flex-shrink-0" />
                      <div>
                        <p className="font-dm text-xs text-cream/40 tracking-widest uppercase">
                          {cycle.months} → Perform in {cycle.perform}
                        </p>
                        <p className="font-bebas text-xl text-cream tracking-widest">
                          {cycle.show}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-8">
                CURRICULUM <span className="text-gradient">BREAKDOWN</span>
              </h2>
              <div className="space-y-5">
                {curriculum.map((item) => (
                  <div key={item.name}>
                    <h4 className="font-bebas text-lg text-cream tracking-widest mb-1">{item.name}</h4>
                    <p className="font-dm text-cream/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Membership />

      {/* Company Experiences & Member Perks */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.1)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(194,24,91,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Experience
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              COMPANY EXPERIENCES <span className="text-gradient">&amp; MEMBER PERKS</span>
            </h2>
          </div>

          <p className="font-dm text-cream/65 text-base leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Membership is about more than rehearsals. EPC builds a full company experience — from production nights and creative retreats to career development and team outings. Full details are shared when you join the company.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {EXPERIENCE_CATEGORIES.map((cat) => (
              <span
                key={cat.title}
                className="px-4 py-2 rounded-full text-sm font-dm font-medium border border-white/10 text-cream/70"
                style={{ borderColor: cat.color + "40", color: cat.color }}
              >
                {cat.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            READY TO <span className="text-gradient">EVOLVE?</span>
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8">
            Auditions are coming. Register your interest now and be the first
            to know when dates are announced.
          </p>
          <Link
            href="/shows#register"
            className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
          >
            Register Interest
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

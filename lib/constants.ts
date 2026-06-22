export const BRAND = {
  colors: {
    purple: "#7B2FBE",
    magenta: "#C2185B",
    red: "#E8334A",
    gold: "#F5C842",
    dark: "#0D0A14",
    cream: "#FFF8F0",
    gradient: "linear-gradient(135deg, #7B2FBE, #C2185B, #E8334A)",
  },
};

// The inaugural EPC production — the centerpiece of the founding season.
export const ASCEND = {
  theme: "Ascend",
  tagline: "The Inaugural EPC Production",
  performanceWindow: "September 2026",
  status: "Founding Season",
  color: "#C2185B",
  summary:
    "A continuous live performance experience blending skating, dance, and movement. No recital format, no stop-and-start routines — one immersive evening that flows from beginning to end.",
  overview:
    "Ascend is the first full production from Evolution Production Company — an immersive, continuous performance staged in the round. Skaters, dancers, and movement artists share the same space, the same story, and the same momentum, performed for an audience seated close enough to feel it. It is the launch of everything EPC is building.",
  details: [
    {
      label: "Concept",
      value:
        "One continuous, immersive performance blending skating, dance, and movement into a single unbroken experience.",
    },
    {
      label: "Auditions",
      value:
        "Founding-roster auditions are open by interest registration now. Skaters, dancers, movement artists, and specialty performers are encouraged to register.",
    },
    {
      label: "Timeline",
      value:
        "Founding company forms in 2026, with the inaugural performance in September 2026.",
    },
    {
      label: "Company Participation",
      value:
        "Every company track — Youth, Junior, Company Artists, and Flex — takes part in Ascend. All members perform; principal roles are earned through audition.",
    },
    {
      label: "Tickets",
      value:
        "Ticket information will be announced ahead of the September 2026 premiere. Join the company list to be first to know.",
    },
    {
      label: "Location",
      value:
        "Staged in the round in the Washington DC area (DMV). The specific venue is announced ahead of the September 2026 premiere.",
    },
  ],
};

// Productions that follow the inaugural season — kept intentionally minimal.
export const FUTURE_PRODUCTIONS = [
  {
    theme: "Illuminate",
    window: "Winter 2026",
    description:
      "A year-end immersive production carrying the founding company into the holiday season.",
    color: "#E8334A",
  },
  {
    theme: "Ignite",
    window: "Spring 2027",
    description:
      "A high-energy continuation of the EPC experience, building on the momentum of the founding season.",
    color: "#7B2FBE",
  },
];

export const STATS = [
  { value: "Sept '26", label: "Inaugural Production" },
  { value: "4", label: "Company Tracks" },
  { value: "All Ages", label: "Performers Welcome" },
  { value: "DMV", label: "Founding Region" },
];

export const DISCIPLINES = [
  "Figure Skater",
  "Contemporary Dancer",
  "Urban / Hip-Hop",
  "Ballet",
  "Both (Ice & Dance)",
  "Other",
];

// Benefits shown before pricing — what every membership includes.
export const MEMBERSHIP_INCLUDES = [
  {
    title: "Rehearsals",
    description:
      "Regular company rehearsals and performance preparation, built around the immersive production model.",
  },
  {
    title: "Casting Opportunities",
    description:
      "Every member performs. Ensemble and principal casting is earned through the audition process.",
  },
  {
    title: "Production Participation",
    description:
      "A role in EPC's live productions — beginning with Ascend, the inaugural founding-season experience.",
  },
  {
    title: "Company Development",
    description:
      "Choreography, conditioning, stage presence, and technique coaching that grows you as a performer.",
  },
  {
    title: "Community Events",
    description:
      "Company gatherings, creative experiences, and member events that build the culture of EPC.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Real stage time through EPC's touring production model — multiple performances each cycle, not a single end-of-year recital.",
  },
];

export const MEMBERSHIP_TIERS = [
  {
    name: "Company Member",
    price: "$200/mo",
    description: "EPC operates on a unified membership model — all accepted members pay the same monthly fee regardless of age or division, and every member is included in company productions.",
    features: [
      "Rehearsals",
      "Production Participation",
      "Performance Opportunities",
      "Artistic Development",
      "Casting Opportunities",
      "Community Events",
      "Company Gatherings",
      "Production Preparation",
      "Company Communications & Resources",
    ],
    featured: false,
  },
  {
    name: "Professional Development Track",
    price: "$150 / cycle",
    description: "An optional upgrade for performers who want to expand their opportunities beyond standard company membership.",
    castingNote: "Participation does not impact casting. All company members remain eligible for Ensemble, Featured, and Principal opportunities.",
    features: [
      "Professional Development Workshops",
      "Industry Sessions",
      "Corporate Performance Opportunities",
      "Portfolio Development",
      "Professional Media Opportunities",
      "Leadership Opportunities",
      "Mentorship Opportunities",
      "Priority Access to Select Workshops & Events",
    ],
    featured: true,
  },
];

export const WHY_JOIN = [
  {
    title: "Paid Performance Opportunities",
    description:
      "Company Artists (16+) may be selected for paid performance opportunities through EPC productions, special events, and company projects. EPC is designed to create real-world performance experiences for artists who are ready to take their craft seriously.",
  },
  {
    title: "Professional Development",
    description:
      "Train with experienced choreographers and industry professionals in choreography, performance quality, conditioning, flexibility, and technique. Every track — Youth, Junior, Company Artists, and Flex — is structured to support growth, confidence, and stage-ready performance skills.",
  },
  {
    title: "Talent Pathways",
    description:
      "Outstanding performers may be introduced to EPC's broader talent network, connecting them with casting opportunities, touring productions, and industry professionals. EPC is committed to helping performers grow both on stage and beyond the company.",
  },
];

export const GROWTH_PHASES = [
  {
    phase: "Phase 1",
    title: "DMV Launch",
    description:
      "Establish the company in the DC/MD/VA market. Build the core company roster, deliver three high-quality productions per year, and develop the EPC brand identity in the regional performance community.",
    status: "active",
  },
  {
    phase: "Phase 2",
    title: "East Coast Touring",
    description:
      "Expand productions to major East Coast venues. Partner with regional touring circuits, grow the company to 30+ members, and establish EPC as a recognized touring ice-dance company.",
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "National Expansion",
    description:
      "Full national touring circuit with 50+ member roster, corporate sponsorships, and television/streaming production partnerships. Evolution Production Company becomes a household name.",
    status: "future",
  },
];

export const AUDITION_TIERS = [
  {
    name: "Youth Company",
    ages: "11 & Under",
    description:
      "The Youth Company is designed for young performers interested in developing performance skills while participating in EPC productions. Members may include skaters, dancers, movement artists, and emerging performers who demonstrate enthusiasm, commitment, and a willingness to learn.",
    requirements: [
      "Ages 11 and under at time of audition",
      "Basic skating or dance experience preferred",
      "Solo (60 seconds) required only for those seeking principal consideration",
      "Parent/guardian consent required",
      "Commitment to the production cycle",
    ],
    color: "#7B2FBE",
  },
  {
    name: "Junior Company",
    ages: "Ages 12–15",
    description:
      "The Junior Company is designed for developing performers seeking greater artistic responsibility and performance opportunities. Members take part in rehearsals, productions, and company activities while continuing to develop technical and performance skills.",
    requirements: [
      "Ages 12–15 at time of audition",
      "Intermediate skill level preferred",
      "Solo (90 seconds) required only for those seeking principal consideration",
      "Parent/guardian consent required",
      "Full season commitment required",
    ],
    color: "#C2185B",
  },
  {
    name: "Company Artists",
    ages: "Ages 16+",
    description:
      "Company Artists participate fully in EPC productions, rehearsals, and company opportunities — skaters, dancers, movement artists, specialty performers, and multidisciplinary artists. They help shape the culture, artistic direction, and future growth of EPC.",
    requirements: [
      "Ages 16+ at time of audition",
      "Intermediate to advanced skill level preferred",
      "Solo (90 seconds) required only for those seeking principal consideration",
      "Resume or performance history helpful, not required",
      "Parent/guardian consent required for performers under 18",
      "Full season commitment required",
    ],
    color: "#E8334A",
  },
  {
    name: "Flex Track",
    ages: "Flexible Commitment",
    description:
      "The Flex Track is for individuals who wish to remain connected to EPC without committing to full production participation. Flex Track participants are not required to perform, and may have different participation requirements depending on the opportunity.",
    requirements: [
      "Open to all ages and experience levels",
      "No production or performance commitment required",
      "No solo or audition piece required",
      "Parent/guardian consent required for minors",
      "Access to training, community, and development opportunities",
    ],
    color: "#F5C842",
  },
];

export const FAQ = [
  {
    question: "Where are performances held?",
    answer: "Throughout the DMV region.",
  },
  {
    question: "Do I need to live in Virginia?",
    answer: "No.",
  },
  {
    question: "Does EPC provide housing?",
    answer: "Not currently.",
  },
  {
    question: "Does EPC provide travel assistance?",
    answer: "Not during the founding season.",
  },
  {
    question: "Does EPC sponsor visas?",
    answer: "Not currently.",
  },
  {
    question: "Can out-of-state performers participate?",
    answer:
      "Yes, provided they can meet rehearsal and performance requirements.",
  },
  {
    question: "Do I need to skate AND dance?",
    answer:
      "No. We welcome skaters, dancers, and performers who specialize in one discipline. Multi-disciplined artists are welcome, but specialization is valued.",
  },
  {
    question: "How many shows will I perform in?",
    answer:
      "All company members appear in productions. Performance opportunities are a core part of EPC — roles and casting vary based on track, production needs, and readiness. Principal and corporate spots are earned through the audition process.",
  },
  {
    question: "What is the Flex Track?",
    answer:
      "The Flex Track is a flexible participation pathway for performers who need a lower commitment or are new to skating or dance. It offers ensemble performance opportunities with a clear path into the age-based company tracks as foundational skills are established.",
  },
  {
    question: "What does training look like week-to-week?",
    answer:
      "Two sessions per week: one ice-based and one off-ice. Sessions cover choreography, conditioning, acting, flexibility, and technique depending on the training phase.",
  },
  {
    question: "Who covers travel costs for touring shows?",
    answer:
      "Members are responsible for their own travel to touring shows. EPC provides advance scheduling so you can plan accordingly.",
  },
  {
    question: "When are the next auditions?",
    answer:
      "Auditions are coming to the DMV area soon. Register your interest now to be first notified of dates, locations, and requirements.",
  },
  {
    question: "Can members move between company tracks as they grow?",
    answer:
      "Yes. EPC's tracks are age-based — Youth Company (11 & under), Junior Company (12–15), and Company Artists (16+). As members age up or demonstrate readiness, they move into the next track, and Flex members can advance into an age-based track as their skills develop.",
  },
  {
    question: "Do I have to leave my current studio, club, or team to join EPC?",
    answer:
      "No. EPC is designed to complement your current training and performance environment, not replace it.",
  },
  {
    question: "Who can join EPC?",
    answer:
      "EPC is open to skaters, dancers, and other performers depending on current productions, auditions, and company needs.",
  },
  {
    question: "What is the difference between Company Members and the Professional Development Track?",
    answer:
      "Company Membership is the core EPC experience. The Professional Development Track is an optional add-on for members who want additional industry-focused opportunities, career development, and expanded visibility within the company.",
  },
  {
    question: "Will all members perform?",
    answer:
      "Performance opportunities are a core part of EPC, though roles and casting may vary based on production needs, membership type, and readiness.",
  },
  {
    question: "Are there special events outside of rehearsals and performances?",
    answer:
      "Yes. EPC plans to offer workshops, gatherings, outings, and additional creative experiences as the company continues to grow.",
  },
];

export const WHAT_MAKES_DIFFERENT = [
  {
    title: "Continuous Performance",
    color: "#7B2FBE",
    points: ["No recital format.", "No stop-and-start routines.", "One immersive experience."],
  },
  {
    title: "Multi-Discipline Cast",
    color: "#C2185B",
    points: ["Skating.", "Dance.", "Movement."],
  },
  {
    title: "Up-Close Audience Experience",
    color: "#E8334A",
    points: ["Immersive arena staging.", "On-ice seating.", "Intimate performance zones."],
  },
];

export const SEEKING = [
  {
    title: "Figure Skaters",
    description: "Skaters ready to bring technique and artistry to a continuous live production.",
    color: "#7B2FBE",
  },
  {
    title: "Dancers",
    description: "Dancers of all styles who want to perform inside an immersive, moving experience.",
    color: "#C2185B",
  },
  {
    title: "Movement Artists",
    description: "Performers whose craft lives in motion, atmosphere, and physical storytelling.",
    color: "#E8334A",
  },
  {
    title: "Specialty Performers",
    description: "Distinctive performers with a unique skill that elevates the experience.",
    color: "#F5C842",
  },
];

export const FOUNDING_SEASON = {
  year: "2026",
  intro:
    "Every member joining during the inaugural season becomes a Founding Member of Evolution Production Company.",
  benefits: [
    "Founding Member Recognition",
    "Locked-In Rates Through 2027",
    "Priority Opportunities",
    "Program Recognition",
  ],
};

export const RINK_PARTNER_BENEFITS = [
  {
    title: "Official EPC Partner Designation",
    description:
      "Your rink becomes a named Official EPC Partner Rink — included in all EPC marketing, digital presence, and production materials.",
  },
  {
    title: "Priority Rehearsal Scheduling",
    description:
      "EPC locks in recurring rehearsal blocks at your facility, giving you dependable, recurring revenue throughout the training season.",
  },
  {
    title: "Co-Hosted Events & Revenue Share",
    description:
      "Partner on EPC production nights and community showcases held at your rink. Revenue share model — your facility, your cut.",
  },
  {
    title: "Joint Marketing & Social Features",
    description:
      "EPC promotes your rink across all social channels, email audiences, and production programs. Your brand reaches our growing performer and family network.",
  },
  {
    title: "EPC Talent for Rink Events",
    description:
      "Access to EPC performers for rink open houses, holiday showcases, and community events — at a preferred partner rate.",
  },
  {
    title: "Custom Partnership Package",
    description:
      "All rink partnerships are structured around your facility's needs and calendar. We build the deal around you.",
  },
];

export const CORPORATE_PARTNER_TIERS = [
  {
    name: "Supporting Sponsor",
    level: "Entry",
    features: [
      "Logo in production programs",
      "Social media feature (1x per production)",
      "2 VIP tickets per show",
      "Certificate of sponsorship",
    ],
  },
  {
    name: "Presenting Sponsor",
    level: "Premier",
    features: [
      "Logo on all production marketing materials",
      "Named in all show announcements",
      "Dedicated social media campaign",
      "8 VIP tickets per show",
      "Private meet & greet with the company",
      "Co-branded digital content",
    ],
  },
  {
    name: "Title Sponsor",
    level: "Signature",
    features: [
      "Production named in your brand's honor",
      "Full brand integration across all EPC channels",
      "Exclusive pre-show brand activation opportunity",
      "20 VIP tickets per show",
      "Custom partnership activation — your vision",
      "Year-round EPC brand alignment",
    ],
  },
];

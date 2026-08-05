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
  // Season, not a date — the flyer still reads "Coming 2027 · Dates Coming Soon".
  performanceWindow: "Spring 2027",
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
        "We are casting the founding roster now. Auditions are open by interest registration — skaters, dancers, movement artists, and specialty performers are encouraged to register.",
    },
    {
      label: "Timeline",
      value:
        "Casting and company formation are underway now, with the inaugural performance in Spring 2027. Specific dates are announced soon.",
    },
    {
      label: "Company Participation",
      value:
        "Youth, Junior, and Company Artists members cast in Ascend all perform in it — nobody is benched — and principal roles are earned through audition. Flex Track participants can take part in company life without performing.",
    },
    {
      label: "Tickets",
      value:
        "Ticket information will be announced ahead of the Spring 2027 premiere. Join the company list to be first to know.",
    },
    {
      label: "Location",
      value:
        "Staged in the round in the Washington DC area (DMV). The specific venue is announced ahead of the Spring 2027 premiere.",
    },
  ],
};

// Productions that follow the inaugural season — kept intentionally minimal.
export const FUTURE_PRODUCTIONS = [
  {
    theme: "Illuminate",
    window: "Summer 2027",
    description:
      "A mid-year immersive production that builds on everything the founding company learned staging Ascend.",
    color: "#E8334A",
  },
  {
    theme: "Ignite",
    window: "Winter 2027",
    description:
      "A high-energy production closing out the founding year, carrying the company into its second season.",
    color: "#7B2FBE",
  },
];

export const STATS = [
  { value: "2027", label: "Inaugural Production" },
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
      "Every member cast in a production performs in it. Ensemble and principal casting is earned through the audition process.",
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
    description: "EPC operates on a unified membership model — all accepted members pay the same monthly fee regardless of age or division, and every member taking part in a production cycle is included in that production.",
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
    price: "$150 / quarter",
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

// Role-based pay. Single source of truth: the /details rate table renders this in full,
// and /company links to it using PERFORMER_PAY_SUMMARY below.
export const ROLE_COMPENSATION = [
  {
    role: "Ensemble Artists",
    perShow: "$50–$100",
    perProduction: "$300–$600",
    color: "#7B2FBE",
    responsibilities: [
      "Ensemble choreography",
      "Group performance work",
      "Scene transitions",
      "Production support",
      "Company ensemble participation",
    ],
  },
  {
    role: "Featured Artists",
    perShow: "$100–$200",
    perProduction: "$600–$1,200",
    color: "#C2185B",
    responsibilities: [
      "Featured performance moments",
      "Specialty acts",
      "Supporting storytelling roles",
      "Significant artistic contributions",
    ],
  },
  {
    role: "Principal Artists",
    perShow: "$200–$400",
    perProduction: "$1,200–$2,400",
    color: "#E8334A",
    responsibilities: [
      "Lead artistic roles",
      "Featured storytelling moments",
      "Major production responsibilities",
    ],
  },
];

// Derived from ROLE_COMPENSATION — the range shown to performers who are still deciding.
export const PERFORMER_PAY_SUMMARY = {
  perShow: "$50–$400",
  perProduction: "$300–$2,400",
  eligibility: "Company Artists 16+",
  note: "Performers under 16 receive company credits based on the role earned.",
};

// The full member experience. Surfaced on /company — these justify the membership fee.
export const MEMBER_EXPERIENCES = [
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

// No skill-level requirements on any track — EPC accepts all skill levels, and
// that is stated once, prominently, on /company rather than per card.
// Membership runs for the year; performers choose which cycles they perform in.
export const AUDITION_TIERS = [
  {
    name: "Youth Company",
    ages: "11 & Under",
    description:
      "The Youth Company is designed for young performers interested in developing performance skills while participating in EPC productions. Members may include skaters, dancers, movement artists, and emerging performers who demonstrate enthusiasm, commitment, and a willingness to learn.",
    requirements: [
      "Ages 11 and under at time of audition",
      "Solo (60 seconds) required only for those seeking principal consideration",
      "Parent/guardian consent required",
      "Membership is annual — you choose which cycles you perform in",
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
      "Solo (90 seconds) required only for those seeking principal consideration",
      "Parent/guardian consent required",
      "Membership is annual — you choose which cycles you perform in",
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
      "Solo (90 seconds) required only for those seeking principal consideration",
      "Resume or performance history helpful, not required",
      "Parent/guardian consent required for performers under 18",
      "Membership is annual — you choose which cycles you perform in",
    ],
    color: "#E8334A",
  },
  {
    name: "Flex Track",
    ages: "Flexible Commitment",
    description:
      "The Flex Track is for individuals who wish to remain connected to EPC without committing to full production participation. Flex Track participants are not required to perform, and may have different participation requirements depending on the opportunity.",
    requirements: [
      "Open to all ages",
      "No production or performance commitment required",
      "No solo or audition piece required",
      "Parent/guardian consent required for minors",
      "Access to training, community, and development opportunities",
    ],
    color: "#F5C842",
  },
];

// Kept in sync with what the rest of the site states. If a figure, date, or rule
// changes on a page, it has to change here too — this is the answer of record.
export const FAQ = [
  // — Joining & auditions —
  {
    question: "Can anyone audition?",
    answer:
      "Yes. Anyone meeting the age and eligibility requirements may audition for company placement.",
  },
  {
    question: "When are the next auditions?",
    answer:
      "We are casting now for the founding company in the DMV area. Register your interest to be notified of audition dates, locations, and requirements — the inaugural production, Ascend, is coming in Spring 2027.",
  },
  {
    question: "Who can join EPC?",
    answer:
      "Skaters, dancers, movement artists, and specialty performers. EPC has four tracks: Youth Company (11 & under), Junior Company (12–15), Company Artists (16+), and the Flex Track, which is open to all ages and experience levels.",
  },
  {
    question: "Do I need to skate AND dance?",
    answer:
      "No. We welcome skaters, dancers, and performers who specialize in one discipline. Multi-disciplined artists are welcome, but specialization is valued.",
  },
  {
    question: "Do I have to leave my current studio, club, or team to join EPC?",
    answer:
      "No. EPC is designed to complement your current training and performance environment, not replace it. Studio and club commitments come first, and we schedule around them.",
  },
  {
    question: "Can members move between company tracks as they grow?",
    answer:
      "Yes. EPC's tracks are age-based — Youth Company (11 & under), Junior Company (12–15), and Company Artists (16+). As members age up or demonstrate readiness, they move into the next track, and Flex members can advance into an age-based track as their skills develop.",
  },
  {
    question: "What is the Flex Track?",
    answer:
      "The Flex Track is for people who want to stay connected to EPC without committing to full production participation. Flex participants are not required to perform. It gives access to training, workshops, community events, and professional development, and Flex members can move into an age-based company track when they are ready to take on a production.",
  },

  // — Cost & compensation —
  {
    question: "How much does membership cost?",
    answer:
      "$200 a month, the same for every division — Youth, Junior, Company Artists, and Flex. Membership runs for the year, but performers choose which production cycles they perform in, and dues are only owed for those cycles. The optional Professional Development Track adds $150 per quarter. Costumes are not included: each production carries a separate one-time costume fee. Full details are covered at the membership informational and on the Membership page.",
  },
  {
    question: "What is the difference between Company Members and the Professional Development Track?",
    answer:
      "Company Membership is the core EPC experience at $200 a month. The Professional Development Track is an optional add-on at $150 per quarter, adding industry sessions, corporate performance opportunities, portfolio and media development, mentorship, and priority access to select workshops. Participation does not affect casting — all members remain eligible for Ensemble, Featured, and Principal roles.",
  },
  {
    question: "Do performers get paid?",
    answer:
      "Yes, based on the role earned in each production. Company Artists 16 and older are eligible for cash compensation — starting rates run from $50–$100 per show for Ensemble Artists up to $200–$400 per show for Principal Artists. Performers under 16 receive company credits, usable toward membership fees, workshops, intensives, merchandise, and events. These are starting rates and are negotiated case by case.",
  },
  {
    question: "Does paying membership mean I am paying to be paid?",
    answer:
      "No. Fees and compensation are tracked separately. Membership fees cover training and ice time, coaching and instructor fees, choreography, rehearsal space, and production costs. Compensation is earned entirely through performance — you must perform to be compensated, and membership alone does not guarantee a payout.",
  },
  {
    question: "What do founding members get?",
    answer:
      "Everyone who joins during the inaugural season becomes a Founding Member: founding member recognition, locked-in rates through 2028, priority opportunities, and program recognition.",
  },

  // — Performing & training —
  {
    question: "When is the first show?",
    answer:
      "Ascend, the inaugural EPC production, premieres in Spring 2027, followed by Illuminate in Summer 2027 and Ignite in Winter 2027. Specific dates and venues are announced closer to each premiere — join the company list to hear first.",
  },
  {
    question: "Will all members perform?",
    answer:
      "Everyone cast in a production cycle performs in it — nobody is benched. Which role you are cast in varies from production to production based on the casting process and readiness, and membership tier never affects casting. Two things are up to you: performers choose which production cycles they take part in, and Flex Track participants are not required to perform at all.",
  },
  {
    question: "How many shows will I perform in?",
    answer:
      "EPC stages three productions a year, and each production runs a minimum of four performances, typically six. Ensemble, Featured, and Principal roles are earned through the casting process for each production.",
  },
  {
    question: "What does training look like week-to-week?",
    answer:
      "Two sessions per week: one ice-based and one off-ice, scheduled on the same day so the full company trains together. Sessions cover choreography, conditioning, acting and stage presence, flexibility, and technique depending on the training phase.",
  },
  {
    question: "Are there special events outside of rehearsals and performances?",
    answer:
      "Yes. Membership includes company experiences and member perks — creative retreats, performance inspiration trips, guest artist workshops, content creation days, team outings, and career development sessions. The full list is on the Membership page.",
  },

  // — Logistics —
  {
    question: "Where are performances held?",
    answer:
      "Throughout the DMV region. EPC operates on a touring model, so a production cycle typically covers performances in more than one city.",
  },
  {
    question: "Do I need to live in Virginia?",
    answer:
      "No. EPC welcomes performers from across the DMV region and beyond, provided you can meet rehearsal and performance requirements.",
  },
  {
    question: "Can out-of-state performers participate?",
    answer:
      "Yes, provided they can meet rehearsal and performance requirements.",
  },
  {
    question: "Who covers travel costs for touring shows?",
    answer:
      "Members are responsible for their own travel to touring shows. EPC provides advance scheduling so you can plan accordingly.",
  },
  {
    question: "Does EPC provide travel assistance?",
    answer:
      "Not during the founding season (2026–27). Future travel support programs may be introduced as the company grows.",
  },
  {
    question: "Does EPC provide housing?",
    answer:
      "Not currently. Performers are responsible for their own housing arrangements.",
  },
  {
    question: "Does EPC sponsor visas?",
    answer:
      "Not currently. Performers must be legally authorized to work and perform in the United States.",
  },
];

// /faq is the single home for every question. /shows shows only this audition-relevant
// subset — filtered from FAQ above, so the answers can never diverge.
export const AUDITION_FAQ_QUESTIONS = [
  "Can anyone audition?",
  "When are the next auditions?",
  "Do I need to skate AND dance?",
  "Do I have to leave my current studio, club, or team to join EPC?",
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
  year: "2026–27",
  intro:
    "Every member joining during the inaugural season becomes a Founding Member of Evolution Production Company.",
  benefits: [
    "Founding Member Recognition",
    "Locked-In Rates Through 2028",
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

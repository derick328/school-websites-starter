export type SchoolId = "kindergarten-primary" | "secondary" | "combined";
export type PageId = "home" | "about" | "academics" | "admissions" | "life" | "news" | "gallery" | "contact";
export type School = {
  id: SchoolId;
  name: string;
  shortName: string;
  category: string;
  motto: string;
  badge: string;
  logoGlyph: string;
  palette: { primary: string; secondary: string; accent: string; cream: string; tint: string };
  hero: { eyebrow: string; lead: string; emphasis: string; tail: string; summary: string; image: string; sticker: string; note: string };
  highlights: { value: string; title: string }[];
  introduction: { kicker: string; title: string; body: string };
  pillars: { icon: string; title: string; description: string }[];
  programs: { icon: string; stage: string; name: string; description: string; theme: string }[];
  experiences: { name: string; category: string; description: string }[];
  news: { type: string; title: string; excerpt: string }[];
  mission: string;
  vision: string;
  principalMessage: string;
  contact: { location: string; phone: string; email: string; hours: string };
};

// All names and contact details are EXAMPLES. Replace before publishing.
export const schools: Record<SchoolId, School> = {
  "kindergarten-primary": {
    id: "kindergarten-primary",
    name: "Little Oaks Academy",
    shortName: "Little Oaks",
    category: "Kindergarten & Primary",
    motto: "Little steps. Bright futures.",
    badge: "THE JOY OF DISCOVERY",
    logoGlyph: "✳",
    palette: { primary: "#145B3C", secondary: "#0F402D", accent: "#F4CB45", cream: "#FFFDF4", tint: "#E9F5E9" },
    hero: {
      eyebrow: "WELCOME TO LITTLE OAKS ACADEMY",
      lead: "Big dreams start",
      emphasis: "little.",
      tail: "",
      summary: "A happy place for curious minds to play, discover and grow — from their very first classroom to their confident primary years.",
      image: "/illustrations/kindergarten-primary.svg",
      sticker: "Learning is an adventure!",
      note: "Play-based learning • Strong foundations",
    },
    highlights: [
      { value: "01", title: "A joyful start" },
      { value: "02", title: "A caring community" },
      { value: "03", title: "Room to grow" },
    ],
    introduction: {
      kicker: "A SCHOOL THAT FEELS LIKE BELONGING",
      title: "A little wonder goes a long way.",
      body: "We believe the early years should be full of questions, laughter and meaningful discoveries. Our learning approach balances kindness, creativity and the strong academic foundations children need to thrive.",
    },
    pillars: [
      { icon: "heart", title: "Known & cared for", description: "Every child deserves to feel safe, heard and encouraged." },
      { icon: "sparkle", title: "Curiosity first", description: "Playful experiences help children become independent thinkers." },
      { icon: "book", title: "Strong foundations", description: "Building confidence in literacy, numeracy and life skills." },
    ],
    programs: [
      { icon: "sun", stage: "EARLY YEARS", name: "Kindergarten", description: "Imaginative play, social skills, early language and joyful first discoveries.", theme: "yellow" },
      { icon: "book", stage: "FOUNDATION", name: "Lower Primary", description: "Reading, writing, numeracy and confident classroom habits.", theme: "mint" },
      { icon: "rocket", stage: "GROWING MINDS", name: "Upper Primary", description: "Deeper academic enquiry, teamwork and readiness for secondary school.", theme: "lavender" },
    ],
    experiences: [
      { name: "Creative arts", category: "EXPRESS", description: "Music, painting, storytelling and imagination." },
      { name: "Nature & play", category: "DISCOVER", description: "Outside play, gardens and hands-on exploration." },
      { name: "Sports & movement", category: "MOVE", description: "Teamwork, confidence and healthy routines." },
    ],
    news: [
      { type: "LEARNING", title: "Why play belongs at the heart of the early years", excerpt: "A closer look at the skills young learners develop when they explore through play." },
      { type: "PARENT GUIDE", title: "Helping your child feel ready for the first school day", excerpt: "Gentle, practical ways to prepare for a confident start." },
      { type: "SCHOOL LIFE", title: "The little everyday moments that make school special", excerpt: "From morning welcomes to collaborative classroom discoveries." },
    ],
    mission: "To nurture curious, kind and capable children through purposeful learning and a joyful school experience.",
    vision: "Every child grows with confidence, discovers a love of learning, and carries it into the future.",
    principalMessage: "Children do their best growing when they feel they belong. Our promise is a warm, engaging and thoughtful education that celebrates each learner's progress.",
    contact: { location: "Your School Location, Tanzania", phone: "+255 000 000 000", email: "hello@example.com", hours: "Monday – Friday · 8:00 AM – 4:00 PM" },
  },
  secondary: {
    id: "secondary",
    name: "Summit Ridge Secondary",
    shortName: "Summit Ridge",
    category: "Secondary School",
    motto: "Rise with purpose.",
    badge: "LEARN. LEAD. BECOME.",
    logoGlyph: "▲",
    palette: { primary: "#103F33", secondary: "#092E27", accent: "#F0C94D", cream: "#FAF8F0", tint: "#E9F0E8" },
    hero: {
      eyebrow: "WELCOME TO SUMMIT RIDGE",
      lead: "Made for the",
      emphasis: "next big leap.",
      tail: "",
      summary: "High expectations, meaningful opportunities and the support to turn potential into purpose. A secondary school built around tomorrow's thinkers and leaders.",
      image: "/illustrations/secondary.svg",
      sticker: "Your future starts here.",
      note: "Academic focus • Character • Opportunity",
    },
    highlights: [
      { value: "01", title: "Academic ambition" },
      { value: "02", title: "Leadership & service" },
      { value: "03", title: "Beyond the classroom" },
    ],
    introduction: {
      kicker: "A PLACE TO GO FURTHER",
      title: "Challenge your thinking. Find your voice.",
      body: "Secondary school is where students begin to shape who they will become. We combine academic discipline with mentorship, practical discovery and opportunities to lead, create and contribute.",
    },
    pillars: [
      { icon: "award", title: "Academic excellence", description: "Purposeful teaching, high standards and steady growth." },
      { icon: "compass", title: "Future-ready skills", description: "Critical thinking, communication and digital confidence." },
      { icon: "users", title: "Character & leadership", description: "Students learn integrity, responsibility and service." },
    ],
    programs: [
      { icon: "book", stage: "FOUNDATION", name: "Ordinary Level", description: "Strong subject knowledge, study habits and a confident academic path.", theme: "mint" },
      { icon: "flask", stage: "EXPLORATION", name: "Science & Technology", description: "Question-driven learning, experiments and analytical thinking.", theme: "yellow" },
      { icon: "award", stage: "OPPORTUNITY", name: "Leadership & Careers", description: "Mentoring, clubs, communication and planning for life after school.", theme: "lavender" },
    ],
    experiences: [
      { name: "STEM & innovation", category: "INNOVATE", description: "Science, technology and real-world problem solving." },
      { name: "Sports & wellbeing", category: "COMPETE", description: "Healthy competition, discipline and school spirit." },
      { name: "Clubs & leadership", category: "LEAD", description: "Debate, creative societies and student initiatives." },
    ],
    news: [
      { type: "ACADEMICS", title: "Building effective study habits for secondary students", excerpt: "Practical routines that support independent learning and confidence." },
      { type: "STUDENT LIFE", title: "Why extracurricular activities are essential to growth", excerpt: "Leadership, creativity and resilience begin beyond the textbook." },
      { type: "GUIDANCE", title: "Choosing subjects with your future in mind", excerpt: "Questions to consider as students explore interests and strengths." },
    ],
    mission: "To equip young people with knowledge, character and courage to lead purposeful lives.",
    vision: "A community of ambitious, compassionate and future-ready graduates.",
    principalMessage: "We expect much from our students because we believe deeply in their potential. Our role is to challenge them, support them and help them find their own path to excellence.",
    contact: { location: "Your School Location, Tanzania", phone: "+255 000 000 000", email: "admissions@example.com", hours: "Monday – Friday · 8:00 AM – 4:00 PM" },
  },
  combined: {
    id: "combined",
    name: "Greenstone Integrated School",
    shortName: "Greenstone",
    category: "Primary & Secondary",
    motto: "One journey. Endless possibilities.",
    badge: "A CONTINUOUS LEARNING JOURNEY",
    logoGlyph: "✦",
    palette: { primary: "#17563B", secondary: "#103D2E", accent: "#F4CC4C", cream: "#FFFCF4", tint: "#E7F2E7" },
    hero: {
      eyebrow: "WELCOME TO GREENSTONE SCHOOL",
      lead: "Every chapter,",
      emphasis: "one community.",
      tail: "",
      summary: "From the first big questions in primary to the bold ambitions of secondary, we nurture a seamless journey of learning, belonging and achievement.",
      image: "/illustrations/combined.svg",
      sticker: "Grow here. Go anywhere.",
      note: "Primary → Secondary → Beyond",
    },
    highlights: [
      { value: "01", title: "One connected journey" },
      { value: "02", title: "Personal growth" },
      { value: "03", title: "A strong community" },
    ],
    introduction: {
      kicker: "GROWING TOGETHER AT EVERY STAGE",
      title: "A school journey that grows with you.",
      body: "Our integrated learning community creates continuity from primary into secondary education. Each stage has its own character, while shared values, care and ambition bring the whole school together.",
    },
    pillars: [
      { icon: "layers", title: "Smooth transitions", description: "Clear pathways between primary and secondary learning." },
      { icon: "heart", title: "A sense of belonging", description: "A supportive community across ages and stages." },
      { icon: "rocket", title: "Built for what comes next", description: "Learning that develops curiosity, character and purpose." },
    ],
    programs: [
      { icon: "sun", stage: "BUILDING FOUNDATIONS", name: "Primary School", description: "A confident start to literacy, numeracy, curiosity and character.", theme: "yellow" },
      { icon: "book", stage: "FINDING DIRECTION", name: "Lower Secondary", description: "Broader subjects, independent learning and growing responsibility.", theme: "mint" },
      { icon: "rocket", stage: "LOOKING AHEAD", name: "Upper Secondary", description: "Deeper specialisation, leadership and preparation for future opportunities.", theme: "lavender" },
    ],
    experiences: [
      { name: "Creative expression", category: "CREATE", description: "Arts, storytelling, music and collaboration." },
      { name: "Sports & community", category: "CONNECT", description: "Healthy competition, teamwork and belonging." },
      { name: "Innovation pathways", category: "GROW", description: "Science, technology and project-based learning." },
    ],
    news: [
      { type: "LEARNING PATHWAY", title: "Making the move from primary to secondary", excerpt: "Supporting students through the next chapter with clarity and care." },
      { type: "SCHOOL CULTURE", title: "What a connected school community can teach us", excerpt: "The power of shared values across different stages of learning." },
      { type: "WELLBEING", title: "Creating a culture of curiosity at every age", excerpt: "Why exploration matters from the first lessons to final examinations." },
    ],
    mission: "To provide a connected, inspiring education that supports every learner from primary foundations to secondary ambitions.",
    vision: "One inclusive school community where learners grow in confidence, competence and purpose at every stage.",
    principalMessage: "Children change enormously as they grow. Our school celebrates each chapter while offering the familiarity, high standards and care of one connected learning community.",
    contact: { location: "Your School Location, Tanzania", phone: "+255 000 000 000", email: "hello@example.com", hours: "Monday – Friday · 8:00 AM – 4:00 PM" },
  },
};

export const presets: SchoolId[] = ["kindergarten-primary", "secondary", "combined"];
export const presetTitles: Record<SchoolId, string> = {
  "kindergarten-primary": "Kindergarten + Primary",
  secondary: "Secondary",
  combined: "Primary + Secondary",
};

export const pageLabels: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About us" },
  { id: "academics", label: "Academics" },
  { id: "admissions", label: "Admissions" },
  { id: "life", label: "School life" },
  { id: "news", label: "News" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export function resolveSchool(value: string | undefined): School {
  const fixed = process.env.NEXT_PUBLIC_SCHOOL_PRESET;
  if (process.env.NEXT_PUBLIC_DEMO_MODE === "false") {
    return schools[(fixed && fixed in schools ? fixed : "kindergarten-primary") as SchoolId];
  }
  return schools[(value && value in schools ? value : "kindergarten-primary") as SchoolId];
}

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
}

export function pageHref(school: School, page: PageId): string {
  const path = page === "home" ? "/" : `/${page}`;
  return isDemoMode() ? `${path}?school=${school.id}` : path;
}

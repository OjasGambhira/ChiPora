export const siteMeta = {
  name: "Ganesh",
  role: "Backend & Cloud Developer",
  location: "Düsseldorf, Germany",
  tagline: "I build the systems nobody sees, and chase the stories nobody's retold.",
  email: "hello@ganesh.dev",
  social: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
  ],
};

export const skills = [
  { name: "C# / .NET", level: 90, group: "Backend" },
  { name: "REST API Design", level: 88, group: "Backend" },
  { name: "Azure PaaS", level: 85, group: "Cloud" },
  { name: "Kubernetes", level: 75, group: "Cloud" },
  { name: "CI/CD Pipelines", level: 82, group: "Cloud" },
  { name: "Requirements & Process Mapping", level: 87, group: "Practice" },
  { name: "Technical Documentation", level: 84, group: "Practice" },
  { name: "AI-Assisted Development", level: 80, group: "Practice" },
];

export const timeline = [
  {
    year: "2024 — Present",
    title: "Analyst IT",
    org: "Targobank GmbH, Duisburg",
    description:
      "Own backend and cloud-facing analysis work across banking systems — translating business requirements into technical specifications, mapping process flows, and keeping documentation honest enough that the next engineer trusts it.",
  },
  {
    year: "2021 — 2024",
    title: "Senior Systems Engineer",
    org: "Infosys Ltd",
    description:
      "Led migration and modernization work for Uniper Global Commodities, moving legacy processes onto Azure PaaS and rebuilding .NET services around REST APIs and CI/CD, while coordinating across business and engineering teams.",
  },
  {
    year: "2018 — 2021",
    title: "Foundations",
    org: "Early engineering roles",
    description:
      "Built the fundamentals: backend logic, systems thinking, and the habit of documenting impact before writing a line of code — the discipline that still shapes how I approach every project today.",
  },
];

export const projects = [
  {
    title: "Uniper Migration & Modernization",
    summary:
      "Led the technical migration of legacy commodity-trading workflows onto Azure PaaS, replacing brittle integrations with versioned REST APIs and automated CI/CD pipelines.",
    stack: ["Azure PaaS", ".NET", "REST APIs", "CI/CD"],
  },
  {
    title: "Process Mapping Framework",
    summary:
      "Built a repeatable requirements-to-documentation framework used across analyst teams, cutting the back-and-forth between business stakeholders and engineers on impact analysis.",
    stack: ["Business Analysis", "Documentation", "Stakeholder Mapping"],
  },
  {
    title: "Kubernetes Service Rollout",
    summary:
      "Containerized and orchestrated a set of internal services on Kubernetes, reducing manual deployment steps and standardizing how new services come online.",
    stack: ["Kubernetes", "Docker", "CI/CD"],
  },
  {
    title: "AI-Assisted Delivery Pipeline",
    summary:
      "Integrated GitHub Copilot into the day-to-day development workflow, establishing team conventions for review and prompt hygiene so AI assistance sped delivery without eroding code quality.",
    stack: ["GitHub Copilot", ".NET", "Team Practice"],
  },
];

export const gallery = [
  {
    title: "The Bergisches Land Ridgeline",
    location: "Near Solingen, NRW",
    image: "/scene-hills.svg",
    note: "Studies of the low hill country outside Solingen, shot for the quiet rather than the drama.",
  },
  {
    title: "Where the Wupper Bends",
    location: "Wupper Valley, NRW",
    image: "/scene-river.svg",
    note: "River light changes fast here — most of the good frames happen in a five-minute window.",
  },
  {
    title: "Last Light, Still Water",
    location: "A lake outside Düsseldorf",
    image: "/scene-lake.svg",
    note: "Dusk is when NRW's flat light finally does something interesting.",
  },
  {
    title: "The Path Back",
    location: "NRW forest trail",
    image: "/scene-path.svg",
    note: "Straight lines of trunks against a low sun — the shot I keep trying to get right.",
  },
];

export const fitnessStats = [
  { label: "Height", value: "169 cm" },
  { label: "Program", value: "Push · Pull · Legs" },
  { label: "Daily steps", value: "8k – 10k" },
  { label: "Racket sport", value: "Badminton" },
];

export const fitnessPrinciples = [
  {
    title: "Train against the metabolism, not with it",
    body: "A fast metabolism and a lean frame mean volume and consistency matter more than intensity spikes. The PPL split exists to keep every muscle group hit twice a week without burning out.",
  },
  {
    title: "Eat like it's part of the program",
    body: "Under-eating has been the real bottleneck, not training. Clean nutrition and natural protein sources are treated as a training variable, tracked with the same seriousness as sets and reps.",
  },
  {
    title: "Move outside the gym too",
    body: "8,000–10,000 daily steps and regular badminton keep conditioning honest between sessions — fitness as a daily habit, not three isolated hours a week.",
  },
  {
    title: "Consistency over streaks",
    body: "Past training was inconsistent by phases, not by will. The current approach is built to survive bad weeks: smaller, repeatable commitments instead of all-or-nothing blocks.",
  },
];

export const contentPillars = [
  {
    title: "Modern retellings of Indian epics",
    body: "Taking the Mahabharata and Ramayana out of the temple and into a contemporary voice — the same conflicts, the same characters, told for people who never grew up with the stories.",
  },
  {
    title: "Psychology-driven narratives",
    body: "Using mythic structure as a lens for very ordinary psychology — ambition, loyalty, self-deception — so the ancient framing explains something recognizably modern.",
  },
  {
    title: "Branding & creative discipline",
    body: "Treating storytelling as a practice with its own systems: consistent voice, a visual identity, and a publishing cadence, borrowed from the same discipline that governs the engineering work.",
  },
];

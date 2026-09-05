export const siteMeta = {
  name: "Ganesh",
  role: "Backend & Cloud Developer",
  location: "Düsseldorf, Germany",
  tagline: "I build the systems nobody sees, and chase the stories nobody's retold.",
  email: "GambhiraOjas45@gmail.com",
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
    year: "2025 — Present",
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
  }
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


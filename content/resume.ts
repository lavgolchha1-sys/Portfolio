export type TimelineEntry = {
  kind: "work" | "edu" | "milestone";
  title: string;
  org: string;
  start: string; // "2023-03"
  end: string | "present";
  location?: string;
  bullets: string[];
  tags?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Senior Actuarial Analyst",
    org: "ICICI Lombard",
    start: "2025-04",
    end: "present",
    location: "Mumbai, IN",
    bullets: [
      "Led end-to-end IFRS implementation, collaborating with auditors, Board of Directors, Chief Actuary, and Chief Financial Officer to ensure policy alignment and compliance.",
      "Facilitated communication between finance, actuarial, and audit teams on technical judgments and process changes.",
      "Coordinated progress updates and risk assessments with senior management and audit committees.",
      "Supported development and execution of implementation plans, including training, system upgrades, and controls.",
      "Acted as key liaison to resolve audit queries, ensuring timely audits and transparent IFRS financial reporting. ",
      "Independently prepared Ind AS 117 Special Proforma Financial Statements end-to-end, including methodology design, calculations, reconciliations, and disclosures, without reliance on external consultants."
    ],
    tags: ["IFRS17", "Financial Analysis", "Cross-functional Collaboration", "Strategic Analysis", "Risk Management", "VBA", "ResQ",]
  },
  {
    kind: "work",
    title: "Actuarial Analyst",
    org: "WTW",
    start: "2022-06",
    end: "2025-03",
    location: "Gurugram, IN",
    bullets: [
      "Facilitated reserving process for US, UK, and SE Asian clients, including data preparation, validation, analysis, reserve setting, and reporting.",
      "Assisted in regulatory filings for Lloyd’s syndicates.",
      "Key contributor to IFRS 17 implementation for SE Asian clients; developed end-to-end processes using proprietary software and VBA.",
      "Designed Excel UAT model for in-house IFRS 17 CSM Engine, enhancing reconciliation accuracy and streamlining compliance workflows. ",
    ],
    tags: ["Reserving", "IFRS17", "Financial Analysis", "Risk Management", "VBA", "ResQ", "Igloo", "Unify"],
  },
  {
    kind: "edu",
    title: "Bachelors of Commerce (Hons)",
    org: "St. Xavier's College, Kolkata",
    start: "2019-06",
    end: "2022-05",
    bullets: [
      "Major: Accounting and Finance.",
      "Minor: Economics and Statistics.",
    ],
  },
  {
    kind: "edu",
    title: "Actuarial Science",
    org: "Institute and Faculty of Actuaries, UK",
    start: "2019-09",
    end: "present",
    bullets: [
      "CS1, CS2, CM1, CM2, CB1, CB2, CB3, CP2 and CP3.",
    ],
  },
];

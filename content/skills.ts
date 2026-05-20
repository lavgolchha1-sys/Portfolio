export type SkillGroup = {
  title: string;
  comment: string;
  items: { name: string; level?: 1 | 2 | 3 | 4 | 5 }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    comment: "Languages I know",
    items: [
      { name: "Python", level: 3 },
      { name: "R", level: 4 },
      { name: "VBA", level: 5 },
      { name: "SQL", level: 2 },
    ],
  },
  {
    title: "AI / LLM",
    comment: "models, frameworks, tooling",
    items: [
      { name: "Anthropic SDK", level: 4 },
      { name: "OpenAI SDK", level: 4 },
      { name: "LangChain", level: 3 },
      { name: "Prompt eval", level: 4 },
      { name: "RAG architectures", level: 4 },
      { name: "Agent harnesses", level: 3 },
    ],
  },
  {
    title: "Software",
    comment: "Analytical / Actuarial",
    items: [
      { name: "MS Office Suite", level: 5 },
      { name: "ResQ", level: 5 },
      { name: "ResQFR", level: 5 },
      { name: "Unify", level: 4 },
      { name: "Igloo", level: 3 },
      { name: "Tableau", level: 3 },
    ],
  },
];

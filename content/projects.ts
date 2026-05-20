export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  highlight?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "rag-search",
    title: "rag-search",
    tagline: "Retrieval-augmented search over personal docs",
    description:
      "Hybrid BM25+vector retrieval with reranking, deployed as a chat-style UI. Streams answers with inline citations.",
    tags: ["Python", "FastAPI", "pgvector", "OpenAI", "Next.js"],
    links: [
      { label: "github", href: "https://github.com/yourname/rag-search" },
      { label: "demo", href: "/demo" },
    ],
    highlight: true,
    year: 2025,
  },
  {
    slug: "agent-runner",
    title: "agent-runner",
    tagline: "Sandboxed tool-use agent loop",
    description:
      "Minimal agent harness with pluggable tools, retry budgets, and a transcript viewer for debugging long chains.",
    tags: ["TypeScript", "Anthropic SDK", "Docker"],
    links: [
      { label: "github", href: "https://github.com/yourname/agent-runner" },
    ],
    highlight: true,
    year: 2025,
  },
  {
    slug: "eval-harness",
    title: "eval-harness",
    tagline: "Eval framework for LLM apps",
    description:
      "Run pytest-style eval suites against any model with grading rubrics, regression baselines, and CI integration.",
    tags: ["Python", "pytest", "GitHub Actions"],
    links: [{ label: "github", href: "https://github.com/yourname/eval-harness" }],
    year: 2024,
  },
  {
    slug: "prompt-lab",
    title: "prompt-lab",
    tagline: "Visual playground for prompt iteration",
    description:
      "Side-by-side diff of model outputs across prompt variants, with token-level cost tracking.",
    tags: ["React", "Vite", "OpenAI"],
    links: [{ label: "github", href: "https://github.com/yourname/prompt-lab" }],
    year: 2024,
  },
];

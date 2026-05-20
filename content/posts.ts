export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  tags: string[];
  body: string; // plain text for now; swap for MDX later
  readingMin: number;
};

export const posts: Post[] = [
  {
    slug: "rag-eval-that-actually-works",
    title: "RAG eval that actually works",
    date: "2025-11-02",
    excerpt:
      "Most RAG eval suites grade the wrong thing. Here's a setup that surfaces real regressions before deploy.",
    tags: ["RAG", "Eval", "LLM"],
    readingMin: 7,
    body: `Most RAG eval suites grade the wrong thing — they score answer fluency, not retrieval quality. After watching three production systems regress in ways our golden set never caught, I rebuilt the harness from scratch.

The trick is to score retrieval and generation independently. Retrieval gets a recall@k metric over a curated query set with labeled gold chunks. Generation is scored with a rubric — groundedness, citation accuracy, refusal correctness — graded by a stronger model with the source context inlined.

The combined view tells you exactly where a regression came from: chunker change, embedding drift, prompt edit, or model swap. That alone has saved us probably 20 hours of bisecting.`,
  },
  {
    slug: "agents-are-just-loops",
    title: "Agents are just loops (and that's fine)",
    date: "2025-09-14",
    excerpt:
      "Demystifying agent frameworks: the loop is 30 lines. The hard part is everything around it.",
    tags: ["Agents", "LLM"],
    readingMin: 5,
    body: `Strip away the marketing and an "agent" is a while loop with a model call inside. The interesting work isn't the loop — it's tool design, error budgets, observability, and replay.

I keep coming back to the same five questions when designing an agent:
1. What's the smallest set of tools that solves the task?
2. How do I observe a run after the fact?
3. What happens on a tool failure — retry, ask user, give up?
4. How do I bound cost and latency per run?
5. How do I evaluate this without burning $1k per CI run?

Nail those and the framework barely matters.`,
  },
];

"use client";

import { useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What did you ship last quarter?",
  "Walk me through your RAG eval setup.",
  "Are you available for contract work?",
];

// Hard-coded canned answers — this is a UI placeholder. Wire it to a real API
// when you're ready (Anthropic / OpenAI / your own backend).
const CANNED: Record<string, string> = {
  default:
    "This is a UI placeholder. Wire me up to your own API route to make me real — see app/api/chat for a starter, or replace this component with an iframe of a hosted demo.",
  ship:
    "Last quarter I shipped a retrieval-aware chat product: hybrid BM25+vector index, reranker, and a citation-grounded answer layer. Cut hallucinations ~40% on our internal eval.",
  rag:
    "Split retrieval and generation. Score retrieval with recall@k against labeled gold chunks. Score generation with a rubric (groundedness, citation accuracy, refusal correctness). That decoupling tells you exactly where regressions come from.",
  contract:
    "Yes — I'm open to contract work right now. Best path is the contact form; I usually reply within a day.",
};

function pickReply(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("ship") || lower.includes("quarter")) return CANNED.ship;
  if (lower.includes("rag") || lower.includes("eval")) return CANNED.rag;
  if (lower.includes("contract") || lower.includes("hire")) return CANNED.contract;
  return CANNED.default;
}

export function DemoChat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi — this is a placeholder demo bot. Try one of the suggestions, or ask anything.",
    },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Msg = { role: "user", content: trimmed };
    const reply: Msg = { role: "assistant", content: pickReply(trimmed) };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  }

  return (
    <div className="card overflow-hidden">
      <div className="px-4 py-3 border-b border-bg-line font-mono text-xs text-ink-mute flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
        demo / chat — placeholder, no backend
      </div>

      <div className="px-4 py-5 space-y-3 max-h-[420px] overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={[
              "flex",
              m.role === "user" ? "justify-end" : "justify-start",
            ].join(" ")}
          >
            <div
              className={[
                "max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                m.role === "user"
                  ? "bg-accent-cyan/10 border border-accent-cyan/30 text-ink"
                  : "bg-bg-panel border border-bg-line text-ink-dim",
              ].join(" ")}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-bg-line space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {STARTERS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="chip cursor-pointer hover:bg-accent-cyan/15"
            >
              {s}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything…"
            className="flex-1 bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60"
          />
          <button
            type="submit"
            className="font-mono text-sm px-4 py-2 rounded-md bg-accent-green/10 border border-accent-green/40 text-accent-green hover:bg-accent-green/20"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}

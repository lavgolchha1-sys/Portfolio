"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!site.contactEndpoint) {
      setStatus("error");
      setError(
        "Contact endpoint not configured. Set site.contactEndpoint in content/site.ts (e.g. a Formspree or Web3Forms URL)."
      );
      return;
    }

    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(site.contactEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block font-mono text-xs text-ink-mute mb-1">
          Name
        </label>
        <input
          name="name"
          required
          className="w-full bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60"
          placeholder=""
        />
      </div>

      <div>
        <label className="block font-mono text-xs text-ink-mute mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60"
          placeholder=""
        />
      </div>

      <div>
        <label className="block font-mono text-xs text-ink-mute mb-1">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60 resize-y"
          placeholder=""
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-mono text-sm px-4 py-2 rounded-md bg-accent-green/10 border border-accent-green/40 text-accent-green hover:bg-accent-green/20 disabled:opacity-50"
        >
          {status === "sending" ? "sending..." : "Submit"}
        </button>

        <div className="font-mono text-xs">
          {status === "sent" && (
            <span className="text-accent-green">
              ✓ message received. talk soon.
            </span>
          )}
          {status === "error" && (
            <span className="text-accent-pink">✗ {error}</span>
          )}
        </div>
      </div>
    </form>
  );
}

import Link from "next/link";
import { site } from "@/content/site";

const quickLinks = [
  // { href: "/projects", label: "Projects", desc: "Things i've built" },
  // { href: "/demo", label: "Live demo", desc: "Try an LLM app" },
  { href: "/about", label: "About", desc: "A bit more about me" },
  { href: "/resume", label: "Resume", desc: "Experience timeline" },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Terminal hero */}
      <section className="card p-6 md:p-8 font-mono">
        <div className="flex items-center gap-2 text-xs text-ink-mute mb-4">
          <span className="w-3 h-3 rounded-full bg-accent-pink/70" />
          <span className="w-3 h-3 rounded-full bg-accent-orange/70" />
          <span className="w-3 h-3 rounded-full bg-accent-green/70" />
          <span className="ml-3"></span>
        </div>

        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <div>
            <span className="text-accent-green"></span>
            <span className="text-ink-dim"></span>
            <span className="text-accent-cyan">Portfolio</span>
            <span className="text-ink-dim">:</span>
            <span></span>
          </div>
          <div className="text-ink">
            <span className="text-accent-purple">Name:</span>
            <span className="text-ink-dim"> = </span>
            <span className="text-accent-orange">{site.name}</span>
          </div>
          <div className="text-ink">
            <span className="text-accent-purple">Role</span>
            <span className="text-ink-dim"> = </span>
            <span className="text-accent-orange">{site.role}</span>
          </div>
          <div className="text-ink">
            <span className="text-accent-beige italic text-xs">
              Make it simple, but significant
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="card p-6 md:p-8 space-y-4 leading-relaxed">
        <div className="font-mono text-xs text-ink-mute">// about</div>
        <p className="text-ink-dim">
          Actuarial professional working across{" "}
          <span className="text-accent-cyan">
            P&amp;C, reserving, regulatory reporting, and IFRS implementation
          </span>{" "}
          — with experience spanning the US, UK, South-East Asia, and India.
          Currently leading the end-to-end IFRS transition at ICICI Lombard.
        </p>
        <p className="text-ink-dim">
          Most actuarial work looks backward — reserves, experience, run-off.
          I&apos;m more interested in the forward-looking side, especially
          climate risk and whether large chunks of the world stay insurable at
          all.
        </p>
        <div className="pt-2">
          <Link
            href="/about"
            className="font-mono text-sm text-accent-cyan link-underline"
          >
            read more →
          </Link>
        </div>
      </section>

      {/* Quick links */}
      <section>
        <div className="font-mono text-xs text-ink-mute mb-3">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="card p-5 hover:border-accent-cyan/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm text-accent-cyan">
                  {q.label}
                </div>
                <span className="font-mono text-ink-mute group-hover:text-accent-cyan transition-colors">
                  →
                </span>
              </div>
              <div className="mt-1 text-sm text-ink-dim">{q.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Status block */}
      <section className="card p-6">
        <div className="font-mono text-xs text-ink-mute mb-4">
          Status
        </div>
        <ul className="space-y-2 font-mono text-sm">
          <li>
            <span className="text-accent-green">●</span>{" "}
            <span className="text-ink-dim">Currently:</span> shipping LLM
            features and tinkering with agents; somewhere between IFRS 17 disclosures and the next climate event
          </li>
          <li>
            <span className="text-accent-cyan">●</span>{" "}
            <span className="text-ink-dim">learning:</span> RAG eval, model
            distillation, sustainability
          </li>
          <li>
            <span className="text-accent-purple">●</span>{" "}
            <span className="text-ink-dim">open to:</span> contractual work around sustainability and climate change
          </li>
        </ul>
      </section>
    </div>
  );
}

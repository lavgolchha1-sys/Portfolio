import { PageHeader } from "@/components/PageHeader";
import { timeline, type TimelineEntry } from "@/content/resume";
import { skillGroups } from "@/content/skills";

export const metadata = { title: "Resume" };

const kindColor: Record<TimelineEntry["kind"], string> = {
  work: "text-accent-green",
  edu: "text-accent-purple",
  milestone: "text-accent-orange",
};

const kindLabel: Record<TimelineEntry["kind"], string> = {
  work: "WORK",
  edu: "EDU",
  milestone: "EVENT",
};

function fmt(d: string) {
  if (d === "present") return "present";
  const [y, m] = d.split("-");
  const month = new Date(`${y}-${m}-01`).toLocaleString("en-US", {
    month: "short",
  });
  return `${month} ${y}`;
}

function LevelBar({ level = 3 }: { level?: number }) {
  return (
    <div className="flex gap-0.5 shrink-0">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={[
            "h-1.5 w-3 rounded-sm",
            i <= level ? "bg-accent-green" : "bg-bg-line",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function SkillsPanel() {
  return (
    <aside className="lg:w-72 shrink-0 lg:sticky lg:top-20 lg:self-start lg:order-1">
      <details open className="card p-4 group">
        <summary className="list-none cursor-pointer flex items-center justify-between font-mono text-sm">
          <span className="text-accent-cyan">
            <span className="text-ink-mute">[</span>skills
            <span className="text-ink-mute">]</span>
          </span>
          <span className="text-ink-mute transition-transform group-open:rotate-90">
            ›
          </span>
        </summary>
        <div className="mt-4 space-y-5">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-mono text-xs text-accent-cyan">
                  {group.title}
                </h3>
                <span className="font-mono text-[10px] text-ink-mute">
                  # {group.comment}
                </span>
              </div>
              <ul className="space-y-1.5">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className="font-mono text-xs text-ink"
                  >
                    <span className="text-ink-mute">-</span> {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </aside>
  );
}

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        command=""
        title="Resume"
        description="A reverse-chronological walk through the relevant bits."
      />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0 lg:order-2">
          <ol className="relative ml-3 border-l border-bg-line space-y-8">
            {timeline.map((entry, i) => (
              <li key={i} className="pl-6 relative">
                <span
                  className={[
                    "absolute -left-[7px] top-2 w-3 h-3 rounded-full border-2 border-bg",
                    entry.kind === "work"
                      ? "bg-accent-green"
                      : entry.kind === "edu"
                        ? "bg-accent-purple"
                        : "bg-accent-orange",
                  ].join(" ")}
                />
                <div className="card p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h2 className="text-lg font-semibold text-ink">
                      {entry.title}{" "}
                      <span className="text-ink-dim font-normal">
                        @ {entry.org}
                      </span>
                    </h2>
                    <div className="font-mono text-xs text-ink-mute">
                      <span className={kindColor[entry.kind]}>
                        [{kindLabel[entry.kind]}]
                      </span>{" "}
                      {fmt(entry.start)} → {fmt(entry.end)}
                      {entry.location && (
                        <span className="ml-2">· {entry.location}</span>
                      )}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink-dim">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-accent-cyan font-mono mt-0.5">
                          ›
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {entry.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entry.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <SkillsPanel />
      </div>
    </div>
  );
}

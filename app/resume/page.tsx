import { PageHeader } from "@/components/PageHeader";
import { timeline, type TimelineEntry } from "@/content/resume";

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

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        command=""
        title="Resume"
        description="A reverse-chronological walk through the relevant bits."
      />

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
                  <span className="text-ink-dim font-normal">@ {entry.org}</span>
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
                    <span className="text-accent-cyan font-mono mt-0.5">›</span>
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
  );
}

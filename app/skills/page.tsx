import { PageHeader } from "@/components/PageHeader";
import { skillGroups } from "@/content/skills";

export const metadata = { title: "Skills" };

function LevelBar({ level = 3 }: { level?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={[
            "h-1.5 w-4 rounded-sm",
            i <= level ? "bg-accent-green" : "bg-bg-line",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        title="Skills"
        description="Tools and tech I reach for. Levels are self-assessed, take with a grain of salt."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <section key={group.title} className="card p-5">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="font-mono text-accent-cyan">
                <span className="text-ink-mute">[</span>
                {group.title}
                <span className="text-ink-mute">]</span>
              </h2>
              <span className="font-mono text-xs text-ink-mute">
                # {group.comment}
              </span>
            </div>
            <ul className="space-y-2">
              {group.items.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between gap-4 font-mono text-sm"
                >
                  <span className="text-ink">
                    <span className="text-ink-mute">-</span> {s.name}
                  </span>
                  <LevelBar level={s.level} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

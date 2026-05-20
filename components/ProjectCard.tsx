import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-5 flex flex-col h-full hover:border-accent-cyan/40 transition-colors">
      <header className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="font-mono text-xs text-ink-mute">
            project / {project.year}
            {project.highlight && (
              <span className="ml-2 text-accent-orange">★ featured</span>
            )}
          </div>
          <h2 className="mt-1 font-mono text-lg text-ink">
            <span className="text-accent-cyan">./</span>
            {project.title}
          </h2>
        </div>
      </header>

      <p className="text-sm text-ink-dim mb-3">{project.tagline}</p>
      <p className="text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 font-mono text-sm">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-accent-green link-underline"
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);

  return (
    <div>
      <PageHeader
        command="ls projects/"
        title="Projects"
        description="A selection of recent work. Most live on GitHub — some have hosted demos."
      />

      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-ink-mute mb-4">
            // featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-ink-mute mb-4">
          // more
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

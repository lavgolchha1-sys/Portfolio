import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { posts } from "@/content/posts";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div>
      <PageHeader
        command="ls -lt blog/"
        title="Writing"
        description="Occasional notes on building with LLMs, mostly for my future self."
      />

      <ul className="space-y-3">
        {sorted.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="card p-5 block hover:border-accent-cyan/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h2 className="text-lg font-semibold text-ink">{p.title}</h2>
                <span className="font-mono text-xs text-ink-mute shrink-0">
                  {p.date} · {p.readingMin} min
                </span>
              </div>
              <p className="text-sm text-ink-dim mb-3">{p.excerpt}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

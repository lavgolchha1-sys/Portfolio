import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Post" };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <div className="mb-6">
        <Link
          href="/blog"
          className="font-mono text-xs text-ink-mute hover:text-accent-cyan"
        >
          ← cd ../blog
        </Link>
      </div>

      <header className="mb-8">
        <div className="font-mono text-xs text-ink-mute">
          {post.date} · {post.readingMin} min read
        </div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 h-px bg-gradient-to-r from-bg-line via-bg-line to-transparent" />
      </header>

      <div className="prose-custom space-y-4 leading-relaxed text-ink/95">
        {post.body.split(/\n\n+/).map((para, i) => (
          <p key={i} className="text-[15px]">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}

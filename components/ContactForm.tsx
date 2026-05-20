import { site } from "@/content/site";

export function ContactForm() {
  const subject = encodeURIComponent("Hello from your portfolio");
  const body = encodeURIComponent(
    "Hi Lav,\n\n[Your message here]\n\n— "
  );
  const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`;

  return (
    <div className="card p-6 md:p-8 space-y-5">
      <div className="space-y-2">
        <div className="font-mono text-xs text-ink-mute">// the easy way</div>
        <p className="text-sm text-ink-dim leading-relaxed">
          Click below and your email client will open with everything set up.
          Just write your message and hit send.
        </p>
      </div>

      <a
        href={mailto}
        className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-md bg-accent-green/10 border border-accent-green/40 text-accent-green hover:bg-accent-green/20 transition-colors"
      >
        <span>Email me</span>
        <span aria-hidden>→</span>
      </a>

      <div className="pt-4 border-t border-bg-line space-y-2">
        <div className="font-mono text-xs text-ink-mute">
          // or copy this address
        </div>
        <a
          href={`mailto:${site.email}`}
          className="block font-mono text-sm text-accent-cyan link-underline break-all"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}

import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        command=""
        title="Get in touch"
        description="Best for project inquiries, collaborations, or just saying hi. I usually reply within a day or two."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <aside className="card p-5 h-fit space-y-4 font-mono text-sm">
          <div>
            <div className="text-xs text-ink-mute">// dm</div>
            <ul className="mt-1 space-y-1">
	      <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-accent-cyan link-underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-accent-cyan link-underline"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

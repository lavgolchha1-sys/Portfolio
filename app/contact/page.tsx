import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialIcons";

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
            <div className="mt-2">
              <SocialLinks iconClassName="w-5 h-5" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import { PageHeader } from "@/components/PageHeader";
import { DemoChat } from "@/components/DemoChat";

export const metadata = { title: "Demo" };

export default function DemoPage() {
  return (
    <div>
      <PageHeader
        command="./run-demo.sh"
        title="Live demo"
        description="A small interactive demo. The placeholder below uses canned responses — swap in your own model backend (Anthropic, OpenAI, or self-hosted) when ready."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DemoChat />
        </div>

        <aside className="card p-5 h-fit font-mono text-sm space-y-3">
          <div className="text-xs text-ink-mute"># notes</div>
          <p className="text-ink-dim leading-relaxed">
            This page is designed to host either:
          </p>
          <ul className="space-y-1 text-ink-dim">
            <li>
              <span className="text-accent-green">1.</span> a chat-style component
              wired to your own API route
            </li>
            <li>
              <span className="text-accent-green">2.</span> an{" "}
              <span className="text-accent-cyan">&lt;iframe&gt;</span> of a
              hosted demo (Hugging Face Spaces, Streamlit, Replit, etc.)
            </li>
          </ul>
          <div className="pt-3 border-t border-bg-line text-xs text-ink-mute">
            edit{" "}
            <span className="text-accent-cyan">components/DemoChat.tsx</span> or
            replace the section in{" "}
            <span className="text-accent-cyan">app/demo/page.tsx</span> with an
            iframe.
          </div>
        </aside>
      </div>
    </div>
  );
}

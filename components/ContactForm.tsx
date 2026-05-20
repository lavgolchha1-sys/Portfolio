import { site } from "@/content/site";

export function ContactForm() {
  if (!site.contactEndpoint) {
    return (
      <div className="card p-6 font-mono text-sm text-accent-pink">
        ✗ Contact endpoint not configured. Set site.contactEndpoint in
        content/site.ts.
      </div>
    );
  }

  return (
    <form
      action={site.contactEndpoint}
      method="POST"
      className="card p-6 space-y-4"
    >
      <input
        type="hidden"
        name="_subject"
        value="New message from your portfolio"
      />

      <div>
        <label className="block font-mono text-xs text-ink-mute mb-1">
          Name
        </label>
        <input
          name="name"
          required
          className="w-full bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60"
        />
      </div>

      <div>
        <label className="block font-mono text-xs text-ink-mute mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60"
        />
      </div>

      <div>
        <label className="block font-mono text-xs text-ink-mute mb-1">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full bg-bg-panel border border-bg-line rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent-cyan/60 resize-y"
        />
      </div>

      <button
        type="submit"
        className="font-mono text-sm px-4 py-2 rounded-md bg-accent-green/10 border border-accent-green/40 text-accent-green hover:bg-accent-green/20"
      >
        Submit
      </button>
    </form>
  );
}

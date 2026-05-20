import { PageHeader } from "@/components/PageHeader";
import { site } from "@/content/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title={`Hi, I'm ${site.name}.`}
        description={site.tagline}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="md:col-span-2 card p-6 space-y-4 leading-relaxed">
          <p>
            Actuarial professional specializing in{" "}
            <span className="text-accent-cyan">
              P&amp;C, reserving, regulatory reporting, and IFRS implementation
            </span>{" "}
            with experience across global markets (US, UK, South-East Asia, and
            India).
          </p>
          <p>
            At <span className="text-accent-cyan">WTW</span>, I supported
            reserve analysis and played a key role in IFRS 17 rollouts, building
            automated reporting tools and streamlining compliance for
            multinational insurers.
          </p>
          <p>
            Currently, at <span className="text-accent-cyan">ICICI Lombard</span>
            , I lead the end-to-end IFRS transition, partnering with auditors,
            senior management, and regulators to ensure alignment, compliance,
            and smooth process adoption.
          </p>
          <p>
            I am particularly interested in sustainability and climate change and am exploring how actuarial principles and data-driven approaches can be applied to these areas.
            Most of actuarial work looks backward - reserves, experience, run-off and so on. I'm more interested in the side that looks forward, especially climate risk and whether large
            chunks of the world stay insurable at all.
          </p>
          <p>
            Recognized for process automation, cross-functional collaboration,
            and translating complex actuarial concepts into actionable insights,
            I bring a track record of delivering regulatory compliance and
            financial transformation with efficiency and accuracy.
          </p>

          <div className="pt-2 border-t border-bg-line">
            <div className="font-mono text-xs text-ink-mute mb-2">
              # toolkit
            </div>
            <p className="text-sm text-ink-dim">
              Skilled in{" "}
              <span className="text-accent-green">ResQ, ResQFR, Igloo</span>{" "}
              (WTW proprietary tools) and MS Office Suite, with working
              knowledge of{" "}
              <span className="text-accent-green">
                Python, R, SQL and Tableau
              </span>
              .
            </p>
          </div>
        </article>

        <aside className="card p-5 h-fit space-y-4">
          <div>
            <div className="font-mono text-xs text-ink-mute">// contact</div>
            <a
              href={`mailto:${site.email}`}
              className="block mt-1 font-mono text-sm text-accent-green link-underline"
            >
              {site.email}
            </a>
          </div>
          <div>
            <div className="font-mono text-xs text-ink-mute">// elsewhere</div>
            <ul className="mt-1 font-mono text-sm space-y-1">
              <li>
                <a
                  href={site.socials.github}
                  className="text-ink hover:text-accent-cyan link-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  className="text-ink hover:text-accent-cyan link-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href={site.socials.x}
                  className="text-ink hover:text-accent-cyan link-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  x
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

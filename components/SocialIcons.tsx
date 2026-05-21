import { site } from "@/content/site";

type IconProps = { className?: string };

export function GithubIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.97 10.97 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.26 5.65.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.9l-5.4-7.07L4.5 22H1.24l8.04-9.19L1 2h7.06l4.88 6.46L18.24 2Zm-1.21 18h1.9L7.04 4H5.04l12 16Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

type SocialLinksProps = {
  iconClassName?: string;
  linkClassName?: string;
  includeEmail?: boolean;
  includePhone?: boolean;
  gap?: string;
};

export function SocialLinks({
  iconClassName = "w-5 h-5",
  linkClassName = "text-ink-dim hover:text-accent-cyan transition-colors",
  includeEmail = false,
  includePhone = false,
  gap = "gap-3",
}: SocialLinksProps) {
  const phoneHref = site.phone.replace(/\s+/g, "");
  return (
    <div className={`flex items-center ${gap}`}>
      {includeEmail && (
        <a
          href={`mailto:${site.email}`}
          aria-label={`Email ${site.email}`}
          title={site.email}
          className={linkClassName}
        >
          <MailIcon className={iconClassName} />
        </a>
      )}
      {includePhone && (
        <a
          href={`tel:${phoneHref}`}
          aria-label={`Phone ${site.phone}`}
          title={site.phone}
          className={linkClassName}
        >
          <PhoneIcon className={iconClassName} />
        </a>
      )}
      <a
        href={site.socials.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className={linkClassName}
      >
        <GithubIcon className={iconClassName} />
      </a>
      <a
        href={site.socials.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={linkClassName}
      >
        <LinkedinIcon className={iconClassName} />
      </a>
      <a
        href={site.socials.x}
        target="_blank"
        rel="noreferrer"
        aria-label="X"
        title="X"
        className={linkClassName}
      >
        <XIcon className={iconClassName} />
      </a>
    </div>
  );
}

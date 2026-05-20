"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

type NavItem = { href: string; label: string; icon: string };

const nav: NavItem[] = [
  { href: "/", label: "Home", icon: "~" },
  { href: "/about", label: "About", icon: "#" },
  // { href: "/projects", label: "Projects", icon: "{}" },
  { href: "/skills", label: "Skills", icon: "</>" },
  { href: "/resume", label: "Resume", icon: "::" },
  // { href: "/blog", label: "Blog", icon: ">_" },
  // { href: "/demo", label: "Demo", icon: "@" },
  { href: "/contact", label: "Contact", icon: "@@" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 flex-col border-r border-bg-line bg-bg-panel/80 backdrop-blur sticky top-0 h-screen">
      <div className="px-5 py-6 border-b border-bg-line">
        <div className="font-mono text-xs text-ink-mute">Portfolio</div>
        <div className="mt-1 font-semibold text-ink">{site.name}</div>
        <div className="font-mono text-xs text-accent-green mt-0.5">
          {site.role}
        </div>
      </div>

      <nav className="px-3 py-4 flex-1 overflow-y-auto">
        <div className="px-2 mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
          navigate
        </div>
        <ul className="space-y-0.5">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-bg-card text-ink border border-bg-line"
                      : "text-ink-dim hover:text-ink hover:bg-bg-card/50 border border-transparent",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "font-mono text-xs w-7 text-center",
                      active ? "text-accent-green" : "text-ink-mute",
                    ].join(" ")}
                  >
                    {item.icon}
                  </span>
                  <span className="font-mono">{item.label}</span>
                  {active && (
                    <span className="ml-auto font-mono text-[10px] text-accent-green">
                      ●
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-5 py-4 border-t border-bg-line font-mono text-[11px] text-ink-mute">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-green" />
          available for work
        </div>
        <div className="mt-2">© {new Date().getFullYear()} {site.name}</div>
      </div>
    </aside>
  );
}

export function MobileTopbar() {
  return (
    <header className="md:hidden sticky top-0 z-20 border-b border-bg-line bg-bg-panel/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-mono text-sm">
          <span className="text-accent-green">~</span>
          <span className="text-ink-dim">/</span>
          <span className="text-ink">{site.handle}</span>
        </Link>
        <details className="relative">
          <summary className="list-none cursor-pointer font-mono text-xs px-2 py-1 rounded border border-bg-line text-ink-dim">
            menu
          </summary>
          <div className="absolute right-0 top-full mt-2 w-48 card p-2 z-30">
            <ul className="space-y-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 font-mono text-sm text-ink-dim hover:text-ink hover:bg-bg-card rounded"
                  >
                    <span className="text-ink-mute mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}

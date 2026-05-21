import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, Topbar } from "@/components/Sidebar";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-backdrop min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col">
            <Topbar />
            <main className="flex-1 px-5 md:px-10 py-8 md:py-12 max-w-5xl w-full mx-auto">
              {children}
            </main>
            <footer className="border-t border-bg-line px-5 md:px-10 py-6 font-mono text-xs text-ink-mute">
              <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
                <span>
                  <span className="text-accent-green"></span>
                </span>
                <span>Thanks for stopping by!</span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

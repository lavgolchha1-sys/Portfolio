type PageHeaderProps = {
  command?: string;
  title: string;
  description?: string;
};

export function PageHeader({ command, title, description }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {command && (
        <div className="font-mono text-xs text-ink-mute">
          <span className="text-ink">{command}</span>
        </div>
      )}
      <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-ink-dim max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 h-px bg-gradient-to-r from-bg-line via-bg-line to-transparent" />
    </header>
  );
}

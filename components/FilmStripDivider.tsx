export default function FilmStripDivider({ label }: { label?: string }) {
  const holes = Array.from({ length: 40 });
  return (
    <div className="relative flex items-center gap-4 px-6 md:px-16">
      <div className="flex-1 h-px bg-white/10" />
      <div className="flex items-center gap-[6px] overflow-hidden max-w-[220px]">
        {holes.map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 shrink-0 rounded-[2px] bg-white/10"
          />
        ))}
      </div>
      {label && (
        <span className="eyebrow whitespace-nowrap">{label}</span>
      )}
      <div className="flex items-center gap-[6px] overflow-hidden max-w-[220px]">
        {holes.map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 shrink-0 rounded-[2px] bg-white/10"
          />
        ))}
      </div>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

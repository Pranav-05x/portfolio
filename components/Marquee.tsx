export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[#1F2A37] py-6 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
      <div className="marquee flex w-max">
        {row.map((t, i) => (
          <span key={i} className="whitespace-nowrap pr-14 font-[family-name:var(--font-display)] text-3xl text-[#8B97A6]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
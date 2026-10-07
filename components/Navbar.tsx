const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1F2A37] bg-[#0A0E13]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-[family-name:var(--font-display)] text-xl">Portfolio</a>
        <nav className="flex gap-6 text-sm text-[#8B97A6]">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-[#E9E6DF]">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
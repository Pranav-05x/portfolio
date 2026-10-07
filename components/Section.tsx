import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-[#1F2A37] py-20">
      <Reveal>
        <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}
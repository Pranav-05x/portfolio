import { site } from "../data/site";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Projects from "../components/Projects";
import ScrollProgress from "../components/ScrollProgress";
import CursorGlow from "../components/CursorGlow";
import SplitText from "../components/SplitText";
import Typewriter from "../components/Typewriter";
import Magnetic from "../components/Magnetic";
import Marquee from "../components/Marquee";
import CopyEmail from "../components/CopyEmail";
import CommandPalette from "../components/CommandPalette";

export default function Home() {
  const skillWords = site.skills.flatMap((s) => s.items.split(", "));

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <CommandPalette />
      <Navbar />
      <main>
        <div className="mx-auto max-w-5xl px-6">
          <section className="relative flex min-h-screen flex-col justify-center pt-24">
            <div className="float pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#C8B27A]/10 blur-3xl" />
            <p className="rise mb-6 inline-flex items-center gap-2 text-sm text-[#8B97A6]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8B27A]" /> Open to internships in 2027
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.95] tracking-tight">
              <SplitText text={`I'm ${site.name}.`} />
              <br />
              <span className="italic text-[#C8B27A]">
                <Typewriter words={site.roles} />
              </span>
            </h1>
            <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-[#8B97A6] [animation-delay:.6s]">
             I’m a Computer Engineering student focused on building scalable, full-stack applications with modern web technologies and AI.
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:.8s]">
              <Magnetic>
                <a href="#contact" className="inline-block rounded-full bg-[#C8B27A] px-6 py-3 text-sm font-semibold text-[#0A0E13]">
                  Get in touch
                </a>
              </Magnetic>
              <Magnetic>
                <a href={site.resume} download className="inline-block rounded-full border border-[#2A3748] px-6 py-3 text-sm transition hover:border-[#C8B27A]">
                  Download resume
                </a>
              </Magnetic>
            </div>
          </section>
        </div>

        <Marquee items={skillWords} />

        <div className="mx-auto max-w-5xl px-6">
          <Section id="about" title="About">
            <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
              <div className="max-w-xl space-y-4 leading-relaxed text-[#8B97A6]">
                <p>I’m a Computer Engineering student and aspiring Full-Stack Developer passionate about building scalable, practical web applications. I work with React, Node.js, Express.js, MongoDB, and PostgreSQL, while continuously improving my DSA and problem-solving skills.</p>
                <p>I enjoy building real-world projects and exploring how AI can be effectively integrated into modern applications. I’m currently looking for internship opportunities where I can learn, contribute to real-world products, and grow as a software developer.</p>
              </div>
              <dl className="space-y-4 text-sm">
                <div><dt className="text-[#8B97A6]">Studying</dt><dd>B.E. Computer Science, DYPIT Pimpri</dd></div>
                <div><dt className="text-[#8B97A6]">Based in</dt><dd>Pune, India</dd></div>
                <div><dt className="text-[#8B97A6]">Looking for</dt><dd>Full-stack internship</dd></div>
              </dl>
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#1F2A37] bg-[#1F2A37] sm:grid-cols-3">
              {site.skills.map((s) => (
                <div key={s.group} className="bg-[#0A0E13] p-8 transition-colors duration-300 hover:bg-[#111821]">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl">{s.group}</h3>
                  <p className="text-[#8B97A6]">{s.items}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Projects />

        <div className="mx-auto max-w-5xl px-6">
          <Section id="contact" title="Let's talk">
            <a href={`mailto:${site.email}`} className="break-words font-[family-name:var(--font-display)] text-3xl text-[#C8B27A] underline-offset-8 hover:underline md:text-5xl">
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#8B97A6]">
              <CopyEmail email={site.email} />
              {site.social.map((s) => (
                <a key={s.label} href={s.url} className="transition-colors hover:text-[#E9E6DF]">{s.label}</a>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <footer className="border-t border-[#1F2A37] py-8 text-center text-sm text-[#8B97A6]">Built by {site.name}</footer>
    </>
  );
}
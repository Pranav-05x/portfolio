"use client";
import { useState } from "react";
import { site } from "../data/site";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Projects() {
  const tags = Array.from(new Set(site.projects.flatMap((p) => p.tags ?? [])));
  const [active, setActive] = useState("All");
  const shown = site.projects.filter((p) => active === "All" || p.tags?.includes(active));

  return (
    <section id="projects" className="scroll-mt-20 border-y border-[#1F2A37] bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl">Projects</h2>
          {site.projects.length === 0 ? (
            <div className="max-w-xl rounded-2xl border border-dashed border-[#2A3748] bg-[#0D1117] p-10">
              <p className="mb-4 flex items-center gap-2 text-sm text-[#8B97A6]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8B27A]" /> In progress
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl">First project coming soon</h3>
              <p className="mt-2 text-[#8B97A6]">I'm building it now. Get in touch to hear what I'm working on.</p>
            </div>
          ) : (
            <>
              {tags.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {["All", ...tags].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActive(t)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition ${
                        active === t ? "border-[#C8B27A] bg-[#C8B27A] text-black" : "border-[#2A3748] text-[#8B97A6] hover:border-[#C8B27A]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                {shown.map((p) => (
                  <TiltCard key={p.title}>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl">{p.title}</h3>
                    <p className="my-3 text-[#8B97A6]">{p.description}</p>
                    <div className="flex gap-5 text-sm text-[#C8B27A]">
                      {p.live && <a href={p.live}>Live site</a>}
                      {p.repo && <a href={p.repo}>Source code</a>}
                    </div>
                  </TiltCard>
                ))}
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
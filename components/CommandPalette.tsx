"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

const items = [
  ...["About", "Skills", "Projects", "Contact"].map((n) => ({
    label: `Go to ${n}`,
    run: () => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" }),
  })),
  { label: "Copy email", run: () => navigator.clipboard.writeText(site.email) },
  ...site.social.map((s) => ({ label: `Open ${s.label}`, run: () => window.open(s.url, "_blank") })),
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const list = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  function run(fn: () => void) {
    fn();
    setOpen(false);
    setQ("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-[#2A3748] bg-[#111821] px-4 py-2 text-xs text-[#8B97A6] transition hover:border-[#C8B27A]"
      >
        Ctrl K
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-black/70 px-4 pt-[20vh] backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: -16, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -16, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md overflow-hidden rounded-2xl border border-[#2A3748] bg-[#0D1117]"
            >
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && list[0] && run(list[0].run)}
                placeholder="Type a command..."
                className="w-full border-b border-[#1F2A37] bg-transparent px-5 py-4 outline-none placeholder:text-[#8B97A6]"
              />
              <ul className="max-h-72 overflow-auto p-2">
                {list.map((i) => (
                  <li key={i.label}>
                    <button onClick={() => run(i.run)} className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[#161F2B]">
                      {i.label}
                    </button>
                  </li>
                ))}
                {list.length === 0 && <li className="px-3 py-2 text-sm text-[#8B97A6]">No match</li>}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
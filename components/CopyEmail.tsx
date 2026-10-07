"use client";
import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(email);
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  }
  return (
    <button onClick={copy} className="rounded-full border border-[#2A3748] px-5 py-2 text-sm transition hover:border-[#C8B27A]">
      {done ? "Copied" : "Copy email"}
    </button>
  );
}
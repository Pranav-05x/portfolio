"use client";
import { motion } from "framer-motion";

export default function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {w}{"\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
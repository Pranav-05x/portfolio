"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];
    let delay = del ? 35 : 75;
    if (!del && text === word) delay = 1500;
    if (del && text === "") delay = 300;
    const t = setTimeout(() => {
      if (!del && text === word) setDel(true);
      else if (del && text === "") {
        setDel(false);
        setI((i + 1) % words.length);
      } else setText(word.slice(0, text.length + (del ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#C8B27A]">&nbsp;</span>
    </span>
  );
}
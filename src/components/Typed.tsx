import { useEffect, useState } from "react";
import { reduced } from "./util";

export default function Typed({ text, delay = 900 }: { text: string; delay?: number }) {
  const [n, setN] = useState(reduced() ? text.length : 0);
  useEffect(() => {
    if (reduced()) return;
    let i = 0, iv: ReturnType<typeof setInterval>;
    const t = setTimeout(() => { iv = setInterval(() => { i++; setN(i); if (i >= text.length) clearInterval(iv); }, 45); }, delay);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [text, delay]);
  return (
    <span className={n < text.length ? "caret" : ""} aria-label={text}>
      <span aria-hidden>{text.slice(0, n)}</span>
    </span>
  );
}

import { useEffect, useState } from "react";

const LINKS = [
  ["about", "About"], ["projects", "Projects"], ["skills", "Skills"], ["credentials", "Credentials"], ["contact", "Contact"],
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    let last = 0;
    const onS = () => { const y = scrollY; setHidden(y > last && y > 120); last = y; };
    addEventListener("scroll", onS, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { removeEventListener("scroll", onS); io.disconnect(); };
  }, []);
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-(--color-ink)/10 bg-(--color-canvas)/80 backdrop-blur-md"
      style={{ transform: hidden ? "translateY(-100%)" : "none", transition: "transform 0.5s var(--ease)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide">JP</a>
        <nav className="flex gap-4 text-[10px] uppercase tracking-[0.2em] sm:gap-7 sm:text-[11px]">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`u-link transition-colors duration-500 ${active === id ? "text-(--color-accent)" : "text-(--color-ink-dim)"} ${id === "credentials" ? "hidden sm:inline" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

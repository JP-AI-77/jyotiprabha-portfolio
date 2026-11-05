import { useEffect, useRef } from "react";
import { reduced } from "./util";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    el.style.display = "block";
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.15; y += (ty - y) * 0.15;
      el.style.transform = `translate3d(${x - 150}px,${y - 150}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 hidden h-[300px] w-[300px] rounded-full opacity-25"
      style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 65%)", willChange: "transform" }}
    />
  );
}

import { useRef, type ReactNode } from "react";
import { reduced } from "./util";

export default function TiltCard({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduced() || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateY(-6px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={className}
      style={{ transition: "transform 0.5s var(--ease)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

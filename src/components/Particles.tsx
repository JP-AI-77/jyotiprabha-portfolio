import { useEffect, useRef } from "react";
import { cssVar, isMobile, reduced } from "./util";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const color = cssVar("--color-accent");
    const N = isMobile() ? 28 : 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random(), s: 0.0002 + Math.random() * 0.0004,
    }));
    let w = 0, h = 0, raf = 0, sy = 0, mx = 0, my = 0;
    const size = () => { w = innerWidth; h = innerHeight; c.width = w * dpr; c.height = h * dpr; };
    size();
    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      for (const p of pts) {
        if (!reduced()) { p.y -= p.s; if (p.y < -1) p.y = 1; }
        const par = 1 + p.z * 1.5;
        const px = w / 2 + (p.x + mx * 0.04 * p.z) * w * 0.5;
        const py = h / 2 + (p.y - (sy * 0.00008 * p.z)) * h * 0.5 + Math.sin(t / 1500 + p.x * 6) * 4;
        ctx.globalAlpha = 0.25 + p.z * 0.5;
        ctx.beginPath(); ctx.arc(px, ((py % h) + h) % h, par, 0, 6.283); ctx.fill();
      }
      if (!reduced()) raf = requestAnimationFrame(draw);
    };
    const onS = () => { sy = scrollY; if (reduced()) draw(0); };
    const onM = (e: PointerEvent) => { mx = e.clientX / w - 0.5; my = e.clientY / h - 0.5; void my; };
    addEventListener("resize", size); addEventListener("scroll", onS, { passive: true }); addEventListener("pointermove", onM);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); removeEventListener("scroll", onS); removeEventListener("pointermove", onM); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute left-0 top-0 h-screen w-full opacity-40" />;
}

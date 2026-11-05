import { useEffect, useRef } from "react";
import { cssVar, isMobile, reduced } from "./util";

// Lightweight software-projected 3D: wireframe icosahedron + orbiting data nodes.
export default function HeroScene() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const accent = cssVar("--color-accent");
    const ink = cssVar("--color-ink");
    const phi = (1 + Math.sqrt(5)) / 2;
    const raw: number[][] = [];
    for (const a of [-1, 1]) for (const b of [-phi, phi]) { raw.push([0, a, b], [a, b, 0], [b, 0, a]); }
    const V = raw.map(([x, y, z]) => { const l = Math.hypot(x, y, z); return [x / l, y / l, z / l]; });
    const E: [number, number][] = [];
    for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) {
      const d = Math.hypot(V[i][0] - V[j][0], V[i][1] - V[j][1], V[i][2] - V[j][2]);
      if (d < 1.1) E.push([i, j]);
    }
    const orbit = isMobile() ? 4 : 8;
    let W = 0, H = 0, raf = 0, mx = 0, my = 0, tmx = 0, tmy = 0, sy = 0;
    const size = () => {
      const r = c.getBoundingClientRect(); W = r.width; H = r.height;
      c.width = W * dpr; c.height = H * dpr;
    };
    size();
    const rot = (p: number[], ax: number, ay: number) => {
      const [x, y, z] = p;
      const y1 = y * Math.cos(ax) - z * Math.sin(ax), z1 = y * Math.sin(ax) + z * Math.cos(ax);
      return [x * Math.cos(ay) + z1 * Math.sin(ay), y1, -x * Math.sin(ay) + z1 * Math.cos(ay)];
    };
    const proj = (p: number[], R: number) => {
      const f = 3 / (3 - p[2]);
      return [W / 2 + p[0] * R * f, H / 2 + p[1] * R * f, f];
    };
    const draw = (t: number) => {
      mx += (tmx - mx) * 0.06; my += (tmy - my) * 0.06;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const ay = t / 6000 + sy * 0.0015 + mx * 0.8, ax = 0.4 + sy * 0.0008 + my * 0.6;
      const R = Math.min(W, H) * 0.42;
      ctx.lineWidth = 1;
      ctx.strokeStyle = accent;
      const P = V.map((v) => proj(rot(v, ax, ay), R));
      for (const [a, b] of E) {
        ctx.globalAlpha = 0.25 + 0.35 * ((P[a][2] + P[b][2]) / 2 - 0.8);
        ctx.beginPath(); ctx.moveTo(P[a][0], P[a][1]); ctx.lineTo(P[b][0], P[b][1]); ctx.stroke();
      }
      ctx.fillStyle = accent; ctx.globalAlpha = 0.9;
      for (const p of P) { ctx.beginPath(); ctx.arc(p[0], p[1], 2.2 * p[2], 0, 6.283); ctx.fill(); }
      ctx.fillStyle = ink;
      for (let i = 0; i < orbit; i++) {
        const a = t / 3500 + (i / orbit) * 6.283;
        const o = rot([Math.cos(a) * 1.45, Math.sin(a * 0.5) * 0.35, Math.sin(a) * 1.45], ax * 0.5, ay * 0.6);
        const q = proj(o, R);
        ctx.globalAlpha = 0.35 + 0.4 * (q[2] - 0.8);
        ctx.beginPath(); ctx.arc(q[0], q[1], 3 * q[2], 0, 6.283); ctx.fill();
      }
      if (!reduced()) raf = requestAnimationFrame(draw);
    };
    const onM = (e: PointerEvent) => { tmx = e.clientX / innerWidth - 0.5; tmy = e.clientY / innerHeight - 0.5; };
    const onS = () => { sy = scrollY; if (reduced()) draw(0); };
    addEventListener("pointermove", onM); addEventListener("scroll", onS, { passive: true }); addEventListener("resize", size);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("pointermove", onM); removeEventListener("scroll", onS); removeEventListener("resize", size); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}

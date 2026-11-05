import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import Typed from "../components/Typed";

const HeroScene = lazy(() => import("../components/HeroScene"));

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <motion.section id="top" variants={container} initial="hidden" animate="show" className="relative overflow-hidden pb-10 pt-24">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[900px] w-[600px] opacity-50"
        style={{ background: "radial-gradient(ellipse at center, var(--color-canvas-2) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h1
          variants={item}
          className="font-display text-center text-[64px] font-semibold leading-[0.9] sm:text-[110px] md:text-[140px]"
        >
          JYOTI PRABHA
        </motion.h1>

        <motion.div variants={item} className="relative mt-8 flex justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[min(130vw,760px)] -translate-x-1/2 -translate-y-1/2">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
          <img
            src="/img/jyoti.jpg"
            alt="Portrait of Jyoti Prabha"
            width={1086}
            height={1448}
            className="relative aspect-[3/4] w-[62vw] max-w-[340px] rounded-t-[999px] rounded-b-md border border-(--color-ink)/20 object-cover object-top shadow-[0_30px_60px_var(--color-shadow)]"
          />
          <div className="absolute right-[6%] top-[45%] hidden h-[118px] w-[118px] items-center justify-center rounded-full border border-(--color-ink)/20 bg-(--color-canvas)/70 text-center backdrop-blur sm:flex md:right-[16%]">
            <span className="px-3 text-[9px] uppercase tracking-[0.18em] text-(--color-ink-dim)">
              Open To
              <br />
              AI/ML Internships
            </span>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div variants={item}>
            <div className="text-[15px] tracking-[0.24em] text-(--color-accent)">I'M JYOTI PRABHA</div>
            <h2 className="font-display mt-1 text-4xl font-bold leading-tight">AI / ML ENTHUSIAST</h2>
            <div className="mt-1 text-[13px] tracking-[0.22em] text-(--color-ink-dim)">
              B.TECH CSE (DATA SCIENCE) · LUCKNOW, INDIA
            </div>
            <p className="mt-5 min-h-[3.6em] max-w-[360px] font-display text-xl italic leading-snug">
              <Typed text="Turning data into predictions, one model at a time." />
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-start text-left md:items-end md:text-right">
            <ul className="space-y-2 text-[13px] tracking-[0.08em] text-(--color-ink-dim)">
              {["ARTIFICIAL INTELLIGENCE", "MACHINE LEARNING", "GENERATIVE AI & RAG", "DATA ANALYSIS"].map((t) => (
                <li key={t}><span className="text-(--color-accent)">— </span>{t}</li>
              ))}
            </ul>
            <a
              href="#projects"
              className="btn-glow mt-7 inline-block border border-(--color-ink) px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] hover:bg-(--color-ink) hover:text-(--color-canvas)"
            >
              View My Projects
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

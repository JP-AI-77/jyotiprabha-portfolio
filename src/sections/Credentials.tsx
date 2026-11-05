import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "../components/Reveal";
import { reduced } from "../components/util";

gsap.registerPlugin(ScrollTrigger);

const EDU = [
  ["Aug 2024 – Aug 2028 (Expected)", "APJ Abdul Kalam Technological University", "B.Tech, Computer Science & Engineering (Data Science)"],
  ["2024", "New Public Inter College, Lucknow", "Higher Secondary Education (Senior Secondary)"],
];
const IBM = [
  "Introduction to Retrieval-Augmented Generation",
  "Unleashing the Power of AI Agents",
  "AI's New Superpower: Multimodal Retrieval-Augmented Generation",
  "The Rise of Multiagent Systems",
  "Retrieval-Augmented Generation for Enhanced AI Outputs",
  "Make Agentic AI Work for You",
];
const OTHER = [
  ["Foundations of Prompt Engineering", "Amazon Web Services (AWS)"],
  ["Generative AI for Everyday Life", "SWAYAM, MHRD (Govt. of India)"],
  ["What Is Generative AI?", "LinkedIn Learning · Jul 2026"],
  ["Cybersecurity Analyst Job Simulation", "Forage · Jul 2026"],
  ["C Programming Basics", "SkillUp by Simplilearn"],
];

export default function Credentials() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!wrap.current || !line.current || reduced()) {
      if (line.current) line.current.style.transform = "scaleY(1)";
      return;
    }
    const tw = gsap.fromTo(line.current, { scaleY: 0 }, {
      scaleY: 1, ease: "none", transformOrigin: "top",
      scrollTrigger: { trigger: wrap.current, start: "top 75%", end: "bottom 60%", scrub: true },
    });
    return () => { tw.scrollTrigger?.kill(); tw.kill(); };
  }, []);

  return (
    <section id="credentials" className="bg-(--color-canvas-2) py-14">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <div>
          <Reveal><h2 className="font-display text-4xl italic sm:text-5xl">Education</h2></Reveal>
          <div ref={wrap} className="relative mt-9 pl-8">
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-(--color-ink)/15" />
            <div ref={line} className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-(--color-accent)" style={{ transform: "scaleY(0)" }} />
            {EDU.map(([when, school, deg], i) => (
              <Reveal key={school} delay={i * 0.1} className="relative pb-10 last:pb-0">
                <span className="absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full bg-(--color-accent) shadow-[0_0_14px_var(--glow)]" />
                <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">{when}</div>
                <h3 className="font-display mt-2 text-xl font-bold">{school}</h3>
                <p className="mt-1 text-sm text-(--color-ink-dim)">{deg}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal><h2 className="font-display text-4xl italic sm:text-5xl">Certifications</h2></Reveal>
          <Reveal delay={0.1} className="mt-9">
            <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">IBM · Jul 2026</div>
            <ul className="mt-3 space-y-2 text-sm">
              {IBM.map((c) => <li key={c} className="flex gap-3"><span className="text-(--color-accent)">—</span>{c}</li>)}
            </ul>
            <div className="mt-8 text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">Other</div>
            <ul className="mt-3 space-y-2 text-sm">
              {OTHER.map(([c, by]) => (
                <li key={c} className="flex gap-3"><span className="text-(--color-accent)">—</span><span>{c} <span className="text-(--color-ink-dim)">· {by}</span></span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

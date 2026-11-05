import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const FOCUS = [
  ["01", "AI & Machine Learning", "Building a foundation in machine learning fundamentals and AI-driven problem solving."],
  ["02", "Generative AI & RAG", "Prompt engineering, retrieval-augmented generation, agentic AI and multiagent systems."],
  ["03", "Data Science & Analysis", "Cleaning, exploring and visualising data with Python and Power BI."],
  ["04", "Software Development", "Python, Core Java and C, with data structures and object-oriented programming."],
];

export default function About() {
  return (
    <section id="about" className="bg-(--color-paper) py-14 text-(--color-ink-on-paper)">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="flex items-baseline gap-4">
            <span className="text-2xl text-(--color-canvas-2)">+</span>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">ABOUT ME</h2>
          </div>
          <p className="text-[15px] leading-[1.8] text-(--color-canvas-2)">
            I'm a Computer Science (Data Science) undergraduate in Lucknow with a solid grounding in Python, Core Java and
            AI fundamentals, including Generative AI and Prompt Engineering. I enjoy turning raw data into insight, from
            analysing Blinkit sales to predicting crop yields. I'm looking for an entry-level role or internship in AI and
            Machine Learning, where I can apply my analytical thinking and keep growing.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.1}>
              <TiltCard className="h-full rounded bg-(--color-canvas-2) p-6 text-(--color-ink) shadow-[0_18px_40px_var(--color-shadow)]">
                <span className="font-display text-xs text-(--color-accent)">{n}</span>
                <h3 className="font-display mt-10 text-lg tracking-wide">{t}</h3>
                <p className="mt-2 text-xs leading-[1.7] text-(--color-ink-dim)">{d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "../components/Reveal";

const GROUPS = [
  ["Languages", ["Python", "Core Java", "C"]],
  ["AI / Machine Learning", ["Machine Learning Fundamentals", "Scikit-Learn", "Generative AI", "Prompt Engineering", "RAG", "Agentic AI", "Multiagent Systems"]],
  ["Data & Analytics", ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"]],
  ["Tools & Fundamentals", ["Flask", "HTML/CSS", "Data Structures & Algorithms (basics)", "Object-Oriented Programming", "Cloud Computing (AWS)", "Cybersecurity Basics"]],
  ["Soft Skills", ["Problem Solving", "Analytical Thinking", "Communication", "Leadership", "Team Collaboration"]],
] as const;

const STATS = [
  ["11", "Certifications"], ["6", "IBM Courses"], ["3", "Programming Languages"], ["2", "Spoken Languages"],
];

export default function Skills() {
  return (
    <>
      <section className="border-y border-(--color-ink)/15 bg-(--color-canvas-2) py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 text-center sm:grid-cols-4">
          {STATS.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.08} className={`py-1.5 ${i < 3 ? "sm:border-r sm:border-(--color-ink)/15" : ""}`}>
              <div className="font-display text-4xl font-bold">{n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-(--color-ink-dim)">{l}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="skills" className="bg-(--color-canvas) py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl italic sm:text-5xl">Skills</h2>
          </Reveal>
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map(([g, items], i) => (
              <Reveal key={g} delay={i * 0.08} className="border-t border-(--color-ink)/15 pt-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">{g}</div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s} className="badge rounded-full border border-(--color-ink)/20 px-3 py-1 text-xs">{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

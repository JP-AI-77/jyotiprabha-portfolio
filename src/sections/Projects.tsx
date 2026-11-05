import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const PROJECTS = [
  {
    tag: "Latest",
    title: "Crop Yield Prediction & Harvest Analysis Engine",
    desc: "A machine learning web app that predicts crop yield and analyses harvest data, served through a Flask interface with a pickled Scikit-Learn model.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask", "HTML/CSS", "Pickle"],
  },
  {
    tag: "Data Analytics",
    title: "Blinkit Sales Data Analytics",
    desc: "Analysed quick-commerce sales data to uncover trends in order volume, revenue and customer behaviour, and presented the findings in an interactive Power BI dashboard.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-(--color-canvas) py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">PROJECTS</h2>
          <p className="max-w-[240px] text-sm leading-[1.7] text-(--color-ink-dim)">
            Hands-on work in machine learning and data analysis.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <TiltCard className="flex h-full flex-col justify-between rounded border border-(--color-ink)/15 bg-(--color-canvas-2) p-7 hover:border-(--color-accent)/60 hover:shadow-[0_20px_50px_var(--glow)]">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-(--color-accent)">{p.tag}</div>
                  <h3 className="font-display mt-4 text-2xl font-bold leading-snug sm:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-(--color-ink-dim)">{p.desc}</p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="badge rounded-full border border-(--color-ink)/20 px-3 py-1 text-[11px] text-(--color-ink-dim)">{t}</li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

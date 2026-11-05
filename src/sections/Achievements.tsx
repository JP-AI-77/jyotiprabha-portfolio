import Reveal from "../components/Reveal";

const ACHIEVEMENTS = [
  {
    title: "3rd Rank – GDG SRM CEM Hackathon",
    description:
      "Achieved 3rd rank with my team at the GDG SRM CEM Hackathon.",
    label: "Hackathon Recognition",
    icon: "🏆",
  },
  {
    title: "Engineering Excellence Award",
    description:
      "Received the Engineering Excellence Award for three consecutive years.",
    label: "Academic Achievement",
    icon: "🏅",
  },
  {
    title: "Dainik Jagran Academic Recognition",
    description:
      "Received a recognition certificate and medal for scoring 94% in Class 12 (ISC).",
    label: "94% · Class 12",
    icon: "🎖️",
  },
  {
    title: "Engineers' Day Volunteer",
    description:
      "Volunteered at Engineers' Day events organized by my college.",
    label: "Volunteering",
    icon: "🤝",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-(--color-canvas-2) py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl italic sm:text-5xl">
            Achievements & Recognition
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-(--color-ink-dim)">
            Milestones and recognitions reflecting my academic journey,
            teamwork and growth.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full min-w-0 rounded-2xl border border-(--color-ink)/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent)">
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">
                  {item.label}
                </p>
                <h3 className="font-display mt-2 break-words text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 break-words text-sm leading-6 text-(--color-ink-dim)">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
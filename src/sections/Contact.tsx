import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-(--color-canvas) pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Let's Build Something
            <em className="mt-1 block text-4xl font-medium italic sm:text-[46px]">Intelligent</em>
          </h2>
          <div className="flex max-w-[300px] items-center gap-3.5 rounded-full border border-(--color-ink)/20 py-2 pl-2 pr-5">
            <img src="/img/jyoti.jpg" alt="Jyoti Prabha" className="h-12 w-12 rounded-full object-cover object-top" />
            <div>
              <div className="text-[11px] text-(--color-ink-dim)">
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-(--color-ok)" />
                Open to opportunities
              </div>
              <div className="text-xs font-medium">AI / ML internships</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-10 border-t border-(--color-ink)/15 pt-8 sm:grid-cols-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">Get In Touch</div>
            <a href="mailto:rekha25sept@gmail.com" className="u-link mt-3.5 inline-block break-all text-[15px]">rekha25sept@gmail.com</a>
            <div>
              <a href="mailto:rekha25sept@gmail.com" className="btn-glow mt-7 inline-block border border-(--color-ink) px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] hover:bg-(--color-ink) hover:text-(--color-canvas)">
                Let's Work Together
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">Location</div>
            <div className="mt-3.5 text-[15px]">Lucknow, Uttar Pradesh, India</div>
            <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">Languages</div>
            <div className="mt-3.5 text-[15px]">English, Hindi</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">Follow</div>
            <div className="mt-3.5 text-[15px]">
              <a href="https://www.linkedin.com/in/jyotiprabha-2b0130330" target="_blank" rel="noreferrer" className="u-link inline-block hover:text-(--color-accent)">LinkedIn</a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-wrap justify-between gap-2 border-t border-(--color-ink)/15 pt-6 text-[10px] uppercase tracking-[0.15em] text-(--color-ink-dim)">
          <span>© 2026 Jyoti Prabha</span>
          <span>AI / ML Portfolio</span>
        </footer>
      </div>
    </section>
  );
}

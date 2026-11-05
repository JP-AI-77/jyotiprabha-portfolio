import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Credentials from "./sections/Credentials";
import Contact from "./sections/Contact";
import Cursor from "./components/Cursor";
import Particles from "./components/Particles";
import { reduced } from "./components/util";

export default function App() {
  useEffect(() => {
    if (reduced()) return;
    const lenis = new Lenis({ duration: 1.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return (
    <main className="bg-(--color-canvas) text-(--color-ink)">
      <div aria-hidden className="pointer-events-none sticky top-0 z-[55] h-0 overflow-visible">
        <Particles />
        <Cursor />
      </div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
    </main>
  );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "@/assets/mk.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Created" },
];

export const About = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        y: 60, opacity: 0, stagger: 0.1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".about-img", {
        scale: 1.15, opacity: 0, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".about-stat", {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">01 — About</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="about-img relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
              <img src={portrait} alt="MK Khalid portrait" loading="lazy" width={1024} height={1280}
                className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass-strong p-5 shadow-glow md:block">
              <div className="text-serif text-4xl text-gradient-gold">★ ★ ★ ★ ★</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Trusted by 30+ teams</div>
            </div> */}
          </div>

          <div className="lg:col-span-7">
            <h2 className="about-line text-serif text-5xl leading-[1.05] md:text-7xl">
              Building modern digital products with  <span className="italic text-gradient-gold">precision, </span> creativity, <span className="italic">and purpose.</span>.
            </h2>
            <div className="about-line mt-8 max-w-xl text-lg text-muted-foreground">
              I’m a passionate Full Stack Developer focused on creating high-performance, scalable, and visually engaging web applications. I specialize in transforming ideas into real-world products with clean code, smooth user experiences, and strong problem-solving.
            </div>
            <div className="about-line mt-6 max-w-xl text-lg text-muted-foreground">
              From responsive frontend interfaces to powerful backend systems, I build solutions that are fast, reliable, and designed for growth.
            </div>

            <div className="about-stats mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="about-stat rounded-2xl glass p-5">
                  <div className="text-serif text-4xl text-gradient-gold">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

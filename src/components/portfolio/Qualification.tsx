import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const education = [
  { year: "2023 — 2027", title: "B.Sc. Computer Science and Engineering", place: "Varendra University, Rajshahi", desc: "Now Studying. Focus on systems, algorithms, web." },
  { year: "2021 — 2022", title: "H.S.C", place: "Sorkari Abdul Karim Sorkar College, Tanore, Rajshahi", desc: "" },
  { year: "2019 — 2020", title: "S.S.C", place: "Mundumala Govrnment High School, Tanore , Rajshahi", desc: "" },
];
const experience = [
  
];

export const Qualification = () => {
  const ref = useRef<HTMLElement>(null);
  const [tab, setTab] = useState<"edu" | "exp">("edu");
  const data = tab === "edu" ? education : experience;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tl-item", {
        opacity: 0, x: -40, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".timeline", start: "top 75%" },
      });
      gsap.from(".tl-line", {
        scaleY: 0, transformOrigin: "top", duration: 1.6, ease: "power2.out",
        scrollTrigger: { trigger: ".timeline", start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, [tab]);

  return (
    <section id="qualification" ref={ref} className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">04 — Qualification</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-12">
          <h2 className="lg:col-span-7 text-serif text-5xl leading-[1.05] md:text-7xl">
            A path of <span className="italic text-gradient-gold">study</span> &amp; <span className="italic">work</span>.
          </h2>

          <div className="lg:col-span-5 lg:self-end">
            <div className="inline-flex rounded-full glass-strong p-1.5">
              {[
                { id: "edu", label: "Education", Icon: GraduationCap },
                { id: "exp", label: "Experience", Icon: Briefcase },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as "edu" | "exp")}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                    tab === t.id ? "bg-gold-gradient text-gold-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <t.Icon size={16} /> {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline relative pl-8 md:pl-12">
          <div className="tl-line absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-3" />
          <div className="space-y-10">
            {data.map((d) => (
              <div key={d.title} className="tl-item relative">
                <div className="absolute -left-[28px] top-2 h-3 w-3 rounded-full bg-gold shadow-glow md:-left-[34px]" />
                <div className="rounded-2xl glass-strong p-6 transition-all hover:translate-x-1 hover:shadow-glow">
                  <div className="font-mono text-xs uppercase tracking-widest text-gold">{d.year}</div>
                  <h3 className="mt-2 text-serif text-3xl">{d.title}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{d.place}</div>
                  <p className="mt-3 text-base text-muted-foreground/90">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

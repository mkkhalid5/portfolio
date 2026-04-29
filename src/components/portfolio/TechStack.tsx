import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2, title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    icon: Server, title: "Backend",
    items: ["Node.js", "Express", "NestJS", "REST"],
  },
  {
    icon: Database, title: "Database",
    items: ["PostgreSQL", "MongoDB",],
  },
  {
    icon: Wrench, title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Figma", "Vite"],
  },
];

export const TechStack = () => {
  return (
    <section id="tech" className="section-pad relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">02 — Tech Stack</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-16 max-w-3xl">
          <h2 className="text-serif text-5xl leading-[1.05] md:text-7xl">
            A toolkit refined over <span className="italic text-gradient-gold">years</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <g.icon size={20} />
              </div>
              <h3 className="text-serif text-2xl">{g.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

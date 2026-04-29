import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Engineering", level: 70, desc: "React, Next.js, advanced animations" },
  { name: "Backend & APIs", level: 30, desc: "Node, REST, GraphQL, auth, payments" },
  { name: "UI / UX & Design Systems", level: 92, desc: "Figma, tokens, accessibility" },
  { name: "Database & Schema Design", level: 60, desc: "Postgres, Mongo, Prisma" },
  { name: "DevOps & Deployment", level: 80, desc: "Vercel, AWS, CI/CD, Docker" },
  { name: "Problem Solving", level: 94, desc: "Architecture, debugging, performance" },
  { name: "API Integration", level: 99, desc: "Third-party SDKs, webhooks" },
  { name: "Git / GitHub Workflow", level: 93, desc: "Branching, PR review, releases" },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-pad relative bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">03 — Skills</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <h2 className="lg:col-span-7 text-serif text-5xl leading-[1.05] md:text-7xl">
            Skills sharpened by <span className="italic text-gradient-gold">real projects</span>.
          </h2>
          <p className="lg:col-span-5 self-end text-lg text-muted-foreground">
            Numbers are useful but craft is felt. Every percent below maps to projects shipped, problems solved, and clients delighted.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: "easeOut" }}
              className="group rounded-2xl glass-strong p-6 transition-all hover:shadow-glow"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium">{s.name}</h3>
                <span className="text-serif text-2xl text-gradient-gold">{s.level}%</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gold-gradient"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

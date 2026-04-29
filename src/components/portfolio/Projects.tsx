import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "Dragon News - NewsPortal APP", category: "Brand", year: "2026", desc: "Full-featured news platform with category-based browsing, dynamic content management, and a clean responsive reading experience.", tech: ["Next.js", "MongoDB", "BetterAuth", "Tailwind","Daisy UI"], img: p1, repo: "https://github.com/mkkhalid5/dragon-news-nextjs", live: "https://dragon-news.mkkhalid.top/" },
  { id: 2, title: "Book Shop - Modern Online Bookstore Platform", category: "E-commerce", year: "2026", desc: "Modern online bookstore platform with seamless book browsing, category-based collections, secure purchasing, and a clean user-friendly shopping experience.", tech: ["React.js", "Daisy UI", "Tailwind", "React Router"], img: p2 ,repo: "https://github.com/mkkhalid5/book-shop", live: "https://book-shop.mkkhalid.top/"},
  { id: 3, title: "Kin Keeper - Smart Family Management & Record Keeping Platform", category: "Mobile", year: "2026", desc: "Secure family management platform for organizing personal records, health information, important documents, and shared responsibilities with seamless access, privacy, and collaboration features.", tech: ["React.Js", "Json Data", "React Router", "Tailwind", "Daisy UI"], img: p3, repo: "https://github.com/mkkhalid5/friends-interaction-tracker", live: "" },
  { id: 4, title: "Digital Tools - All-in-One Online Utility Platform", category: "E-commerce", year: "2026", desc: "Comprehensive digital tools platform featuring PDF utilities, SEO tools, converters, generators, and developer resources for fast, efficient, and productivity-focused workflows.", tech: ["Ract.js", "Tailwind", "Daisy UI", "React Tostify", "React Icons"], img: p4, repo: "https://github.com/mkkhalid5/book-shop", live: "https://digital-tools.mkkhalid.top/"},
];

const categories = ["All", "SaaS", "E-commerce", "Mobile", "Brand"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">05 — Selected Work</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-12">
          <h2 className="lg:col-span-7 text-serif text-5xl leading-[1.05] md:text-7xl">
            Featured <span className="italic text-gradient-gold">projects</span>, picked with care.
          </h2>
          <div className="lg:col-span-5 lg:self-end">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all",
                    filter === c ? "bg-gold-gradient text-gold-foreground shadow-glow" : "glass hover:text-gold"
                  )}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid gap-8 lg:grid-cols-2">
            {list.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: "easeOut" }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl glass-strong p-3 shadow-elegant",
                  i % 3 === 0 && "lg:col-span-2"
                )}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1536}
                    height={1024}
                    className="aspect-[16/10] w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="text-gold">{p.category}</span>
                      <span className="h-px w-6 bg-border" />
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-3 text-serif text-3xl md:text-4xl">{p.title}</h3>
                    <p className="mt-2 max-w-xl text-muted-foreground">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href={p.live} className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105">
                      Live <ArrowUpRight size={14} />
                    </a>
                    <a href={p.repo} aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full glass transition-colors hover:bg-gold/15 hover:text-gold">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

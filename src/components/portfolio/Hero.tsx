import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mk from "@/assets/mk.png"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 1.4 + i * 0.12, ease: "easeOut" as const },
  }),
};

export const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden grain">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50 dark:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-radial-gold" />
      </div>

      {/* Floating decorative orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-gold/20 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[15%] left-[5%] h-80 w-80 rounded-full bg-gold-soft/15 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pt-32 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              Available for new projects — 2026
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="text-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight"
            >
              Crafting <span className="italic text-gradient-gold">premium</span><br />
              digital experiences.
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
            >
              I'm <span className="text-foreground font-medium">MK Khalid</span> — a Full Stack Web Developer
              designing &amp; engineering refined, performant, and beautifully animated products that feel inevitable.
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03]"
              >
                Hire Me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1I6P0iceo_6xLop5gcI1DGpjOFLy-j2HS/view"
                
                className="group inline-flex items-center gap-3 rounded-full glass-strong px-7 py-4 text-sm font-semibold uppercase tracking-widest transition-transform hover:scale-[1.03]"
              >
                <Download size={16} className="text-gold" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="mt-12 flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow</span>
              <span className="h-px w-10 bg-border" />
              {[
                {
                  Icon: Github,
                  link: "https://github.com/mkkhalid5",
                },
                {
                  Icon: Linkedin,
                  link: "https://linkedin.com/in/mkkhalid",
                },
                {
                  Icon: Facebook,
                  link: "https://www.facebook.com/mrsilent55i",
                },

              ].map(({ Icon, link }, i) => (
                <a key={i} href={link} aria-label="Social"
                  className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:bg-gold/15 hover:text-gold">
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column - vertical credit card */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="show"
            className="hidden lg:col-span-4 lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl glass-strong p-6 shadow-elegant"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="text-serif text-5xl">Khalid</div>
                    <div className="h-3 w-3 animate-pulse rounded-full bg-gold" />
                  </div>
                  <div className="space-y-2">
                    <img src={mk} alt="" className="rounded-md" />

                    <div className="mt-1 text-sm text-muted-foreground">Web Developer & UI Engineer</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Located</div>
                      <div className="text-sm font-medium">Tanore, Rajshahi</div>
                    </div>
                    <div className="text-serif text-3xl text-gradient-gold">★</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/10 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-20 overflow-hidden border-y border-border/50 py-4"
        >
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, k) =>
              ["React", "Next.js", "JavaScript", "Node.js", "GSAP", "Framer Motion", "Tailwind", "Three.js", "Postgres", "MongoDB"].map((t, i) => (
                <span key={`${k}-${i}`} className="text-serif text-2xl text-muted-foreground/70">
                  {t} <span className="mx-6 text-gold">✦</span>
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

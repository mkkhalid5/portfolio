import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quick = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/40 px-6 py-16 md:px-12">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-serif text-5xl text-gradient-gold">MK Khalid</div>
            <p className="mt-3 max-w-sm text-muted-foreground">
              Web developer crafting premium, animated digital experiences for teams worldwide.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Quick links</div>
            <ul className="mt-4 space-y-2">
              {quick.map((q) => (
                <li key={q.id}>
                  <button onClick={() => document.getElementById(q.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-foreground/80 transition-colors hover:text-gold">
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Connect</div>
            <div className="mt-4 flex gap-2">
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
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social"
                  className="flex h-11 w-11 items-center justify-center rounded-full glass transition-colors hover:bg-gold/15 hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">mkkhalidmahamud@gmail.com</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} all right reserved MK Khalid.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Developed by MK Khalid
          </div>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={top}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-[7000] flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-glow transition-transform hover:scale-110"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

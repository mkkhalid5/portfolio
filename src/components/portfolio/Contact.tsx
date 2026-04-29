import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MessageCircle, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

const channels = [
  { Icon: Mail, label: "Email", value: "mkkhalidmahamud@gmail.com", href: "mkkhalidmahamud@gmail.com" },
  { Icon: MessageCircle, label: "WhatsApp", value: "+880 188991-7987", href: "https://wa.me/qr/TVSIMEPATQUHF1" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mkkhalid/", href: "https://www.linkedin.com/in/mkkhalid/" },
  { Icon: Github, label: "GitHub", value: "@mkkhalid5", href: "https://github.com/mkkhalid5" },
];

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast({ title: "Hmm, double-check that", description: res.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast({ title: "Message sent ✦", description: "Thanks — I'll get back within 24h." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute right-1/2 top-1/3 -z-10 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-gold/15 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">06 — Contact</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-serif text-5xl leading-[1.05] md:text-7xl">
              Let's build <span className="italic text-gradient-gold">something exceptional</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              I'm currently accepting a limited number of projects for 2026. If you have a vision worth building, I'd love to hear about it.
            </p>

            <div className="mt-10 space-y-3">
              {channels.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl glass-strong p-4 transition-all hover:shadow-glow">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  </div>
                  <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold">→</span>
                </a>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl glass-strong p-8 shadow-elegant md:p-10"
          >
            <div className="text-serif text-3xl">Send me a message</div>
            <p className="mt-2 text-sm text-muted-foreground">Tell me about your project, timeline and goals.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Your name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="MK Khalid" />
              <Field label="Email address" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="mkkhalidmahamud@gmail.com" />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                id="message" rows={6} maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="I'm building..."
                className="mt-2 w-full resize-none rounded-2xl border border-border bg-background/40 p-4 text-base outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold-foreground shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
              {loading ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, id, value, onChange, placeholder, type = "text" }: {
  label: string; id: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
    <input
      id={id} type={type} value={value} maxLength={255}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-2 w-full rounded-2xl border border-border bg-background/40 p-4 text-base outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30"
    />
  </div>
);

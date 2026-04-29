import { useEffect, useRef, useState } from "react";

/**
 * Premium animated cursor — dual-ring with magnetic ease.
 * Disabled on touch devices via media query in CSS (cursor stays hidden only on hover-capable).
 */
export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      setVisible(true);
      dot.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, textarea, [data-cursor-hover]')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-gold mix-blend-difference md:block"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 rounded-full border border-gold/60 mix-blend-difference md:block"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, width 0.25s, height 0.25s, background 0.25s",
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          background: hovering ? "hsl(var(--gold) / 0.15)" : "transparent",
        }}
      />
    </>
  );
};

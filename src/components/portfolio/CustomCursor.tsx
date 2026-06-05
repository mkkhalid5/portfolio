import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.opacity = "1";
      ring.style.opacity = "1";

      dot.style.transform = `translate3d(${mouseX - 4}px, ${
        mouseY - 4
      }px, 0)`;
    };

    const animate = () => {
      // smooth trailing
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      const isHover = ring.classList.contains("cursor-hover");
      const scale = isHover ? 1.6 : 1;

      ring.style.transform = `translate3d(${ringX - 18}px, ${
        ringY - 18
      }px, 0) scale(${scale})`;

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, [role='button'], input, textarea, [data-cursor-hover]"
        )
      ) {
        ring.classList.add("cursor-hover");
      } else {
        ring.classList.remove("cursor-hover");
      }
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-gold mix-blend-difference md:block"
        style={{
          opacity: 0,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      {/* RING */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 rounded-full border border-gold/60 mix-blend-difference md:block cursor-ring"
        style={{
          opacity: 0,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
    </>
  );
};
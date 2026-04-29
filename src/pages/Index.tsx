import { useEffect } from "react";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { useLenis } from "@/components/portfolio/useLenis";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Skills } from "@/components/portfolio/Skills";
import { Qualification } from "@/components/portfolio/Qualification";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Shell = () => {
  useLenis();

  useEffect(() => {
    // Inject JSON-LD for SEO
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "MK Khalid",
      jobTitle: "Full Stack Web Developer",
      url: typeof window !== "undefined" ? window.location.href : "",
      sameAs: ["https://github.com/", "https://www.linkedin.com/"],
    });
    document.head.appendChild(ld);
    return () => { document.head.removeChild(ld); };
  }, []);

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const Index = () => (
  <ThemeProvider>
    <Shell />
  </ThemeProvider>
);

export default Index;

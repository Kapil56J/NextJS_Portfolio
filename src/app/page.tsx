import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SelectedWork from "@/components/sections/SelectedWork";
import CaseStudies from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import GitHubSection from "@/components/sections/GitHubSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <SelectedWork />
      <CaseStudies />
      <Skills />
      <GitHubSection />
      <Contact />
    </>
  );
}

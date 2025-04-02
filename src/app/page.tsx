import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechSkills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechSkills />
      <Projects />
    </>
  );
}

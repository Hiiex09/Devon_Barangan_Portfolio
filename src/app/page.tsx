import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechSkills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <TechSkills />
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/global.css";

export default function App() {
  const [introDone, setIntroDir] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntroDir(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!introDone && <Intro />}
      <div className={`main-content ${introDone ? "visible" : "hidden"}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
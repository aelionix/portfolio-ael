import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarTransition from "./components/StarTransition";
import "./styles/global.css";


export default function App() {
  const [introDone, setIntroDir] = useState(false);
  const [starsDone, setStarsDir] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDir(true);
      setTimeout(() => setStarsDir(true), 4500)
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
    {!introDone && <Intro />}
    {introDone && !starsDone && <StarTransition />}
    <div className={`main-content ${starsDone ? "visible" : "hidden"}`}>
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
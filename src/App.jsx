import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Background from "./components/background/Background";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import TechCircle from "./components/TechCircle/TechCircle";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import "./App.css";

function App() {
  // Scope scroll to the document so it's native and efficient
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <>
      <Background />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <div className="glass-app">
        <Hero />
        <TechCircle />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
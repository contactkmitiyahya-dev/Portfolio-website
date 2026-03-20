import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Background from "./components/background/Background";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import TechCircle from "./components/TechCircle/TechCircle";
import About from "./components/about/about";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <>
      <Background />
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Header />

      <div className="glass-app">
        <Hero />
        <TechCircle />
        <About />
      </div>
    </>
  );
}

export default App;
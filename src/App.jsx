import { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useScroll, useSpring, AnimatePresence } from "framer-motion";
// Core components (Loaded immediately)
import Loader from "./components/loader/loader";
import Background from "./components/background/Background";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Footer from "./components/footer/footer";

// Heavy/Dynamic components (Lazy loaded)
const TechCircle = lazy(() => import("./components/TechCircle/TechCircle"));
const Chatbot = lazy(() => import("./components/chatbot/chatbot"));
import "./App.css";
import "./light-mode.css";
import "./mobile.css";

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname === "/" ? "home" : location.pathname.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <a href="#main-content" className="skip-link">Skip to main content</a>

          <Background />
          <motion.div className="progress-bar" style={{ scaleX }} aria-hidden="true" />
          <Header />
          <main id="main-content" className="glass-app">
            <Hero />
            <Suspense fallback={<div className="loading-placeholder" style={{ height: '300px' }} />}>
              <TechCircle />
            </Suspense>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </main>
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </motion.div>
      )}
    </>
  );
}

export default App;
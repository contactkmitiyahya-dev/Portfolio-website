import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loader.css";

const LETTERS = ["Y", "K"];

function Loader({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 900);
    const t2 = setTimeout(() => setPhase(2), 3000);
    const t3 = setTimeout(onComplete, 3700);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="ldr-root"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <GridLines />

          <motion.div
            className="ldr-scan"
            initial={{ top: "-5%" }}
            animate={{ top: "105%" }}
            transition={{ duration: 2.2, ease: "linear", repeat: Infinity, repeatDelay: 0.4 }}
          />

          <span className="ldr-corner tl" />
          <span className="ldr-corner tr" />
          <span className="ldr-corner bl" />
          <span className="ldr-corner br" />

          <div className="ldr-center">

            <div className="ldr-name">
              {LETTERS.map((l, i) => (
                <motion.span
                  key={l}
                  className="ldr-letter"
                  initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="ldr-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="ldr-tag"
              initial={{ opacity: 0, letterSpacing: "8px" }}
              animate={phase >= 1 ? { opacity: 1, letterSpacing: "4px" } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Full-Stack Developer &amp; Engineering Student
            </motion.p>

            {phase >= 1 && <Counter onDone={() => {}} />}
          </div>

          <motion.div
            className="ldr-side ldr-side-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 0.35 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {"PORTFOLIO_2025".split("").map((c, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>{c}</span>
            ))}
          </motion.div>

          <motion.div
            className="ldr-side ldr-side-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 0.35 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {"KMITI_YAHYA".split("").map((c, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{c}</span>
            ))}
          </motion.div>

          {phase >= 2 && (
            <motion.div
              className="ldr-flash"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Counter() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 14 + 3;
      if (v >= 100) { v = 100; clearInterval(id); }
      setVal(Math.floor(v));
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="ldr-counter-wrap">
      <motion.div
        className="ldr-bar-track"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="ldr-bar-fill"
          style={{ width: `${val}%` }}
        />
      </motion.div>
      <motion.span
        className="ldr-pct"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {val}%
      </motion.span>
    </div>
  );
}

function GridLines() {
  return (
    <div className="ldr-grid" aria-hidden>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="ldr-grid-col" style={{ left: `${i * 11.1}%` }} />
      ))}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="ldr-grid-row" style={{ top: `${i * 11.1}%` }} />
      ))}
    </div>
  );
}

export default Loader;

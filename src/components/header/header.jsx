/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import {FiHome,FiUser,FiFolder,FiMail,FiX, FiSun, FiMoon} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./header.css";

const MotionLink = motion(Link);

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    if (document.cookie.includes("googtrans=/en/fr")) {
      setLang("FR");
    } else {
      setLang("EN");
    }
  }, []);

  const handleLanguageToggle = () => {
    const newLang = lang === "EN" ? "fr" : "en";
    document.cookie = `googtrans=/en/${newLang}; path=/;`;
    document.cookie = `googtrans=/en/${newLang}; domain=${window.location.hostname}; path=/;`;
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.header 
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      style={{ background: scrolled ? "rgba(10, 15, 45, 0.9)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent" }}
    >
      <div className="header-container" style={{ background: "none", border: "none" }}>

        <div className="left">
          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(!open)}
            role="button"
            tabIndex={0}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div className="burger"></div>
          </div>

          <motion.div className="logo" aria-label="Yahya Kmiti – home" whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring" }}>YK</motion.div>
        </div>

        <nav className="nav-desktop" aria-label="Main navigation">
          <MotionLink to="/home" className="notranslate" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>{lang === "FR" ? "Accueil" : "Home"}</MotionLink>
          <MotionLink to="/about" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>About</MotionLink>
          <MotionLink to="/projects" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>Projects</MotionLink>
          <MotionLink to="/contact" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>Contact</MotionLink>
        </nav>

        <div className="cta" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          
          <div className="theme-toggle lang-toggle" style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "4px" }}>
            <button 
              className="theme-btn"
              onClick={handleLanguageToggle}
              aria-label={lang === "FR" ? "Switch to English" : "Switch to French"}
              style={{ background: "transparent", color: "white", border: "none", borderRadius: "16px", padding: "6px 12px", cursor: "pointer", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center" }}
            >
              {lang === "FR" ? "EN" : "FR"}
            </button>
          </div>

          <div className="theme-toggle" role="group" aria-label="Color theme" style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "4px" }}>
            <button 
              className="theme-btn"
              onClick={() => setTheme("dark")}
              aria-label="Switch to dark mode"
              aria-pressed={theme === "dark"}
              style={{ background: theme === "dark" ? "linear-gradient(135deg, #3b82f6, #9333ea)" : "transparent", color: "white", border: "none", borderRadius: "16px", padding: "6px 12px", cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <FiMoon size={16} aria-hidden="true" />
            </button>
            <button 
              className="theme-btn"
              onClick={() => setTheme("light")}
              aria-label="Switch to light mode"
              aria-pressed={theme === "light"}
              style={{ background: theme === "light" ? "linear-gradient(135deg, #f59e0b, #ea580c)" : "transparent", color: "white", border: "none", borderRadius: "16px", padding: "6px 12px", cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <FiSun size={16} aria-hidden="true" />
            </button>
          </div>

          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block", textDecoration: "none", borderRadius: "8px", background: "linear-gradient(135deg, #3b82f6, #9333ea)", color: "white", padding: "8px 16px", border: "none", cursor: "pointer", fontWeight: "600" }}
          >
            Hire Me
          </MotionLink>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "active" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Mobile navigation"
      >

        <div className="mobile-header">
          <div className="mobile-logo" aria-hidden="true">YK</div>
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "white", display: "flex", alignItems: "center" }}
          >
            <FiX size={24} aria-hidden="true" />
          </button>
        </div>

        <Link to="/home" className="notranslate" onClick={() => setOpen(false)}><FiHome aria-hidden="true" /> {lang === "FR" ? "Accueil" : "Home"}</Link>
        <Link to="/about" onClick={() => setOpen(false)}><FiUser aria-hidden="true" /> About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}><FiFolder aria-hidden="true" /> Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}><FiMail aria-hidden="true" /> Contact</Link>

      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </motion.header>
  );
}

export default Header;
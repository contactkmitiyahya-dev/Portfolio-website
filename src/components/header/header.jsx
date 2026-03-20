import { useState, useEffect } from "react";
import {FiHome,FiUser,FiFolder,FiMail,FiX} from "react-icons/fi";
import { motion } from "framer-motion";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      style={{ background: scrolled ? "rgba(10, 15, 45, 0.9)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent" }}
    >
      <div className="header-container" style={{ background: "none", border: "none" }}>

        {/* LEFT */}
        <div className="left">
          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="burger"></div>
          </div>

          <motion.div className="logo" whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring" }}>YK</motion.div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-desktop">
          <motion.a href="#home" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>Home</motion.a>
          <motion.a href="#about" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>About</motion.a>
          <motion.a href="#projects" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>Projects</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.1, color: "#fff", y: -2 }} transition={{ type: "spring", stiffness: 300 }}>Contact</motion.a>
        </nav>

        {/* CTA */}
        <div className="cta">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            style={{ borderRadius: "8px", background: "linear-gradient(135deg, #3b82f6, #9333ea)", color: "white", padding: "8px 16px", border: "none", cursor: "pointer", fontWeight: "600" }}
          >
            Hire Me
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>

        <div className="mobile-header">
          <div className="mobile-logo">YK</div>
          <div className="close-btn" onClick={() => setOpen(false)}>
            <FiX size={24} />
          </div>
        </div>

        <a href="#home" onClick={() => setOpen(false)}><FiHome /> Home</a>
        <a href="#about" onClick={() => setOpen(false)}><FiUser /> About</a>
        <a href="#projects" onClick={() => setOpen(false)}><FiFolder /> Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}><FiMail /> Contact</a>

      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </motion.header>
  );
}

export default Header;
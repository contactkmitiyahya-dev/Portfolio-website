import "./hero.css";
import profile from "../../assets/profile.jpg";
import cvFile from "../../assets/kmiti_yahya_cv.pdf";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const MotionLink = motion(Link);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span className="hero-label" variants={itemVariants}>
            Available for hire
          </motion.span>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hello, I'm <span className="name-highlight">Yahya</span>{" "}
            <span className="emoji" aria-hidden="true">👋</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            Full-Stack Developer &amp; <strong>Engineering Student</strong>
          </motion.h2>

          <motion.p className="hero-text" variants={itemVariants}>
            I build scalable, high-performance web applications with clean code,
            intuitive UI/UX, and a focus on turning ideas into real digital products.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <MotionLink
              to="/projects"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </MotionLink>
            <motion.a
              href={cvFile}
              download="Kmiti_Yahya_CV.pdf"
              className="btn-secondary"
              aria-label="Download my CV as a PDF file"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FiDownload aria-hidden="true" /> Download CV
            </motion.a>
            <MotionLink
              to="/contact"
              className="btn-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </MotionLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, type: "spring", bounce: 0.3, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src={profile} alt="Yahya Kmiti - Full-Stack Developer and Engineering Student" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
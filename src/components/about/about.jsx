import "./about.css";
import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiUsers, FiAward } from "react-icons/fi";

function About() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="about" id="about">
      {/* Premium Background Decor */}
      <div className="about-bg-shape shape-purple"></div>
      <div className="about-bg-shape shape-blue"></div>

      <div className="about-container">
        {/* LEFT */}
        <motion.div 
          className="about-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 variants={textVariants}>
            About <span>Me</span>
          </motion.h2>

          <motion.p className="highlight" variants={textVariants}>
            Full-stack developer & engineering student passionate about building modern web applications.
          </motion.p>

          <motion.div className="about-details" variants={textVariants}>
            <p>
              I'm currently in my final year at ESPRIT, where I developed strong skills
              through academic and personal projects using modern technologies.
            </p>
            <p>
              I enjoy designing scalable systems, writing clean code, and creating
              intuitive user experiences that solve real-world problems.
            </p>
            <p>
              As a freelancer, I am able to work on both small and large-scale projects,
              either independently or within a team, with strong communication and
              collaboration skills.
            </p>
          </motion.div>

          <motion.div className="goal-container" variants={textVariants}>
            <div className="goal-icon-wrapper">
              <FiAward className="goal-icon" />
            </div>
            <p className="goal">
              Currently looking for a <strong>PFE internship</strong> to grow and contribute to impactful projects.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div 
          className="about-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="about-box" variants={itemVariants}>
            <div className="glow"></div>
            <div className="box-icon-wrapper">
              <FiCode className="box-icon" />
            </div>
            <div className="box-text">
              <h3>Creative Developer</h3>
              <p>Modern UI / UX + clean architecture</p>
            </div>
          </motion.div>

          <motion.div className="about-box" variants={itemVariants}>
            <div className="glow"></div>
            <div className="box-icon-wrapper">
              <FiBriefcase className="box-icon" />
            </div>
            <div className="box-text">
              <h3>Freelancer</h3>
              <p>Flexible, reliable & project-oriented</p>
            </div>
          </motion.div>

          <motion.div className="about-box" variants={itemVariants}>
            <div className="glow"></div>
            <div className="box-icon-wrapper">
              <FiUsers className="box-icon" />
            </div>
            <div className="box-text">
              <h3>Team Player</h3>
              <p>Communication & collaboration focused</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
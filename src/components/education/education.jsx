import "./education.css";
import { motion } from "framer-motion";
import espritLogo from "../../assets/esprit.png";

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  return (
    <section className="education" id="education">
      <motion.h2 
        className="education-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Academic <span>Background</span>
      </motion.h2>

      <motion.div 
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="education-left" variants={itemVariants}>
          <div className="edu-card">
            <div className="edu-logo-wrapper">
              <img src={espritLogo} alt="ESPRIT" />
            </div>
            <div className="edu-text">
              <span className="edu-badge">2022 – 2027</span>
              <h3>Engineering Degree in Computer Science</h3>
              <p className="edu-university">
                ESPRIT – Private Higher School of Engineering and Technology
              </p>
              <div className="edu-tags">
                <span className="edu-tag">Web Development (TWIN)</span>
                <span className="edu-tag">Software Engineering</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="education-right" variants={itemVariants}>
          <div className="lang-card">
            <h3 className="lang-title">Languages</h3>
            
            <div className="lang-list">
              <div className="lang-item">
                <div className="lang-info">
                  <span className="lang-name">Arabic</span>
                  <span className="lang-level">Native</span>
                </div>
                <div className="bar-bg">
                  <motion.div className="bar-fill" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.2 }} viewport={{ once: true }}></motion.div>
                </div>
              </div>

              <div className="lang-item">
                <div className="lang-info">
                  <span className="lang-name">French</span>
                  <span className="lang-level">B1 / B2</span>
                </div>
                <div className="bar-bg">
                  <motion.div className="bar-fill" initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }}></motion.div>
                </div>
              </div>

              <div className="lang-item">
                <div className="lang-info">
                  <span className="lang-name">English</span>
                  <span className="lang-level">B2 / C1</span>
                </div>
                <div className="bar-bg">
                  <motion.div className="bar-fill" initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.6 }} viewport={{ once: true }}></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
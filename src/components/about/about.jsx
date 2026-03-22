import "./about.css";
import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiUsers, FiAward } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const boxes = [
  { icon: <FiCode />, title: "Creative Developer", desc: "Modern UI / UX + clean architecture" },
  { icon: <FiBriefcase />, title: "Freelancer", desc: "Flexible, reliable & project-oriented" },
  { icon: <FiUsers />, title: "Team Player", desc: "Communication & collaboration focused" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>
            About <span>Me</span>
          </motion.h2>

          <motion.p className="highlight" variants={itemVariants}>
            Full-stack developer & engineering student passionate about building modern web applications.
          </motion.p>

          <motion.div className="about-details" variants={itemVariants}>
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

          <motion.div className="goal-container" variants={itemVariants}>
            <div className="goal-icon-wrapper">
              <FiAward className="goal-icon" />
            </div>
            <p className="goal">
              Currently looking for a <strong>PFE internship</strong> to grow and contribute to impactful projects.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {boxes.map((box) => (
            <motion.div key={box.title} className="about-box" variants={itemVariants}>
              <div className="glow"></div>
              <div className="box-icon-wrapper">
                <span className="box-icon">{box.icon}</span>
              </div>
              <div className="box-text">
                <h3>{box.title}</h3>
                <p>{box.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
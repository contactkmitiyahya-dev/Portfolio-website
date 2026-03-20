import "./projects.css";
import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Smart Construction Platform",
    description:
      "Full-stack web application for managing construction sites, artisans, and products with advanced AI features including recommendation systems, chatbot, and automated classification.",
    tech: ["React", "Node.js", "MySQL", "AI", "Express"],
    image: profile,
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
    github: "#",
    live: "#",
    badge: "AI-Powered",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern responsive portfolio to showcase projects and skills with cinematic scroll animations, glassmorphism UI, and professional aesthetics.",
    tech: ["React", "Framer Motion", "CSS", "Vite"],
    image: profile,
    gradient: "linear-gradient(135deg, #9333ea 0%, #6d28d9 100%)",
    github: "#",
    live: "#",
    badge: "Live",
  },
  {
    id: 3,
    title: "HR Management Web App",
    description:
      "Developed a web application for employee management with core HR functionalities including leaves, payroll overview, and backend integration using Symfony.",
    tech: ["HTML", "CSS", "JavaScript", "Symfony", "PHP"],
    image: profile,
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
    github: "#",
    live: "#",
    badge: "Full-Stack",
  },
];

const techColors = {
  "React": "#61DAFB",
  "Node.js": "#339933",
  "MySQL": "#4479A1",
  "AI": "#f59e0b",
  "Express": "#FFFFFF",
  "CSS": "#1572B6",
  "Vite": "#646CFF",
  "Framer Motion": "#d946ef",
  "HTML": "#E34F26",
  "JavaScript": "#F7DF1E",
  "Symfony": "#000000",
  "PHP": "#777BB4",
};

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="projects-title">
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          A selection of work I'm proud of — from concept to production.
        </p>
      </motion.div>

      <div className="timeline">
        {/* vertical line */}
        <div className="timeline-line" />

        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`project-row ${i % 2 !== 0 ? "reverse" : ""}`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* ===== DOT ===== */}
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
            />

            {/* ===== TEXT ===== */}
            <div className="project-text">
              <span className="project-badge">{project.badge}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="tech-tag"
                    style={{
                      background: `${techColors[t] || "#3b82f6"}18`,
                      color: techColors[t] || "#3b82f6",
                      border: `1px solid ${techColors[t] || "#3b82f6"}44`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  className="link-btn link-ghost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub /> GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  className="link-btn link-primary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59,130,246,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink /> Live Demo
                </motion.a>
              </div>
            </div>

            {/* ===== VISUAL ===== */}
            <motion.div
              className="project-visual"
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="visual-box" style={{ background: project.gradient }}>
                <div className="visual-overlay" />
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="visual-shine" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import "./projects.css";
import profile from "../../assets/profile.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiMaximize2, FiX, FiCheckCircle } from "react-icons/fi";

const projects = [
    {
        id: 1,
        title: "Smart Construction Platform",
        description:
            "Full-stack web application for managing construction sites, artisans, and products with advanced AI features including recommendation systems, chatbot, and automated classification.",
        fullDescription: "A comprehensive digital ecosystem built to revolutionize artisan and contractor management. This platform features AI-driven analytics, real-time collaboration tools, an automated product classification engine, and an integrated messaging system connecting clients and builders seamlessly.",
        challenges: "Handling real-time synchronization across multiple socket endpoints without performance drops. Integrating seamless AI responses from custom trained ML models into a NodeJS microservices backend.",
        tech: ["React", "Node.js", "MySQL", "AI", "Express"],
        image: profile,
        gradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
        github: "https://github.com/contactkmitiyahya-dev",
        live: "#",
        badge: "AI-Powered",
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        description:
            "Designed and developed a modern responsive portfolio to showcase projects and skills with cinematic scroll animations, glassmorphism UI, and professional aesthetics.",
        fullDescription: "An interactive web showcase built natively in React. The interface features pure custom CSS glassmorphism, sophisticated framer-motion timeline stagger effects, seamless day/night app logic, and dedicated custom API integrations.",
        challenges: "Achieving complex UI aesthetics combining dynamic translations, seamless native Email APIs via Web3Forms, and robust client side SPA routing, all while strictly adhering to 60fps scrolling performance metrics.",
        tech: ["React", "Framer Motion", "CSS", "Vite"],
        image: profile,
        gradient: "linear-gradient(135deg, #9333ea 0%, #6d28d9 100%)",
        github: "https://github.com/contactkmitiyahya-dev",
        live: "#",
        badge: "Live",
    },
    {
        id: 3,
        title: "HR Management Web App",
        description:
            "Developed a web application for employee management with core HR functionalities including leaves, payroll overview, and backend integration.",
        fullDescription: "An enterprise-grade Human Resources management module handling complex administrative entities. It actively tracks digital leave requests, dynamic payroll distributions, and organizational hierarchies with deep active directory integration.",
        challenges: "Building complex multi-level approval workflows where request statuses cascade correctly through varying management chains using pure backend methodologies alongside an optimized Database integration structure.",
        tech: ["HTML", "CSS", "JavaScript", "Symfony", "PHP"],
        image: profile,
        gradient: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
        github: "https://github.com/contactkmitiyahya-dev",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

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

            <div className="projects-list">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        className={`project-row ${i % 2 !== 0 ? "reverse" : ""}`}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
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
                                <motion.button
                                    onClick={() => setSelectedProject(project)}
                                    className="link-btn link-ghost"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ cursor: "pointer", fontFamily: "inherit" }}
                                    aria-label={`View details for ${project.title}`}
                                >
                                    <FiMaximize2 /> Details
                                </motion.button>
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link-btn link-ghost"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiExternalLink /> Live Demo
                                </motion.a>
                            </div>
                        </div>

                        <motion.div
                            className="project-visual"
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ scale: 1.02, rotate: 0.5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="visual-box">
                                <div className="visual-overlay" />
                                <img src={project.image} alt={project.title} className="project-img" />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 50, scale: 0.95, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 50, scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${selectedProject.title} project details`}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
                                <FiX size={24}/>
                            </button>

                            <div className="modal-header">
                                <span className="modal-badge">{selectedProject.badge}</span>
                                <h2>{selectedProject.title}</h2>
                            </div>

                            <div className="modal-body">
                                <div className="modal-image-container">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                </div>

                                <div className="modal-info">
                                    <h3>Project Overview</h3>
                                    <p>{selectedProject.fullDescription}</p>

                                    <h3>Technical Challenges</h3>
                                    <p>{selectedProject.challenges}</p>

                                    <h3>Technologies Used</h3>
                                    <div className="modal-tech">
                                        {selectedProject.tech.map(t => (
                                            <span 
                                                key={t} 
                                                className="tech-tag" 
                                                style={{ 
                                                    background: `${techColors[t] || "#3b82f6"}18`, 
                                                    color: techColors[t] || "#3b82f6", 
                                                    border: `1px solid ${techColors[t] || "#3b82f6"}44`
                                                }}
                                            >
                                                <FiCheckCircle style={{ marginRight: "6px" }}/> {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links" style={{ flexDirection: "row", marginTop: "20px" }}>
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-action-btn ghost"><FiGithub/> Source Code</a>
                                        <a href={selectedProject.live} target="_blank" rel="noreferrer" className="modal-action-btn primary"><FiExternalLink/> Live Demo</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects;
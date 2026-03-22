import "./skills.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPhp, FaDocker, FaGithub, FaDatabase, FaServer, FaCodeBranch
} from "react-icons/fa";

import {
  SiJavascript, SiTypescript, SiMongodb, SiExpress, SiAngular, SiNestjs, SiSpringboot, SiDotnet, SiMysql, SiGithubactions
} from "react-icons/si";

const cards = [
  {
    id: "frontend",
    category: "category-frontend",
    icon: <FaReact />,
    title: "Frontend",
    preview: "React.js, Angular, HTML, CSS, JS/TS",
    icons: [
      { icon: <FaReact />, color: "#61DAFB", label: "React.js" },
      { icon: <SiAngular />, color: "#DD0031", label: "Angular" },
      { icon: <FaHtml5 />, color: "#E34F26", label: "HTML5" },
      { icon: <FaCss3Alt />, color: "#1572B6", label: "CSS3" },
      { icon: <SiJavascript />, color: "#F7DF1E", label: "JavaScript" },
      { icon: <SiTypescript />, color: "#3178C6", label: "TypeScript" },
    ]
  },
  {
    id: "backend",
    category: "category-backend",
    icon: <FaServer />,
    title: "Backend",
    preview: "Node.js, NestJS, Spring Boot, .NET, PHP",
    icons: [
      { icon: <FaNodeJs />, color: "#339933", label: "Node.js" },
      { icon: <SiExpress />, color: "#FFFFFF", label: "Express.js" },
      { icon: <SiNestjs />, color: "#E0234E", label: "NestJS" },
      { icon: <SiSpringboot />, color: "#6DB33F", label: "Spring Boot" },
      { icon: <SiDotnet />, color: "#512BD4", label: ".NET" },
      { icon: <FaPhp />, color: "#777BB4", label: "PHP" },
    ]
  },
  {
    id: "database",
    category: "category-database",
    icon: <FaDatabase />,
    title: "Database",
    preview: "MySQL, MongoDB",
    icons: [
      { icon: <SiMysql />, color: "#4479A1", label: "MySQL" },
      { icon: <SiMongodb />, color: "#47A248", label: "MongoDB" },
    ]
  },
  {
    id: "devops",
    category: "category-devops",
    icon: <FaCodeBranch />,
    title: "DevOps",
    preview: "Docker, CI/CD, Git, GitHub",
    icons: [
      { icon: <FaDocker />, color: "#2496ED", label: "Docker" },
      { icon: <SiGithubactions />, color: "#2088FF", label: "CICD" },
      { icon: <FaGitAlt />, color: "#F05032", label: "Git" },
      { icon: <FaGithub />, color: "#ffffff", label: "GitHub" },
    ]
  },
];

function IconItem({ icon, color, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="icon-item"
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${color}22` : "rgba(255,255,255,0.05)",
        borderColor: hovered ? `${color}66` : "rgba(255,255,255,0.05)",
        boxShadow: hovered ? `0 0 18px ${color}55` : "none",
        transition: "all 0.3s ease",
      }}
    >
      <span style={{
        fontSize: "30px",
        color: hovered ? color : "#64748b",
        transition: "color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {icon}
      </span>
    </div>
  );
}

function Skills() {
  const [flipped, setFlipped] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  const handleCardClick = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="skills" id="skills">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Expertise</span>
      </motion.h2>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className="skill-wrapper"
            onClick={() => handleCardClick(card.id)}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="24px"
              scale={1.05}
              transitionSpeed={2000}
            >
              <div className={`skill-card ${flipped[card.id] ? "flipped" : ""}`}>
                <div className="card-inner">
                  <div className={`card-front ${card.category}`}>
                    <div className="front-content">
                      <span className="front-icon">{card.icon}</span>
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                  <div className="card-back">
                    <h4 className="back-title">{card.title}</h4>
                    <div className="icons-grid">
                      {card.icons.map((item) => (
                        <IconItem
                          key={item.label}
                          icon={item.icon}
                          color={item.color}
                          label={item.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
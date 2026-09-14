import "./experience.css";
import { motion } from "framer-motion";
import { FaNetworkWired, FaShieldAlt, FaCode } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Wevioo · Tunis, Tunisia",
      date: "June 2026 – August 2026",
      icon: <FaCode />,
      tasks: [
        "Designed and developed a full-stack web application for vehicle telematics tracking and predictive maintenance (SmartCar Wevioo)",
        "Implemented Server-Side Rendering (SSR) using React 19, Webpack 5, and Express.js to enhance load performance, responsiveness, and SEO",
        "Built a secure RESTful API with Node.js/Express featuring JWT authentication, Bcrypt password hashing, OAuth2 social login (Google, GitHub), and file processing with Multer",
        "Engineered a relational database schema in PostgreSQL to handle vehicle profiles, IoT sensor readings, Diagnostic Trouble Codes (DTCs), and maintenance logs"
      ]
    },
    {
      id: 2,
      title: "Network Intern",
      company: "Ooredoo Tunisia",
      date: "Jul 10, 2025 – Aug 22, 2025",
      icon: <FaNetworkWired />,
      tasks: [
        "Designed and configured multi-site network architecture",
        "Implemented routing protocols (OSPF, EIGRP) and redistribution",
        "Set up high availability solutions (HSRP, EtherChannel)",
        "Configured NAT and validated network connectivity"
      ]
    },
    {
      id: 3,
      title: "IT Security Intern",
      company: "MG Holding",
      date: "Jun 15, 2023 – Aug 15, 2023",
      icon: <FaShieldAlt />,
      tasks: [
        "Explored professional IT environment and systems",
        "Analyzed cybersecurity protocols and compliance procedures",
        "Observed real-world cases in data protection and security"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <motion.h2 
        className="experience-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span>Experiences</span>
      </motion.h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot">
              {exp.icon}
            </div>
            
            <div className="timeline-content">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="exp-company">{exp.company}</span>
              </div>
              <div className="exp-date">
                <span>{exp.date}</span>
              </div>

              <ul>
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
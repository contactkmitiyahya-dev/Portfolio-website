import "./TechCircle.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPython, SiTypescript } from "react-icons/si";

function TechCircle() {
  return (
    <div className="tech-circle">
      <motion.div 
        className="circle"
        initial={{ opacity: 0, scale: 0.5, rotateX: 75 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 75 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
      >
        <motion.div className="icon i1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 1 }} viewport={{ once: true }}><FaReact /></motion.div>
        <motion.div className="icon i2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} viewport={{ once: true }}><FaNodeJs /></motion.div>
        <motion.div className="icon i3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} viewport={{ once: true }}><SiJavascript /></motion.div>
        <motion.div className="icon i4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} viewport={{ once: true }}><FaHtml5 /></motion.div>
        <motion.div className="icon i5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}><FaCss3Alt /></motion.div>
        <motion.div className="icon i6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} viewport={{ once: true }}><FaGitAlt /></motion.div>
        <motion.div className="icon i7" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} viewport={{ once: true }}><SiMongodb /></motion.div>
        <motion.div className="icon i8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} viewport={{ once: true }}><SiExpress /></motion.div>
        <motion.div className="icon i9" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }} viewport={{ once: true }}><SiTailwindcss /></motion.div>
        <motion.div className="icon i10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0, duration: 1 }} viewport={{ once: true }}><SiPython /></motion.div>
        <motion.div className="icon i11" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }} viewport={{ once: true }}><SiTypescript /></motion.div>
      </motion.div>
    </div>
  );
}

export default TechCircle;
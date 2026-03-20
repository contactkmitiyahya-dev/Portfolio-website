import "./hero.css";
import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT */}
        <motion.div 
          className="hero-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >

          <motion.h1 className="hero-title" variants={textVariants}>
            Hello, I'm <span>Yahya</span> 👋
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={textVariants}>
            Crafting modern web experiences
          </motion.h2>

          <motion.p className="hero-text" variants={textVariants}>
            I'm a web development engineering student passionate about building
            scalable and high-performance web applications. I focus on clean code,
            intuitive UI/UX, and turning ideas into real digital products.
          </motion.p>

          <motion.div className="hero-buttons" variants={textVariants}>
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

        </motion.div>

        {/* RIGHT */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85, rotate: -2, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.35, delay: 0.2 }}
        >

          <div className="image-wrapper">
            <img src={profile} alt="Yahya" />
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
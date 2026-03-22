import "./contact.css";
import { FaGithub, FaLinkedin, FaCopy, FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("contactkmitiyahya@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "80608fd7-0270-4c97-983d-3db853534964");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 4000);
      } else {
        console.log("Error", data);
        setResult("Error sending message.");
        setTimeout(() => setResult(""), 4000);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Server Error.");
      setTimeout(() => setResult(""), 4000);
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Let's <span>Connect</span>
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Ready to start a project? </h3>
          <p>
            I'm currently open to new opportunities, freelance work, and exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-methods">
            <div className="email-card" onClick={copyEmail}>
              <div className="email-icon">
                <FaEnvelope />
              </div>
              <div className="email-info">
                <span>Email me at</span>
                <strong>contactkmitiyahya@gmail.com</strong>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className={copied ? "copied" : ""}
                title="Copy Email"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </motion.button>
            </div>
          </div>
          <div className="social-links">
            <motion.a href="https://github.com/contactkmitiyahya-dev" target="_blank" rel="noreferrer" whileHover={{ y: -5, color: "#3b82f6" }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/kmitiyahya/" target="_blank" rel="noreferrer" whileHover={{ y: -5, color: "#3b82f6" }}>
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-glow"></div>
            <div className="input-group">
              <input type="text" name="name" id="name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
              <span className="focus-border"></span>
            </div>
            <div className="input-group">
              <input type="email" name="email" id="email" placeholder=" " required />
              <label htmlFor="email">Your Email</label>
              <span className="focus-border"></span>
            </div>
            <div className="input-group">
              <textarea name="message" id="message" placeholder=" " rows="5" required />
              <label htmlFor="message">Your Message</label>
              <span className="focus-border"></span>
            </div>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              {result ? result : (
                <>Send Message <FaPaperPlane className="icon-send" /></>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
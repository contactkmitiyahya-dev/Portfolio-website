import "./footer.css";
import { 
  FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, 
  FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt, FaArrowUp 
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-glass-box">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <h2 className="footer-logo">YK<span>.</span></h2>
            <p className="footer-slogan">
              Engineering digital experiences with passion, precision, and state-of-the-art technologies. Let's create something extraordinary together.
            </p>
            <div className="contact-pills">
              <a href="tel:+21650392338" className="contact-pill"><FaPhoneAlt/> +216 92 424 500</a>
              <a href="mailto:contactkmitiyahya@gmail.com" className="contact-pill"><FaEnvelope/> contactkmitiyahya@gmail.com</a>
            </div>
          </div>

          <div className="footer-col socials-col">
            <h3>Connect with me</h3>
            <div className="social-grid">
              <a href="https://github.com/contactkmitiyahya-dev" className="social-box github" target="_blank" rel="noopener noreferrer"><FaGithub/><span>GitHub</span></a>
              <a href="https://www.linkedin.com/in/kmitiyahya/" className="social-box linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/><span>LinkedIn</span></a>
              <a href="https://wa.me/21699773179" className="social-box whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp/><span>WhatsApp</span></a>
              <a href="https://t.me/DoDo" className="social-box telegram" target="_blank" rel="noopener noreferrer"><FaTelegramPlane/><span>Telegram</span></a>
              <a href="https://instagram.com/kmiti_yahyaa" className="social-box instagram" target="_blank" rel="noopener noreferrer"><FaInstagram/><span>Instagram</span></a>
              <a href="https://facebook.com/yahya.kmiti.2025" className="social-box facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF/><span>Facebook</span></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom-bar">
          <p className="copyright">© {currentYear} Kmiti Yahya. Crafted with ❤️.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

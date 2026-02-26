import { useNavigate } from "react-router-dom";
import { COURSES_DATA } from "../data/courses";

export default function Footer() {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "All Courses", path: "/courses" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact Us", path: "/contact" },
    { label: "Admission Form", path: "/admission" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy" }
  ];

  return (
    <footer>
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="nav-logo" style={{ fontSize: "1.05rem" }}>
            <span>NEXT</span><span>GEN</span><span> ACADEMY</span>
          </div>
          <p>
            Top-rated <strong>Skill India</strong> and <strong>Digital India</strong> partner institute in Mumbai & Thane.
            Providing <strong>digital india internship</strong> and <strong>skill india internship</strong> opportunities
            with <strong>Skill India certificate</strong>.
          </p>
          <div className="footer-contact">
            <a href="tel:9152359157">📞 +91 91523 59157</a>
            <a href="mailto:info.nextgenacadmy@gmail.com">✉️ info.nextgenacadmy@gmail.com</a>
          </div>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <h5>Courses</h5>
          <ul>
            {COURSES_DATA.map(c => (
              <li key={c.id}>
                <button onClick={() => go(`/${c.id}`)}>
                  {c.title.split(" ").slice(0, 3).join(" ")}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            {companyLinks.map(link => (
              <li key={link.path}>
                <button onClick={() => go(link.path)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            {legalLinks.map(link => (
              <li key={link.path}>
                <button onClick={() => go(link.path)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Initiatives */}
        <div className="footer-col">
          <h5>Initiatives</h5>
          <ul>
            <li><button onClick={() => go("/CSR")}>Skill India</button></li>
            <li><button onClick={() => go("/CSR")}>Digital India</button></li>
            <li><button onClick={() => go("/CSR")}>Digital India Internship</button></li>
            <li><button onClick={() => go("/CSR")}>Skill India Digital Portal</button></li>
          </ul>

          <h5 style={{ marginTop: 24 }}>Follow Us</h5>
          <ul>
            <li><a href="https://www.facebook.com/people/NextGen-Academy/61566629759195/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com/nextgenacadmy" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com/@nextgenacadmy" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>

        {/* Location Map */}
        <div className="footer-col footer-map-col">
          <h5>Reach Us</h5>
          <span style={{ color: "var(--cyan)", fontSize: ".82rem", display: "block", marginBottom: "12px" }}>
            📍 Vinita Complex, Gokhale Road, Thane West
          </span>
          <div className="footer-map-container">
            <iframe
              title="NextGen Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.88604313038!2d72.97155667500366!3d19.190369282033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9067160752f%3A0xc39209f874f67623!2sVinita%20Complex!5e0!3m2!1sen!2sin!4v1740557451458!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "12px", filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 NextGen Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

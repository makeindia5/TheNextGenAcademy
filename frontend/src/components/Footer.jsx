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
            Top-rated digital skills institute in Mumbai & Thane.
            Industry-focused training that turns learners into in-demand professionals.
          </p>
          <div className="footer-contact">
            <a href="tel:8976509267">📞 +91 91523 59157</a>
            <a href="mailto:info.nextgenacadmy@gmail.com">✉️ info.nextgenacadmy@gmail.com</a>
            <span style={{ color: "var(--muted)", fontSize: ".82rem" }}>
              📍 Thane, Mumbai & Online
            </span>
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

          <h5 style={{ marginTop: 24 }}>Follow Us</h5>
          <ul>
            <li><a href="https://www.facebook.com/people/NextGen-Academy/61566629759195/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com/nextgenacadmy" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com/@nextgenacadmy" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 NextGen Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

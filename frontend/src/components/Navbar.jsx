import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { COURSES_DATA } from "../data/courses";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();   // 🔥 replaces old `page`

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);  // 🔥 replaces [page]

  const go = (path) => {
    // If path has a hash (e.g. /CSR#section), handle it
    if (path.includes("#")) {
      const [route, hash] = path.split("#");

      if (location.pathname === route) {
        // Already on the page, just scroll
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate first, then scroll (using state or timeout)
        navigate(route);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const courseLinks = [
    { label: "Digital Marketing", id: "digital-marketing" },
    { label: "App Development", id: "app-development" },
    { label: "SEO Mastery", id: "seo" },
    { label: "Google Ads", id: "google-ads" },
    { label: "Social Media", id: "social-media" },
    { label: "WordPress Dev", id: "wordpress" },
  ];

  const csrLinks = [
    { label: "Overview", id: "top" },
    { label: "Programs", id: "csr-programs" },
    { label: "Impact", id: "csr-impact" },
    { label: "Funding", id: "csr-funding" },
    { label: "Implementation", id: "csr-implementation" },
    { label: "Contact", id: "csr-contact" },
  ];

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  const isCourseActive = COURSES_DATA.some(
    c => location.pathname === `/${c.id}`
  );

  const isCsrActive = location.pathname === "/CSR";

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => go("/")}>
          <span>NEXT</span><span>GEN</span><span> ACADEMY</span>
        </div>

        {/* Desktop menu */}
        <div className="nav-menu">
          {navItems.map(item => (
            <button
              key={item.path}
              className={`nav-link${location.pathname === item.path ? " active" : ""}`}
              onClick={() => go(item.path)}
            >
              {item.label}
            </button>
          ))}

          {/* CSR dropdown */}
          <div className="nav-dropdown">
            <button className={`nav-link${isCsrActive ? " active" : ""}`}>
              CSR ▾
            </button>
            <div className="nav-dropdown-menu">
              {csrLinks.map(link => (
                <button
                  key={link.id}
                  className="nav-dropdown-item"
                  onClick={() => go(link.id === "top" ? "/CSR" : `/CSR#${link.id}`)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses dropdown */}
          <div className="nav-dropdown">
            <button className={`nav-link${isCourseActive ? " active" : ""}`}>
              Courses ▾
            </button>
            <div className="nav-dropdown-menu">
              <button className="nav-dropdown-item" onClick={() => go("/courses")}>
                All Courses
              </button>

              <div style={{ height: 1, background: "var(--border)", margin: "6px 0" }} />

              {courseLinks.map(c => (
                <button
                  key={c.id}
                  className="nav-dropdown-item"
                  onClick={() => go(`/${c.id}`)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <button className="btn-nav" onClick={() => go("/admission")}>
            Apply Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          {mobileOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2l18 18M20 2L2 20" /></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 5h18M2 11h18M2 17h18" /></svg>
          }
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {navItems.map(item => (
          <button
            key={item.path}
            className={`mobile-link${location.pathname === item.path ? " active" : ""}`}
            onClick={() => go(item.path)}
          >
            {item.label}
          </button>
        ))}

        <div className="mobile-divider" />

        <button
          className="mobile-link"
          style={{ color: "var(--cyan)", fontWeight: 700, fontSize: ".8rem", letterSpacing: "1px", textTransform: "uppercase" }}
          disabled
        >
          CSR Programs
        </button>

        {csrLinks.map(link => (
          <button
            key={link.id}
            className={`mobile-link${location.pathname === "/CSR" && !location.hash ? " active" : ""}`}
            onClick={() => go(link.id === "top" ? "/CSR" : `/CSR#${link.id}`)}
          >
            {link.label}
          </button>
        ))}

        <div className="mobile-divider" />

        <button
          className="mobile-link"
          style={{ color: "var(--amber)", fontWeight: 700, fontSize: ".8rem", letterSpacing: "1px", textTransform: "uppercase" }}
          disabled
        >
          Courses
        </button>

        <button className="mobile-link" onClick={() => go("/courses")}>
          All Courses
        </button>

        {courseLinks.map(c => (
          <button
            key={c.id}
            className={`mobile-link${location.pathname === `/${c.id}` ? " active" : ""}`}
            onClick={() => go(`/${c.id}`)}
          >
            {c.label}
          </button>
        ))}

        <div className="mobile-divider" />

        <button className="btn-nav" style={{ marginTop: 8 }} onClick={() => go("/admission")}>
          Apply Now
        </button>
      </div>
    </>
  );
}

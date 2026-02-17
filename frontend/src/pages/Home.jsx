import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import { COURSES_DATA } from "../data/courses";
import CourseCard from "../components/CourseCard";
export default function HomePage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section className="home-hero grid-bg">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-grid">
          <div>
            <div className="badge" style={{ marginBottom: 22 }}>
              <span className="badge-dot" />Admissions Open · Batch 2025
            </div>
            <h1 className="hero-h1">
              Launch Your<br />
              <span className="grad-text">Digital Career</span><br />
              with Confidence.
            </h1>
            <p className="hero-p">
              Industry-focused Digital Marketing & App Development courses in Mumbai.
              Hands-on training, guaranteed internship, and placement support — all under one roof.
            </p>
            <div className="btn-group">
              <button className="btn-primary" onClick={() => go("contact")}>Get Free Counselling</button>
              <button className="btn-secondary" onClick={() => go("courses")}>Explore Courses →</button>
            </div>
          </div>
          <div className="stats-card fade-up" ref={fade}>
            <div className="stat-grid">
              {[{ n: "2500+", l: "Students Trained", c: "#00e5ff" }, { n: "100%", l: "Internship Rate", c: "#ffab00" }, { n: "50+", l: "Hiring Partners", c: "#ff6d00" }, { n: "4.9★", l: "Google Rating", c: "#00e5ff" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div className="stat-num" style={{ color: s.c }}>{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="batch-info">
              🚀 Next batch starts <strong style={{ color: "#fff" }}>March 10, 2025</strong> · Mumbai & Online
            </div>
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section style={{ background: "var(--navy-mid)" }}>
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Our Programs</div>
            <h2 className="sec-title">Courses Built for <span className="grad-text">Real-World Success</span></h2>
            <p className="sec-sub">Every course is designed with industry input. Learn tools professionals actually use.</p>
          </div>
          <div className="courses-grid">
            {COURSES_DATA.slice(0, 3).map((c, i) => (
               <CourseCard
                              key={c.id}
                              course={c}
                              index={i}
                              fade={fade}
                              onClick={go}
                              />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-secondary" onClick={() => go("courses")}>View All 6 Courses →</button>
          </div>
        </div>
      </section>
    </>
  );
}


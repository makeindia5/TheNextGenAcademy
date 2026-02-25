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
        <div className="hero-orb orb-3" />
        <div className="hero-orb orb-4" />
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
              Empowering youth through <strong>Skill India</strong> and <strong>Digital India Digital</strong> initiatives.
              Industry-focused Digital Marketing & App Development courses in Mumbai with <strong>Digital India internship</strong>
              opportunities and <strong>Skill India certificate</strong> upon completion.
              Hands-on training, <strong>digital india Internship scheme</strong> benefits, and placement support.
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
      <section style={{ background: "var(--navy-mid)", padding: "80px 5%" }}>
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

      {/* National Initiatives */}
      <section className="initiatives-sec" style={{ background: "var(--navy-dark)", borderTop: "1px solid var(--white-10)", padding: "80px 5%" }}>
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// National Initiatives</div>
            <h2 className="sec-title">Aligned with <span className="grad-text">Digital India</span> & <span className="grad-text">Skill India</span></h2>
          </div>
          <div className="initiatives-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "40px" }}>
            <div className="initiative-card" style={{ padding: "30px", background: "var(--white-05)", borderRadius: "16px", border: "1px solid var(--white-10)" }}>
              <h3 style={{ color: "var(--cyan)", marginBottom: "15px" }}>Skill India Digital</h3>
              <p style={{ color: "var(--silver-text)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Our training programs are mapped to the <strong>skill india deigital portal</strong> standards, ensuring every student receives a recognized <strong>skill india certificate</strong> upon graduation. We are committed to the <strong>skill india internship</strong> program to bridge the gap between education and employment.
              </p>
            </div>
            <div className="initiative-card" style={{ padding: "30px", background: "var(--white-05)", borderRadius: "16px", border: "1px solid var(--white-10)" }}>
              <h3 style={{ color: "var(--cyan)", marginBottom: "15px" }}>Digital India Certification</h3>
              <p style={{ color: "var(--silver-text)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                As a part of the <strong>digital india Internship scheme</strong>, we provide students with hands-on experience in real-world projects. Our <strong>digital india internship</strong> programs are designed to empower the next generation of tech leaders in line with the national vision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

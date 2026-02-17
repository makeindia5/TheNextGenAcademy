import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";

export default function AboutPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  // ── Data ──────────────────────────────────────────────────────

  const uspCards = [
    {
      icon: "💻",
      title: "Online Digital Marketing Courses",
      desc: "Our courses cover key topics like SEO, content marketing, social media, and analytics & many more. Learn at your own pace from the comfort of your home.",
      accent: "#00e5ff",
      iconBg: "rgba(0,229,255,0.12)",
      iconBorder: "rgba(0,229,255,0.22)",
    },
    {
      icon: "🛠️",
      title: "Real-World Projects",
      desc: "Work on hands-on projects that reflect real industry challenges. This practical experience helps you build skills that employers look for.",
      accent: "#ffab00",
      iconBg: "rgba(255,171,0,0.12)",
      iconBorder: "rgba(255,171,0,0.22)",
    },
    {
      icon: "🎯",
      title: "100% Internship",
      desc: "Get valuable experience with our 3-month internship program. Apply what you've learned and build your resume with real work experience.",
      accent: "#ff6d00",
      iconBg: "rgba(255,109,0,0.12)",
      iconBorder: "rgba(255,109,0,0.22)",
    },
    {
      icon: "💰",
      title: "Earn While You Learn",
      desc: "Our 'earn while you learn' program lets you make money while studying, helping you manage your finances as you advance your career.",
      accent: "#00e5ff",
      iconBg: "rgba(0,229,255,0.12)",
      iconBorder: "rgba(0,229,255,0.22)",
    },
    {
      icon: "📍",
      title: "Location Focus",
      desc: "We cater to learners in Mumbai and Thane, providing insights and opportunities specific to these areas and the local job market.",
      accent: "#ffab00",
      iconBg: "rgba(255,171,0,0.12)",
      iconBorder: "rgba(255,171,0,0.22)",
    },
    {
      icon: "🕐",
      title: "Flexible Online Learning",
      desc: "Our online courses let you study at your own pace and balance your learning with other responsibilities — work, college, or family.",
      accent: "#ff6d00",
      iconBg: "rgba(255,109,0,0.12)",
      iconBorder: "rgba(255,109,0,0.22)",
    },
  ];

  const whoShouldEnroll = [
    { icon: "🎓", label: "Fresh Graduates", desc: "Looking to enter the digital marketing or tech industry with job-ready skills." },
    { icon: "💼", label: "Working Professionals", desc: "Wanting to upskill, switch careers, or add digital expertise to their profile." },
    { icon: "🏢", label: "Business Owners", desc: "Aiming to market their own business online and reduce dependence on agencies." },
    { icon: "🎨", label: "Creative Individuals", desc: "Designers, writers, and content creators ready to monetise their skills digitally." },
    { icon: "🏠", label: "Homemakers & Freelancers", desc: "Looking for flexible income streams through digital marketing or app development." },
    { icon: "🌐", label: "Students (Any Stream)", desc: "Anyone curious about the digital world — no technical background required." },
  ];

  const team = [
    { name: "Rajesh Sharma", role: "Founder & CEO", exp: "12 yrs in Digital Marketing", initials: "RS", color: "#00e5ff" },
    { name: "Priya Iyer", role: "Head of SEO & Content", exp: "9 yrs, Ex-Agency Lead", initials: "PI", color: "#ffab00" },
    { name: "Nikhil Verma", role: "App Dev Lead", exp: "8 yrs Flutter / React Native", initials: "NV", color: "#ff6d00" },
    { name: "Sneha Joshi", role: "Placement Coordinator", exp: "6 yrs HR & Career Coaching", initials: "SJ", color: "#00e5ff" },
  ];

  const milestones = [
    { year: "2018", event: "NextGen Academy founded in Thane with first batch of 12 students." },
    { year: "2020", event: "Expanded curriculum to include App Development. 500+ students trained." },
    { year: "2022", event: "Launched online learning platform. Now training students pan-India." },
    { year: "2023", event: "50+ hiring partners onboarded. Placed 600+ students in 12 months." },
    { year: "2025", event: "2500+ alumni, 4.9★ Google rating & growing every batch." },
  ];

  const stats = [
    { v: "2500+", k: "Students Trained", c: "#00e5ff" },
    { v: "100%",  k: "Internship Rate",  c: "#ffab00" },
    { v: "50+",   k: "Hiring Partners",  c: "#ff6d00" },
    { v: "7 yrs", k: "In Operation",     c: "#00e5ff" },
  ];

  return (
    <>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — Welcome + Stats
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 5%", background: "var(--navy)" }}>
        <div className="max-w" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Left — copy */}
          <div className="fade-up" ref={fade}>
            <div className="sec-label">// Welcome to NextGen Academy</div>
            <h2 className="sec-title">
              Excellence in<br />
              <span className="grad-text">Digital Marketing Training</span>
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.82, marginBottom: 18, fontSize: "0.97rem" }}>
              At NextGen Academy, our goal is to provide you with top-notch training in
              Digital Marketing. We want to help you learn and grow continuously so you
              can stay ahead in this fast-changing field.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.82, marginBottom: 28, fontSize: "0.97rem" }}>
              Master Your Skills with our SEO, Google Ads, Social Media, App Development,
              and more — all designed around real industry needs and backed by a
              100% internship guarantee.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button className="btn-primary" onClick={() => go("/contact")}>
                Get Free Counselling
              </button>
              <button className="btn-secondary" onClick={() => go("/courses")}>
                View Courses →
              </button>
            </div>
          </div>

          {/* Right — stats */}
          <div
            className="fade-up"
            ref={fade}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="fade-up"
                ref={fade}
                style={{
                  background: "var(--navy-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "28px 20px",
                  textAlign: "center",
                  transitionDelay: `${i * 70}ms`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* top accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.c, opacity: 0.7 }} />
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "2.1rem", fontWeight: 700,
                  color: s.c, lineHeight: 1, marginBottom: 6,
                }}>
                  {s.v}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — Course USP Overview
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 5%", background: "var(--navy-mid)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade} style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <div className="sec-label">// Our Course USP Overview</div>
            <h2 className="sec-title">
              Why Choose <span className="grad-text">NextGen Academy?</span>
            </h2>
            <p className="sec-sub" style={{ margin: "0 auto" }}>
              Everything we do is designed to get you hired faster and grow further in your career.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
            {uspCards.map((card, i) => (
              <div
                key={i}
                className="fade-up"
                ref={fade}
                style={{
                  background: "var(--navy-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px",
                  transitionDelay: `${i * 70}ms`,
                  transition: "transform .25s, border-color .25s, box-shadow .25s",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = card.iconBorder;
                  e.currentTarget.style.boxShadow = "0 20px 56px rgba(0,0,0,.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Glow dot top-right */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  width: 8, height: 8, borderRadius: "50%",
                  background: card.accent, opacity: 0.6,
                  boxShadow: `0 0 10px ${card.accent}`,
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: card.iconBg,
                  border: `1px solid ${card.iconBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.55rem", marginBottom: 20,
                }}>
                  {card.icon}
                </div>

                <h3 style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1rem", fontWeight: 700,
                  letterSpacing: "-0.3px", marginBottom: 10,
                  color: "var(--white)",
                }}>
                  {card.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — Who Should Enroll
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 5%", background: "var(--navy)", borderTop: "1px solid var(--border)" }} className="grid-bg">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 56 }}>
            <div>
              <div className="sec-label">// Who Should Enrol?</div>
              <h2 className="sec-title">
                This Course Is<br />
                <span className="grad-text">For You If…</span>
              </h2>
            </div>
            <p className="sec-sub">
              No prior experience in digital marketing or coding? No problem.
              Our courses are designed to take anyone from zero to job-ready —
              regardless of your background.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {whoShouldEnroll.map((item, i) => (
              <div
                key={i}
                className="fade-up"
                ref={fade}
                style={{
                  display: "flex", gap: 18, alignItems: "flex-start",
                  padding: "22px", borderRadius: 12,
                  background: "var(--navy-card)",
                  border: "1px solid var(--border)",
                  transitionDelay: `${i * 65}ms`,
                  transition: "border-color .2s, transform .2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,229,255,0.28)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: 10,
                  background: "linear-gradient(135deg,rgba(0,229,255,.14),rgba(0,229,255,.04))",
                  border: "1px solid rgba(0,229,255,.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem",
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.96rem", fontWeight: 700, marginBottom: 5, color: "var(--white)" }}>
                    {item.label}
                  </h4>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — Our Journey / Milestones
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 5%", background: "var(--navy-mid)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left: timeline */}
          <div>
            <div className="sec-label fade-up" ref={fade}>// Our Journey</div>
            <h2 className="sec-title fade-up" ref={fade}>
              Milestones That <span className="grad-text">Define Us</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.78, marginBottom: 36 }}
              className="fade-up" ref={fade}>
              From a small classroom in Thane to a pan-India online platform —
              here's how we've grown since 2018.
            </p>

            <div className="timeline fade-up" ref={fade}>
              {milestones.map((m, i) => (
                <div className="tl-step" key={i}>
                  <h4>{m.year}</h4>
                  <p>{m.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: commitment card */}
          <div className="fade-up" ref={fade}>
            <div style={{
              background: "var(--navy-card)",
              border: "1px solid var(--border)",
              borderRadius: 20, padding: "40px",
              position: "relative", overflow: "hidden",
            }}>
              {/* gradient top bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--cyan), var(--amber))" }} />

              <div style={{ fontSize: "2.4rem", marginBottom: 20 }}>🚀</div>
              <h3 style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "1.25rem", fontWeight: 700,
                letterSpacing: "-0.5px", marginBottom: 16, lineHeight: 1.3,
              }}>
                Committed to Your <span className="grad-text">Success</span>
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 20 }}>
                At NextGen Academy, we are committed to helping you succeed in digital marketing.
                Join us and start your path to a rewarding career — with mentors who've been
                exactly where you are.
              </p>

              {/* Bullet perks */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {[
                  "Trainers with 8–15 years of industry experience",
                  "Live projects with real brands and clients",
                  "Dedicated placement support & mock interviews",
                  "Google, Meta & HubSpot certifications included",
                  "Batch options: weekday, weekend & online",
                ].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--cyan)", fontSize: "0.8rem", paddingTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{ width: "100%" }} onClick={() => go("/contact")}>
                For More Details — Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — Meet the Team
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 5%", background: "var(--navy)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade} style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 56px" }}>
            <div className="sec-label">// Our Team</div>
            <h2 className="sec-title">
              Meet the <span className="grad-text">Experts</span>
            </h2>
            <p className="sec-sub" style={{ margin: "0 auto" }}>
              Trainers who don't just teach — they've done it in real companies, for real clients.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 22 }}>
            {team.map((m, i) => (
              <div
                key={i}
                className="fade-up"
                ref={fade}
                style={{
                  background: "var(--navy-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16, padding: 28,
                  textAlign: "center",
                  transitionDelay: `${i * 80}ms`,
                  transition: "transform .25s, border-color .25s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "rgba(0,229,255,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: 68, height: 68, borderRadius: "50%",
                  background: m.color,
                  margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "1.4rem", color: "var(--navy)",
                  boxShadow: `0 0 24px ${m.color}44`,
                }}>
                  {m.initials}
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.98rem", fontWeight: 700, marginBottom: 5,
                }}>
                  {m.name}
                </div>
                <div style={{ color: m.color, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.4px", marginBottom: 6 }}>
                  {m.role}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "0.78rem" }}>
                  {m.exp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — Reviews strip
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        padding: "56px 5%",
        background: "var(--navy-mid)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="max-w" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div className="fade-up" ref={fade}>
            <div className="sec-label" style={{ marginBottom: 8 }}>// What Students Say</div>
            <h3 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700, letterSpacing: "-0.8px", lineHeight: 1.25,
            }}>
              4.9★ on Google · <span className="grad-text">Loved by 2500+ Students</span>
            </h3>
          </div>
          <div className="fade-up" ref={fade} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => go("/testimonials")}>
              See All Testimonials
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Talk to a Student →
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — CTA
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        padding: "110px 5%",
        background: "var(--navy)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* radial glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,229,255,.055), transparent)",
          pointerEvents: "none",
        }} />

        <div className="badge fade-up" ref={fade} style={{ marginBottom: 26, display: "inline-flex" }}>
          <span className="badge-dot" />
          Limited Seats — Batch Starting Soon
        </div>
        <h2
          className="fade-up"
          ref={fade}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 700, letterSpacing: "-1.5px",
            marginBottom: 18, lineHeight: 1.2,
            position: "relative", zIndex: 1,
          }}
        >
          Ready to Be Part of<br />
          <span className="grad-text">Our Story?</span>
        </h2>
        <p
          className="fade-up"
          ref={fade}
          style={{
            color: "var(--muted)", fontSize: "1.05rem",
            maxWidth: 490, margin: "0 auto 40px",
            lineHeight: 1.77, position: "relative", zIndex: 1,
          }}
        >
          Join thousands of students who've transformed their careers with NextGen Academy.
          Your first step is just one click away.
        </p>
        <div className="btn-group fade-up" ref={fade} style={{ justifyContent: "center" }}>
          <button
            className="btn-primary"
            style={{ padding: "16px 40px", fontSize: "1rem" }}
            onClick={() => go("/admission")}
          >
            Apply for a Course
          </button>
          <button
            className="btn-secondary"
            style={{ padding: "16px 40px", fontSize: "1rem" }}
            onClick={() => go("/contact")}
          >
            Get in Touch →
          </button>
        </div>
      </section>
    </>
  );
}
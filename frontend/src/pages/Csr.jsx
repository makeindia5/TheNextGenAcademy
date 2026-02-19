import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useFadeUp from "../hooks/useFadeUp";
import InfoCard from "../components/InfoCard";
import "../styles/CSR.css";

// ════════════════════════════════════════════════════════════════
//  DATA — Website Ready Content
// ════════════════════════════════════════════════════════════════

// CSR Programs
const CSR_PROGRAMS = [
  {
    icon: "🎓",
    accent: "teal",
    title: "Maharashtra Digital Skill & Employment Mission (MDSEM)",
    desc: "Digital & IT skill training program aimed at making youth job-ready and employable in today's digital economy.",
  },
  {
    icon: "💻",
    accent: "cyan",
    title: "MahaTech – Youth IT Skilling & Placement Program",
    desc: "Advanced IT skilling, project-based learning, internships and placement assistance for students.",
  },
  {
    icon: "👩",
    accent: "amber",
    title: "MahaWomen Digital Empowerment Program",
    desc: "Special digital skill and entrepreneurship program designed for women empowerment.",
  },
  {
    icon: "📱",
    accent: "hot",
    title: "Smart Maharashtra – Digital Literacy Program",
    desc: "Basic to advanced digital literacy training for students, MSMEs and underprivileged communities.",
  },
];

// Program Impact Stats
const PROGRAM_IMPACT = [
  { icon: "🎓", title: "5,000+ Youth", desc: "Training Target (Annually)", accent: "teal" },
  { icon: "💻", title: "300+ Hours", desc: "Training per Student", accent: "cyan" },
  { icon: "👩", title: "40% Women", desc: "Beneficiaries", accent: "amber" },
  { icon: "🏙", title: "Coverage", desc: "Mumbai | Thane | Navi Mumbai | Maharashtra", accent: "hot" },
];

// Funding Options - FIXED: 4 cards in 2x2 grid
const FUNDING_OPTIONS = [
  { amount: "₹25 Lakhs", coverage: "250 Students", tier: "bronze" },
  { amount: "₹50 Lakhs", coverage: "500 Students", tier: "silver" },
  { amount: "₹1 Crore", coverage: "1000 Students", tier: "gold" },
  { amount: "₹2 Crore", coverage: "State Level Program", tier: "platinum" },
];

// Why Partner cards
const WHY_PARTNER = [
  { icon: "✓", title: "CSR Compliance", desc: "Companies Act 2013", accent: "teal" },
  { icon: "📈", title: "High Impact", desc: "Social & Economic", accent: "cyan" },
  { icon: "💼", title: "Employment", desc: "Generation Focus", accent: "amber" },
  { icon: "🏆", title: "Brand Visibility", desc: "Recognition", accent: "hot" },
  { icon: "📊", title: "ESG Reporting", desc: "Support Included", accent: "teal" },
  { icon: "🔍", title: "Transparent", desc: "Fund Utilization", accent: "cyan" },
];

// Implementation Model
const IMPLEMENTATION = [
  { icon: "📚", title: "Industry-Aligned Curriculum", accent: "teal" },
  { icon: "👨‍🏫", title: "Expert Trainers & Mentors", accent: "cyan" },
  { icon: "🛠", title: "Practical Hands-On Training", accent: "amber" },
  { icon: "💼", title: "Internship & Placement Assistance", accent: "hot" },
  { icon: "📊", title: "Continuous Monitoring & Reporting", accent: "teal" },
];

// Monitoring & Reporting
const MONITORING = [
  { icon: "📋", title: "Monthly Progress Reports", accent: "cyan" },
  { icon: "📊", title: "Impact Assessment Dashboards", accent: "teal" },
  { icon: "🎯", title: "Student Performance Tracking", accent: "amber" },
  { icon: "📜", title: "CSR Utilization Certificates", accent: "hot" },
];

// Skill India alignment
const SKILL_INDIA_PILLARS = [
  { icon: "🎓", name: "Skill India" },
  { icon: "📱", name: "Digital India" },
  { icon: "🏛", name: "Maharashtra Skill Mission" },
];


// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function CSRPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",  // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"   // Replace with your EmailJS public key
      )
      .then(
        () => {
          setFormStatus("success");
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          setFormStatus("error");
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className="csr-hero">
        <div className="csr-hero-glow" />
        <div className="csr-hero-content">
          <div className="badge csr-hero-badge fade-up" ref={fade}>
            <span className="badge-dot" />
            CSR Partnership Program
          </div>
          <h1 className="csr-hero-title fade-up" ref={fade}>
            Skill India &amp; Digital<br />
            <span className="grad-text">Employment Initiative</span>
          </h1>
          <p className="csr-hero-subtitle fade-up" ref={fade}>
            Empowering Youth Through Digital Skills, Employment & Entrepreneurship
          </p>
          <p className="csr-hero-subtitle fade-up" ref={fade}>
            Join NextGen Academy in bridging the digital skill gap. Together, we can provide
            quality training, real-world exposure, and sustainable careers to economically
            backward youth across Mumbai, Thane, Navi Mumbai and Maharashtra.
          </p>
          <div className="btn-group fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => {
              document.getElementById("csr-contact").scrollIntoView({ behavior: "smooth" });
            }}>
              Request CSR Proposal
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Schedule CSR Meeting →
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — Our CSR Programs (4 cards)
      ════════════════════════════════════════════════════ */}
      <section id="csr-programs" className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Our CSR Programs</div>
            <h2 className="sec-title">
              Four Flagship Programs<br />
              <span className="grad-text">Driving Social Impact</span>
            </h2>
          </div>

          <div className="csr-programs-grid">
            {CSR_PROGRAMS.map((p, i) => (
              <InfoCard
                key={i}
                icon={p.icon}
                title={p.title}
                description={p.desc}
                accent={p.accent}
                delay={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — Program Impact (4 cards)
      ════════════════════════════════════════════════════ */}
      <section id="csr-impact" className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Program Impact</div>
            <h2 className="sec-title">
              Measurable Impact<br />
              <span className="grad-text">Across Maharashtra</span>
            </h2>
          </div>

          <div className="csr-impact-grid">
            {PROGRAM_IMPACT.map((item, i) => (
              <InfoCard
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                accent={item.accent}
                delay={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — Funding Options (4 cards in 2x2)
      ════════════════════════════════════════════════════ */}
      <section id="csr-funding" className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// CSR Funding Options</div>
            <h2 className="sec-title">
              Flexible Funding Slabs<br />
              <span className="grad-text">Choose Your Impact</span>
            </h2>
            <p className="sec-sub">
              Custom programs can be designed as per your CSR objectives.
            </p>
          </div>

          <div className="csr-funding-grid">
            {FUNDING_OPTIONS.map((f, i) => (
              <div
                className={`csr-funding-card csr-funding-card--${f.tier} csr-delay-${i} fade-up`}
                key={i}
                ref={fade}
              >
                <div className={`csr-funding-card-bar csr-funding-card-bar--${f.tier}`} />
                <div className="csr-funding-card-amount">{f.amount}</div>
                <div className="csr-funding-card-coverage">{f.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — Why Partner (6 cards)
      ════════════════════════════════════════════════════ */}
      <section id="csr-why-partner" className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Why Partner with Us</div>
            <h2 className="sec-title">
              Strategic CSR Benefits &amp;<br />
              <span className="grad-text">Transparent Impact</span>
            </h2>
          </div>

          <div className="csr-why-grid">
            {WHY_PARTNER.map((w, i) => (
              <InfoCard
                key={i}
                icon={w.icon}
                title={w.title}
                description={w.desc}
                accent={w.accent}
                delay={i % 6}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Implementation Model (5 cards)
      ════════════════════════════════════════════════════ */}
      <section id="csr-implementation" className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Implementation Model</div>
            <h2 className="sec-title">
              How We Deliver<br />
              <span className="grad-text">Quality Training</span>
            </h2>
          </div>

          <div className="csr-implementation-grid">
            {IMPLEMENTATION.map((item, i) => (
              <InfoCard
                key={i}
                icon={item.icon}
                title={item.title}
                accent={item.accent}
                delay={i % 5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 7 — Monitoring & Reporting (4 cards)
      ════════════════════════════════════════════════════ */}
      {/* <section className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Monitoring &amp; Reporting</div>
            <h2 className="sec-title">
              Transparent Tracking &amp;<br />
              <span className="grad-text">Impact Reporting</span>
            </h2>
          </div>

          <div className="csr-monitoring-grid">
            {MONITORING.map((item, i) => (
              <InfoCard
                key={i}
                icon={item.icon}
                title={item.title}
                accent={item.accent}
                delay={i}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════════════════════════
          SECTION 8 — Skill India Alignment
      ════════════════════════════════════════════════════ */}
      {/* <section className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="csr-skill-india fade-up" ref={fade}>
            <div className="csr-skill-india-head">
              <div className="csr-skill-india-badge">
                🇮🇳 Government Initiative Alignment
              </div>
              <h2 className="csr-skill-india-title">
                Aligned with National<br />
                <span className="grad-text">Skill Development Missions</span>
              </h2>
              <p className="csr-skill-india-desc">
                Our programs are aligned with <strong>Skill India</strong>,{" "}
                <strong>Digital India</strong> & <strong>Maharashtra Skill Mission</strong>{" "}
                initiatives. Government partnership will be undertaken as per applicable
                approvals and agreements.
              </p>
            </div>

            <div className="csr-skill-india-pillars">
              {SKILL_INDIA_PILLARS.map((p, i) => (
                <div
                  className={`csr-skill-india-pillar csr-delay-${i} fade-up`}
                  key={i}
                  ref={fade}
                >
                  <div className="csr-skill-india-pillar-icon">{p.icon}</div>
                  <div className="csr-skill-india-pillar-name">{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════════════════════════
          SECTION 9 — Contact Form (EmailJS)
      ════════════════════════════════════════════════════ */}
      <section id="csr-contact" className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Partner with Us</div>
            <h2 className="sec-title">
              Request CSR Proposal &amp;<br />
              <span className="grad-text">Schedule Meeting</span>
            </h2>
            <p className="sec-sub">
              We welcome partnerships with corporates, builders, PSUs, foundations, and CSR
              organizations to jointly create measurable social impact.
            </p>
          </div>

          <div className="csr-contact-form-wrap fade-up" ref={fade}>
            <form ref={formRef} onSubmit={handleSubmit} className="csr-contact-form">
              <div className="csr-form-row">
                <div className="csr-form-field">
                  <label className="csr-form-label">Full Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    className="csr-form-input"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="csr-form-field">
                  <label className="csr-form-label">Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    className="csr-form-input"
                    required
                    placeholder="Company/Foundation name"
                  />
                </div>
              </div>

              <div className="csr-form-row">
                <div className="csr-form-field">
                  <label className="csr-form-label">Email *</label>
                  <input
                    type="email"
                    name="from_email"
                    className="csr-form-input"
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
                <div className="csr-form-field">
                  <label className="csr-form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="csr-form-input"
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="csr-form-field">
                <label className="csr-form-label">CSR Interest Area *</label>
                <select name="interest" className="csr-form-select" required>
                  <option value="">Select program...</option>
                  <option value="bronze">25 Lakhs</option>
                  <option value="silver">50 Lakhs</option>
                  <option value="gold">1 crore</option>
                  <option value="diamond">2 crore</option>
                </select>
              </div>

              <div className="csr-form-field">
                <label className="csr-form-label">Message</label>
                <textarea
                  name="message"
                  className="csr-form-textarea"
                  rows="4"
                  placeholder="Tell us about your CSR objectives..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary csr-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request CSR Proposal"}
              </button>

              {formStatus === "success" && (
                <div className="csr-form-status csr-form-status--success">
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {formStatus === "error" && (
                <div className="csr-form-status csr-form-status--error">
                  ✗ Something went wrong. Please email us directly at info@nextgenacademy.in
                </div>
              )}
            </form>

            <div className="csr-contact-info">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@nextgenacademy.in">info@nextgenacademy.in</a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919152359157">+91-9152359157</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════════ */}
      {/* <section className="csr-cta-section">
        <div className="csr-cta-glow" />
        <div className="csr-cta-content">
          <h2 className="csr-cta-title fade-up" ref={fade}>
            Join Us in Building a<br />
            <span className="grad-text">Digitally Skilled India</span>
          </h2>

          <p className="csr-cta-sub fade-up" ref={fade}>
            Together, we can create measurable social impact, empower youth with industry-ready
            skills, and contribute to India's digital transformation.
          </p>

          <div className="csr-cta-buttons fade-up" ref={fade}>
            <button
              className="btn-primary"
              onClick={() => {
                document.getElementById("csr-contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Detailed CSR Proposal
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Schedule CSR Presentation Meeting →
            </button>
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════════════════════════
          DISCLAIMER
      ════════════════════════════════════════════════════ */}
      <section className="csr-disclaimer">
        <div className="max-w">
          <p className="fade-up" ref={fade}>
            <strong>Disclaimer:</strong> Our programs are aligned with Skill India, Digital
            India & Maharashtra Skill Mission initiatives. Government partnership will be
            undertaken as per applicable approvals and agreements.
          </p>
        </div>
      </section>
    </>
  );
}

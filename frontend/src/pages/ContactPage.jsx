import { useState } from "react";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import { COURSES_DATA } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function ContactPage() {
  const fade = useFadeUp();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero 
        label="Get in Touch" 
        title={<>We're Here to<br /><span className="grad-text">Help You</span></>} 
        sub="Have a question about our courses? Want to know which program fits your goals? Reach out — our counsellors respond within 2 hours." 
      />

      <section>
        <div className="max-w contact-layout">

          {/* Info */}
          <div>
            <div className="sec-label fade-up" ref={fade}>// Reach Us</div>
            <h2 className="sec-title fade-up" ref={fade} style={{ marginBottom: 28 }}>
              Contact <span className="grad-text">Details</span>
            </h2>

            <div className="contact-info-card fade-up" ref={fade}>
              {[
                { icon: "📞", label: "Phone", val: <a href="tel:8976509267">+91 89765 09267</a> },
                { icon: "✉️", label: "Email", val: <a href="mailto:info@thenextgenacademy.co.in">info@thenextgenacademy.co.in</a> },
                { icon: "📍", label: "Address", val: "Thane West, Mumbai, Maharashtra" },
                { icon: "🕐", label: "Hours", val: "Mon–Sat: 9:00 AM – 8:00 PM" },
                { icon: "💬", label: "WhatsApp", val: <a href="https://wa.me/918976509267">Chat on WhatsApp</a> },
              ].map((row, i) => (
                <div className="c-info-row" key={i}>
                  <div className="c-info-icon">{row.icon}</div>
                  <div>
                    <div className="c-info-label">{row.label}</div>
                    <div className="c-info-val">{row.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="sec-label fade-up" ref={fade}>// Send a Message</div>
            <h2 className="sec-title fade-up" ref={fade} style={{ marginBottom: 28 }}>
              Book Free <span className="grad-text">Counselling</span>
            </h2>

            {sent ? (
              <div className="card fade-up" ref={fade} style={{ textAlign: "center", padding: 48 }}>
                <div className="card-top-bar" />
                <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>✅</div>
                <h3 style={{ fontFamily: "'Space Mono',monospace", marginBottom: 10 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  Our counsellor will call you back within 2 hours. Check your WhatsApp too!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card fade-up" ref={fade} style={{ padding: 36 }}>
                <div className="card-top-bar" />
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" placeholder="Your name" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" placeholder="+91 98765 43210" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" placeholder="you@email.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested In</label>
                    <select className="form-select">
                      <option value="">Select a course</option>
                      {COURSES_DATA.map(c => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                      ))}
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="form-group full">
                    <label className="form-label">Message (Optional)</label>
                    <textarea className="form-textarea" placeholder="Tell us about your background and career goals." />
                  </div>
                </div>

                <button 
                  className="btn-primary" 
                  type="submit" 
                  style={{ marginTop: 20, width: "100%", fontSize: "1rem", padding: "16px" }}
                >
                  Send Message & Book Counselling
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}


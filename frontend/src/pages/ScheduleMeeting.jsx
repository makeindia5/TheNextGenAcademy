import { useState, useRef } from "react";
import useFadeUp from "../hooks/useFadeUp";


export default function ScheduleMeetingPage() {
  const fade = useFadeUp();
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again or contact us.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Server error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                { icon: "✉️", label: "Email", val: <a href="mailto:info.nextgenacadmy@gmail.com">info.nextgenacadmy@gmail.com</a> },
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
              Schedule <span className="grad-text">Meeting</span>
            </h2>

            {sent ? (
              <div className="card fade-up" ref={fade} style={{ textAlign: "center", padding: 48 }}>
                <div className="card-top-bar" />
                <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>✅</div>
                <h3 style={{ fontFamily: "'Space Mono',monospace", marginBottom: 10 }}>
                  Meeting Scheduled
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  Will call you back within 2 hours. Check your WhatsApp too!
                </p>
              </div>
            ) : (
              <form ref={(el) => { formRef.current = el; fade(el); }} onSubmit={handleSubmit} className="card fade-up" style={{ padding: 36 }}>
                <div className="card-top-bar" />
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" name="name" placeholder="Your name" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" name="phone" placeholder="+91 98765 43210" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" name="email" type="email" placeholder="you@email.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested In</label>
                    <select className="form-select" name="interest">
                      <option value="">Select Your Interest</option>
                      <option value="Bronze">25 lakh</option>
                      <option value="Silver">50 lakh</option>
                      <option value="Gold">1 crore</option>
                      <option value="Diamond">2 crore</option>
                      <option value="not-sure">Custom</option>
                    </select>
                  </div>

                  <div className="form-group full">
                    <label className="form-label">Message (Optional)</label>
                    <textarea className="form-textarea" name="message" placeholder="Tell us about your background and career goals." />
                  </div>
                </div>

                <button
                  className="btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ marginTop: 20, width: "100%", fontSize: "1rem", padding: "16px" }}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                </button>

                {error && (
                  <div style={{ marginTop: 16, color: "#ff4d4d", fontSize: "0.9rem", textAlign: "center" }}>
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}


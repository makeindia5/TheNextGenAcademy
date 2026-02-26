import { useState, useRef } from "react";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import { COURSES_DATA } from "../data/courses";

export default function AdmissionPage() {
  const fade = useFadeUp();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setSubmitted(false), 5000);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
      <PageHero
        showOrbs={false}
        label="Admission Form"
        title={<>Secure Your <span className="grad-text">Seat Today</span></>}
        sub="Fill in the admission form below. Our team will confirm your enrollment and share batch details within 24 hours."
      />

      <section>
        <div className="max-w" style={{ maxWidth: 740 }}>

          <div className="fade-up" ref={fade} style={{ marginBottom: '24px', color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
            Ready to start your journey with NextGen Academy? Complete your admission process by filling out the form below. Once submitted, our team will review your application and get in touch with you within 24 hours to confirm your enrollment and provide batch details.
          </div>

          <form ref={(el) => { formRef.current = el; fade(el); }} onSubmit={handleSubmit} className="card fade-up" style={{ padding: 36 }}>
            <div className="card-top-bar" />
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input className="form-input" name="name" required />
              </div>

              <div className="form-group">
                <label className="form-label">Phone *</label>
                <input className="form-input" name="phone" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input className="form-input" name="email" required />
              </div>

              <div className="form-group">
                <label className="form-label">Course *</label>
                <select className="form-select" name="course" required>
                  <option value="">Select Course</option>
                  {COURSES_DATA.map(c => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn-primary" type="submit" disabled={isSubmitting} style={{ marginTop: 20, width: "100%" }}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>

            {submitted && (
              <div style={{ marginTop: 20, color: "#00cc88", fontWeight: "bold", textAlign: "center", fontSize: "1rem" }}>
                ✓ Application Submitted Successfully! Our team will contact you within 24 hours.
              </div>
            )}

            {error && (
              <div style={{ marginTop: 16, color: "#ff4d4d", fontSize: "0.9rem", textAlign: "center" }}>
                {error}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}



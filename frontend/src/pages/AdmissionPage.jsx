import { useState } from "react";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import { COURSES_DATA } from "../data/courses";

export default function AdmissionPage() {
  const fade = useFadeUp();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero 
        label="Admission Form" 
        title={<>Secure Your <span className="grad-text">Seat Today</span></>} 
        sub="Fill in the admission form below. Our team will confirm your enrollment and share batch details within 24 hours." 
      />

      <section>
        <div className="max-w" style={{ maxWidth: 740 }}>

          {submitted ? (
            <div className="card fade-up" ref={fade} style={{ textAlign: "center", padding: 60 }}>
              <div className="card-top-bar" />
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: "'Space Mono',monospace", marginBottom: 12 }}>
                Application Submitted!
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Our admissions team will contact you within 24 hours with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card fade-up" ref={fade} style={{ padding: 36 }}>
              <div className="card-top-bar" />
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input className="form-input" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Course *</label>
                  <select className="form-select" required>
                    <option value="">Select Course</option>
                    {COURSES_DATA.map(c => (
                      <option key={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="btn-primary" type="submit" style={{ marginTop: 20, width: "100%" }}>
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}



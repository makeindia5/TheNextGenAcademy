import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import { TESTIMONIALS } from "../data/testimonials";
import PageHero from "../components/PageHero";

export default function TestimonialsPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      <PageHero 
        label="Student Stories" 
        title={<>Real Results from<br /><span className="grad-text">Real Students</span></>} 
        sub="Over 2500 students trained. Here's what they say about their journey at NextGen Academy — in their own words." 
      />

      <section>
        <div className="max-w">
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card fade-up" key={i} ref={fade}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="t-avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-loc">📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



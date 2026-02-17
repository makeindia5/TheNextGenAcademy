import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import { COURSES_DATA } from "../data/courses";
import PageHero from "../components/PageHero";
import CourseCard from "../components/CourseCard";
export default function CoursesPage() {
  const navigate = useNavigate(); 
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      <PageHero 
        label="All Programs" 
        title={<>Courses Built for<br /><span className="grad-text">Real-World Success</span></>} 
        sub="Every course is designed with industry input. Learn tools professionals actually use, then apply them in live projects with guaranteed internship support." 
      />

      <section>
        <div className="max-w">
          <div className="courses-grid">
    
            {COURSES_DATA.map((c, i) => (
                <CourseCard
                key={c.id}
                course={c}
                index={i}
                fade={fade}
                onClick={go}
                />

            ))}
        </div>

        

          <div className="card fade-up" ref={fade} style={{ marginTop: 40, textAlign: "center", padding: 40 }}>
            <div className="card-top-bar" />
            <div style={{ fontSize: "1.4rem", marginBottom: 12 }}>🤔</div>
            <h3 style={{ fontFamily: "'Space Mono',monospace", marginBottom: 12 }}>
              Not sure which course to pick?
            </h3>
            <p style={{ color: "var(--muted)", maxWidth: 440, margin: "0 auto 24px", lineHeight: 1.7, fontSize: ".92rem" }}>
              Talk to our expert counsellors for free. We'll help you figure out the perfect path based on your background and career goals.
            </p>
            <button className="btn-primary" onClick={() => go("/contact")}>
              Book Free Counselling
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


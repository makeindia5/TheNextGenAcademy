import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import { COURSES_DATA } from "../data/courses";
import PageHero from "../components/PageHero";

export default function CourseDetailPage({ courseId }) {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  const c = COURSES_DATA.find(x => x.id === courseId);
  if (!c) return null;

  return (
    <>
      <PageHero label={c.tag} title={<>{c.title}</>} sub={c.short} />

      <section>
        <div className="max-w">

          <div className="info-bar fade-up" ref={fade} style={{ marginBottom: 56 }}>
            {[ 
              { v: c.duration, k: "Duration" },
              { v: c.fee, k: "Course Fee" },
              { v: c.level, k: "Skill Level" },
              { v: c.batch, k: "Batch Type" },
              { v: "100%", k: "Internship" },
              { v: "Placement", k: "Support" }
            ].map((s, i) => (
              <div className="info-item" key={i}>
                <div className="info-val">{s.v}</div>
                <div className="info-key">{s.k}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}



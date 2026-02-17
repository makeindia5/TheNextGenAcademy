import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import AppCard from "../components/AppCard";
import "../styles/AppDev.css";
// ── All course data from the website ──────────────────────────
 const APP_COURSES = [
  {
    id: "android-frontend",
    icon: "🎨",
    badge: "UI / UX Focus",
    accent: "cyan",
    title: "Android App Development (Frontend)",
    overview:
      "Our Android App Development (Frontend) course provides students with hands-on experience in designing and developing mobile apps for Android platforms. This course covers the essential tools and technologies used in Android development, focusing on the frontend aspects of app design.",
    duration: "2 Months",
    fee: "₹18,000",
    internship: "2-Month Unpaid Internship",
    whoCanJoin: [
      "Students pursuing M.Sc, B.Sc, BCA, MCA, B.E, or B.Tech & related field",
      "Freshers looking to enhance their skills in mobile app development",
    ],
    keyLearnings: [
      "Introduction to Android Studio and its tools",
      "Layout design and UI/UX principles",
      "Working with Android components (Activity, Fragment, Views)",
      "Developing user-friendly interfaces for mobile apps",
      "Implementing common design patterns for Android",
      "Working with RecyclerView, CardView & Material Design",
    ],
    whyChoose: [
      "100% hands-on learning with real-world projects",
      "Build your portfolio with Android apps that showcase your skills",
      "Opportunity for a 2-month unpaid internship to gain industry experience",
    ],
  },
  {
    id: "android-backend",
    icon: "⚙️",
    badge: "Backend Dev",
    accent: "amber",
    title: "Android App Development (Backend)",
    overview:
      "Our Android App Development (Backend) course focuses on the backend development required for Android applications. Students will learn how to design, implement, and manage the backend of mobile apps, using technologies that power Android apps' functionalities and database management.",
    duration: "2 Months",
    fee: "₹18,000",
    internship: "2-Month Unpaid Internship",
    whoCanJoin: [
      "Students pursuing M.Sc, B.Sc, BCA, MCA, B.E, or B.Tech",
      "Anyone interested in backend development for Android apps",
    ],
    keyLearnings: [
      "Setting up a backend environment for Android apps",
      "Databases: Firebase, MySQL, and SQLite for data storage",
      "RESTful API development and integration",
      "Authentication and security for Android apps",
      "Managing cloud storage and server-side processing",
      "Connecting backend systems to Android frontend",
    ],
    whyChoose: [
      "100% practical learning with industry-standard tools and technologies",
      "Work on real backend projects to strengthen your skills",
      "2-month unpaid internship to gain hands-on experience in a professional environment",
    ],
  },
  {
    id: "flutter",
    icon: "📱",
    badge: "Most Popular",
    accent: "hot",
    title: "Flutter App Development",
    overview:
      "The Flutter Development course empowers students to design and build beautiful, interactive, and responsive mobile apps for both Android and iOS using the Flutter framework. This course focuses on the frontend development skills required to create engaging user interfaces.",
    duration: "2 Months",
    fee: "₹23,000",
    internship: "2-Month Unpaid Internship",
    whoCanJoin: [
      "Students pursuing M.Sc, B.Sc, BCA, MCA, B.E, or B.Tech & related field",
      "Beginners looking to specialise in cross-platform app development",
    ],
    keyLearnings: [
      "Introduction to Flutter and Dart programming language",
      "Designing responsive UI/UX for mobile apps",
      "Implementing widgets and animations",
      "Managing states with Provider, Riverpod, or Bloc",
      "Building cross-platform apps with a single codebase",
      "Firebase integration and real-time data handling",
    ],
    whyChoose: [
      "Learn the latest tools and trends in mobile app development",
      "Develop projects to showcase in your professional portfolio",
      "Gain industry exposure through a 2-month unpaid internship with real-world projects",
    ],
  },
  {
    id: "ios-android-backend",
    icon: "🔗",
    badge: "iOS + Android",
    accent: "purple",
    title: "iOS & Android App Development (Backend)",
    overview:
      "Master the art of backend development for iOS and Android apps with our industry-focused course. Using Node.js — one of the most in-demand backend technologies — this course equips you with the skills to build robust, scalable, and secure server-side architectures for mobile applications.",
    duration: "2 Months",
    fee: "₹18,000",
    internship: "2-Month Unpaid Internship",
    whoCanJoin: [
      "Students pursuing M.Sc, B.Sc, BCA, MCA, B.E, or B.Tech & related field",
      "Freshers and professionals interested in backend development for mobile apps",
    ],
    keyLearnings: [
      "Comprehensive introduction to Node.js and server-side scripting",
      "Creating and integrating RESTful APIs with mobile apps",
      "Database management using MongoDB and MySQL",
      "Secure user authentication and data handling",
      "Deploying backend systems on cloud platforms",
      "Practical integration with iOS and Android apps",
    ],
    whyChoose: [
      "Gain expertise in Node.js, one of the most in-demand backend technologies",
      "Work on live backend projects for mobile applications",
      "2-month unpaid internship to gain practical experience in backend development",
    ],
  },
];

// ── Why Android is in demand data ────────────────────────────
const DEMAND_REASONS = [
  {
    icon: "🏙️",
    title: "Tech Hub of Maharashtra",
    text: (
      <>
        <strong>Mumbai</strong> and <strong>Thane</strong> are at the forefront of
        digital transformation, with a growing need for skilled Android developers
        in the IT and mobile app industry.
      </>
    ),
  },
  {
    icon: "💼",
    title: "Wide-Ranging Career Opportunities",
    text: (
      <>
        From <strong>mobile app development</strong> for e-commerce to fintech, healthcare,
        and entertainment, <strong>Android developers</strong> are essential across many
        sectors in Maharashtra.
      </>
    ),
  },
  {
    icon: "🌍",
    title: "Global Reach for Local Apps",
    text: (
      <>
        Android apps developed in <strong>Mumbai</strong> and <strong>Thane</strong> have
        the potential to reach users worldwide, increasing the demand for skilled
        developers in these areas.
      </>
    ),
  },
];

// ── Key features data ─────────────────────────────────────────
const KEY_FEATURES = [
  {
    emoji: "🔓",
    title: "Open-Source Platform",
    desc: (
      <>
        Android's open-source nature empowers developers in{" "}
        <strong>Maharashtra</strong> to innovate and create unique,
        customisable mobile applications.
      </>
    ),
  },
  {
    emoji: "📲",
    title: "Wide Device Compatibility",
    desc: (
      <>
        Android apps are compatible with smartphones, tablets, and other smart
        devices, making them versatile for various business needs in{" "}
        <strong>Mumbai</strong> and <strong>Thane</strong>.
      </>
    ),
  },
  {
    emoji: "💻",
    title: "In-Demand Programming Languages",
    desc: (
      <>
        Developers use <strong>Java</strong> and <strong>Kotlin</strong> — two of
        the most in-demand programming languages — to build high-performance Android
        apps.
      </>
    ),
  },
  {
    emoji: "🛠️",
    title: "Powerful Development Tools",
    desc: (
      <>
        <strong>Android Studio</strong> is the official IDE, offering advanced
        features like a visual layout editor and real-time testing tools —
        crucial for developers in <strong>Thane</strong> and <strong>Mumbai</strong>.
      </>
    ),
  },
  {
    emoji: "📈",
    title: "High Demand",
    desc: "With the growing adoption of mobile apps across industries, Android developers are in high demand across startups and enterprises alike.",
  },
  {
    emoji: "🚀",
    title: "Innovation Opportunities",
    desc: "Android development allows you to create apps across various categories like gaming, education, e-commerce, social media, and more.",
  },
];

// ── Career paths data ─────────────────────────────────────────
const CAREER_PATHS = [
  "Android Developer",
  "Flutter Developer",
  "Mobile App Developer",
  "Backend Developer",
  "Full-Stack Mobile Developer",
  "React Native Developer",
  "iOS Developer",
  "Freelance App Developer",
  "App UI/UX Designer",
  "Tech Startup Founder",
];

// ── Page Component ─────────────────────────────────────────────
export default function AppDevelopmentPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  const handleEnroll = (courseId) => {
    go("/admission");
  };

  return (
    <>
      {/* ── PageHero — untouched ──────────────────────────── */}
      <PageHero
        label="App Development Courses"
        title={
          <>
            Best Mobile App Development<br />
            <span className="grad-text">Course in Thane & Mumbai</span>
          </>
        }
        sub="Join our comprehensive app development course to build mobile apps for Android & iOS. Learn coding, design, and development from industry experts — and start your career today!"
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — About Android App Development + Stats
      ═══════════════════════════════════════════════════════ */}
      <section className="apd-section apd-section--dark grid-bg">
        <div className="max-w">
          <div className="apd-intro-grid">

            {/* Left: intro copy */}
            <div className="apd-intro-text fade-up" ref={fade}>
              <div className="sec-label">// About Android App Development in Thane, Mumbai</div>
              <h2 className="sec-title">
                Power Billions of Devices<br />
                <span className="grad-text">Worldwide</span>
              </h2>
              <p>
                Android app development is the process of creating mobile applications
                for the Android operating system, which powers billions of devices
                worldwide. With <strong style={{ color: "var(--white)" }}>Android development
                skills in high demand in Mumbai, Thane, and Maharashtra</strong>, learning
                how to build mobile apps is an essential step for anyone pursuing a
                career in tech.
              </p>
              <p>
                Whether you want to build consumer apps, enterprise solutions, or
                cross-platform experiences — our courses cover everything from UI design
                to backend architecture, taught by trainers with real industry experience.
              </p>
              <div className="btn-group">
                <button className="btn-primary" onClick={() => go("/contact")}>
                  Get Free Counselling
                </button>
                <button className="btn-secondary" onClick={() => go("/admission")}>
                  Apply Now →
                </button>
              </div>
            </div>

            {/* Right: stats */}
            <div className="apd-stats-row fade-up" ref={fade}>
              {[
                { num: "4",     label: "Courses Available",       bar: "linear-gradient(90deg,var(--cyan),var(--cyan-dim))", cls: "cyan" },
                { num: "2M+",   label: "Android Devices Active",  bar: "linear-gradient(90deg,var(--amber),#e65c00)",        cls: "amber" },
                { num: "100%",  label: "Internship Guarantee",    bar: "linear-gradient(90deg,var(--hot),var(--amber))",     cls: "hot" },
                { num: "₹23k",  label: "Max Course Fee",          bar: "linear-gradient(90deg,var(--cyan),var(--cyan-dim))", cls: "cyan" },
                { num: "2 Mo",  label: "Course Duration",         bar: "linear-gradient(90deg,var(--amber),#e65c00)",        cls: "amber" },
                { num: "50+",   label: "Hiring Partners",         bar: "linear-gradient(90deg,var(--hot),var(--amber))",     cls: "hot" },
              ].map((s, i) => (
                <div className="apd-stat-card fade-up" key={i} ref={fade}
                  style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="apd-stat-card-bar" style={{ background: s.bar }} />
                  <div className={`apd-stat-num apd-stat-num--${s.cls}`}>{s.num}</div>
                  <div className="apd-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — Why Android is in Demand
      ═══════════════════════════════════════════════════════ */}
      <section className="apd-section apd-section--mid">
        <div className="max-w">
          <div className="apd-demand-grid">

            {/* Left: heading + reasons */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Why It's in Demand</div>
              <h2 className="sec-title fade-up" ref={fade}>
                Why Android App Development is in Demand in{" "}
                <span className="grad-text">Thane, Mumbai & Maharashtra</span>
              </h2>
              <p className="apd-demand-intro fade-up" ref={fade}>
                Android development skills are among the most sought-after in the
                Maharashtra tech ecosystem. Here's why learning app development in
                Mumbai and Thane opens real career doors:
              </p>
              <div className="apd-reason-list">
                {DEMAND_REASONS.map((r, i) => (
                  <div className="apd-reason-item fade-up" key={i} ref={fade}
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="apd-reason-icon">{r.icon}</div>
                    <div className="apd-reason-content">
                      <h4>{r.title}</h4>
                      <p>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: career paths */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Career Opportunities</div>
              <h3 className="sec-title fade-up" ref={fade} style={{ fontSize: "1.6rem" }}>
                Diverse Career <span className="grad-text">Paths Await You</span>
              </h3>
              <p className="fade-up" ref={fade}
                style={{ color: "var(--muted)", fontSize: "0.93rem", lineHeight: 1.78, marginBottom: 20 }}>
                Skills in Android app development open doors to careers in startups,
                tech giants, and freelance opportunities — both in India and globally.
              </p>
              <div className="apd-career-wrap fade-up" ref={fade}>
                {CAREER_PATHS.map((c, i) => (
                  <div className="apd-career-chip" key={i}>
                    <span className="apd-career-chip-dot" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — Key Features of Android App Development
      ═══════════════════════════════════════════════════════ */}
      <section className="apd-section apd-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Key Features of Android App Development</div>
            <h2 className="sec-title">
              What Makes Android Development<br />
              <span className="grad-text">Worth Learning?</span>
            </h2>
            <p className="sec-sub">
              From open-source freedom to globally in-demand languages — here's why
              Android development is one of the best tech skills you can pick up today.
            </p>
          </div>

          <div className="apd-features-cols">
            {KEY_FEATURES.map((f, i) => (
              <div className="apd-feature-card fade-up" key={i} ref={fade}
                style={{ transitionDelay: `${i * 65}ms` }}>
                <div className="apd-feature-head">
                  <span className="apd-feature-emoji">{f.emoji}</span>
                  <h4 className="apd-feature-title">{f.title}</h4>
                </div>
                <p className="apd-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — App Development Courses (AppCard grid)
      ═══════════════════════════════════════════════════════ */}
      <section className="apd-section apd-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// App Development Courses</div>
            <h2 className="sec-title">
              Choose Your <span className="grad-text">Course</span>
            </h2>
            <p className="sec-sub">
              Four specialised tracks covering frontend, backend, cross-platform Flutter,
              and full iOS & Android backend. Every course includes a 2-month internship.
            </p>
          </div>

          <div className="apd-courses-grid">
            {APP_COURSES.map((course, i) => (
              <div className="fade-up" key={course.id} ref={fade}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <AppCard
                  icon={course.icon}
                  title={course.title}
                  badge={course.badge}
                  overview={course.overview}
                  duration={course.duration}
                  fee={course.fee}
                  internship={course.internship}
                  whoCanJoin={course.whoCanJoin}
                  keyLearnings={course.keyLearnings}
                  whyChoose={course.whyChoose}
                  accent={course.accent}
                  onEnroll={() => handleEnroll(course.id)}
                />
              </div>
            ))}
          </div>

          {/* Not sure callout */}
          <div className="card fade-up" ref={fade}
            style={{ marginTop: 36, textAlign: "center", padding: 40 }}>
            <div className="card-top-bar" />
            <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>🤔</div>
            <h3 className="sec-title" style={{ fontSize: "1.3rem", marginBottom: 10 }}>
              Not sure which course to choose?
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.72,
              maxWidth: 460, margin: "0 auto 24px" }}>
              Our counsellors will help you pick the right track based on your
              background, goals, and learning style — completely free.
            </p>
            <div className="btn-group" style={{ justifyContent: "center" }}>
              <button className="btn-primary" onClick={() => go("/contact")}>
                Book Free Counselling
              </button>
              <a href="tel:8976509267" style={{ textDecoration: "none" }}>
                <button className="btn-secondary">
                  📞 +91 89765 09267
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="apd-cta-section">
        <div className="apd-cta-glow" />

        <div className="apd-cta-badge badge">
          <span className="badge-dot" />
          Kickstart Your Career as a Backend or Mobile Developer!
        </div>

        <h2 className="apd-cta-title">
          Build Apps That Reach<br />
          <span className="grad-text">Billions of Users.</span>
        </h2>

        <p className="apd-cta-sub">
          Enrol in NextGen Academy's App Development course today. 100% hands-on
          training, 2-month internship, and placement support — all included.
        </p>

        <div className="apd-cta-buttons">
          <button className="btn-primary"
            style={{ padding: "16px 40px", fontSize: "1rem" }}
            onClick={() => go("/admission")}>
            Apply for a Course
          </button>
          <button className="btn-secondary"
            style={{ padding: "16px 40px", fontSize: "1rem" }}
            onClick={() => go("/contact")}>
            Talk to a Counsellor →
          </button>
        </div>
      </section>
    </>
  );
}
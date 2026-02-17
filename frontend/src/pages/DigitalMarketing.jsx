import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import '../styles/DigitalMarketing.css'


// ════════════════════════════════════════════════════════════════
//  DATA — sourced from both pages
// ════════════════════════════════════════════════════════════════

// Sub-courses quick links (from digital-marketing-course-with-placement)
const SUB_COURSES = [
  { icon: "🔍", title: "Search Engine Optimization (SEO)",    route: "/seo",            accent: "cyan"  },
  { icon: "📲", title: "Social Media Marketing (SMM)",        route: "/social-media",   accent: "amber" },
  { icon: "📣", title: "Lead Generation",                     route: "/contact",        accent: "hot"   },
  { icon: "📈", title: "Google Ads",                          route: "/google-ads",     accent: "cyan"  },
  { icon: "🌐", title: "WordPress Website Creation",          route: "/wordpress",      accent: "amber" },
];

// Beginner → Pro levels (from from-beginner-to-pro page)
const LEVELS = [
  {
    id: "beginner",
    label: "Beginner",
    num: "Stage 01",
    accent: "cyan",
    dotVariant: "cyan",
    headline: "Building a Strong\nFoundation",
    intro:
      "If you're just starting out, it's important to learn the basics before diving into more advanced techniques. Entry-level courses offer a solid foundation in digital marketing concepts and strategies.",
    courses: [
      {
        name: "Introduction to Digital Marketing",
        desc: "Covers the fundamentals including SEO (Search Engine Optimization), social media marketing, email marketing, and PPC (Pay-Per-Click) advertising.",
      },
      {
        name: "Social Media Marketing 101",
        desc: "Learn the basics of managing social media platforms such as Facebook, Instagram, and LinkedIn for business, along with strategies to engage with target audiences.",
      },
      {
        name: "Content Marketing for Beginners",
        desc: "Understand how to create, distribute, and measure content that attracts and retains customers, driving conversions and brand awareness.",
      },
    ],
    nextgenNote:
      "At NextGen Academy, we provide beginner-level courses designed to teach these core concepts through real-world projects and hands-on experience.",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    num: "Stage 02",
    accent: "amber",
    dotVariant: "amber",
    headline: "Expanding Your\nSkills",
    intro:
      "Once you've mastered the basics, it's time to expand your knowledge and specialise in more advanced areas of digital marketing. These intermediate-level courses focus on skill refinement and in-depth learning.",
    courses: [
      {
        name: "SEO Mastery",
        desc: "Dive deeper into search engine optimisation, learning about keyword research, link-building strategies, technical SEO, and advanced on-page optimisation techniques.",
      },
      {
        name: "Google Analytics & Data-Driven Marketing",
        desc: "Develop the ability to analyse website traffic, understand customer behaviour, and make data-driven decisions to improve marketing efforts.",
      },
      {
        name: "Email Marketing & Automation",
        desc: "Learn how to build successful email campaigns, segment audiences, and use automation tools like Mailchimp or HubSpot to increase efficiency and engagement.",
      },
    ],
    nextgenNote:
      "At NextGen Academy, our intermediate courses include hands-on projects designed to ensure that students not only learn the theory but also apply the knowledge to real-world scenarios.",
  },
  {
    id: "advanced",
    label: "Advanced",
    num: "Stage 03",
    accent: "hot",
    dotVariant: "hot",
    headline: "Becoming a\nPro",
    intro:
      "For those who already have substantial experience in digital marketing, advanced courses focus on expert-level strategies and specialisation. Perfect for those looking to become digital marketing leaders or consultants.",
    courses: [
      {
        name: "Advanced Digital Strategy",
        desc: "Learn how to create comprehensive digital marketing strategies that align with business goals, combining SEO, PPC, content marketing, and social media for optimal results.",
      },
      {
        name: "Conversion Rate Optimisation (CRO)",
        desc: "This course focuses on optimising landing pages and websites to increase conversions through data analysis and user behaviour insights.",
      },
      {
        name: "Paid Media & Programmatic Advertising",
        desc: "Delve into the complexities of paid media strategies, including Facebook Ads, Google Ads, and programmatic ad buying.",
      },
    ],
    nextgenNote:
      "At NextGen Academy, our advanced courses are designed for professionals looking to scale their careers to leadership roles, offering expert mentorship and opportunities for project-based learning.",
  },
];

// 7-step guide to choosing the right course (from how-to-choose page)
const GUIDE_STEPS = [
  {
    num: "01",
    title: "Define Your Career Goals",
    points: [
      { label: "Starting Out", text: "Look for beginner courses that cover the basics: SEO, social media, content marketing, and email marketing." },
      { label: "Gaining Experience", text: "Choose courses offering deeper knowledge in areas like advanced SEO, Google Analytics, or email marketing strategies." },
      { label: "Becoming an Expert", text: "Find courses that focus on advanced strategies — comprehensive digital marketing plans, conversion optimisation, and managing complex ad campaigns." },
    ],
  },
  {
    num: "02",
    title: "Review the Course Content",
    points: [
      { label: "For Beginners", text: "The course should introduce fundamental concepts and tools — SEO, social media management, content creation, and email marketing." },
      { label: "For Intermediate Learners", text: "Look for courses that dive into advanced topics: in-depth SEO, data analysis with Google Analytics, and advanced email marketing tactics." },
      { label: "For Advanced Professionals", text: "Seek courses that teach high-level strategies and leadership skills including creating digital marketing strategies and optimising conversion rates." },
    ],
  },
  {
    num: "03",
    title: "Look for Practical Experience",
    points: [
      { label: "Hands-On Projects", text: "Choose courses that include real-world projects or assignments. This practical approach helps you apply your skills and gain experience." },
      { label: "Internships", text: "Some courses offer internships to provide valuable work experience and help build your professional network." },
    ],
  },
  {
    num: "04",
    title: "Consider Course Format",
    points: [
      { label: "Online Learning", text: "Ensure the course provides a user-friendly online learning platform with interactive elements, live sessions, and access to course materials anytime." },
      { label: "Course Duration", text: "Verify the length of the course and whether it fits with your schedule. Online courses should offer flexibility in terms of when and how you complete the coursework." },
    ],
  },
  {
    num: "05",
    title: "Research the Course Provider",
    points: [
      { label: "Qualified Instructors", text: "Look for courses taught by industry professionals with real-world experience in digital marketing." },
      { label: "Accreditation", text: "Choose courses from reputable institutions or those recognised by industry leaders to ensure high standards." },
    ],
  },
  {
    num: "06",
    title: "Read Reviews and Testimonials",
    points: [
      { label: "Student Reviews", text: "Check reviews to understand the course content, teaching quality, and practical experience provided." },
      { label: "Success Stories", text: "Look for testimonials or success stories from previous students to gauge the course's impact on their careers." },
    ],
  },
  {
    num: "07",
    title: "Evaluate Cost and Value",
    points: [
      { label: "Cost", text: "Compare the price with similar courses and ensure it fits within your budget while offering good value." },
      { label: "Value", text: "Assess what's included — access to additional resources, instructor support, and any certifications earned." },
    ],
  },
];

// Practical experience cards (from how-to-choose + beginner-to-pro)
const PRACTICAL_CARDS = [
  {
    icon: "🛠️",
    bar: "cyan",
    title: "Hands-On Projects",
    desc: "Choose courses that include real-world projects or assignments. This practical approach helps you apply your skills and gain experience that employers value.",
  },
  {
    icon: "🏢",
    bar: "amber",
    title: "Internship Programme",
    desc: "Some courses offer internships to provide valuable work experience. At NextGen Academy, every course includes a guaranteed internship to help build your professional network.",
  },
  {
    icon: "💻",
    bar: "hot",
    title: "Flexible Online Learning",
    desc: "NextGen Academy offers only online courses — with interactive elements, live sessions, and access to course materials anytime, so you can balance learning with other responsibilities.",
  },
  {
    icon: "📜",
    bar: "cyan",
    title: "Recognised Certifications",
    desc: "Certifications from Google, Meta, HubSpot and NextGen Academy are included with every course, helping you stand out to employers and freelance clients.",
  },
];

// Evaluate cost & provider cards
const EVAL_CARDS = [
  {
    icon: "💰",
    variant: "cyan",
    title: "Evaluate Cost & Value",
    points: [
      "Compare the price with similar courses and ensure it fits within your budget.",
      "Assess what's included — resources, instructor support, and certifications.",
      "Consider the return on investment: skills that lead to better-paying jobs.",
      "Look for EMI options or instalment plans if needed.",
    ],
  },
  {
    icon: "🏆",
    variant: "amber",
    title: "Choose a Reputable Provider",
    points: [
      "Look for courses taught by industry professionals with real-world experience.",
      "Choose institutions recognised by industry leaders for high standards.",
      "Check student reviews and success stories before enrolling.",
      "NextGen Academy: 4.9★ Google rating, 2500+ alumni, 50+ hiring partners.",
    ],
  },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════
export default function DigitalMarketingPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  const [activeLevel, setActiveLevel] = useState("beginner");
  const currentLevel = LEVELS.find((l) => l.id === activeLevel);

  return (
    <>

      {/* ════════════════════════════════════════════════════
          SECTION 1 — Intro + Sub-course quick links
      ════════════════════════════════════════════════════ */}
      <section className="dm-section dm-section--dark grid-bg">
        <div className="max-w">
          <div className="dm-intro-layout">

            {/* Left: intro copy */}
            <div className="dm-intro-body fade-up" ref={fade}>
              <div className="sec-label">// Digital Marketing Course in Mumbai & Thane</div>
              <h2 className="sec-title">
                Live Projects &amp;<br />
                <span className="grad-text">Internship Included</span>
              </h2>
              <p>
                As the digital landscape continues to evolve, mastering digital marketing
                is no longer optional for professionals — it's essential. Whether you're
                taking your first step into the field or looking to enhance your expertise,
                the right course can open doors to endless career opportunities.
              </p>
              <p>
                With 2025 around the corner, it's crucial to stay up to date with the
                latest trends and skills that employers and clients are actively seeking.
                At NextGen Academy, we are committed to helping you achieve your career
                goals with tailored courses, practical experience, and a strong support system.
              </p>
              <div className="btn-group">
                <button className="btn-primary" onClick={() => go("/admission")}>
                  Apply Now
                </button>
                <button className="btn-secondary" onClick={() => go("/contact")}>
                  Free Counselling →
                </button>
              </div>
            </div>

            {/* Right: sub-course cards */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Explore Our DM Modules</div>
              <div className="dm-subcourses-grid">
                {SUB_COURSES.map((c, i) => (
                  <div
                    key={i}
                    className={`dm-subcourse-card fade-up dm-subcourse-card--delay-${i}`}
                    ref={fade}
                    onClick={() => go(c.route)}
                  >
                    <div className={`dm-subcourse-icon-wrap dm-subcourse-icon-wrap--${c.accent}`}>
                      {c.icon}
                    </div>
                    <div className="dm-subcourse-title">{c.title}</div>
                    <div className={`dm-subcourse-arrow dm-subcourse-arrow--${c.accent}`}>
                      Learn More →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — From Beginner to Pro (tabbed levels)
      ════════════════════════════════════════════════════ */}
      <section className="dm-section dm-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// From Beginner to Pro — Essential Courses for 2025</div>
            <h2 className="sec-title">
              Find Courses for<br />
              <span className="grad-text">Every Stage of Your Career</span>
            </h2>
            <p className="sec-sub">
              Enrolling in the right course can be a game-changer. From beginner-friendly
              classes to advanced strategies, there's a digital marketing course for
              every professional.
            </p>
          </div>

          {/* Level tabs */}
          <div className="dm-level-tabs fade-up" ref={fade}>
            {LEVELS.map((l) => (
              <button
                key={l.id}
                className={`dm-level-tab${activeLevel === l.id ? ` dm-level-tab--active-${l.id}` : ""}`}
                onClick={() => setActiveLevel(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Active level panel */}
          <div className="dm-level-panel">
            {/* Left: headline + intro + nextgen note */}
            <div>
              <div className="dm-level-meta">
                <span className={`dm-level-badge dm-level-badge--${currentLevel.id}`}>
                  {currentLevel.label}
                </span>
                <span className="dm-level-num">{currentLevel.num} / 03</span>
              </div>
              <h3 className="dm-level-headline">
                {currentLevel.headline.split("\n").map((line, i) => (
                  <span key={i}>
                    {i === 0 ? line : <><br /><span className="grad-text">{line}</span></>}
                  </span>
                ))}
              </h3>
              <p className="dm-level-intro">{currentLevel.intro}</p>

              {/* NextGen note */}
              <div className="dm-guide-highlight dm-guide-highlight--spaced">
                <p>{currentLevel.nextgenNote}</p>
              </div>

              <div className="dm-level-cta-row">
                <button className="btn-primary" onClick={() => go("/admission")}>
                  Start This Level →
                </button>
                <button className="btn-secondary" onClick={() => go("/contact")}>
                  Ask a Counsellor
                </button>
              </div>
            </div>

            {/* Right: course items */}
            <div className="dm-course-items">
              {currentLevel.courses.map((course, i) => (
                <div
                  key={i}
                  className={`dm-course-item dm-course-item--${currentLevel.id}`}
                >
                  <div className="dm-course-item-head">
                    <span className={`dm-course-item-dot dm-course-item-dot--${currentLevel.dotVariant}`} />
                    <span className="dm-course-item-name">{course.name}</span>
                  </div>
                  <p className="dm-course-item-desc">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — Practical experience + course format
      ════════════════════════════════════════════════════ */}
      <section className="dm-section dm-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Practical Experience & Course Format</div>
            <h2 className="sec-title">
              Learning That Goes<br />
              <span className="grad-text">Beyond the Classroom</span>
            </h2>
            <p className="sec-sub">
              Practical experience helps solidify your learning. Here's what makes a
              great digital marketing course — and what NextGen Academy delivers.
            </p>
          </div>

          <div className="dm-practical-grid">
            {PRACTICAL_CARDS.map((c, i) => (
              <div
                key={i}
                className={`dm-practical-card dm-practical-card--delay-${i} fade-up`}
                ref={fade}
              >
                <div className={`dm-practical-bar dm-practical-bar--${c.bar}`} />
                <div className="dm-practical-icon">{c.icon}</div>
                <h4 className="dm-practical-title">{c.title}</h4>
                <p className="dm-practical-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — How to Choose the Right Course (7 steps)
      ════════════════════════════════════════════════════ */}
      <section className="dm-section dm-section--mid">
        <div className="max-w">
          <div className="dm-guide-layout">

            {/* Left: sticky heading */}
            <div className="dm-guide-sticky fade-up" ref={fade}>
              <div className="sec-label">// How to Choose</div>
              <h2 className="sec-title">
                Choosing the Right<br />
                <span className="grad-text">Digital Marketing Course</span>
              </h2>
              <p className="dm-guide-intro">
                Selecting the right digital marketing course is crucial for advancing
                your career. With many options available, it's important to find a course
                that matches your professional goals and learning needs.
              </p>
              <p className="dm-guide-intro">
                Here's a simple guide to help you choose the best digital marketing
                course for your career stage.
              </p>
              <div className="dm-guide-highlight">
                <p>
                  Choosing the right digital marketing course is key to advancing your
                  career. By considering these factors, you can find a program that
                  aligns with your goals and helps you achieve success.{" "}
                  <strong>NextGen Academy</strong> offers tailored programs for every stage —
                  beginner, intermediate, and advanced.
                </p>
              </div>
            </div>

            {/* Right: 7-step cards */}
            <div className="dm-steps-list">
              {GUIDE_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`dm-step-card dm-step-card--delay-${i} fade-up`}
                  ref={fade}
                >
                  <div className="dm-step-num-wrap">
                    <span className="dm-step-num">{step.num}</span>
                  </div>
                  <div className="dm-step-body">
                    <h4 className="dm-step-title">{step.title}</h4>
                    <ul className="dm-step-points">
                      {step.points.map((pt, j) => (
                        <li key={j}>
                          <strong>{pt.label}:</strong>&nbsp;{pt.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — Cost, Value & Provider
      ════════════════════════════════════════════════════ */}
      <section className="dm-section dm-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Cost, Value &amp; Provider</div>
            <h2 className="sec-title">
              What to Look for<br />
              <span className="grad-text">Before You Enrol</span>
            </h2>
            <p className="sec-sub">
              Not all courses are equal. Here's a checklist of what to evaluate before
              making a decision — and why NextGen Academy ticks every box.
            </p>
          </div>

          <div className="dm-eval-grid">
            {EVAL_CARDS.map((card, i) => (
              <div
                key={i}
                className={`dm-eval-card dm-eval-card--${card.variant} dm-eval-card--delay-${i} fade-up`}
                ref={fade}
              >
                <div className="dm-eval-head">
                  <div className={`dm-eval-icon dm-eval-icon--${card.variant}`}>{card.icon}</div>
                  <h4 className="dm-eval-title">{card.title}</h4>
                </div>
                <ul className={`dm-eval-points dm-eval-points--${card.variant}`}>
                  {card.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Reviews callout bar
      ════════════════════════════════════════════════════ */}
      <div className="dm-review-bar">
        <div className="dm-review-bar-inner">
          <div className="fade-up" ref={fade}>
            <div className="dm-review-stars">
              {["★", "★", "★", "★", "★"].map((s, i) => (
                <span key={i} className="dm-review-star">{s}</span>
              ))}
            </div>
            <h3 className="dm-review-headline">
              4.9 on Google · <span className="grad-text">Loved by 2500+ Students</span>
            </h3>
          </div>
          <div className="dm-review-actions fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/testimonials")}>
              Read All Testimonials
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Talk to a Past Student →
            </button>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          SECTION 7 — CTA
      ════════════════════════════════════════════════════ */}
      <section className="dm-cta-section">
        <div className="dm-cta-glow" />

        <div className="badge dm-cta-badge fade-up" ref={fade}>
          <span className="badge-dot" />
          Get Started Today — Batch Filling Fast
        </div>

        <h2 className="dm-cta-title fade-up" ref={fade}>
          Take Your Digital Marketing<br />
          Skills from <span className="grad-text">Beginner to Pro!</span>
        </h2>

        <p className="dm-cta-sub fade-up" ref={fade}>
          At NextGen Academy, we are committed to helping you achieve your career goals
          with tailored courses, practical experience, and a strong support system.
        </p>

        <div className="dm-cta-buttons fade-up" ref={fade}>
          <button
            className="btn-primary"
            onClick={() => go("/admission")}
          >
            Apply for a Course
          </button>
          <button
            className="btn-secondary"
            onClick={() => go("/contact")}
          >
            Book Free Counselling →
          </button>
          <a href="tel:8976509267" className="dm-tel-link">
            <button className="btn-secondary">
              📞 +91 89765 09267
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
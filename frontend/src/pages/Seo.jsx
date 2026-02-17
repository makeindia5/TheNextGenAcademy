import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import '../styles/Seo.css';
// ════════════════════════════════════════════════════════════════
//  DATA — all text from thenextgenacademy.co.in/search-engine-optimization-seo/
// ════════════════════════════════════════════════════════════════

const WHY_SEO = [
  {
    icon: "👁️",
    title: "Increased Visibility",
    text: "Most online experiences begin with a search engine. If your website ranks high for relevant keywords, more people will see and visit your site.",
  },
  {
    icon: "💰",
    title: "Cost-Effective Marketing",
    text: "Compared to paid advertising, SEO is a more sustainable long-term strategy. While it may take time to see results, the traffic generated through SEO is free.",
  },
  {
    icon: "🎯",
    title: "Improved User Experience",
    text: "SEO involves enhancing your website's usability, which leads to a better experience for your visitors. This can lower bounce rates and increase engagement.",
  },
  {
    icon: "🏆",
    title: "Credibility and Trust",
    text: "Higher search rankings can enhance your brand's credibility. Users tend to trust websites that appear on the first page of search results.",
  },
  {
    icon: "⚡",
    title: "Competitive Advantage",
    text: "Many businesses invest in SEO. By optimizing your site, you can gain an edge over competitors who may not prioritize SEO.",
  },
];

const HIGHLIGHTS = [
  {
    icon: "🖥️",
    accent: "cyan",
    title: "Interactive Learning",
    desc: "Engage in hands-on projects that reinforce SEO concepts with practical application. Learn by doing — not just watching.",
  },
  {
    icon: "🏢",
    accent: "amber",
    title: "Real-World Experience",
    desc: "Gain industry-ready skills through internships in Mumbai as part of the SEO courses. Work on live websites with actual traffic.",
  },
  {
    icon: "💼",
    accent: "hot",
    title: "Career Support",
    desc: "Benefit from 100% internship and job placement assistance post-course completion. Our placement team connects you with 50+ hiring partners.",
  },
  {
    icon: "📋",
    accent: "purple",
    title: "Job-Ready Curriculum",
    desc: "Learn from experienced instructors to prepare for a successful career in SEO. Curriculum updated regularly with industry trends.",
  },
];

const SYLLABUS = [
  {
    num: "01",
    title: "Keyword Research",
    desc: "Identifying the right keywords and phrases that your target audience uses in search queries to drive organic traffic.",
    topics: ["Short-tail keywords", "Long-tail keywords", "Search intent", "Keyword mapping", "Competitor analysis"],
  },
  {
    num: "02",
    title: "On-Page SEO",
    desc: "Optimization of individual web pages, focusing on elements like content quality, keywords, meta tags, headings, and URL structure.",
    topics: ["Title tags", "Meta descriptions", "Header tags", "URL structure", "Internal linking", "Image alt text"],
  },
  {
    num: "03",
    title: "Off-Page SEO",
    desc: "Activities performed outside your website to improve its ranking, such as backlinks, social media engagement, and influencer outreach.",
    topics: ["Link building", "Guest posting", "Social signals", "Brand mentions", "Influencer outreach", "Directory listings"],
  },
  {
    num: "04",
    title: "Technical SEO",
    desc: "Enhancing the website's backend to improve search engine crawling, indexing, and user experience — site speed, mobile-friendliness, and XML sitemaps.",
    topics: ["Site speed", "Mobile-friendliness", "XML sitemaps", "Robots.txt", "Core Web Vitals", "Schema markup"],
  },
  {
    num: "05",
    title: "Content Optimization",
    desc: "Creating high-quality, relevant, and keyword-optimized content that satisfies user intent and ranks well in search results.",
    topics: ["Content strategy", "Keyword density", "Semantic SEO", "Content clusters", "E-E-A-T", "Content refresh"],
  },
  {
    num: "06",
    title: "Analytics & Monitoring",
    desc: "Tracking performance through tools like Google Analytics, and making adjustments to improve SEO strategies over time.",
    topics: ["Google Analytics 4", "Search Console", "Rank tracking", "Backlink audits", "Traffic analysis", "Reporting"],
  },
];

const TOOLS = [
  { icon: "🔍", name: "Google Search Console" },
  { icon: "📊", name: "Google Analytics 4" },
  { icon: "🔑", name: "Google Keyword Planner" },
  { icon: "🛠️", name: "Ahrefs" },
  { icon: "📈", name: "SEMrush" },
  { icon: "🔎", name: "Moz Pro" },
  { icon: "🕷️", name: "Screaming Frog" },
  { icon: "📝", name: "Yoast SEO" },
  { icon: "🌊", name: "Surfer SEO" },
  { icon: "📌", name: "Ubersuggest" },
  { icon: "⚙️", name: "GTmetrix" },
  { icon: "🗺️", name: "Sitebulb" },
];

const CAREER_ROLES = [
  { name: "SEO Specialist",            pay: "₹3–6 LPA" },
  { name: "SEO Analyst",               pay: "₹2.5–5 LPA" },
  { name: "SEO Manager",               pay: "₹5–10 LPA" },
  { name: "Content SEO Strategist",    pay: "₹3–7 LPA" },
  { name: "Technical SEO Engineer",    pay: "₹4–9 LPA" },
  { name: "Digital Marketing Manager", pay: "₹5–12 LPA" },
  { name: "Freelance SEO Consultant",  pay: "₹30k–1L/mo" },
  { name: "Growth Hacker",             pay: "₹4–8 LPA" },
];

const WHO_SHOULD_JOIN = [
  { icon: "🎓", text: "Fresh graduates from any stream looking to enter the digital marketing industry." },
  { icon: "💼", text: "Working professionals wanting to upskill or transition into an SEO career." },
  { icon: "🏢", text: "Business owners who want to rank their own websites and reduce ad spend." },
  { icon: "✍️", text: "Content writers and bloggers who want to make their content search-engine friendly." },
  { icon: "📢", text: "Digital marketers who want to add SEO expertise to their existing skill set." },
  { icon: "🌐", text: "Web developers looking to understand how to build SEO-optimized websites." },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function SEOPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      {/* ════════════════════════════════════════════════════
          SECTION 1 — What is SEO + Stats
      ════════════════════════════════════════════════════ */}
      <section className="seo-section seo-section--dark grid-bg">
        <div className="max-w">
          <div className="seo-intro-layout">

            {/* Left: definition copy */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// What is SEO?</div>
              <h2 className="sec-title fade-up" ref={fade}>
                Drive Organic Traffic<br />
                <span className="grad-text">Without Paying for Ads</span>
              </h2>

              <p className="seo-intro-lead fade-up" ref={fade}>
                Top destination for enhancing your skills, gaining valuable knowledge,
                and discovering new career opportunities.
              </p>

              <p className="seo-intro-body fade-up" ref={fade}>
                <strong>Search Engine Optimization (SEO)</strong> is a set of strategies
                and techniques aimed at increasing the visibility of a website in search
                engine results. By optimizing your website, you can attract more organic
                traffic — visitors who find your site through search engines without
                paying for ads.
              </p>

              <p className="seo-intro-body fade-up" ref={fade}>
                SEO combines technical expertise, content strategy, and link-building
                to help websites rank higher on Google, Bing, and other search engines.
                It is one of the most in-demand and rewarding digital skills in 2025.
              </p>

              <div className="btn-group fade-up" ref={fade}>
                <button className="btn-primary" onClick={() => go("/admission")}>
                  Enroll Now
                </button>
                <button className="btn-secondary" onClick={() => go("/contact")}>
                  Free Counselling →
                </button>
              </div>
            </div>

            {/* Right: quick stats */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Course at a Glance</div>
              <div className="seo-stat-strip fade-up" ref={fade}>
                {[
                  { num: "2 Mo",  label: "Course Duration",   bar: "",       cls: "cyan"  },
                  { num: "₹12k",  label: "Course Fee",        bar: "amber",  cls: "amber" },
                  { num: "100%",  label: "Internship Rate",   bar: "hot",    cls: "hot"   },
                  { num: "6",     label: "Core Modules",      bar: "",       cls: "cyan"  },
                  { num: "12+",   label: "Tools Covered",     bar: "amber",  cls: "amber" },
                  { num: "50+",   label: "Hiring Partners",   bar: "hot",    cls: "hot"   },
                ].map((s, i) => (
                  <div
                    className={`seo-stat-box seo-delay-${i} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <div className={`seo-stat-box-bar${s.bar ? ` seo-stat-box-bar--${s.bar}` : ""}`} />
                    <div className={`seo-stat-num seo-stat-num--${s.cls}`}>{s.num}</div>
                    <div className="seo-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — Why is SEO Important?
      ════════════════════════════════════════════════════ */}
      <section className="seo-section seo-section--mid">
        <div className="max-w">
          <div className="seo-why-layout">

            {/* Left: sticky heading */}
            <div className="seo-why-sticky">
              <div className="sec-label fade-up" ref={fade}>// Why is SEO Important?</div>
              <h2 className="sec-title fade-up" ref={fade}>
                5 Reasons SEO is<br />
                <span className="grad-text">Non-Negotiable</span>
              </h2>
              <p className="seo-why-desc fade-up" ref={fade}>
                SEO is one of the most powerful and cost-effective digital marketing
                channels available. Businesses of every size — from startups in Thane
                to enterprises in Mumbai — rely on SEO to grow their online presence
                and reach their target audience.
              </p>
              <div className="btn-group fade-up" ref={fade}>
                <button className="btn-primary" onClick={() => go("/contact")}>
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* Right: why cards */}
            <div className="seo-why-list">
              {WHY_SEO.map((item, i) => (
                <div
                  className={`seo-why-card seo-delay-${i} fade-up`}
                  key={i}
                  ref={fade}
                >
                  <div className="seo-why-icon">{item.icon}</div>
                  <div className="seo-why-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — Course Highlights
      ════════════════════════════════════════════════════ */}
      <section className="seo-section seo-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Course Highlights</div>
            <h2 className="sec-title">
              What Makes Our SEO Course<br />
              <span className="grad-text">Stand Out?</span>
            </h2>
            <p className="sec-sub">
              Our SEO course is built around real results — not just theory. Every element
              is designed to make you job-ready from day one.
            </p>
          </div>

          <div className="seo-highlights-grid">
            {HIGHLIGHTS.map((h, i) => (
              <div
                className={`seo-highlight-card seo-highlight-card--${h.accent} seo-delay-${i} fade-up`}
                key={i}
                ref={fade}
              >
                <div className={`seo-highlight-top-bar seo-highlight-top-bar--${h.accent}`} />
                <div className="seo-highlight-icon">{h.icon}</div>
                <h3 className={`seo-highlight-title seo-highlight-title--${h.accent}`}>
                  {h.title}
                </h3>
                <p className="seo-highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — Syllabus
      ════════════════════════════════════════════════════ */}
      <section className="seo-section seo-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Syllabus of SEO in Thane &amp; Mumbai</div>
            <h2 className="sec-title">
              6-Module Curriculum Built for<br />
              <span className="grad-text">Real Rankings</span>
            </h2>
          </div>

          <p className="seo-syllabus-intro fade-up" ref={fade}>
            Our SEO syllabus covers every pillar of search engine optimization — from
            finding the right keywords to tracking your rankings over time. Each module
            combines theory with live practical tasks on real websites.
          </p>

          <div className="seo-syllabus-grid">
            {SYLLABUS.map((mod, i) => (
              <div
                className={`seo-module-card seo-delay-${i % 6} fade-up`}
                key={i}
                ref={fade}
              >
                <div className="seo-module-num-wrap">
                  <span className="seo-module-num">{mod.num}</span>
                </div>
                <div className="seo-module-body">
                  <h3 className="seo-module-title">{mod.title}</h3>
                  <p className="seo-module-desc">{mod.desc}</p>
                  <div className="seo-module-topics">
                    {mod.topics.map((topic, j) => (
                      <span className="seo-topic-chip" key={j}>{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — Tools
      ════════════════════════════════════════════════════ */}
      <section className="seo-section seo-section--dark grid-bg">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Tools You Will Master</div>
            <h2 className="sec-title">
              Industry-Standard SEO<br />
              <span className="grad-text">Tools &amp; Platforms</span>
            </h2>
            <p className="sec-sub">
              You will get hands-on training with the exact same tools used by SEO
              professionals at agencies and in-house teams across Mumbai and beyond.
            </p>
          </div>

          <div className="seo-tools-wrap fade-up" ref={fade}>
            {TOOLS.map((tool, i) => (
              <div className="seo-tool-pill" key={i}>
                <span className="seo-tool-icon">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Career Outcomes + Who Should Join
      ════════════════════════════════════════════════════ */}
      <section className="seo-section seo-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Career &amp; Eligibility</div>
            <h2 className="sec-title">
              Where This Course<br />
              <span className="grad-text">Can Take You</span>
            </h2>
          </div>

          <div className="seo-careers-layout">

            {/* Left: career roles */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Career Roles After This Course</div>
              <p className="seo-career-intro fade-up" ref={fade}>
                SEO is one of the most in-demand skills in digital marketing. Completing
                this course opens the door to a wide range of job roles — from specialist
                positions to leadership and freelance consulting opportunities.
              </p>
              <div className="seo-career-roles">
                {CAREER_ROLES.map((role, i) => (
                  <div
                    className={`seo-career-role seo-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="seo-career-dot" />
                    <span className="seo-career-role-name">{role.name}</span>
                    <span className="seo-career-role-pay">{role.pay}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: who should join */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Who Should Join?</div>
              <p className="seo-career-intro fade-up" ref={fade}>
                No prior technical experience is needed. If you can use a browser,
                you can learn SEO. Our course is designed for complete beginners
                and professionals alike.
              </p>
              <ul className="seo-who-list">
                {WHO_SHOULD_JOIN.map((item, i) => (
                  <li
                    className={`seo-who-item seo-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="seo-who-item-icon">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 7 — Get Started CTA
      ════════════════════════════════════════════════════ */}
      <section className="seo-cta-section">
        <div className="seo-cta-glow" />
        <div className="seo-cta-content">
          <div className="badge seo-cta-badge fade-up" ref={fade}>
            <span className="badge-dot" />
            Get Started — Contact Now
          </div>

          <h2 className="seo-cta-title fade-up" ref={fade}>
            Start Your SEO Career<br />
            <span className="grad-text">in Mumbai &amp; Thane.</span>
          </h2>

          <p className="seo-cta-sub fade-up" ref={fade}>
            Join NextGen Academy's SEO course — hands-on training, 100% internship
            guarantee, and placement support included. Limited seats per batch.
          </p>

          <div className="seo-cta-buttons fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/admission")}>
              Enroll Now
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Contact Us →
            </button>
            <a href="tel:8976509267" className="seo-tel-link">
              <button className="btn-secondary">
                📞 +91 89765 09267
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
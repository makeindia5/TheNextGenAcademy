import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import "../styles/Googleads.css";

// ════════════════════════════════════════════════════════════════
//  DATA — sourced from thenextgenacademy.co.in/best-google-ads-course-with-placement-in-india/
// ════════════════════════════════════════════════════════════════

// What You'll Learn — 5 modules from the site
const LEARN_MODULES = [
  {
    num: "01",
    icon: "🔰",
    title: "Introduction to Google Ads",
    desc: "Learn how Google Ads works, including campaign types, ad formats, and account setup. Understand the Google Ads ecosystem from the ground up.",
    chips: ["Campaign types", "Ad formats", "Account setup", "Google Ads dashboard", "Quality Score"],
    chipVariant: "default",
  },
  {
    num: "02",
    icon: "🔑",
    title: "Keyword Research & Strategy",
    desc: "Master the art of keyword selection and competitive analysis to target the right audience and maximize your ad spend.",
    chips: ["Match types", "Keyword planner", "Negative keywords", "Competitor analysis", "Search intent"],
    chipVariant: "amber",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Campaign Creation & Management",
    desc: "Learn how to create, optimize, and manage Search, Display, and Video ad campaigns across Google's platform.",
    chips: ["Search campaigns", "Display campaigns", "Video ads", "Shopping ads", "Performance Max"],
    chipVariant: "hot",
  },
  {
    num: "04",
    icon: "💰",
    title: "Bidding & Budgeting",
    desc: "Understand Google Ads bidding strategies, budgeting tactics, and how to optimize them for the best ROI.",
    chips: ["Smart bidding", "Target CPA", "Target ROAS", "Manual CPC", "Budget pacing"],
    chipVariant: "default",
  },
  {
    num: "05",
    icon: "📊",
    title: "Analytics & Performance Tracking",
    desc: "Use tools like Google Analytics and Google Ads Manager to track performance and make data-driven decisions.",
    chips: ["Google Analytics 4", "Conversion tracking", "Tag Manager", "Attribution models", "A/B testing"],
    chipVariant: "amber",
  },
];

// Why choose this course — extra value adds
const WHY_FEATURES = [
  {
    icon: "🎓",
    title: "Expert-Led Training",
    text: "Learn from certified Google Ads professionals with years of real campaign management experience across industries.",
  },
  {
    icon: "🛠️",
    title: "Hands-On Experience",
    text: "Work on live Google Ads accounts with real budgets. Manage actual campaigns — not just simulations — during your training.",
  },
  {
    icon: "📜",
    title: "Google Ads Certification",
    text: "Prepare for and earn the official Google Ads certification. A credential recognized by employers across India and globally.",
  },
  {
    icon: "💼",
    title: "100% Placement Support",
    text: "Our dedicated placement team connects you with 50+ hiring partners. From resume building to mock interviews — we've got you covered.",
  },
  {
    icon: "📍",
    title: "Online & Accessible",
    text: "Course is available fully online — accessible to students in Mumbai, Thane, and all nearby areas. Learn at your own pace.",
  },
  {
    icon: "🔄",
    title: "Continuously Updated Content",
    text: "Google Ads evolves fast. Our curriculum is updated regularly to include the latest features like Performance Max and AI-driven bidding.",
  },
];

// Campaign types section
const CAMPAIGN_TYPES = [
  {
    icon: "🔍",
    accent: "cyan",
    title: "Search Campaigns",
    desc: "Appear at the top of Google search results when users are actively searching for your products or services. The highest-intent ad format available.",
    formats: ["Text ads", "Responsive search ads", "Call ads", "Dynamic search ads"],
  },
  {
    icon: "🖥️",
    accent: "amber",
    title: "Display Campaigns",
    desc: "Reach audiences across 2 million+ websites in the Google Display Network with visually engaging banner ads and remarketing campaigns.",
    formats: ["Banner ads", "Responsive display ads", "Gmail ads", "Remarketing"],
  },
  {
    icon: "▶️",
    accent: "hot",
    title: "Video & Shopping Ads",
    desc: "Drive brand awareness with YouTube video ads or showcase your products with Shopping campaigns that display directly in Google search results.",
    formats: ["Skippable in-stream", "Bumper ads", "Shopping ads", "Performance Max"],
  },
];

// Tools covered
const TOOLS = [
  { icon: "📈", name: "Google Ads Manager" },
  { icon: "📊", name: "Google Analytics 4" },
  { icon: "🔑", name: "Google Keyword Planner" },
  { icon: "🏷️", name: "Google Tag Manager" },
  { icon: "🛒", name: "Google Merchant Center" },
  { icon: "📋", name: "Google Data Studio" },
  { icon: "🔍", name: "Google Search Console" },
  { icon: "🧪", name: "Google Optimize" },
  { icon: "📣", name: "YouTube Studio" },
  { icon: "🔎", name: "SEMrush" },
  { icon: "🌊", name: "SpyFu" },
  { icon: "📌", name: "Ahrefs" },
];

// Career outcomes with salary ranges
const CAREER_ROLES = [
  { name: "Google Ads Specialist",      pay: "₹3–6 LPA" },
  { name: "PPC Manager",                pay: "₹4–8 LPA" },
  { name: "Paid Search Analyst",        pay: "₹3–6 LPA" },
  { name: "Performance Marketer",       pay: "₹4–9 LPA" },
  { name: "Media Buyer",                pay: "₹3.5–7 LPA" },
  { name: "Digital Marketing Manager",  pay: "₹5–12 LPA" },
  { name: "E-commerce Ads Manager",     pay: "₹4–8 LPA" },
  { name: "Freelance Google Ads Expert", pay: "₹40k–1.5L/mo" },
];

// Who should join
const WHO_SHOULD_JOIN = [
  { icon: "🎓", text: "Fresh graduates from any stream looking to start a career in digital marketing or paid advertising." },
  { icon: "💼", text: "Marketing professionals who want to add Google Ads expertise and increase their earning potential." },
  { icon: "🏢", text: "Business owners who want to run their own paid campaigns and stop relying on expensive agencies." },
  { icon: "📲", text: "Social media marketers who want to expand into paid search and diversify their skill set." },
  { icon: "🛒", text: "E-commerce entrepreneurs who want to drive targeted sales through Google Shopping and Search campaigns." },
  { icon: "🌐", text: "Freelancers who want to offer high-value Google Ads management services to clients." },
];

// Certifications offered
const CERTIFICATIONS = [
  { icon: "🏆", name: "Google Ads Search Certification" },
  { icon: "📺", name: "Google Ads Display Certification" },
  { icon: "▶️", name: "Google Ads Video Certification" },
  { icon: "🛒", name: "Google Ads Shopping Certification" },
  { icon: "📜", name: "NextGen Academy Certificate" },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function GoogleAdsPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      

      {/* ════════════════════════════════════════════════════
          SECTION 1 — Intro + Stats
      ════════════════════════════════════════════════════ */}
      <section className="ga-section ga-section--dark grid-bg">
        <div className="max-w">
          <div className="ga-intro-layout">

            {/* Left: copy */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Become a Certified Google Ads Expert</div>
              <h2 className="sec-title fade-up" ref={fade}>
                Master Pay-Per-Click &amp;<br />
                <span className="grad-text">Drive Real Results</span>
              </h2>

              <div className="ga-intro-location fade-up" ref={fade}>
                <span className="ga-intro-location-dot" />
                Location: Online — accessible to students in Mumbai, Thane, and nearby areas
              </div>

              <p className="ga-intro-body fade-up" ref={fade}>
                Looking to drive targeted traffic, increase conversions, and master paid
                search? Our <strong>Google Ads course</strong> is designed to teach you the
                ins and outs of creating successful <strong>pay-per-click (PPC)</strong> campaigns.
              </p>
              <p className="ga-intro-body fade-up" ref={fade}>
                With expert-led training and hands-on experience, you'll be equipped to
                manage and optimize Google Ads campaigns like a pro — from account setup
                to advanced bidding strategies and analytics.
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

            {/* Right: stat strip */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Course at a Glance</div>
              <div className="ga-stat-strip">
                {[
                  { num: "6 Wk",  label: "Course Duration",  bar: "cyan",  cls: "cyan"  },
                  { num: "₹10k",  label: "Course Fee",        bar: "amber", cls: "amber" },
                  { num: "100%",  label: "Internship Rate",   bar: "hot",   cls: "hot"   },
                  { num: "5",     label: "Core Modules",      bar: "cyan",  cls: "cyan"  },
                  { num: "12+",   label: "Tools Covered",     bar: "amber", cls: "amber" },
                  { num: "5",     label: "Certifications",    bar: "hot",   cls: "hot"   },
                ].map((s, i) => (
                  <div
                    className={`ga-stat-box ga-delay-${i} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <div className={`ga-stat-box-bar ga-stat-box-bar--${s.bar}`} />
                    <div className={`ga-stat-num ga-stat-num--${s.cls}`}>{s.num}</div>
                    <div className="ga-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — What You'll Learn
      ════════════════════════════════════════════════════ */}
      <section className="ga-section ga-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// What You'll Learn</div>
            <h2 className="sec-title">
              5 Modules That Take You from<br />
              <span className="grad-text">Zero to Campaign Pro</span>
            </h2>
            <p className="sec-sub">
              Every module is packed with real theory, live demonstrations, and
              hands-on tasks so you understand Google Ads inside and out.
            </p>
          </div>

          <div className="ga-learn-grid">
            {LEARN_MODULES.map((mod, i) => (
              <div
                className={`ga-learn-card ga-delay-${i % 5} fade-up`}
                key={i}
                ref={fade}
              >
                <div className="ga-learn-num-wrap">
                  <span className="ga-learn-num">{mod.num}</span>
                </div>
                <div className="ga-learn-body">
                  <h3 className="ga-learn-title">{mod.title}</h3>
                  <p className="ga-learn-desc">{mod.desc}</p>
                  <div className="ga-learn-chips">
                    {mod.chips.map((chip, j) => (
                      <span
                        className={`ga-chip${mod.chipVariant !== "default" ? ` ga-chip--${mod.chipVariant}` : ""}`}
                        key={j}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — Campaign Types
      ════════════════════════════════════════════════════ */}
      <section className="ga-section ga-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Campaign Types You'll Master</div>
            <h2 className="sec-title">
              Search, Display &amp; Video —<br />
              <span className="grad-text">All Three Covered</span>
            </h2>
            <p className="sec-sub">
              Our course covers every major Google Ads campaign type so you can
              run full-funnel paid strategies for any business.
            </p>
          </div>

          <div className="ga-campaign-grid">
            {CAMPAIGN_TYPES.map((c, i) => (
              <div
                className={`ga-campaign-card ga-campaign-card--${c.accent} ga-delay-${i} fade-up`}
                key={i}
                ref={fade}
              >
                <div className={`ga-campaign-bar ga-campaign-bar--${c.accent}`} />
                <div className="ga-campaign-icon">{c.icon}</div>
                <h3 className={`ga-campaign-title ga-campaign-title--${c.accent}`}>{c.title}</h3>
                <p className="ga-campaign-desc">{c.desc}</p>
                <div className="ga-campaign-formats">
                  {c.formats.map((f, j) => (
                    <span className={`ga-chip ga-chip--${c.accent === "cyan" ? "default" : c.accent}`} key={j}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — Why Choose This Course
      ════════════════════════════════════════════════════ */}
      <section className="ga-section ga-section--mid">
        <div className="max-w">
          <div className="ga-features-layout">

            {/* Left: sticky heading */}
            <div className="ga-features-sticky">
              <div className="sec-label fade-up" ref={fade}>// Why Choose This Course</div>
              <h2 className="sec-title fade-up" ref={fade}>
                More Than Just<br />
                <span className="grad-text">Theory — Real Results</span>
              </h2>
              <p className="ga-features-desc fade-up" ref={fade}>
                Our Google Ads course is built around outcome-driven learning. You'll
                leave with a Google certification, a real campaign in your portfolio,
                and a job offer in hand — or we'll keep supporting you until you do.
              </p>
              <div className="ga-features-callout fade-up" ref={fade}>
                <p>
                  <strong>NextGen Academy</strong> has placed 2500+ students across
                  digital marketing roles. Our Google Ads graduates work at agencies,
                  e-commerce brands, startups, and as independent consultants across
                  Mumbai, Thane, and across India.
                </p>
              </div>
              <div className="btn-group fade-up" ref={fade}>
                <button className="btn-primary" onClick={() => go("/admission")}>
                  Apply for This Course
                </button>
              </div>
            </div>

            {/* Right: feature items */}
            <div className="ga-features-list">
              {WHY_FEATURES.map((f, i) => (
                <div
                  className={`ga-feature-item ga-delay-${i % 6} fade-up`}
                  key={i}
                  ref={fade}
                >
                  <div className="ga-feature-icon">{f.icon}</div>
                  <div className="ga-feature-content">
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — Tools
      ════════════════════════════════════════════════════ */}
      <section className="ga-section ga-section--dark grid-bg">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Tools You Will Master</div>
            <h2 className="sec-title">
              Industry-Standard Google<br />
              <span className="grad-text">Ads Tools &amp; Platforms</span>
            </h2>
            <p className="sec-sub">
              You will get hands-on training with the exact tools used by PPC managers
              and performance marketers at top agencies and in-house teams across India.
            </p>
          </div>

          <div className="ga-tools-wrap fade-up" ref={fade}>
            {TOOLS.map((tool, i) => (
              <div className="ga-tool-pill" key={i}>
                <span className="ga-tool-icon">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Career Outcomes + Who Should Join
      ════════════════════════════════════════════════════ */}
      <section className="ga-section ga-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Career &amp; Eligibility</div>
            <h2 className="sec-title">
              Where This Course<br />
              <span className="grad-text">Can Take You</span>
            </h2>
          </div>

          <div className="ga-outcomes-layout">

            {/* Left: career roles */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Career Roles After This Course</div>
              <p className="ga-outcomes-intro fade-up" ref={fade}>
                Google Ads is one of the highest-paying digital marketing skills in
                India. Completing this course with a Google certification opens the
                door to specialist, managerial, and freelance roles with strong salary
                potential.
              </p>
              <div className="ga-career-roles">
                {CAREER_ROLES.map((role, i) => (
                  <div
                    className={`ga-career-role ga-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="ga-career-dot" />
                    <span className="ga-career-name">{role.name}</span>
                    <span className="ga-career-pay">{role.pay}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: who should join */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Who Should Join?</div>
              <p className="ga-outcomes-intro fade-up" ref={fade}>
                No prior advertising experience is required. If you understand
                the basics of using a computer, you can learn Google Ads.
                Our course is designed to take complete beginners to job-ready
                professionals.
              </p>
              <ul className="ga-who-list">
                {WHO_SHOULD_JOIN.map((item, i) => (
                  <li
                    className={`ga-who-item ga-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="ga-who-icon">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 7 — Certification strip
      ════════════════════════════════════════════════════ */}
      <div className="ga-cert-strip">
        <div className="ga-cert-inner">
          <div className="ga-cert-left fade-up" ref={fade}>
            <h3 className="ga-cert-headline">
              Earn <span className="grad-text">Google-Recognised</span> Certifications
            </h3>
            <p className="ga-cert-sub">
              On completing this course, you'll be prepared to earn official Google Ads
              certifications — globally recognised credentials that employers look for
              when hiring PPC professionals.
            </p>
          </div>
          <div className="ga-cert-badges fade-up" ref={fade}>
            {CERTIFICATIONS.map((cert, i) => (
              <div className="ga-cert-badge" key={i}>
                <span className="ga-cert-badge-icon">{cert.icon}</span>
                {cert.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          SECTION 8 — CTA
      ════════════════════════════════════════════════════ */}
      <section className="ga-cta-section">
        <div className="ga-cta-glow" />
        <div className="ga-cta-content">
          <div className="badge ga-cta-badge fade-up" ref={fade}>
            <span className="badge-dot" />
            Certification + Placement — Get Started Today
          </div>

          <h2 className="ga-cta-title fade-up" ref={fade}>
            Become a Google Ads Expert<br />
            <span className="grad-text">in Thane &amp; Mumbai.</span>
          </h2>

          <p className="ga-cta-sub fade-up" ref={fade}>
            Join NextGen Academy's Google Ads course — expert-led training, official
            Google certification, 100% internship, and placement support included.
            Limited seats per batch.
          </p>

          <div className="ga-cta-buttons fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/admission")}>
              Enroll Now
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Contact Us →
            </button>
            <a href="tel:8976509267" className="ga-tel-link">
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
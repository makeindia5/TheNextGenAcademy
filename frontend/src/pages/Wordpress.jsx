import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import "./Wordpress.css";

// ════════════════════════════════════════════════════════════════
//  DATA — sourced from thenextgenacademy.co.in/wordpress-website-creation/
// ════════════════════════════════════════════════════════════════

// What You'll Learn — 6 modules (from the site's section titles)
const LEARN_MODULES = [
  {
    num: "01",
    icon: "📦",
    title: "WordPress Installation",
    desc: "Learn how to install WordPress on different hosting platforms, set up your domain, and configure basic settings for a fully functional website.",
    chips: ["Hosting setup", "Domain config", "cPanel basics", "One-click install", "Database setup"],
  },
  {
    num: "02",
    icon: "🎨",
    title: "Theme Customization",
    desc: "Master theme selection, customization, and modification. Use the WordPress Customizer, page builders, and custom CSS to design professional-looking websites.",
    chips: ["Theme selection", "Customizer", "Page builders", "Custom CSS", "Responsive design"],
  },
  {
    num: "03",
    icon: "🔌",
    title: "Essential Plugins",
    desc: "Discover and configure essential WordPress plugins for SEO, security, performance, contact forms, analytics, and more to enhance your website's functionality.",
    chips: ["Yoast SEO", "Contact Form 7", "WP Rocket", "Wordfence", "Google Analytics"],
  },
  {
    num: "04",
    icon: "📝",
    title: "Content Management",
    desc: "Learn to create, edit, and manage posts and pages. Understand the WordPress editor (Gutenberg), media library, and content organization with categories and tags.",
    chips: ["Gutenberg editor", "Media library", "Categories & tags", "Custom post types", "Permalinks"],
  },
  {
    num: "05",
    icon: "🛒",
    title: "E-commerce with WooCommerce",
    desc: "Set up an online store using WooCommerce. Learn product management, payment gateways, shipping options, and how to manage orders and customers.",
    chips: ["WooCommerce setup", "Product management", "Payment gateways", "Shipping config", "Order management"],
  },
  {
    num: "06",
    icon: "🔒",
    title: "Website Security & Maintenance",
    desc: "Secure your WordPress site with best practices — backups, updates, malware scanning, and performance optimization to keep your website running smoothly.",
    chips: ["Security plugins", "Regular backups", "Core updates", "Malware scanning", "Performance tips"],
  },
];

// Key Features (from the site's 5 feature image titles)
const KEY_FEATURES = [
  {
    icon: "📚",
    accent: "cyan",
    title: "Step-by-Step Learning",
    desc: "Follow a structured, beginner-friendly curriculum that breaks down complex concepts into easy-to-understand lessons — no prior coding knowledge required.",
  },
  {
    icon: "🏆",
    accent: "amber",
    title: "Real-World Projects",
    desc: "Work on actual website projects throughout the course. Build a portfolio-ready site that showcases your WordPress skills to potential employers or clients.",
  },
  {
    icon: "🛠️",
    accent: "hot",
    title: "Hands-On Training",
    desc: "Learn by doing — not just watching. Every lesson includes practical exercises and live demonstrations so you master WordPress through real application.",
  },
  {
    icon: "🕐",
    accent: "purple",
    title: "Flexible Online Classes",
    desc: "Access the course completely online with flexible learning schedules. Study at your own pace — perfect for working professionals and students alike.",
  },
  {
    icon: "🎓",
    accent: "cyan",
    title: "Certification",
    desc: "Receive a NextGen Academy WordPress Certification on completion. A credential that demonstrates your website-building proficiency to employers and clients.",
  },
];

// Why WordPress (benefits)
const WHY_WORDPRESS = [
  {
    icon: "🌍",
    title: "Powers 43% of the Web",
    text: "WordPress is the world's most popular website platform — used by everyone from personal bloggers to Fortune 500 companies. Learning WordPress opens massive opportunities.",
  },
  {
    icon: "🚀",
    title: "No Coding Required",
    text: "Build professional websites without writing a single line of code. WordPress's intuitive interface and visual builders make website creation accessible to everyone.",
  },
  {
    icon: "💼",
    title: "High-Demand Skill",
    text: "WordPress developers and designers are in constant demand. Freelancers charge ₹15k–50k per website, and agencies pay ₹3–7 LPA for skilled WordPress professionals.",
  },
  {
    icon: "🔧",
    title: "Fully Customizable",
    text: "Thousands of themes and plugins let you build any type of website — from blogs and portfolios to e-commerce stores and membership sites — all on one platform.",
  },
  {
    icon: "📈",
    title: "Built-In SEO Advantages",
    text: "WordPress is designed with SEO best practices built in. With the right plugins and settings, your site will rank better on Google right from the start.",
  },
];

// Tools & Plugins covered
const TOOLS = [
  { icon: "🌐", name: "WordPress.org" },
  { icon: "🎨", name: "Elementor" },
  { icon: "🔍", name: "Yoast SEO" },
  { icon: "🛒", name: "WooCommerce" },
  { icon: "📧", name: "Contact Form 7" },
  { icon: "🚀", name: "WP Rocket" },
  { icon: "🔒", name: "Wordfence Security" },
  { icon: "📊", name: "Google Analytics" },
  { icon: "🖼️", name: "Smush Image Optimizer" },
  { icon: "📤", name: "UpdraftPlus Backup" },
  { icon: "🎬", name: "Slider Revolution" },
  { icon: "📐", name: "Beaver Builder" },
];

// Career roles
const CAREER_ROLES = [
  { name: "WordPress Developer",        pay: "₹3–6 LPA" },
  { name: "WordPress Designer",         pay: "₹2.5–5 LPA" },
  { name: "Freelance Website Builder",  pay: "₹15k–50k/site" },
  { name: "Web Content Manager",        pay: "₹3–5 LPA" },
  { name: "WooCommerce Specialist",     pay: "₹3.5–7 LPA" },
  { name: "Digital Marketing Executive",pay: "₹3–6 LPA" },
  { name: "Website Maintenance Tech",   pay: "₹2–4 LPA" },
  { name: "Full-Stack WordPress Dev",   pay: "₹5–10 LPA" },
];

// Who should join
const WHO_SHOULD_JOIN = [
  { icon: "🎓", text: "Fresh graduates or students who want to learn a high-demand, freelance-friendly skill with no coding required." },
  { icon: "💼", text: "Working professionals who want to offer website-building services on the side or transition into web development." },
  { icon: "🏢", text: "Business owners who want to build and manage their own websites without relying on expensive agencies or developers." },
  { icon: "🛒", text: "E-commerce entrepreneurs who want to launch an online store using WooCommerce and manage it independently." },
  { icon: "✍️", text: "Content creators and bloggers who want full control over their website's design, SEO, and monetization strategies." },
  { icon: "🌐", text: "Freelancers looking to add WordPress website creation to their service portfolio and increase their earning potential." },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function WordpressPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      {/* ── PageHero — untouched ─────────────────────────── */}
      <PageHero
        label="WordPress — Website Creation"
        title={
          <>
            Build &amp; Customize Websites<br />
            <span className="grad-text">with WordPress</span>
          </>
        }
        sub="Learn to build and customize websites with WordPress — step-by-step WordPress training for beginners. No coding required."
      />

      {/* ════════════════════════════════════════════════════
          SECTION 1 — Intro + Stats
      ════════════════════════════════════════════════════ */}
      <section className="wp-section wp-section--dark grid-bg">
        <div className="max-w">
          <div className="wp-intro-layout">

            {/* Left: copy */}
            <div>
              <div className="sec-label fade-up" ref={fade}>
                // WordPress Website Creation Course
              </div>
              <h2 className="sec-title fade-up" ref={fade}>
                Create Professional Websites<br />
                <span className="grad-text">Without Writing Code</span>
              </h2>

              <div className="wp-intro-tagline fade-up" ref={fade}>
                <span className="wp-intro-tagline-icon">🌐</span>
                WordPress Powers 43% of All Websites on the Internet
              </div>

              <p className="wp-intro-body fade-up" ref={fade}>
                Ready to master the world's most popular website-building platform?
                Our <strong>WordPress course</strong> teaches you everything you need
                to create professional websites — from installation and theme
                customization to e-commerce and security.
              </p>

              <p className="wp-intro-body fade-up" ref={fade}>
                Whether you're a complete beginner or someone with basic tech skills,
                this course equips you with practical, job-ready WordPress expertise
                that you can monetize immediately — through freelance work, a web
                development career, or managing your own business website.
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
              <div className="sec-label fade-up" ref={fade}>
                // Course at a Glance
              </div>
              <div className="wp-stat-strip">
                {[
                  { num: "1 Mo",  label: "Course Duration", bar: "cyan",  cls: "cyan"  },
                  { num: "₹7k",   label: "Course Fee",      bar: "amber", cls: "amber" },
                  { num: "100%",  label: "Internship Rate", bar: "hot",   cls: "hot"   },
                  { num: "6",     label: "Core Modules",    bar: "cyan",  cls: "cyan"  },
                  { num: "12+",   label: "Tools Covered",   bar: "amber", cls: "amber" },
                  { num: "50+",   label: "Hiring Partners", bar: "hot",   cls: "hot"   },
                ].map((s, i) => (
                  <div
                    className={`wp-stat-box wp-delay-${i} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <div className={`wp-stat-box-bar wp-stat-box-bar--${s.bar}`} />
                    <div className={`wp-stat-num wp-stat-num--${s.cls}`}>{s.num}</div>
                    <div className="wp-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — What You'll Learn (6 modules)
      ════════════════════════════════════════════════════ */}
      <section className="wp-section wp-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// What You'll Learn</div>
            <h2 className="sec-title">
              6 Modules — From Installation<br />
              <span className="grad-text">to E-commerce Ready</span>
            </h2>
            <p className="sec-sub">
              Every module is designed around building real skills — not just theory.
              By the end, you'll have built a complete, live WordPress website.
            </p>
          </div>

          <div className="wp-learn-grid">
            {LEARN_MODULES.map((mod, i) => (
              <div
                className={`wp-learn-card wp-delay-${i % 6} fade-up`}
                key={i}
                ref={fade}
              >
                <div className="wp-learn-num-wrap">
                  <span className="wp-learn-num">{mod.num}</span>
                </div>
                <div className="wp-learn-body">
                  <h3 className="wp-learn-title">{mod.title}</h3>
                  <p className="wp-learn-desc">{mod.desc}</p>
                  <div className="wp-learn-chips">
                    {mod.chips.map((chip, j) => (
                      <span className="wp-chip" key={j}>
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
          SECTION 3 — Key Features of the Course
      ════════════════════════════════════════════════════ */}
      <section className="wp-section wp-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Key Features of the Course</div>
            <h2 className="sec-title">
              What Makes This Course<br />
              <span className="grad-text">Stand Out?</span>
            </h2>
            <p className="sec-sub">
              Our WordPress course is built around outcome-driven learning — hands-on
              training, real projects, and flexible schedules designed for results.
            </p>
          </div>

          <div className="wp-features-grid">
            {KEY_FEATURES.map((f, i) => (
              <div
                className={`wp-feature-card wp-feature-card--${f.accent} wp-delay-${i % 5} fade-up`}
                key={i}
                ref={fade}
              >
                <div className={`wp-feature-top-bar wp-feature-top-bar--${f.accent}`} />
                <div className="wp-feature-icon">{f.icon}</div>
                <h3 className="wp-feature-title">{f.title}</h3>
                <p className="wp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — Why WordPress (Benefits)
      ════════════════════════════════════════════════════ */}
      <section className="wp-section wp-section--mid">
        <div className="max-w">
          <div className="wp-why-layout">

            {/* Left: sticky heading */}
            <div className="wp-why-sticky">
              <div className="sec-label fade-up" ref={fade}>
                // Why Learn WordPress?
              </div>
              <h2 className="sec-title fade-up" ref={fade}>
                The World's Most<br />
                <span className="grad-text">Popular CMS — For a Reason</span>
              </h2>
              <p className="wp-why-desc fade-up" ref={fade}>
                WordPress powers 43% of all websites on the internet — from personal
                blogs to Fortune 500 companies. It's the go-to platform for anyone
                serious about building a web presence, and the skill is in massive
                demand across freelance, agency, and in-house roles.
              </p>
              <div className="wp-why-callout fade-up" ref={fade}>
                <p>
                  <strong>NextGen Academy graduates</strong> have gone on to build
                  successful freelance careers charging ₹15k–50k per website, land
                  full-time roles at agencies, and launch their own web design businesses.
                </p>
              </div>
              <div className="btn-group fade-up" ref={fade}>
                <button className="btn-primary" onClick={() => go("/admission")}>
                  Apply for This Course
                </button>
              </div>
            </div>

            {/* Right: benefit items */}
            <div className="wp-why-list">
              {WHY_WORDPRESS.map((item, i) => (
                <div
                  className={`wp-why-item wp-delay-${i % 5} fade-up`}
                  key={i}
                  ref={fade}
                >
                  <div className="wp-why-icon">{item.icon}</div>
                  <div className="wp-why-content">
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
          SECTION 5 — Tools & Plugins
      ════════════════════════════════════════════════════ */}
      <section className="wp-section wp-section--dark grid-bg">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Tools &amp; Plugins You Will Master</div>
            <h2 className="sec-title">
              Essential WordPress<br />
              <span className="grad-text">Tools &amp; Plugins</span>
            </h2>
            <p className="sec-sub">
              Hands-on training with the most widely-used WordPress tools, page builders,
              and plugins used by professionals to build high-quality websites.
            </p>
          </div>

          <div className="wp-tools-wrap fade-up" ref={fade}>
            {TOOLS.map((tool, i) => (
              <div className="wp-tool-pill" key={i}>
                <span className="wp-tool-icon">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Career Outcomes + Who Should Join
      ════════════════════════════════════════════════════ */}
      <section className="wp-section wp-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Career &amp; Eligibility</div>
            <h2 className="sec-title">
              Where This Course<br />
              <span className="grad-text">Can Take You</span>
            </h2>
          </div>

          <div className="wp-outcomes-layout">

            {/* Left: career roles */}
            <div>
              <div className="sec-label fade-up" ref={fade}>
                // Career Roles After This Course
              </div>
              <p className="wp-outcomes-intro fade-up" ref={fade}>
                WordPress skills are in high demand across freelance, agency, and
                in-house roles. Whether you want to work full-time or build a
                freelance business, this course gives you the foundation.
              </p>
              <div className="wp-career-roles">
                {CAREER_ROLES.map((role, i) => (
                  <div
                    className={`wp-career-role wp-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="wp-career-dot" />
                    <span className="wp-career-name">{role.name}</span>
                    <span className="wp-career-pay">{role.pay}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: who should join */}
            <div>
              <div className="sec-label fade-up" ref={fade}>
                // Who Should Join?
              </div>
              <p className="wp-outcomes-intro fade-up" ref={fade}>
                No prior technical experience is needed. If you can use a computer,
                you can learn WordPress. This course is designed to take complete
                beginners to confident website builders.
              </p>
              <ul className="wp-who-list">
                {WHO_SHOULD_JOIN.map((item, i) => (
                  <li
                    className={`wp-who-item wp-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="wp-who-icon">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 7 — CTA
      ════════════════════════════════════════════════════ */}
      <section className="wp-cta-section">
        <div className="wp-cta-glow" />
        <div className="wp-cta-content">
          <div className="badge wp-cta-badge fade-up" ref={fade}>
            <span className="badge-dot" />
            Get Started Now — Apply Today
          </div>

          <h2 className="wp-cta-title fade-up" ref={fade}>
            Master WordPress &amp; Start<br />
            <span className="grad-text">Building Websites Today.</span>
          </h2>

          <p className="wp-cta-sub fade-up" ref={fade}>
            Join NextGen Academy's WordPress course — step-by-step training, real
            projects, certification, and placement support included. Limited seats.
          </p>

          <div className="wp-cta-buttons fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/admission")}>
              Enroll Now
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Contact Us →
            </button>
            <a href="tel:8976509267" className="wp-tel-link">
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
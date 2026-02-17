import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import PageHero from "../components/PageHero";
import "./Smm.css";

// ════════════════════════════════════════════════════════════════
//  DATA — sourced from thenextgenacademy.co.in/social-media-marketing-smm/
// ════════════════════════════════════════════════════════════════

// Social media platforms covered
const PLATFORMS_BADGES = [
  { label: "Instagram",  icon: "📸", variant: "instagram" },
  { label: "Facebook",   icon: "📘", variant: "facebook"  },
  { label: "LinkedIn",   icon: "💼", variant: "linkedin"  },
  { label: "YouTube",    icon: "▶️", variant: "youtube"   },
  { label: "X (Twitter)",icon: "🐦", variant: "twitter"   },
  { label: "Pinterest",  icon: "📌", variant: "pinterest" },
];

// What You'll Learn — 5 modules (from the site's image titles)
const LEARN_MODULES = [
  {
    num: "Module 01",
    icon: "📱",
    accent: "purple",
    title: "Social Media Fundamentals",
    desc: "Understand the social media landscape — how platforms work, how algorithms decide what to show, and how to build a strong brand presence from the ground up.",
    chips: ["Platform algorithms", "Brand positioning", "Audience personas", "Content strategy", "Profile optimisation"],
  },
  {
    num: "Module 02",
    icon: "✍️",
    accent: "cyan",
    title: "Creating Engaging Content",
    desc: "Learn to craft content that stops the scroll — from Reels and Stories to carousels, long-form posts, and video scripts. Master visual storytelling and copywriting.",
    chips: ["Reels & Stories", "Carousel posts", "Video scripting", "Copywriting", "Canva & design tools", "Content calendar"],
  },
  {
    num: "Module 03",
    icon: "📣",
    accent: "amber",
    title: "Advertising on Social Media",
    desc: "Run paid campaigns on Facebook, Instagram, and LinkedIn. Learn audience targeting, ad formats, budget management, and how to optimise for conversions and ROAS.",
    chips: ["Meta Ads Manager", "Instagram ads", "LinkedIn ads", "Audience targeting", "A/B testing", "Retargeting"],
  },
  {
    num: "Module 04",
    icon: "📊",
    accent: "hot",
    title: "Analytics & Performance Tracking",
    desc: "Use data to measure, understand, and improve your social media results. Learn to read platform insights, track KPIs, and present reports that drive decisions.",
    chips: ["Meta Insights", "LinkedIn Analytics", "Google Analytics", "KPI tracking", "Reporting", "UTM parameters"],
  },
  {
    num: "Module 05",
    icon: "🏆",
    accent: "pink",
    title: "Real-World Projects",
    desc: "Apply everything you've learned by working on actual brand campaigns. Build a professional portfolio with live projects — the kind employers and clients look for.",
    chips: ["Live brand campaigns", "Portfolio projects", "Client briefs", "Campaign reporting", "Internship exposure"],
  },
];

// Why Choose NextGen Academy (from the site's 5 bullet points)
const WHY_CHOOSE = [
  {
    icon: "🎯",
    title: "100% Internship with Real-Time Projects",
    text: "Every student gets a guaranteed internship placement. You'll work on live campaigns for real brands — not simulated exercises.",
  },
  {
    icon: "💰",
    title: "Earn While You Learn",
    text: "Our unique 'Earn While You Learn' opportunities allow you to take on paid freelance work during the course, helping you manage finances and build income simultaneously.",
  },
  {
    icon: "💼",
    title: "Job Placement Support",
    text: "Our dedicated placement team connects you with 50+ hiring partners. We support you with resume building, LinkedIn optimisation, and mock interviews until you land the job.",
  },
  {
    icon: "🕐",
    title: "Flexible Online Learning",
    text: "The course is completely online with flexible learning schedules — accessible to students in Mumbai, Thane, and all nearby areas. Learn at a pace that suits your life.",
  },
  {
    icon: "🧑‍🏫",
    title: "Personalised Mentor Guidance",
    text: "Every student gets personalised mentor guidance throughout the course. Your mentor is an industry professional who provides feedback, answers questions, and guides your growth.",
  },
];

// Platform deep-dive cards
const PLATFORM_CARDS = [
  {
    emoji: "📸",
    variant: "instagram",
    name: "Instagram",
    desc: "Master Reels, Stories, Carousels, and Shopping features. Learn how to grow organic followers and run high-converting Instagram ad campaigns.",
    tags: ["Reels", "Stories", "Shopping", "Influencer collab", "Instagram Ads"],
  },
  {
    emoji: "📘",
    variant: "facebook",
    name: "Facebook",
    desc: "Run advanced Facebook ad campaigns with precise audience targeting. Manage Facebook Pages, Groups, and use Meta Business Suite like a pro.",
    tags: ["Meta Ads", "Audience targeting", "Facebook Groups", "Business Suite", "Pixel setup"],
  },
  {
    emoji: "💼",
    variant: "linkedin",
    name: "LinkedIn",
    desc: "Build a powerful professional brand and generate B2B leads on LinkedIn. Learn LinkedIn Ads, content strategy, and profile optimisation for business growth.",
    tags: ["LinkedIn Ads", "B2B lead gen", "Company pages", "Thought leadership", "InMail campaigns"],
  },
  {
    emoji: "▶️",
    variant: "youtube",
    name: "YouTube",
    desc: "Create and optimise a YouTube channel from scratch. Learn video SEO, channel growth strategies, and how to run YouTube ad campaigns for maximum reach.",
    tags: ["Video SEO", "Channel growth", "YouTube Ads", "Thumbnails", "Analytics"],
  },
  {
    emoji: "🐦",
    variant: "twitter",
    name: "X (Twitter)",
    desc: "Build a strong X presence with viral content strategies, community engagement, and targeted Twitter/X advertising to grow your brand voice.",
    tags: ["X Ads", "Community building", "Trending topics", "Brand voice", "Engagement"],
  },
];

// Tools covered
const TOOLS = [
  { icon: "📣", name: "Meta Business Suite" },
  { icon: "🎨", name: "Canva" },
  { icon: "📊", name: "Meta Ads Manager" },
  { icon: "📈", name: "Google Analytics 4" },
  { icon: "📌", name: "Hootsuite" },
  { icon: "🗓️", name: "Buffer" },
  { icon: "🎬", name: "CapCut" },
  { icon: "🔍", name: "LinkedIn Campaign Manager" },
  { icon: "📸", name: "Instagram Insights" },
  { icon: "🎥", name: "YouTube Studio" },
  { icon: "🤖", name: "ChatGPT (AI Content)" },
  { icon: "📐", name: "Adobe Express" },
];

// Career roles
const CAREER_ROLES = [
  { name: "Social Media Manager",          pay: "₹3–6 LPA"     },
  { name: "Social Media Strategist",       pay: "₹4–8 LPA"     },
  { name: "Content Creator",               pay: "₹2.5–5 LPA"   },
  { name: "Community Manager",             pay: "₹3–5.5 LPA"   },
  { name: "Performance Marketing Manager", pay: "₹4–9 LPA"     },
  { name: "Digital Marketing Executive",   pay: "₹3–6 LPA"     },
  { name: "Brand Manager",                 pay: "₹5–12 LPA"    },
  { name: "Freelance SMM Consultant",      pay: "₹30k–1L/mo"   },
];

// Who should join
const WHO_SHOULD_JOIN = [
  { icon: "🎓", text: "Fresh graduates from any stream looking to build a career in digital marketing or content creation." },
  { icon: "💼", text: "Working professionals who want to add social media marketing expertise and boost their earning potential." },
  { icon: "🏢", text: "Business owners who want to manage their own social media pages and reduce agency dependency." },
  { icon: "✍️", text: "Content writers, bloggers, and influencers who want to monetise their creative skills strategically." },
  { icon: "🛒", text: "E-commerce entrepreneurs who want to drive sales through Instagram Shopping and Facebook ads." },
  { icon: "🌐", text: "Freelancers looking to offer high-value social media management and ad services to clients." },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function SmmPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      {/* ── PageHero — untouched ─────────────────────────── */}
      <PageHero
        label="Social Media Marketing"
        title={
          <>
            Best SMM Course in<br />
            <span className="grad-text">Thane &amp; Mumbai</span>
          </>
        }
        sub="Unlock the power of social media to grow your brand. Master Instagram, Facebook, LinkedIn, and more — with hands-on projects, internship, and placement support."
      />

      {/* ════════════════════════════════════════════════════
          SECTION 1 — Intro + Platforms + Stats
      ════════════════════════════════════════════════════ */}
      <section className="smm-section smm-section--dark grid-bg">
        <div className="max-w">
          <div className="smm-intro-layout">

            {/* Left: copy */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Social Media Marketing (SMM) Course</div>
              <h2 className="sec-title fade-up" ref={fade}>
                Create Impactful Campaigns &amp;<br />
                <span className="grad-text">Grow Any Brand Online</span>
              </h2>

              <div className="smm-intro-tagline fade-up" ref={fade}>
                <span className="smm-intro-tagline-dot" />
                Unlock the Power of Social Media to Grow Your Brand
              </div>

              <p className="smm-intro-body fade-up" ref={fade}>
                Are you ready to master the art of <strong>social media marketing</strong> and
                create impactful campaigns? Our <strong>SMM course</strong> equips you with
                practical skills to boost brand awareness, engage with your audience, and
                drive sales through the platforms your customers use every day.
              </p>

              <p className="smm-intro-body fade-up" ref={fade}>
                Whether you're a beginner looking to start your journey in social media
                marketing or a professional aiming to enhance your skills, this course
                offers something for everyone.
              </p>

              <div className="smm-location-chip fade-up" ref={fade}>
                <span className="smm-location-chip-dot" />
                Online — accessible to students in Mumbai, Thane, and nearby areas
              </div>

              {/* Platform badges */}
              <div className="smm-platforms-wrap fade-up" ref={fade}>
                {PLATFORMS_BADGES.map((p, i) => (
                  <div
                    className={`smm-platform-badge smm-platform-badge--${p.variant}`}
                    key={i}
                  >
                    {p.icon} {p.label}
                  </div>
                ))}
              </div>

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
              <div className="smm-stat-strip">
                {[
                  { num: "2 Mo",  label: "Course Duration",  bar: "purple", cls: "purple" },
                  { num: "₹10k",  label: "Course Fee",        bar: "cyan",   cls: "cyan"   },
                  { num: "100%",  label: "Internship Rate",   bar: "amber",  cls: "amber"  },
                  { num: "5",     label: "Core Modules",      bar: "hot",    cls: "amber"  },
                  { num: "6+",    label: "Platforms Covered", bar: "purple", cls: "purple" },
                  { num: "50+",   label: "Hiring Partners",   bar: "cyan",   cls: "cyan"   },
                ].map((s, i) => (
                  <div
                    className={`smm-stat-box smm-delay-${i} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <div className={`smm-stat-box-bar smm-stat-box-bar--${s.bar}`} />
                    <div className={`smm-stat-num smm-stat-num--${s.cls}`}>{s.num}</div>
                    <div className="smm-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — What You'll Learn (5 modules)
      ════════════════════════════════════════════════════ */}
      <section className="smm-section smm-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// What You'll Learn</div>
            <h2 className="sec-title">
              5 Modules — From Fundamentals<br />
              <span className="grad-text">to Real-World Campaigns</span>
            </h2>
            <p className="sec-sub">
              Every module is designed around practical skill-building. You'll leave
              each session with something you can immediately apply to a live brand.
            </p>
          </div>

          <div className="smm-learn-grid">
            {LEARN_MODULES.map((mod, i) => (
              <div
                className={`smm-learn-card smm-learn-card--${mod.accent} smm-delay-${i % 5} fade-up`}
                key={i}
                ref={fade}
              >
                <div className={`smm-learn-top-bar smm-learn-top-bar--${mod.accent}`} />
                <div className={`smm-learn-icon-wrap smm-learn-icon-wrap--${mod.accent}`}>
                  {mod.icon}
                </div>
                <div className={`smm-learn-num smm-learn-num--${mod.accent}`}>{mod.num}</div>
                <h3 className="smm-learn-title">{mod.title}</h3>
                <p className="smm-learn-desc">{mod.desc}</p>
                <div className="smm-learn-chips">
                  {mod.chips.map((chip, j) => (
                    <span className={`smm-chip smm-chip--${mod.accent}`} key={j}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — Why Choose NextGen Academy
      ════════════════════════════════════════════════════ */}
      <section className="smm-section smm-section--dark">
        <div className="max-w">
          <div className="smm-why-layout">

            {/* Left: sticky heading */}
            <div className="smm-why-sticky">
              <div className="sec-label fade-up" ref={fade}>// Why Choose NextGen Academy?</div>
              <h2 className="sec-title fade-up" ref={fade}>
                More Than a Course —<br />
                <span className="grad-text">A Career Launch Pad</span>
              </h2>
              <p className="smm-why-desc fade-up" ref={fade}>
                NextGen Academy is one of Mumbai and Thane's most trusted digital marketing
                institutes with 2500+ alumni, a 4.9★ Google rating, and 50+ active hiring
                partners. Here's exactly what sets our SMM course apart:
              </p>
              <div className="smm-why-callout fade-up" ref={fade}>
                <p>
                  <strong>Earn While You Learn</strong> — our unique programme lets you
                  take on paid freelance projects during the course itself, so you graduate
                  with both a skill set and an income stream.
                </p>
              </div>
              <div className="btn-group fade-up" ref={fade}>
                <button className="btn-primary" onClick={() => go("/admission")}>
                  Apply for This Course
                </button>
              </div>
            </div>

            {/* Right: why items */}
            <div className="smm-why-list">
              {WHY_CHOOSE.map((item, i) => (
                <div
                  className={`smm-why-item smm-delay-${i % 5} fade-up`}
                  key={i}
                  ref={fade}
                >
                  <div className="smm-why-icon">{item.icon}</div>
                  <div className="smm-why-content">
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
          SECTION 4 — Platforms Deep Dive
      ════════════════════════════════════════════════════ */}
      <section className="smm-section smm-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Platforms You'll Master</div>
            <h2 className="sec-title">
              Every Major Platform —<br />
              <span className="grad-text">Covered in Depth</span>
            </h2>
            <p className="sec-sub">
              You'll learn the nuances of each platform — not just the basics —
              so you can manage accounts and run campaigns for any brand or niche.
            </p>
          </div>

          <div className="smm-platforms-grid">
            {PLATFORM_CARDS.map((p, i) => (
              <div
                className={`smm-platform-card smm-platform-card--${p.variant} smm-delay-${i % 5} fade-up`}
                key={i}
                ref={fade}
              >
                <div className="smm-platform-card-head">
                  <span className="smm-platform-emoji">{p.emoji}</span>
                  <span className="smm-platform-name">{p.name}</span>
                </div>
                <p className="smm-platform-desc">{p.desc}</p>
                <div className="smm-platform-tags">
                  {p.tags.map((tag, j) => (
                    <span className="smm-chip smm-chip--purple" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — Tools
      ════════════════════════════════════════════════════ */}
      <section className="smm-section smm-section--dark grid-bg">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Tools You Will Master</div>
            <h2 className="sec-title">
              Industry-Used SMM<br />
              <span className="grad-text">Tools &amp; Platforms</span>
            </h2>
            <p className="sec-sub">
              Hands-on training with every tool a social media manager uses daily —
              from content creation to analytics and ad management.
            </p>
          </div>

          <div className="smm-tools-wrap fade-up" ref={fade}>
            {TOOLS.map((tool, i) => (
              <div className="smm-tool-pill" key={i}>
                <span className="smm-tool-icon">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Career Outcomes + Who Should Join
      ════════════════════════════════════════════════════ */}
      <section className="smm-section smm-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Career &amp; Eligibility</div>
            <h2 className="sec-title">
              Where This Course<br />
              <span className="grad-text">Can Take You</span>
            </h2>
          </div>

          <div className="smm-outcomes-layout">

            {/* Left: career roles */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Career Roles After This Course</div>
              <p className="smm-outcomes-intro fade-up" ref={fade}>
                Social media marketing is one of the fastest-growing fields in India.
                Businesses of every size — from startups to enterprises — actively hire
                skilled SMM professionals with practical, platform-specific experience.
              </p>
              <div className="smm-career-roles">
                {CAREER_ROLES.map((role, i) => (
                  <div
                    className={`smm-career-role smm-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="smm-career-dot" />
                    <span className="smm-career-name">{role.name}</span>
                    <span className="smm-career-pay">{role.pay}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: who should join */}
            <div>
              <div className="sec-label fade-up" ref={fade}>// Who Should Join?</div>
              <p className="smm-outcomes-intro fade-up" ref={fade}>
                No prior marketing experience is needed. If you use social media,
                you already understand it from a user perspective. We'll teach you
                how to master it from a brand and business perspective.
              </p>
              <ul className="smm-who-list">
                {WHO_SHOULD_JOIN.map((item, i) => (
                  <li
                    className={`smm-who-item smm-delay-${i % 6} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <span className="smm-who-icon">{item.icon}</span>
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
      <section className="smm-cta-section">
        <div className="smm-cta-glow" />
        <div className="smm-cta-content">
          <div className="badge smm-cta-badge fade-up" ref={fade}>
            <span className="badge-dot" />
            Get Started — Contact Us Today
          </div>

          <h2 className="smm-cta-title fade-up" ref={fade}>
            Master Social Media Marketing<br />
            <span className="grad-text">in Thane &amp; Mumbai.</span>
          </h2>

          <p className="smm-cta-sub fade-up" ref={fade}>
            Join NextGen Academy's SMM course — hands-on training, earn while you learn,
            100% internship, and placement support included. Limited seats per batch.
          </p>

          <div className="smm-cta-buttons fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/admission")}>
              Enroll Now
            </button>
            <button className="btn-secondary" onClick={() => go("/contact")}>
              Contact Us →
            </button>
            <a href="tel:8976509267" className="smm-tel-link">
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
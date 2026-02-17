import { useState } from "react";


/**
 * AppCard — Reusable course card for App Development courses
 *
 * Props:
 *  icon        {string}   Emoji icon
 *  title       {string}   Course title
 *  badge       {string}   Badge label (e.g. "Most Popular")
 *  overview    {string}   Short course overview paragraph
 *  duration    {string}   e.g. "2 Months"
 *  fee         {string}   e.g. "₹18,000"
 *  internship  {string}   e.g. "2-Month Unpaid Internship"
 *  whoCanJoin  {string[]} List of eligible students
 *  keyLearnings{string[]} List of learning outcomes
 *  whyChoose   {string[]} Reasons to choose this course
 *  accent      {string}   "cyan" | "amber" | "hot" | "purple"
 *  onEnroll    {fn}       Callback when Enroll Now is clicked
 */
export default function AppCard({
  icon,
  title,
  badge,
  overview,
  duration,
  fee,
  internship,
  whoCanJoin = [],
  keyLearnings = [],
  whyChoose = [],
  accent = "cyan",
  onEnroll,
}) {
  const [showAll, setShowAll] = useState(false);

  // Show first 4 learnings by default, rest on toggle
  const visibleLearnings = showAll ? keyLearnings : keyLearnings.slice(0, 4);
  const hasMore = keyLearnings.length > 4;

  return (
    <article className="ac-card">
      {/* ── Accent bar ── */}
      <div className={`ac-card-bar ac-card-bar--${accent}`} />

      {/* ── Body ── */}
      <div className="ac-card-body">

        {/* Icon + badge */}
        <div className="ac-card-top">
          <div className={`ac-icon-wrap ac-icon-wrap--${accent}`}>
            {icon}
          </div>
          {badge && (
            <span className={`ac-badge ac-badge--${accent}`}>
              <span className="ac-badge-dot" />
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="ac-title">{title}</h3>

        {/* Overview */}
        <p className="ac-overview">{overview}</p>

        {/* Meta pills: duration / fee */}
        <div className="ac-meta-row">
          <div className="ac-meta-pill">
            <span className="ac-meta-pill-icon">🕐</span>
            Duration: <strong>{duration}</strong>
          </div>
          <div className="ac-meta-pill">
            <span className="ac-meta-pill-icon">💳</span>
            Fee: <strong>{fee}</strong>
          </div>
        </div>

        {/* Who can join */}
        {whoCanJoin.length > 0 && (
          <div className="ac-who-section">
            <div className="ac-sub-label">// Who Can Join</div>
            <ul className="ac-who-list">
              {whoCanJoin.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Key learnings */}
        {keyLearnings.length > 0 && (
          <div className="ac-learnings-section">
            <div className="ac-sub-label">// Key Learnings</div>
            <div className="ac-learnings-grid">
              {visibleLearnings.map((item, i) => (
                <div key={i} className={`ac-learning-item ac-learning-item--${accent}`}>
                  {item}
                </div>
              ))}
            </div>
            {hasMore && (
              <button
                className={`ac-toggle-btn ac-toggle-btn--${accent}`}
                onClick={() => setShowAll((s) => !s)}
              >
                {showAll ? "Show less" : `+${keyLearnings.length - 4} more`}
                <span className={`ac-toggle-icon${showAll ? " ac-toggle-icon--open" : ""}`}>
                  ▼
                </span>
              </button>
            )}
          </div>
        )}

        {/* Why choose */}
        {whyChoose.length > 0 && (
          <div className="ac-why-section">
            <div className="ac-sub-label">// Why Choose This Course</div>
            <ul className={`ac-why-list ac-why-list--${accent}`}>
              {whyChoose.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* ── Divider ── */}
      <div className="ac-divider" />

      {/* ── Footer ── */}
      <div className="ac-card-footer">
        <div className="ac-price-block">
          <span className="ac-price-label">Course Fee</span>
          <span className={`ac-price-value ac-price-value--${accent}`}>{fee}</span>
        </div>
        <button
          className={`ac-enroll-btn ac-enroll-btn--${accent}`}
          onClick={onEnroll}
        >
          Enroll Now →
        </button>
        <div className="ac-internship-chip">
          🎓 <strong>Internship:</strong>&nbsp;{internship}
        </div>
      </div>
    </article>
  );
}
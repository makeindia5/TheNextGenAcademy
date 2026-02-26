import "../styles/infoCard.css";

// Reusable info card component
export default function InfoCard({ icon, title, description, accent = "cyan", delay = 0 }) {
  return (
    <div className={`info-card info-card--${accent} info-card-delay-${delay}`}>
      <div className={`info-card-icon info-card-icon--${accent}`}>{icon}</div>
      <h4 className="info-card-title">{title}</h4>
      {description && (
        <p
          className="info-card-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}
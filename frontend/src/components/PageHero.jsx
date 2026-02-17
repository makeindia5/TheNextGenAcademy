
export default function PageHero({ label, title, sub, accent = "var(--cyan)" }) {
  return (
    <div className="page-hero grid-bg" style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", filter: "blur(90px)", background: "rgba(0,229,255,.055)", top: -80, right: "10%", pointerEvents: "none", animation: "floatOrb 9s ease-in-out infinite" }} />
      <div className="page-hero-inner">
        <div className="badge" style={{ marginBottom: 20 }}>
          <span className="badge-dot" />{label}
        </div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
}

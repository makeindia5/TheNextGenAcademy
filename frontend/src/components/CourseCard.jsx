export default function CourseCard({ course, index, onClick,fade }) {
  return (
    <div
      className="course-card fade-up"
      ref={fade}
      style={{ transitionDelay: `${index * 70}ms` }}
      onClick={() => onClick(course.id)}
    >
      <div
        className="c-icon"
        style={{ background: course.iconBg, border: `1px solid ${course.iconBorder}` }}
      >
        {course.icon}
      </div>

      <span
        className="c-tag"
        style={{ background: course.tagBg, color: course.tagColor }}
      >
        {course.tag}
      </span>

      <h3>{course.title}</h3>
      <p>{course.short}</p>

      <div className="c-footer">
        <div>
          <div className="c-meta">
            See More Details
          </div>
        </div>

        <div className="arrow-btn">
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 12L12 2M12 2H6M12 2V8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

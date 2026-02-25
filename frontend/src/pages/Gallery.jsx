import { useState } from "react";
import "../styles/Gallery.css";

// ════════════════════════════════════════════════════════════════
//  GALLERY DATA — Add your real photos/videos here
// ════════════════════════════════════════════════════════════════

const GALLERY_ITEMS = [
    // Training Sessions
    { id: 1, type: "image", src: "/assets/gallery/pic1.jpg", category: "training", caption: "Hands-on Digital Marketing Training Session" },
    { id: 2, type: "image", src: "/assets/gallery/pic2.jpg", category: "training", caption: "Students Working on Live Projects" },
    { id: 3, type: "video", src: "/assets/gallery/video1.mp4", category: "training", caption: "Practical Lab Setup — Real Industry Exposure" },
    { id: 4, type: "image", src: "/assets/gallery/pic3.jpg", category: "training", caption: "SEO Training — Keyword Research Workshop" },
    { id: 5, type: "image", src: "/assets/gallery/Training.png", category: "training", caption: "Social Media Marketing Class in Progress" },

    // Workshops
    { id: 6, type: "image", src: "/assets/gallery/pic1.jpg", category: "workshop", caption: "Google Ads Workshop — Advanced Campaign Setup" },
    { id: 7, type: "video", src: "/assets/gallery/video1.mp4", category: "workshop", caption: "Web Development Workshop Highlights" },
    { id: 8, type: "image", src: "/assets/gallery/pic2.jpg", category: "workshop", caption: "WordPress Website Creation Workshop" },
    { id: 9, type: "image", src: "/assets/gallery/pic5.jpg", category: "workshop", caption: "App Development Bootcamp" },

    // Events
    { id: 10, type: "image", src: "/assets/gallery/pic6.jpg", category: "event", caption: "NextGen Academy Inauguration Ceremony" },
    { id: 11, type: "image", src: "/assets/gallery/pic7.jpg", category: "event", caption: "Industry Expert Guest Lecture" },
    { id: 12, type: "video", src: "/assets/gallery/video1.mp4", category: "event", caption: "Annual Tech Fest 2024" },
    { id: 13, type: "image", src: "/assets/gallery/pic4.jpg", category: "event", caption: "Student Networking Event" },

    // Placements
    { id: 14, type: "image", src: "/assets/gallery/pic5.jpg", category: "placement", caption: "Students Placed at Cognizant" },
    { id: 15, type: "image", src: "/assets/gallery/pic7.jpg", category: "placement", caption: "TCS Placement Drive at NextGen Academy" },
    { id: 16, type: "video", src: "/assets/gallery/video1.mp4", category: "placement", caption: "Success Stories — Our Alumni" },
    { id: 17, type: "image", src: "/assets/gallery/pic4.jpg", category: "placement", caption: "Mock Interview Session" },
    { id: 18, type: "image", src: "/assets/gallery/pic3.jpg", category: "placement", caption: "Certificate Distribution Ceremony" },

    // Add more items here..
];

// Category definitions
const CATEGORIES = [
    { id: "all", label: "All", icon: "🎯" },
    { id: "training", label: "Training", icon: "📚" },
    { id: "workshop", label: "Workshops", icon: "🛠️" },
    { id: "event", label: "Events", icon: "🎉" },
    { id: "placement", label: "Placements", icon: "🎓" },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Filter items based on active category
    const filteredItems = activeCategory === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === activeCategory);

    // Calculate stats
    const totalImages = GALLERY_ITEMS.filter(item => item.type === "image").length;
    const totalVideos = GALLERY_ITEMS.filter(item => item.type === "video").length;
    const totalItems = GALLERY_ITEMS.length;

    // Lightbox handlers
    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    const goToPrev = () => {
        setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (!lightboxOpen) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrev();
        if (e.key === "ArrowRight") goToNext();
    };

    // Attach keyboard listener
    if (typeof window !== "undefined") {
        window.onkeydown = handleKeyDown;
    }

    return (
        <>
            {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
            <section className="gallery-hero">
                <div className="gallery-hero-glow" />
                <div className="gallery-hero-content">
                    <div className="gallery-hero-badge">
                        <span className="gallery-hero-badge-icon">📸</span>
                        Training Gallery
                    </div>
                    <h1 className="gallery-hero-title">
                        Our Training in <span className="gallery-hero-grad">Action</span>
                    </h1>
                    <p className="gallery-hero-subtitle">
                        Explore real moments from our training sessions, workshops, events, and student
                        success stories at NextGen Academy.
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
          FILTER TABS
      ════════════════════════════════════════════════════ */}
            <section className="gallery-filter-section">
                <div className="gallery-filter-wrap">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            className={`gallery-filter-btn ${activeCategory === cat.id ? "gallery-filter-btn--active" : ""
                                }`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════════ */}
            <section className="gallery-stats-bar">
                <div className="gallery-stats-wrap">
                    <div className="gallery-stat">
                        <div className="gallery-stat-icon">🖼️</div>
                        <div className="gallery-stat-num">{totalImages}</div>
                        <div className="gallery-stat-label">Photos</div>
                    </div>
                    <div className="gallery-stat">
                        <div className="gallery-stat-icon">🎥</div>
                        <div className="gallery-stat-num">{totalVideos}</div>
                        <div className="gallery-stat-label">Videos</div>
                    </div>
                    <div className="gallery-stat">
                        <div className="gallery-stat-icon">📁</div>
                        <div className="gallery-stat-num">{totalItems}</div>
                        <div className="gallery-stat-label">Total Items</div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
          MASONRY GRID
      ════════════════════════════════════════════════════ */}
            <section className="gallery-grid-section">
                {filteredItems.length > 0 ? (
                    <div className="gallery-grid">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="gallery-media-wrap">
                                    {item.type === "image" ? (
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            className="gallery-img"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <>
                                            <video
                                                src={item.src}
                                                className="gallery-video"
                                                preload="metadata"
                                            />
                                            <div className="gallery-video-badge">▶</div>
                                        </>
                                    )}
                                </div>
                                <div className="gallery-caption">
                                    <span className={`gallery-caption-category gallery-caption-category--${item.category}`}>
                                        {item.category}
                                    </span>
                                    <p className="gallery-caption-text">{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="gallery-empty">
                        <div className="gallery-empty-icon">📭</div>
                        <p className="gallery-empty-text">No items found in this category.</p>
                    </div>
                )}
            </section>

            {/* ════════════════════════════════════════════════════
          LIGHTBOX MODAL
      ════════════════════════════════════════════════════ */}
            {lightboxOpen && filteredItems[lightboxIndex] && (
                <div
                    className={`gallery-lightbox ${lightboxOpen ? "gallery-lightbox--active" : ""}`}
                    onClick={closeLightbox}
                >
                    <button
                        className="gallery-lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    <button
                        className="gallery-lightbox-nav gallery-lightbox-nav--prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrev();
                        }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>

                    <button
                        className="gallery-lightbox-nav gallery-lightbox-nav--next"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        aria-label="Next"
                    >
                        ›
                    </button>

                    <div
                        className="gallery-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {filteredItems[lightboxIndex].type === "image" ? (
                            <img
                                src={filteredItems[lightboxIndex].src}
                                alt={filteredItems[lightboxIndex].caption}
                                className="gallery-lightbox-img"
                            />
                        ) : (
                            <video
                                src={filteredItems[lightboxIndex].src}
                                controls
                                autoPlay
                                className="gallery-lightbox-video"
                            />
                        )}
                    </div>

                    <div className="gallery-lightbox-caption">
                        <p className="gallery-lightbox-caption-text">
                            {filteredItems[lightboxIndex].caption}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
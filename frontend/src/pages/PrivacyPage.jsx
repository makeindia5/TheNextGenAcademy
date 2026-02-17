import PageHero from "../components/PageHero";


// ── Table of Contents data ────────────────────────────────────
const TOC = [
  { num: "01", label: "Who We Are" },
  { num: "02", label: "Comments" },
  { num: "03", label: "Media" },
  { num: "04", label: "Cookies" },
  { num: "05", label: "Embedded Content" },
  { num: "06", label: "Who We Share Data With" },
  { num: "07", label: "How Long We Retain Data" },
  { num: "08", label: "Your Rights Over Your Data" },
  { num: "09", label: "Where Your Data Is Sent" },
  { num: "10", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>

      <section>
        <p>Your Privacy <span className="grad-text">Matters</span></p>
        <div className="privacy-wrapper">

          {/* ── Last updated bar ── */}
          <div className="privacy-meta">
            <span className="privacy-meta-dot" />
            <span className="privacy-meta-text">
              Last updated: <strong>January 2025</strong>&nbsp;·&nbsp;
              Website:&nbsp;
              <strong>nextgenacadmy.com</strong>
            </span>
          </div>

          {/* ── Table of Contents ── */}
          <div className="privacy-toc">
            <div className="privacy-toc-title">// Table of Contents</div>
            <ul className="privacy-toc-list">
              {TOC.map((item) => (
                <li key={item.num}>
                  <a href={`#section-${item.num}`}>
                    {item.num}. {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 01 — Who We Are
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-01">
            <div className="privacy-section-head">
              <span className="privacy-section-num">01</span>
              <span className="privacy-section-icon">🏫</span>
              <h2 className="privacy-section-title">Who We Are</h2>
            </div>
            <p className="privacy-text">
              NextGen Academy is a digital skills training institute based in Thane,
              Mumbai, providing industry-focused courses in Digital Marketing and App
              Development. Our website address is:
            </p>
            <a
              href="http://nextgenacadmy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="privacy-url-chip"
            >
              🔗 http://nextgenacadmy.com
            </a>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 02 — Comments
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-02">
            <div className="privacy-section-head">
              <span className="privacy-section-num">02</span>
              <span className="privacy-section-icon">💬</span>
              <h2 className="privacy-section-title">Comments</h2>
            </div>
            <p className="privacy-text">
              When visitors leave comments on the site, we collect the data shown in
              the comments form, as well as the visitor's IP address and browser user
              agent string to help with spam detection.
            </p>
            <div className="privacy-callout">
              <p>
                An anonymised string created from your email address (also called a
                hash) may be provided to the Gravatar service to see if you are using
                it. The Gravatar service privacy policy is available at{" "}
                <a
                  href="https://automattic.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--cyan)" }}
                >
                  automattic.com/privacy
                </a>.
              </p>
              <p>
                After approval of your comment, your profile picture is visible to
                the public in the context of your comment.
              </p>
            </div>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 03 — Media
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-03">
            <div className="privacy-section-head">
              <span className="privacy-section-num">03</span>
              <span className="privacy-section-icon">🖼️</span>
              <h2 className="privacy-section-title">Media</h2>
            </div>
            <p className="privacy-text">
              If you upload images to the website, you should avoid uploading images
              with embedded location data (EXIF GPS) included.
            </p>
            <div className="privacy-callout">
              <p>
                Visitors to the website can download and extract any location data
                from images on the website. We recommend stripping all metadata from
                images before uploading to protect your privacy.
              </p>
            </div>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 04 — Cookies
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-04">
            <div className="privacy-section-head">
              <span className="privacy-section-num">04</span>
              <span className="privacy-section-icon">🍪</span>
              <h2 className="privacy-section-title">Cookies</h2>
            </div>
            <p className="privacy-text">
              If you leave a comment on our site, you may opt-in to saving your name,
              email address, and website in cookies. These are for your convenience so
              that you do not have to fill in your details again when you leave another
              comment.
            </p>

            {/* Cookie duration table */}
            <table className="privacy-cookie-table">
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Comment cookie</td>
                  <td>Saves name, email & website for future comments</td>
                  <td>1 Year</td>
                </tr>
                <tr>
                  <td>Login check cookie</td>
                  <td>Determines if browser accepts cookies</td>
                  <td>Session only</td>
                </tr>
                <tr>
                  <td>Login session cookie</td>
                  <td>Saves login information &amp; screen display choices</td>
                  <td>2 Days</td>
                </tr>
                <tr>
                  <td>Screen options cookie</td>
                  <td>Stores screen display preferences</td>
                  <td>1 Year</td>
                </tr>
                <tr>
                  <td>"Remember Me" cookie</td>
                  <td>Keeps login persistent if selected</td>
                  <td>2 Weeks</td>
                </tr>
                <tr>
                  <td>Article edit cookie</td>
                  <td>Indicates the post ID of the last edited article</td>
                  <td>1 Day</td>
                </tr>
              </tbody>
            </table>

            <p className="privacy-text">
              If you visit our login page, we will set a temporary cookie to determine
              if your browser accepts cookies. This cookie contains no personal data
              and is discarded when you close your browser.
            </p>
            <p className="privacy-text">
              When you log in, we will also set up several cookies to save your login
              information and your screen display choices. If you log out of your
              account, the login cookies will be removed.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 05 — Embedded Content
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-05">
            <div className="privacy-section-head">
              <span className="privacy-section-num">05</span>
              <span className="privacy-section-icon">📎</span>
              <h2 className="privacy-section-title">Embedded Content from Other Websites</h2>
            </div>
            <p className="privacy-text">
              Articles on this site may include embedded content — such as videos,
              images, and articles. Embedded content from other websites behaves in
              the exact same way as if the visitor has visited the other website
              directly.
            </p>
            <ul className="privacy-list amber">
              <li>
                These websites may collect data about you and use cookies.
              </li>
              <li>
                They may embed additional third-party tracking scripts.
              </li>
              <li>
                They may monitor your interaction with the embedded content,
                including if you have an account and are logged in.
              </li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 06 — Who We Share Data With
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-06">
            <div className="privacy-section-head">
              <span className="privacy-section-num">06</span>
              <span className="privacy-section-icon">🤝</span>
              <h2 className="privacy-section-title">Who We Share Your Data With</h2>
            </div>
            <p className="privacy-text">
              We do not sell or rent your personal information to third parties.
              We may share data only in the following circumstances:
            </p>
            <ul className="privacy-list">
              <li>
                If you request a password reset, your IP address will be included in
                the reset email.
              </li>
              <li>
                With trusted internship and placement partner companies — solely to
                facilitate student job placement and always with your consent.
              </li>
              <li>
                With service providers who assist in operating our website or
                conducting our business, under strict confidentiality agreements.
              </li>
              <li>
                When required by law or to protect the rights, property, or safety
                of NextGen Academy, our students, or the public.
              </li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 07 — How Long We Retain Data
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-07">
            <div className="privacy-section-head">
              <span className="privacy-section-num">07</span>
              <span className="privacy-section-icon">🗄️</span>
              <h2 className="privacy-section-title">How Long We Retain Your Data</h2>
            </div>
            <p className="privacy-text">
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognise and approve any follow-up
              comments automatically instead of holding them in a moderation queue.
            </p>
            <div className="privacy-callout">
              <p>
                For users who register on our website (if any), we also store the
                personal information they provide in their user profile. All users
                can see, edit, or delete their personal information at any time
                (except they cannot change their username).
              </p>
              <p>
                Website administrators can also see and edit that information.
                Enquiry and admission form data is retained for a maximum of
                3 years or until you request deletion — whichever is sooner.
              </p>
            </div>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 08 — Your Rights
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-08">
            <div className="privacy-section-head">
              <span className="privacy-section-num">08</span>
              <span className="privacy-section-icon">⚖️</span>
              <h2 className="privacy-section-title">What Rights You Have Over Your Data</h2>
            </div>
            <p className="privacy-text">
              If you have an account on this site or have left comments, you can
              request to receive an exported file of the personal data we hold about
              you, including any data you have provided to us.
            </p>
            <ul className="privacy-list">
              <li>
                <strong style={{ color: "var(--white)" }}>Right of Access</strong> —
                Request a copy of all personal data we hold about you.
              </li>
              <li>
                <strong style={{ color: "var(--white)" }}>Right to Rectification</strong> —
                Request correction of any inaccurate or incomplete data.
              </li>
              <li>
                <strong style={{ color: "var(--white)" }}>Right to Erasure</strong> —
                Request that we erase any personal data we hold about you. This does not
                include data we are obliged to keep for administrative, legal, or security
                purposes.
              </li>
              <li>
                <strong style={{ color: "var(--white)" }}>Right to Opt Out</strong> —
                Unsubscribe from marketing communications at any time by contacting us
                or clicking "unsubscribe" in any email we send.
              </li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 09 — Where Data Is Sent
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-09">
            <div className="privacy-section-head">
              <span className="privacy-section-num">09</span>
              <span className="privacy-section-icon">🌐</span>
              <h2 className="privacy-section-title">Where Your Data Is Sent</h2>
            </div>
            <p className="privacy-text">
              Visitor comments may be checked through an automated spam detection
              service. All form data submitted through our website is stored on
              secured servers and is not transferred outside India except where
              required by the third-party services we use (e.g., Google Analytics,
              Meta Pixel, Gravatar).
            </p>
            <p className="privacy-text">
              We ensure that any third-party services we work with maintain
              appropriate levels of data protection in compliance with applicable
              privacy regulations.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 10 — Contact Us
          ════════════════════════════════════════════════ */}
          <div className="privacy-section" id="section-10">
            <div className="privacy-section-head">
              <span className="privacy-section-num">10</span>
              <span className="privacy-section-icon">📩</span>
              <h2 className="privacy-section-title">Contact Us</h2>
            </div>
            <p className="privacy-text">
              For any privacy-related queries, data requests, or concerns, please
              reach out to us directly. We aim to respond to all privacy inquiries
              within 5 business days.
            </p>
            <div className="privacy-contact-card">
              <div className="privacy-contact-icon">🛡️</div>
              <div className="privacy-contact-body">
                <h4>NextGen Academy — Privacy Team</h4>
                <p>
                  Thane West, Mumbai, Maharashtra, India.<br />
                  We're happy to answer any questions you have about how we handle
                  your personal data.
                </p>
                <div className="privacy-contact-links">
                  <a href="mailto:info@thenextgenacademy.co.in">
                    ✉️ info@thenextgenacademy.co.in
                  </a>
                  <a href="tel:8976509267">
                    📞 +91 89765 09267
                  </a>
                  <a
                    href="https://wa.me/918976509267"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
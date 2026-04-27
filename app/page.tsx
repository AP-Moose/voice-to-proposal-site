import VideoWithCTA from "./components/VideoWithCTA";

// ── YOUTUBE VIDEO ─────────────────────────────────────────────────────────────
// Upload renders/prolynk-v7.mp4 to YouTube → set Visibility: Unlisted
// Copy the video ID from: https://www.youtube.com/watch?v=VIDEO_ID_HERE
// The CTA button glows after 75% of the video is watched
const DEMO_VIDEO_ID = "Qr8zn1W6aSw";
// ──────────────────────────────────────────────────────────────────────────────

// ── BOOKING LINK ──────────────────────────────────────────────────────────────
const BOOKING_URL = "mailto:dave@prolynk.io?subject=Book%20Walkthrough%20for%20ProLynk%20Bid";
// ──────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Add the customer",
    body: "Name, email, and address. Takes seconds."
  },
  {
    num: "02",
    title: "Say the job",
    body: "Speak the scope out loud. AI builds the proposal."
  },
  {
    num: "03",
    title: "Review and send",
    body: "Check everything, then send with one tap."
  }
];

const values = [
  {
    headline: "Send proposals before you leave the job",
    body: "From walkthrough to sent proposal in under 2 minutes."
  },
  {
    headline: "Look professional instantly",
    body: "Clean, branded proposals every time. No templates to fiddle with."
  },
  {
    headline: "Win more jobs",
    body: "Fast follow-up signals reliability. Customers notice."
  }
];

const faq = [
  {
    question: "Do I need to be tech-savvy?",
    answer: "No, you just speak the job, review, and send."
  },
  {
    question: "Can I review everything before it is sent?",
    answer: "Yes, you see the proposal and email before anything goes out."
  }
];

export default function Home() {
  return (
    <main className="site-shell">

      {/* ── HERO + VIDEO ─────────────────────────────────────────────────────
          Mobile: headline stacked above video, CTA below
          Desktop: copy left, video + CTA right
          VideoWithCTA tracks playback and glows the button at 75% watched
      ─────────────────────────────────────────────────────────────────────── */}
      <section className="hero-split">
        <div className="hero-copy">
          <p className="eyebrow">ProLynk Bid — for contractors</p>
          <h1>Send the proposal before you leave the driveway.</h1>
          <p className="hero-subhead">
            Voice to proposal in under 2 minutes. No typing. No paperwork.
          </p>
        </div>
        <div className="hero-video">
          <VideoWithCTA videoId={DEMO_VIDEO_ID} bookingUrl={BOOKING_URL} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section steps-section" id="how-it-works">
        <div className="section-intro centered-intro">
          <p className="eyebrow">How it works</p>
          <h2>Three simple steps.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.num}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── VALUE PROPOSITION ── */}
      <section className="section value-section">
        <div className="value-grid">
          {values.map((v) => (
            <div className="value-card" key={v.headline}>
              <h3>{v.headline}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOOK WALKTHROUGH CTA ── */}
      <section className="section walkthrough-cta">
        <p className="eyebrow">Stop losing jobs while you're still typing</p>
        <h2>Try ProLynk Bid free.</h2>
        <p>No contracts. Built for contractors.</p>
        <a className="button button-dark" href={BOOKING_URL}>
          Book Your Walkthrough
        </a>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" id="faq">
        <div className="section-intro centered-intro">
          <p className="eyebrow">FAQ</p>
          <h2>Quick answers.</h2>
        </div>
        <div className="faq-grid">
          {faq.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ProLynk</span>
        <a href="/privacy" className="footer-link">Privacy</a>
      </footer>

    </main>
  );
}

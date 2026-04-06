// ─── CHANGES ──────────────────────────────────────────────────────────────────
// • Step cards: removed flip mechanic — simple static cards now
// • Page order: Demo video moved directly after hero (was below steps)
// • Video: wired for YouTube embed (more reliable than Loom)
//   → Set DEMO_VIDEO_ID below once you upload to YouTube (unlisted)
// • BOOKING_URL: swap in your scheduling link
// ──────────────────────────────────────────────────────────────────────────────

// ── YOUTUBE VIDEO ─────────────────────────────────────────────────────────────
// 1. Record in Loom, download the MP4
// 2. Upload to YouTube → Visibility: Unlisted
// 3. Copy the video ID from: https://www.youtube.com/watch?v=VIDEO_ID_HERE
// 4. Paste it below
const DEMO_VIDEO_ID = "YOUR_YOUTUBE_VIDEO_ID";
const DEMO_EMBED_URL = `https://www.youtube.com/embed/${DEMO_VIDEO_ID}?rel=0&modestbranding=1`;
// ──────────────────────────────────────────────────────────────────────────────

// ── BOOKING LINK ──────────────────────────────────────────────────────────────
// Replace with your Calendly / scheduling page URL
const BOOKING_URL = "mailto:dave@prolynk.io?subject=Book%20Walkthrough%20for%20AI%20Contractor%20System";
// ──────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Add the customer",
    body: "Name, email, and address — takes seconds."
  },
  {
    num: "02",
    title: "Say the job",
    body: "Speak the scope out loud. AI builds the proposal."
  },
  {
    num: "03",
    title: "Review & send",
    body: "Check everything, then send with one tap."
  }
];

const values = [
  {
    headline: "Send proposals 10x faster",
    body: "From site visit to sent proposal in under 60 seconds."
  },
  {
    headline: "Look professional instantly",
    body: "Clean, branded proposals every time — no templates to fiddle with."
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

      {/* ── HEADER ── */}
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">ACS</span>
          <div>
            <p className="eyebrow">AI Contractor System</p>
            <p className="brand-note">by <strong>ProLynk</strong> — practical quoting for busy contractors</p>
          </div>
        </div>
        <nav className="topnav" aria-label="Primary">
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
          <a className="button button-dark" href={BOOKING_URL}>
            Book Demo
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hero-centered">
        <p className="eyebrow">For busy contractors</p>
        <h1>Send professional job proposals in 60 seconds using your voice.</h1>
        <p className="hero-subhead">
          Close more jobs. No typing. No paperwork. No missed follow&#8209;ups.
        </p>
        <a className="button button-dark hero-cta" href="#demo">
          Watch 2&#8209;minute demo
        </a>
      </section>

      {/* ── DEMO VIDEO ── Placed directly after hero for validation flow */}
      {/* Replace DEMO_VIDEO_ID at the top of this file with your YouTube video ID */}
      <section className="section demo-section" id="demo">
        <div className="section-intro centered-intro">
          <p className="eyebrow">2-minute demo</p>
          <h2>See it in action.</h2>
          <p className="demo-caption">
            Watch how a contractor sends a professional proposal in under 60 seconds — no typing required.
          </p>
        </div>
        <div className="video-wrapper">
          <iframe
            src={DEMO_EMBED_URL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="AI Contractor System — voice to proposal demo"
          />
        </div>
      </section>

      {/* ── HOW IT WORKS ── Simple static cards */}
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
        <p className="eyebrow">Ready to see it for your jobs?</p>
        <h2>Book your walkthrough.</h2>
        <p>Pricing and setup details happen on the call — no surprises.</p>
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
        <span>© {new Date().getFullYear()} ProLynk &mdash; AI Contractor System</span>
        <a href="/privacy" className="footer-link">Privacy</a>
      </footer>

    </main>
  );
}

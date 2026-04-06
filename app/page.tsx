// ─── CHANGES ──────────────────────────────────────────────────────────────────
// • Steps: now use flip cards (tap to reveal product screenshot on back)
// • Brand: ProLynk attribution in nav, olive accent on value cards + steps
// • LOOM_VIDEO_ID constant at top — swap in your Loom share ID when ready
// • BOOKING_URL constant at top — swap in your scheduling link
// ──────────────────────────────────────────────────────────────────────────────

import StepCard from "./components/StepCard";

// ── LOOM VIDEO ────────────────────────────────────────────────────────────────
// Replace YOUR_LOOM_VIDEO_ID with the ID from your Loom share URL.
// Example: https://www.loom.com/share/abc123def456 → ID is "abc123def456"
const LOOM_VIDEO_ID = "YOUR_LOOM_VIDEO_ID";
// ──────────────────────────────────────────────────────────────────────────────

// ── BOOKING LINK ──────────────────────────────────────────────────────────────
// Replace with your Calendly / scheduling page URL
// Hint: links.booking.discovery in company-os/config/links.yml
const BOOKING_URL = "mailto:dave@prolynk.io?subject=Book%20Walkthrough%20for%20AI%20Contractor%20System";
// ──────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Add the customer",
    body: "Name, email, and address — takes seconds.",
    imgSrc: "/marketing-assets/product-customer-details.png",
    imgAlt: "Customer details screen"
  },
  {
    num: "02",
    title: "Say the job",
    body: "Speak the scope out loud. AI builds the proposal.",
    imgSrc: "/marketing-assets/product-scope-voice.png",
    imgAlt: "Voice capture screen"
  },
  {
    num: "03",
    title: "Review & send",
    body: "Check everything, then send with one tap.",
    imgSrc: "/marketing-assets/product-proposal-review.png",
    imgAlt: "Proposal review screen"
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

      {/* ── HEADER ── ProLynk attribution added to brand note */}
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
      <section className="hero hero-centered">
        <p className="eyebrow">For busy contractors</p>
        <h1>Send professional job proposals in 60 seconds using your voice.</h1>
        <p className="hero-subhead">
          Close more jobs. No typing. No paperwork. No missed follow&#8209;ups.
        </p>
        <a className="button button-dark hero-cta" href="#demo">
          Watch 2&#8209;minute demo
        </a>
      </section>

      {/* ── HOW IT WORKS ── Flip cards: front = step info, back = screenshot */}
      <section className="section steps-section" id="how-it-works">
        <div className="section-intro centered-intro">
          <p className="eyebrow">How it works</p>
          <h2>Three simple steps.</h2>
          <p className="steps-hint">Tap any card to see the screen.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <StepCard
              key={step.num}
              num={step.num}
              title={step.title}
              body={step.body}
              imgSrc={step.imgSrc}
              imgAlt={step.imgAlt}
            />
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

      {/* ── DEMO ── Loom embed */}
      <section className="section loom-section" id="demo">
        <div className="section-intro centered-intro">
          <p className="eyebrow">2-minute demo</p>
          <h2>See it in action.</h2>
          <p className="loom-caption">
            Watch how a contractor sends a professional proposal in under 60 seconds — no typing required.
          </p>
        </div>
        {/* Replace LOOM_VIDEO_ID at the top of this file with your Loom video ID */}
        <div className="loom-wrapper">
          <iframe
            src={`https://www.loom.com/embed/${LOOM_VIDEO_ID}`}
            frameBorder={0}
            allowFullScreen
            title="AI Contractor System — voice to proposal demo"
          />
        </div>
      </section>

      {/* ── WALKTHROUGH CTA ── */}
      <section className="section walkthrough-cta">
        <p className="eyebrow">Ready to see it for your jobs?</p>
        <h2>Book your walkthrough.</h2>
        <p>Pricing and setup details happen on the call — no surprises.</p>
        {/* Update BOOKING_URL at the top of this file */}
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

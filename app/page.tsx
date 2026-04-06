// ─── CHANGES FROM PREVIOUS VERSION ───────────────────────────────────────────
// • Hero: new headline + subheadline, single CTA that scrolls to #demo
// • Removed hero phone-frame visual (screenshots removed per requirement)
// • Steps section: centered intro + 3-col card grid
// • Added value proposition 3-column section (replaces old benefits list)
// • Demo section: replaced screenshot gallery with Loom embed
//   → Search for LOOM_VIDEO_ID below and swap in your real Loom share ID
// • CTA: "Book Your Walkthrough" (update BOOKING_URL to your scheduling link)
// • FAQ: trimmed to 2 items
// • Added simple footer
// • Removed: proof section, pricing section, pain strip, screenshot gallery
// • Nav: removed proof/pricing links
// ──────────────────────────────────────────────────────────────────────────────

// ── LOOM VIDEO ────────────────────────────────────────────────────────────────
// Replace YOUR_LOOM_VIDEO_ID with the ID from your Loom share URL.
// Example: https://www.loom.com/share/abc123def456 → ID is "abc123def456"
const LOOM_VIDEO_ID = "YOUR_LOOM_VIDEO_ID";
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

      {/* ── HEADER ── Removed proof/pricing nav links */}
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">ACS</span>
          <div>
            <p className="eyebrow">AI Contractor System</p>
            <p className="brand-note">Practical quoting and follow-up for busy contractors</p>
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

      {/* ── HERO ── New headline / subheadline / single CTA scrolling to #demo */}
      <section className="hero hero-centered">
        <p className="eyebrow">For busy contractors</p>
        <h1>Send professional job proposals in 60 seconds using your voice.</h1>
        <p className="hero-subhead">
          Close more jobs. No typing. No paperwork. No missed follow&#8209;ups.
        </p>
        {/* CTA scrolls to the Loom demo section below */}
        <a className="button button-dark hero-cta" href="#demo">
          Watch 2&#8209;minute demo
        </a>
      </section>

      {/* ── HOW IT WORKS ── 3 steps, minimal cards */}
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

      {/* ── VALUE PROPOSITION ── 3-column summary */}
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

      {/* ── DEMO ── Loom embed (swap in LOOM_VIDEO_ID above) */}
      <section className="section loom-section" id="demo">
        <div className="section-intro centered-intro">
          <p className="eyebrow">2-minute demo</p>
          <h2>See it in action.</h2>
          <p className="loom-caption">
            Watch how a contractor sends a professional proposal in under 60 seconds — no typing required.
          </p>
        </div>
        <div className="loom-wrapper">
          {/* Replace LOOM_VIDEO_ID at the top of this file with your actual Loom video ID */}
          <iframe
            src={`https://www.loom.com/embed/${LOOM_VIDEO_ID}`}
            frameBorder={0}
            allowFullScreen
            title="AI Contractor System — voice to proposal demo"
          />
        </div>
      </section>

      {/* ── BOOK WALKTHROUGH CTA ── */}
      <section className="section walkthrough-cta">
        <p className="eyebrow">Ready to see it for your jobs?</p>
        <h2>Book your walkthrough.</h2>
        <p>Pricing and setup details happen on the call — no surprises.</p>
        {/* Update BOOKING_URL at the top of this file */}
        <a className="button button-dark" href={BOOKING_URL}>
          Book Your Walkthrough
        </a>
      </section>

      {/* ── FAQ ── Trimmed to 2 items */}
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

      {/* ── FOOTER ── Simple: company name + privacy link */}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} AI Contractor System &mdash; prolynk.io</span>
        {/* Add your actual privacy policy URL when ready */}
        <a href="/privacy" className="footer-link">Privacy</a>
      </footer>

    </main>
  );
}

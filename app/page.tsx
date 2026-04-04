const workflowSteps = [
  {
    title: "Add the customer",
    body: "Name, email, address."
  },
  {
    title: "Say the job",
    body: "Speak it or type quick notes."
  },
  {
    title: "Review and send",
    body: "Check it, then send it."
  }
];

const benefits = [
  "Send quotes faster",
  "Review before you send",
  "Less typing"
];

const proofPoints = [
  "Customer entered",
  "Proposal created",
  "Email sent",
  "File saved"
];

const faq = [
  {
    question: "Do I need to be tech-savvy?",
    answer: "No. You speak the job, review it, and send."
  },
  {
    question: "Does this replace my current process?",
    answer: "No. It gives you a faster way to build and send proposals."
  },
  {
    question: "Can I review everything before it is sent?",
    answer: "Yes. The proposal and email are both shown before anything goes out."
  },
  {
    question: "Is this only for bigger teams?",
    answer: "No. It is built for owner-operators and small teams."
  }
];

const screenshots = [
  {
    src: "/marketing-assets/product-customer-details.png",
    label: "Add the customer",
    detail: "Name, email, address.",
    position: "top center"
  },
  {
    src: "/marketing-assets/product-scope-voice.png",
    label: "Say the job",
    detail: "Speak it or type it.",
    position: "top center"
  },
  {
    src: "/marketing-assets/product-proposal-review.png",
    label: "Review the proposal",
    detail: "Check the draft.",
    position: "center top"
  },
  {
    src: "/marketing-assets/product-final-send-check.png",
    label: "Check the send",
    detail: "Review the email too.",
    position: "top center"
  },
  {
    src: "/marketing-assets/product-success-complete.png",
    label: "Done",
    detail: "Proposal made. File saved. Email sent.",
    position: "top center"
  }
];

export default function Home() {
  return (
    <main className="site-shell">
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
          <a href="#proof">Proof</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a className="button button-dark" href="mailto:dave@prolynk.io?subject=AI%20Contractor%20System%20Demo">
            Book Demo
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">For busy contractor teams</p>
          <h1>Send proposals 10x faster without typing.</h1>
          <p className="hero-text">
            Add the customer. Say the job. Review it. Send it.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Book%20AI%20Contractor%20System%20Demo">
              Book Demo
            </a>
            <a className="button button-light" href="#demo-strip">
              See Workflow
            </a>
          </div>
          <p className="trust-line">Built for busy contractors who want faster quotes, not more software.</p>
        </div>

        <div className="hero-visual">
          <div className="phone-stage">
            <div className="phone-frame phone-frame-front">
              <img src="/marketing-assets/product-proposal-review.png" alt="Proposal review screen from the AI Contractor System" />
            </div>
            <div className="phone-frame phone-frame-back">
              <img src="/marketing-assets/product-customer-details.png" alt="Customer details screen from the AI Contractor System" />
            </div>
          </div>
        </div>
      </section>

      <section className="pain-strip">
        <p>Slow quotes. Late follow-up. Jobs slipping through the cracks.</p>
      </section>

      <section className="section section-grid" id="how-it-works">
        <div className="section-intro">
          <p className="eyebrow">How it works</p>
          <h2>Three simple steps.</h2>
          <p>The proposal gets ready while the job is still fresh.</p>
        </div>
        <div className="workflow-list">
          {workflowSteps.map((step, index) => (
            <article className="workflow-item" key={step.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-grid">
        <div className="section-intro narrow">
          <p className="eyebrow">What you get</p>
          <h2>Less admin. Faster follow-up.</h2>
        </div>
        <ul className="benefits-list">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="section demo-strip" id="demo-strip">
        <div className="section-intro narrow">
          <p className="eyebrow">Quick demo</p>
          <h2>Real screens. Real flow.</h2>
        </div>
        <div className="demo-rail-header">
          <div className="demo-hint">
            <span className="demo-hint-chip">Swipe the screens</span>
          </div>
          <p className="demo-count">5 steps</p>
        </div>
        <div className="demo-scroller" aria-label="Voice-to-proposal screen walkthrough">
          <div className="demo-gallery">
            {screenshots.map((shot, index) => (
              <figure key={shot.label}>
                <div className="demo-step">{`Step ${index + 1}`}</div>
                <img src={shot.src} alt={shot.label} style={{ objectPosition: shot.position }} />
                <figcaption>
                  <strong>{shot.label}</strong>
                  <span>{shot.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="demo-cta">
          <div>
            <p className="eyebrow">See your version</p>
            <h3>Want this for your jobs?</h3>
            <p>Book a walkthrough and see how it would work for your workflow.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Book%20Demo%20for%20AI%20Contractor%20System">
              Book Demo
            </a>
            <a className="inline-link" href="#pricing">
              See pricing
            </a>
          </div>
        </div>
      </section>

      <section className="section proof-strip" id="proof">
        <div className="section-intro">
          <p className="eyebrow">Proof</p>
          <h2>It ends with a sent proposal.</h2>
          <p>The proposal is created, saved, and sent.</p>
        </div>
        <div className="proof-panel">
          <div className="proof-copy">
            <ul className="proof-list">
              {proofPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="proof-note">
              You see the proposal and the email before anything goes out.
            </p>
            <a className="inline-link" href="mailto:dave@prolynk.io?subject=Show%20Me%20The%20Workflow%20Live">
              See it live
            </a>
          </div>
          <div className="proof-shot">
            <img src="/marketing-assets/product-success-complete.png" alt="Completed send state showing proposal created, file saved, email sent, and next step complete" />
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="section-intro narrow">
          <p className="eyebrow">Pricing and walkthrough</p>
          <h2>Book a walkthrough. Get pricing.</h2>
          <p>This is a practical setup, not a bloated software package.</p>
          <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Pricing%20Request%20for%20AI%20Contractor%20System">
            Request Pricing
          </a>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-intro narrow">
          <p className="eyebrow">FAQ</p>
          <h2>Quick answers before the demo</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">Final call</p>
        <h2>If you can explain the job, you can send the proposal faster.</h2>
        <div className="hero-actions">
          <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Book%20Demo%20for%20AI%20Contractor%20System">
            Book Demo
          </a>
        </div>
      </section>
    </main>
  );
}

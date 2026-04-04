const workflowSteps = [
  {
    title: "Enter customer details",
    body: "Add the name, email, and address first."
  },
  {
    title: "Describe the work",
    body: "Speak the job or type quick notes."
  },
  {
    title: "Review and send",
    body: "Check the proposal and email, then send."
  }
];

const benefits = [
  "Send quotes faster",
  "Review before you send",
  "Send the proposal and email together",
  "Look more professional"
];

const offers = [
  {
    name: "AI Contractor System",
    promise: "Capture the job, review the send package, and move to the next customer faster."
  },
  {
    name: "Contractor Lead-Capture Website",
    promise: "Turn visitors into calls and estimate requests."
  },
  {
    name: "Contractor Follow-Up CRM",
    promise: "Keep every lead attached to a next step."
  },
  {
    name: "Voice Agent Add-On",
    promise: "Add optional intake, routing, and FAQ support later."
  }
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
    label: "Enter the customer name, email, and address",
    position: "top center"
  },
  {
    src: "/marketing-assets/product-scope-voice.png",
    label: "Describe the work the way you already talk about it",
    position: "top center"
  },
  {
    src: "/marketing-assets/product-proposal-review.png",
    label: "Review the finished proposal",
    position: "center top"
  },
  {
    src: "/marketing-assets/product-final-send-check.png",
    label: "Check the send package before it goes out",
    position: "top center"
  },
  {
    src: "/marketing-assets/product-success-complete.png",
    label: "Send it and move to the next customer",
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
            Add the customer. Speak the job. Review it. Send it.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Book%20AI%20Contractor%20System%20Demo">
              Book Demo
            </a>
            <a className="button button-light" href="#demo-strip">
              See Workflow
            </a>
          </div>
          <p className="trust-line">Built for contractors who want faster quotes, not more software.</p>
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
          <h2>Name. Job. Review. Send.</h2>
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
          <p className="eyebrow">Why it helps</p>
          <h2>Faster quotes. Less chasing.</h2>
        </div>
        <ul className="benefits-list">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="section audience">
        <div className="section-intro narrow">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2>Built for owner-operators and small teams.</h2>
          <p>If you sell jobs, walk sites, and still need to send proposals fast, this is for you.</p>
        </div>
      </section>

      <section className="section demo-strip" id="demo-strip">
        <div className="section-intro narrow">
          <p className="eyebrow">Quick demo</p>
          <h2>Real screens. Real flow.</h2>
        </div>
        <div className="demo-hint" aria-label="Swipe hint">
          <span className="demo-hint-chip">Swipe anywhere on the screens to follow the workflow</span>
        </div>
        <div className="demo-gallery">
          {screenshots.map((shot) => (
            <figure key={shot.label}>
              <img src={shot.src} alt={shot.label} style={{ objectPosition: shot.position }} />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="demo-cta">
          <div>
            <p className="eyebrow">See your version</p>
            <h3>Want this set up for your workflow?</h3>
            <p>Book a walkthrough and see how it would work for your jobs and your proposal style.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Book%20Demo%20for%20AI%20Contractor%20System">
              Book Demo
            </a>
            <a className="button button-light" href="mailto:dave@prolynk.io?subject=Send%20Me%20More%20Details%20on%20AI%20Contractor%20System">
              Email Questions
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
            <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Show%20Me%20The%20Workflow%20Live">
              See It Live
            </a>
          </div>
          <div className="proof-shot">
            <img src="/marketing-assets/product-success-complete.png" alt="Completed send state showing proposal created, file saved, email sent, and next step complete" />
          </div>
        </div>
      </section>

      <section className="section support-offers">
        <div className="section-intro">
          <p className="eyebrow">Ways to work together</p>
          <h2>Start here. Add support later.</h2>
          <p>The quoting workflow comes first. The other offers come after.</p>
        </div>
        <div className="offer-grid">
          {offers.map((offer, index) => (
            <article className={`offer-item ${index === 0 ? "offer-item-featured" : ""}`} key={offer.name}>
              <h3>{offer.name}</h3>
              <p>{offer.promise}</p>
            </article>
          ))}
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
          <h2>Common questions before the demo</h2>
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
          <a className="button button-light" href="#demo-strip">
            See Workflow
          </a>
        </div>
      </section>
    </main>
  );
}

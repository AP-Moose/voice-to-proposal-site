const workflowSteps = [
  {
    title: "Enter customer details",
    body: "Start with the customer name, email, and job address so the send package is ready from the beginning."
  },
  {
    title: "Describe the work",
    body: "Speak the scope from the field or type it in, then let the app turn rough notes into a customer-ready proposal."
  },
  {
    title: "Review and send",
    body: "Check the finished proposal and matching email before anything goes out, then send it while the lead is still warm."
  }
];

const benefits = [
  "Send proposals faster",
  "Review the proposal before it is sent",
  "Send a matching customer email without extra rewriting",
  "Look more professional to customers",
  "Create a repeatable quoting workflow"
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
  "Customer details captured",
  "Proposal created",
  "Email sent",
  "File saved"
];

const faq = [
  {
    question: "Do I need to be tech-savvy?",
    answer: "No. The workflow is built around speaking the job and reviewing the draft before you send it."
  },
  {
    question: "Does this replace my current process?",
    answer: "Not all at once. It is meant to simplify quoting and follow-up without forcing a heavy software change."
  },
  {
    question: "Can I review everything before it is sent?",
    answer: "Yes. The proposal and email are drafted for review first."
  },
  {
    question: "Is this only for bigger teams?",
    answer: "No. The core audience is owner-operators, estimators, and small contractor teams."
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
          <p className="eyebrow">Flagship offer for small contractor teams</p>
          <h1>Send proposals 10x faster without typing.</h1>
          <p className="hero-text">
            Enter the customer name and email, speak the work from the field, review the proposal and matching email, and send it before the job goes cold.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:dave@prolynk.io?subject=Book%20AI%20Contractor%20System%20Demo">
              Book Demo
            </a>
            <a className="button button-light" href="#demo-strip">
              See Workflow
            </a>
          </div>
          <p className="trust-line">Built for contractors who want a simpler workflow, not more software to manage or more admin to chase.</p>
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
          <h2>Simple workflow. No complicated software.</h2>
          <p>
            The goal is not more software. The goal is getting the send package ready while the customer still remembers the conversation.
          </p>
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

      <section className="section before-after">
        <div>
          <p className="eyebrow">Before</p>
          <h3>Voice notes, memory, and late-night typing</h3>
          <p>Job details get scattered across calls, notes, and texts. Proposals wait until the end of the day.</p>
        </div>
        <div>
          <p className="eyebrow">After</p>
          <h3>Customer basics, clean review, faster send</h3>
          <p>Capture the customer once, review the finished proposal and email, and send a more professional package while the job is still active.</p>
        </div>
      </section>

      <section className="section section-grid">
        <div className="section-intro narrow">
          <p className="eyebrow">What this helps you do</p>
          <h2>More speed. Less admin drag.</h2>
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
          <h2>Built for contractors who are busy, not techy.</h2>
          <p>
            Owner-operators, small teams, and busy estimators who need a practical quoting workflow that feels obvious on mobile.
          </p>
        </div>
      </section>

      <section className="section demo-strip" id="demo-strip">
        <div className="section-intro narrow">
          <p className="eyebrow">Quick demo</p>
          <h2>See the full voice-to-proposal flow in real screens.</h2>
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
            <h3>Want this mapped to your own quoting workflow?</h3>
            <p>
              Book a walkthrough and see how the same flow would look with your jobs, your proposal style, and your follow-up process.
            </p>
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
          <h2>It does not stop at draft generation.</h2>
          <p>
            The workflow ends in a completed next step: the proposal is created, the file is saved, the email is sent, and the job keeps moving.
          </p>
        </div>
        <div className="proof-panel">
          <div className="proof-copy">
            <ul className="proof-list">
              {proofPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="proof-note">
              Review-before-send is part of the product. Contractors can check the proposal and outgoing email before anything goes out.
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
          <h2>Start with the quoting workflow, then add support later.</h2>
          <p>The flagship stays first. The supporting services stay secondary until the workflow is in place.</p>
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
          <h2>Book a custom walkthrough and get pricing based on your workflow.</h2>
          <p>This is positioned as a practical implementation, not a bloated software package.</p>
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
        <h2>If you can explain the job, you can review and send the proposal faster.</h2>
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

const workflowSteps = [
  {
    title: "Speak the job",
    body: "Capture the job details while you are on-site instead of saving everything for later."
  },
  {
    title: "Review the draft",
    body: "Get a professional proposal and matching email draft you can check before anything goes out."
  },
  {
    title: "Send faster",
    body: "Keep momentum with a cleaner delivery and faster follow-up while the lead is still warm."
  }
];

const benefits = [
  "Send proposals faster",
  "Look more professional to customers",
  "Spend less time typing and rewriting",
  "Miss fewer follow-ups",
  "Create a repeatable quoting workflow"
];

const offers = [
  {
    name: "AI Contractor System",
    promise: "Send proposals faster without typing."
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
  },
  {
    name: "B2B Outbound Lead Gen System",
    promise: "Reach local commercial targets with a simple outbound system."
  },
  {
    name: "AI Audit",
    promise: "Get a paid strategy-first review before a larger buildout."
  }
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
    src: "/marketing-assets/product-initial.png",
    label: "Open the app and start the job"
  },
  {
    src: "/marketing-assets/product-customer-info.png",
    label: "Add customer details in seconds"
  },
  {
    src: "/marketing-assets/product-voice-input.png",
    label: "Capture the work details from the field"
  },
  {
    src: "/marketing-assets/product-proposal-draft.png",
    label: "Review the finished proposal draft"
  },
  {
    src: "/marketing-assets/product-email-draft.png",
    label: "Check the email before it goes out"
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
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a className="button button-dark" href="mailto:davesousa322@gmail.com?subject=AI%20Contractor%20System%20Demo">
            Book Demo
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Flagship offer for small contractor teams</p>
          <h1>Send proposals 10x faster without typing.</h1>
          <p className="hero-text">
            Speak job details into your phone, get a professional proposal drafted fast, and follow up before the job goes cold.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:davesousa322@gmail.com?subject=Book%20AI%20Contractor%20System%20Demo">
              Book Demo
            </a>
            <a className="button button-light" href="#demo-strip">
              Watch Quick Demo
            </a>
          </div>
          <p className="trust-line">Built for contractors who want a simpler workflow, not more software to manage.</p>
        </div>

        <div className="hero-visual">
          <div className="phone-stage">
            <div className="phone-frame phone-frame-front">
              <img src="/marketing-assets/product-proposal-draft.png" alt="Proposal draft screen from the AI Contractor System" />
            </div>
            <div className="phone-frame phone-frame-back">
              <img src="/marketing-assets/product-customer-info.png" alt="Customer info screen from the AI Contractor System" />
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
            The goal is not more software. The goal is getting quotes out faster while the customer still remembers the conversation.
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
          <h3>Fast draft, clean delivery, quicker follow-up</h3>
          <p>Capture the job once, review the draft, and send a more professional proposal while the job is still active.</p>
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
          <h2>See the voice-to-proposal flow in real screens.</h2>
        </div>
        <div className="demo-gallery">
          {screenshots.map((shot) => (
            <figure key={shot.label}>
              <img src={shot.src} alt={shot.label} />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section support-offers">
        <div className="section-intro">
          <p className="eyebrow">Ways to work together</p>
          <h2>Start with the system you need now, then add support later.</h2>
          <p>The flagship stays first. The supporting services are there when the workflow is ready for them.</p>
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
          <a className="button button-dark" href="mailto:davesousa322@gmail.com?subject=Pricing%20Request%20for%20AI%20Contractor%20System">
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
        <h2>If you can speak the job, you can send the proposal faster.</h2>
        <div className="hero-actions">
          <a className="button button-dark" href="mailto:davesousa322@gmail.com?subject=Book%20Demo%20for%20AI%20Contractor%20System">
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

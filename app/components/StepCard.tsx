"use client";
import { useState } from "react";

interface StepCardProps {
  num: string;
  title: string;
  body: string;
  imgSrc: string;
  imgAlt: string;
}

export default function StepCard({ num, title, body, imgSrc, imgAlt }: StepCardProps) {
  const [flipped, setFlipped] = useState(false);

  function toggle() {
    setFlipped((f) => !f);
  }

  return (
    <div
      className={`flip-card${flipped ? " flipped" : ""}`}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? `${title} — tap to go back` : `${title} — tap to see the screen`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="flip-inner">
        {/* Front: step info */}
        <article className="flip-front step-card">
          <span className="step-num">{num}</span>
          <h3>{title}</h3>
          <p>{body}</p>
          <span className="flip-hint" aria-hidden="true">See the screen →</span>
        </article>

        {/* Back: product screenshot */}
        <div className="flip-back">
          <img src={imgSrc} alt={imgAlt} />
          <div className="flip-back-label">
            <span>{title}</span>
            <span className="flip-back-return" aria-hidden="true">← Back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type ProcessStep = {
  title: string;
  description: string;
  decisionPoint: boolean;
};

const processSteps: ProcessStep[] = [
  {
    title: "Intake and Condition Logging",
    description:
      "We record watch model, current condition, and any reported symptoms at drop-off or courier intake.",
    decisionPoint: false
  },
  {
    title: "Diagnostic Inspection",
    description:
      "Movement performance and case integrity are checked to identify required and optional work.",
    decisionPoint: false
  },
  {
    title: "Quote and Approval",
    description:
      "You receive a detailed estimate with scope and timing. Work only proceeds after your confirmation.",
    decisionPoint: true
  },
  {
    title: "Service Execution",
    description:
      "Approved work is completed by the assigned technician using documented bench procedures.",
    decisionPoint: false
  },
  {
    title: "Quality Assurance and Pressure Test",
    description:
      "Timekeeping and function are verified; pressure testing is completed where applicable.",
    decisionPoint: false
  },
  {
    title: "Return and Handover Notes",
    description:
      "You receive your watch with summary notes, test outcomes, and warranty coverage details.",
    decisionPoint: false
  }
];

const qualityControls = [
  {
    title: "Bench Standards",
    body: "Anti-static handling and controlled work surfaces are used throughout disassembly and reassembly."
  },
  {
    title: "Component Documentation",
    body: "Key findings are logged at diagnostic stage to keep service scope transparent."
  },
  {
    title: "Timekeeping Verification",
    body: "Regulated watches are measured after service to confirm stable performance."
  },
  {
    title: "Seal and Pressure Validation",
    body: "Watches requiring seal work are pressure-tested where case design allows."
  }
];

const warrantyCards = [
  {
    title: "12-Month Service Warranty",
    body: "Covers workmanship and replaced service parts under normal use."
  },
  {
    title: "No Work Without Approval",
    body: "We never begin paid service tasks until estimate approval is received."
  },
  {
    title: "Post-Service Recheck Window",
    body: "If any covered issue appears after collection, we prioritise a recheck booking."
  }
];

export function ProcessPage() {
  return (
    <div className="process-page">
      <section className="section page-hero">
        <div className="container page-hero__inner">
          <p className="kicker">Service Process</p>
          <h1>A service workflow built for clarity and control</h1>
          <p>
            From intake to return, each stage is documented so you always know status, scope, and next
            steps.
          </p>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Timeline</p>
            <h2>How your watch moves through our workshop</h2>
            <p>
              Each stage has a defined objective, and approval checkpoints are clear before service work
              begins.
            </p>
          </header>

          <ol className="process-timeline" aria-label="Service timeline">
            {processSteps.map((step, index) => (
              <li key={step.title} className="process-timeline__item">
                <div className="process-timeline__top">
                  <span className="process-timeline__index">{String(index + 1).padStart(2, "0")}</span>
                  {step.decisionPoint ? (
                    <span className="process-timeline__decision" aria-label="Client decision point">
                      Approval required
                    </span>
                  ) : null}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Quality Controls</p>
            <h2>Checks that protect performance and handling quality</h2>
          </header>

          <div className="quality-grid">
            {qualityControls.map((item) => (
              <article key={item.title} className="quality-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Warranty and Guarantees</p>
            <h2>Service protections designed for confidence</h2>
          </header>

          <div className="warranty-grid">
            {warrantyCards.map((card) => (
              <article key={card.title} className="warranty-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <p className="section-note">
            Warranty does not cover accidental damage, water ingress from compromised external impacts, or
            unauthorised third-party work after return.
          </p>
        </div>
      </section>

    </div>
  );
}

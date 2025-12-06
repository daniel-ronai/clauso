export default function SafetyNetSection() {
  return (
    <section className="safety-section">
      <div className="safety-container">
        <h2 className="contract-section-header">Confidence or caution.</h2>
        <p className="contract-section-subheader">
          Our AI doesn't just analyze contracts, it knows when you need a real lawyer. We do not guess with your business at stake.
        </p>

        <div className="safety-grid">
          <div className="safety-card">
            <div className="safety-icon"></div>
            <h3 className="safety-card-title">Complexity Detection</h3>
            <p className="safety-card-description">
              When contracts involve regulatory compliance, IP transfers, or litigation clauses, our AI flags them for human review.
            </p>
            <div className="safety-example">
              <span className="example-label">Example Alert:</span>
              <p className="example-text">
                "⚠️ This contract includes intellectual property assignment clauses. We recommend consulting an IP attorney."
              </p>
            </div>
          </div>

          <div className="safety-card">
            <div className="safety-icon"></div>
            <h3 className="safety-card-title">Risk Threshold Alerts</h3>
            <p className="safety-card-description">
              If potential liability exceeds critical thresholds or involves major business decisions, we recommend professional legal counsel.
            </p>
            <div className="safety-example">
              <span className="example-label">Example Alert:</span>
              <p className="example-text">
                "⚠️ Total liability exposure: $500K+. This warrants review by a licensed attorney."
              </p>
            </div>
          </div>

          <div className="safety-card">
            <div className="safety-icon"></div>
            <h3 className="safety-card-title">Domain-Specific Recognition</h3>
            <p className="safety-card-description">
              Medical malpractice? Real estate transactions? M&A deals? Our AI recognizes when specialized expertise is required.
            </p>
            <div className="safety-example">
              <span className="example-label">Example Alert:</span>
              <p className="example-text">
                "⚠️ This appears to be a commercial lease agreement. Consider consulting a real estate attorney."
              </p>
            </div>
          </div>

          <div className="safety-card">
            <div className="safety-icon"></div>
            <h3 className="safety-card-title">Uncertainty Transparency</h3>
            <p className="safety-card-description">
              Unlike other AI tools, we tell you when we're not confident. No guessing with your business at stake.
            </p>
            <div className="safety-example">
              <span className="example-label">Example Alert:</span>
              <p className="example-text">
                "⚠️ This clause contains ambiguous language we cannot confidently interpret. Legal review recommended."
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
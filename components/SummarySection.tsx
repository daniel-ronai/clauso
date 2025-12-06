export default function SummarySection() {
  return (
    <section className="summary-section">
      <div className="summary-container">
        <h2 className="contract-section-header">Contracts. Decoded.</h2>
        <p className="contract-section-subheader">
          Cut through the legal jargon. Get what matters in seconds.
        </p>
        
        <div className="summary-box">
          <div className="summary-badge">AI Summary</div>
          <p className="summary-text">
            This is a standard service agreement with several high-risk clauses. Payment terms require $150,000 across four milestones with all fees being non-refundable regardless of completion or breach. The Provider operates on a best-efforts basis with no performance guarantees. Early termination by either party results in a 35% penalty on remaining contract value plus all incurred costs. The agreement includes a unilateral modification clause allowing Provider to change terms with 30 days notice. Provider retains perpetual rights to use client data for competing products. Client has 7-day review periods for deliverables and limited termination rights for material breach with pro-rata refunds.
          </p>
        </div>
      </div>
    </section>
  );
}
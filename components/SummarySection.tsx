export default function SummarySection() {
  return (
    <section className="summary-section">
      <div className="summary-container">
        <h2 className="contract-section-header">Contracts. Decoded.</h2>
        <p className="contract-section-subheader">
          Our AI reads the fine print, so you don't have to.
        </p>
        
        <div className="summary-box">
          <div className="summary-badge">AI Summary</div>
          <p className="summary-text">
            This $150,000 software development agreement contains significant financial risks. All payments are non-refundable regardless of Provider's performance or breach. Services are provided on a "best-efforts" basis with no guarantees. Terminating early costs 35% of remaining contract value. Provider can modify terms with 30 days' notice and may use your data to build competing products. Late payments trigger 24% APR interest and immediate service suspension.          </p>
        </div>
      </div>
    </section>
  );
}
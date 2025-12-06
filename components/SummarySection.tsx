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

      <style jsx>{`
        .summary-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          background: #fafafa;
        }

        .summary-container {
          max-width: 800px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
        }

        .summary-header {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -1.5px;
          color: #000;
          margin: 0;
        }

        .summary-subheader {
          font-size: 20px;
          color: #666;
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
        }

        .summary-box {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 40px;
          margin-top: 32px;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 20px rgba(0, 0, 0, 0.08);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .summary-box:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 8px 12px rgba(0, 0, 0, 0.08),
            0 16px 32px rgba(0, 0, 0, 0.12);
        }

        .summary-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .summary-text {
          font-size: 17px;
          line-height: 1.8;
          color: #333;
          margin: 0;
          text-align: left;
        }

        @media (max-width: 768px) {
          .summary-section {
            padding: 60px 20px;
          }

          .summary-header {
            font-size: 40px;
            letter-spacing: -1px;
          }

          .summary-subheader {
            font-size: 18px;
          }

          .summary-box {
            padding: 32px 24px;
            margin-top: 24px;
          }

          .summary-text {
            font-size: 16px;
            line-height: 1.7;
          }
        }
      `}</style>
    </section>
  );
}
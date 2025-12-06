export default function ContractSection() {
  return (
    <section className="contract-section">
      <div className="contract-container">
        {/* Floating Document */}
        <div className="contract-document-wrapper">
          {/* Stacked pages behind */}
          <div className="contract-page-stack contract-page-3"></div>
          <div className="contract-page-stack contract-page-2"></div>
          
          {/* Main visible document */}
          <div className="contract-floating-document">
            <div className="contract-document-header">
              <div className="contract-document-title">SERVICE AGREEMENT</div>
              <div className="contract-document-date">Effective Date: April 12, 2024</div>
            </div>
            
            <div className="contract-document-body">
<p className="contract-paragraph">
  This Professional Service Agreement ("Agreement") is entered into as of April 12, 2024 ("Effective Date") by and between Digital Solutions Provider LLC ("Provider") and the client identified below ("Client"). <span className="contract-highlight-yellow">By signing this Agreement, Client agrees to be bound by all terms herein and acknowledges that Provider may modify these terms upon thirty (30) days' written notice.</span> Provider shall provide software development, consulting, and technology implementation services as described herein.
</p>

<p className="contract-paragraph">
  Provider agrees to perform services on a <span className="contract-highlight-yellow">best-efforts basis without any guarantee of specific results or performance metrics</span> in three phases: Phase 1 (Requirements & Design) by January 15, 2026, Phase 2 (Development) by March 31, 2026, and Phase 3 (Testing & Deployment) by May 15, 2026. Deliverables include technical documentation, custom software with 15 functional modules, database architecture, API documentation, and training materials. <span className="contract-highlight-green">Client shall have the right to review and approve all major deliverables within seven (7) business days of delivery.</span> Any scope changes shall be billed at $250 per hour for senior developers and $175 per hour for junior developers.
</p>

<p className="contract-paragraph">
  Client agrees to pay $150,000 total: $45,000 upon execution, $37,500 upon Phase 1 completion, $37,500 upon Phase 2 completion, and $30,000 upon Phase 3 completion. <span className="contract-highlight-red">All fees paid are strictly non-refundable under any circumstances, including Provider's failure to complete Services, missed deadlines, or material breach.</span> Invoices are due within fifteen (15) days. <span className="contract-highlight-yellow">Late payments accrue 2% monthly interest (24% APR), and Provider may immediately suspend Services upon payment default exceeding five (5) days.</span> Client shall also reimburse Provider for all reasonable expenses including travel, software licenses, and third-party services. All payment disputes must be raised in writing within ten (10) days of invoice receipt or shall be deemed waived.
</p>

<p className="contract-paragraph">
  This Agreement runs from December 1, 2025 through May 15, 2026 unless earlier terminated. <span className="contract-highlight-red">Either Party may terminate upon thirty (30) days' notice, provided Client remains liable for all fees incurred plus 35% of remaining contract value and all Provider costs incurred in reliance on this Agreement.</span> <span className="contract-highlight-green">Client may terminate immediately for cause without penalty if Provider materially breaches and fails to cure within thirty (30) days of written notice, with entitlement to pro-rata refund of prepaid fees.</span>
</p>

<p className="contract-paragraph">
  Each Party agrees to maintain confidentiality of the other's business plans, financial information, customer lists, technical data, and trade secrets, and not disclose to third parties without prior written consent except as required by law. This obligation survives termination for five (5) years. <span className="contract-highlight-yellow">Provider retains perpetual rights to use anonymized or aggregated data derived from Client's information for Provider's business purposes including developing competing products.</span> <span className="contract-highlight-green">Client retains all ownership rights in Client's pre-existing data and materials provided to Provider.</span>
</p>

<p className="contract-paragraph">
  Provider makes no warranties, express or implied, regarding the Services. <span className="contract-highlight-yellow">Provider's total liability shall not exceed the fees paid by Client under this Agreement.</span> <span className="contract-highlight-red">Provider is not liable for any indirect, consequential, or special damages including lost profits, lost data, or business interruption, even if advised of such possibility.</span> This Agreement is governed by California law, and disputes shall be resolved in San Francisco County courts.
</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="contract-content-wrapper">
          <h2 className="contract-section-header">What You Get</h2>
          <p className="contract-section-subheader">
            Never sign another contract blindly. Know exactly what you're agreeing to.
          </p>
          <div className="contract-benefits-list">
            <div className="contract-benefit-item">
              <div className="contract-benefit-icon">✓</div>
              <div>
                <h3 className="contract-benefit-title">Risk Detection That Actually Works</h3>
                <p className="contract-benefit-description">
                  Instantly flags hidden liabilities, unfair terms, and financial traps buried in legal jargon
                </p>
              </div>
            </div>
            <div className="contract-benefit-item">
              <div className="contract-benefit-icon">✓</div>
              <div>
                <h3 className="contract-benefit-title">Executive Summaries in Seconds</h3>
                <p className="contract-benefit-description">
                  Get the key points, risks, and obligations without reading 50 pages of legalese
                </p>
              </div>
            </div>
            <div className="contract-benefit-item">
              <div className="contract-benefit-icon">✓</div>
              <div>
                <h3 className="contract-benefit-title">Protection From Costly Mistakes</h3>
                <p className="contract-benefit-description">
                  Catch non-refundable fees, termination penalties, and one-sided terms that could cost you thousands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
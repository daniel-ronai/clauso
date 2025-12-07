'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WaitlistPricingTables() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  const prices = {
    pro: { monthly: 39, annual: 31 },
    team: { monthly: 119, annual: 95 }
  };

  const handleJoinWaitlist = () => {
    router.push('/#join-waitlist');
  };

  return (
    <div className="waitlist-pricing-container">
      <div className="waitlist-cards-wrapper">
        {/* Starter Plan */}
        <div className="waitlist-pricing-card">
          <div className="waitlist-card-header">
            <span className="waitlist-active-badge">Active</span>
            <h3>Starter</h3>
            <p>For individuals testing the waters</p>
          </div>
          <div className="waitlist-price">
            <span className="waitlist-price-amount">$0</span>
          </div>
          <div className="waitlist-billing-info">Always free</div>
          <ul className="waitlist-features">
            <li>2 free contract analyses</li>
            <li>Basic risk flags</li>
            <li>Standard analysis</li>
            <li>7-day history</li>
          </ul>
          <button className="waitlist-cta-button" onClick={handleJoinWaitlist}>
            Join Waitlist
          </button>
        </div>

        {/* Pro Plan */}
        <div className="waitlist-pricing-card">
          <div className="waitlist-card-header">
            <h3>Professional</h3>
            <p>Most popular for solopreneurs</p>
          </div>
          <div className="waitlist-price">
            <span className="waitlist-price-amount">
              ${isAnnual ? prices.pro.annual : prices.pro.monthly}
            </span>
            <span className="waitlist-price-period">/month</span>
          </div>
          <div className="waitlist-toggle-container">
            <div 
              className={`waitlist-toggle-switch ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div className="waitlist-toggle-knob"></div>
            </div>
            <span className="waitlist-toggle-label">Billed annually</span>
          </div>
          <ul className="waitlist-features">
            <li>20 contracts per month</li>
            <li>Deep risk analysis</li>
            <li>Clause-by-clause breakdown</li>
            <li>Priority support</li>
          </ul>
          <button className="waitlist-cta-button" onClick={handleJoinWaitlist}>
            {isAnnual ? 'Join Waitlist' : 'Join Waitlist'}
          </button>
        </div>

        {/* Team Plan */}
        <div className="waitlist-pricing-card">
          <div className="waitlist-card-header">
            <h3>Business</h3>
            <p>For growing teams</p>
          </div>
          <div className="waitlist-price">
            <span className="waitlist-price-amount">
              ${isAnnual ? prices.team.annual : prices.team.monthly}
            </span>
            <span className="waitlist-price-period">/month</span>
          </div>
          <div className="waitlist-toggle-container">
            <div 
              className={`waitlist-toggle-switch ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div className="waitlist-toggle-knob"></div>
            </div>
            <span className="waitlist-toggle-label">Billed annually</span>
          </div>
          <ul className="waitlist-features">
            <li>100 contracts per month</li>
            <li>Multi-user access</li>
            <li>Custom risk thresholds</li>
            <li>Slack/API integration</li>
          </ul>
          <button className="waitlist-cta-button" onClick={handleJoinWaitlist}>
            {isAnnual ? 'Join Waitlist' : 'Join Waitlist'}
          </button>
        </div>
      </div>
    </div>
  );
}
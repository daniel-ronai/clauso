'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WaitlistPricingTables() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  const prices = {
    pro: { monthly: 29, annual: 19 },
    team: { monthly: 89, annual: 59 }
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
            <p>For testing the waters.</p>
          </div>
          <div className="waitlist-price">
            <span className="waitlist-price-amount">$0</span>
          </div>
          <div className="waitlist-billing-info">Always free</div>
          <ul className="waitlist-features">
            <li>10 Free Analyses</li>
            <li><span className='highlight-p-green'>Dashboard</span> Access</li>
            <li>Analysis History</li>
          </ul>
          <button className="waitlist-cta-button" onClick={handleJoinWaitlist}>
            Join Waitlist
          </button>
        </div>

        {/* Pro Plan */}
        <div className="waitlist-pricing-card">
          <div className="waitlist-card-header">
            <h3>Pro</h3>
            <p>For professionals.</p>
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
            <li><span className='highlight-p-green'>Unlimited</span> Analyses</li>
            <li>Export & Downloads</li>
            <li>Priority Support</li>
          </ul>
          <button className="waitlist-cta-button" onClick={handleJoinWaitlist}>
            {isAnnual ? 'Join Waitlist' : 'Join Waitlist'}
          </button>
        </div>

        {/* Team Plan */}
        <div className="waitlist-pricing-card">
          <div className="waitlist-card-header">
            <h3>Team</h3>
            <p>For growing businesses.</p>
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
            <li><span className='highlight-p-green'>Everything</span> in Pro</li>
            <li>Organization Dashboard</li>
            <li>Multi-user Access</li>
          </ul>
          <button className="waitlist-cta-button" onClick={handleJoinWaitlist}>
            {isAnnual ? 'Join Waitlist' : 'Join Waitlist'}
          </button>
        </div>
      </div>
    </div>
  );
}
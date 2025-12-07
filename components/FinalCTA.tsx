import React, { useState } from 'react';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    // Clear any previous messages
    setMessage('');
    setStatus('idle');

    // Validate email format
    if (!email || email.trim() === '') {
      setStatus('error');
      setMessage('Please enter an email address');
      return;
    }

    if (!isValidEmail(email.trim())) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        setIsLoading(false);
        return;
      }
      
      setStatus('success');
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <div className="final-cta-container">
      <h2 className="final-cta-heading">
        Stop signing blind.
      </h2>
      <p className="final-cta-subtext">
        Join the waitlist and be among the first to catch what others miss.
      </p>

      <div className="final-cta-form">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="final-cta-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.5 : 1,
            cursor: isLoading ? 'not-allowed' : 'text',
            boxShadow: isFocused ? '0 0 0 4px rgba(212, 175, 55, 0.15), 0 0 12px rgba(212, 175, 55, 0.25)' : 'none',
            transition: 'box-shadow 0.2s ease'
          }}
        />
        <button 
          className="final-cta-button"
          onClick={handleSubmit}
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.5 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>

      <p className="final-cta-footnote">
        Early access launching Februar 2026. First 5 users get lifetime discount.
      </p>

      {status !== 'idle' && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          border: status === 'success' ? '2px solid black' : '2px solid #ef4444',
          borderRadius: '8px',
          color: status === 'error' ? '#ef4444' : 'inherit',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default FinalCTA;
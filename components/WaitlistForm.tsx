import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Replace this with your actual API endpoint
    try {
      // fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      setStatus('success');
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '28rem', margin: '0 auto', padding: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid black',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>
            By joining the waitlist, you agree to our{' '}
            <a href="/terms-of-service" style={{ textDecoration: 'underline' }}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <button 
          onClick={handleSubmit}
          className="cta-button-primary"
        >
          Join Waitlist
        </button>

        {status !== 'idle' && (
          <div style={{
            padding: '1rem',
            border: status === 'success' ? '1px solid black' : '1px solid #ef4444',
            borderRadius: '0.375rem',
            color: status === 'error' ? '#ef4444' : 'inherit'
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <div style={{ width: '100%', maxWidth: '28rem', margin: '0 auto', padding: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid black',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              outline: 'none',
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? 'not-allowed' : 'text'
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
          disabled={isLoading}
          className="cta-button-primary"
          style={{
            opacity: isLoading ? 0.5 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Joining...' : 'Join Waitlist'}
        </button>

        {status !== 'idle' && (
          <div style={{
            padding: '1rem',
            border: status === 'success' ? '1px solid black' : '1px solid #ef4444',
            borderRadius: '0.375rem',
            color: status === 'error' ? '#ef4444' : 'inherit',
            fontSize: '0.875rem'
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
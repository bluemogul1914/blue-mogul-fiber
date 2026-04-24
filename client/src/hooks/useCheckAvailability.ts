import { useState } from 'react';

export type AvailabilityStatus = 'idle' | 'loading' | 'success' | 'error';

export interface CheckAvailabilityForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  plan?: string;
}

export function useCheckAvailability() {
  const [status, setStatus] = useState<AvailabilityStatus>('idle');
  const [message, setMessage] = useState('');
  const [pon, setPon] = useState('');

  async function checkAvailability(formData: CheckAvailabilityForm) {
    setStatus('loading');
    setMessage('');
    setPon('');

    try {
      const res = await fetch('/api/check-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message || "We received your request! A Blue Mogul rep will contact you within 1 business day.");
        setPon(data.pon || '');
      } else {
        setStatus('error');
        setMessage(data.message || 'Unable to check availability. Please call (346) 309-5514.');
      }
    } catch {
      setStatus('error');
      setMessage('Connection error. Please call (346) 309-5514.');
    }
  }

  function reset() {
    setStatus('idle');
    setMessage('');
    setPon('');
  }

  return { status, message, pon, checkAvailability, reset };
}

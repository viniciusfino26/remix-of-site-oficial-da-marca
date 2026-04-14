import { useState, useCallback } from 'react';

export function useRateLimit(maxAttempts: number = 3, windowMs: number = 60000) {
  const [attempts, setAttempts] = useState<number[]>([]);

  const checkLimit = useCallback((): boolean => {
    const now = Date.now();
    const recent = attempts.filter(t => now - t < windowMs);
    if (recent.length >= maxAttempts) return false;
    setAttempts([...recent, now]);
    return true;
  }, [attempts, maxAttempts, windowMs]);

  const remaining = maxAttempts - attempts.filter(t => Date.now() - t < windowMs).length;

  return { checkLimit, remaining };
}

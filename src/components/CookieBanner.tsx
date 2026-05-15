import { useState, useEffect } from 'react';
import { setTrackingConsent } from '@/lib/rdstation';

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('insulfilm_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    setTrackingConsent('accepted');
    setVisible(false);
  };

  const reject = () => {
    setTrackingConsent('rejected');
    setVisible(false);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg transition-transform duration-300"
      aria-hidden={!mounted || !visible}
      style={{ transform: mounted && visible ? 'translateY(0)' : 'translateY(100%)', pointerEvents: mounted && visible ? 'auto' : 'none' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Utilizamos cookies para melhorar sua experiência. Conforme a{' '}
          Lei 13.709/2018 (LGPD), você pode aceitar ou recusar.{' '}
          <a href="/privacidade" className="underline text-primary hover:text-primary/80">
            Política de Privacidade
          </a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}

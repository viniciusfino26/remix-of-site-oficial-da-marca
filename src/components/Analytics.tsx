import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ─── CONFIG ────────────────────────────────────────────────────────────────
const GTM_ID = 'GTM-XXXXXXX';
const GA4_ID = 'G-XXXXXXXXXX';
const CLARITY_ID = 'XXXXXXXXXX';
// ───────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}

function injectScripts() {
  if (typeof window === 'undefined') return;

  // ── Google Tag Manager ──────────────────────────────────────────────────
  if (!document.getElementById('gtm-script')) {
    window.dataLayer = window.dataLayer || [];

    const gtmScript = document.createElement('script');
    gtmScript.id = 'gtm-script';
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);

    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.prepend(noscript);
  }

  // ── GA4 direto (complementar ao GTM) ───────────────────────────────────
  if (!document.getElementById('ga4-script')) {
    const ga4Script = document.createElement('script');
    ga4Script.id = 'ga4-script';
    ga4Script.async = true;
    ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(ga4Script);

    window.gtag = function (...args: unknown[]) {
      window.dataLayer = window.dataLayer || [];
      (window.dataLayer as unknown[]).push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { send_page_view: false });
  }

  // ── Microsoft Clarity ───────────────────────────────────────────────────
  if (!document.getElementById('clarity-script')) {
    const clarityScript = document.createElement('script');
    clarityScript.id = 'clarity-script';
    clarityScript.async = true;
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");
    `;
    document.head.appendChild(clarityScript);
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...params });
  }
};

export const Analytics = {
  whatsappClick: (zona: string, produto?: string) =>
    trackEvent('whatsapp_click', { zona, produto, method: 'whatsapp' }),

  ctaClick: (label: string, page: string) =>
    trackEvent('cta_click', { label, page }),

  formSubmit: (formName: string) =>
    trackEvent('form_submit', { form_name: formName }),

  productView: (productName: string, category: string) =>
    trackEvent('view_item', { item_name: productName, item_category: category }),

  simulatorOpen: (simulatorName: string) =>
    trackEvent('simulator_open', { simulator_name: simulatorName }),

  storeLocatorClick: (unidade: string) =>
    trackEvent('store_locator_click', { store_name: unidade }),

  mapDirectionsClick: (unidade: string) =>
    trackEvent('directions_click', { store_name: unidade }),
};

const AnalyticsProvider = () => {
  const location = useLocation();

  useEffect(() => {
    injectScripts();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsProvider;

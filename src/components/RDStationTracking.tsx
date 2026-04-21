import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, hasConsent } from "@/lib/rdstation";

/**
 * RD Station Marketing — Loader global do script de rastreamento.
 *
 * - Injeta o script oficial somente após consentimento LGPD;
 * - Dispara pageviews automaticamente a cada mudança de rota (SPA);
 * - Reage à aceitação do banner de cookies (re-checagem leve);
 * - Token configurado via VITE_RD_STATION_TOKEN (build-time).
 */

// Token público do RD Station Marketing — exposto no HTML do loader oficial,
// portanto seguro para versionar no código (não é credencial sensível).
const RD_TOKEN =
  (import.meta.env.VITE_RD_STATION_TOKEN as string | undefined) ||
  "733b056b-078f-48e3-a869-f6fb92c9707e";
const SCRIPT_ID = "rd-station-loader";
const CONSENT_KEY = "insulfilm_cookie_consent";

const injectScript = () => {
  if (!RD_TOKEN) return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://d335luupugsy2.cloudfront.net/js/loader-scripts/${RD_TOKEN}-loader.js`;
  document.head.appendChild(script);
};

const RDStationTracking = () => {
  const { pathname, search } = useLocation();
  const [consentReady, setConsentReady] = useState<boolean>(() => hasConsent());

  // Carrega o script quando há consentimento
  useEffect(() => {
    if (!RD_TOKEN) return;
    if (!consentReady) return;
    injectScript();
  }, [consentReady]);

  // Observa aceitação do banner LGPD (storage + foco)
  useEffect(() => {
    const recheck = () => setConsentReady(hasConsent());
    window.addEventListener("storage", recheck);
    window.addEventListener("focus", recheck);
    const interval = window.setInterval(recheck, 2000);
    return () => {
      window.removeEventListener("storage", recheck);
      window.removeEventListener("focus", recheck);
      window.clearInterval(interval);
    };
  }, []);

  // Dispara pageview a cada mudança de rota
  useEffect(() => {
    if (!consentReady) return;
    // pequeno delay para garantir que o título/metadata da rota já foi atualizado
    const t = window.setTimeout(() => trackPageView(), 300);
    return () => window.clearTimeout(t);
  }, [pathname, search, consentReady]);

  return null;
};

export default RDStationTracking;
export { CONSENT_KEY };

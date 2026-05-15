import { useEffect, useState, useRef } from "react";
import { rdDebugBus, hasConsent, isRdLoaded, type RDDebugEvent } from "@/lib/rdstation";
import { Bug, X, Trash2, ChevronDown, ChevronUp, CheckCircle2, XCircle } from "lucide-react";

/**
 * RDDebugOverlay — Painel flutuante de debug do RD Station Marketing.
 *
 * Ativação:
 *  - URL: `?rd_debug=1` (ativa) / `?rd_debug=0` (desativa)
 *  - localStorage: `rd_debug = "1"`
 *
 * Mostra em tempo real: pageviews, conversões, eventos bloqueados (sem
 * consentimento LGPD) e erros. Não loga PII no console.
 */

const STORAGE_KEY = "rd_debug";
const MAX_EVENTS = 100;

const checkDebugFlag = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const qs = new URLSearchParams(window.location.search);
    const flag = qs.get("rd_debug");
    if (flag === "1") localStorage.setItem(STORAGE_KEY, "1");
    if (flag === "0") localStorage.removeItem(STORAGE_KEY);
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const formatTime = (ts: number) => {
  const d = new Date(ts);
  return d.toTimeString().slice(0, 8);
};

const statusStyles: Record<RDDebugEvent["status"], string> = {
  sent: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  blocked: "bg-muted/40 text-muted-foreground border-border",
  error: "bg-destructive/20 text-destructive border-destructive/40",
};

const kindStyles: Record<RDDebugEvent["kind"], string> = {
  pageview: "bg-sky-500/20 text-sky-300 border-sky-500/40",
  conversion: "bg-accent/20 text-accent border-accent/40",
};

const RDDebugOverlay = () => {
  const [active, setActive] = useState<boolean>(() => checkDebugFlag());
  const [events, setEvents] = useState<RDDebugEvent[]>([]);
  const [minimized, setMinimized] = useState(false);
  const [consent, setConsent] = useState(() => hasConsent());
  const [loaded, setLoaded] = useState(() => isRdLoaded());
  const listRef = useRef<HTMLDivElement>(null);

  // Re-checa flag em mudança de rota / popstate
  useEffect(() => {
    const recheck = () => setActive(checkDebugFlag());
    window.addEventListener("popstate", recheck);
    return () => window.removeEventListener("popstate", recheck);
  }, []);

  // Subscreve no bus
  useEffect(() => {
    if (!active) return;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<RDDebugEvent>).detail;
      setEvents((prev) => [detail, ...prev].slice(0, MAX_EVENTS));
    };
    rdDebugBus.addEventListener("rd", handler);
    return () => rdDebugBus.removeEventListener("rd", handler);
  }, [active]);

  // Status (consentimento + script)
  useEffect(() => {
    if (!active) return;
    const tick = () => {
      setConsent(hasConsent());
      setLoaded(isRdLoaded());
    };
    tick();
    const id = window.setInterval(tick, 1500);
    return () => window.clearInterval(id);
  }, [active]);

  if (!active) return null;

  const close = () => {
    localStorage.removeItem(STORAGE_KEY);
    setActive(false);
  };

  const counts = events.reduce(
    (acc, e) => {
      acc[e.kind]++;
      return acc;
    },
    { pageview: 0, conversion: 0 } as Record<RDDebugEvent["kind"], number>
  );

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl text-foreground font-mono text-xs"
      role="complementary"
      aria-label="RD Station Debug"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <Bug className="w-4 h-4 text-accent" />
          <span className="font-bold text-sm">RD Debug</span>
          <span className="text-muted-foreground">
            · {counts.pageview} PV · {counts.conversion} CV
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setEvents([])}
            className="p-1 rounded hover:bg-muted/40 transition-colors"
            title="Limpar"
            aria-label="Limpar eventos"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setMinimized((m) => !m)}
            className="p-1 rounded hover:bg-muted/40 transition-colors"
            title={minimized ? "Expandir" : "Minimizar"}
            aria-label={minimized ? "Expandir" : "Minimizar"}
          >
            {minimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={close}
            className="p-1 rounded hover:bg-destructive/20 transition-colors"
            title="Fechar (rd_debug=0)"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Status */}
          <div className="flex items-center gap-3 px-3 py-2 border-b border-border bg-muted/20">
            <span className="flex items-center gap-1">
              {consent ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <XCircle className="w-3.5 h-3.5 text-muted-foreground" />
              )}
              LGPD
            </span>
            <span className="flex items-center gap-1">
              {loaded ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <XCircle className="w-3.5 h-3.5 text-muted-foreground" />
              )}
              Script RD
            </span>
          </div>

          {/* Lista */}
          <div
            ref={listRef}
            className="max-h-[50vh] overflow-y-auto divide-y divide-border"
          >
            {events.length === 0 && (
              <div className="px-3 py-6 text-center text-muted-foreground">
                Aguardando eventos…
              </div>
            )}
            {events.map((ev, i) => (
              <details key={`${ev.ts}-${i}`} className="group">
                <summary className="cursor-pointer px-3 py-2 hover:bg-muted/30 list-none flex items-center gap-2">
                  <span className="text-muted-foreground tabular-nums">
                    {formatTime(ev.ts)}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded border uppercase text-[10px] font-bold ${kindStyles[ev.kind]}`}
                  >
                    {ev.kind === "pageview" ? "PV" : "CV"}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded border uppercase text-[10px] font-bold ${statusStyles[ev.status]}`}
                  >
                    {ev.status}
                  </span>
                  <span className="truncate flex-1 text-foreground">
                    {ev.identifier ??
                      (ev.url ? new URL(ev.url, window.location.origin).pathname : "—")}
                  </span>
                </summary>
                <pre className="px-3 pb-2 text-[10px] text-muted-foreground whitespace-pre-wrap break-all bg-muted/10">
{JSON.stringify(
  { url: ev.url, title: ev.title, payload: ev.payload, error: ev.error },
  null,
  2
)}
                </pre>
              </details>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-border text-[10px] text-muted-foreground">
            Desative com <code className="text-accent">?rd_debug=0</code> ou X.
          </div>
        </>
      )}
    </div>
  );
};

export default RDDebugOverlay;

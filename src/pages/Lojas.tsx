import { Helmet } from 'react-helmet-async';
import { useState, useMemo, useCallback } from 'react';
import arqNacionalBg from '@/assets/arq-nacional-bg.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import ParallaxBreak from '@/components/ParallaxBreak';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Building2, Car, ChevronRight, X, ExternalLink, Search, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Analytics, trackEvent } from '@/components/Analytics';
import { getCepZoneInfo, type CepZoneInfo } from '@/lib/cepZones';

// ─── DADOS DOS CENTROS AUTORIZADOS ──────────────────────────────────────────
const STORES = [
  {
    id: 'paulista',
    zone: 'Zona Central',
    zoneBadge: 'Av. Paulista · Bela Vista',
    name: 'Centro Autorizado Av. Paulista',
    address: 'Shopping Cidade São Paulo\nR. São Carlos do Pinhal, 627, Bela Vista, SP\nEstacionamento: 5º Subsolo',
    phone: null as string | null,
    phoneTel: null as string | null,
    whatsapp: 'https://wa.me/5511947721470?text=Olá!+Visitei+o+site+INSULFILM™+e+gostaria+de+maiores+informações.',
    whatsappNum: '(11) 94772-1470',
    maps: 'https://maps.app.goo.gl/D3q6jHM5BzFh8Xkj7',
    lat: -23.5614,
    lng: -46.6565,
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6565!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjAiUyA0NsKwMzknMjMuNCJX!5e0!3m2!1spt!2sbr!4v1700000000000',
    hours: [
      { days: 'Segunda à Sexta', time: '08h às 18h' },
      { days: 'Sábado', time: '09h às 15h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
    note: 'Estacionamento disponível no 5º Subsolo do shopping.',
  },
  {
    id: 'moema',
    zone: 'Zona Sul',
    zoneBadge: 'Moema',
    name: 'Centro Autorizado Moema',
    address: 'Av. Moreira Guimarães, 1.254\nMoema, São Paulo, SP',
    phone: '(11) 2626-0949',
    phoneTel: '+551126260949',
    whatsapp: 'https://wa.me/5511934313285?text=Olá!+Visitei+o+site+INSULFILM™+e+gostaria+de+maiores+informações.',
    whatsappNum: '(11) 93431-3285',
    maps: 'https://maps.app.goo.gl/p9SuG84D9a9Kdt5z5',
    lat: -23.6114,
    lng: -46.6658,
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6658!3d-23.6114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzQxLjAiUyA0NsKwMzknNTYuOSJX!5e0!3m2!1spt!2sbr!4v1700000000000',
    hours: [
      { days: 'Segunda à Sexta', time: '08h às 18h' },
      { days: 'Sábado', time: '09h às 15h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
    note: null as string | null,
  },
  {
    id: 'pacaembu',
    zone: 'Zona Oeste',
    zoneBadge: 'Pacaembu · Barra Funda',
    name: 'Centro Autorizado Pacaembu',
    address: 'Av. Pacaembu, 77\nBarra Funda, São Paulo, SP',
    phone: '(11) 4062-0098',
    phoneTel: '+551140620098',
    whatsapp: 'https://wa.me/5511965719291?text=Olá!+Visitei+o+site+INSULFILM™+e+gostaria+de+maiores+informações.',
    whatsappNum: '(11) 96571-9291',
    maps: 'https://maps.app.goo.gl/kp2ZXLpyx6VZhmF18',
    lat: -23.5279,
    lng: -46.6658,
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6658!3d-23.5279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzQwLjQiUyA0NsKwMzknNTYuOSJX!5e0!3m2!1spt!2sbr!4v1700000000000',
    hours: [
      { days: 'Segunda à Sexta', time: '08h às 18h' },
      { days: 'Sábado', time: '09h às 15h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
    note: null as string | null,
  },
  {
    id: 'santana',
    zone: 'Zona Norte',
    zoneBadge: 'Santana · Imirim',
    name: 'Centro Autorizado Santana',
    address: 'Av. Eng. Caetano Álvares, 5727\nImirim, São Paulo, SP',
    phone: '(11) 2122-4260',
    phoneTel: '+551121224260',
    whatsapp: 'https://wa.me/5511991774718?text=Olá!+Visitei+o+site+INSULFILM™+e+gostaria+de+maiores+informações.',
    whatsappNum: '(11) 99177-4718',
    maps: 'https://maps.app.goo.gl/hQVwpxD5bros7et19',
    lat: -23.4669,
    lng: -46.6367,
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6367!3d-23.4669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI4JzUxLjMiUyA0NsKwMzgnMTIuNiJX!5e0!3m2!1spt!2sbr!4v1700000000000',
    hours: [
      { days: 'Segunda à Sexta', time: '08h às 18h' },
      { days: 'Sábado', time: '09h às 15h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
    note: null as string | null,
  },
];

// ─── ANIMATIONS ───────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── HAVERSINE DISTANCE ──────────────────────────────────────────────────
function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── CEP SEARCH ──────────────────────────────────────────────────────────
interface CepSearchResult {
  coords: { lat: number; lng: number };
  zoneInfo: CepZoneInfo | null;
  precision: 'exact' | 'street' | 'prefix' | 'city';
  foundAddress: string;
}

interface CepSearchProps {
  onResult: (result: CepSearchResult | null) => void;
}

// ─── GEOCODING HELPERS ──────────────────────────────────────────────────
async function geocodeAwesomeApi(cep: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.lat && data?.lng) {
      return { lat: parseFloat(data.lat), lng: parseFloat(data.lng) };
    }
    return null;
  } catch {
    return null;
  }
}

async function geocodeBrasilApi(cep: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    if (!res.ok) return null;
    const data = await res.json();
    const lat = data?.location?.coordinates?.latitude;
    const lng = data?.location?.coordinates?.longitude;
    if (lat && lng) {
      return { lat: parseFloat(lat), lng: parseFloat(lng) };
    }
    return null;
  } catch {
    return null;
  }
}

async function geocodeNominatim(query: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=br`,
      { headers: { 'Accept-Language': 'pt-BR' } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
    return null;
  } catch {
    return null;
  }
}

const CepSearch = ({ onResult }: CepSearchProps) => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [foundAddress, setFoundAddress] = useState('');

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return digits;
  };

  const searchCep = useCallback(async () => {
    const digits = cep.replace(/\D/g, '');
    if (digits.length !== 8) {
      setError('Digite um CEP válido com 8 dígitos.');
      Analytics.cepSearchInvalid(digits.length);
      return;
    }

    const cepPrefix = digits.slice(0, 3);

    setLoading(true);
    setError('');
    setFoundAddress('');

    const emitSearchAnalytics = (
      result: CepSearchResult | null,
      status: 'success' | 'not_found' | 'error'
    ) => {
      let closestStore: string | null = null;
      let closestDistance: number | null = null;
      if (result) {
        const sorted = [...STORES]
          .map((s) => ({ id: s.id, dist: haversineKm(result.coords.lat, result.coords.lng, s.lat, s.lng) }))
          .sort((a, b) => a.dist - b.dist);
        closestStore = sorted[0].id;
        closestDistance = Math.round(sorted[0].dist * 10) / 10;
      }
      Analytics.cepSearch({
        cep_prefix: cepPrefix,
        status,
        precision: result?.precision,
        zone: result?.zoneInfo?.zone ?? null,
        recommended_store: result?.zoneInfo?.recommendedStoreId ?? null,
        closest_store: closestStore,
        closest_distance_km: closestDistance,
        results_count: result ? STORES.length : 0,
      });
    };

    try {
      // ESTRATÉGIA 1: Busca prefixo CEP (fallback infalível para SP capital)
      const zoneInfo = getCepZoneInfo(digits);

      // Busca dados do endereço via ViaCEP
      const viaCepRes = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const viaCepData = await viaCepRes.json();

      if (viaCepData.erro) {
        // CEP inválido, se for prefixo SP conhecido, usa mesmo assim
        if (zoneInfo) {
          const display = `Zona ${zoneInfo.zone} · ${zoneInfo.district}`;
          setFoundAddress(display);
          const result: CepSearchResult = {
            coords: { lat: zoneInfo.lat, lng: zoneInfo.lng },
            zoneInfo,
            precision: 'prefix',
            foundAddress: display,
          };
          onResult(result);
          emitSearchAnalytics(result, 'success');
          setLoading(false);
          return;
        }
        setError('CEP não encontrado. Verifique e tente novamente.');
        onResult(null);
        emitSearchAnalytics(null, 'not_found');
        setLoading(false);
        return;
      }

      const { logradouro, bairro, localidade, uf } = viaCepData;
      const displayAddress = bairro && localidade
        ? `${bairro}, ${localidade}/${uf}`
        : `${localidade}, ${uf}`;
      setFoundAddress(displayAddress);

      // ESTRATÉGIA 2: Geocoding em cascata (AwesomeAPI → BrasilAPI → Nominatim preciso)
      let coords: { lat: number; lng: number } | null = null;
      let precision: CepSearchResult['precision'] = 'city';

      // Tenta AwesomeAPI primeiro (CEP-específico, retorna lat/lng do CEP)
      coords = await geocodeAwesomeApi(digits);
      if (coords) precision = 'exact';

      // Tenta BrasilAPI
      if (!coords) {
        coords = await geocodeBrasilApi(digits);
        if (coords) precision = 'exact';
      }

      // Tenta Nominatim com query precisa: rua + bairro + cidade
      if (!coords && logradouro && bairro) {
        const preciseQuery = `${logradouro}, ${bairro}, ${localidade}, ${uf}, Brasil`;
        coords = await geocodeNominatim(preciseQuery);
        if (coords) precision = 'street';
      }

      // ESTRATÉGIA 3: Fallback infalível, usa prefixo CEP em vez do centro de SP
      if (!coords && zoneInfo) {
        coords = { lat: zoneInfo.lat, lng: zoneInfo.lng };
        precision = 'prefix';
      }

      // Último recurso: geocoding por cidade (para CEPs fora de SP capital)
      if (!coords) {
        coords = await geocodeNominatim(`${localidade}, ${uf}, Brasil`);
        precision = 'city';
      }

      if (coords) {
        const result: CepSearchResult = { coords, zoneInfo, precision, foundAddress: displayAddress };
        onResult(result);
        emitSearchAnalytics(result, 'success');
      } else {
        setError('Não foi possível localizar o endereço. Tente outro CEP.');
        onResult(null);
        emitSearchAnalytics(null, 'not_found');
      }
    } catch {
      setError('Erro na busca. Verifique sua conexão e tente novamente.');
      onResult(null);
      emitSearchAnalytics(null, 'error');
    } finally {
      setLoading(false);
    }
  }, [cep, onResult]);

  const clearSearch = () => {
    setCep('');
    setError('');
    setFoundAddress('');
    onResult(null);
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            inputMode="numeric"
            placeholder="Digite seu CEP (ex: 01310-100)"
            value={cep}
            onChange={(e) => { setCep(formatCep(e.target.value)); setError(''); }}
            onKeyDown={(e) => e.key === 'Enter' && searchCep()}
            className="pl-10 pr-4 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-xl focus:border-accent focus:ring-accent/20"
            maxLength={9}
          />
        </div>
        <Button
          onClick={searchCep}
          disabled={loading}
          className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-md hover:shadow-lg transition-all gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          Buscar
        </Button>
        {(foundAddress || error) && (
          <Button
            onClick={clearSearch}
            variant="outline"
            className="h-12 px-4 border-border/50 hover:border-accent/30 rounded-xl"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-destructive mt-2 font-medium"
          >
            {error}
          </motion.p>
        )}
        {foundAddress && !error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-accent mt-2 font-medium"
          >
            📍 Mostrando Centros Autorizados mais próximos de <span className="font-bold">{foundAddress}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── NAVIGATION PICKER ───────────────────────────────────────────────────
interface SearchContext {
  precision: CepSearchResult['precision'];
  zone: string | null;
  isRecommended: boolean;
  distance: number | null;
  position: number;
}

const NavigationPicker = ({ store, searchContext }: { store: typeof STORES[0]; searchContext?: SearchContext }) => {
  const [open, setOpen] = useState(false);
  const { lat, lng, name } = store;
  const encodedName = encodeURIComponent(`INSULFILM™ ${name}`);

  const GoogleMapsIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path fill="#34A853" d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" opacity=".15"/>
      <path fill="#1A73E8" d="M5.46 4.93C6.92 3.12 9.32 2 12 2c2.13 0 4.07.83 5.5 2.18L13.4 8.28a3.99 3.99 0 0 0-5.12.46L5.46 4.93z"/>
      <path fill="#EA4335" d="M5.46 4.93A7.97 7.97 0 0 0 4 10c0 1.49.42 2.99 1.07 4.43l3.21-3.21A4 4 0 0 1 8 10c0-1.04.4-2.07 1.18-2.85L5.46 4.93z"/>
      <path fill="#FBBC04" d="M12 14a4 4 0 0 1-3.72-2.78l-3.21 3.21C6.6 17.71 9.5 22 12 22V14z"/>
      <path fill="#34A853" d="M12 22c2.5 0 8-6.75 8-12 0-2.16-.86-4.13-2.25-5.57L13.4 8.28A4 4 0 0 1 16 10c0 2.43-2.39 5.97-4 8v4z"/>
    </svg>
  );
  const WazeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path fill="#33CCFF" d="M20.54 12.6c.61-1.32.79-2.86.36-4.42-.95-3.41-4.27-5.6-7.8-5.18C9.69 3.41 7 6.41 7 10v.83c0 .68-.21 1.34-.6 1.9l-1.16 1.65c-.6.85.01 2.02 1.05 2.02h.92a3.5 3.5 0 0 0 6.78 0h1.06a3.5 3.5 0 0 0 6.78 0c.84 0 1.45-.81 1.21-1.62l-.5-1.65a2 2 0 0 1-.01-1z"/>
      <circle cx="10" cy="9" r="1" fill="#fff"/>
      <circle cx="15" cy="9" r="1" fill="#fff"/>
      <path fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" d="M10.5 12c.4.6 1 1 1.5 1s1.1-.4 1.5-1"/>
      <circle cx="9" cy="18" r="1.5" fill="#1f2937"/>
      <circle cx="16" cy="18" r="1.5" fill="#1f2937"/>
    </svg>
  );
  const AppleMapsIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#F2F2F7"/>
      <path fill="#FF3B30" d="m12 5 2.2 4.6L19 11l-3.8 2.6L16 19l-4-2.8L8 19l.8-5.4L5 11l4.8-1.4z"/>
      <circle cx="12" cy="12" r="1.6" fill="#fff"/>
    </svg>
  );

  const navOptions = [
    { label: 'Google Maps', Icon: GoogleMapsIcon, url: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving` },
    { label: 'Waze', Icon: WazeIcon, url: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes&q=${encodedName}` },
    { label: 'Apple Maps', Icon: AppleMapsIcon, url: `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d&t=m` },
  ];

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="outline"
        className="w-full gap-2 text-xs border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all"
        onClick={() => setOpen(!open)}
      >
        <Navigation className="w-3.5 h-3.5" />
        Como chegar
      </Button>
      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute bottom-full left-0 right-0 mb-2 z-50 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-premium-lg overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Abrir com</span>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-0.5">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              {navOptions.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors text-sm text-foreground group"
                  onClick={() => {
                    setOpen(false);
                    Analytics.mapDirectionsClick(store.id);
                    Analytics.storeCardClick({
                      store_id: store.id,
                      zone: store.zone,
                      cta_type: 'map_provider',
                      map_provider: opt.label,
                      is_recommended: searchContext?.isRecommended,
                      distance_km: searchContext?.distance ?? null,
                      precision: searchContext?.precision,
                      search_zone: searchContext?.zone ?? null,
                      position_in_list: searchContext?.position,
                    });
                  }}
                >
                  <opt.Icon />
                  <span className="font-medium">{opt.label}</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── STORE CARD ───────────────────────────────────────────────────────────
const StoreCard = ({ store, index, searchContext }: { store: typeof STORES[0]; index: number; searchContext?: SearchContext }) => {
  const handleViewportEnter = () => {
    if (!searchContext) return;
    Analytics.storeCardView({
      store_id: store.id,
      zone: store.zone,
      is_recommended: searchContext.isRecommended,
      distance_km: searchContext.distance,
      precision: searchContext.precision,
      search_zone: searchContext.zone,
    });
  };
  return (
    <motion.div variants={fadeInUp} custom={index} onViewportEnter={handleViewportEnter} viewport={{ once: true, amount: 0.4 }}>
      <motion.div whileHover={{ y: -6, transition: { duration: 0.3 } }}>
        <Card className="overflow-hidden glass-card hover:border-accent/20 transition-all duration-300 rounded-xl group">
          {/* Accent stripe top */}
          <div className="accent-stripe" />

          {/* Map embed */}
          <div className="relative aspect-[2/1] overflow-hidden">
            <iframe
              src={store.embed}
              className="w-full h-full border-0 grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa ${store.name}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3">
              <Badge className="bg-accent/90 text-accent-foreground border-0 text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md">
                {store.zone}
              </Badge>
            </div>
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Header */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent mb-1.5">
                {store.zoneBadge}
              </p>
              <h3 className="text-xl font-extrabold text-foreground tracking-tight">{store.name}</h3>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* Address */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line pt-1">
                {store.address}
              </p>
            </div>

            {/* Note */}
            {store.note && (
              <div className="bg-accent/5 border border-accent/15 rounded-lg px-3 py-2.5">
                <p className="text-xs text-accent font-medium leading-relaxed">{store.note}</p>
              </div>
            )}

            {/* Hours */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div className="space-y-1 pt-1">
                {store.hours.map((h) => (
                  <div key={h.days} className="flex gap-2 text-sm">
                    <span className={`font-semibold ${h.days === 'Domingo' ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {h.days}
                    </span>
                    <span className={h.days === 'Domingo' ? 'text-muted-foreground' : 'text-muted-foreground'}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>


            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* CTA Buttons */}
            <div className="space-y-2.5">
              <a
                href={store.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  Analytics.whatsappClick(store.zone, 'geral');
                  Analytics.storeCardClick({
                    store_id: store.id,
                    zone: store.zone,
                    cta_type: 'whatsapp',
                    is_recommended: searchContext?.isRecommended,
                    distance_km: searchContext?.distance ?? null,
                    precision: searchContext?.precision,
                    search_zone: searchContext?.zone ?? null,
                    position_in_list: searchContext?.position,
                  });
                }}
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 shadow-md hover:shadow-lg transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Fale com um Especialista
                </Button>
              </a>

              <div className="flex gap-2">
                {store.phone && (
                  <a href={`tel:${store.phoneTel}`} className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-1.5 text-xs border-border/50 hover:border-accent/30 hover:bg-accent/5 transition-all"
                      onClick={() => {
                        Analytics.storeLocatorClick(store.id);
                        Analytics.storeCardClick({
                          store_id: store.id,
                          zone: store.zone,
                          cta_type: 'phone',
                          is_recommended: searchContext?.isRecommended,
                          distance_km: searchContext?.distance ?? null,
                          precision: searchContext?.precision,
                          search_zone: searchContext?.zone ?? null,
                          position_in_list: searchContext?.position,
                        });
                      }}
                    >
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      {store.phone}
                    </Button>
                  </a>
                )}
                <div className={store.phone ? 'flex-none' : 'flex-1'}>
                  <NavigationPicker store={store} searchContext={searchContext} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────
const Lojas = () => {
  const [searchResult, setSearchResult] = useState<CepSearchResult | null>(null);

  const sortedStores = useMemo(() => {
    if (!searchResult) return STORES;
    const { coords, zoneInfo } = searchResult;
    const withDistance = [...STORES]
      .map((s) => ({
        ...s,
        distance: haversineKm(coords.lat, coords.lng, s.lat, s.lng),
        isRecommended: zoneInfo?.recommendedStoreId === s.id,
      }))
      .sort((a, b) => {
        // Loja recomendada pela zona vem primeiro
        if (a.isRecommended && !b.isRecommended) return -1;
        if (!a.isRecommended && b.isRecommended) return 1;
        return a.distance - b.distance;
      });

    // Mostra a loja mais próxima/recomendada + qualquer outra dentro de 5km
    const closest = withDistance[0].distance;
    const NEARBY_THRESHOLD = 5; // km
    return withDistance.filter((s) => s.isRecommended || s.distance <= closest + NEARBY_THRESHOLD);
  }, [searchResult]);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Centros Autorizados INSULFILM™ | Encontre a Loja Mais Próxima</title>
        <meta name="description" content="Localize um Centro Autorizado INSULFILM™ no Brasil. Aplicação técnica, garantia original e atendimento especializado em películas para vidros." />
        <link rel="canonical" href="https://www.insulfilm.com.br/lojas" />
        <meta property="og:title" content="Centros Autorizados INSULFILM™" />
        <meta property="og:description" content="Encontre o Centro Autorizado INSULFILM™ mais próximo com atendimento especializado." />
        <meta property="og:url" content="https://www.insulfilm.com.br/lojas" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        {/* Glow effects */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.4em] text-accent mb-5 font-semibold">
              INSULFILM™, Centros Autorizados
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[0.95] tracking-tight mb-6">
              ONDE NOS<br />
              <span className="text-accent">ENCONTRAR</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light max-w-xl leading-relaxed">
              4 Centros Autorizados em São Paulo com atendimento especializado e consultores técnicos certificados.
            </motion.p>

            <motion.div variants={scaleIn} className="flex justify-start mt-6">
              <div className="separator-accent" />
            </motion.div>

            {/* Quick zone navigation */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mt-8">
              {STORES.map((store) => (
                <a
                  key={store.id}
                  href={`#${store.id}`}
                  onClick={() => {
                    Analytics.storeLocatorClick(store.id);
                    trackEvent('store_zone_chip_click', { zone: store.zone, store_id: store.id });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/70 hover:text-accent bg-primary-foreground/5 hover:bg-accent/10 px-4 py-2 rounded-full border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
                >
                  <MapPin className="w-3 h-3" />
                  {store.zone}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Arquitetônico Nacional */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={arqNacionalBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a0f1e]/65" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-5 items-start">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0 icon-ring-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Building2 className="w-8 h-8 text-accent" />
              </motion.div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-2">
                  Arquitetônico, Território Nacional
                </p>
                <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-2">
                  Películas para Residências e Empresas
                </h3>
                <p className="text-sm text-primary-foreground/70 max-w-md font-light leading-relaxed">
                  Atendemos projetos residenciais e comerciais em todo o Brasil. Fale com um especialista arquitetônico para consultoria e orçamento.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5511947721470?text=Olá!+Visitei+o+site+INSULFILM™+e+gostaria+de+informações+sobre+películas+arquitetônicas."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Analytics.whatsappClick('nacional', 'arquitetonico')}
            >
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 whitespace-nowrap shadow-md hover:shadow-lg transition-all px-8 py-6 text-base rounded-xl">
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CEP Search Bar */}
      <section className="relative z-20 py-8 md:py-12 border-b border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-lg font-bold text-foreground mb-1">Encontre o Centro Autorizado mais próximo</h2>
            <p className="text-sm text-muted-foreground mb-5 font-light">Digite seu CEP para ordenar por proximidade</p>
            <CepSearch onResult={setSearchResult} />
          </motion.div>
        </div>
      </section>

      {/* Store Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {searchResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-sm text-muted-foreground font-light mb-2">
                {sortedStores.length === 1
                  ? 'Centro Autorizado mais próximo de você:'
                  : `${sortedStores.length} Centros Autorizados próximos de você:`}
              </p>
              {searchResult.zoneInfo && (
                <p className="text-xs text-accent/80 font-medium mb-3">
                  Identificamos sua região como <span className="font-bold">Zona {searchResult.zoneInfo.zone}</span>
                  {searchResult.precision === 'prefix' && ' (localização aproximada por CEP)'}
                </p>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="text-accent hover:text-accent hover:bg-accent/10 text-xs"
                onClick={() => setSearchResult(null)}
              >
                Ver todos os Centros Autorizados
              </Button>
            </motion.div>
          )}
          <motion.div
            key={searchResult ? 'filtered' : 'all'}
            className={`grid gap-8 lg:gap-10 ${sortedStores.length === 1 ? 'max-w-xl mx-auto' : 'md:grid-cols-2'}`}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {sortedStores.map((store, i) => {
              const distance = 'distance' in store && typeof store.distance === 'number' ? store.distance : null;
              const isRecommended = 'isRecommended' in store && store.isRecommended === true;
              const searchContext: SearchContext | undefined = searchResult
                ? {
                    precision: searchResult.precision,
                    zone: searchResult.zoneInfo?.zone ?? null,
                    isRecommended,
                    distance,
                    position: i,
                  }
                : undefined;
              return (
                <div key={store.id} id={store.id} className="scroll-mt-24">
                  <StoreCard store={store} index={i} searchContext={searchContext} />
                  {distance !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 flex flex-wrap items-center justify-center gap-2"
                    >
                      {isRecommended && (
                        <span className="text-xs font-bold text-accent-foreground bg-accent px-3 py-1 rounded-full shadow-md">
                          ⭐ Recomendado para sua zona
                        </span>
                      )}
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        📍 ~{distance.toFixed(1)} km de você
                      </span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="25vh" stats={[
        { value: '4', label: 'Centros Autorizados' },
        { value: '6', label: 'Dias por Semana' },
        { value: 'Nacional', label: 'Arq. em todo Brasil' },
      ]} />


      <section className="py-16 md:py-24 bg-carbon-gradient border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">
              Quer ter o seu próprio Centro Autorizado?
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-5">
              TORNE-SE UM PARCEIRO OFICIAL
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/70 font-light max-w-lg mx-auto mb-4 leading-relaxed">
              Faça parte da maior rede de películas premium do Brasil. Suporte completo, treinamento e a força da marca mais reconhecida do setor.
            </motion.p>
            <motion.div variants={scaleIn} className="flex justify-center mb-10">
              <div className="separator-accent" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a
                href="https://forms.gle/21ALCzn4P2uCZah5A"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Analytics.ctaClick('Seja Parceiro', '/lojas')}
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 shadow-premium-lg hover:shadow-premium transition-all px-10 py-6 text-base rounded-xl">
                  <Car className="w-5 h-5" />
                  Quero Ser Aplicador Oficial
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Lojas;

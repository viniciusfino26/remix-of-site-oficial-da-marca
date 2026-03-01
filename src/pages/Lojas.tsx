import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxBreak from '@/components/ParallaxBreak';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Building2, Car, ChevronRight, Map, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Analytics } from '@/components/Analytics';

// ─── DADOS DAS LOJAS ──────────────────────────────────────────────────────
const STORES = [
  {
    id: 'pacaembu',
    zone: 'Zona Oeste',
    zoneBadge: 'Pacaembu · Barra Funda',
    name: 'Unidade Pacaembu',
    address: 'Av. Pacaembu, 77\nBarra Funda — São Paulo, SP',
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
    services: ['Películas Automotivas', 'PPF Phantom', 'Antivandalismo 13K', 'Consultoria Técnica'],
    color: 'from-orange-500/10 to-orange-600/5',
    accentColor: 'border-orange-500/30',
    note: null as string | null,
  },
  {
    id: 'santana',
    zone: 'Zona Norte',
    zoneBadge: 'Santana · Imirim',
    name: 'Unidade Santana',
    address: 'Av. Eng. Caetano Álvares, 5727\nImirim — São Paulo, SP',
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
    services: ['Películas Automotivas', 'PPF Phantom', 'Antivandalismo 13K', 'Consultoria Técnica'],
    color: 'from-blue-500/10 to-blue-600/5',
    accentColor: 'border-blue-500/30',
    note: null as string | null,
  },
  {
    id: 'paulista',
    zone: 'Zona Central',
    zoneBadge: 'Av. Paulista · Bela Vista',
    name: 'Unidade Av. Paulista',
    address: 'Shopping Cidade São Paulo\nR. São Carlos do Pinhal, 627 — Bela Vista, SP\nEstacionamento: 5º Subsolo',
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
    services: ['Películas Automotivas', 'PPF Phantom', 'Antivandalismo 13K', 'Consultoria Técnica'],
    color: 'from-purple-500/10 to-purple-600/5',
    accentColor: 'border-purple-500/30',
    note: 'Estacionamento disponível no 5º Subsolo do shopping.',
  },
  {
    id: 'moema',
    zone: 'Zona Sul',
    zoneBadge: 'Moema',
    name: 'Unidade Moema',
    address: 'Av. Moreira Guimarães, 1.254\nMoema — São Paulo, SP',
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
    services: ['Películas Automotivas', 'PPF Phantom', 'Antivandalismo 13K', 'Consultoria Técnica'],
    color: 'from-green-500/10 to-green-600/5',
    accentColor: 'border-green-500/30',
    note: null as string | null,
  },
];

// ─── ANIMATIONS ───────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const NavigationPicker = ({ store }: { store: typeof STORES[0] }) => {
  const [open, setOpen] = useState(false);
  const { lat, lng, name } = store;
  const encodedName = encodeURIComponent(`INSULFILM™ ${name}`);

  const navOptions = [
    {
      label: 'Google Maps',
      icon: '🗺️',
      url: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=&travelmode=driving`,
    },
    {
      label: 'Waze',
      icon: '🚗',
      url: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes&q=${encodedName}`,
    },
    {
      label: 'Apple Maps',
      icon: '🍎',
      url: `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d&t=m`,
    },
  ];

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="outline"
        className="w-full gap-1.5 text-xs"
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
              transition={{ duration: 0.15 }}
              className="absolute bottom-full left-0 right-0 mb-2 z-50 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-border">
                <span className="text-xs font-semibold text-muted-foreground">Abrir com:</span>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              {navOptions.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted/50 transition-colors text-sm text-foreground"
                  onClick={() => {
                    setOpen(false);
                    Analytics.mapDirectionsClick(store.id);
                  }}
                >
                  <span className="text-base">{opt.icon}</span>
                  {opt.label}
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
const StoreCard = ({ store }: { store: typeof STORES[0] }) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card className={`overflow-hidden bg-gradient-to-br ${store.color} border ${store.accentColor}`}>
        {/* Map embed */}
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <iframe
            src={store.embed}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${store.name}`}
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-foreground font-semibold text-xs">
              {store.zone}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
              {store.zoneBadge}
            </p>
            <h3 className="text-xl font-extrabold text-foreground">{store.name}</h3>
          </div>

          {/* Address */}
          <div className="flex gap-3 mb-4">
            <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {store.address}
            </p>
          </div>

          {/* Note (Paulista) */}
          {store.note && (
            <div className="bg-accent/10 border border-accent/15 rounded-lg px-3 py-2 mb-4">
              <p className="text-xs text-accent font-medium">{store.note}</p>
            </div>
          )}

          {/* Hours */}
          <div className="flex gap-3 mb-4">
            <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              {store.hours.map((h) => (
                <div key={h.days} className="flex gap-2 text-sm">
                  <span className={`font-medium ${h.days === 'Domingo' ? 'text-muted-foreground/50' : 'text-foreground'}`}>
                    {h.days}:
                  </span>
                  <span className={h.days === 'Domingo' ? 'text-muted-foreground/50' : 'text-muted-foreground'}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {store.services.map((s) => (
              <span key={s} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                {s}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2">
            <a
              href={store.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Analytics.whatsappClick(store.zone, 'geral')}
            >
              <Button
                size="sm"
                className="w-full bg-[hsl(142,72%,29%)] hover:bg-[hsl(142,72%,35%)] text-primary-foreground font-bold gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp {store.whatsappNum}
              </Button>
            </a>

            <div className="flex gap-2">
              {store.phone && (
                <a href={`tel:${store.phoneTel}`} className="flex-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-1.5 text-xs"
                    onClick={() => Analytics.storeLocatorClick(store.id)}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {store.phone}
                  </Button>
                </a>
              )}
              <div className={store.phone ? 'flex-none' : 'flex-1'}>
                <NavigationPicker store={store} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────
const Lojas = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-carbon-gradient overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-texture opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-semibold">
              INSULFILM™ — Lojas Oficiais
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[0.95] tracking-tight mb-6">
              4 UNIDADES<br />
              <span className="text-accent">EM SÃO PAULO</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light max-w-xl leading-relaxed">
              Atendimento especializado com consultores técnicos certificados. Encontre a unidade mais próxima e agende seu serviço.
            </motion.p>

            {/* Quick zone navigation */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
              {STORES.map((store) => (
                <a
                  key={store.id}
                  href={`#${store.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  {store.zone}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Store Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {STORES.map((store) => (
              <div key={store.id} id={store.id}>
                <StoreCard store={store} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxBreak minHeight="25vh" stats={[
        { value: '4', label: 'Unidades em SP' },
        { value: '6', label: 'Dias por Semana' },
        { value: 'Nacional', label: 'Arq. em todo Brasil' },
      ]} />

      {/* Arquitetônico Nacional */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-card to-muted/30 border border-border rounded-2xl p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                  Arquitetônico — Território Nacional
                </p>
                <h3 className="text-xl font-extrabold text-foreground mb-1">
                  Películas para Residências e Empresas
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
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
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 whitespace-nowrap">
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Parceiro */}
      <section className="py-16 bg-carbon-gradient border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-accent font-bold mb-3">
              Quer ter a sua própria unidade?
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              TORNE-SE UM PARCEIRO OFICIAL
            </h2>
            <p className="text-primary-foreground/50 font-light max-w-lg mx-auto mb-8">
              Faça parte da maior rede de películas premium do Brasil. Suporte completo, treinamento e a força da marca mais reconhecida do setor.
            </p>
            <a
              href="https://forms.gle/21ALCzn4P2uCZah5A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Analytics.ctaClick('Seja Parceiro', '/lojas')}
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                <Car className="w-4 h-4" />
                Quero Ser Aplicador Oficial
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Lojas;

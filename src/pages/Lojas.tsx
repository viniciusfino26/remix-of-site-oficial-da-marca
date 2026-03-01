import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxBreak from '@/components/ParallaxBreak';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Building2, Car, ChevronRight, X, ExternalLink } from 'lucide-react';
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

// ─── NAVIGATION PICKER ───────────────────────────────────────────────────
const NavigationPicker = ({ store }: { store: typeof STORES[0] }) => {
  const [open, setOpen] = useState(false);
  const { lat, lng, name } = store;
  const encodedName = encodeURIComponent(`INSULFILM™ ${name}`);

  const navOptions = [
    { label: 'Google Maps', icon: '🗺️', url: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving` },
    { label: 'Waze', icon: '🚗', url: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes&q=${encodedName}` },
    { label: 'Apple Maps', icon: '🍎', url: `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d&t=m` },
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
                  onClick={() => { setOpen(false); Analytics.mapDirectionsClick(store.id); }}
                >
                  <span className="text-base">{opt.icon}</span>
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
const StoreCard = ({ store, index }: { store: typeof STORES[0]; index: number }) => {
  return (
    <motion.div variants={fadeInUp} custom={index}>
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
                    <span className={`font-semibold ${h.days === 'Domingo' ? 'text-muted-foreground/40' : 'text-foreground'}`}>
                      {h.days}
                    </span>
                    <span className={h.days === 'Domingo' ? 'text-muted-foreground/40' : 'text-muted-foreground'}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-1.5">
              {store.services.map((s) => (
                <span key={s} className="text-[10px] uppercase tracking-wider font-semibold bg-primary/5 text-muted-foreground px-2.5 py-1 rounded-full border border-border/50">
                  {s}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* CTA Buttons */}
            <div className="space-y-2.5">
              <a
                href={store.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Analytics.whatsappClick(store.zone, 'geral')}
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
                      onClick={() => Analytics.storeLocatorClick(store.id)}
                    >
                      <Phone className="w-3.5 h-3.5 text-accent" />
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
    </motion.div>
  );
};

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────
const Lojas = () => {
  return (
    <main className="min-h-screen bg-background">
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
              INSULFILM™ — Lojas Oficiais
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[0.95] tracking-tight mb-6">
              ONDE NOS<br />
              <span className="text-accent">ENCONTRAR</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/60 font-light max-w-xl leading-relaxed">
              4 unidades em São Paulo com atendimento especializado e consultores técnicos certificados.
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
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/50 hover:text-accent bg-primary-foreground/5 hover:bg-accent/10 px-4 py-2 rounded-full border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
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

      {/* Store Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {STORES.map((store, i) => (
              <div key={store.id} id={store.id} className="scroll-mt-24">
                <StoreCard store={store} index={i} />
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
      <section className="py-16 md:py-24 bg-carbon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-texture" />
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
                  Arquitetônico — Território Nacional
                </p>
                <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-2">
                  Películas para Residências e Empresas
                </h3>
                <p className="text-sm text-primary-foreground/50 max-w-md font-light leading-relaxed">
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

      {/* CTA Parceiro */}
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
              Quer ter a sua própria unidade?
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-5">
              TORNE-SE UM PARCEIRO OFICIAL
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/50 font-light max-w-lg mx-auto mb-4 leading-relaxed">
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

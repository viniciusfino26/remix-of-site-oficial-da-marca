import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RDStationTracking from "./components/RDStationTracking";
import RDDebugOverlay from "./components/RDDebugOverlay";
import SchemaOrg from "./components/SchemaOrg";
import AnalyticsProvider from "./components/Analytics";

import WhatsAppButton from "./components/WhatsAppButton";
import FloatingCTA from "./components/FloatingCTA";
import PageNavigation from "./components/PageNavigation";
import { CookieBanner } from "./components/CookieBanner";

// A home é carregada de forma estática para garantir o first paint imediato
// na rota mais acessada. Todas as demais páginas usam code-splitting via
// React.lazy(), gerando um chunk sob demanda por rota.
import Index from "./pages/Index";

const MarcaSobre = lazy(() => import("./pages/MarcaSobre"));
const MarcaOQueE = lazy(() => import("./pages/MarcaOQueE"));
const MarcaRegistrada = lazy(() => import("./pages/MarcaRegistrada"));
const MarcaAutenticidade = lazy(() => import("./pages/MarcaAutenticidade"));
const MarcaTecnologia = lazy(() => import("./pages/MarcaTecnologia"));
const MarcaPresenca = lazy(() => import("./pages/MarcaPresenca"));
const MarcaHistoria = lazy(() => import("./pages/MarcaHistoria"));
const Automotivo = lazy(() => import("./pages/Automotivo"));
const Residencial = lazy(() => import("./pages/Residencial"));
const Lojas = lazy(() => import("./pages/Lojas"));
const Parceiro = lazy(() => import("./pages/Parceiro"));
const Franquias = lazy(() => import("./pages/Franquias"));
const Carreiras = lazy(() => import("./pages/Carreiras"));
const Frota = lazy(() => import("./pages/Frota"));
const Empresarial = lazy(() => import("./pages/Empresarial"));
const PhantomArquitetonico = lazy(() => import("./pages/PhantomArquitetonico"));
const Vendas = lazy(() => import("./pages/Vendas"));
const SAC = lazy(() => import("./pages/SAC"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Garantia = lazy(() => import("./pages/Garantia"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const SobreOQueEInsulfilm = lazy(() => import("./pages/SobreOQueEInsulfilm"));
const SobreInsulfilmMarcaRegistrada = lazy(() => import("./pages/SobreInsulfilmMarcaRegistrada"));
const LegalMarcaRegistrada = lazy(() => import("./pages/LegalMarcaRegistrada"));
const Legislacao = lazy(() => import("./pages/Legislacao"));

/* ── Hubs Automotivos ── */
const AutomotivoHubSolar = lazy(() => import("./pages/AutomotivoHubSolar"));
const AutomotivoHubSeguranca = lazy(() => import("./pages/AutomotivoHubSeguranca"));

/* ── PDPs Automotivo Solar ── */
const AutomotivoMatrix = lazy(() => import("./pages/AutomotivoMatrix"));
const AutomotivoPolariz = lazy(() => import("./pages/AutomotivoPolariz"));
const AutomotivoVip = lazy(() => import("./pages/AutomotivoVip"));
const AutomotivoEclipse = lazy(() => import("./pages/AutomotivoEclipse"));
const AutomotivoDark = lazy(() => import("./pages/AutomotivoDark"));

/* ── PDPs Automotivo Segurança ── */
const AutomotivoSkinSafe = lazy(() => import("./pages/AutomotivoSkinSafe"));
const AutomotivoAntivandalismo = lazy(() => import("./pages/AutomotivoAntivandalismo"));
const AutomotivoSkudoGuard = lazy(() => import("./pages/AutomotivoSkudoGuard"));
const AutomotivoSkudoUltra = lazy(() => import("./pages/AutomotivoSkudoUltra"));

/* ── Hub + PDP Automotivo PPF ── */
const AutomotivoHubPPF = lazy(() => import("./pages/AutomotivoHubPPF"));
const AutomotivoPhantomGloss = lazy(() => import("./pages/AutomotivoPhantomGloss"));

/* ── Hub + Hubs Arquitetônicos ── */
const Arquitetonico = lazy(() => import("./pages/Arquitetonico"));
const ArqHubSolar = lazy(() => import("./pages/ArqHubSolar"));
const ArqHubSeguranca = lazy(() => import("./pages/ArqHubSeguranca"));
const ArqHubDecorativo = lazy(() => import("./pages/ArqHubDecorativo"));

/* ── Hubs Segmentados — Residencial + Comercial ── */
const ArquitetonicoResidencial = lazy(() => import("./pages/ArquitetonicoResidencial"));
const ArquitetonicoComercial = lazy(() => import("./pages/ArquitetonicoComercial"));
const ArqResidencialHubSolar = lazy(() => import("./pages/ArqResidencialHubSolar"));
const ArqResidencialHubSeguranca = lazy(() => import("./pages/ArqResidencialHubSeguranca"));
const ArqResidencialHubDecorativo = lazy(() => import("./pages/ArqResidencialHubDecorativo"));
const ArqResidencialHubSPF = lazy(() => import("./pages/ArqResidencialHubSPF"));
const ArqComercialHubSolar = lazy(() => import("./pages/ArqComercialHubSolar"));
const ArqComercialHubSeguranca = lazy(() => import("./pages/ArqComercialHubSeguranca"));
const ArqComercialHubDecorativo = lazy(() => import("./pages/ArqComercialHubDecorativo"));
const ArqComercialHubSPF = lazy(() => import("./pages/ArqComercialHubSPF"));

/* ── PDP Automotivo Solar — Polariz (novo) ── */
const AutomotivoSolarPolariz = lazy(() => import("./pages/AutomotivoSolarPolariz"));

/* ── PDPs Unificadas (residencial + empresarial em uma URL) ── */
const Clear70Unified = lazy(() => import("./pages/products/Clear70"));
const Orizzonte70Unified = lazy(() => import("./pages/products/Orizzonte70"));
const NaturaleUnified = lazy(() => import("./pages/products/Naturale"));
const Ultravioletti90Unified = lazy(() => import("./pages/products/Ultravioletti90"));
const MetallicoArgentoUnified = lazy(() => import("./pages/products/MetallicoArgento"));
const SpecchiatoBronzoUnified = lazy(() => import("./pages/products/SpecchiatoBronzo"));
const PetrolioUnified = lazy(() => import("./pages/products/Petrolio"));
const GrigioInvertitoUnified = lazy(() => import("./pages/products/GrigioInvertito"));
const ReflessoDArgentoUnified = lazy(() => import("./pages/products/ReflessoDArgento"));
const PhantomGlossUnified = lazy(() => import("./pages/products/PhantomGloss"));
const PhantomMatteUnified = lazy(() => import("./pages/products/PhantomMatte"));

/* ── PDPs Arquitetônico Segurança ── */
const ArqSegurancaISSF4000 = lazy(() => import("./pages/ArqSegurancaISSF4000"));
const ArqSegurancaISSF7000 = lazy(() => import("./pages/ArqSegurancaISSF7000"));

/* ── PDPs Arquitetônico Segurança — Residencial ── */
const ArqResISSF4000 = lazy(() => import("./pages/arq/residencial/seguranca/ISSF4000"));
const ArqResISSF7000 = lazy(() => import("./pages/arq/residencial/seguranca/ISSF7000"));

/* ── PDPs Arquitetônico Segurança — Comercial ── */
const ArqComISSF4000 = lazy(() => import("./pages/arq/comercial/seguranca/ISSF4000"));
const ArqComISSF7000 = lazy(() => import("./pages/arq/comercial/seguranca/ISSF7000"));

/* ── PDPs Arquitetônico Decorativo ── */
const ArqDecorativoJateado = lazy(() => import("./pages/ArqDecorativoJateado"));
const ArqDecorativoWhiteout = lazy(() => import("./pages/ArqDecorativoWhiteout"));
const ArqDecorativoBlackout = lazy(() => import("./pages/ArqDecorativoBlackout"));

/* ── PDPs Arquitetônico Decorativo — Residencial ── */
const ArqResJateado = lazy(() => import("./pages/arq/residencial/decorativo/Jateado"));
const ArqResWhiteout = lazy(() => import("./pages/arq/residencial/decorativo/Whiteout"));
const ArqResBlackout = lazy(() => import("./pages/arq/residencial/decorativo/Blackout"));

/* ── PDPs Arquitetônico Decorativo — Comercial ── */
const ArqComJateado = lazy(() => import("./pages/arq/comercial/decorativo/Jateado"));
const ArqComWhiteout = lazy(() => import("./pages/arq/comercial/decorativo/Whiteout"));
const ArqComBlackout = lazy(() => import("./pages/arq/comercial/decorativo/Blackout"));

import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SchemaOrg />
        <AnalyticsProvider />
        <RDStationTracking />
        <RDDebugOverlay />
        <Header />
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ─── PDPs Unificadas (residencial + empresarial em uma URL) ─── */}
          {/* PR 1 — Clear70 piloto */}
          <Route path="/pt/arquitetonico/solar/clear70" element={<Clear70Unified />} />
          {/* PR-zero — Orizzonte70 (Premium tier, exemplar #2) */}
          <Route path="/pt/arquitetonico/solar/orizzonte70" element={<Orizzonte70Unified />} />
          {/* Batch 1 — 4 produtos Premium */}
          <Route path="/pt/arquitetonico/solar/naturale" element={<NaturaleUnified />} />
          <Route path="/pt/arquitetonico/solar/ultravioletti90" element={<Ultravioletti90Unified />} />
          <Route path="/pt/arquitetonico/solar/metallico-argento" element={<MetallicoArgentoUnified />} />
          <Route path="/pt/arquitetonico/solar/specchiato-bronzo" element={<SpecchiatoBronzoUnified />} />
          {/* Batch 2 — 3 produtos Performance */}
          <Route path="/pt/arquitetonico/solar/petrolio" element={<PetrolioUnified />} />
          <Route path="/pt/arquitetonico/solar/grigio-invertito" element={<GrigioInvertitoUnified />} />
          <Route path="/pt/arquitetonico/solar/reflesso-d-argento" element={<ReflessoDArgentoUnified />} />
          {/* Batch 3 — 2 produtos SPF (Surface Protection Film) — categoria nova */}
          <Route path="/pt/arquitetonico/spf/phantom-gloss" element={<PhantomGlossUnified />} />
          <Route path="/pt/arquitetonico/spf/phantom-matte" element={<PhantomMatteUnified />} />

          {/* Marca */}
          <Route path="/marca/sobre" element={<MarcaSobre />} />
          <Route path="/marca/o-que-e" element={<MarcaOQueE />} />
          <Route path="/marca/marca-registrada" element={<MarcaRegistrada />} />
          <Route path="/marca/autenticidade" element={<MarcaAutenticidade />} />
          <Route path="/marca/tecnologia" element={<MarcaTecnologia />} />
          <Route path="/marca/presenca" element={<MarcaPresenca />} />
          <Route path="/marca/historia" element={<MarcaHistoria />} />
          <Route path="/quem-somos" element={<Navigate to="/marca/sobre" replace />} />
          <Route path="/institucional" element={<Navigate to="/marca/sobre" replace />} />
          <Route path="/anti-pirataria" element={<Navigate to="/marca/autenticidade" replace />} />
          <Route path="/franquias" element={<Franquias />} />
          <Route path="/carreiras" element={<Carreiras />} />

          {/* Divisão Automotiva — Categoria */}
          <Route path="/automotivo" element={<Automotivo />} />
          <Route path="/frota" element={<Frota />} />
          <Route path="/ppf" element={<Navigate to="/automotivo/ppf" replace />} />

          {/* Divisão Automotiva — Hubs de Silo */}
          <Route path="/automotivo/solar" element={<AutomotivoHubSolar />} />
          <Route path="/automotivo/seguranca" element={<AutomotivoHubSeguranca />} />

          {/* Divisão Automotiva — PDPs Solar */}
          <Route path="/automotivo/solar/dark" element={<AutomotivoDark />} />
          <Route path="/automotivo/solar/eclipse" element={<AutomotivoEclipse />} />
          <Route path="/automotivo/solar/vip" element={<AutomotivoVip />} />
          <Route path="/automotivo/solar/polariz" element={<AutomotivoSolarPolariz />} />
          <Route path="/automotivo/solar/matrix" element={<AutomotivoMatrix />} />
          <Route path="/automotivo/solar/polariz-ultra" element={<AutomotivoPolariz />} />

          {/* Divisão Automotiva — PDPs Segurança */}
          <Route path="/automotivo/seguranca/skinsafe8k" element={<AutomotivoSkinSafe />} />
          <Route path="/automotivo/seguranca/antivandalismo13k" element={<AutomotivoAntivandalismo />} />
          <Route path="/automotivo/seguranca/skudoguard" element={<AutomotivoSkudoGuard />} />
          <Route path="/automotivo/seguranca/skudoultra" element={<AutomotivoSkudoUltra />} />

          {/* Divisão Automotiva — Hub + PDP PPF */}
          <Route path="/automotivo/ppf" element={<AutomotivoHubPPF />} />
          <Route path="/automotivo/ppf/phantom-gloss" element={<AutomotivoPhantomGloss />} />

          {/* Divisão Arquitetônica — Categorias */}
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/empresarial" element={<Empresarial />} />
          <Route path="/phantom-arquitetonico" element={<PhantomArquitetonico />} />

          {/* Divisão Arquitetônica — Hub Principal */}
          <Route path="/arquitetonico" element={<Arquitetonico />} />

          {/* Divisão Arquitetônica — Hubs Segmentados */}
          <Route path="/arquitetonico/residencial" element={<ArquitetonicoResidencial />} />
          <Route path="/arquitetonico/comercial" element={<ArquitetonicoComercial />} />

          {/* Divisão Arquitetônica — Hubs de Silo (legado, mantidos temporariamente) */}
          <Route path="/arquitetonico/solar" element={<Navigate to="/arquitetonico/residencial/solar" replace />} />
          <Route path="/arquitetonico/seguranca" element={<ArqHubSeguranca />} />
          <Route path="/arquitetonico/decorativo" element={<ArqHubDecorativo />} />

          {/* Divisão Arquitetônica — Residencial Hubs de Categoria */}
          <Route path="/arquitetonico/residencial/solar" element={<ArqResidencialHubSolar />} />
          <Route path="/arquitetonico/residencial/seguranca" element={<ArqResidencialHubSeguranca />} />
          <Route path="/arquitetonico/residencial/decorativo" element={<ArqResidencialHubDecorativo />} />
          <Route path="/arquitetonico/residencial/spf" element={<ArqResidencialHubSPF />} />

          {/* Divisão Arquitetônica — Comercial Hubs de Categoria */}
          <Route path="/arquitetonico/comercial/solar" element={<ArqComercialHubSolar />} />
          <Route path="/arquitetonico/comercial/seguranca" element={<ArqComercialHubSeguranca />} />
          <Route path="/arquitetonico/comercial/decorativo" element={<ArqComercialHubDecorativo />} />
          <Route path="/arquitetonico/comercial/spf" element={<ArqComercialHubSPF />} />

          {/* Divisão Arquitetônica — Residencial Solar PDPs */}
          {/* Clear70 unificada (PR 1) — antiga rota residencial agora redireciona */}
          <Route path="/arquitetonico/residencial/solar/clear70" element={<Navigate to="/pt/arquitetonico/solar/clear70" replace />} />
          <Route path="/arquitetonico/residencial/solar/orizzonte70" element={<Navigate to="/pt/arquitetonico/solar/orizzonte70" replace />} />
          <Route path="/arquitetonico/residencial/solar/ultravioletti90" element={<Navigate to="/pt/arquitetonico/solar/ultravioletti90" replace />} />
          <Route path="/arquitetonico/residencial/solar/naturale" element={<Navigate to="/pt/arquitetonico/solar/naturale" replace />} />
          <Route path="/arquitetonico/residencial/solar/petrolio" element={<Navigate to="/pt/arquitetonico/solar/petrolio" replace />} />
          <Route path="/arquitetonico/residencial/solar/grigio-invertito" element={<Navigate to="/pt/arquitetonico/solar/grigio-invertito" replace />} />
          <Route path="/arquitetonico/residencial/solar/metallico-argento" element={<Navigate to="/pt/arquitetonico/solar/metallico-argento" replace />} />
          <Route path="/arquitetonico/residencial/solar/reflesso-d-argento" element={<Navigate to="/pt/arquitetonico/solar/reflesso-d-argento" replace />} />
          <Route path="/arquitetonico/residencial/solar/specchiato-bronzo" element={<Navigate to="/pt/arquitetonico/solar/specchiato-bronzo" replace />} />

          {/* Divisão Arquitetônica — Comercial Solar */}
          <Route path="/arquitetonico/comercial/solar" element={<ArqHubSolar />} />
          {/* Clear70 unificada (PR 1) — antiga rota comercial agora redireciona */}
          <Route path="/arquitetonico/comercial/solar/clear70" element={<Navigate to="/pt/arquitetonico/solar/clear70" replace />} />
          <Route path="/arquitetonico/comercial/solar/orizzonte70" element={<Navigate to="/pt/arquitetonico/solar/orizzonte70" replace />} />
          <Route path="/arquitetonico/comercial/solar/ultravioletti90" element={<Navigate to="/pt/arquitetonico/solar/ultravioletti90" replace />} />
          <Route path="/arquitetonico/comercial/solar/naturale" element={<Navigate to="/pt/arquitetonico/solar/naturale" replace />} />
          <Route path="/arquitetonico/comercial/solar/petrolio" element={<Navigate to="/pt/arquitetonico/solar/petrolio" replace />} />
          <Route path="/arquitetonico/comercial/solar/grigio-invertito" element={<Navigate to="/pt/arquitetonico/solar/grigio-invertito" replace />} />
          <Route path="/arquitetonico/comercial/solar/metallico-argento" element={<Navigate to="/pt/arquitetonico/solar/metallico-argento" replace />} />
          <Route path="/arquitetonico/comercial/solar/reflesso-d-argento" element={<Navigate to="/pt/arquitetonico/solar/reflesso-d-argento" replace />} />
          <Route path="/arquitetonico/comercial/solar/specchiato-bronzo" element={<Navigate to="/pt/arquitetonico/solar/specchiato-bronzo" replace />} />

          {/* Redirects legado — PDPs Solar antigas → Residencial */}
          <Route path="/arquitetonico/solar/clear70" element={<Navigate to="/pt/arquitetonico/solar/clear70" replace />} />
          <Route path="/arquitetonico/solar/orizzonte70" element={<Navigate to="/pt/arquitetonico/solar/orizzonte70" replace />} />
          <Route path="/arquitetonico/solar/ultravioletti90" element={<Navigate to="/pt/arquitetonico/solar/ultravioletti90" replace />} />
          <Route path="/arquitetonico/solar/naturale" element={<Navigate to="/pt/arquitetonico/solar/naturale" replace />} />
          <Route path="/arquitetonico/solar/petrolio" element={<Navigate to="/pt/arquitetonico/solar/petrolio" replace />} />
          <Route path="/arquitetonico/solar/grigio-invertito" element={<Navigate to="/pt/arquitetonico/solar/grigio-invertito" replace />} />
          <Route path="/arquitetonico/solar/metallico-argento" element={<Navigate to="/pt/arquitetonico/solar/metallico-argento" replace />} />
          <Route path="/arquitetonico/solar/reflesso-d-argento" element={<Navigate to="/pt/arquitetonico/solar/reflesso-d-argento" replace />} />
          <Route path="/arquitetonico/solar/specchiato-bronzo" element={<Navigate to="/pt/arquitetonico/solar/specchiato-bronzo" replace />} />

          {/* Divisão Arquitetônica — PDPs Segurança (legado) */}
          <Route path="/arquitetonico/seguranca/issf4000" element={<ArqSegurancaISSF4000 />} />
          <Route path="/arquitetonico/seguranca/issf7000" element={<ArqSegurancaISSF7000 />} />

          {/* Divisão Arquitetônica — PDPs Segurança Residencial */}
          <Route path="/arquitetonico/residencial/seguranca/issf4000" element={<ArqResISSF4000 />} />
          <Route path="/arquitetonico/residencial/seguranca/issf7000" element={<ArqResISSF7000 />} />

          {/* Divisão Arquitetônica — PDPs Segurança Comercial */}
          <Route path="/arquitetonico/comercial/seguranca/issf4000" element={<ArqComISSF4000 />} />
          <Route path="/arquitetonico/comercial/seguranca/issf7000" element={<ArqComISSF7000 />} />

          {/* Divisão Arquitetônica — PDPs Decorativo (legado) */}
          <Route path="/arquitetonico/decorativo/jateado" element={<ArqDecorativoJateado />} />
          <Route path="/arquitetonico/decorativo/whiteout" element={<ArqDecorativoWhiteout />} />
          <Route path="/arquitetonico/decorativo/blackout" element={<ArqDecorativoBlackout />} />

          {/* Divisão Arquitetônica — PDPs Decorativo Residencial */}
          <Route path="/arquitetonico/residencial/decorativo/jateado" element={<ArqResJateado />} />
          <Route path="/arquitetonico/residencial/decorativo/whiteout" element={<ArqResWhiteout />} />
          <Route path="/arquitetonico/residencial/decorativo/blackout" element={<ArqResBlackout />} />

          {/* Divisão Arquitetônica — PDPs Decorativo Comercial */}
          <Route path="/arquitetonico/comercial/decorativo/jateado" element={<ArqComJateado />} />
          <Route path="/arquitetonico/comercial/decorativo/whiteout" element={<ArqComWhiteout />} />
          <Route path="/arquitetonico/comercial/decorativo/blackout" element={<ArqComBlackout />} />

          {/* Divisão Arquitetônica — PDPs SPF Residencial + Comercial */}
          <Route path="/arquitetonico/residencial/spf/phantom" element={<Navigate to="/pt/arquitetonico/spf/phantom-gloss" replace />} />
          <Route path="/arquitetonico/comercial/spf/phantom" element={<Navigate to="/pt/arquitetonico/spf/phantom-gloss" replace />} />

          {/* Divisão Arquitetônica — Phantom SPF (legado) */}
          <Route path="/arquitetonico/phantom-gloss" element={<Navigate to="/pt/arquitetonico/spf/phantom-gloss" replace />} />

          {/* Atendimento */}
          <Route path="/legislacao" element={<Legislacao />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/sac" element={<SAC />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/privacidade" element={<Privacidade />} />

          {/* Sobre — Blindagem Jurídica */}
          <Route path="/sobre/o-que-e-insulfilm" element={<SobreOQueEInsulfilm />} />
          <Route path="/sobre/insulfilm-marca-registrada" element={<SobreInsulfilmMarcaRegistrada />} />
          <Route path="/legal/marca-registrada" element={<LegalMarcaRegistrada />} />

          {/* Parceiro */}
          <Route path="/parceiro" element={<Parceiro />} />

          {/* ── Redirects legado (rotas flat → silos) ── */}
          <Route path="/matrix" element={<Navigate to="/automotivo/solar/matrix" replace />} />
          <Route path="/polariz-ultra" element={<Navigate to="/automotivo/solar/polariz-ultra" replace />} />
          <Route path="/vip" element={<Navigate to="/automotivo/solar/vip" replace />} />
          <Route path="/eclipse" element={<Navigate to="/automotivo/solar/eclipse" replace />} />
          <Route path="/dark" element={<Navigate to="/automotivo/solar/dark" replace />} />
          <Route path="/skinsafe8k" element={<Navigate to="/automotivo/seguranca/skinsafe8k" replace />} />
          <Route path="/antivandalismo13k" element={<Navigate to="/automotivo/seguranca/antivandalismo13k" replace />} />
          <Route path="/skudoguard" element={<Navigate to="/automotivo/seguranca/skudoguard" replace />} />
          <Route path="/skudo-ultra" element={<Navigate to="/automotivo/seguranca/skudoultra" replace />} />
          <Route path="/clear70" element={<Navigate to="/pt/arquitetonico/solar/clear70" replace />} />
          <Route path="/orizzonte70" element={<Navigate to="/pt/arquitetonico/solar/orizzonte70" replace />} />
          <Route path="/ultravioletti90" element={<Navigate to="/pt/arquitetonico/solar/ultravioletti90" replace />} />
          <Route path="/naturale" element={<Navigate to="/pt/arquitetonico/solar/naturale" replace />} />
          <Route path="/petrolio" element={<Navigate to="/pt/arquitetonico/solar/petrolio" replace />} />
          <Route path="/grigio-invertito" element={<Navigate to="/pt/arquitetonico/solar/grigio-invertito" replace />} />
          <Route path="/metallico-argento" element={<Navigate to="/pt/arquitetonico/solar/metallico-argento" replace />} />
          <Route path="/reflesso-dargento" element={<Navigate to="/pt/arquitetonico/solar/reflesso-d-argento" replace />} />
          <Route path="/specchiato-bronzo" element={<Navigate to="/pt/arquitetonico/solar/specchiato-bronzo" replace />} />
          <Route path="/aviso_legal" element={<Navigate to="/marca/autenticidade" replace />} />
          <Route path="/aviso-legal" element={<Navigate to="/marca/autenticidade" replace />} />
          <Route path="/automotivo/ppf/phantom-6mil" element={<Navigate to="/automotivo/ppf/phantom-gloss" replace />} />
          <Route path="/automotivo/ppf/phantom-8mil" element={<Navigate to="/automotivo/ppf/phantom-gloss" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
        <PageNavigation />
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

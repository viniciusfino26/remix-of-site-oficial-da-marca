import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
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

import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import MarcaSobre from "./pages/MarcaSobre";
import MarcaOQueE from "./pages/MarcaOQueE";
import MarcaRegistrada from "./pages/MarcaRegistrada";
import MarcaAutenticidade from "./pages/MarcaAutenticidade";
import MarcaTecnologia from "./pages/MarcaTecnologia";
import MarcaPresenca from "./pages/MarcaPresenca";
import MarcaHistoria from "./pages/MarcaHistoria";
import Automotivo from "./pages/Automotivo";
import Residencial from "./pages/Residencial";
import Lojas from "./pages/Lojas";
import Parceiro from "./pages/Parceiro";
import Franquias from "./pages/Franquias";
import Carreiras from "./pages/Carreiras";
import AntiPirataria from "./pages/AntiPirataria";
import Frota from "./pages/Frota";
import PPF from "./pages/PPF";
import Empresarial from "./pages/Empresarial";
import PhantomArquitetonico from "./pages/PhantomArquitetonico";
import Vendas from "./pages/Vendas";
import SAC from "./pages/SAC";
import FAQ from "./pages/FAQ";
import Garantia from "./pages/Garantia";
import NotFound from "./pages/NotFound";
import Privacidade from "./pages/Privacidade";
import SobreOQueEInsulfilm from "./pages/SobreOQueEInsulfilm";
import SobreInsulfilmMarcaRegistrada from "./pages/SobreInsulfilmMarcaRegistrada";
import LegalMarcaRegistrada from "./pages/LegalMarcaRegistrada";
import Legislacao from "./pages/Legislacao";

/* ── Hubs Automotivos ── */
import AutomotivoHubSolar from "./pages/AutomotivoHubSolar";
import AutomotivoHubSeguranca from "./pages/AutomotivoHubSeguranca";

/* ── PDPs Automotivo Solar ── */
import AutomotivoMatrix from "./pages/AutomotivoMatrix";
import AutomotivoPolariz from "./pages/AutomotivoPolariz";
import AutomotivoVip from "./pages/AutomotivoVip";
import AutomotivoEclipse from "./pages/AutomotivoEclipse";
import AutomotivoRayStart from "./pages/AutomotivoRayStart";
import AutomotivoRayPro from "./pages/AutomotivoRayPro";
import AutomotivoCarbon from "./pages/AutomotivoCarbon";

/* ── PDPs Automotivo Segurança ── */
import AutomotivoSkinSafe from "./pages/AutomotivoSkinSafe";
import AutomotivoAntivandalismo from "./pages/AutomotivoAntivandalismo";
import AutomotivoSkudoGuard from "./pages/AutomotivoSkudoGuard";
import AutomotivoSkudoUltra from "./pages/AutomotivoSkudoUltra";

/* ── Hub + PDP Automotivo PPF ── */
import AutomotivoHubPPF from "./pages/AutomotivoHubPPF";
import AutomotivoPhantomGloss from "./pages/AutomotivoPhantomGloss";

/* ── Hub + Hubs Arquitetônicos ── */
import Arquitetonico from "./pages/Arquitetonico";
import ArqHubSolar from "./pages/ArqHubSolar";
import ArqHubSeguranca from "./pages/ArqHubSeguranca";
import ArqHubDecorativo from "./pages/ArqHubDecorativo";

/* ── Hubs Segmentados — Residencial + Comercial ── */
import ArquitetonicoResidencial from "./pages/ArquitetonicoResidencial";
import ArquitetonicoComercial from "./pages/ArquitetonicoComercial";
import ArqResidencialHubSolar from "./pages/ArqResidencialHubSolar";
import ArqResidencialHubSeguranca from "./pages/ArqResidencialHubSeguranca";
import ArqResidencialHubDecorativo from "./pages/ArqResidencialHubDecorativo";
import ArqResidencialHubSPF from "./pages/ArqResidencialHubSPF";
import ArqComercialHubSolar from "./pages/ArqComercialHubSolar";
import ArqComercialHubSeguranca from "./pages/ArqComercialHubSeguranca";
import ArqComercialHubDecorativo from "./pages/ArqComercialHubDecorativo";
import ArqComercialHubSPF from "./pages/ArqComercialHubSPF";

/* ── PDP Automotivo Solar — Polariz (novo) ── */
import AutomotivoSolarPolariz from "./pages/AutomotivoSolarPolariz";

/* ── PDPs Arquitetônico Solar (legado — re-exports) ── */
import ArqClear70 from "./pages/ArqClear70";
import ArqOrizzonte from "./pages/ArqOrizzonte";
import ArqUV90 from "./pages/ArqUV90";
import ArqNaturale from "./pages/ArqNaturale";
import ArqPetrolio from "./pages/ArqPetrolio";
import ArqGrigio from "./pages/ArqGrigio";
import ArqMetallico from "./pages/ArqMetallico";
import ArqReflesso from "./pages/ArqReflesso";
import ArqSpecchiato from "./pages/ArqSpecchiato";

/* ── PDPs Arquitetônico Solar — Residencial ── */
import ArqResClear70 from "./pages/arq/residencial/solar/Clear70";
import ArqResOrizzonte70 from "./pages/arq/residencial/solar/Orizzonte70";
import ArqResUV90 from "./pages/arq/residencial/solar/Ultravioletti90";
import ArqResNaturale from "./pages/arq/residencial/solar/Naturale";
import ArqResPetrolio from "./pages/arq/residencial/solar/Petrolio";
import ArqResGrigio from "./pages/arq/residencial/solar/GrigioInvertito";
import ArqResMetallico from "./pages/arq/residencial/solar/MetallicoArgento";
import ArqResReflesso from "./pages/arq/residencial/solar/ReflessoDArgento";
import ArqResSpecchiato from "./pages/arq/residencial/solar/SpecchiatoBronzo";

/* ── PDPs Arquitetônico Solar — Comercial ── */
import ArqComClear70 from "./pages/arq/comercial/solar/Clear70";
import ArqComOrizzonte70 from "./pages/arq/comercial/solar/Orizzonte70";
import ArqComUV90 from "./pages/arq/comercial/solar/Ultravioletti90";
import ArqComNaturale from "./pages/arq/comercial/solar/Naturale";
import ArqComPetrolio from "./pages/arq/comercial/solar/Petrolio";
import ArqComGrigio from "./pages/arq/comercial/solar/GrigioInvertito";
import ArqComMetallico from "./pages/arq/comercial/solar/MetallicoArgento";
import ArqComReflesso from "./pages/arq/comercial/solar/ReflessoDArgento";
import ArqComSpecchiato from "./pages/arq/comercial/solar/SpecchiatoBronzo";

/* ── PDPs Unificadas (residencial + empresarial em uma URL) ── */
import Clear70Unified from "./pages/products/Clear70";
import Orizzonte70Unified from "./pages/products/Orizzonte70";
import NaturaleUnified from "./pages/products/Naturale";
import Ultravioletti90Unified from "./pages/products/Ultravioletti90";
import MetallicoArgentoUnified from "./pages/products/MetallicoArgento";
import SpecchiatoBronzoUnified from "./pages/products/SpecchiatoBronzo";
import PetrolioUnified from "./pages/products/Petrolio";
import GrigioInvertitoUnified from "./pages/products/GrigioInvertito";
import ReflessoDArgentoUnified from "./pages/products/ReflessoDArgento";
import PhantomGlossUnified from "./pages/products/PhantomGloss";
import PhantomMatteUnified from "./pages/products/PhantomMatte";

/* ── PDPs Arquitetônico Segurança ── */
import ArqSegurancaISSF4000 from "./pages/ArqSegurancaISSF4000";
import ArqSegurancaISSF7000 from "./pages/ArqSegurancaISSF7000";

/* ── PDPs Arquitetônico Segurança — Residencial ── */
import ArqResISSF4000 from "./pages/arq/residencial/seguranca/ISSF4000";
import ArqResISSF7000 from "./pages/arq/residencial/seguranca/ISSF7000";

/* ── PDPs Arquitetônico Segurança — Comercial ── */
import ArqComISSF4000 from "./pages/arq/comercial/seguranca/ISSF4000";
import ArqComISSF7000 from "./pages/arq/comercial/seguranca/ISSF7000";

/* ── PDPs Arquitetônico Decorativo ── */
import ArqDecorativoJateado from "./pages/ArqDecorativoJateado";
import ArqDecorativoWhiteout from "./pages/ArqDecorativoWhiteout";
import ArqDecorativoBlackout from "./pages/ArqDecorativoBlackout";

/* ── PDPs Arquitetônico Decorativo — Residencial ── */
import ArqResJateado from "./pages/arq/residencial/decorativo/Jateado";
import ArqResWhiteout from "./pages/arq/residencial/decorativo/Whiteout";
import ArqResBlackout from "./pages/arq/residencial/decorativo/Blackout";

/* ── PDPs Arquitetônico Decorativo — Comercial ── */
import ArqComJateado from "./pages/arq/comercial/decorativo/Jateado";
import ArqComWhiteout from "./pages/arq/comercial/decorativo/Whiteout";
import ArqComBlackout from "./pages/arq/comercial/decorativo/Blackout";

/* ── PDPs Arquitetônico SPF — Residencial + Comercial ── */
import ArqResPhantom from "./pages/arq/residencial/spf/Phantom";
import ArqComPhantom from "./pages/arq/comercial/spf/Phantom";

/* ── PDP Arquitetônico Phantom SPF ── */
import PhantomGloss from "./pages/PhantomGloss";

import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
          <Route path="/automotivo/solar/raystart" element={<AutomotivoRayStart />} />
          <Route path="/automotivo/solar/raypro" element={<AutomotivoRayPro />} />
          <Route path="/automotivo/solar/dark" element={<Navigate to="/automotivo/solar/raystart" replace />} />
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
          <Route path="/dark" element={<Navigate to="/automotivo/solar/raystart" replace />} />
          <Route path="/raystart" element={<Navigate to="/automotivo/solar/raystart" replace />} />
          <Route path="/raypro" element={<Navigate to="/automotivo/solar/raypro" replace />} />
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
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
        <PageNavigation />
        <CookieBanner />
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

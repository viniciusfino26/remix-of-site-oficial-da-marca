import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LegalNotice from "./components/LegalNotice";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingCTA from "./components/FloatingCTA";
import PageNavigation from "./components/PageNavigation";

import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
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

/* ── Hubs Automotivos ── */
import AutomotivoHubSolar from "./pages/AutomotivoHubSolar";
import AutomotivoHubSeguranca from "./pages/AutomotivoHubSeguranca";

/* ── PDPs Automotivo Solar ── */
import AutomotivoMatrix from "./pages/AutomotivoMatrix";
import AutomotivoPolariz from "./pages/AutomotivoPolariz";
import AutomotivoVip from "./pages/AutomotivoVip";
import AutomotivoEclipse from "./pages/AutomotivoEclipse";
import AutomotivoDark from "./pages/AutomotivoDark";

/* ── PDPs Automotivo Segurança ── */
import AutomotivoSkinSafe from "./pages/AutomotivoSkinSafe";
import AutomotivoAntivandalismo from "./pages/AutomotivoAntivandalismo";
import AutomotivoSkudoGuard from "./pages/AutomotivoSkudoGuard";
import AutomotivoSkudoUltra from "./pages/AutomotivoSkudoUltra";

/* ── Hub + PDPs Automotivo PPF ── */
import AutomotivoHubPPF from "./pages/AutomotivoHubPPF";
import AutomotivoPhantom6 from "./pages/AutomotivoPhantom6";
import AutomotivoPhantom8 from "./pages/AutomotivoPhantom8";

/* ── Hubs Arquitetônicos ── */
import ArqHubSolar from "./pages/ArqHubSolar";
import ArqHubSeguranca from "./pages/ArqHubSeguranca";
import ArqHubDecorativo from "./pages/ArqHubDecorativo";

/* ── PDPs Arquitetônico Solar ── */
import ArqClear70 from "./pages/ArqClear70";
import ArqOrizzonte from "./pages/ArqOrizzonte";
import ArqUV90 from "./pages/ArqUV90";
import ArqNaturale from "./pages/ArqNaturale";
import ArqPetrolio from "./pages/ArqPetrolio";
import ArqGrigio from "./pages/ArqGrigio";
import ArqMetallico from "./pages/ArqMetallico";
import ArqReflesso from "./pages/ArqReflesso";
import ArqSpecchiato from "./pages/ArqSpecchiato";

/* ── PDPs Arquitetônico Segurança ── */
import ArqSegurancaISSF4000 from "./pages/ArqSegurancaISSF4000";
import ArqSegurancaISSF7000 from "./pages/ArqSegurancaISSF7000";

/* ── PDPs Arquitetônico Decorativo ── */
import ArqDecorativoJateado from "./pages/ArqDecorativoJateado";
import ArqDecorativoWhiteout from "./pages/ArqDecorativoWhiteout";
import ArqDecorativoBlackout from "./pages/ArqDecorativoBlackout";

import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Marca */}
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/institucional" element={<Navigate to="/quem-somos" replace />} />
          <Route path="/franquias" element={<Franquias />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/anti-pirataria" element={<AntiPirataria />} />

          {/* Divisão Automotiva — Categoria */}
          <Route path="/automotivo" element={<Automotivo />} />
          <Route path="/frota" element={<Frota />} />
          <Route path="/ppf" element={<Navigate to="/automotivo/ppf" replace />} />

          {/* Divisão Automotiva — Hubs de Silo */}
          <Route path="/automotivo/solar" element={<AutomotivoHubSolar />} />
          <Route path="/automotivo/seguranca" element={<AutomotivoHubSeguranca />} />

          {/* Divisão Automotiva — PDPs Solar */}
          <Route path="/automotivo/solar/matrix" element={<AutomotivoMatrix />} />
          <Route path="/automotivo/solar/polariz-ultra" element={<AutomotivoPolariz />} />
          <Route path="/automotivo/solar/vip" element={<AutomotivoVip />} />
          <Route path="/automotivo/solar/eclipse" element={<AutomotivoEclipse />} />
          <Route path="/automotivo/solar/dark" element={<AutomotivoDark />} />

          {/* Divisão Automotiva — PDPs Segurança */}
          <Route path="/automotivo/seguranca/skinsafe8k" element={<AutomotivoSkinSafe />} />
          <Route path="/automotivo/seguranca/antivandalismo13k" element={<AutomotivoAntivandalismo />} />
          <Route path="/automotivo/seguranca/skudoguard" element={<AutomotivoSkudoGuard />} />
          <Route path="/automotivo/seguranca/skudoultra" element={<AutomotivoSkudoUltra />} />

          {/* Divisão Automotiva — Hub + PDPs PPF */}
          <Route path="/automotivo/ppf" element={<AutomotivoHubPPF />} />
          <Route path="/automotivo/ppf/phantom-6mil" element={<AutomotivoPhantom6 />} />
          <Route path="/automotivo/ppf/phantom-8mil" element={<AutomotivoPhantom8 />} />
          <Route path="/automotivo/seguranca/skudoultra" element={<AutomotivoSkudoUltra />} />

          {/* Divisão Arquitetônica — Categorias */}
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/empresarial" element={<Empresarial />} />
          <Route path="/phantom-arquitetonico" element={<PhantomArquitetonico />} />

          {/* Divisão Arquitetônica — Hubs de Silo */}
          <Route path="/arquitetonico/solar" element={<ArqHubSolar />} />
          <Route path="/arquitetonico/seguranca" element={<ArqHubSeguranca />} />
          <Route path="/arquitetonico/decorativo" element={<ArqHubDecorativo />} />

          {/* Divisão Arquitetônica — PDPs Solar */}
          <Route path="/arquitetonico/solar/clear70" element={<ArqClear70 />} />
          <Route path="/arquitetonico/solar/orizzonte70" element={<ArqOrizzonte />} />
          <Route path="/arquitetonico/solar/ultravioletti90" element={<ArqUV90 />} />
          <Route path="/arquitetonico/solar/naturale" element={<ArqNaturale />} />
          <Route path="/arquitetonico/solar/petrolio" element={<ArqPetrolio />} />
          <Route path="/arquitetonico/solar/grigio-invertito" element={<ArqGrigio />} />
          <Route path="/arquitetonico/solar/metallico-argento" element={<ArqMetallico />} />
          <Route path="/arquitetonico/solar/reflesso-d-argento" element={<ArqReflesso />} />
          <Route path="/arquitetonico/solar/specchiato-bronzo" element={<ArqSpecchiato />} />

          {/* Divisão Arquitetônica — PDPs Segurança */}
          <Route path="/arquitetonico/seguranca/issf4000" element={<ArqSegurancaISSF4000 />} />
          <Route path="/arquitetonico/seguranca/issf7000" element={<ArqSegurancaISSF7000 />} />

          {/* Divisão Arquitetônica — PDPs Decorativo */}
          <Route path="/arquitetonico/decorativo/jateado" element={<ArqDecorativoJateado />} />
          <Route path="/arquitetonico/decorativo/whiteout" element={<ArqDecorativoWhiteout />} />
          <Route path="/arquitetonico/decorativo/blackout" element={<ArqDecorativoBlackout />} />

          {/* Atendimento */}
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/sac" element={<SAC />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/privacidade" element={<Privacidade />} />

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
          <Route path="/clear70" element={<Navigate to="/arquitetonico/solar/clear70" replace />} />
          <Route path="/orizzonte70" element={<Navigate to="/arquitetonico/solar/orizzonte70" replace />} />
          <Route path="/ultravioletti90" element={<Navigate to="/arquitetonico/solar/ultravioletti90" replace />} />
          <Route path="/naturale" element={<Navigate to="/arquitetonico/solar/naturale" replace />} />
          <Route path="/petrolio" element={<Navigate to="/arquitetonico/solar/petrolio" replace />} />
          <Route path="/grigio-invertito" element={<Navigate to="/arquitetonico/solar/grigio-invertito" replace />} />
          <Route path="/metallico-argento" element={<Navigate to="/arquitetonico/solar/metallico-argento" replace />} />
          <Route path="/reflesso-dargento" element={<Navigate to="/arquitetonico/solar/reflesso-d-argento" replace />} />
          <Route path="/specchiato-bronzo" element={<Navigate to="/arquitetonico/solar/specchiato-bronzo" replace />} />
          <Route path="/aviso_legal" element={<Navigate to="/anti-pirataria" replace />} />
          <Route path="/aviso-legal" element={<Navigate to="/anti-pirataria" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <LegalNotice />
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
        <PageNavigation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

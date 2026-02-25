import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LegalNotice from "./components/LegalNotice";
import WhatsAppButton from "./components/WhatsAppButton";

import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Automotivo from "./pages/Automotivo";
import Antivandalismo13K from "./pages/Antivandalismo13K";
import SkudoGuard from "./pages/SkudoGuard";
import SkinSafe8K from "./pages/SkinSafe8K";
import SkudoUltra from "./pages/SkudoUltra";
import Matrix from "./pages/Matrix";
import PolarizUltra from "./pages/PolarizUltra";
import VIP from "./pages/VIP";
import Eclipse from "./pages/Eclipse";
import Dark from "./pages/Dark";
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
import Clear70 from "./pages/Clear70";
import Orizzonte70 from "./pages/Orizzonte70";
import Ultravioletti90 from "./pages/Ultravioletti90";
import Naturale from "./pages/Naturale";
import Petrolio from "./pages/Petrolio";
import GrigioInvertito from "./pages/GrigioInvertito";
import MetallicoArgento from "./pages/MetallicoArgento";
import ReflessoDArgento from "./pages/ReflessoDArgento";
import SpecchiatoBronzo from "./pages/SpecchiatoBronzo";
import Vendas from "./pages/Vendas";
import SAC from "./pages/SAC";
import FAQ from "./pages/FAQ";
import Garantia from "./pages/Garantia";
import NotFound from "./pages/NotFound";

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

          {/* Divisão Automotiva */}
          <Route path="/automotivo" element={<Automotivo />} />
          <Route path="/antivandalismo13k" element={<Antivandalismo13K />} />
          <Route path="/skudoguard" element={<SkudoGuard />} />
          <Route path="/skinsafe8k" element={<SkinSafe8K />} />
          <Route path="/skudo-ultra" element={<SkudoUltra />} />
          <Route path="/frota" element={<Frota />} />
          <Route path="/ppf" element={<PPF />} />
          <Route path="/matrix" element={<Matrix />} />
          <Route path="/polariz-ultra" element={<PolarizUltra />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/eclipse" element={<Eclipse />} />
          <Route path="/dark" element={<Dark />} />

          {/* Divisão Arquitetônica */}
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/empresarial" element={<Empresarial />} />
          <Route path="/phantom-arquitetonico" element={<PhantomArquitetonico />} />
          <Route path="/clear70" element={<Clear70 />} />
          <Route path="/orizzonte70" element={<Orizzonte70 />} />
          <Route path="/ultravioletti90" element={<Ultravioletti90 />} />
          <Route path="/naturale" element={<Naturale />} />
          <Route path="/petrolio" element={<Petrolio />} />
          <Route path="/grigio-invertito" element={<GrigioInvertito />} />
          <Route path="/metallico-argento" element={<MetallicoArgento />} />
          <Route path="/reflesso-dargento" element={<ReflessoDArgento />} />
          <Route path="/specchiato-bronzo" element={<SpecchiatoBronzo />} />

          {/* Atendimento */}
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/sac" element={<SAC />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/lojas" element={<Lojas />} />

          {/* Parceiro */}
          <Route path="/parceiro" element={<Parceiro />} />

          {/* Redirects legado */}
          <Route path="/aviso_legal" element={<Navigate to="/anti-pirataria" replace />} />
          <Route path="/aviso-legal" element={<Navigate to="/anti-pirataria" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <LegalNotice />
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

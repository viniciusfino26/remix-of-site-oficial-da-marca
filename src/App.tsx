import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Automotivo from "./pages/Automotivo";
import Antivandalismo13K from "./pages/Antivandalismo13K";
import Antivandalismo13KProposta from "./pages/Antivandalismo13KProposta";
import SkudoGuard from "./pages/SkudoGuard";
import SkinSafe8K from "./pages/SkinSafe8K";
import SkudoUltra from "./pages/SkudoUltra";
import Residencial from "./pages/Residencial";
import Lojas from "./pages/Lojas";
import Parceiro from "./pages/Parceiro";
import Franquias from "./pages/Franquias";
import Carreiras from "./pages/Carreiras";
import AntiPirataria from "./pages/AntiPirataria";
import Frota from "./pages/Frota";
import PPF from "./pages/PPF";
import Empresarial from "./pages/Empresarial";
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
          <Route path="/antivandalismo13k/teste_proposta" element={<Antivandalismo13KProposta />} />
          <Route path="/skudoguard" element={<SkudoGuard />} />
          <Route path="/skinsafe8k" element={<SkinSafe8K />} />
          <Route path="/skudo-ultra" element={<SkudoUltra />} />
          <Route path="/frota" element={<Frota />} />
          <Route path="/ppf" element={<PPF />} />

          {/* Divisão Arquitetônica */}
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/empresarial" element={<Empresarial />} />

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
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

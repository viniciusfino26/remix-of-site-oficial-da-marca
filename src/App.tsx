import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Páginas existentes
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Automotivo from "./pages/Automotivo";
import Antivandalismo13K from "./pages/Antivandalismo13K";
import Antivandalismo13KProposta from "./pages/Antivandalismo13KProposta";
import SkudoGuard from "./pages/SkudoGuard";
import Residencial from "./pages/Residencial";
import NotFound from "./pages/NotFound";

// Páginas novas — descomente conforme for criando no Lovable
// import Lojas from "./pages/Lojas";
// import SkinSafe8K from "./pages/SkinSafe8K";
// import SkudoUltra from "./pages/SkudoUltra";
// import Parceiro from "./pages/Parceiro";
// import Institucional from "./pages/Institucional";
// import AvisoLegal from "./pages/AvisoLegal";
// import Franquias from "./pages/Franquias";
// import Produtos from "./pages/Produtos";
// import Legislacao from "./pages/Legislacao";

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
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Marca / Institucional */}
          <Route path="/quem-somos" element={<Navigate to="/institucional" replace />} />
          <Route path="/institucional" element={<QuemSomos />} />

          {/* Divisão Automotiva — Para meu carro */}
          <Route path="/automotivo" element={<Automotivo />} />

          {/* Segurança e Proteção */}
          <Route path="/antivandalismo13k" element={<Antivandalismo13K />} />
          <Route path="/antivandalismo13k/teste_proposta" element={<Antivandalismo13KProposta />} />
          <Route path="/skudoguard" element={<SkudoGuard />} />

          {/* Rotas novas — descomente conforme criar as páginas */}
          {/* <Route path="/lojas"        element={<Lojas />} /> */}
          {/* <Route path="/skinsafe8k"   element={<SkinSafe8K />} /> */}
          {/* <Route path="/skudo-ultra"  element={<SkudoUltra />} /> */}
          {/* <Route path="/parceiro"     element={<Parceiro />} /> */}
          {/* <Route path="/aviso-legal"  element={<AvisoLegal />} /> */}
          {/* <Route path="/franquias"    element={<Franquias />} /> */}
          {/* <Route path="/legislacao"   element={<Legislacao />} /> */}

          {/* Divisão Arquitetônica */}
          <Route path="/residencial" element={<Residencial />} />

          {/* Redirects do site antigo — preserva SEO */}
          <Route path="/aviso_legal" element={<Navigate to="/aviso-legal" replace />} />

          {/* 404 — sempre por último */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

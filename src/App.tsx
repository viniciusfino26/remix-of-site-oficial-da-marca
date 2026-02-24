import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalyticsProvider from "./components/Analytics";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Automotivo from "./pages/Automotivo";
import Antivandalismo13K from "./pages/Antivandalismo13K";
import Antivandalismo13KProposta from "./pages/Antivandalismo13KProposta";
import SkudoGuard from "./pages/SkudoGuard";
import Residencial from "./pages/Residencial";
import Lojas from "./pages/Lojas";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import SchemaOrg from "./components/SchemaOrg";
import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SchemaOrg />
        <AnalyticsProvider />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/automotivo" element={<Automotivo />} />
          <Route path="/antivandalismo13k" element={<Antivandalismo13K />} />
          <Route path="/antivandalismo13k/teste_proposta" element={<Antivandalismo13KProposta />} />
          <Route path="/skudoguard" element={<SkudoGuard />} />
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/lojas" element={<Lojas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

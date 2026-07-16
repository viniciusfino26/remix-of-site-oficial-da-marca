import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Garante que toda navegação entre rotas (cliques em links de header, footer,
 * mega menu, CTAs internos, etc.) inicie a leitura no topo da página.
 *
 * Respeita âncoras (#secao), se houver hash, faz scroll suave até o elemento.
 * Caso contrário, sobe instantaneamente para o topo.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

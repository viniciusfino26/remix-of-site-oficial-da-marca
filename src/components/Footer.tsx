import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Analytics } from '@/components/Analytics';
import logoDark from '@/assets/logo-dark.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-carbon-gradient text-primary-foreground" role="contentinfo">
      <div className="accent-stripe" />

      {/* CTA Banner */}
      <section id="partner-cta" className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
            {t('cta.partnerTitle')}
          </h2>
          <p className="text-primary-foreground/60 mb-4 max-w-lg mx-auto font-light text-lg">
            {t('cta.partnerSubtitle')}
          </p>
          <div className="separator-accent mx-auto mb-8" />
          <Link to="/parceiro" onClick={() => Analytics.ctaClick('Quero Ser Parceiro', 'footer')}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-md hover:shadow-lg transition-all duration-300">
              {t('cta.partnerButton')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Institucional */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              {t('footer.institutional')}
            </h3>
            <ul className="space-y-3">
              <li><Link to="/quem-somos" onClick={() => Analytics.ctaClick('Quem Somos', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.whoWeAre')}</Link></li>
              <li><Link to="/franquias" onClick={() => Analytics.ctaClick('Franquias', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.franchising')}</Link></li>
              <li><Link to="/carreiras" onClick={() => Analytics.ctaClick('Carreiras', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.careers')}</Link></li>
              <li><Link to="/aviso-legal" onClick={() => Analytics.ctaClick('Anti-Pirataria', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.antiPiracy')}</Link></li>
            </ul>
          </div>

          {/* Linhas de Produto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              {t('footer.productLines')}
            </h3>
            <ul className="space-y-3">
              <li><Link to="/automotivo" onClick={() => Analytics.ctaClick('Para Meu Carro', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.forMyCar')}</Link></li>
              <li><Link to="/residencial" onClick={() => Analytics.ctaClick('Para Minha Residência', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.forMyHome')}</Link></li>
              <li><Link to="/produtos" onClick={() => Analytics.ctaClick('Produtos', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.products')}</Link></li>
              <li><Link to="/antivandalismo13k" onClick={() => Analytics.ctaClick('Antivandalismo 13K', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.antiVandalism')}</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              <li><Link to="/lojas" onClick={() => Analytics.storeLocatorClick('footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.storeLocator')}</Link></li>
              <li><Link to="/vendas" onClick={() => Analytics.ctaClick('Central de Vendas', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.salesCentral')}</Link></li>
              <li><Link to="/sac" onClick={() => Analytics.ctaClick('SAC', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.sac')}</Link></li>
              <li><Link to="/parceiro" onClick={() => Analytics.ctaClick('Seja Parceiro', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">{t('nav.becomePartner')}</Link></li>
            </ul>
          </div>

          {/* Redes Sociais + Logo */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              {t('footer.followUs')}
            </h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/insulfilmoriginal" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_instagram', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/insulfilmoriginal" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_facebook', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/INSULFILMMaximizado" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_youtube', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5511976136911" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.whatsappClick('geral', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Antipirataria badge */}
            <div className="mt-6 p-3 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                <span className="font-semibold text-primary-foreground/70">INSULFILM™ é marca registrada.</span>
                {' '}Registrada no INPI desde 1987. Uso indevido é crime — Lei nº 9.279/96.{' '}
                <Link to="/aviso-legal" className="text-accent hover:underline">Saiba mais</Link>
              </p>
            </div>

            <div className="mt-6">
              <img src={logoDark} alt="INSULFILM™" className="h-8 w-auto opacity-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/40 font-light">
            © {new Date().getFullYear()} INSULFILM™. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <Link to="/privacidade" onClick={() => Analytics.ctaClick('Privacidade', 'footer')} className="text-xs text-primary-foreground/40 hover:text-accent transition-colors duration-200">{t('footer.privacy')}</Link>
            <Link to="/termos" onClick={() => Analytics.ctaClick('Termos', 'footer')} className="text-xs text-primary-foreground/40 hover:text-accent transition-colors duration-200">{t('footer.terms')}</Link>
            <Link to="/aviso-legal" onClick={() => Analytics.ctaClick('Anti-Pirataria', 'footer')} className="text-xs text-primary-foreground/40 hover:text-accent transition-colors duration-200">Anti-Pirataria</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

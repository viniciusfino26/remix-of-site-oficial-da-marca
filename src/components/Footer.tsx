import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Analytics } from '@/components/Analytics';
import logoDark from '@/assets/logo-dark.png';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <footer className="bg-carbon-gradient text-primary-foreground" role="contentinfo">
      <div className="accent-stripe" />

      {isHome && (
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
      )}

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

          {/* MARCA */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              Marca
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/quem-somos" onClick={() => Analytics.ctaClick('Quem Somos', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.whoWeAre')}
                </Link>
              </li>
              <li>
                <Link to="/anti-pirataria" onClick={() => Analytics.ctaClick('Autenticidade INSULFILM', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  Autenticidade INSULFILM™
                </Link>
              </li>
              <li>
                <Link to="/anti-pirataria" onClick={() => Analytics.ctaClick('Anti-Pirataria', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.antiPiracy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* SOLUÇÕES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              Soluções
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/automotivo" onClick={() => Analytics.ctaClick('Automotivo', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.automotive', 'Automotivo')}
                </Link>
              </li>
              <li>
                <Link to="/residencial" onClick={() => Analytics.ctaClick('Residencial', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  Residencial
                </Link>
              </li>
              <li>
                <Link to="/empresarial" onClick={() => Analytics.ctaClick('Comercial', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  Comercial
                </Link>
              </li>
              <li>
                <Link to="/frota" onClick={() => Analytics.ctaClick('Frotas', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  Frotas
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPORTE */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/lojas" onClick={() => Analytics.storeLocatorClick('footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.storeLocator')}
                </Link>
              </li>
              <li>
                <Link to="/legislacao" onClick={() => Analytics.ctaClick('Legislação', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.legislation', 'Legislação')}
                </Link>
              </li>
              <li>
                <Link to="/sac" onClick={() => Analytics.ctaClick('SAC', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.sac')}
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={() => Analytics.ctaClick('FAQ', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* NEGÓCIOS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-primary-foreground/90">
              Negócios
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/vendas" onClick={() => Analytics.ctaClick('Central de Vendas', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.salesCentral')}
                </Link>
              </li>
              <li>
                <Link to="/parceiro" onClick={() => Analytics.ctaClick('Seja Parceiro', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.becomePartner')}
                </Link>
              </li>
              <li>
                <Link to="/carreiras" onClick={() => Analytics.ctaClick('Trabalhe Conosco', 'footer')} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200">
                  {t('nav.careers')}
                </Link>
              </li>
            </ul>

            {/* Redes Sociais */}
            <h3 className="text-sm font-bold uppercase tracking-widest mt-8 mb-4 text-primary-foreground/90">
              {t('footer.followUs')}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/insulfilm.oficial" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_instagram', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15 flex items-center gap-2" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
                <span className="text-xs font-medium hidden sm:inline">Instagram</span>
              </a>
              <a href="https://www.facebook.com/insulfilmoriginal" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_facebook', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15 flex items-center gap-2" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
                <span className="text-xs font-medium hidden sm:inline">Facebook</span>
              </a>
              <a href="https://www.youtube.com/@insulfilmoficial" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_youtube', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15 flex items-center gap-2" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
                <span className="text-xs font-medium hidden sm:inline">YouTube</span>
              </a>
              <a href="https://www.linkedin.com/company/insulfilm™" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_linkedin_brand', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15 flex items-center gap-2" aria-label="LinkedIn - Empresa">
                <Linkedin className="w-5 h-5" />
                <span className="text-xs font-medium hidden sm:inline">LinkedIn: Empresa</span>
              </a>
              <a href="https://www.linkedin.com/in/francisco-fino-2032a03b/" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.ctaClick('social_linkedin_profile', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15 flex items-center gap-2" aria-label="LinkedIn - Fundador">
                <Linkedin className="w-5 h-5" />
                <span className="text-xs font-medium hidden sm:inline">LinkedIn: Fundador</span>
              </a>
              <a href="https://wa.me/5511976136911" target="_blank" rel="noopener noreferrer" onClick={() => Analytics.whatsappClick('geral', 'footer')} className="social-icon-premium p-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-accent/15 flex items-center gap-2" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-medium hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Antipirataria badge + Logo */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1 p-3 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
            <p className="text-xs text-primary-foreground/50 leading-relaxed">
              <span className="font-semibold text-primary-foreground/70">INSULFILM™ é marca registrada</span>{' '}
              protegida pela Lei nº 9.279/96. O uso do termo por terceiros não possui autorização da titular.{' '}
              <Link to="/anti-pirataria" className="text-accent hover:underline">Saiba mais</Link>
            </p>
          </div>
          <div className="shrink-0 self-start sm:self-center">
            <img src={logoDark} alt="INSULFILM™" className="h-[clamp(3rem,7vw,5rem)] w-auto opacity-60" />
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
            <Link to="/anti-pirataria" onClick={() => Analytics.ctaClick('Anti-Pirataria', 'footer')} className="text-xs text-primary-foreground/40 hover:text-accent transition-colors duration-200">Anti-Pirataria</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

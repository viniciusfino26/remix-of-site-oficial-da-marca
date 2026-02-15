import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoDark from '@/assets/logo-dark.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-carbon-gradient text-primary-foreground" role="contentinfo">
      {/* CTA Banner */}
      <section id="partner-cta" className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t('cta.partnerTitle')}
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            {t('cta.partnerSubtitle')}
          </p>
          <Link to="/parceiro">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              {t('cta.partnerButton')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.institutional')}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/quem-somos" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.whoWeAre')}</Link></li>
              <li><Link to="/franquias" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.franchising')}</Link></li>
              <li><Link to="/carreiras" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.careers')}</Link></li>
              <li><Link to="/anti-pirataria" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.antiPiracy')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.productLines')}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/automotivo" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.forMyCar')}</Link></li>
              <li><Link to="/residencial" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.forMyHome')}</Link></li>
              <li><Link to="/produtos" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.products')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.support')}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/vendas" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.salesCentral')}</Link></li>
              <li><Link to="/sac" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.sac')}</Link></li>
              <li><Link to="/lojas" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t('nav.storeLocator')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.followUs')}
            </h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <img src={logoDark} alt="INSULFILM™" className="h-8 w-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} INSULFILM™. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <Link to="/privacidade" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">{t('footer.privacy')}</Link>
            <Link to="/termos" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

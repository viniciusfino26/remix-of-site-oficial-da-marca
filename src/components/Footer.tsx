import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-carbon-deep border-t border-border" role="contentinfo">
      {/* CTA Banner */}
      <section id="partner-cta" className="border-b border-border">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-premium mb-3">
            {t('cta.partnerTitle')}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            {t('cta.partnerSubtitle')}
          </p>
          <Link to="/parceiro">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              {t('cta.partnerButton')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t('footer.institutional')}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/quem-somos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.whoWeAre')}</Link></li>
              <li><Link to="/franquias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.franchising')}</Link></li>
              <li><Link to="/carreiras" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.careers')}</Link></li>
              <li><Link to="/anti-pirataria" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.antiPiracy')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t('footer.productLines')}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/automotivo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.forMyCar')}</Link></li>
              <li><Link to="/residencial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.forMyHome')}</Link></li>
              <li><Link to="/produtos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.products')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t('footer.support')}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/vendas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.salesCentral')}</Link></li>
              <li><Link to="/sac" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.sac')}</Link></li>
              <li><Link to="/lojas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('nav.storeLocator')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t('footer.followUs')}
            </h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-md bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-md bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-md bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-md bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} INSULFILM™. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <Link to="/privacidade" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t('footer.privacy')}</Link>
            <Link to="/termos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

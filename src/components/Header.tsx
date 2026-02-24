import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Shield, Car, Building2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import logoDark from '@/assets/logo-dark.png';

const languages = [
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const megaMenuItems = [
    {
      key: 'brand',
      label: t('nav.brand'),
      icon: Shield,
      items: [
        { label: t('nav.whoWeAre'), href: '/quem-somos' },
        { label: t('nav.franchising'), href: '/franquias' },
        { label: t('nav.careers'), href: '/carreiras' },
        { label: t('nav.antiPiracy'), href: '/anti-pirataria' },
      ],
    },
    {
      key: 'automotive',
      label: t('nav.automotive'),
      icon: Car,
      items: [
        { label: t('nav.forMyCar'), href: '/automotivo' },
        { label: t('nav.forMyFleet'), href: '/frota' },
        { label: t('nav.ppf'), href: '/ppf' },
      ],
    },
    {
      key: 'architecture',
      label: t('nav.architecture'),
      icon: Building2,
      items: [
        { label: t('nav.forMyHome'), href: '/residencial' },
        { label: t('nav.forMyCompany'), href: '/empresarial' },
      ],
    },
    {
      key: 'support',
      label: t('nav.support'),
      icon: Headphones,
      items: [
        { label: t('nav.salesCentral'), href: '/vendas' },
        { label: t('nav.sac'), href: '/sac' },
        { label: t('nav.faq'), href: '/faq' },
        { label: t('nav.warranty'), href: '/garantia' },
        { label: t('nav.storeLocator'), href: '/lojas' },
      ],
    },
  ];

  return (
    <>
      {/* Accent Stripe */}
      <div className="fixed top-0 left-0 right-0 z-[60] accent-stripe" />

      <header className="fixed top-[3px] left-0 right-0 z-50 bg-glass" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logoDark} alt="INSULFILM™" className="h-11 lg:h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {megaMenuItems.map((menu) => (
                <div
                  key={menu.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="nav-link-premium flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md"
                    aria-expanded={openMenu === menu.key}
                  >
                    <menu.icon className="w-4 h-4" />
                    {menu.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openMenu === menu.key ? 'rotate-180' : ''}`} />
                  </button>

                  {openMenu === menu.key && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-premium-lg border border-border p-2 animate-fade-in-up">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-lg transition-all duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </nav>

            {/* Right side: Language + CTA + Mobile */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-lg p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                      i18n.language === lang.code
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'text-primary-foreground/70 hover:text-primary-foreground'
                    }`}
                    aria-label={`Switch to ${lang.label}`}
                  >
                    <span>{lang.flag}</span>
                    <span className="hidden sm:inline">{lang.label}</span>
                  </button>
                ))}
              </div>

              {/* CTA Desktop */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ8iSTDUlUntDmBCWEjI51gUye8Tc-Ocw_Cw-yHHiZhjEj9Q/viewform" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200">
                  {t('nav.becomePartner')}
                </Button>
              </a>

              {/* Mobile Menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="text-primary-foreground">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-card border-border w-80">
                  <SheetTitle className="text-foreground text-lg font-bold mb-6">
                    <img src={logoDark} alt="INSULFILM™" className="h-8 w-auto brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(10%) sepia(80%) saturate(5000%) hue-rotate(220deg)' }} />
                  </SheetTitle>
                  <nav className="flex flex-col gap-2">
                    {megaMenuItems.map((menu) => (
                      <div key={menu.key}>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                          {menu.label}
                        </p>
                        {menu.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-3 py-2.5 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-md transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="pt-4 px-3">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ8iSTDUlUntDmBCWEjI51gUye8Tc-Ocw_Cw-yHHiZhjEj9Q/viewform" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          {t('nav.becomePartner')}
                        </Button>
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

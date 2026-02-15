import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Shield, Car, Building2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

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
        { label: t('nav.storeLocator'), href: '/lojas' },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-black tracking-wider text-gradient-premium">
              INSULFILM™
            </span>
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
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-silver-light hover:text-foreground transition-colors rounded-md"
                  aria-expanded={openMenu === menu.key}
                >
                  <menu.icon className="w-4 h-4" />
                  {menu.label}
                  <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === menu.key ? 'rotate-180' : ''}`} />
                </button>

                {openMenu === menu.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-glass rounded-lg shadow-premium border-glow p-2 animate-fade-in-up">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-silver-light hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/produtos"
              className="px-4 py-2 text-sm font-medium text-silver-light hover:text-foreground transition-colors"
            >
              {t('nav.products')}
            </Link>
          </nav>

          {/* Right side: Language + CTA + Mobile */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-secondary/50 rounded-md p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  <span>{lang.flag}</span>
                  <span className="hidden sm:inline">{lang.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Desktop */}
            <Link to="/parceiro" className="hidden lg:block">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs">
                {t('nav.becomePartner')}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border w-80">
                <SheetTitle className="text-foreground text-lg font-bold mb-6">INSULFILM™</SheetTitle>
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
                          className="block px-3 py-2.5 text-sm text-silver-light hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    to="/produtos"
                    className="block px-3 py-2.5 text-sm font-medium text-silver-light hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t('nav.products')}
                  </Link>
                  <div className="pt-4 px-3">
                    <Link to="/parceiro" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full bg-primary text-primary-foreground">
                        {t('nav.becomePartner')}
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

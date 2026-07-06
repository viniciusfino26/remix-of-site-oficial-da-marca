import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Shield, Car, Building2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import logoDark from '@/assets/logo-dark.webp';
import flagBr from '@/assets/flag-br.svg';
import flagUs from '@/assets/flag-us.svg';
import flagEs from '@/assets/flag-es.svg';

interface NavItem { label: string; href: string }
interface NavSection { title: string; items: NavItem[] }
interface NavMenu {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  sections?: NavSection[];
  items?: NavItem[];
  /** When set, the menu item is a direct link with no dropdown. */
  href?: string;
}

const languages = [
  { code: 'pt', label: 'PT', flag: flagBr, alt: 'Brasil' },
  { code: 'en', label: 'EN', flag: flagUs, alt: 'United States' },
  { code: 'es', label: 'ES', flag: flagEs, alt: 'España' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const megaMenuItems: NavMenu[] = [
    {
      key: 'brand',
      label: t('nav.brand'),
      icon: Shield,
      items: [
        { label: 'Sobre a INSULFILM™', href: '/marca/sobre' },
        { label: 'O que é INSULFILM', href: '/marca/o-que-e' },
        { label: 'Marca Registrada', href: '/marca/marca-registrada' },
        { label: 'Autenticidade e Padrão', href: '/marca/autenticidade' },
        { label: 'Tecnologia', href: '/marca/tecnologia' },
        { label: 'Presença da Marca', href: '/marca/presenca' },
        { label: 'História', href: '/marca/historia' },
      ],
    },
    {
      key: 'automotive',
      label: t('nav.automotive'),
      icon: Car,
      sections: [
        {
          title: 'Nossas Linhas',
          items: [
            { label: 'Controle Solar', href: '/automotivo/solar' },
            { label: 'Segurança', href: '/automotivo/seguranca' },
            { label: 'PPF Phantom', href: '/automotivo/ppf' },
          ],
        },
        {
          title: 'Atendimento Especializado',
          items: [
            { label: t('nav.forMyCar'), href: '/automotivo' },
            { label: t('nav.forMyFleet'), href: '/frota' },
          ],
        },
      ],
    },
    {
      key: 'architecture',
      label: t('nav.architecture'),
      icon: Building2,
      sections: [
        {
          title: 'Nossas Linhas',
          items: [
            { label: 'Controle Solar', href: '/arquitetonico/solar' },
            { label: 'Segurança', href: '/arquitetonico/seguranca' },
            { label: 'Decorativo', href: '/arquitetonico/decorativo' },
            { label: 'Phantom Glass & Matte', href: '/phantom-arquitetonico' },
          ],
        },
        {
          title: 'Soluções por Ambiente',
          items: [
            { label: t('nav.forMyHome'), href: '/residencial' },
            { label: t('nav.forMyCompany'), href: '/empresarial' },
          ],
        },
      ],
    },
    {
      key: 'stores',
      label: 'Lojas e Aplicação Homologada',
      icon: MapPin,
      href: '/lojas',
    },
  ];

  const renderDropdownItems = (items: NavItem[]) =>
    items.map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className="block px-4 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-lg transition-all duration-200"
      >
        {item.label}
      </Link>
    ));

  const renderDropdownContent = (menu: NavMenu) => {
    if (menu.sections) {
      return menu.sections.map((section, idx) => (
        <div key={section.title}>
          {idx > 0 && <Separator className="my-2" />}
          <p className="px-4 pt-2 pb-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {section.title}
          </p>
          {renderDropdownItems(section.items)}
        </div>
      ));
    }
    return renderDropdownItems(menu.items ?? []);
  };

  const renderMobileContent = (menu: NavMenu) => {
    if (menu.sections) {
      return menu.sections.map((section, idx) => (
        <div key={section.title}>
          {idx > 0 && <Separator className="my-1.5" />}
          <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
            {section.title}
          </p>
          {section.items.map((item) => (
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
      ));
    }
    return (menu.items ?? []).map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className="block px-3 py-2.5 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-md transition-colors"
        onClick={() => setMobileOpen(false)}
      >
        {item.label}
      </Link>
    ));
  };

  return (
    <>
      {/* Accent Stripe */}
      <div className="fixed top-0 left-0 right-0 z-[60] accent-stripe" />

      <header className="fixed top-[3px] left-0 right-0 z-50 bg-glass" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 lg:h-32">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <img
                src={logoDark}
                alt="INSULFILM™ — A marca das películas"
                className="h-56 lg:h-80 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {megaMenuItems.map((menu) => {
                /* Direct-link item (no dropdown) — e.g., Lojas e Aplicação Homologada */
                if (menu.href) {
                  return (
                  <Link
                    key={menu.key}
                    to={menu.href}
                    className="nav-link-premium flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md"
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      <menu.icon className="w-full h-full" />
                    </span>
                    {menu.label}
                  </Link>
                  );
                }
                /* Dropdown item — Marca, Automotivo, Arquitetônico */
                return (
                  <div
                    key={menu.key}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(menu.key)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      className="nav-link-premium flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md"
                      aria-expanded={openMenu === menu.key}
                    >
                      <span className="w-5 h-5 flex items-center justify-center">
                        <menu.icon className="w-full h-full" />
                      </span>
                      {menu.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openMenu === menu.key ? 'rotate-180' : ''}`} />
                    </button>

                    {openMenu === menu.key && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-premium-lg border border-border p-2 z-50 animate-fade-in-up">
                        {renderDropdownContent(menu)}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right side: Language + CTA + Mobile */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-lg p-1 shrink-0">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 min-w-[3.5rem] sm:min-w-[4.25rem] text-xs font-medium rounded-md transition-all duration-200 ${
                      i18n.language === lang.code
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'text-primary-foreground/70 hover:text-primary-foreground'
                    }`}
                    aria-label={`Switch to ${lang.label}`}
                  >
                    <img src={lang.flag} alt={lang.alt} className="h-3.5 w-3.5 rounded-full object-cover shrink-0" loading="lazy" />
                    <span>{lang.label}</span>
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
                <SheetContent side="right" className="bg-card border-border w-[85vw] max-w-sm p-0 flex flex-col h-full">
                  <div className="flex-shrink-0 p-4 pb-2 border-b border-border">
                    <SheetTitle className="text-foreground text-lg font-bold">
                      <img src={logoDark} alt="INSULFILM™" className="h-8 w-auto brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(10%) sepia(80%) saturate(5000%) hue-rotate(220deg)' }} />
                    </SheetTitle>
                  </div>
                  <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-3 flex flex-col gap-1.5">
                    {megaMenuItems.map((menu) => {
                      /* Direct-link item (no dropdown/section) — e.g., Lojas e Aplicação Homologada */
                      if (menu.href) {
                        return (
                        <Link
                          key={menu.key}
                          to={menu.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-3 py-3 text-sm font-bold text-primary uppercase tracking-wider hover:bg-muted rounded-md transition-colors"
                        >
                          <span className="w-5 h-5 flex items-center justify-center">
                            <menu.icon className="w-full h-full" />
                          </span>
                          {menu.label}
                        </Link>
                        );
                      }
                      /* Dropdown item with sections or items list */
                      return (
                        <div key={menu.key}>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider px-3 py-2">
                            {menu.label}
                          </p>
                          {renderMobileContent(menu)}
                        </div>
                      );
                    })}
                  </nav>
                  <div className="flex-shrink-0 p-4 border-t border-border">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ8iSTDUlUntDmBCWEjI51gUye8Tc-Ocw_Cw-yHHiZhjEj9Q/viewform" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        {t('nav.becomePartner')}
                      </Button>
                    </a>
                  </div>
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

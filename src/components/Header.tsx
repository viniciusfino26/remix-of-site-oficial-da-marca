import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Shield, Car, Building2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import logoDark from '@/assets/logo-dark.png';
import flagBr from '@/assets/flag-br.svg';
import flagUs from '@/assets/flag-us.svg';
import flagEs from '@/assets/flag-es.svg';

interface NavItem { label: string; href: string; desc?: string }
interface NavColumn { title: string; items: NavItem[] }
interface NavFooter { title: string; items: NavItem[] }
interface NavHighlight { label: string; href: string; desc?: string }
interface NavMenu {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  columns?: NavColumn[];
  footer?: NavFooter;
  highlight?: NavHighlight;
  items?: NavItem[];
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
      columns: [
        {
          title: 'Solar Performance',
          items: [
            { label: 'RayStart', href: '/automotivo/solar/raystart', desc: 'Entrada solar com conforto térmico.' },
            { label: 'RayPro', href: '/automotivo/solar/raypro', desc: 'Performance solar profissional.' },
          ],
        },
        {
          title: 'Solar High Performance',
          items: [
            { label: 'Polariz', href: '/automotivo/solar/polariz', desc: 'Visão sem reflexo.' },
            { label: 'Polariz Ultra', href: '/automotivo/solar/polariz-ultra', desc: 'Conforto polarizado premium.' },
            { label: 'Carbon', href: '/automotivo/solar/carbon', desc: 'Rejeição térmica com visual escuro.' },
          ],
        },
        {
          title: 'Solar Ultra Performance',
          items: [
            { label: 'Ceramic', href: '/automotivo/solar/ceramic', desc: 'Nano cerâmica de alta rejeição.' },
            { label: 'Matrix', href: '/automotivo/solar/matrix', desc: 'Nano cerâmica Ultra Definition.' },
          ],
        },
        {
          title: 'PPF · Proteção de Pintura',
          items: [
            { label: 'Phantom Gloss', href: '/automotivo/ppf/phantom-gloss', desc: 'Proteção de pintura automotiva.' },
          ],
        },
        {
          title: 'Proteção e Segurança',
          items: [
            { label: 'SkinSafe 8K', href: '/automotivo/seguranca/skinsafe8k', desc: 'Proteção da pele a bordo.' },
            { label: 'Antivandalismo 13K', href: '/automotivo/seguranca/antivandalismo13k', desc: 'Barreira contra depredação rápida.' },
            { label: 'SkudoGuard', href: '/automotivo/seguranca/skudoguard', desc: 'Escudo estrutural após a quebra.' },
            { label: 'SkudoUltra', href: '/automotivo/seguranca/skudoultra', desc: 'Proteção estrutural máxima.' },
          ],
        },
      ],
      highlight: {
        label: 'Comparar Películas Solares',
        href: '/automotivo/solar',
        desc: 'Tabela técnica lado a lado — Performance, High Performance e Ultra Performance.',
      },
      footer: {
        title: 'Atendimento',
        items: [
          { label: t('nav.forMyCar'), href: '/automotivo' },
          { label: t('nav.forMyFleet'), href: '/frota' },
        ],
      },
    },
    {
      key: 'architecture',
      label: t('nav.architecture'),
      icon: Building2,
      columns: [
        {
          title: 'Controle Solar',
          items: [
            { label: 'Clear70', href: '/pt/arquitetonico/solar/clear70', desc: 'Transparência com rejeição de UV e IV.' },
            { label: 'Orizzonte70', href: '/pt/arquitetonico/solar/orizzonte70', desc: 'Neutro claro com conforto térmico.' },
            { label: 'Ultravioletti90', href: '/pt/arquitetonico/solar/ultravioletti90', desc: 'Bloqueio total de UV.' },
            { label: 'Naturale', href: '/pt/arquitetonico/solar/naturale', desc: 'Neutro discreto de baixa refletância.' },
            { label: 'Petrolio', href: '/pt/arquitetonico/solar/petrolio', desc: 'Tom petróleo de alto desempenho.' },
          ],
        },
        {
          title: 'Refletivos e Espelhados',
          items: [
            { label: 'Grigio Invertito', href: '/pt/arquitetonico/solar/grigio-invertito', desc: 'Espelhado interno para privacidade.' },
            { label: 'Metallico Argento', href: '/pt/arquitetonico/solar/metallico-argento', desc: 'Prata metálico de alta rejeição.' },
            { label: "Reflesso d'Argento", href: '/pt/arquitetonico/solar/reflesso-d-argento', desc: 'Refletivo prata elegante.' },
            { label: 'Specchiato Bronzo', href: '/pt/arquitetonico/solar/specchiato-bronzo', desc: 'Espelhado bronze premium.' },
          ],
        },
        {
          title: 'Segurança, Decorativo e SPF',
          items: [
            { label: 'ISSF4000', href: '/arquitetonico/seguranca/issf4000', desc: 'Segurança estrutural para vidros.' },
            { label: 'ISSF7000', href: '/arquitetonico/seguranca/issf7000', desc: 'Máxima proteção antiestilhaço.' },
            { label: 'Jateado', href: '/arquitetonico/decorativo/jateado', desc: 'Privacidade com efeito jateado.' },
            { label: 'Whiteout', href: '/arquitetonico/decorativo/whiteout', desc: 'Branco leitoso decorativo.' },
            { label: 'Blackout', href: '/arquitetonico/decorativo/blackout', desc: 'Blackout total para ambientes.' },
            { label: 'Phantom Glass & Matte', href: '/phantom-arquitetonico', desc: 'Vidro inteligente e acabamento fosco.' },
          ],
        },
      ],
      footer: {
        title: 'Atendimento',
        items: [
          { label: t('nav.forMyHome'), href: '/residencial' },
          { label: t('nav.forMyCompany'), href: '/empresarial' },
        ],
      },
    },
    {
      key: 'stores',
      label: 'Lojas e Aplicação Homologada',
      icon: MapPin,
      href: '/lojas',
    },
  ];

  const renderSimpleItems = (items: NavItem[]) =>
    items.map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className="block px-4 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-lg transition-all duration-200"
      >
        {item.label}
      </Link>
    ));

  const renderMegaPanel = (menu: NavMenu) => (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[min(96vw,1280px)] bg-card rounded-xl shadow-premium-lg border border-border p-6 z-50 animate-fade-in-up"
      onMouseEnter={() => setOpenMenu(menu.key)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        className={`grid gap-6 ${
          menu.columns!.length >= 5
            ? 'grid-cols-5'
            : menu.columns!.length === 4
            ? 'grid-cols-4'
            : 'grid-cols-3'
        }`}
      >
        {menu.columns!.map((col) => (
          <div key={col.title}>
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 px-2">
              {col.title}
            </p>
            <div className="flex flex-col gap-0.5">
              {col.items.map((it) => (
                <Link
                  key={it.href}
                  to={it.href}
                  onClick={() => setOpenMenu(null)}
                  className="group block px-2 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent leading-tight">
                    {it.label}
                  </div>
                  {it.desc && (
                    <div className="text-[11px] text-muted-foreground font-light leading-snug mt-0.5">
                      {it.desc}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {menu.highlight && (
        <Link
          to={menu.highlight.href}
          onClick={() => setOpenMenu(null)}
          className="group mt-5 flex items-center justify-between gap-4 rounded-lg border border-accent/40 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent px-5 py-4 hover:border-accent hover:from-accent/20 transition-all"
        >
          <div>
            <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
              Destaque
            </div>
            <div className="text-sm font-bold text-foreground group-hover:text-accent">
              {menu.highlight.label}
            </div>
            {menu.highlight.desc && (
              <div className="text-xs text-muted-foreground font-light mt-0.5">
                {menu.highlight.desc}
              </div>
            )}
          </div>
          <ChevronDown className="w-4 h-4 -rotate-90 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      )}
      {menu.footer && (
        <>
          <Separator className="my-4" />
          <div className="flex items-center gap-6 px-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {menu.footer.title}
            </span>
            {menu.footer.items.map((it) => (
              <Link
                key={it.href}
                to={it.href}
                onClick={() => setOpenMenu(null)}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );

  const renderMobileContent = (menu: NavMenu) => {
    if (menu.columns) {
      return (
        <>
          {menu.columns.map((col, idx) => (
            <div key={col.title}>
              {idx > 0 && <Separator className="my-1.5" />}
              <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-accent uppercase tracking-widest">
                {col.title}
              </p>
              {col.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          {menu.footer && (
            <>
              <Separator className="my-1.5" />
              <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {menu.footer.title}
              </p>
              {menu.footer.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </>
          )}
        </>
      );
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
      <div className="fixed top-0 left-0 right-0 z-[60] accent-stripe" />

      <header className="fixed top-[3px] left-0 right-0 z-50 bg-glass" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 lg:h-32">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <img
                src={logoDark}
                alt="INSULFILM™, A marca das películas"
                className="h-56 lg:h-80 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {megaMenuItems.map((menu) => {
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
                      menu.columns ? (
                        renderMegaPanel(menu)
                      ) : (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-premium-lg border border-border p-2 z-50 animate-fade-in-up">
                          {renderSimpleItems(menu.items ?? [])}
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
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

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ8iSTDUlUntDmBCWEjI51gUye8Tc-Ocw_Cw-yHHiZhjEj9Q/viewform" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200">
                  {t('nav.becomePartner')}
                </Button>
              </a>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="text-primary-foreground" aria-label={t('nav.openMenu')}>
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

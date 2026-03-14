import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, ChevronRight, Car, Building2, MapPin, Handshake, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import logoDark from '@/assets/logo-dark.png';

interface SubProduct { label: string; href: string }
interface Category { title: string; href: string; products: SubProduct[] }
interface MegaMenu {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  categories: Category[];
  sidebar: SubProduct[];
}

const megaMenus: MegaMenu[] = [
  {
    key: 'automotive',
    label: 'Automotivo',
    icon: Car,
    categories: [
      {
        title: 'Películas Solares',
        href: '/automotivo/solar',
        products: [
          { label: 'Dark', href: '/automotivo/solar/dark' },
          { label: 'Eclipse', href: '/automotivo/solar/eclipse' },
          { label: 'VIP', href: '/automotivo/solar/vip' },
          { label: 'Polariz Ultra', href: '/automotivo/solar/polariz-ultra' },
          { label: 'Matrix', href: '/automotivo/solar/matrix' },
        ],
      },
      {
        title: 'Proteção e Segurança',
        href: '/automotivo/seguranca',
        products: [
          { label: 'SkinSafe 8K', href: '/automotivo/seguranca/skinsafe-8k' },
          { label: 'Antivandalismo', href: '/automotivo/seguranca/antivandalismo-13k' },
          { label: 'SkudoGuard', href: '/automotivo/seguranca/skudoguard' },
          { label: 'SkudoUltra', href: '/automotivo/seguranca/skudoultra' },
        ],
      },
      {
        title: 'PPF — Proteção de Pintura',
        href: '/automotivo/ppf',
        products: [
          { label: 'Phantom 6 mil', href: '/automotivo/ppf/phantom-6' },
          { label: 'Phantom 8 mil', href: '/automotivo/ppf/phantom-8' },
        ],
      },
    ],
    sidebar: [
      { label: 'Ver tudo em Automotivo', href: '/automotivo' },
      { label: 'Atendimento Frota', href: '/frota' },
    ],
  },
  {
    key: 'architecture',
    label: 'Arquitetônico',
    icon: Building2,
    categories: [
      {
        title: 'Controle Solar',
        href: '/arquitetonico/solar',
        products: [
          { label: 'Clear 70', href: '/arquitetonico/solar/clear-70' },
          { label: 'Orizzonte 70', href: '/arquitetonico/solar/orizzonte-70' },
          { label: 'UV 90', href: '/arquitetonico/solar/uv-90' },
          { label: 'Naturale', href: '/arquitetonico/solar/naturale' },
          { label: 'Petrólio', href: '/arquitetonico/solar/petrolio' },
          { label: 'Grigio Invertito', href: '/arquitetonico/solar/grigio-invertito' },
          { label: 'Metallico Argento', href: '/arquitetonico/solar/metallico-argento' },
          { label: 'Reflesso D\'Argento', href: '/arquitetonico/solar/reflesso-dargento' },
          { label: 'Specchiato Bronzo', href: '/arquitetonico/solar/specchiato-bronzo' },
        ],
      },
      {
        title: 'Proteção e Segurança',
        href: '/arquitetonico/seguranca',
        products: [
          { label: 'ISSF 4000', href: '/arquitetonico/seguranca/issf-4000' },
          { label: 'ISSF 7000', href: '/arquitetonico/seguranca/issf-7000' },
        ],
      },
      {
        title: 'Decorativo',
        href: '/arquitetonico/decorativo',
        products: [
          { label: 'Jateado', href: '/arquitetonico/decorativo/jateado' },
          { label: 'Whiteout', href: '/arquitetonico/decorativo/whiteout' },
          { label: 'Blackout', href: '/arquitetonico/decorativo/blackout' },
        ],
      },
    ],
    sidebar: [
      { label: 'Ver tudo em Arquitetônico', href: '/arquitetonico' },
      { label: 'Projetos Empresariais', href: '/empresarial' },
    ],
  },
];

const fixedLinks = [
  { label: 'Lojas', href: '/lojas', icon: MapPin },
  { label: 'Parceiro', href: '/parceiro', icon: Handshake },
  { label: 'Quem Somos', href: '/quem-somos', icon: Users },
];

const WHATSAPP_URL = 'https://wa.me/5511976136911?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20instala%C3%A7%C3%A3o.';

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
              {/* Mega-menu items */}
              {megaMenus.map((menu) => (
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
                    <div className="absolute top-full left-0 mt-1 w-[600px] bg-card rounded-xl shadow-premium-lg border border-border z-50 animate-fade-in">
                      <div className="grid grid-cols-[1fr_200px]">
                        {/* Left column — categories */}
                        <div className="p-4 space-y-4">
                          {menu.categories.map((cat) => (
                            <div key={cat.href}>
                              <Link
                                to={cat.href}
                                className="text-sm font-bold text-foreground hover:text-accent transition-colors flex items-center gap-1"
                              >
                                {cat.title}
                                <ChevronRight className="w-3 h-3" />
                              </Link>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                                {cat.products.map((p) => (
                                  <Link
                                    key={p.href}
                                    to={p.href}
                                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                                  >
                                    {p.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Right column — sidebar */}
                        <div className="bg-muted/50 rounded-r-xl p-4 flex flex-col gap-2 border-l border-border">
                          {menu.sidebar.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Fixed links */}
              {fixedLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-link-premium flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: CTA + Mobile */}
            <div className="flex items-center gap-3">
              {/* CTA Desktop */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200">
                  Agendar
                </Button>
              </a>

              {/* Mobile Menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="text-primary-foreground">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-card border-border w-80 overflow-y-auto">
                  <SheetTitle className="text-foreground text-lg font-bold mb-6">
                    <img src={logoDark} alt="INSULFILM™" className="h-8 w-auto brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(10%) sepia(80%) saturate(5000%) hue-rotate(220deg)' }} />
                  </SheetTitle>
                  <nav className="flex flex-col gap-1">
                    {/* Mega-menu collapsibles */}
                    {megaMenus.map((menu) => (
                      <Collapsible
                        key={menu.key}
                        open={mobileExpanded === menu.key}
                        onOpenChange={(open) => setMobileExpanded(open ? menu.key : null)}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors">
                          <span className="flex items-center gap-2">
                            <menu.icon className="w-4 h-4" />
                            {menu.label}
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === menu.key ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="animate-accordion-down">
                          <div className="pl-3 pb-2 space-y-3">
                            {menu.categories.map((cat) => (
                              <div key={cat.href}>
                                <Link
                                  to={cat.href}
                                  className="block px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {cat.title}
                                </Link>
                                <div className="pl-6 space-y-0.5">
                                  {cat.products.map((p) => (
                                    <Link
                                      key={p.href}
                                      to={p.href}
                                      className="block py-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {p.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div className="border-t border-border pt-2 pl-3 space-y-1">
                              {menu.sidebar.map((link) => (
                                <Link
                                  key={link.href}
                                  to={link.href}
                                  className="block py-1 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}

                    {/* Fixed links */}
                    {fixedLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    ))}

                    {/* CTA */}
                    <div className="pt-4 px-3">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          Agendar
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

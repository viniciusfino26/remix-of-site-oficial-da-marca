import { cn } from '@/lib/utils';

type ArchitecturalLogoCarouselProps = {
  className?: string;
  title?: string;
  description?: string;
};

type LogoItem = {
  src: string;
  alt: string;
  className?: string;
};

const logoModules = import.meta.glob('@/assets/architectural-logos/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const logoEntries = Object.entries(logoModules).sort(([pathA], [pathB]) => pathA.localeCompare(pathB));

const logoItems: LogoItem[] = logoEntries.map(([path, src], index) => ({
  src,
  alt: `Logo institucional ${index + 1} aplicado em projetos arquitetônicos com soluções INSULFILM™.`,
  className: cn(
    index % 9 === 0 && 'w-[11rem] md:w-[13rem]',
    index % 7 === 0 && 'w-[8.5rem] md:w-[10rem]',
    index % 5 === 0 && 'w-[7.5rem] md:w-[8.5rem]',
  ),
}));

const topRowLogos = logoItems.filter((_, index) => index % 2 === 0);
const bottomRowLogos = logoItems.filter((_, index) => index % 2 === 1);
const marqueeCopies = [0, 1] as const;

const LogoTrack = ({
  logos,
  direction,
}: {
  logos: LogoItem[];
  direction: 'left' | 'right';
}) => (
  <div
    className={cn(
      'flex w-max gap-5 will-change-transform motion-reduce:animate-none md:gap-8',
      direction === 'left' ? 'animate-logo-marquee-left' : 'animate-logo-marquee-right',
    )}
  >
    {marqueeCopies.map((copyIndex) => (
      <div key={`${direction}-${copyIndex}`} className="flex shrink-0 items-center gap-5 md:gap-8" aria-hidden={copyIndex === 1}>
        {logos.map((logo, index) => (
          <div
            key={`${direction}-${copyIndex}-${index}`}
            className="flex h-16 w-[8rem] shrink-0 items-center justify-center md:h-20 md:w-[10rem]"
          >
            <img
              src={logo.src}
              alt={copyIndex === 0 ? logo.alt : ''}
              className={cn('max-h-11 w-auto max-w-full select-none object-contain md:max-h-14', logo.className)}
              loading={copyIndex === 0 && index < 6 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

const ArchitecturalLogoCarousel = ({
  className,
  title = 'Marcas e projetos que confiaram em soluções INSULFILM™',
  description = 'Aplicações em ambientes corporativos, institucionais, comerciais e de alto fluxo.',
}: ArchitecturalLogoCarouselProps) => {
  return (
    <section className={cn('bg-card py-16 md:py-20', className)} aria-labelledby="architectural-logo-carousel-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent md:text-sm">
            Prova social institucional
          </p>
          <h2 id="architectural-logo-carousel-title" className="text-2xl font-extrabold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-lg border border-border/60 bg-card px-3 py-5 shadow-premium md:mt-12 md:px-5 md:py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card via-card/90 to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card via-card/90 to-transparent md:w-20" />

          <div className="space-y-4 md:space-y-5">
            <LogoTrack logos={topRowLogos} direction="left" />
            <LogoTrack logos={bottomRowLogos} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalLogoCarousel;
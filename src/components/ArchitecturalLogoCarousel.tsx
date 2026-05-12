import { cn } from '@/lib/utils';
import logosStrip from '@/assets/architectural-logos-strip.png';

type ArchitecturalLogoCarouselProps = {
  className?: string;
  title?: string;
  description?: string;
};

const StripTrack = ({ direction }: { direction: 'left' | 'right' }) => (
  <div
    className={cn(
      'flex w-max items-center gap-8 will-change-transform motion-reduce:animate-none md:gap-12',
      direction === 'left' ? 'animate-logo-marquee-left' : 'animate-logo-marquee-right',
    )}
  >
    {[0, 1].map((copyIndex) => (
      <img
        key={`${direction}-${copyIndex}`}
        src={logosStrip}
        alt={
          copyIndex === 0
            ? 'Marcas e projetos institucionais que confiaram em soluções INSULFILM™ em ambientes arquitetônicos.'
            : ''
        }
        aria-hidden={copyIndex === 1}
        className="h-16 w-auto max-w-none select-none object-contain md:h-24 lg:h-28"
        loading={copyIndex === 0 ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
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

        <div className="relative mt-10 overflow-hidden rounded-lg border border-border/60 bg-card px-3 py-6 shadow-premium md:mt-12 md:px-5 md:py-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card via-card/90 to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card via-card/90 to-transparent md:w-20" />

          <div className="space-y-4 md:space-y-6">
            <StripTrack direction="left" />
            <StripTrack direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalLogoCarousel;

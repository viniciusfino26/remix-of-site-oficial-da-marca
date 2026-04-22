import architecturalLogosStrip from '@/assets/architectural-logos-strip.png';
import { cn } from '@/lib/utils';

type ArchitecturalLogoCarouselProps = {
  className?: string;
  title?: string;
  description?: string;
};

const marqueeCopies = [0, 1] as const;

const ArchitecturalLogoCarousel = ({
  className,
  title = 'Marcas e projetos que confiaram em soluções INSULFILM™',
  description = 'Aplicações em ambientes corporativos, institucionais, comerciais e de alto fluxo.',
}: ArchitecturalLogoCarouselProps) => {
  return (
    <section className={cn('bg-card py-16 md:py-20', className)} aria-labelledby="architectural-logo-carousel-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Prova social institucional
          </p>
          <h2 id="architectural-logo-carousel-title" className="text-3xl font-extrabold text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-lg border border-border/60 bg-card shadow-premium md:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card to-transparent md:w-20" />

          <div className="flex w-max gap-8 px-4 py-8 will-change-transform animate-logo-marquee motion-reduce:animate-none md:gap-12 md:px-6 md:py-10">
            {marqueeCopies.map((copyIndex) => (
              <div
                key={copyIndex}
                className="flex shrink-0 items-center"
                aria-hidden={copyIndex === 1}
              >
                <img
                  src={architecturalLogosStrip}
                  alt={copyIndex === 0 ? 'Logos de clientes, parceiros e projetos atendidos com soluções arquitetônicas INSULFILM™.' : ''}
                  className="h-32 w-auto max-w-none select-none object-contain md:h-40"
                  loading={copyIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalLogoCarousel;
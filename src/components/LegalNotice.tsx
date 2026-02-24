import { useTranslation } from 'react-i18next';

const LegalNotice = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-carbon-gradient text-primary-foreground border-t border-primary-foreground/10" aria-label={t('legal.ariaLabel')}>
      <div className="container mx-auto px-4 py-10 text-center max-w-4xl">
        {/* Trademark Statement */}
        <p className="font-bold text-sm text-primary-foreground/80 mb-6">
          INSULFILM™ {t('legal.trademark')}
        </p>

        {/* Industrial Property Notice */}
        <h3 className="font-bold text-sm text-primary-foreground/70 mb-4">
          {t('legal.propertyTitle')}
        </h3>
        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-2">
          {t('legal.propertyText1')}{' '}
          <a
            href="https://www.gov.br/inpi/pt-br/servicos/marcas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            INPI – Instituto Nacional de Propriedade Industrial
          </a>
          {'. '}
          {t('legal.propertyText2')}
        </p>
        <p className="text-xs text-primary-foreground/50 leading-relaxed">
          {t('legal.propertyText3')}
        </p>

        {/* Orange separator */}
        <div className="w-24 h-[2px] bg-accent mx-auto my-8" />

        {/* Anti-Piracy Notice */}
        <h3 className="font-bold text-sm text-primary-foreground/70 mb-4">
          {t('legal.piracyTitle')}
        </h3>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-4">
          {t('legal.piracyText1')}
        </p>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-4">
          {t('legal.piracyText2')}
        </p>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-3">
          {t('legal.piracyLaw')}
        </p>

        {/* Art. 189 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed mb-4 px-4">
          {t('legal.art189')}
        </blockquote>

        {/* Art. 195 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed mb-4 px-4">
          {t('legal.art195')}
        </blockquote>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-3">
          {t('legal.cdcIntro')}
        </p>

        {/* Art. 4 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed mb-4 px-4">
          {t('legal.art4')}
        </blockquote>

        {/* Art. 6 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed px-4">
          {t('legal.art6')}
        </blockquote>
      </div>
    </section>
  );
};

export default LegalNotice;

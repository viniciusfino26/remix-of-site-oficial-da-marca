import { Helmet } from 'react-helmet-async';

export type Segment = 'residencial' | 'comercial';

const DEFAULT_DESCRIPTION = "INSULFILM™ é marca registrada. O uso do termo 'insulfilm' por terceiros não é autorizado.";

interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalUrl: string;
  segment?: Segment;
  ogTitle?: string;
  ogDescription?: string;
  schemaMarkup?: Record<string, unknown>;
}

const segmentLabel: Record<Segment, string> = {
  residencial: 'Residencial',
  comercial: 'Comercial',
};

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  segment,
  ogTitle,
  ogDescription,
  schemaMarkup,
}: SEOHeadProps) => {
  const segmentSuffix = segment ? ` — ${segmentLabel[segment]}` : '';
  const fullTitle = `${title}${segmentSuffix} | INSULFILM™`;
  const finalDescription = description || DEFAULT_DESCRIPTION;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      {schemaMarkup && (
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;

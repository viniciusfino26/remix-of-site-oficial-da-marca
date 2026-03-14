import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.insulfilm.com.br${item.href}` } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-24 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground font-[Inter,sans-serif]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && <span className="text-muted-foreground/50">›</span>}
                {isLast ? (
                  <span className="font-medium text-foreground">{item.label}</span>
                ) : (
                  <Link to={item.href!} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default PageBreadcrumb;

const LegalNotice = () => {
  return (
    <section className="bg-carbon-gradient text-primary-foreground border-t border-primary-foreground/10" aria-label="Aviso de Propriedade Industrial">
      <div className="container mx-auto px-4 py-10 text-center max-w-4xl">
        <h3 className="font-bold text-sm text-primary-foreground/80 mb-4">
          Aviso de Propriedade Industrial e Intelectual
        </h3>
        <p className="text-xs text-primary-foreground/50 leading-relaxed">
          A INSULFILM DO BRASIL é a legítima proprietária e detentora exclusiva dos direitos sobre a marca INSULFILM™ para negócios, produtos e serviços, devidamente registrada junto ao{' '}
          <a
            href="https://www.gov.br/inpi/pt-br/servicos/marcas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            INPI – Instituto Nacional de Propriedade Industrial
          </a>
          . Seus registros são públicos e estão em plena vigência desde 1987, sob os números 813633370, 813633389, 813633451, 813633460, 814699421, 818911069, 822317508, 822553090, 822553104, 822553112, 822553120, 822553120. Qualquer uso da marca INSULFILM™, sem autorização expressa, constitui violação de direitos protegidos pela legislação vigente e está sujeito às medidas legais cabíveis.
        </p>
      </div>
    </section>
  );
};

export default LegalNotice;

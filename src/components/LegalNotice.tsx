const LegalNotice = () => {
  return (
    <section className="bg-carbon-gradient text-primary-foreground border-t border-primary-foreground/10" aria-label="Aviso de Propriedade Industrial">
      <div className="container mx-auto px-4 py-10 text-center max-w-4xl">
        {/* Trademark Statement */}
        <p className="font-bold text-sm text-primary-foreground/80 mb-6">
          INSULFILM™ é marca registrada da INSULFILM DO BRASIL.
        </p>

        {/* Industrial Property Notice */}
        <h3 className="font-bold text-sm text-primary-foreground/70 mb-4">
          Aviso de Propriedade Industrial e Intelectual
        </h3>
        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-2">
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

        {/* Orange separator */}
        <div className="w-24 h-[2px] bg-accent mx-auto my-8" />

        {/* Anti-Piracy Notice */}
        <h3 className="font-bold text-sm text-primary-foreground/70 mb-4">
          Combate à Pirataria e ao Uso Indevido da Marca
        </h3>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-4">
          A INSULFILM DO BRASIL informa que não autoriza, não licencia e não possui qualquer vínculo com estabelecimentos, produtos ou serviços que utilizem a marca INSULFILM™ sem a devida autorização. A comercialização de produtos falsificados ou a prestação de serviços sob a marca INSULFILM™ sem autorização configura crime contra a propriedade industrial.
        </p>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-4">
          A empresa mantém um programa permanente de combate à pirataria e ao uso indevido de sua marca, adotando medidas administrativas, cíveis e criminais contra infratores em todo o território nacional.
        </p>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-3">
          Lei nº 9.279/96 — Lei da Propriedade Industrial:
        </p>

        {/* Art. 189 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed mb-4 px-4">
          "Art. 189 — Comete crime contra registro de marca quem reproduz, sem autorização do titular, no todo ou em parte, marca registrada, ou imita-a de modo que possa induzir confusão. Pena — detenção, de 3 (três) meses a 1 (um) ano, ou multa."
        </blockquote>

        {/* Art. 195 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed mb-4 px-4">
          "Art. 195 — Comete crime de concorrência desleal quem usa, indevidamente, nome comercial, título de estabelecimento ou insígnia alheios ou vende, expõe ou oferece à venda ou tem em estoque produto com essas referências. Pena — detenção, de 3 (três) meses a 1 (um) ano, ou multa."
        </blockquote>

        <p className="text-xs text-primary-foreground/50 leading-relaxed mb-3">
          Código de Defesa do Consumidor (Lei nº 8.078/90):
        </p>

        {/* Art. 4 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed mb-4 px-4">
          "Art. 4º — A Política Nacional das Relações de Consumo tem por objetivo o atendimento das necessidades dos consumidores, o respeito à sua dignidade, saúde e segurança, a proteção de seus interesses econômicos, a melhoria da sua qualidade de vida, bem como a transparência e harmonia das relações de consumo."
        </blockquote>

        {/* Art. 6 */}
        <blockquote className="text-xs text-primary-foreground/45 italic leading-relaxed px-4">
          "Art. 6º — São direitos básicos do consumidor: III — a informação adequada e clara sobre os diferentes produtos e serviços, com especificação correta de quantidade, características, composição, qualidade, tributos incidentes e preço, bem como sobre os riscos que apresentem."
        </blockquote>
      </div>
    </section>
  );
};

export default LegalNotice;

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const LegalDisclaimer = () => (
  <motion.aside
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="max-w-3xl mx-auto my-10 px-6 py-5 rounded-xl border border-border/20 bg-muted/30 space-y-3 text-xs md:text-sm text-muted-foreground/80 leading-relaxed font-light"
    aria-label="Aviso legal INSULFILM™"
  >
    <p>
      <span className="font-semibold text-foreground/80">Uso restrito.</span> A marca identifica películas, aplicações e comunicações vinculadas ao Ecossistema INSULFILM™ oficial seu uso é restrito às empresas licenciadas integrantes.
    </p>
    <p>
      A origem oficial de uma aplicação deve ser sempre verificável pelos canais institucionais: Lojas Oficiais, certificado individual, selo de autenticidade e demais elementos de rastreabilidade emitidos dentro do Ecossistema INSULFILM™.
    </p>
    <p>
      Benefícios, desempenho, garantias, coberturas e condições de reaplicação variam conforme a linha aplicada, a película técnica adotada, as condições do vidro, a documentação apresentada e o plano vigente sempre regidos pelas orientações institucionais oficiais.
    </p>
    <p>
      Nenhuma responsabilidade é aceita por erros. As representações visuais são apenas para fins ilustrativos; a aparência real dos vidros aplicados com a película pode variar.
    </p>
    <p className="pt-2 border-t border-border/20 text-muted-foreground/70">
      <span className="font-semibold text-foreground/70">Gestão institucional:</span> FÊNIX MAIOR PARTICIPAÇÕES LTDA. · CNPJ 65.685.208/0001-37
    </p>
  </motion.aside>
);

export default LegalDisclaimer;

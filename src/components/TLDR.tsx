// src/components/TLDR.tsx
// Bloco GEO/LLM-first: resposta direta + specs em <dl> semântico.
// Renderizado SEM framer-motion para garantir extração por crawlers leves e LLMs.

import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface TLDRSpec {
  label: string;
  value: string;
}

interface TLDRProps {
  /** Pergunta canônica que essa página responde. Vira <h2>. */
  question: string;
  /** Resposta em 1-3 frases — a primeira frase deve ser auto-suficiente. */
  answer: string;
  /** Tabela de especificações chave-valor. 4-8 itens ideal. */
  specs?: TLDRSpec[];
  /** Texto opcional de contexto após a resposta. */
  context?: string;
}

const TLDR = ({ question, answer, specs, context }: TLDRProps) => {
  return (
    <section
      aria-label="Resumo da página"
      className="py-12 bg-background border-y border-border/40"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-accent/10 text-accent border-accent/20 text-xs uppercase tracking-widest px-3 py-1">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Resumo
          </Badge>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
          {question}
        </h2>

        <p className="text-base md:text-lg text-foreground/85 font-light leading-relaxed mb-3">
          {answer}
        </p>

        {context && (
          <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6">
            {context}
          </p>
        )}

        {specs && specs.length > 0 && (
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mt-6 pt-6 border-t border-border/40">
            {specs.map((spec, i) => (
              <div key={i} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  {spec.label}
                </dt>
                <dd className="text-base font-bold text-foreground">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
};

export default TLDR;

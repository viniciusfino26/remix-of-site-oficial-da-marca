

# Redesign Completo da Pagina SkudoUltra — Conceito SkudoGuard

## Resumo

Reescrever a pagina SkudoUltra seguindo o mesmo conceito emocional e agressivo da pagina SkudoGuard, com video embedado, dados oficiais do PDF, estatisticas de orgaos publicos, e o texto fornecido pelo usuario. Todos os textos serao hardcoded em portugues (sem i18n), igual ao SkudoGuard.

---

## Estrutura da Pagina (seguindo SkudoGuard)

### Secao 1 — HERO + VIDEO
- Badge: "Pelicula de Extrema Seguranca"
- Titulo: INSULFILM™ SkudoUltra
- Subtitulo: texto fornecido pelo usuario — "Seguranca superior contra ataques repetidos e agressivos para invasao"
- Video embedado: `https://www.youtube.com/embed/iiN1wWGiECw` (autoplay, muted, loop, sem controles, pointer-events-none + overlay z-10, exatamente como SkudoGuard)

### Secao 2 — A REALIDADE DA VIOLENCIA (stats com CountUp)
- Mesma estrutura do SkudoGuard: 4 cards glass-card com estatisticas de orgaos publicos
- Dados adaptados para o contexto do Ultra (insistencia do agressor, tempo de resistencia)
- Fonte: SSP-SP, Forum Brasileiro de Seguranca Publica, Atlas da Violencia

### Secao 3 — DESCRICAO DO PRODUTO
- Texto oficial do PDF (pagina 2): "Pelicula premium de extrema seguranca para blindagem dos vidros contra armas brancas pesadas..."
- Texto do usuario integrado como paragrafo principal de posicionamento
- Checklist com diferenciais (retirados do PDF): retencao de fragmentos, nao altera originalidade, nao interfere em sinais eletronicos, etc.

### Secao 4 — O QUE ACONTECE EM SEGUNDOS (danger cards)
- Mesma estrutura do SkudoGuard: cards emocionais com icones
- Adaptados para Ultra: enfase na insistencia do agressor e o fato de que com o Ultra, o marginal DESISTE (conforme video comprova)
- Card especifico: "O Marginal Desiste" — referencia ao video que comprova

### Secao 5 — DIFERENCIAIS TECNICOS
- Dados oficiais do PDF:
  - Multicamadas com TETRA laminacao industrial (vs tripla do SkudoGuard)
  - Poliester de alta densidade
  - Adesivo performance
  - Nitidez optica cristal

### Secao 6 — PROPRIEDADES FISICAS (dados oficiais do PDF)
- Espessura: 24 mil / 609,6 micras / 0,609 mm
- Forca de Ruptura: 440 lbs/in (PLI) / 78,57 kgf/cm
- Forca de Puncao: 375 lbs / 151,95 kg
- Resistencia a Tensao: 32.000 PSI / 2.249,82 kgf/cm2
- Alongamento na Ruptura: 200%
- Forca de Arrancamento: >5 lbs/in (PLI) / >892,89 g/cm

### Secao 7 — COMPARATIVO SkudoGuard vs SkudoUltra (manter existente)
- Tabela comparativa ja existente, atualizada com dados oficiais do PDF

### Secao 8 — GARANTIA (dados oficiais do PDF)
- Garantia Produto: 10 anos (falha adesiva, delaminacao, rachadura)
- Garantia Servico: descolamento e bolha
- Reposicao gratuita das peliculas nos vidros moveis das portas laterais
- Metodos de teste: ANSI 97, ASTM E-308, ASTM E-903, ASTM D-882, ASTM D-1044

### Secao 9 — CTA FINAL
- WhatsApp com mensagem sobre SkudoUltra

---

## Detalhes Tecnicos

### Arquivo editado: `src/pages/SkudoUltra.tsx`
- Reescrita completa seguindo a estrutura do SkudoGuard
- Adicionar imports: useEffect, useState, useInView, Accordion, e icones extras (AlertTriangle, HeartCrack, UserX, Swords, ShieldAlert, Users, Award, FileText, Quote, etc.)
- Adicionar componente CountUp (copiar do SkudoGuard)
- Video YouTube ID: `iiN1wWGiECw`
- Textos hardcoded em portugues (sem useTranslation), mesmo padrao do SkudoGuard
- Dados fisicos atualizados conforme PDF oficial

### Texto exato do usuario (sera usado na secao de descricao):
"Se a sua expectativa e seguranca superior em situacoes em que nao ha possibilidade de rapida evasao e o agressor insiste na abordagem, o INSULFILM™ SkudoUltra e a defesa projetada para isso. Com resistencia muito acima do antivandalismo, enfrenta situacoes mais agressivas de tentativa de invasao com o uso de armas brancas. Reforca o vidro antes e, principalmente, depois da quebra - dificultando de forma significativa o acesso imediato. Torna vidro + pelicula um escudo de dificil ruptura, mesmo diante de investidas repetidas. E a escolha para quem quer um desempenho de resistencia alem do padrao que o agressor espera encontrar."

### Nenhum arquivo adicional necessario
- Mesmos componentes shadcn/ui ja utilizados
- Mesmas animacoes Framer Motion


## Plano: Refazer a página SkinSafe8K

### Problema

A página atual `/automotivo/seguranca/skinsafe8k` usa traduções i18n genéricas focadas em specs do produto (UV, transparência). O site de referência e o briefing pedem foco na **dor do cliente** (lesões, estilhaços, risco para ocupantes) e não no carro. Também falta o espaço para vídeo no topo (igual ao Antivandalismo13K).

### Alterações

**Arquivo: `src/pages/SkinSafe8K.tsx**` - Reescrita completa

**1. Hero + Vídeo (igual ao Antivandalismo13K)**

- Hero com badge "Película de Proteção", título "INSULFILM™ SkinSafe8K", subtítulo "Laminação do vidro em quebras acidentais"
- Abaixo do título, espaço para vídeo no mesmo layout do Antivandalismo13K (`max-w-7xl`, `aspect-video`, `rounded-2xl`, placeholder cinza com texto "Vídeo em breve")

**2. Seção de contexto emocional (texto fornecido)**

- Texto: "Mesmo com tantos itens de segurança, o vidro ainda é a parte mais frágil do carro..."
- Descrição do produto baseada no site de referência: película de proteção para laminação dos fragmentos projetados em quebras acidentais
- Três checkmarks do site original:
  - Não aplicável à furtos
  - Não interfere em sinais de celulares
  - Não altera a originalidade do veículo

**3. Seção "O perigo real" (foco na dor do cliente)**

- Cards emocionais similares ao Antivandalismo13K (`dangerCards`):
  - Estilhaços projetados (vidro temperado se fragmenta)
  - Risco para olhos e rosto
  - Cortes na pele exposta
  - Crianças vulneráveis no banco traseiro

**4. Aplicabilidade**

- Baseado no site: área de cobertura SkinSafe8K + Solar nos vidros laterais e traseiro

**5. Propriedades Mecânicas (do site de referência)**

- Força de Ruptura: 176 lbs/in (31,4 kgf/cm)
- Força de Punção: 87 lbs (39,4 kg)
- Resistência à Tensão: 20.197 PSI (1.420 kgf/cm)
- Alongamento na Ruptura: 62%
- Força de Arrancamento: >3 lbs/in (>535,73 g/cm)

**6. Propriedades Solares (do site)**

- Energia Solar Rejeitada: 16%
- Proteção UV: 30%
- Transmissão Luz Visível: 83%

**7. Benefícios Ópticos e Solares**

- Alta nitidez óptica (transparência cristal)
- Em combinação com película solar: 100% UV, privacidade, conforto visual

**8. Garantia**

- Produto: 5 anos (falha adesiva, delaminação, rachadura)
- Serviço: riscos, rasgos, frestas, bolhas

**9. CTA Final**

- "Proteja sua pele" com WhatsApp

**10. Textos hardcoded em PT-BR** (sem i18n, direto no componente, como o Antivandalismo13K faz nas seções emocionais)

**Arquivo: `src/i18n/locales/pt.json**` - Atualizar as chaves `skinSafe.*` para refletir os novos textos (as que forem usadas)

### Estrutura final

```text
Hero (escuro) + placeholder vídeo (aspect-video, max-w-7xl)
Texto complementar + descrição do produto + 3 checkmarks
Seção emocional "O perigo real" (cards de dor do cliente)
ParallaxBreak (7 mil / 100% retenção / 5 anos)
Aplicabilidade (laterais + traseiro)
Propriedades Mecânicas (5 specs do site)
Propriedades Solares (3 specs)
Benefícios Ópticos e Solares (4 cards)
Garantia (produto + serviço)
CTA final
```

Arquivos alterados: `src/pages/SkinSafe8K.tsx` (reescrita), `src/i18n/locales/pt.json` (atualização das chaves skinSafe)
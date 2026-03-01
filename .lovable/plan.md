

## Plano: Redesign completo da página Hub Solar Automotivo

Reescrita total de `src/pages/AutomotivoHubSolar.tsx` para fundo branco com textos 100% iguais à referência.

### Mudanças textuais (dados dos produtos)

| Produto | Campo | Texto da referência |
|---|---|---|
| **Dark** | badge | `Tecnologia: 2ª Geração` / `Série: Pigmentada` |
| **Dark** | text | "Proteção solar com foco em privacidade, controle da luminosidade excessiva e filtro elevado dos raios ultravioletas (UV). Oferece ótima nitidez ótica interna para dirigir, enquanto protege você e o carro dos efeitos indesejados à exposição solar direta.\n\nVisual: não refletivo, cor preta não opaca." |
| **Eclipse** | badge | `Tecnologia: 3ª Geração` / `Série: Carbono` |
| **Eclipse** | text | Texto focado em privacidade + durabilidade prolongada + carbono puro + infravermelho avançado + UV + alta definição. "Visual: não refletivo, cor carbono não opaco." |
| **Vip** | badge | `Tecnologia: 3ª Geração evoluída` / `Série: Carbono-Cerâmica, extra rejeição IR` |
| **Vip** | text | Película carbono puro + IRR potencializada. "Visual: não refletivo, cor carbono não opaco." |
| **Matrix** | badge | `Tecnologia: 4ª Geração` / `Série: Cerâmica, máxima rejeição IR` |
| **Matrix** | text | "Extra-classe. Película espectro seletiva, enriquecida por cerâmica incorporada em nano partículas..." "Visual: não refletivo, cor preta não opaca." |
| **Polariz Ultra** | badge | `Tecnologia: 5ª Geração` / `Série: Cerâmica metalizada` |
| **Polariz Ultra** | text | "Exclusiva. Película espectro seletiva híbrida: metalizada combinada à cerâmica..." "Visual: polarizado de baixa refletividade, cor grafite não opaco." |

### Mudanças visuais

1. **Hero**: Manter estrutura mas com fundo de imagem (foto de cidade/prédios com carro como na referência) — por ora usar placeholder cinza. Badge "Películas Premium / Sinta a diferença" com fundo accent à esquerda. Texto hero à direita em branco sobre fundo escuro.

2. **Navegação/Tabs**: Fundo branco. Título "ENCONTRE O SEU INSULFILM™ IDEAL" + subtítulo "Conheça nossas películas". Tabs como chips — primeiro com fundo escuro (`bg-gray-900 text-white`), demais outline. Incluir "Transparente" entre Matrix e Polariz Ultra separado por pipe `|`.

3. **Produtos**: Fundo `bg-white`. Placeholders de imagem em `bg-gray-200 rounded-xl`. Separadores como `border-b border-gray-200`. Botão "EXPLORE" em outline escuro (`border-gray-800 text-gray-800`). Badge de tecnologia/série mostrado com ícone de engrenagem ao lado. Layout alternado mantido.

4. **Benefícios**: Fundo branco. Layout em linha (flex-wrap) com ícones + texto abaixo — sem cards. "PACOTE COMPLETO DE GARANTIAS / CERTIFICADO INDIVIDUAL" centralizado abaixo. Textos: "MÁXIMA REJEIÇÃO DE CALOR, RAIOS UV E IR", "EXCELENTE VISIBILIDADE INTERNA", "PRIVACIDADE E SEGURANÇA VISUAL", "CELULARES E ELETRÔNICOS", "DESIGN SOFISTICADO".

5. **CTA Final**: Barra accent com "Exija as películas originais INSULFILM™!" + "Sofisticação e Proteção Solar de verdade para você e a sua família."

6. **Remover**: ParallaxBreak, seção de orçamento com botões (Lojas/Aplicador/WhatsApp), `bg-carbon-gradient`, `glass-card`, `bg-hero-texture`.

### Arquivo alterado
- `src/pages/AutomotivoHubSolar.tsx` — reescrita completa


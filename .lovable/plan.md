
Objetivo

Refatorar a seção de logos em `/arquitetonico` para sair do formato de faixa única “blocada” e virar um carrossel institucional em dois andares, com logos individuais lado a lado, movimento contínuo em direções opostas, velocidade maior e visual mais próximo da referência enviada.

Direção visual aprovada

- Os logos poderão ser convertidos para uma cor neutra preta para reduzir competição visual com a página.
- O fundo da seção continuará branco para destacar as marcas com leitura limpa e premium.
- A intenção será institucional, não promocional: menos peso visual no topo da seção e mais protagonismo para o carrossel.

O que será alterado

1. Nova estrutura do carrossel
- Substituir a imagem-strip única atual por logos individuais transparentes.
- Organizar os logos em duas trilhas horizontais independentes.
- Linha superior: logos entrando pela direita e saindo pela esquerda.
- Linha inferior: logos entrando pela esquerda e saindo pela direita.
- Duplicar cada trilha no DOM para formar loop contínuo sem salto perceptível.

2. Tratamento dos logos
- Extrair todos os logos da imagem enviada em arquivos individuais.
- Remover fundo branco e salvar com transparência real.
- Aplicar versão monocromática preta/neutra para uniformizar a seção e evitar excesso de ruído visual.
- Preservar proporção original com `object-contain`.
- Ajustar largura/escala por logo apenas quando necessário para equilibrar marcas muito largas ou compactas.
- Não usar mais a composição raster inteira como faixa única.

3. Componente `ArchitecturalLogoCarousel`
- Refatorar `src/components/ArchitecturalLogoCarousel.tsx` para trabalhar com um array de logos e metadados.
- Dividir o conjunto em duas linhas com distribuição equilibrada.
- Manter `title` e `description` como props, mas reduzir seu protagonismo visual se necessário para deixar o carrossel mais forte.
- Aplicar `aria-hidden` apenas nas cópias duplicadas de cada trilha.
- Manter estrutura desacoplada para permitir reposicionamento futuro na página.

4. CSS e animações
- Remover a animação única atual baseada em `animate-logo-marquee`.
- Criar duas animações dedicadas em `src/index.css`, por exemplo:
  - `logo-marquee-left`
  - `logo-marquee-right`
- Usar `transform: translate3d(...)` para suavidade e melhor performance.
- Aumentar a velocidade para cerca de 2x em relação ao estado atual, mantendo leitura confortável.
- Preservar compatibilidade com `prefers-reduced-motion`, pausando ou desativando o movimento.

5. Integração na página
- Manter a seção posicionada após o bloco de credenciais institucionais e antes de `#solucoes-arquitetonicas`.
- Esse ponto continua sendo o mais forte para jornada do lead: autoridade primeiro, prova social em seguida, soluções depois.

Arquivos envolvidos

- `src/components/ArchitecturalLogoCarousel.tsx`
  - refatorar para duas trilhas e logos individuais
- `src/index.css`
  - substituir animação única por duas animações opostas
- `src/pages/Arquitetonico.tsx`
  - manter a seção no ponto atual, com eventual ajuste fino de espaçamento
- `src/assets/architectural-logos/*`
  - novos assets individuais transparentes e neutralizados em preto

Detalhes técnicos

- Estrutura sugerida dos dados:
```ts
type LogoItem = {
  src: string;
  alt: string;
  className?: string;
};
```

- Estrutura visual sugerida:
```text
[título opcional mais discreto]

[ faixa 1 -> -> -> -> ]
[ <- <- <- faixa 2  ]
```

- Estratégia de loop:
  - renderizar a sequência original + cópia da mesma sequência em cada linha;
  - animar exatamente metade da largura útil da trilha;
  - usar gaps fixos e consistentes para não gerar trancos visuais.

- Tratamento de cor:
  - priorizar logos em preto sólido ou preto suavizado;
  - preservar contraste e legibilidade sobre branco;
  - evitar tons de marca muito chamativos nessa seção.

Validação após implementação

- Confirmar que a seção não parece mais uma faixa única “blocada”.
- Verificar duas linhas contínuas com leitura clara e respiro consistente.
- Validar os sentidos opostos corretos entre linha superior e inferior.
- Confirmar velocidade mais rápida que a atual, mas ainda legível.
- Garantir que todos os logos da imagem foram contemplados.
- Verificar transparência real dos assets.
- Testar desktop e mobile sem corte, distorção ou compressão.
- Confirmar que os logos em preto não roubam atenção da página, mas reforçam autoridade visual.
- Garantir loop contínuo sem salto perceptível.

Resultado esperado

A seção passará a ter aparência mais sofisticada, fluida e institucional, com duas faixas de logos em sentidos opostos, maior dinamismo, menos sensação de bloco único e melhor integração visual com a página `/arquitetonico`.

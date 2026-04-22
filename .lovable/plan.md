
Objetivo
Criar uma nova seção de prova social na página `/arquitetonico` com carrossel horizontal infinito de logos, usando todos os logos da imagem enviada, em fundo branco, com movimento contínuo e suave, alta nitidez e comportamento responsivo.

Melhor posição na página
Posicionamento recomendado: após a seção de credenciais institucionais e antes do primeiro bloco de soluções arquitetônicas.

Por que essa posição faz mais sentido:
- mantém a hero e a introdução focadas em dor, contexto e autoridade da marca;
- usa os logos como prova social no momento em que o lead já entendeu a proposta e precisa de validação;
- funciona como ponte visual elegante entre a parte institucional e a navegação pelas soluções;
- o fundo branco do carrossel cria um respiro premium entre blocos mais densos, chamando atenção sem parecer promocional.

O que será construído
1. Nova seção institucional de logos
- Fundo branco sólido para destacar os logos.
- Título curto e institucional, em linha com a página.
- Subtítulo opcional e discreto, sem exagero comercial.
- Estrutura isolada para que a seção possa ser reposicionada facilmente dentro de `/arquitetonico`.

2. Carrossel horizontal contínuo em loop infinito
- Movimento automático, suave e constante.
- Velocidade baixa para média.
- Loop visual sem “tranco”, usando duplicação da trilha de logos para continuidade real.
- Sem setas, sem paginação e sem aparência de slider promocional.

3. Tratamento dos logos
- Usar todos os logos presentes na imagem enviada.
- Recortar cada logo como asset individual.
- Remover o fundo branco para gerar arquivos com transparência.
- Preservar proporção original de cada marca.
- Aplicar limite de altura consistente, sem distorção, corte ou compressão.
- Manter nitidez com export em boa resolução e renderização com `object-contain`.

Abordagem técnica
1. Preparação dos assets
- Extrair os logos da arte enviada e salvá-los como arquivos individuais transparentes.
- Armazenar os arquivos em `src/assets/` para importação tipada e melhor bundling.
- Montar uma lista de logos em array local com `src`, `alt`, largura/altura relativas e eventual ajuste fino por marca.

2. Implementação do carrossel
- Criar um componente dedicado, por exemplo `ArchitecturalLogoCarousel`.
- Usar uma trilha CSS animada com `transform: translateX(...)` e keyframes, em vez do carousel interativo atual.
- Duplicar a sequência de logos no DOM para obter loop visual infinito e contínuo.
- Usar máscara/gradiente suave nas laterais, se necessário, para entrada e saída mais elegante.
- Respeitar `prefers-reduced-motion` para acessibilidade, reduzindo ou pausando a animação.

3. Responsividade
- Desktop: logos com mais respiro e trilha longa.
- Mobile: reduzir altura visual, manter legibilidade e evitar logos minúsculos.
- Ajustar gaps e altura máxima por breakpoint para preservar leitura.

4. Integração em `/arquitetonico`
- Inserir a nova seção em `src/pages/Arquitetonico.tsx` logo após a seção de credenciais e antes do `ProductBanner` de soluções.
- Manter a implementação desacoplada para permitir reposicionamento simples depois, se desejado.

Direção visual
- Visual clean, corporativo e premium.
- Fundo branco com bordas/sombras muito sutis ou nenhuma, dependendo do equilíbrio com a página.
- Logos como protagonistas; texto de apoio discreto.
- Nada de efeitos chamativos sobre os logos.
- Seção pensada como prova social institucional, não como vitrine promocional.

Copy sugerida da seção
- Título:
  - Marcas e projetos que confiaram em soluções INSULFILM™
- Apoio curto:
  - Aplicações em ambientes corporativos, institucionais, comerciais e de alto fluxo.

Se preferir, essa copy pode ser ainda mais neutra para deixar o foco quase todo nos logos.

Arquivos envolvidos
- `src/pages/Arquitetonico.tsx`
  - inserir a nova seção no ponto recomendado.
- Novo componente, por exemplo:
  - `src/components/ArchitecturalLogoCarousel.tsx`
- Novos assets transparentes:
  - `src/assets/architectural-logos/*`

Cuidados importantes
- Não usar a imagem montada diretamente como faixa única se o objetivo é fundo transparente por logo e máxima qualidade.
- Cada logo será isolado individualmente para evitar fundo branco embutido e permitir melhor responsividade.
- Como a arte enviada já é uma composição raster, a nitidez final dependerá da qualidade do material original; a implementação vai preservar ao máximo, sem comprimir nem distorcer.
- Se algum logo ficar limitado pela resolução da imagem-base, a solução ideal futura é substituir por originais vetoriais ou PNGs oficiais, mantendo a mesma estrutura do carrossel.

Validação após implementação
- Conferir se todos os logos da imagem foram contemplados.
- Validar transparência real dos logos.
- Verificar loop contínuo sem salto perceptível.
- Testar legibilidade em desktop e mobile.
- Confirmar que nenhum logo foi cortado, achatado ou pixelado por CSS.
- Garantir que a seção harmoniza com o restante da página e reforça confiança antes das soluções.

Resultado esperado
A página `/arquitetonico` ganhará uma seção forte de prova social, elegante e escaneável, que transmite escala e credibilidade da marca INSULFILM™ no segmento arquitetônico, chamando atenção do lead no ponto certo da jornada sem quebrar o visual premium da página.

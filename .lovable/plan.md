
Objetivo
Ajustar a seção de credenciais em `/arquitetonico` para remover a redundância visual dos números grandes (“1988”, “2000”, “+3 milhões m²”) e dar mais destaque aos títulos institucionais que fazem mais sentido na leitura: “Desde 1988”, “Pioneirismo desde 2000” e “+3 milhões m² aplicados”.

O que será alterado
1. Revisão da hierarquia visual dos 3 cards principais
- Remover o destaque principal isolado de:
  - 1988
  - 2000
  - +3 milhões m²
- Inverter a hierarquia entre `highlight` e `title` nesses cards para que o texto mais completo vire o elemento principal.
- Resultado esperado:
  - “Desde 1988” passa a ser o headline principal do card 1
  - “Pioneirismo desde 2000” passa a ser o headline principal do card 2
  - “+3 milhões m² aplicados” passa a ser o headline principal do card 3

2. Novo papel dos textos auxiliares
- Os destaques numéricos deixam de ser o elemento dominante.
- Para evitar repetição, cada card terá uma única camada principal de leitura forte.
- O texto de apoio continua abaixo, preservando os fatos aprovados:
  - Primeira empresa de películas de controle solar no Brasil.
  - Primeira da América Latina a oferecer películas de segurança para automóveis e construção civil.
  - Experiência acumulada em projetos com soluções da marca INSULFILM™.

3. Ajuste da estrutura de dados
No arquivo `src/pages/Arquitetonico.tsx`:
- Revisar o array `architecturalCredentials`
- Simplificar os campos dos 3 primeiros cards para evitar duplicidade entre `title` e `highlight`
- Manter os dois últimos cards (“Portfólio Arquitetônico” e “Treinamento e Homologação”) com a lógica atual ou ajustar levemente para manter consistência visual da grade

4. Ajuste do markup dos cards
- Atualizar a renderização para que:
  - o título principal seja o elemento de maior peso tipográfico
  - o texto secundário, quando existir, apareça como apoio, e não como repetição do título
- Se necessário, tornar o `highlight` opcional no componente local da seção, exibindo-o apenas quando ele agregar valor real

Direção visual
- Manter o estilo clean, institucional e premium já aplicado
- Preservar:
  - fundo claro
  - bordas sutis
  - sombra leve
  - ícones discretos
  - respiro interno generoso
- Reforçar escaneabilidade:
  - headline principal mais legível
  - menos ruído visual
  - leitura mais direta no desktop e no mobile

Arquivos envolvidos
- `src/pages/Arquitetonico.tsx`
  - ajustar o conteúdo do array `architecturalCredentials`
  - atualizar a hierarquia tipográfica dos cards
  - remover a redundância visual dos números destacados

Validação após implementação
- Confirmar que os cards 1, 2 e 3 não repetem mais a mesma informação em duas camadas
- Verificar que “Desde 1988”, “Pioneirismo desde 2000” e “+3 milhões m² aplicados” ficaram como principais pontos de atenção
- Garantir consistência com a estética atual da página
- Validar legibilidade no mobile, principalmente no card de “+3 milhões m² aplicados”

Resultado esperado
A seção continuará forte e institucional, mas com uma hierarquia mais inteligente: menos redundância, mais clareza e mais destaque para as credenciais completas que realmente comunicam autoridade.

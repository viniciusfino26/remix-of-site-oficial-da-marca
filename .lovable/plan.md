

## Plano: Refazer o inicio da página /automotivo/solar

Ajustar o Hero e a seção introdutória para corresponder exatamente à referência.

### Mudanças em `src/pages/AutomotivoHubSolar.tsx`

**1. Hero (linhas 161-181)**
- Remover o grid de 2 colunas — o hero da referência mostra apenas a imagem de fundo com um badge laranja posicionado no canto inferior esquerdo
- Badge "Películas Premium / Sinta a diferença" fica sobreposto à imagem, alinhado à esquerda, com fundo accent sólido
- Adicionar texto "Imagem meramente ilustrativa" no canto inferior direito em texto pequeno branco
- Remover título, subtítulo e parágrafo do hero — eles ficam na seção branca abaixo

**2. Nova seção de texto introdutório (entre hero e navegação)**
- Fundo branco, container com padding generoso
- Título: "Películas de Proteção Solar para Vidros Automotivos" em `text-gray-900 font-extrabold`
- Subtítulo em itálico accent/azul escuro: "*Muito além do simples escurecimento. Alta performance de verdade.*"
- Parágrafo descritivo: "Eleve sua experiência ao volante com o conforto e sofisticação das películas originais INSULFILM™..." (texto já existente, mover para cá)

**3. Navegação (linhas 184-215)**
- Manter estrutura atual mas remover o overlay branco (`bg-white/85`) — na referência a seção de navegação tem fundo escuro com a imagem de fundo visível
- Título "ENCONTRE O SEU INSULFILM™ IDEAL" em branco sobre fundo escuro
- Subtítulo "Conheça nossas películas" em cinza claro
- Tabs com texto branco, tab ativa (Dark) com fundo accent laranja em vez de `bg-gray-900`
- Separadores `|` entre todos os tabs (não só ao redor de Transparente)

### Arquivo alterado
- `src/pages/AutomotivoHubSolar.tsx`


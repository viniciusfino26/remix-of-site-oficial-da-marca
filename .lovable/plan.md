
Objetivo
Adicionar uma nova seção institucional de credenciais na página `/arquitetonico`, em uma posição de maior equilíbrio visual e conversão, com aparência premium, leitura rápida e forte percepção de autoridade para a marca INSULFILM™ no segmento arquitetônico.

Posicionamento
Inserir a nova seção entre o bloco inicial de apresentação da página e o primeiro `ProductBanner` (Solar). Esse ponto preserva a hero e a introdução já existentes, depois eleva a autoridade da marca antes da navegação pelas soluções arquitetônicas.

O que será construído
1. Nova seção “Credenciais da marca no segmento arquitetônico”
- Título:
  - Credenciais da marca no segmento arquitetônico
- Subtítulo:
  - Projetos arquitetônicos pedem mais do que película. Pedem experiência, escala e respaldo técnico.
- Fundo claro e premium (`bg-background`) para contraste com a hero dark e boa escaneabilidade.
- Introdução visual limpa, com hierarquia forte e separador sutil já compatível com o design atual.

2. Grade institucional com 5 cards
Criar uma grade responsiva com bastante respiro:
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: composição equilibrada em 2 ou 3 colunas, com o card “+3 milhões m² aplicados” recebendo maior peso visual

Cards:
- Desde 1988
  - Primeira empresa de películas de controle solar no Brasil.
- Pioneirismo desde 2000
  - Primeira da América Latina a oferecer películas de segurança para automóveis e construção civil.
- +3 milhões m² aplicados
  - Experiência acumulada em projetos com soluções da marca INSULFILM™.
- Portfólio Arquitetônico
  - Soluções para controle solar, segurança, privacidade e conforto.
- Treinamento e Homologação
  - Serviço especializado com treinamento e homologação de fábrica.

3. Tratamento visual dos cards
- Cards com borda sutil, fundo claro, sombra premium leve e cantos consistentes com o restante do site
- Destaque visual maior para:
  - 1988
  - 2000
  - +3 milhões m²
- Uso de ícones discretos e institucionais, coerentes com Lucide e com o restante do projeto
- Sem aparência promocional agressiva, sem glow exagerado e sem linguagem de “quem somos”

4. CTA ao final da seção
- Botão:
  - Conheça as soluções arquitetônicas
- Link interno para a navegação arquitetônica mais adequada na própria página/categoria
- Posicionamento centralizado ao final da seção para preparar o avanço do lead

Abordagem de design
- Manter padrão visual já adotado em `/arquitetonico`:
  - tipografia forte nos títulos
  - descrições em `text-muted-foreground`
  - animações suaves com Framer Motion
  - espaçamento generoso
- Evitar glassmorphism escuro aqui, porque a nova seção precisa funcionar como “respiro institucional” entre blocos de venda
- Reforçar credibilidade com números e marcos históricos como elementos visuais principais

Ícones sugeridos
- Desde 1988: `Landmark` ou `BadgeCheck`
- Pioneirismo desde 2000: `Flag` ou `Trophy`
- +3 milhões m² aplicados: `Ruler`, `Grid2x2` ou `Building2`
- Portfólio Arquitetônico: `Layers` ou `PanelsTopLeft`
- Treinamento e Homologação: `GraduationCap`, `ShieldCheck` ou `ClipboardCheck`

Arquivos envolvidos
- `src/pages/Arquitetonico.tsx`
  - Inserir a nova seção no fluxo da página
  - Adicionar estrutura de dados dos 5 cards
  - Importar os ícones necessários
  - Implementar CTA e animações de entrada

Decisões de implementação
- Não alterar a copy já aprovada dos blocos existentes
- Não substituir a introdução atual; a nova seção entra como reforço institucional
- Não criar componente global novo se a seção for exclusiva desta página; manter a implementação local para evitar abstração prematura
- Se a composição ficar muito longa no mobile, o CTA será colocado abaixo da grade com espaçamento reduzido e leitura preservada

Validação após implementação
- Conferir equilíbrio visual entre hero, introdução, nova seção e primeiro banner
- Validar escaneabilidade no mobile
- Confirmar consistência de linguagem:
  - INSULFILM™ sempre como marca
  - sem claims novos
  - sem alteração dos fatos fornecidos
- Verificar que a seção funciona como credencial institucional e não como bloco promocional

Resultado esperado
A página `/arquitetonico` ganhará um bloco de autoridade claro e elegante, que contextualiza rapidamente a força da marca no segmento arquitetônico, aumenta confiança e prepara o usuário para explorar as soluções e avançar no CTA.

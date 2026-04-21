

## Plano: Melhorar contraste dos subtítulos nos quadrantes coloridos

O subtítulo dos banners coloridos (azul, laranja, cinza) na home está com baixo contraste (`text-white/60`), prejudicando legibilidade — especialmente sobre o card laranja com transparência.

### Mudança

**Arquivo único:** `src/components/ProductBanner.tsx` (componente reutilizado em todos os `ProductBanner` da home `/` — afeta automaticamente todos os 4 quadrantes: Solares, Segurança, Comerciais, PPF).

**Linha 81 — subtítulo (description):**
- De: `text-white/60 ... font-light`
- Para: `text-white/90 ... font-normal` + leve sombra de texto para garantir leitura mesmo em fundos claros: `drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]`

Aumentar de 60% para 90% de opacidade + peso `normal` (em vez de `light`) deixa a frase nítida sem mudar o tom visual premium dos cards. O `drop-shadow` sutil garante contraste mesmo quando a imagem de fundo varia.

### Por que apenas este arquivo

`ProductBanner` é o componente compartilhado usado pelos 4 quadrantes da home (linhas 149–191 de `Index.tsx`). Ajustando o componente, as 4 frases ficam mais visíveis de uma só vez, mantendo consistência visual.

Outras ocorrências de `text-white/60` encontradas:
- `Legislacao.tsx` linha 297 — legenda "Imagem meramente ilustrativa" (não é o mesmo padrão visual)
- `AutomotivoHubSolar.tsx` linha 220 — subtítulo de seção dentro de fundo escuro (já tem contraste suficiente)

Esses dois NÃO seguem o padrão dos retângulos coloridos do screenshot e ficam fora do escopo.

### Resultado esperado

- "Menos calor, mais conforto. Controle a claridade." (azul) — totalmente legível
- "Curta o seu caminho. Vidros muito mais seguros para você chegar lá." (laranja) — sem mais lavagem
- "Conforto e controle solar. Economia inteligente todos os dias, durante anos." (azul) — nítida
- "Cobertura invisível, seu carro sempre novo e valorizado." (cinza) — destaque correto

Títulos (`text-white`) e botões permanecem inalterados. Nenhuma copy é alterada — apenas contraste/peso da fonte.


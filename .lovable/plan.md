

# Melhorias na Pagina Phantom Arquitetonico — Inspirado no Wone Home

## Elementos Capturados da Referencia (wonehome.com.br)

A Wone Home apresenta um design imersivo e sofisticado com elementos que elevam a experiencia do visitante. Vamos incorporar os seguintes padroes:

---

## 1. Hero Full-Screen Mais Imersivo

**Atual:** Hero com 70vh, texto alinhado a esquerda.
**Melhoria:** Hero com min-h-screen, indicador de scroll animado ("Continue navegando" com seta para baixo), e um CTA primario ja no hero para engajamento imediato.

---

## 2. Secao "Solucoes por Segmento" (Novo)

Inspirado no carrossel de solucoes da Wone Home (Escritorios, Hoteis, Restaurantes, Residencias).

Adicionar uma secao apos o hero com 4 cards de segmento:
- **Residencias** — "Protecao que valoriza a sua casa e mantem a beleza sempre impecavel."
- **Restaurantes** — "Protecao para cada ambiente, mantendo o acolhimento que tornam seu restaurante unico."
- **Hoteis** — "Preservando a elegancia do seu hotel e garantindo uma experiencia para cada hospede."
- **Escritorios** — "Solucoes que protegem seu espaco de trabalho, refletindo cuidado e profissionalismo."

Cards com icones e hover elegante, usando o design system existente.

---

## 3. Secao de Depoimentos (Novo)

Inspirado nos depoimentos da Wone Home. Adicionar uma secao com 3 depoimentos fictícios (que podem ser substituidos depois por reais):
- Proprietaria residencial
- Arquiteto
- Restaurante

Formato: citacao grande em italico com nome e ocupacao abaixo, em um carrossel ou grid de 3 colunas.

---

## 4. Secao de FAQ com Accordion (Novo)

Inspirado no FAQ da Wone Home. Adicionar perguntas frequentes usando o componente Accordion existente:
- "Vai mudar o visual do meu ambiente?"
- "Se eu quiser tirar depois, posso?"
- "Funciona em ambientes com muita circulacao?"
- "Essa pelicula realmente protege ou e so estetica?"
- "Quanto tempo leva pra instalar?"
- "E resistente com crianca, pet ou muito movimento?"

Textos adaptados para o contexto INSULFILM Phantom.

---

## 5. Imagens Mais Imersivas

**Atual:** Imagens com h-48 ou h-64 dentro de containers limitados.
**Melhoria:** Aumentar as imagens de destaque para full-width com h-[500px] onde o layout permite, adicionando gradientes overlay mais sofisticados. Imagens dos cards Gloss/Matte maiores (h-56 em vez de h-48).

---

## 6. Secao "Encontre uma Loja" CTA (Novo)

Adicionar antes do CTA final uma secao com link para `/lojas`, inspirado no "Encontre uma loja WONE Home":
- Texto: "Encontre uma loja INSULFILM"
- Subtexto: "Encontre nossas lojas oficiais em todo o Brasil e tenha acesso ao que ha de melhor em protecao e sofisticacao."
- Botao linkando para `/lojas`

---

## 7. Indicador de Scroll no Hero

Adicionar um elemento "Continue navegando" animado com seta chevron-down na base do hero, igual ao Wone Home.

---

## Detalhes Tecnicos

### Arquivo editado:
- **`src/pages/PhantomArquitetonico.tsx`** — Reescrito com as novas secoes

### Componentes utilizados (ja existentes):
- `Accordion` de `@/components/ui/accordion` para FAQ
- `Card`, `CardContent` para segmentos e depoimentos
- `Button` para CTAs
- `Badge` para labels
- Framer Motion para animacoes

### Ordem final das secoes:
1. Hero (full-screen + scroll indicator)
2. Solucoes por Segmento (NOVO)
3. A Decisao que Define a Atmosfera (existente, com imagens maiores)
4. Quando o Design Encontra o Uso Diario (existente)
5. Anatomia do Dano (existente)
6. A Solucao — Peliculas Phantom (existente)
7. Phantom Gloss (existente)
8. Phantom Matte (existente)
9. Protecao Versatil para Materiais Nobres (existente)
10. Depoimentos (NOVO)
11. O Futuro do Seu Projeto (existente)
12. FAQ (NOVO)
13. Encontre uma Loja (NOVO)
14. CTA Final (existente)

### Dependencias: Nenhuma nova. Usa componentes Accordion ja instalados.


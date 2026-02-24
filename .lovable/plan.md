

# Adicionar Categorias de FAQ: Peliculas Solares e Peliculas de Protecao e Seguranca

## Resumo

Adicionar duas novas categorias ao array `faqCategories` no arquivo `src/pages/FAQ.tsx`:
1. **Peliculas Solares** — perguntas gerais sobre peliculas solares (reorganizando algumas existentes da categoria "Automotivo")
2. **Peliculas de Protecao e Seguranca Superior** — todo o conteudo do PDF oficial fornecido (20+ perguntas e respostas)

---

## Categoria 1: Peliculas Solares

Mover/adaptar perguntas relevantes da categoria "Automotivo" atual e adicionar contexto sobre peliculas solares:

- "A pelicula escurece muito o vidro?" (mover de Automotivo)
- "A pelicula pode ser aplicada no para-brisa?" (mover de Automotivo)
- "Quanto tempo dura a pelicula?" (mover de Automotivo)
- Manter em "Automotivo" apenas: "Qual pelicula e indicada para o meu carro?"

---

## Categoria 2: Peliculas de Protecao e Seguranca Superior

Todas as perguntas do PDF oficial, na ordem do documento:

1. O que e uma "pelicula anti-vandalismo" ou "pelicula de seguranca"?
2. Como escolher entre as opcoes de peliculas de protecao e seguranca existentes?
3. O desempenho de resistencia e o mesmo se o vidro estiver parcialmente aberto?
4. Logo apos a aplicacao, a pelicula apresentara a resistencia esperada?
5. Em quais vidros e possivel aplicar estas peliculas?
6. Qual o tipo e espessura de um vidro automotivo lateral?
7. A aplicacao das peliculas interfere sobre a garantia da montadora?
8. Qual o significado de "PS"?
9. A espessura determina o desempenho de resistencia da pelicula?
10. Quais sao os principais indices tecnicos de resistencia que devo pesquisar?
11. Como identificar se os dados tecnicos de desempenho sao confiaveis?
12. Como identificar se os videos de testagem sao reais ou falsos?
13. O tempo de garantia do produto interfere sobre a performance de resistencia?
14. Qual a diferenca entre os crimes de vandalismo e roubo?
15. As peliculas funcionam contra o crime de furto?
16. As peliculas oferecem resistencia balistica?
17. As peliculas podem aumentar minha protecao em caso de acidentes?
18. As peliculas podem afetar o resgate ou dificultar a saida do carro?
19. Como saber se a pelicula foi aplicada corretamente?
20. Por qual motivo nao e possivel aplicar nos vidros frontal, laterais fixos, traseiro e teto-solar?
21. As peliculas sao aplicadas interna ou externamente?
22. E necessario desmontar os paineis das portas laterais?
23. E normal a pelicula apresentar manchas durante o periodo de secagem?
24. As peliculas sao transparentes ou tingidas?
25. Carros sem colunas laterais apresentam o mesmo desempenho?
26. E possivel aplicar em veiculos com vidros blindados?
27. Tenho um veiculo blindado usado e os vidros estao delaminando, posso usar estas peliculas?

---

## Detalhes Tecnicos

### Arquivo editado: `src/pages/FAQ.tsx`

- Reorganizar o array `faqCategories`:
  1. Automotivo (manter apenas a pergunta geral de indicacao)
  2. **Peliculas Solares** (novo — 3 perguntas movidas + contexto)
  3. **Peliculas de Protecao e Seguranca Superior** (novo — 27 perguntas do PDF)
  4. Arquitetonico (manter)
  5. Garantia (manter)
  6. Geral (manter)

- Textos hardcoded em portugues, exatamente como no PDF oficial
- Nenhum novo componente ou dependencia necessario
- Mesma estrutura de Accordion existente


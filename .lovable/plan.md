

# Nova Pagina: INSULFILM SkudoGuard — Versao Emocional

## Resumo

Criar a pagina `/skudoguard` seguindo exatamente o mesmo padrao visual e estrutural da `/antivandalismo13k/teste_proposta`, mas com conteudo do produto SkudoGuard. Tom emocional mais intenso e agressivo, focado em abordagens criminosas violentas com armas brancas, tempo de reacao e protecao da familia. Textos hardcoded em portugues (sem i18n).

---

## Dados do produto (extraidos do site oficial + imagem de referencia)

- **Nome:** INSULFILM SkudoGuard
- **Badge:** Pelicula de Seguranca Superior
- **Subtitulo:** Mais que antivandalismo. Seguranca forte e efetiva.
- **Video YouTube:** broTJbFxFqM
- **Descricao:** Pelicula premium de forte seguranca contra abordagens agressivas para invasao criminosa com armas brancas. Tripla laminacao industrial, adesivo performance (mais pegajoso), polimeros mais resistentes.
- **4 beneficios:** Retencao de fragmentos (protege pele/rosto/olhos), nao altera originalidade do veiculo, nao aplicavel a furtos, nao interfere em sinais eletronicos.
- **Diferenciais tecnicos:** Multicamadas com tripla laminacao, poliester alta densidade, adesivo performance, nitidez optica cristal.

### Tabela de impactos (da imagem de referencia):
| | Vela | Pedra | Taco |
|---|---|---|---|
| Pre-quebra | 01 | ate 22 | ate 14 |
| Pos-quebra | ate 79 | ate 35 | ate 07 |
| Total | ate 80 | ate 57 | ate 21 |

### Garantias (identicas ao 13K):
- Produto: 5 anos (falha adesiva, delaminacao, rachadura)
- Servico: descolamento, bolha, riscos, rasgos, frestas
- Reposicao gratuita: INSULFILM SkudoGuard + pelicula solar escolhida

---

## Estrutura da pagina (mesma ordem do teste_proposta)

1. **Hero + Video** (broTJbFxFqM) — badge "Pelicula de Seguranca Superior", titulo "INSULFILM SkudoGuard"
2. **A Realidade da Violencia** — estatisticas mais pesadas: latrocinios, tempo medio de abordagem (7 segundos), assaltos com arma branca. Tom mais agressivo.
3. **Descricao do Produto** — texto adaptado do site oficial com os 4 beneficios
4. **O Que Acontece em Segundos** — secao emocional mais intensa: invasao violenta, armas brancas, estilhacos, criancas vulneraveis. Cards com AlertTriangle, Eye, HeartCrack, UserX, Swords.
5. **Tabela de Impactos** — dados da imagem (valores superiores ao 13K)
6. **Proteja Quem Voce Ama** — mensagens mais intensas: "Um marginal armado precisa de segundos. O SkudoGuard da a voce o tempo que separa sua familia do perigo."
7. **CTA intermediario** — "Cada segundo conta. Proteja agora."
8. **Diferenciais Tecnicos** — secao nova com 4 cards: tripla laminacao, poliester alta densidade, adesivo performance, nitidez optica
9. **Aplicabilidade** — vidros laterais + traseiro
10. **Depoimento** — cenario mais violento: abordagem com arma branca, tentativa de invasao
11. **Propriedades Fisicas** — valores superiores ao 13K (tensao >= 200 MPa, ruptura >= 450 N, arrancamento >= 20 N, alongamento >= 140%, puncao >= 110 N)
12. **Beneficios Opticos e Solares** — identico
13. **Garantias** — mesma estrutura, texto adaptado para "INSULFILM SkudoGuard"
14. **Glossario Tecnico** — identico (mecanico + solar)
15. **CTA Final** — "Proteja sua familia agora" + WhatsApp

---

## Arquivos

### Novo:
- `src/pages/SkudoGuard.tsx` — pagina completa, textos em PT hardcoded

### Editados:
- `src/App.tsx` — nova rota `/skudoguard`
- `src/components/Header.tsx` — link "SkudoGuard" no dropdown Automotivo

---

## Detalhes tecnicos

- Copia exata da estrutura do `Antivandalismo13KProposta.tsx` como base
- Textos hardcoded em portugues (sem namespace i18n)
- Secao extra "Diferenciais Tecnicos" com 4 cards (baseada nos dados do site oficial)
- Icone adicional: `Swords` (Lucide) para representar armas brancas
- Video YouTube ID: `broTJbFxFqM` com mesmos parametros (controls=0, autoplay=1, mute=1, loop=1, pointer-events-none)
- Mensagem WhatsApp adaptada para SkudoGuard
- Foco total no cliente/familia, nunca no carro


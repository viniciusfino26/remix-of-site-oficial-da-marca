

# Nova Pagina: Antivandalismo 13K — Versao Emocional (teste_proposta)

## Resumo

Criar uma copia da pagina `/antivandalismo13k` em uma nova rota `/antivandalismo13k/teste_proposta`, mantendo toda a base tecnica (componentes, animacoes, tabela de impactos, garantias, glossario), mas adicionando secoes com apelo emocional focadas na **dor humana** — nao apenas dano ao veiculo, mas risco real a seguranca de pessoas e familias.

---

## O que muda em relacao a pagina original

### Novas secoes intercaladas ao longo da pagina:

1. **Secao "A Realidade dos Roubos" (apos o Hero)**
   - Dados sobre roubos por quebra de vidro no Brasil (fontes: SSP-SP, Atlas da Violencia, FBSP)
   - Estatisticas destacadas com countUp animado: ex. "A cada 8 minutos, um veiculo e arrombado por quebra de vidro em SP"
   - Fundo escuro com tom dramatico

2. **Secao "O Perigo Vai Alem do Prejuizo" (apos Descricao do Produto)**
   - Foco nos riscos fisicos: estilhacos de vidro cortam pele, rosto e olhos
   - Cards com icones (AlertTriangle, HeartCrack, Eye, UserX) descrevendo cenarios reais
   - Texto emocional: "Vidro temperado se fragmenta em centenas de estilhacos. Sem pelicula, esses fragmentos atingem quem esta dentro do veiculo — rosto, olhos, bracos."
   - Animacao de entrada com fade dramatico

3. **Secao "Proteja Quem Voce Ama" (apos Tabela de Impactos)**
   - Layout lado a lado: placeholder de foto de familia a esquerda + texto emocional a direita
   - Mensagens como: "Sua familia esta no banco de tras. Um ato de vandalismo pode durar segundos, mas as marcas podem durar para sempre."
   - Card com borda laranja destacada e icone de coracao/escudo
   - Segundo bloco: "A pelicula nao protege so o vidro. Protege a pele, os olhos e a tranquilidade de quem voce mais ama."

4. **Secao "Depoimento / Cenario Real" (apos Aplicabilidade)**
   - Card estilizado simulando depoimento anonimo
   - Texto como: "Eu estava parado no semaforo com meus filhos quando quebraram o vidro. Os estilhacos voaram no banco de tras..."
   - Icone de aspas e tom visual diferenciado (fundo com gradiente emocional)

5. **CTA intermediario emocional (apos secao de familia)**
   - "Nao espere acontecer. Proteja agora." + botao WhatsApp
   - Menor que o CTA final, mas com urgencia visual

### Secoes que permanecem identicas (ctrl+c / ctrl+v):
- Hero com video YouTube
- Descricao do produto (4 beneficios)
- Tabela de impactos animada
- Aplicabilidade
- Propriedades fisicas
- Beneficios opticos e solares
- Garantias (produto, servico, reposicao)
- Glossario tecnico
- CTA final

---

## Estrutura final da pagina (ordem das secoes)

1. Hero + Video
2. **A Realidade dos Roubos** (NOVA)
3. Descricao do Produto
4. **O Perigo Vai Alem do Prejuizo** (NOVA)
5. Tabela de Impactos
6. **Proteja Quem Voce Ama** (NOVA)
7. **CTA intermediario emocional** (NOVO)
8. Aplicabilidade
9. **Depoimento / Cenario Real** (NOVO)
10. Propriedades Fisicas
11. Beneficios Opticos e Solares
12. Garantias
13. Glossario Tecnico
14. CTA Final

---

## Link no menu

Adicionar um item extra no dropdown **Automotivo** do Header:
- Label: "Antivandalismo 13K — Proposta"
- Rota: `/antivandalismo13k/teste_proposta`

---

## Detalhes tecnicos

### Arquivos:
- **Novo**: `src/pages/Antivandalismo13KProposta.tsx` — copia completa do Antivandalismo13K.tsx + secoes emocionais
- **Editado**: `src/App.tsx` — nova rota `/antivandalismo13k/teste_proposta`
- **Editado**: `src/components/Header.tsx` — link adicional no dropdown Automotivo
- **Editado**: `src/i18n/locales/pt.json` — textos emocionais (namespace `av13kP`)
- **Editado**: `src/i18n/locales/en.json` e `es.json` — traducoes correspondentes

### Icones adicionais (Lucide):
- `AlertTriangle`, `HeartCrack`, `Eye`, `UserX`, `Quote`, `Heart`, `ShieldAlert`, `Users`

### Animacoes:
- Mesmas variants (fadeInUp, fadeInLeft, stagger, scaleIn) reutilizadas
- CountUp reutilizado para estatisticas de violencia
- Secoes emocionais com `opacity` partindo de 0.3 para efeito dramatico mais lento

### Padrao visual mantido:
- bg-carbon-gradient para secoes escuras
- Cards glass e card-premium-hover
- separator-accent entre secoes
- Botoes CTA laranja
- Tipografia extrabold + font-light




# Pagina Antivandalismo13K — Plano Atualizado

## Alteracao: Imagem de Referencia e Tabela de Impactos

A imagem enviada (`Antivandalismo13K_desktop.png`) sera usada como **referencia visual** para recriar a secao de impactos com componentes animados (nao como imagem estatica embedada). Isso garante melhor performance, responsividade e apelo visual.

---

## Dados da Tabela de Impactos (extraidos da imagem)

Estes sao os valores que serao usados na pagina. Caso o video institucional (nGBNE0FG-8Q) apresente valores diferentes, o usuario devera confirmar quais usar — **nao e possivel extrair dados numericos do video automaticamente**. Os valores abaixo seguem a imagem fornecida:

```text
Resistencia Maxima Estimada*

                  vela      pedra     taco
Pre-quebra        01        ate 22    ate 05
Pos-quebra        ate 24    ate 22    ate 12
Total             ate 25    ate 44    ate 17
```

Nota de rodape: *O vidro deve estar completamente fechado. Variacoes de desempenho podem ocorrer.*

---

## Como a Imagem Sera Recriada de Forma Animada

Em vez de embedar a imagem estatica, vamos recriar o conteudo como **componentes React animados com framer-motion**:

### Secao "Resistencia Maxima Estimada"
- **Tabela animada**: cada linha entra com stagger (fadeInUp), celulas com contadores animados que "contam" ate o valor final (efeito countUp)
- **Icones animados**: vela, pedra e taco como icones Lucide (Sword/Knife, Circle/Rock, Slash/Bat) com micro-animacao de bounce ao entrar no viewport
- **Label "IMPACTOS"** na lateral esquerda com rotacao -90deg e tracking largo, igual a imagem
- **Hover nos valores**: ao passar o mouse em cada celula, destaque com glow laranja

### Secao "Barreira Protetora"
- Texto "Torna vidro+pelicula uma barreira protetora e resistente" como bloco de destaque
- Fundo com gradiente escuro + overlay sutil
- Animacao fadeInRight com parallax leve

### Secao "Garantia + Reposicao"
- Card com icone de escudo/garantia
- Texto sobre certificado individual e reposicao gratuita em negrito
- Animacao de entrada com spring bounce

---

## Estrutura Completa da Pagina (atualizada)

### 1 -- Hero com Video YouTube
- iframe 16:9 com autoplay, `rel=0`, `modestbranding=1`
- Badge "Pelicula de Protecao" + titulo + subtitulo
- Parallax no fundo (mesmo padrao do Automotivo)

### 2 -- Descricao do Produto
- Texto explicativo a esquerda
- 4 beneficios com checkmarks laranja animados (stagger)
- Placeholder para imagem a direita

### 3 -- Tabela de Impactos (NOVA — baseada na imagem)
- Tabela animada com countUp nos numeros
- Icones animados para cada tipo de arma branca
- Label "IMPACTOS" vertical rotacionado
- Nota de rodape com asterisco
- Fundo branco, bordas premium

### 4 -- Aplicabilidade
- Dois cards lado a lado com placeholders para imagens

### 5 -- Propriedades Fisicas
- Cards estilizados com dados mecanicos

### 6 -- Beneficios Opticos e Solares
- 4 cards com icones animados (spring rotation)

### 7 -- Garantia de Produto (5 anos)
- Card com icone de garantia

### 8 -- Garantia de Servico
- Card similar

### 9 -- Reposicao Gratuita
- Card com borda laranja destacada
- Texto em negrito sobre condicoes

### 10 -- Glossario Tecnico
- Accordion com secoes Mecanico e Solar

### 11 -- CTA Final
- "Proteja seu veiculo agora" + botao WhatsApp

---

## Detalhes Tecnicos

### Arquivos:
- **Novo**: `src/pages/Antivandalismo13K.tsx`
- **Editado**: `src/App.tsx` (rota `/antivandalismo13k`)
- **Editado**: `src/i18n/locales/pt.json`, `en.json`, `es.json` (traducoes completas)

### Animacoes especificas da tabela de impactos:
- `framer-motion` useInView para trigger
- countUp customizado com `useSpring` + `useTransform` para animar numeros de 0 ate o valor final
- staggerChildren para entrada sequencial das linhas
- Icones com `whileInView={{ rotate: [0, -10, 10, 0], scale: [0.8, 1.1, 1] }}`

### Padrao visual mantido:
- bg-carbon-gradient para secoes escuras
- Cards glass no fundo escuro
- separator-accent entre secoes
- Botoes CTA laranja
- Tipografia extrabold + font-light para contraste


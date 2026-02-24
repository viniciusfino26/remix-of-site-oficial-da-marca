
# Ajustes na Pagina Arquitetonico: Garantia, Clientes e Parallax

## 3 Correcoes a Implementar

### 1. Remover "Reposicao Gratuita" da Garantia Certificada

Na secao 9 (Garantia Certificada), linhas 437-449:
- Remover o texto "com possibilidade de reposicao gratuita em caso de sinistro" do paragrafo descritivo
- Remover o item `{ icon: RefreshCw, label: 'Reposicao gratuita' }` do array de badges
- Remover a importacao de `RefreshCw` do lucide-react (se nao usada em outro lugar)
- Texto ajustado: "Cada projeto recebe um certificado individual com garantia de lastro industrial. Cobertura para o produto e para o servico de instalacao."

### 2. Adicionar Secao "Clientes que Confiam na INSULFILM"

Nova secao suave entre a Garantia Certificada (secao 9) e o Parallax (secao 10). Estilo discreto e elegante:
- Fundo claro (`bg-background`)
- Titulo: "Clientes que confiam na INSULFILM(TM)"
- Imagem dos logos de clientes da landing page oficial: `https://d335luupugsy2.cloudfront.net/cms/files/538892/1757442209/$1chrfqbj4ma`
- Imagem centralizada, com `max-w-4xl`, bordas arredondadas, sombra sutil
- Tom suave, sem agressividade — apenas a imagem com os logos e um subtitulo discreto

### 3. Corrigir Imagens do Parallax

Substituir as URLs das secoes parallax por imagens da landing page oficial (CDN cloudfront) que funcionam de forma confiavel:
- **Parallax 1** (secao 4, linha 284): trocar `residencias.jpg` do site arquitetonico por uma imagem da LP oficial: `https://d335luupugsy2.cloudfront.net/cms/files/538892/1757450890/$rx2qbcpud1t` — ou melhor, usar a imagem hero principal que ja funciona: `https://www.insulfilmarquitetonico.com.br/__imagens/Arquitetonico--Casas--Interior--G.jpg`
- **Parallax 2** (secao 10, linha 460): trocar `escritorios.jpg` por a imagem de solucoes/fachadas que e mais impactante: `https://www.insulfilmarquitetonico.com.br/__imagens/solucoes/fachadas-exclusivas.jpg`

Ambas sao imagens de alta resolucao do proprio site oficial, mais adequadas para efeito parallax full-width.

---

## Detalhes Tecnicos

### Arquivo editado: `src/pages/Residencial.tsx`

**Importacoes:** Remover `RefreshCw` da linha de imports do lucide-react.

**Secao Garantia (linhas 436-449):**
- Texto: remover trecho sobre reposicao gratuita
- Array de badges: manter apenas `Certificado individual` e `Garantia do produto`

**Nova secao Clientes (inserir entre linhas 457 e 459):**
```
secao bg-background py-20
  container text-center
    titulo h2 font-extrabold "Clientes que confiam na INSULFILM(TM)"
    subtitulo text-muted-foreground "Grandes projetos em todo o Brasil"
    separator-accent
    img centralizada com max-w-4xl rounded-xl shadow-premium
```

**Parallax (linhas 284 e 460):**
- Atualizar URLs para imagens confiaveis do site oficial

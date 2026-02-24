

# Reformulacao Visual da Pagina /residencial para "Arquitetonico" + Upgrade Premium

## Resumo

Renomear o menu "Arquitetura" para "Arquitetonico" no header, reformular visualmente a pagina /residencial com fotos reais dos sites de referencia (insulfilmarquitetonico.com.br e materiais.insulfilm.com.br/lp-insulfilm-arquitetonico), adicionar parallax com imagens, enriquecer descricoes das peliculas com textos do site oficial, e mover a secao de seguranca/acidentes para o final da pagina (antes do CTA). Manter o video existente (paCtipjRfPI) e adicionar o video empresarial (broTJbFxFqM) em secao futura.

---

## 1. Renomear Header: "Arquitetura" para "Arquitetonico"

Alterar a chave `nav.architecture` nos 3 arquivos de traducao:
- **pt.json**: `"architecture": "Arquitetônico"`
- **en.json**: `"architecture": "Architectural"`
- **es.json**: `"architecture": "Arquitectónico"`

---

## 2. Fotos Reais dos Sites de Referencia

Utilizar as seguintes imagens externas diretamente via URL nos componentes (sem download):

| Imagem | URL | Uso |
|--------|-----|-----|
| Interior residencial (hero contexto) | `https://www.insulfilmarquitetonico.com.br/__imagens/Arquitetonico--Casas--Interior--G.jpg` | Secao "Proteja Sua Casa" — substituir placeholder |
| Linha Metallico | `https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Metallico.jpg` | Card Refletivas |
| Linha Naturale | `https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Naturale.jpg` | Card Neutras |
| Linha Orizzonte | `https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Orizzonte80.jpg` | Card Transparentes |
| Linha Ultravioletti | `https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/UltraVioletti90.jpg` | Card Nao Refletivas |
| Linha Specchiato | `https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/SpecchiatoBronzo.jpg` | Card Espelhadas |
| Linha Safety | `https://www.insulfilmarquitetonico.com.br/__imagens/linhas--apresentacao/Safety&Security.jpg` | Card Antivandalismo |
| Escritorios | `https://www.insulfilmarquitetonico.com.br/__imagens/possibilidades-aplicacao/escritorios.jpg` | Parallax intermediario |
| Residencias | `https://www.insulfilmarquitetonico.com.br/__imagens/possibilidades-aplicacao/residencias.jpg` | Parallax secao beneficios |
| Hoteis | `https://www.insulfilmarquitetonico.com.br/__imagens/possibilidades-aplicacao/hoteis.jpg` | Parallax secao diferenciais |
| Fachadas exclusivas | `https://www.insulfilmarquitetonico.com.br/__imagens/solucoes/fachadas-exclusivas.jpg` | Secao diferenciais |
| Clientes atendidos | `https://d335luupugsy2.cloudfront.net/cms/files/538892/1757442209/$1chrfqbj4ma` | Secao social proof |

---

## 3. Reestruturacao das Secoes da Pagina

Nova ordem (mover "Proteja sua casa/seguranca/acidentes" para quase o final):

1. **HERO + VIDEO** (manter video paCtipjRfPI)
2. **O Problema** (calor, UV, energia — foco na dor)
3. **Nossas Peliculas** (6 cards com fotos reais + descricoes enriquecidas do site oficial)
4. **PARALLAX PHOTO** — nova secao com imagem residencial em full-width com parallax
5. **Principais Beneficios** (manter, com imagem de fundo parallax)
6. **CTA Intermediario** (manter)
7. **Nossos Diferenciais** (manter, com imagem parallax)
8. **Familias de Produtos** (manter Performance/Premium)
9. **Garantia Certificada** (manter)
10. **PARALLAX PHOTO** — nova secao com imagem de escritorio/fachada
11. **Proteja Sua Casa e Sua Familia** (secao de seguranca/acidentes — movida para ca)
12. **CTA Final** (manter)

---

## 4. Melhorias Visuais Premium

### Cards de Peliculas — Com Foto
- Cada card tera uma imagem de topo (das linhas do site oficial) com aspect-ratio 16/9
- Overlay gradiente escuro sobre a foto para legibilidade
- Titulo da pelicula sobre a imagem em branco
- Descricao enriquecida abaixo com textos do site oficial (mais detalhados)

### Secoes Parallax
- Novas secoes de foto full-width entre blocos de conteudo
- Implementacao via `background-attachment: fixed` com overlay gradiente escuro
- Altura minima de ~300px (desktop) / ~200px (mobile)
- Em mobile, `background-attachment: scroll` (iOS nao suporta fixed)

### Descricoes Enriquecidas das Peliculas
Usando os textos dos sites de referencia:
- **Espelhadas**: "Espelhamento intenso em ambos os lados para uma rejeicao de calor espetacular. Diversas opcoes de cores externas com interior prata."
- **Transparentes**: "Quase imperceptivel, mantem o design atual do projeto enquanto proporciona otima reducao de calor por sua tecnologia seletiva de absorcao termica."
- **Refletivas**: "Alta refletividade externa para maximizar a rejeicao de calor, com um interior neutro para facilitar a visibilidade externa."
- **Neutras**: "Visual natural de refletividade baixa ou moderada para aumentar o conforto termico, sem destacar expressivamente a area envidracada."
- **Nao Refletivas**: "Visual escuro e nao espelhado, proporcionando excelente privacidade e controle de luz que aumenta o conforto termico."
- **Antivandalismo e Seguranca**: "Praticamente invisiveis, reforcam a resistencia natural do vidro contra quebras acidentais ou criminosas e retem os estilhacos do vidro quebrado."

### Secao "Proteja Sua Casa" — Com Foto Real
- Substituir o placeholder (div cinza com icone) pela foto `Arquitetonico--Casas--Interior--G.jpg`
- Foto com bordas arredondadas e sombra premium

---

## 5. Responsividade

- Parallax com `background-attachment: scroll` em mobile (via media query ou classe condicional)
- Cards de peliculas com imagem: grid 1 coluna (mobile), 2 colunas (sm), 3 colunas (lg)
- Imagens com `object-fit: cover` e `loading="lazy"`
- Video mantendo enquadramento `aspect-video` existente

---

## Arquivos Editados

| Arquivo | Tipo |
|---------|------|
| `src/pages/Residencial.tsx` | Reescrita visual com fotos, parallax, reordenacao |
| `src/i18n/locales/pt.json` | Renomear nav.architecture |
| `src/i18n/locales/en.json` | Renomear nav.architecture |
| `src/i18n/locales/es.json` | Renomear nav.architecture |
| `src/index.css` | Classe utilitaria `.bg-parallax` para efeito parallax |


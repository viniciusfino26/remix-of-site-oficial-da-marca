

# Integrar Imagens Reais nos 4 Banners da Home Page

## Objetivo
Replicar fielmente o layout da referencia (Homepage-2.png), usando as 4 imagens uploadadas como backgrounds dos ProductBanners existentes e ajustando os textos/botoes para corresponder exatamente a referencia.

## Mapeamento de Imagens

| Banner | Imagem | Alinhamento Texto |
|--------|--------|-------------------|
| Películas Solares | `Controle_solar.png` (Bentley prata) | Direita |
| Proteção e Segurança Superior | `Proteção_e_segurança_superior.png` (arrombamento) | Esquerda |
| Películas Comerciais e Residenciais | `Películas_Comerciais_e_Residenciais.png` (edificios) | Direita |
| Proteção à Pintura (PPF) | `Proteção_de_Pintura_PPF.png` (carro verde) | Esquerda |

## Alteracoes

### 1. Copiar 4 imagens para `src/assets/`
- `user-uploads://Controle_solar.png` → `src/assets/home-solar.png`
- `user-uploads://Proteção_e_segurança_superior.png` → `src/assets/home-seguranca.png`
- `user-uploads://Películas_Comerciais_e_Residenciais.png` → `src/assets/home-comercial.png`
- `user-uploads://Proteção_de_Pintura_PPF.png` → `src/assets/home-ppf.png`

### 2. Atualizar `src/pages/Index.tsx`
- Importar as 4 imagens como modulos ES6
- Passar `imageSrc` para cada `<ProductBanner />`
- Ajustar textos e botoes para corresponder a referencia:
  - Banner 1: titulo "Películas Solares", desc "Menos calor, mais conforto. Controle a claridade.", botao "Veja"
  - Banner 2: titulo "Películas de Proteção e Segurança Superior", desc "Curta o seu caminho. Vidros muito mais seguros para você chegar lá.", botao "Conheça"
  - Banner 3: titulo "Películas Comerciais e Residenciais", desc "Conforto e controle solar. Economia inteligente todos os dias, durante anos.", botao "Explore"
  - Banner 4: titulo "Películas de Proteção à Pintura (PPF)", desc "Cobertura invisível, seu carro sempre novo e valorizado.", botao "Conheça"

### 3. Ajustar `src/components/ProductBanner.tsx`
- Refinar overlay gradient para melhor contraste com fotos reais: usar gradient direcional baseado no `alignment` (gradiente mais forte no lado do texto)
- Quando `alignment === 'right'`: `bg-gradient-to-l from-primary/85 via-primary/60 to-transparent`
- Quando `alignment === 'left'`: `bg-gradient-to-r from-primary/85 via-primary/60 to-transparent`

## O que NAO muda
- Hero section, ParallaxBreak, Why INSULFILM, Simulators
- Rotas, Header, Footer
- Efeitos parallax existentes no ProductBanner (scale na imagem, texture Y)

## Resultado
Os 4 banners da home passam de fundos abstratos (carbon-gradient) para fotos de impacto full-width com caixas de texto semi-transparentes sobrepostas, replicando fielmente o layout da referencia dentro da estetica dark premium existente.


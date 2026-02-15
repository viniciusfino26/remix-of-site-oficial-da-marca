

# Atualizar Paleta de Cores — INSULFILM™ Brand Guidelines

## Cores da Marca (do manual enviado)
- **Azul Principal:** #001E60 (RGB 0, 30, 96)
- **Laranja Detalhe:** #FF6720 (RGB 255, 103, 32)
- **Branco Puro:** #FFFFFF

## Arquivos a Alterar

### 1. `src/index.css` — Variáveis CSS
Atualizar todas as variáveis HSL para refletir a nova paleta:
- `--background`: Branco puro (0 0% 100%)
- `--foreground`: Azul escuro (#001E60)
- `--primary`: Azul #001E60 (hsl ~220 100% 19%)
- `--accent`: Laranja #FF6720 (hsl ~19 100% 56%)
- `--card`, `--popover`: Branco ou cinza muito claro
- `--muted`, `--secondary`: Tons claros de cinza/azul
- `--border`, `--input`: Cinza claro
- Remover variáveis custom `--carbon`, `--carbon-deep`, `--deep-blue`, `--deep-blue-accent`, `--silver`, `--silver-light`, `--glass`
- Ajustar sidebar para tons de azul escuro

### 2. `src/index.css` — Classes utilitárias
- `.text-gradient-premium`: Gradiente com azul escuro
- `.text-gradient-blue`: Gradiente azul para laranja
- `.bg-glass`: Fundo branco translucido
- `.bg-carbon-gradient`: Substituir por gradiente azul
- `.shadow-premium`: Sombra com tom azul
- `.border-glow`: Borda laranja sutil

### 3. `tailwind.config.ts`
- Remover cores custom `carbon`, `silver`, `deep-blue` (ja que as variáveis CSS serão removidas)

### 4. `src/components/Header.tsx`
- Ajustar classes de fundo e texto para usar a nova paleta (azul escuro de fundo, texto branco, detalhes laranja)

### 5. `src/components/Footer.tsx`
- Ajustar fundo para azul escuro, texto branco, CTAs em laranja

### 6. `src/pages/Index.tsx`
- Ajustar hero, cards e seções para a nova paleta (fundo branco, textos azul escuro, botões/detalhes em laranja)

### 7. Logos
- Copiar os logos enviados (`2.png` versão fundo branco e `3.png` versão fundo escuro) para `src/assets/` e usar no Header/Footer

## Resultado
Site com visual limpo e profissional: fundo branco, textos e navegação em azul marinho #001E60, botões e destaques em laranja #FF6720, seguindo fielmente o manual de identidade visual da INSULFILM™.


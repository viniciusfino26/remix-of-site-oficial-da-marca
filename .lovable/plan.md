

## Plano: Atualizar seção Aplicabilidade + CTA

### Alterações em `src/pages/SkinSafe8K.tsx`

**1. Expandir a seção Aplicabilidade (linhas 257-296)**
- Manter os 2 cards existentes (SkinSafe8K sozinha e SkinSafe8K + Solar)
- Adicionar abaixo dos cards um bloco informando que a SkinSafe8K é compatível com **todas as linhas solares automotivas**, destacando cada uma:
  - **Dark** (2ª Geração — Pigmentada)
  - **Eclipse** (3ª Geração — Carbono)
  - **Vip** (3ª Geração evoluída — Carbono-Cerâmica)
  - **Matrix** (4ª Geração — Cerâmica)
  - **Polariz Ultra** (5ª Geração — Cerâmica Metalizada)
- Cada linha solar será um badge/pill com link para a respectiva página (`/automotivo/solar/dark`, etc.)
- Texto introdutório: "A SkinSafe8K pode ser combinada com todas as nossas linhas de proteção solar automotiva para oferecer proteção completa:"

**2. Adicionar CTA "Proteger minha pele" antes do ParallaxBreak (linha 251)**
- Inserir entre a seção "O perigo real" e o ParallaxBreak
- Botão accent com ícone de seta, texto "PROTEGER MINHA PELE"
- Link para WhatsApp (mesmo padrão da página)
- Estilo centralizado, fundo sutil

### Estrutura resultante
```text
...
Seção "O perigo real" (cards)
CTA "Proteger minha pele" (NOVO)
ParallaxBreak
Aplicabilidade (cards + linhas solares compatíveis) (EXPANDIDO)
...
```

Arquivo alterado: `src/pages/SkinSafe8K.tsx` (único arquivo)


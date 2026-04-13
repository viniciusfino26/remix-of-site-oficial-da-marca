

## Remover Produtos Solares da Página /automotivo

### O que será removido

1. **Arrays de dados** — `solarProducts` (linhas 51-106) e `solarTabs` (linhas 108-113) que definem Dark, Eclipse, VIP e Polariz Ultra
2. **Tabs de navegação** — Botões "DARK", "ECLIPSE", "VIP", "POLARIZ ULTRA" (linhas 240-261)
3. **Seções alternadas de produto** — Os blocos alternados com specs, imagem placeholder e CTA de cada produto (linhas 263-351)

### O que permanece

- Hero
- Texto introdutório
- 3 ProductBanners (Solares, Segurança, PPF) — que já linkam para os hubs específicos
- ParallaxBreak
- Benefícios, Diferenciais, Centros Autorizados, FAQ e CTA final

### Arquivo alterado

- `src/pages/Automotivo.tsx` — Remoção das seções e imports não utilizados (`Tabs`, `TabsContent`, `TabsList`, `TabsTrigger`, interface `SolarProduct`)


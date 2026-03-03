

## Plano: Adicionar seção "Aplicabilidade" nas páginas de segurança

Adicionar o quadro de compatibilidade com as linhas solares (igual ao da SkinSafe8K) nas 3 páginas de segurança: Antivandalismo13K, SkudoGuard e SkudoUltra.

### O que será feito

Inserir uma nova seção antes do CTA final em cada página, com:
- Icone `Sparkles` centralizado
- Titulo adaptado ao nome do produto (ex: "A Antivandalismo 13K pode ser combinada...")
- 5 badges clicáveis com links para as linhas solares (Dark, Eclipse, Vip, Matrix, Polariz Ultra)
- Mesmo estilo `glass-card` usado na SkinSafe8K

### Arquivos alterados

1. **`src/pages/Antivandalismo13K.tsx`** — inserir seção entre o Glossário (seção 13) e o CTA final (seção 14), ~linha 706. Adicionar import `Sparkles, Sun` se necessário.

2. **`src/pages/SkudoGuard.tsx`** — inserir seção entre o Glossário (seção 14) e o CTA final (seção 15), ~linha 767. Adicionar import `Sparkles, Sun`.

3. **`src/pages/SkudoUltra.tsx`** — inserir seção entre o Glossário (seção 11) e o CTA final (seção 12), ~linha 694. Adicionar import `Sparkles, Sun`.

### Conteúdo da seção (idêntico nas 3, apenas o nome do produto muda)

```text
Compatível com todas as linhas solares automotivas
A [NomeProduto] pode ser combinada com todas as nossas linhas de proteção solar automotiva para oferecer proteção completa:

[Dark — 2ª Geração — Pigmentada]
[Eclipse — 3ª Geração — Carbono]
[Vip — 3ª Geração evoluída — Carbono-Cerâmica]
[Matrix — 4ª Geração — Cerâmica]
[Polariz Ultra — 5ª Geração — Cerâmica Metalizada]
```

Cada badge será um link para a respectiva página solar, usando o mesmo padrão visual da SkinSafe8K (glass-card + Badge com icone Sun).


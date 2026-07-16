## Objetivo
Substituir todos os travessões (`—`, U+2014) por vírgula seguida de espaço nos textos do site, preservando o significado da pausa.

## Escopo
- Arquivos `.tsx` em `src/pages/**` e `src/lib/**` (textos vis­íveis em JSX e strings de dados como `pdpProducts`, `pdpFAQs`, `pdpDualPublic`, `rdstation`).
- Traduções em `src/i18n/locales/pt.json`, `en.json`, `es.json`.
- Comentários de código também são ajustados no mesmo passe (mais simples e sem risco), já que a substituição é puramente textual.

## Regra de substituição
Padrões tratados, nesta ordem, para evitar espaços duplos:
1. ` — ` (espaço + travessão + espaço) → `, `
2. `— ` (travessão no início ou colado) → `, `
3. ` —` → `,`
4. `—` isolado → `,`

Aplicado via `sed -i` arquivo a arquivo na lista retornada por `rg -l "—" src/`.

## Fora do escopo
- Não altero nenhuma outra pontuação, capitalização ou copy aprovada além da troca do `—`.
- Não mexo em arquivos autogerados (`src/integrations/supabase/*`, `.env`).
- Não altero `mem://` (as regras internas podem manter travessões).

## Validação
- `rg -n "—" src/` deve retornar vazio ao final.
- Rodar typecheck automático do harness para garantir que nenhum JSX quebrou (as strings estão sempre dentro de aspas/backticks, então o risco é baixo).

# Teste de validação — formulário /frota (e-mails e telefones)

Objetivo: confirmar via Playwright que a validação Zod do `FrotaLeadForm` aceita todos os formatos válidos comuns de e-mail e telefone (BR e internacional) e rejeita apenas o que deve ser rejeitado. Sem alterar código — só teste.

## Regras atuais (do schema)
- **Email:** `z.string().trim().email().max(255)` — segue a spec de e-mail do Zod.
- **Telefone:** regex `^\+?[\d\s()\-]{10,20}$` — aceita dígitos, espaços, parênteses e hífens, com `+` opcional, 10 a 20 caracteres.

## Matriz de casos

### E-mails que DEVEM passar
1. `joao@example.com` — clássico
2. `joao.silva@empresa.com.br` — subdomínio + ponto no local part
3. `joao+frota@empresa.io` — plus addressing (Gmail)
4. `j.s-1999@sub.dominio.co` — hífen, número, subdomínio
5. `MAIUSCULO@EMPRESA.COM` — case
6. `nome_com_underline@empresa.com` — underscore
7. `  espaco@empresa.com  ` — com espaços (trim deve limpar)

### E-mails que DEVEM falhar
1. `sem-arroba.com`
2. `joao@`
3. `@empresa.com`
4. `joao@empresa` (sem TLD) — verificar comportamento atual do Zod

### Telefones que DEVEM passar
1. `(11) 99999-9999` — BR formatado completo (16 chars)
2. `11999999999` — só dígitos, 11
3. `1133334444` — fixo BR 10 dígitos
4. `+55 11 99999-9999` — internacional formatado
5. `+551199999999` — internacional colado
6. `(11)3333-4444` — sem espaços
7. `11 3333 4444` — só espaços

### Telefones que DEVEM falhar
1. `123` — muito curto
2. `abcdefghij` — letras
3. `9999999999999999999999` — >20 chars
4. `(11) 9.9999-9999` — ponto não permitido pela regex

## Execução
- Script Playwright único em `/tmp/browser/frota-validation/test.py`.
- Para cada caso: preencher name válido + email/phone do caso + marcar consentimento + aguardar ≥3.5s (bypass anti-bot) + submeter.
- **Casos válidos:** confirmar tela de sucesso ("Solicitação recebida"). Recarregar entre iterações.
- **Casos inválidos:** confirmar que a mensagem de erro específica aparece (`E-mail inválido` / `Telefone inválido`) e que não vai para sucesso.
- Screenshot de cada resultado em `/tmp/browser/frota-validation/screenshots/`.
- Ao final, imprimir um resumo tabelado (PASS/FAIL por caso) e listar quaisquer divergências entre o esperado e o observado.

## Relatório final ao usuário
- Tabela de casos com resultado real
- Divergências encontradas (ex.: se `joao@empresa` sem TLD passar quando não deveria, ou se `+551199999999` falhar quando deveria passar)
- Recomendação de ajuste do regex/schema **apenas se** algum formato legítimo estiver sendo bloqueado indevidamente — sem executar a mudança nesta rodada.

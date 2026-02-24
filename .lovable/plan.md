

# Duas Alteracoes: Merge Antivandalismo13K + Restaurar Aviso Legal

## 1. Merge da Pagina Antivandalismo13K com o conteudo da Proposta

A pagina `/antivandalismo13k` atualmente tem a versao tecnica (631 linhas). A pagina `/antivandalismo13k/teste_proposta` tem a versao emocional completa (700 linhas) que ja inclui TODO o conteudo tecnico original MAIS as secoes emocionais adicionais (estatisticas de roubos, perigo dos estilhacos, proteja quem voce ama, depoimento).

**Acao:** Substituir o conteudo de `Antivandalismo13K.tsx` pelo conteudo completo de `Antivandalismo13KProposta.tsx` (renomeando o componente para `Antivandalismo13K`). O arquivo `Antivandalismo13KProposta.tsx` sera mantido mas a rota `/antivandalismo13k/teste_proposta` sera removida do `App.tsx` (ou redirecionada para `/antivandalismo13k`).

---

## 2. Restaurar o Aviso de Propriedade Industrial no Site Inteiro

O componente `LegalNotice.tsx` existe mas **nao esta importado em nenhum lugar** — foi removido do `App.tsx` sem solicitacao.

**Acao:** 
- Atualizar o texto do `LegalNotice.tsx` com o conteudo exato fornecido, incluindo os numeros de registro do INPI (813633370, 813633389, 813633451, 813633460, 814699421, 818911069, 822317508, 822553090, 822553104, 822553112, 822553120, 822553120)
- Hardcodar o texto em portugues (sem i18n), consistente com o padrao das paginas de produto
- Importar e renderizar `LegalNotice` no `App.tsx` entre o `</Routes>` e o `<Footer />`, garantindo que apareca em TODAS as paginas, acima do rodape (conforme a imagem de referencia)

---

## Detalhes Tecnicos

### Arquivos editados:

1. **`src/pages/Antivandalismo13K.tsx`** — Reescrito com o conteudo completo da versao Proposta (secoes emocionais + tecnicas unificadas). Componente renomeado para `Antivandalismo13K`.

2. **`src/components/LegalNotice.tsx`** — Atualizado com texto hardcoded:
   - Titulo: "Aviso de Propriedade Industrial e Intelectual"
   - Texto completo fornecido pelo usuario com todos os numeros de registro INPI
   - Link para o INPI mantido
   - Remover dependencia do i18n (textos hardcoded em portugues)

3. **`src/App.tsx`** — Duas alteracoes:
   - Importar `LegalNotice` e renderizar entre `</Routes>` e `<Footer />`
   - Remover a rota `/antivandalismo13k/teste_proposta` (ou converter em redirect para `/antivandalismo13k`)
   - Remover import de `Antivandalismo13KProposta`

### Posicionamento do LegalNotice (conforme imagem):
O aviso aparecera acima do rodape (que contem as colunas INSTITUCIONAL, LINHAS DE PRODUTO, SUPORTE, SIGA-NOS), como uma secao separada com fundo `bg-carbon-gradient` e borda superior.


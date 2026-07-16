# Substituir aviso legal em todo o site

## Situação atual
- O texto da imagem de referência ("INSULFILM™ é marca registrada protegida pela Lei nº 9.279/96... Saiba mais") vive em `src/components/LegalDisclaimer.tsx`.
- Esse componente é usado manualmente em ~17 páginas (Index, PDPs de arquitetônico, hubs, sobre-marca etc.), portanto **não aparece hoje em todas as páginas** do site.
- O `Footer` (`src/components/Footer.tsx`) é renderizado globalmente em `src/App.tsx` e aparece em todas as rotas.

## O que será feito

1. **Reescrever `src/components/LegalDisclaimer.tsx`** com o novo texto exato fornecido, em 5 parágrafos:
   - "Uso restrito. A marca identifica películas..."
   - "A origem oficial de uma aplicação deve ser sempre verificável..."
   - "Benefícios, desempenho, garantias..."
   - "Nenhuma responsabilidade é aceita por erros..."
   - "Gestão institucional: FÊNIX MAIOR PARTICIPAÇÕES LTDA. · CNPJ 65.685.208/0001-37"
   - Remover o link "Saiba mais" e as referências a `/sobre/o-que-e-insulfilm` e `/marca/autenticidade` (não fazem mais parte do texto aprovado).
   - Manter a estética atual (card sutil, tipografia leve, animação fadeInUp, `aria-label` atualizado).

2. **Tornar o aviso global via Footer**: incluir `<LegalDisclaimer />` uma única vez dentro do `Footer.tsx` (bloco superior, antes dos links), garantindo presença em 100% das rotas sem edição página a página.

3. **Remover duplicações**: retirar o `import` e o uso de `<LegalDisclaimer />` das ~17 páginas que hoje o renderizam manualmente, para evitar aparecer duas vezes:
   - `src/pages/Index.tsx`, `ArquitetonicoComercial.tsx`, `ArquitetonicoResidencial.tsx`, `ArqResidencialGuiaCompleto.tsx`, `MarcaSobre.tsx`, `MarcaPresenca.tsx`, `SobreInsulfilmMarcaRegistrada.tsx`, `SobreOQueEInsulfilm.tsx`
   - PDPs: `Clear70.tsx`, `Naturale.tsx`, `Petrolio.tsx`, `Orizzonte70.tsx`, `GrigioInvertito.tsx`, `MetallicoArgento.tsx`, `ReflessoDArgento.tsx`, `SpecchiatoBronzo.tsx`, `Ultravioletti90.tsx`
   - `src/components/ProductPDP.tsx` (usado pelas páginas dual-público).

## Notas técnicas
- Nenhuma alteração de rotas, dados ou i18n.
- O componente permanece um único ponto de verdade — futuras edições de texto acontecem só em `LegalDisclaimer.tsx`.
- Copy do novo aviso é tratada como imutável (regra de marca do projeto) e será colada literalmente.

## Fora de escopo
- Traduções EN/ES do novo texto (o atual também está apenas em PT). Posso adicionar depois se quiser.

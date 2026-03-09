## Plano: Corrigir números de WhatsApp por segmento

### Regra

- **Automotivo** → `5511976136911`
- **Arquitetônico** → `5511936182746`

### Situação atual

35 arquivos + WhatsAppButton usam o placeholder `5511999999999`. Apenas `AutomotivoHubPPF.tsx` já tem o número automotivo correto.

### Classificação e correções

**Automotivo (`5511976136911`) — 13 arquivos:**


| Arquivo                                             | Motivo             |
| --------------------------------------------------- | ------------------ |
| `Automotivo.tsx`                                    | Hub automotivo     |
| `AutomotivoHubSolar.tsx`                            | Hub solar auto     |
| `AutomotivoHubSeguranca.tsx`                        | Hub segurança auto |
| `AutomotivoDark.tsx`                                | Produto auto       |
| `AutomotivoEclipse.tsx`                             | Produto auto       |
| `AutomotivoMatrix.tsx`                              | Produto auto       |
| `AutomotivoPolariz.tsx`                             | Produto auto       |
| `AutomotivoVip.tsx`                                 | Produto auto       |
| `AutomotivoAntivandalismo.tsx`                      | Produto auto       |
| `AutomotivoSkudoGuard.tsx`                          | Produto auto       |
| `AutomotivoSkudoUltra.tsx`                          | Produto auto       |
| `AutomotivoSkinSafe.tsx`                            | Produto auto       |
| `AutomotivoPhantom6.tsx` / `AutomotivoPhantom8.tsx` | PPF auto           |


**Arquitetônico (`5511936182746`) — 22+ arquivos:**


| Arquivo                     | Motivo            |
| --------------------------- | ----------------- |
| `Residencial.tsx`           | Arq residencial   |
| `ArqHubSolar.tsx`           | Hub solar arq     |
| `ArqHubSeguranca.tsx`       | Hub segurança arq |
| `ArqHubDecorativo.tsx`      | Hub decorativo    |
| `Clear70.tsx`               | Produto arq       |
| `Dark.tsx`                  | Produto arq       |
| `Eclipse.tsx`               | Produto arq       |
| `Matrix.tsx`                | Produto arq       |
| `VIP.tsx`                   | Produto arq       |
| `PolarizUltra.tsx`          | Produto arq       |
| `Naturale.tsx`              | Produto arq       |
| `Orizzonte70.tsx`           | Produto arq       |
| `Petrolio.tsx`              | Produto arq       |
| `GrigioInvertito.tsx`       | Produto arq       |
| `MetallicoArgento.tsx`      | Produto arq       |
| `ReflessoDArgento.tsx`      | Produto arq       |
| `SpecchiatoBronzo.tsx`      | Produto arq       |
| `Ultravioletti90.tsx`       | Produto arq       |
| `ArqSegurancaISSF4000.tsx`  | Segurança arq     |
| `ArqSegurancaISSF7000.tsx`  | Segurança arq     |
| `ArqDecorativoJateado.tsx`  | Decorativo        |
| `ArqDecorativoBlackout.tsx` | Decorativo        |
| `ArqDecorativoWhiteout.tsx` | Decorativo        |
| `Antivandalismo13K.tsx`     | Segurança arq     |
| `PhantomArquitetonico.tsx`  | PPF arq           |
| `SkinSafe8K.tsx`            | Segurança arq     |
| `SkudoGuard.tsx`            | Segurança arq     |
| `SkudoUltra.tsx`            | Segurança arq     |


**Botão flutuante global (**`WhatsAppButton.tsx`**):**  
Será usado o do automotivo `5511976136911`,  pois será uma central de atendimento. E depois o chatbot que vamos colocar dentro do site, vai atender ambas as divisões e será feito transbordo para cada divisão que o cliente desejar. 

### Alteração

Cada arquivo: trocar `const WHATSAPP_NUMBER = '5511999999999'` pelo número correspondente ao segmento.
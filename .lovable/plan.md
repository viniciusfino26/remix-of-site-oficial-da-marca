User wants to change the product display name from "SkinSafe8K" to "Antivandalismo PS12" on the Automotive Security page. They do not have the PDP content yet, so the PDP page and route should remain unchanged for now to avoid broken links and incomplete content.

### Scope of changes
- Update the selector button label in `src/pages/AutomotivoHubSeguranca.tsx` (line 213) from "SkinSafe8K" to "Antivandalismo PS12".
- Update the product card title (line 274) from "INSULFILM™SkinSafe8K" to "INSULFILM™Antivandalismo PS12".
- Update the card link `to` path and the image alt text in the same section to reference the new product name.
- Update the Header mega-menu item in `src/components/Header.tsx` (line 120) from "SkinSafe 8K" to "Antivandalismo PS12" and adjust the description to match the new positioning (e.g., "Proteção contra estilhaços e vandalismo.").

### What is intentionally left unchanged
- The PDP route `/automotivo/seguranca/skinsafe8k` stays the same until the PDP content is ready.
- The PDP page `src/pages/SkinSafe8K.tsx`, its product definition in `src/lib/pdpProducts.ts`, FAQ entry in `src/lib/pdpFAQs.ts`, i18n files, and `sitemap.xml` remain unchanged.
- When the PDP content is provided later, the URL can be migrated and the PDP copy fully updated in a follow-up task.

### Files to edit
- `src/pages/AutomotivoHubSeguranca.tsx`
- `src/components/Header.tsx`

### Verification
- Build the project to ensure no TypeScript/Tailwind errors.
- Visually confirm the hub selector and header menu show "Antivandalismo PS12".
## Problem

The product "INSULFILM™ Grigio Invertito" is currently in the "Não Refletivas" category but should be in the "Privacidade e Espelhados" category alongside Metallico Argento, Specchiato Bronzo, and Reflesso d'Argento.

## Changes in `src/pages/ArqHubSolar.tsx`

1. **Add** Grigio Invertito to the "Privacidade e Espelhados" products array (after Specchiato Bronzo):
  - `{ name: 'INSULFILM™ Grigio Invertito', path: '/arquitetonico/solar/grigio-invertito' }`
2. **Remove** Grigio Invertito from the "Não Refletivas" products array, leaving only Petrolio there.
3. **Preserve all existing titles, descriptions, and other texts exactly as they are** -- no other text modifications.

### Result

- **Alta Transparência**: Clear70, Orizzonte70, Ultravioletti90
- **Neutras**: Naturale
- **Espelhadas e Refletivas**: Metallico Argento, Reflesso d'Argento, Specchiato Bronzo, **Grigio Invertito**
- **Não Refletivas**: Petrolio
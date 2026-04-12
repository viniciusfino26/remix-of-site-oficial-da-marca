

## Plan: Add "LinkedIn: Fundador" to MarcaSobre

Almost everything requested is already implemented from the previous approved plan. The header dropdown has the correct 7 items, all 7 pages exist with the correct content, and routes are configured.

**One missing item:** The `MarcaSobre.tsx` channels section is missing the "LinkedIn: Fundador" entry.

### Change

In `src/pages/MarcaSobre.tsx`, add a new channel entry after the existing LinkedIn company link:

```
{ icon: Linkedin, label: 'LinkedIn', value: 'Fundador', href: '#' }
```

This adds the "LinkedIn: Fundador" card to the official channels grid on the Sobre page, matching the user's specification exactly.

No other files need changes.


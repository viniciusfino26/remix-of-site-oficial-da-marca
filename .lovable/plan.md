

## Problem

The `ProductShowcase` component (`src/components/ProductShowcase.tsx`) has a bug: when `imageSrc` is provided, it renders a container div but **no `<img>` element** inside it. Lines 88-95 are blank -- the image tag was accidentally removed or never added.

## Fix

Add the missing `<img>` tag inside the `imageSrc` conditional block in `ProductShowcase.tsx` (around line 89):

```tsx
<img
  src={imageSrc}
  alt={title}
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

This is a one-line fix in a single file. The images are already correctly imported and passed from `ArqHubSolar.tsx` -- they just aren't being rendered.


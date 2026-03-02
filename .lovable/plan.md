

## Plano: Incorporar vídeo do site de referência na página SkinSafe8K

O site de referência usa exatamente este vídeo:
`https://www.insulfilm.com.br/automotivo/__videos/Antivandalismo--Video-Estilhacamento-2.mp4`

### Alteração em `src/pages/SkinSafe8K.tsx` (linhas 145-152)

Substituir o placeholder "Vídeo em breve" por um elemento `<video>` com as mesmas propriedades do site original:
- `autoPlay`, `muted`, `loop`, `playsInline`, `controls`
- `disablePictureInPicture`
- Manter o container `aspect-video`, `rounded-2xl`, `shadow-premium-lg`
- Remover o import `Play` de lucide-react se não for usado em outro lugar

Arquivo alterado: `src/pages/SkinSafe8K.tsx` (único arquivo)


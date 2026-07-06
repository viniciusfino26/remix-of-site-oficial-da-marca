import { useState } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  /** URL do vídeo (import de asset ou caminho público). */
  src: string;
  /** Poster opcional. Sem poster, usa um placeholder de marca. */
  poster?: string;
  /** Texto acessível do botão de play. */
  label?: string;
  className?: string;
}

/**
 * Reproduz vídeos pesados sob demanda: enquanto o usuário não clica, nenhum
 * byte do vídeo é baixado (preload="none" e o <video> só é montado após o
 * clique). Evita, por exemplo, baixar 15 MB automaticamente para todo
 * visitante — inclusive quem nunca assiste.
 */
const LazyVideo = ({ src, poster, label = 'Reproduzir vídeo', className }: LazyVideoProps) => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <video
        className={className ?? 'h-full w-full object-cover'}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={label}
      className="group relative flex h-full w-full items-center justify-center overflow-hidden"
      style={
        poster
          ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : undefined
      }
    >
      {!poster && (
        <div className="absolute inset-0 bg-carbon-gradient" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" aria-hidden="true" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-premium transition-transform group-hover:scale-110">
        <Play className="ml-1 h-7 w-7 fill-current" />
      </span>
    </button>
  );
};

export default LazyVideo;

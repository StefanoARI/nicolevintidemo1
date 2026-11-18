import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  fallbackSrc,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: ResilientImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setHasFailed(true);
  };

  if (hasFailed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#2B201A] via-[#412E22] to-[#1A1412] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 25%, rgba(212, 175, 122, 0.35), transparent 60%)',
          }}
        />
        <Sparkles className="relative mb-3 h-7 w-7 text-[#D4AF7A]" strokeWidth={1.25} />
        <p className="relative max-w-[220px] font-serif text-sm italic text-[#F3ECE1]/90">
          {fallbackLabel || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
    />
  );
}

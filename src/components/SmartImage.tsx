import { useState, type ReactNode } from 'react';

export function SmartImage({ src, alt, fallback, className }: { src?: string; alt: string; fallback: ReactNode; className?: string }) {
  const [failed, setFailed] = useState(!src);
  if (failed) return <div className={`img-fallback ${className ?? ''}`}>{fallback}</div>;
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}

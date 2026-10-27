import { useState, type ReactNode } from 'react';

export function SmartImage({
  src,
  alt,
  fallback,
  className,
  priority = false,
}: {
  src?: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
  priority?: boolean;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(!src);

  const handleError = () => {
    // If webp fails, try jpg fallback if available
    if (currentSrc && currentSrc.endsWith('.webp')) {
      setCurrentSrc(currentSrc.replace(/\.webp$/, '.jpg'));
    } else {
      setFailed(true);
    }
  };

  if (failed || !currentSrc) return <div className={`img-fallback ${className ?? ''}`}>{fallback}</div>;
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={handleError}
    />
  );
}


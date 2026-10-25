import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { SmartImage } from './SmartImage';

type Item = { src: string; caption: string };

export function Gallery({ items, label }: { items: Item[]; label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, close, step]);

  if (!items.length) return null;
  const cur = open !== null ? items[open] : null;

  return (
    <>
      <ul className="gallery" aria-label={`${label} documentation`}>
        {items.map((it, i) => (
          <li key={it.src}>
            <button className="gallery-item" onClick={() => setOpen(i)} aria-label={`Open photo: ${it.caption}`}>
              <SmartImage src={it.src} alt="" fallback={<ImageIcon size={22} />} />
              <span className="gallery-cap" aria-hidden="true">{it.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {cur && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={cur.caption} onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            <SmartImage src={cur.src} alt={cur.caption} className="lightbox-img" fallback={<><ImageIcon size={40} /><span className="mono">Photo not added yet</span></>} />
            <figcaption>
              <span>{cur.caption}</span>
              <span className="mono">{open! + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button className="lb-btn lb-close" onClick={close} aria-label="Close" autoFocus><X size={20} /></button>
          {items.length > 1 && (
            <>
              <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo"><ChevronLeft size={22} /></button>
              <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo"><ChevronRight size={22} /></button>
            </>
          )}
        </div>,
        document.body,
      )}
    </>
  );
}

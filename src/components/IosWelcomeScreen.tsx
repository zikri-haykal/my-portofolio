import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

const GREETINGS = [
  'Hello',
  'Bonjour',
  'Hola',
  'Ciao',
  'こんにちは',
  'Halo',
  'Selamat Datang',
];

export function IosWelcomeScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(GREETINGS[0]);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const animContext = useRef<gsap.Context | null>(null);

  const unlockScreen = useCallback(() => {
    if (!containerRef.current) return;
    sessionStorage.setItem('ios_welcome_seen', 'true');

    gsap.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'expo.inOut',
      onComplete: () => {
        setIsOpen(false);
        document.body.style.overflow = '';
      },
    });
  }, []);

  const runAnimation = useCallback(() => {
    if (!wordRef.current || !containerRef.current) return;

    if (animContext.current) animContext.current.revert();

    animContext.current = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          unlockScreen();
        },
      });

      // Animate progress bar automatically from 0% to 100%
      tl.to(
        { p: 0 },
        {
          p: 100,
          duration: 2.2,
          ease: 'power1.inOut',
          onUpdate: function () {
            const current = Math.round(this.targets()[0].p);
            setProgress(current);
            if (fillRef.current) {
              fillRef.current.style.width = `${current}%`;
            }
          },
        },
        0
      );

      // Auto cycle words with smooth GSAP blur & fade
      GREETINGS.forEach((word, index) => {
        const isLast = index === GREETINGS.length - 1;
        const timePoint = (index / GREETINGS.length) * 1.9;

        tl.call(
          () => {
            setCurrentWord(word);
          },
          [],
          timePoint
        );

        tl.fromTo(
          wordRef.current,
          { opacity: 0, y: 14, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.22,
            ease: 'power3.out',
          },
          timePoint
        );

        if (!isLast) {
          tl.to(
            wordRef.current,
            {
              opacity: 0,
              y: -10,
              filter: 'blur(4px)',
              duration: 0.12,
              ease: 'power2.in',
            },
            timePoint + 0.24
          );
        }
      });

      // Brief holding pause on 'Selamat Datang'
      tl.to({}, { duration: 0.4 });
    }, containerRef);
  }, [unlockScreen]);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('ios_welcome_seen');
    if (!hasSeen) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    const handleReplay = () => {
      setIsOpen(true);
      setProgress(0);
      setCurrentWord(GREETINGS[0]);
      document.body.style.overflow = 'hidden';
      if (containerRef.current) {
        gsap.set(containerRef.current, { yPercent: 0, opacity: 1 });
      }
      setTimeout(runAnimation, 60);
    };

    window.addEventListener('replay-ios-welcome', handleReplay);
    return () => {
      window.removeEventListener('replay-ios-welcome', handleReplay);
      if (animContext.current) animContext.current.revert();
      document.body.style.overflow = '';
    };
  }, [runAnimation]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(runAnimation, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, runAnimation]);

  // Click anywhere or press Escape / Space to skip immediately
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        unlockScreen();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, unlockScreen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="ios-welcome-overlay"
      onClick={unlockScreen}
      title="Klik untuk membuka langsung"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome screen"
      style={{ cursor: 'pointer' }}
    >
      {/* Center: Pure typographic greeting */}
      <div className="ios-welcome-content">
        <h1 ref={wordRef} className="ios-welcome-word">
          {currentWord}
        </h1>
        <p className="ios-welcome-sub">Muhammad Zikri Haykal</p>
      </div>

      {/* Bottom: Minimalist Apple-style hairline progress */}
      <footer className="ios-welcome-bottom">
        <div className="ios-simple-scroll">
          <div className="ios-simple-track">
            <div ref={fillRef} className="ios-simple-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="ios-simple-label mono">
            {progress >= 100 ? 'Selamat Datang' : 'Welcome'}
          </span>
        </div>
      </footer>
    </div>
  );
}

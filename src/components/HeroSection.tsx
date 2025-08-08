import { useEffect, useState } from 'react';
import heroCharacter from '@/assets/dusa-standoff.png';
import guildEmblem from '@/assets/BO-LP-LOGO-edit.png';
import smokeOverlay from '@/assets/smoke.jpg';
import blackOrderTextImage from '@/assets/BO-text.png';
import smokeOverlayTop from '@/assets/smoke-upside.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [compact, setCompact] = useState(false);   // logo-only on phones/tablets/short
  const [parallax, setParallax] = useState(false); // desktop-only parallax

  // Parallax scroll amount only when enabled
  useEffect(() => {
    if (!parallax) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);

  useEffect(() => {
    const mqCompact = window.matchMedia('(max-width: 840px), (max-height: 740px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

    const sync = () => {
      const isCompact = mqCompact.matches;
      setCompact(isCompact);
      setParallax(!isCompact && !mqReduce.matches && !isIOS);
    };

    sync();
    mqCompact.addEventListener?.('change', sync);
    mqReduce.addEventListener?.('change', sync);
    return () => {
      mqCompact.removeEventListener?.('change', sync);
      mqReduce.removeEventListener?.('change', sync);
    };
  }, []);

  return (
    // removed "hero-side-fade" so no left/right dark bars
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bottom-fade">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${(parallax ? 0.5 : 0) * scrollY}px)`,
          backgroundImage: `url(${heroCharacter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: parallax ? 'fixed' : 'scroll',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-20 z-10 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${smokeOverlay})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            animation: 'slowSmoke 4.5s ease-in-out infinite',
          }}
        />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-10 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${smokeOverlayTop})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            animation: 'slowSmoke 4.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Fireflies */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#d4ff52',
              animation: `fireflyGlow ${2.5 + Math.random() * 2}s ease-in-out infinite`,
              boxShadow: '0 0 8px 6px rgba(212, 255, 82, 0.15)',
              filter: 'blur(3px)',
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`absolute ${
          compact ? 'bottom-20' : 'bottom-32 md:bottom-36 lg:bottom-40'
        } left-1/2 -translate-x-1/2 z-30 text-center px-4`}
      >
        <div className="flex justify-center">
          <img
            src={guildEmblem}
            alt="Guild Logo"
            className={`${compact ? 'w-24 sm:w-28' : 'w-32 md:w-40 lg:w-48'} logo-glow-animate mb-[-14px]`}
          />
        </div>

        {/* Hide wordmark on compact */}
        {!compact && (
          <div className="flex justify-center -mt-[44px]">
            <img
              src={blackOrderTextImage}
              alt="BLACK ORDER"
              className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[440px] blackorder-shadow glow-text-animate"
            />
          </div>
        )}
      </div>

      {/* Scroll indicator — always visible */}
      <div className={`absolute ${compact ? 'bottom-5' : 'bottom-8'} left-1/2 transform -translate-x-1/2 z-30`}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce glow-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroCharacter from '@/assets/dusa-standoff.png';
import guildEmblem from '@/assets/BO-BS-LOGO.png';
import smokeOverlay from '@/assets/smoke.jpg';
import blackOrderTextImage from '@/assets/BO-text.png';
import smokeOverlayTop from '@/assets/smoke-upside.jpg'; // new smoke mask

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bottom-fade hero-top-fade hero-left-fade hero-right-fade">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url(${heroCharacter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark base layer */}
        <div className="absolute inset-0 bg-black/60" />

        {/* First smoke layer */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-20 z-10 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${smokeOverlay})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            animation: 'slowSmoke 4.5s ease-in-out infinite',
          }}
        />

        {/* Second smoke layer (smoke-upside) */}
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

      {/* Glowing Firefly Particles */}
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
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 text-center px-4">
        <div className="flex justify-center">
          <img
            src={guildEmblem}
            alt="Guild Logo"
            className="w-32 md:w-40 lg:w-48 logo-glow-animate mb-[-18px]"
          />
        </div>
        <div className="flex justify-center -mt-[43px] ">
          <img
            src={blackOrderTextImage}
            alt="BLACK ORDER"
            className="w-[320px] md:w-[420px] lg:w-[400px] blackorder-shadow glow-text-animate "
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce glow-scroll-indicator "></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

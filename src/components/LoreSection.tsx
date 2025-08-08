import { useEffect, useRef, useState } from 'react';
import fallingWarrior from '@/assets/monk.webp';
import guildEmblem from '@/assets/BO-logo.webp';

const LoreSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false); // phone/tablet/short screens

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      },
      { threshold: 0.3 }
    );
    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Compact mode (same rule as other sections)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 840px), (max-height: 740px)');
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  return (
    <section ref={sectionRef} className={`relative ${compact ? 'py-20' : 'py-24 md:py-32'} overflow-hidden`}>
      {/* Diagonal Background */}
      <div className="diagonal-section absolute inset-0 bg-gradient-shadow z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto lg:mx-0">
            <div className="scroll-fade-in text-center md:text-left">
              <h2 className="fantasy-title text-4xl md:text-5xl font-blackorder text-primary mb-4 md:mb-6">
                Welcome to BlackOrder
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-gold mb-6 md:mb-8 mx-auto md:mx-0"></div>
            </div>

            <div className="scroll-fade-in space-y-5 md:space-y-6 text-center md:text-left">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                A brotherhood forged in battle and bound by honor. We are a siege-focused guild, sworn to the art of
                war and devoted to claiming victory through strength, strategy, and unity. We strive for excellence and
                glory with every clash of steel. Yet, we remain a welcoming order — to new blood eager to learn.
                Whether you are a battle-hardened veteran or a fresh blade seeking purpose, BlackOrder calls you to
                stand with us.
              </p>

              {/* Smaller, tighter callout box (centered on mobile) */}
              <div className="group bg-card/50 p-4 md:p-6 rounded-xl border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-xl mx-auto md:mx-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3 md:mb-4">
                  <h3 className="fantasy-title text-xl md:text-2xl font-blackorder text-accent">
                    Forge Your Legend
                  </h3>
                  <img
                    loading="lazy"
                    src={guildEmblem}
                    alt="Guild Logo"
                    className="w-6 h-6 md:w-8 md:h-8 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#ff0022]"
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "The guild seeks worthy players to join our ranks. Do you have what it takes to stand amongst your
                  allies and face your enemies?"
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="scroll-fade-in relative w-full max-w-2xl mx-auto">
            <div className="relative z-10">
              <img
                loading="lazy"
                src={fallingWarrior}
                alt="Falling Warrior"
                className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(255,0,0,0.4)]"
              />
            </div>

            {/* Floating lights (skip on compact for cleanliness) */}
            {!compact && (
              <>
                <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-8 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-16 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </>
            )}

            {/* Quote box — smaller and inside edges on compact */}
            <div
              className={`absolute ${
                compact ? 'left-4 bottom-4 max-w-[85%] p-4' : '-left-8 -bottom-8 max-w-xs p-6'
              } bg-card/90 backdrop-blur-sm rounded-lg border border-border z-20 hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.7)]`}
            >
              <p className="text-xs md:text-sm text-muted-foreground italic">
                "Power is Earned. Brotherhood is Chosen."
              </p>
              <div className="text-[10px] md:text-xs text-primary mt-2 font-semibold">
                — Guild Masters Reinzo & SushiRawks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import logoBlackOrder from '@/assets/BO-logo.png';
import logoDefiance from '@/assets/Defiance.png';
import logoRegency from '@/assets/Regency.png';
import logoFiend from '@/assets/Fiend-logo.png';

const characters = [
  { name: 'SushiRawks', role: 'Guild Master', description: 'The Heart.', power: 'BLACK ORDER', logo: logoBlackOrder },
  { name: 'Raora',      role: 'Guild Master', description: 'The Mind.',  power: 'DEFIANCE',     logo: logoDefiance  },
  { name: 'Mq',         role: 'Guild Master', description: 'The Blade.', power: 'FIEND',        logo: logoFiend     },
  { name: 'Sanamluang', role: 'Guild Master', description: 'The Crown.', power: 'REGENCY',      logo: logoRegency   },
];

const CharacterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    );
    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="diagonal-section-reverse absolute inset-0 bg-muted/20 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 scroll-fade-in">
          <h2 className="fantasy-title text-4xl md:text-5xl font-blackorder text-primary mb-4 md:mb-6">
            The Alliance
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-gold mx-auto mb-6 md:mb-8" />
          <p className="text-sm md:text-base text-muted-foreground fantasy-title font-blackorder max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Meet the heralds who have shaped our destiny and continue to lead us into battle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className="scroll-fade-in group transform transition-transform duration-500 hover:scale-[1.03]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 group-hover:shadow-mystical shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-5 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-gold p-1">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <img
                          src={character.logo}
                          alt={character.name}
                          className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="fantasy-title text-xl md:text-2xl font-semibold text-primary mb-1 md:mb-2">
                      {character.name}
                    </h3>
                    <div className="text-accent font-semibold text-sm md:text-base mb-3 md:mb-4">
                      {character.role}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-center text-sm md:text-base mb-5 md:mb-6 leading-relaxed px-2">
                    {character.description}
                  </p>

                  <div className="text-center">
                    <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full border border-primary/20">
                      <span className="text-primary font-semibold text-xs md:text-sm rounded-full group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300">
                        {character.power}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Video CTA */}
        <div className="text-center scroll-fade-in transform transition-transform duration-500 hover:scale-[1.03]">
          <div className="bg-card/30 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-border/50 max-w-3xl md:max-w-4xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.9)] hover:border-primary/50 hover:shadow-mystical transition-all duration-300">
            <video className="w-full rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.7)]" autoPlay loop muted playsInline>
              <source src="/Intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;

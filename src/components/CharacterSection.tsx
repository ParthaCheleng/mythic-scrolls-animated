import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import guildEmblem from '@/assets/BO-logo.webp';

const characters = [
  {
    name: "Reinzo",
    role: "Guild Master",
    description: "The Ruthless Executioners.",
    power: "Kunoichi"
  },
  {
    name: "RaiserX",
    role: "Secretary",
    description: "The Iron Wall.",
    power: "Wizard"
  }
];

const CharacterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="diagonal-section-reverse absolute inset-0 bg-muted/20 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-16 scroll-fade-in opacity-0"
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="fantasy-title text-5xl md:text-5xl font-blackorder text-primary mb-6">
            Inquisitors
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-base text-muted-foreground fantasy-title font-blackorder max-w-3xl mx-auto leading-relaxed">
            Founders gave it form. War gave it purpose. BlackOrder endures and prevails.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className="scroll-fade-in opacity-0 group transform transition-transform duration-500 hover:scale-[1.03]"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards',
                willChange: 'transform, opacity'
              }}
            >
              <Card className="w-[320px] sm:w-[360px] h-[380px] bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 group-hover:shadow-mystical shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-12 rounded-full bg-gradient-gold p-1">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <img
                          loading="lazy"
                          src={guildEmblem}
                          alt={character.name}
                          className="w-12 h-12 object-cover rounded-full group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="fantasy-title text-2xl font-semibold text-primary mb-2">
                      {character.name}
                    </h3>
                    <div className="text-accent font-semibold mb-4">
                      {character.role}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {character.description}
                  </p>

                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                      <span className="text-primary font-semibold text-sm rounded-full group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300">
                        {character.power}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center scroll-fade-in opacity-0 transform transition-transform duration-500 hover:scale-[1.03]"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="bg-card/30 backdrop-blur-sm p-12 rounded-2xl border border-border/50 max-w-4xl mx-auto hover:border-primary/50 hover:shadow-mystical transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
            <h3 className="fantasy-title text-4xl font-blackorder text-primary mb-6">
              Commanders of the War
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chosen from among the most disciplined and brutal of our ranks, the Inquisitors are not merely leaders—they are enforcers of the order.
            </p>
            {/* <div className="space-y-4">
              <div className="text-accent font-semibold">
                Current Recruitment: OPEN
              </div>
              <div className="text-sm text-muted-foreground">
                Accepting applications via discord only.
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CharacterSection;

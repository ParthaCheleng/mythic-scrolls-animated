import { useEffect, useRef } from 'react';
import fallingWarrior from '@/assets/monk.jpg';
import guildEmblem from '@/assets/BO-logo.png';

const LoreSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Diagonal Background */}
      <div className="diagonal-section absolute inset-0 bg-gradient-shadow z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="scroll-fade-in">
              <h2 className="fantasy-title text-5xl md:text-5xl font-blackorder text-primary mb-6">
                Ancient Order
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mb-8"></div>
            </div>

            <div className="scroll-fade-in space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the depths of forgotten realms, where shadows dance with golden light, 
                the Order stands as a beacon of power and wisdom. We are the guardians 
                of ancient secrets, wielders of mystical arts.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our order was forged in the crucible of eternal conflict, where heroes rise 
                from the ashes of defeat and legends are born in moments of greatest peril.
              </p>

             <div className="group bg-card/50 p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] ">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="fantasy-title text-2xl font-blackorder text-accent">
                    The Fallen Prophecy
                  </h3>
                  <img
                    src={guildEmblem}
                    alt="Guild Logo"
                    className="w-8 h-8 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#ff0022]"
                  />
                </div>
                <p className="text-muted-foreground italic">
                  "When darkness swallows the last ray of hope, the chosen shall rise from
                  shadow's embrace, bearing golden flame to illuminate the path of destiny."
                </p>
              </div>


            </div>
          </div>
         
          {/* Right Visual without mask */}
          <div className="scroll-fade-in relative w-full max-w-2xl mx-auto ">
            <div className="relative z-10">
              <img
                src={fallingWarrior}
                alt="Falling Warrior"
                className="w-full h-auto object-contain rounded-none drop-shadow-[0_0_60px_rgba(255,0,0,0.4)]"
              />
            </div>

            {/* Optional pop-out image effect */}
            {/* <div className="popout-image-wrapper">
              <img
                src={fallingWarrior}
                alt="Falling Warrior Main"
                className="max-h-[400px]"
              />
            </div> */}

            {/* Floating lights */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-8 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-16 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Quote box */}
            <div className="absolute -bottom-8 -left-8 bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-border max-w-xs z-20 hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <p className="text-sm text-muted-foreground italic">
                "In falling, we learn to rise. In darkness, we forge our light."
              </p>
              <div className="text-xs text-primary mt-2 font-semibold">
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

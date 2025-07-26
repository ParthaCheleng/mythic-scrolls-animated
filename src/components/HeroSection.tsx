import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroCharacter from '@/assets/hero-character.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url(${heroCharacter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Ancient Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4">
        <div className="mb-8 scroll-fade-in">
          <h1 className="fantasy-title text-7xl md:text-9xl font-bold text-primary mb-4">
            MYTHIC
          </h1>
          <h2 className="fantasy-title text-4xl md:text-6xl font-semibold text-foreground mb-8">
            GUILD
          </h2>
        </div>
        
        <div className="scroll-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Where ancient legends awaken and epic destinies are forged in the fires of eternal conquest.
          </p>
        </div>

        <div className="scroll-fade-in space-x-4" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-gold text-primary-foreground hover:scale-105 transition-all duration-300 shadow-mystical font-semibold px-8 py-4"
          >
            Join the Guild
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4"
          >
            Explore Lore
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
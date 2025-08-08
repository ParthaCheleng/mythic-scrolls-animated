import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import scrollBg from '@/assets/scroll-bg-sig.png';
import waxSeal from '@/assets/red-seal.png';
import shai from '@/assets/shai.png';
import berzerker from '@/assets/zerker.png';
import nova from '@/assets/nova.png';
import corsair from '@/assets/corsair.png';
import mage from '@/assets/mage.png';
import valk from '@/assets/valk.png';

const RecruitmentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 840px), (max-height: 740px)');
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
      },
      { threshold: 0.3 }
    );
    const els = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // optional (kept from your original)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Application Received',
      description: 'Your quest to join the Mythic Guild begins now. We will contact you soon.',
    });
  };

  // Seal sizing/position — % based so it scales with the scroll image
  const sealStyle: React.CSSProperties = {
    // visually sits a bit above the bottom center of the parchment
    top: compact ? '61%' : '62%',     // tweak for mobile vs desktop
    left: '49%',
    transform: 'translate(-50%, -50%)',
    width: compact ? '18%' : '14%',   // scales with scroll width
    filter:
      'brightness(2) contrast(1) sepia(0.2) saturate(1.5) drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
    mixBlendMode: 'multiply',
    opacity: 0.95,
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Top / Bottom ambient fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/40 to-transparent z-40" />
      <div className="absolute inset-0 bg-gradient-shadow z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center mt-4 md:mt-10">
          {/* LEFT: Copy */}
          <div className="space-y-6 md:space-y-8">
            <div className="scroll-fade-in">
              <h2 className="fantasy-title text-4xl md:text-5xl font-blackorder text-primary mb-4 md:mb-6 text-center md:text-left">
                Join Our Ranks
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-gold mb-6 md:mb-8 mx-auto md:mx-0"></div>
            </div>

            <div className="scroll-fade-in space-y-6 text-center md:text-left max-w-3xl mx-auto md:mx-0">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                BlackOrder is always seeking exceptional individuals who share our vision of glory and
                our commitment to excellence. We value skill, dedication, and the commitment needed to improve.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/30 p-5 md:p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <h3 className="text-accent font-semibold mb-2">Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Active player & 780GS</li>
                    <li>• Team-oriented mindset</li>
                    <li>• Discord communication</li>
                    <li>• Respect for guild values & community</li>
                  </ul>
                </div>

                <div className="bg-card/30 p-5 md:p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <h3 className="text-accent font-semibold mb-2">Benefits</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Weekly GBR</li>
                    <li>• Gear guidance</li>
                    <li>• Node war every day</li>
                    <li>• Siege every week</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-5 md:p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <h3 className="text-primary font-semibold mb-2">Current Focus</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We're particularly interested in players that main the following classes: Shai, Berserker, Nova,
                  Valk, Corsair, Witchard. <br />If you qualify, click the Discord seal to join our Discord.
                </p>
              </div>

              {/* class icons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-items-center mt-2 sm:mt-4 mx-auto">
                {[shai, berzerker, nova, valk, corsair, mage].map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="Class icon"
                    className="h-10 sm:h-12 object-contain faction-icon"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Scroll with perfectly pinned wax seal */}
          <div className="scroll-fade-in flex justify-center items-start">
            <div className="relative w-full max-w-[750px]">
              {/* soft drop shadow */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  filter: 'blur(28px)',
                  background: 'rgba(0,0,0,0.45)',
                  borderRadius: '18%',
                  width: '72%',
                  height: '86%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Scroll image scales with container */}
              <img
                src={scrollBg}
                alt="Guild Scroll"
                className="w-full h-auto relative z-10 select-none pointer-events-none"
                draggable={false}
              />

              {/* Wax seal anchored by % so it scales with the scroll */}
              <a
                href="https://discord.gg/db5yWsSSN5"
                target="_blank"
                rel="noopener noreferrer"
                className="wax-seal-link group absolute z-20"
                style={sealStyle}
                aria-label="Join our Discord"
              >
                <img
                  src={waxSeal}
                  alt=""
                  className="w-full transition-transform duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.9)]"
                  draggable={false}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;

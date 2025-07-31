import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import scrollBg from '@/assets/scroll-text.png';
import waxSeal from '@/assets/red-seal.png';
import quill from '@/assets/Quill.png';
import shai from '@/assets/shai.png';
import berzerker from '@/assets/zerker.png';
import nova from '@/assets/nova.png';
import corsair from '@/assets/corsair.png';
import mage from '@/assets/mage.png';
import valk from '@/assets/valk.png';

const RecruitmentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    gameId: '',
    class: '',
    experience: '',
    motivation: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Application Received',
      description: 'Your quest to join the Mythic Guild begins now. We will contact you soon.',
    });
    setFormData({ name: '', gameId: '', class: '', experience: '', motivation: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Top and Bottom Shadows */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-40" />
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-shadow z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center mt-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="scroll-fade-in">
              <h2 className="fantasy-title text-5xl md:text-5xl font-blackorder text-primary mb-6">
                Join Our Ranks
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mb-8"></div>
            </div>

            <div className="scroll-fade-in space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                BlackOrder is always seeking exceptional individuals who share our
                vision of glory and our commitment to excellence. We value skill, dedication,
                and the commitment needed to improve.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] ">
                  <h3 className="text-accent font-semibold mb-2">Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Active player</li>
                    <li>• Team-oriented mindset</li>
                    <li>• Discord communication</li>
                    <li>• Respect for guild values & community</li>
                  </ul>
                </div>

                <div className="bg-card/30 p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] ">
                  <h3 className="text-accent font-semibold mb-2">Benefits</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Weekly GBR</li>
                    <li>• Gear guidance</li>
                    <li>• Node war every week</li>
                    <li>• Siege every week</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-mystical transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] ">
                <h3 className="text-primary font-semibold mb-2">Current Focus</h3>
                <p className="text-muted-foreground text-sm">
                  We're particularly interested in players that main the following classes : Shai, Berserker, Nova, Valk, Corsair, Witchard.
                  <br />If you qualify, click the Discord seal to join our discord.
                </p>
              </div>

                <div className="flex justify-between items-center mt-4 w-full max-w-[700px] mx-auto px-4">
                  <img 
                    src={shai} 
                    alt="Focus Icon 1" 
                    className="h-14 max-w-[70px] object-contain flex-1 faction-icon" 
                  />
                  <img 
                    src={berzerker} 
                    alt="Focus Icon 2" 
                    className="h-14 max-w-[70px] object-contain flex-1 faction-icon" 
                  />
                  <img 
                    src={nova} 
                    alt="Focus Icon 3" 
                    className="h-14 max-w-[70px] object-contain flex-1 faction-icon" 
                  />
                  <img 
                    src={valk} 
                    alt="Focus Icon 4" 
                    className="h-14 max-w-[70px] object-contain flex-1 faction-icon" 
                  />
                  <img 
                    src={corsair} 
                    alt="Focus Icon 5" 
                    className="h-14 max-w-[70px] object-contain flex-1 faction-icon" 
                  />
                  <img 
                    src={mage} 
                    alt="Focus Icon 6" 
                    className="h-14 max-w-[70px] object-contain flex-1 faction-icon" 
                  />
                </div>


            </div>
          </div>

          {/* Right Scroll - Shadow behind scroll */}
            <div className="scroll-fade-in flex justify-center items-start">
              <div className="relative w-fit">
                {/* Soft, even spread shadow */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    filter: 'blur(30px)',
                    background: 'rgba(0,0,0,0.45)',
                    borderRadius: '15%',
                    width: '70%',
                    height: '85%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none'
                  }}
                ></div>
                <img
                  src={scrollBg}
                  alt="Guild Scroll"
                  className="w-[750px] h-auto relative z-10"
                />

               {/* Wax Seal */}
               <a
                  href="https://discord.gg/kx24Rtu8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wax-seal-link group"
                >
                  <img
                    src={waxSeal}
                    alt="Wax Seal"
                    className="absolute top-[135px] left-1/2 -translate-x-1/2 w-[110px] z-20 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                    style={{
                      filter:
                        'brightness(1.6) contrast(1.5) sepia(0.6) saturate(1.6) drop-shadow(0 2px 6px rgba(0, 0, 0, 1))',
                      mixBlendMode: 'multiply',
                      opacity: 0.95,
                    }}
                  />

                </a>

               

                
                {/* Quill */}
                <img
                  src={quill}
                  alt="Quill Pen"
                  className="absolute bottom-[48px] right-[-90px] w-[440px] rotate-[20deg] z-20"
                  style={{
                    filter: 'brightness(1) contrast(1.1) grayscale(0.5) sepia(0.5) drop-shadow(0 2px 8px rgba(255, 0, 64, 0.4))',
                    mixBlendMode: 'multiply',
                    opacity: 0.92,
                  }}
                />
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
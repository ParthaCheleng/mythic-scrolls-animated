import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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
      title: "Application Received",
      description: "Your quest to join the Mythic Guild begins now. We will contact you soon.",
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-shadow z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="scroll-fade-in">
              <h2 className="fantasy-title text-5xl md:text-6xl font-bold text-primary mb-6">
                Join Our Ranks
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mb-8"></div>
            </div>

            <div className="scroll-fade-in space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Mythic Guild is always seeking exceptional individuals who share our 
                vision of glory and our commitment to excellence. We value skill, dedication, 
                and the courage to face any challenge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/30 p-6 rounded-lg border border-border/50">
                  <h3 className="text-accent font-semibold mb-2">Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Active player status</li>
                    <li>• Team-oriented mindset</li>
                    <li>• Discord communication</li>
                    <li>• Respect for guild values</li>
                  </ul>
                </div>

                <div className="bg-card/30 p-6 rounded-lg border border-border/50">
                  <h3 className="text-accent font-semibold mb-2">Benefits</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Epic guild raids</li>
                    <li>• Mentorship programs</li>
                    <li>• Exclusive events</li>
                    <li>• Legendary rewards</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-primary font-semibold mb-2">Current Focus</h3>
                <p className="text-muted-foreground text-sm">
                  We're particularly interested in skilled healers and tank specialists 
                  for our upcoming legendary raid campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="scroll-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="fantasy-title text-3xl text-primary text-center">
                  Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Character Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your character name"
                      className="bg-input/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gameId" className="text-foreground">Game ID</Label>
                    <Input
                      id="gameId"
                      name="gameId"
                      value={formData.gameId}
                      onChange={handleInputChange}
                      placeholder="Your game identifier"
                      className="bg-input/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class" className="text-foreground">Class/Role</Label>
                    <Input
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      placeholder="Warrior, Mage, Healer, etc."
                      className="bg-input/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground">Experience Level</Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Years playing, notable achievements"
                      className="bg-input/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-foreground">Why Join the Guild?</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Tell us about your goals and what drives you..."
                      className="bg-input/50 border-border/50 focus:border-primary min-h-[100px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-gold text-primary-foreground hover:scale-105 transition-all duration-300 shadow-mystical font-semibold py-3"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
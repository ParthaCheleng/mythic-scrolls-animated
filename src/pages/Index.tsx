import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import LoreSection from '@/components/LoreSection';
import CharacterSection from '@/components/CharacterSection';
import RecruitmentSection from '@/components/RecruitmentSection';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const elements = document.querySelectorAll('.scroll-fade-in');
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

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <LoreSection />
      <CharacterSection />
      <RecruitmentSection />
    </div>
  );
};

export default Index;

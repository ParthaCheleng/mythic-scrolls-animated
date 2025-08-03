import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import LoreSection from '@/components/LoreSection';
import CharacterSection from '@/components/CharacterSection';
import RecruitmentSection from '@/components/RecruitmentSection';
import BlackOrderAlliance from '@/components/BlackOrderAlliance';
import PhotoGallery from '@/components/PhotoGallery';
import LuxuryHeader, { NameCard } from '@/components/LuxuryHeader';




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
      <PhotoGallery />
      <BlackOrderAlliance />
      <RecruitmentSection />
      <LuxuryHeader />
    </div>
  );
};

export default Index;

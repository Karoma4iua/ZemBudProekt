import React, { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CompanyIntro from '../components/home/CompanyIntro';
import ServiceHighlights from '../components/home/ServiceHighlights';
import FeaturedProjects from '../components/home/FeaturedProjects';
import LatestNews from '../components/home/LatestNews';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ЗемБудПроект - Проектуємо та будуємо ваші мрії';
  }, []);

  return (
    <>
      <HeroBanner />
      <CompanyIntro />
      <ServiceHighlights />
      <FeaturedProjects />
      <LatestNews />
    </>
  );
};

export default HomePage;
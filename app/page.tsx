'use client';

import Link from 'next/link';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrizesSection from './components/PrizesSection';
import RulesSection from './components/RulesSection';
import GallerySection from './components/GallerySection';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <HeroSection />
      <AboutSection />
      <PrizesSection />
      <GallerySection />
      <RulesSection />
      <CTASection />
    </div>
  );
}
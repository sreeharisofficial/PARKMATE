import React from 'react';
import SearchForm from './SearchForm';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[85vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-parking-charcoal">
            Parking Made Easy,<br />
            <span className="text-primary">Wherever You Go</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Find and reserve parking spots in advance, save time and avoid stress.
            The easiest way to secure parking anywhere in the city.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto animate-slide-up delay-200">
          <div className="glass-card p-6">
            <SearchForm />
          </div>
        </div>
        
        <button 
          onClick={scrollToFeatures}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Discover More</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
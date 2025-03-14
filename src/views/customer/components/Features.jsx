
import React from 'react';
import { Shield, MapPin, Tag } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Real-Time Availability',
    description: 'See available parking spots in real-time with our live updates.',
    color: 'text-parking-blue'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Payments',
    description: '100% secure transactions with encrypted payment processing.',
    color: 'text-parking-green'
  },
  {
    icon: <Tag className="h-6 w-6" />,
    title: 'Best Price Guarantee',
    description: "We'll match any better price you find for the same parking spot.",
    color: 'text-parking-teal'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose ParkMate?</h2>
        
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className={`feature-icon-container mx-auto ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
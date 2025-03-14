import React from 'react';
import { Search, CreditCard, Car } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Search",
    description: "Search for available parking spots near you based on your location and timing needs."
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Reserve & Pay",
    description: "Reserve your spot and make a secure payment through our encrypted payment system."
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: "Park & Go",
    description: "Simply arrive at your reserved spot and enjoy a hassle-free parking experience."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">How ParkMate Works</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 left-[calc(50%-0.5px)] h-[calc(100%-60px)] w-[1px] bg-gray-200 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="glass-card p-6 text-center relative h-full flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="gradient-btn">
            Try ParkMate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PlantGrowth from "./PlantGrowth";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/550278b1-cb95-45ad-a927-b948c8eab8fc.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-green-300/20 blur-3xl animate-pulse"></div>
      
      {/* Floating nature elements - more particles for richer effect */}
      <div className="absolute top-[15%] left-[20%] w-4 h-4 rounded-full bg-yellow-300/50 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-[25%] right-[30%] w-3 h-3 rounded-full bg-green-300/50 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[35%] left-[40%] w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-[45%] right-[15%] w-3 h-3 rounded-full bg-yellow-200/40 animate-bounce" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-[40%] left-[25%] w-2 h-2 rounded-full bg-green-200/40 animate-bounce" style={{ animationDuration: '4.2s' }}></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 md:space-y-8">
            <div className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 inline-flex items-center space-x-2">
                <div className="h-5 w-5 rounded-full bg-yellow-300 flex items-center justify-center animate-pulse">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span className="text-sm font-medium">CHECK. NURTURE. GROW. FLOURISH.</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From seed to<br />harvest with<br />
              <span className="text-yellow-300">precision</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Discover the easiest and smartest way to monitor your soil health throughout the entire growth cycle. Track moisture, pH, nutrients, and temperature in real-time to nurture your plants from roots to full bloom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-yellow-400 text-green-800 hover:bg-yellow-300 rounded-full h-12 px-8 text-base transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Start Growing
              </Button>
              <Button variant="outline" className="border-white/30 text-green-800 hover:bg-white/10 rounded-full h-12 px-8 text-base transition-all">
                <span>Use Now</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl">
              <PlantGrowth />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

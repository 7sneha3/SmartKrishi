
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-soilsense-100 dark:bg-soilsense-800/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-soilsense-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-soilsense-200 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-soilsense-700/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-soilsense-200 dark:border-soilsense-600/50 animate-fade-in-up">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-soilsense-800 dark:text-white mb-6">
              Ready to Improve Your Crop Yield?
            </h2>
            <p className="text-lg text-soilsense-600 dark:text-soilsense-200 mb-8 max-w-2xl mx-auto">
              Boost your crop yields with our solution.            
            </p>
            <Button className="bg-soilsense-600 hover:bg-soilsense-700 text-white rounded-full h-12 px-8 text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

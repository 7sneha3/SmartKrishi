
import React from "react";
import { Leaf, BarChart3, BrainCircuit, Droplet, Map } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  return (
    <div 
      className="bg-white dark:bg-soilsense-800/40 rounded-xl p-6 shadow-sm border border-soilsense-100 dark:border-soilsense-700/50 card-hover-effect animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-12 w-12 rounded-full feature-icon-bg flex items-center justify-center mb-5 text-soilsense-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-soilsense-800 dark:text-white mb-3">{title}</h3>
      <p className="text-soilsense-600 dark:text-soilsense-200">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-soilsense-50 dark:bg-soilsense-900" id="product">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-soilsense-800 dark:text-white mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-soilsense-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Leaf size={24} />} 
            title="Real-time Soil Monitoring" 
            description="Track soil health metrics in real-time with advanced IoT sensors."
            delay={0.1}
          />
          <FeatureCard 
            icon={<BarChart3 size={24} />} 
            title="Data Analytics" 
            description="Get insights and predictions based on historical soil data."
            delay={0.2}
          />
          <FeatureCard 
            icon={<BrainCircuit size={24} />} 
            title="AI Recommendations" 
            description="Receive AI-driven suggestions for optimal crop yield."
            delay={0.3}
          />
          <FeatureCard 
            icon={<Droplet size={24} />} 
            title="Moisture Management" 
            description="Monitor and manage soil moisture levels for optimal plant growth."
            delay={0.4}
          />
          <FeatureCard 
            icon={<Map size={24} />} 
            title="Field Mapping" 
            description="Map your fields and track soil health across different areas."
            delay={0.5}
          />
          <FeatureCard 
            icon={<Leaf size={24} />} 
            title="Health Monitoring" 
            description="Monitor plant health indicators and detect issues early."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

import React, { useEffect, useRef, useState } from "react";

const PlantGrowth = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [stage, setStage] = useState(0); // 0: seedling, 1: young plant, 2: mature plant
  
  useEffect(() => {
    // Progress through growth stages
    const stageInterval = setInterval(() => {
      setStage(prevStage => {
        if (prevStage < 2) return prevStage + 1;
        return 0; // Reset to start the animation again
      });
    }, 5000); // Change stage every 5 seconds
    
    return () => clearInterval(stageInterval);
  }, []);
  
  // Animation for each element group when they appear
  useEffect(() => {
    // Reset any ongoing animations when stage changes
    const soilElements = svgRef.current?.querySelectorAll('.soil-element');
    const sunElements = svgRef.current?.querySelectorAll('.sun-element');
    const seedlingElements = svgRef.current?.querySelectorAll('.seedling-element');
    const youngPlantElements = svgRef.current?.querySelectorAll('.young-plant-element');
    const maturePlantElements = svgRef.current?.querySelectorAll('.mature-plant-element');
    
    // Hide all elements initially
    [soilElements, sunElements, seedlingElements, youngPlantElements, maturePlantElements].forEach(elements => {
      if (elements) {
        elements.forEach((element) => {
          (element as SVGElement).style.opacity = '0';
        });
      }
    });
    
    // Always show sun and soil
    if (sunElements) {
      sunElements.forEach((element) => {
        (element as SVGElement).style.transition = 'opacity 1s ease-out';
        (element as SVGElement).style.opacity = '1';
      });
    }
    
    if (soilElements) {
      soilElements.forEach((element) => {
        (element as SVGElement).style.transition = 'opacity 1s ease-out';
        (element as SVGElement).style.opacity = '1';
      });
    }
    
    // Show elements based on current stage
    if (stage === 0 && seedlingElements) {
      seedlingElements.forEach((element) => {
        (element as SVGElement).style.transition = 'opacity 1s ease-out, transform 1.5s ease-out';
        (element as SVGElement).style.transformOrigin = 'bottom center';
        (element as SVGElement).style.transform = 'scale(1)';
        (element as SVGElement).style.opacity = '1';
      });
    }
    
    if (stage === 1 && youngPlantElements) {
      youngPlantElements.forEach((element) => {
        (element as SVGElement).style.transition = 'opacity 1s ease-out, transform 1.5s ease-out';
        (element as SVGElement).style.transformOrigin = 'bottom center';
        (element as SVGElement).style.transform = 'scale(1)';
        (element as SVGElement).style.opacity = '1';
      });
    }
    
    if (stage === 2 && maturePlantElements) {
      maturePlantElements.forEach((element) => {
        (element as SVGElement).style.transition = 'opacity 1s ease-out, transform 1.5s ease-out';
        (element as SVGElement).style.transformOrigin = 'bottom center';
        (element as SVGElement).style.transform = 'scale(1)';
        (element as SVGElement).style.opacity = '1';
      });
    }
    
    // Show data indicators after the plant appears
    const dataElements = document.querySelectorAll('.data-indicator');
    const delay = 1000; // Show data indicators 1 second after plant appears
    
    dataElements.forEach((element, index) => {
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = stage === 0 ? 'translateX(-20px)' : 'translateX(20px)';
      
      setTimeout(() => {
        (element as HTMLElement).style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateX(0)';
      }, delay + (index * 300));
    });
  }, [stage]);

  return (
    <div className="relative h-[500px] w-[350px] md:h-[550px] md:w-[450px] flex items-center justify-center">
      <svg 
        ref={svgRef}
        viewBox="0 0 400 500" 
        className="w-full h-full drop-shadow-xl"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Enhanced gradients */}
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#62D346" />
            <stop offset="100%" stopColor="#A2E882" />
          </linearGradient>
          <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3cb043" />
            <stop offset="100%" stopColor="#5ED64E" />
          </linearGradient>
          <linearGradient id="soilGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#A0522D" />
          </linearGradient>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFFF00" />
            <stop offset="70%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </radialGradient>
          <radialGradient id="sunGlowGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FFFF00" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFF00" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Sun in the background */}
        <circle cx="100" cy="120" r="40" fill="url(#sunGradient)" className="sun-element animate-pulse" />
        <circle cx="100" cy="120" r="70" fill="url(#sunGlowGradient)" className="sun-element" />
        
        {/* Sun rays */}
        {[...Array(12)].map((_, i) => (
          <line 
            key={i}
            x1="100" 
            y1="120" 
            x2={100 + Math.cos(i * (Math.PI/6)) * 90} 
            y2={120 + Math.sin(i * (Math.PI/6)) * 90} 
            stroke="#FFD700" 
            strokeWidth="2"
            strokeDasharray="1 8"
            className="sun-element"
          />
        ))}
        
        {/* Soil layer */}
        <path 
          d="M50,400 Q125,380 200,400 Q275,420 350,400 L350,450 Q275,470 200,450 Q125,430 50,450 Z" 
          fill="url(#soilGradient)" 
          className="soil-element"
        />
        
        {/* Stage 1: Seedling/Sprout */}
        <g style={{ opacity: 0, transform: 'scale(0)' }} className="seedling-element">
          {/* Curved stem */}
          <path 
            d="M200,400 C190,380 200,350 190,340" 
            stroke="url(#stemGradient)" 
            strokeWidth="6" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Small leaf */}
          <path
            d="M190,340 C170,335 160,325 170,315 C185,310 195,320 190,340Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          {/* Second small stem */}
          <path 
            d="M200,400 C210,370 205,350 215,345" 
            stroke="url(#stemGradient)" 
            strokeWidth="5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Small leaf on second stem */}
          <path
            d="M215,345 C225,340 240,345 235,355 C225,365 215,355 215,345Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
        </g>
        
        {/* Stage 2: Young plant */}
        <g style={{ opacity: 0, transform: 'scale(0)' }} className="young-plant-element">
          {/* Main stem */}
          <path 
            d="M200,400 C205,350 195,300 200,250" 
            stroke="url(#stemGradient)" 
            strokeWidth="7" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Leaves */}
          <path
            d="M200,350 C220,340 240,345 235,325 C220,310 195,325 200,350Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M200,300 C180,290 160,295 165,275 C180,260 205,275 200,300Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M200,270 C220,260 240,265 235,245 C220,230 195,245 200,270Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          {/* Small leaves at top */}
          <path
            d="M200,250 C210,245 220,248 215,235 C205,225 195,235 200,250Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
        </g>
        
        {/* Stage 3: Mature plant */}
        <g style={{ opacity: 0, transform: 'scale(0)' }} className="mature-plant-element">
          {/* Main stem */}
          <path 
            d="M200,400 C205,330 195,260 200,180" 
            stroke="url(#stemGradient)" 
            strokeWidth="8" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* First branch */}
          <path 
            d="M200,350 C230,330 260,325 290,310" 
            stroke="url(#stemGradient)" 
            strokeWidth="6" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Leaves on first branch */}
          <path
            d="M230,330 C240,320 255,325 250,310 C235,300 225,315 230,330Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M260,320 C270,310 285,315 280,300 C265,290 255,305 260,320Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M290,310 C300,300 315,305 310,290 C295,280 285,295 290,310Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          {/* Second branch */}
          <path 
            d="M200,300 C170,280 140,275 110,260" 
            stroke="url(#stemGradient)" 
            strokeWidth="6" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Leaves on second branch */}
          <path
            d="M170,280 C160,270 145,275 150,260 C165,250 175,265 170,280Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M140,275 C130,265 115,270 120,255 C135,245 145,260 140,275Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M110,260 C100,250 85,255 90,240 C105,230 115,245 110,260Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          {/* Third branch */}
          <path 
            d="M200,250 C220,230 240,215 260,200" 
            stroke="url(#stemGradient)" 
            strokeWidth="5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Leaves on third branch */}
          <path
            d="M220,230 C230,220 245,225 240,210 C225,200 215,215 220,230Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M240,215 C250,205 265,210 260,195 C245,185 235,200 240,215Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M260,200 C270,190 285,195 280,180 C265,170 255,185 260,200Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          {/* Fourth branch */}
          <path 
            d="M200,220 C180,200 160,185 140,170" 
            stroke="url(#stemGradient)" 
            strokeWidth="5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Leaves on fourth branch */}
          <path
            d="M180,200 C170,190 155,195 160,180 C175,170 185,185 180,200Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M160,185 C150,175 135,180 140,165 C155,155 165,170 160,185Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M140,170 C130,160 115,165 120,150 C135,140 145,155 140,170Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          {/* Top leaves */}
          <path
            d="M200,180 C210,170 225,175 220,160 C205,150 195,165 200,180Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
          
          <path
            d="M200,180 C190,170 175,175 180,160 C195,150 205,165 200,180Z"
            fill="url(#leafGradient)"
            stroke="#3cb043"
            strokeWidth="1"
          />
        </g>
      </svg>
      
      {/* Data indicators */}
      <div className="absolute top-1/4 right-0 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-l-lg shadow-lg border-l-4 border-green-500 transform translate-x-0 opacity-0 transition-all duration-500 data-indicator">
        <div className="text-xs uppercase tracking-wider text-green-700 font-bold">Moisture</div>
        <div className="text-lg font-semibold text-green-800 flex items-center">
          <span className="mr-1">{stage === 0 ? "55%" : stage === 1 ? "68%" : "72%"}</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-0 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-r-lg shadow-lg border-r-4 border-green-500 transform -translate-x-0 opacity-0 transition-all duration-500 data-indicator">
        <div className="text-xs uppercase tracking-wider text-green-700 font-bold">Nutrients</div>
        <div className="text-lg font-semibold text-green-800 flex items-center">
          <span className="mr-1">{stage === 0 ? "40%" : stage === 1 ? "55%" : "65%"}</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-0 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-l-lg shadow-lg border-l-4 border-green-500 transform translate-x-0 opacity-0 transition-all duration-500 data-indicator">
        <div className="text-xs uppercase tracking-wider text-green-700 font-bold">pH Level</div>
        <div className="text-lg font-semibold text-green-800 flex items-center">
          <span className="mr-1">{stage === 0 ? "6.2" : stage === 1 ? "6.4" : "6.5"}</span>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Growth stage indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg border border-green-300">
        <div className="text-sm font-semibold text-green-800">
          {stage === 0 ? "Seedling" : stage === 1 ? "Young Plant" : "Mature Plant"}
        </div>
      </div>
    </div>
  );
};

export default PlantGrowth;

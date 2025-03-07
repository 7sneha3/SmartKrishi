
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-soilsense-900/90" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-soilsense-600 rounded-md flex items-center justify-center">
              <span className="text-white font-semibold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-soilsense-800 dark:text-white">
              SmartKrishi
            </span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            
            <a 
              href="#dashboard" 
              className="text-black hover:text-green-900 font-medium transition-colors dark:text-black dark:hover:text-green-900"
              >
              Dashboard  
            </a>
            <a 
              href="#about" 
              className="text-black hover:text-green-900 font-medium transition-colors dark:text-black dark:hover:text-green-900"
              >
              About  
            </a>
            <a 
              href="#product" 
              className="text-black hover:text-green-900 font-medium transition-colors dark:text-black dark:hover:text-green-900"
              >
              Product
            </a>
            <a 
              href="#smartbot" 
              className="text-black hover:text-green-900 font-medium transition-colors dark:text-black dark:hover:text-green-900"
              >
              SmartBot  
            </a>
            <a 
              href="#pricing" 
              className="text-black hover:text-green-900 font-medium transition-colors dark:text-black dark:hover:text-green-900"
              >
              Pricing
            </a>
          </nav>

          <Button className="hidden md:flex bg-soilsense-600 hover:bg-soilsense-700 text-white rounded-full px-6 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
            Sign Up
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-soilsense-700 dark:text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-soilsense-900 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#dashboard" 
              className="text-soilsense-900 hover:text-soilsense-900 font-medium py-2 transition-colors dark:text-soilsense-900 dark:hover:text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a 
              href="#about" 
              className="text-soilsense-700 hover:text-soilsense-500 font-medium py-2 transition-colors dark:text-soilsense-100 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#product" 
              className="text-soilsense-700 hover:text-soilsense-500 font-medium py-2 transition-colors dark:text-soilsense-100 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>
            <a 
              href="#smartbot" 
              className="text-soilsense-700 hover:text-soilsense-500 font-medium py-2 transition-colors dark:text-soilsense-100 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              SmartBot
            </a>
            <a 
              href="#pricing" 
              className="text-soilsense-700 hover:text-soilsense-500 font-medium py-2 transition-colors dark:text-soilsense-100 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="bg-soilsense-600 hover:bg-soilsense-700 text-white rounded-full transition-all duration-300 w-full">
              Sign Up
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

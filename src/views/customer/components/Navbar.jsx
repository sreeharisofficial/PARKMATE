import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Menu, X, MapPin, Info, LogIn } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MapPin className="text-primary mr-2 h-6 w-6" />
              <span className="text-xl font-display font-bold text-parking-charcoal">ParkMate</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="navbar-link flex items-center">
              <Info className="mr-1 h-4 w-4" />
              <span>About</span>
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link to="/login" className="flex items-center">
                <LogIn className="mr-1 h-4 w-4" />
                <span>Login or Sign Up</span>
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-50 rounded-md">
              <Info className="inline mr-2 h-4 w-4" />
              About
            </Link>
            <Link to="/login" className="block py-2 px-4 text-sm mt-2 bg-primary text-white rounded-md">
              <LogIn className="inline mr-2 h-4 w-4" />
              Login or Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
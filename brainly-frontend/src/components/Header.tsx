import React, { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { navItems } from "../data/data";
import { useNavigate } from "react-router-dom";


const Header: React.FC = () => {
    const navigate= useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-indigo-500">
              Second Brain
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-indigo-500 hover:text-indigo-600 transition-colors"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </button>
            <button
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all transform hover:scale-105"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-500 hover:bg-indigo-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-indigo-100 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-indigo-500 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-indigo-100 space-y-3">
                <button
                  onClick={closeMenu}
                  className="block w-full text-left text-indigo-500 hover:text-indigo-600 transition-colors py-2"
                >
                  Sign In
                </button>
                <button
                  onClick={closeMenu}
                  className="block w-full bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-all text-center"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

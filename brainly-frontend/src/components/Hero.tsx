import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>Your digital brain for the web</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Save Links.
            <br />
            <span className="text-indigo-500">Build Brains.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
            Transform your scattered bookmarks into organized, shareable
            collections. Never lose a great link again with Brains - your
            personal knowledge repository.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-600 transition-all transform hover:scale-105 flex items-center justify-center min-w-0">
              <span className="truncate">Start Building Your Brain</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
            </button>
            <button className="w-full sm:w-auto border-2 border-indigo-500 text-indigo-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { steps } from "../data/data";

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Three simple steps to organize your digital life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                {item.step}
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-indigo-200 -translate-y-0.5"
                  style={{ left: "50%", width: "calc(100% + 2rem)" }}
                />
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

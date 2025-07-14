import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-indigo-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
          Ready to Build Your Brain?
        </h2>
        <p className="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-10 px-4 sm:px-0">
          Join thousands of users who've transformed their link management with
          Brains
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <button className="w-full sm:w-auto bg-white text-indigo-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-indigo-500 transition-all">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React from "react";
import { testimonials } from "../data/data";

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Loved by Thousands
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Join the community of organized web explorers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-indigo-50 p-6 sm:p-8 rounded-2xl">
              {/* Star Rating */}
              <div className="text-indigo-500 mb-4 text-center sm:text-left">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl sm:text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base sm:text-lg mb-6 italic text-center sm:text-left">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-indigo-500 text-sm sm:text-base">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

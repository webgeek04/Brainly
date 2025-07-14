// import React from "react";
// import { features } from "../data/data";

// interface FeaturesProps {
//   activeFeature: number;
// }

// const Features: React.FC<FeaturesProps> = ({ activeFeature }) => {
//   return (
//     <section
//       id="features"
//       className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
//             Why Choose Brains?
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
//             Powerful features designed to make link management effortless and
//             collaborative
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
//                 activeFeature === index
//                   ? "bg-indigo-500 text-white shadow-2xl"
//                   : "bg-indigo-50 text-indigo-500 hover:bg-indigo-100"
//               }`}
//             >
//               <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left">
//                 {feature.title}
//               </h3>
//               <p
//                 className={`text-base sm:text-lg text-center md:text-left ${
//                   activeFeature === index ? "text-indigo-100" : "text-gray-600"
//                 }`}
//               >
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Mobile Feature Indicators */}
//         <div className="flex justify-center mt-8 md:hidden">
//           <div className="flex space-x-2">
//             {features.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   activeFeature === index ? "bg-indigo-500" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

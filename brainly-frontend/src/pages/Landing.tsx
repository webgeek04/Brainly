import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      <Header />
      <Hero isVisible={isVisible} />
      {/* <Features activeFeature={activeFeature} /> */}
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};


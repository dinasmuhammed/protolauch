import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Zap, Shield, MessageCircle } from 'lucide-react';
import TeamSection from '../components/TeamSection';

const Home = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919656778508', '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Launching Dreams into Reality
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 dark:text-gray-300 font-light">
          Premium Prototype and Development Solutions for Visionary Startups
        </p>
        <p className="text-base lg:text-lg mb-12 text-gray-600 dark:text-gray-400">
          Transform your vision into a market-ready product with ProtoLaunch's tailored solutions.
        </p>
        <button
          onClick={openWhatsApp}
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center shadow-lg"
        >
          Get a Free Consultation
          <MessageCircle className="ml-2 h-5 w-5" />
        </button>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Why Choose ProtoLaunch?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Rocket className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Rapid Prototyping</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Speedy and efficient processes to turn your ideas into products.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Zap className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Cutting-edge Tech</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Leverage the latest technologies for your startup's success.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">End-to-End Support</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">From ideation to launch, we're with you every step of the way.</p>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Ready to Launch Your Vision?</h2>
        <button
          onClick={openWhatsApp}
          className="bg-pink-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center shadow-lg"
        >
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
};

export default Home;

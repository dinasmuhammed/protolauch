import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Zap, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Launching Dreams into Reality
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Premium Prototype and Development Solutions for Visionary Startups
        </p>
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-200">
          Transform your vision into a market-ready product with our tailored solutions.
        </p>
        <Link to="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center">
          Get a Free Consultation
          <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose ProLaunch?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Rocket className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
            <p className="text-gray-600 dark:text-gray-300">Speedy and efficient processes to turn your ideas into products.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Zap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cutting-edge Tech</h3>
            <p className="text-gray-600 dark:text-gray-300">Leverage the latest technologies for your startup's success.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
            <p className="text-gray-600 dark:text-gray-300">From ideation to launch, we're with you every step of the way.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Launch Your Vision?</h2>
        <Link to="/contact" className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center">
          Start Your Journey
          <ArrowRight className="ml-2" />
        </Link>
      </section>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Building Dreams into Reality</h1>
        <p className="text-xl mb-8">Prototype and Development Solutions for Visionary Startups</p>
        <p className="text-lg mb-8">From concept to functional prototypes, we help you bring your ideas to life with tailored solutions designed for startups. Let's transform your vision into a tangible, market-ready product.</p>
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get a Free Consultation
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="mb-6">We are your trusted partner for innovation. With a team of experienced developers, engineers, and designers, we help you take the leap from ideation to prototype creation. Our deep understanding of the startup ecosystem empowers us to deliver solutions that not only meet your goals but also accelerate your go-to-market strategy.</p>
        <ul className="list-disc list-inside mb-8">
          <li><strong>End-to-End Support</strong>: From ideation, development, and testing to launch, we're with you every step of the way.</li>
          <li><strong>Rapid Prototyping</strong>: Speedy and efficient prototyping processes to turn your ideas into products.</li>
          <li><strong>Cost-Efficient Solutions</strong>: Tailored plans for startups with budget-friendly solutions.</li>
        </ul>
        <Link to="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
          Start Your Journey with Us
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">1. Prototype Development</h3>
            <p>Turn your ideas into functional prototypes. We specialize in:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Physical Product Prototyping: Engineering, 3D modeling, and production.</li>
              <li>Software & App Prototypes: Interactive UX/UI prototypes, MVPs (Minimum Viable Products), and more.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">2. Product Design & Development</h3>
            <p>Create market-ready products that stand out. We offer:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Industrial Design: Ergonomics, user-centric design, and technical drawings.</li>
              <li>Software Development: Web and mobile app development, cloud integration, and custom software solutions.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">3. MVP Development for Startups</h3>
            <p>Get your MVP ready for investors or early users in no time. We provide fast, reliable, and scalable solutions that fit your startup's needs.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">4. Product Testing & Validation</h3>
            <p>We help validate your prototype or product idea by conducting rigorous testing for usability, functionality, and market fit.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore Our Full Range of Services
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Discovery & Ideation</strong>: We collaborate with you to understand your goals, requirements, and vision.</li>
          <li><strong>Design & Prototyping</strong>: Our expert designers and developers transform your ideas into mockups, wireframes, and initial prototypes.</li>
          <li><strong>Development</strong>: We build and refine your product using agile development methodologies to ensure flexibility and efficiency.</li>
          <li><strong>Testing & Launch</strong>: After thorough testing, we ensure your product is ready for launch, whether it's an MVP or a complete solution.</li>
          <li><strong>Iteration & Scaling</strong>: After launch, we'll support you in scaling your product as it gains traction and evolves with your users.</li>
        </ol>
        <div className="text-center mt-8">
          <Link to="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
            Let's Work Together!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
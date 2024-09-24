const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">End-to-End Product Development Solutions for Startups</h1>
      <p className="text-xl mb-12 text-center">From idea validation to product launch, we provide the expertise, tools, and support you need to succeed.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">1. Prototype Development</h2>
          <p className="mb-4">Get a functional prototype that brings your concept to life. Whether you're developing a hardware product, software, or a mobile app, we've got you covered.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Hardware Prototyping</li>
            <li>3D Printing & Modeling</li>
            <li>UX/UI Prototyping</li>
            <li>Mobile App Prototypes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Product Design</h2>
          <p className="mb-4">We design products with your users in mind, focusing on usability, functionality, and aesthetics.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Industrial Design</li>
            <li>Digital Product Design</li>
            <li>Branding and Packaging Design</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Minimum Viable Product (MVP)</h2>
          <p className="mb-4">Launch your MVP to gather feedback and validate your product idea before full-scale development.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile and Web MVPs</li>
            <li>Cloud Integration</li>
            <li>Product Scaling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Software & App Development</h2>
          <p className="mb-4">Build custom software solutions with scalable and user-friendly architectures.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile App Development</li>
            <li>Web Development</li>
            <li>Cloud Software Solutions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Testing & QA</h2>
          <p className="mb-4">We ensure your product works flawlessly by conducting in-depth testing and quality assurance.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>User Testing</li>
            <li>Functional Testing</li>
            <li>Market Fit Analysis</li>
          </ul>
        </section>
      </div>

      <div className="text-center mt-12">
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Let's Build Something Great Together
        </a>
      </div>
    </div>
  );
};

export default Services;
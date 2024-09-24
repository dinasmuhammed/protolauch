const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Passionate About Innovation</h1>
      <p className="text-xl mb-8 text-center">We are ProtoLaunch, a team of creators, engineers, and strategists committed to helping startups and entrepreneurs realize their visions through expert product development services.</p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p>Our mission at ProtoLaunch is to empower startups and innovators by providing affordable, cutting-edge prototype and development services. We thrive on creating solutions that push boundaries and shape the future.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p>To become the leading partner for startup prototype and development services, renowned for our commitment to quality, innovation, and client success.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Innovation</strong>: We push boundaries to create forward-thinking solutions.</li>
          <li><strong>Collaboration</strong>: We work closely with our clients as partners in innovation.</li>
          <li><strong>Agility</strong>: We adapt to the fast-paced nature of startups and pivot as needed.</li>
          <li><strong>Excellence</strong>: We strive for quality and excellence in everything we do.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600 mb-2">Co-founder & CEO</p>
            <p>A visionary leader with 15 years of experience in product development and startup incubation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-2">CTO</p>
            <p>A seasoned software architect with expertise in building scalable tech solutions for startups.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600 mb-2">Lead Designer</p>
            <p>An expert in UX/UI design with a knack for creating user-friendly digital experiences.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Why Work With ProtoLaunch?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Deep Expertise in Startups</strong>: We know the unique challenges startups face and are dedicated to helping you navigate them.</li>
          <li><strong>Speed to Market</strong>: We understand that time is critical for startups. Our processes are designed to get your product to market quickly.</li>
          <li><strong>Affordable Pricing</strong>: As a startup ourselves, we offer competitive pricing that doesn't compromise on quality.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

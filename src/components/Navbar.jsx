import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">StartupPrototype</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
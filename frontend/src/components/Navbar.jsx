import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-saffron">
          Ganpati Jyotish
        </h1>

        <div className="space-x-6 hidden md:block">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

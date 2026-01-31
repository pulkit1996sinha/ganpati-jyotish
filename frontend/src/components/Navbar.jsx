import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* TOP INFO BAR */}
      <div className="bg-yellow-100 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center gap-6">

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ganpati+Jyotish+Paramarsh+Kendra+Daliganj+Lucknow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deep hover:underline"
          >
            📍 View Location
          </a>

          <span className="text-gray-400">|</span>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="text-deep hover:underline"
          >
            📞 Contact Me
          </Link>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-deep text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
          <h1 className="text-xl font-bold text-saffron">
            Ganpati Jyotish
          </h1>
        </div>
      </nav>
    </>
  );
}

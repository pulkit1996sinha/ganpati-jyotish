export default function Navbar() {
  return (
    <>
      {/* LOCATION BAR */}
      <div className="bg-yellow-100 text-sm text-center py-2">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Ganpati+Jyotish+Paramarsh+Kendra+Daliganj+Lucknow"
          target="_blank"
          rel="noopener noreferrer"
          className="text-deep hover:underline"
        >
          📍 Daliganj, Lucknow — View Location
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="bg-deep text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-saffron">
            Ganpati Jyotish
          </h1>
        </div>
      </nav>
    </>
  );
}

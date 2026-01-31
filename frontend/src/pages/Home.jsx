import { Sparkles, Star, Sun } from "lucide-react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-deep leading-tight">
            Guidance Through <span className="text-saffron">Vedic Astrology</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            At Ganpati Jyotish Paramarsh Kendra, we help you find clarity in
            career, marriage, health, and life through authentic Jyotish
            knowledge.
          </p>

          i<div className="mt-8 flex flex-col sm:flex-row gap-4">
  <Link
    to="/contact"
    className="bg-saffron text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition text-center"
  >
    Book Consultation
  </Link>

  <Link
    to="/services"
    className="border border-saffron text-saffron px-6 py-3 rounded-lg text-center"
  >
    View Services
  </Link>
</div>


        </div>

        {/* RIGHT CARD */}
<div className="flex justify-center">
  <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-full max-w-md">

    {/* VIEW SERVICES — TOP */}
    <Link
      to="/services"
      className="
        inline-block
        mb-8
        px-6 py-3
        rounded-lg
        border-2 border-saffron
        text-saffron
        font-semibold
        hover:bg-saffron
        hover:text-white
        transition
      "
    >
      View Services
    </Link>

    {/* SUN + TRUST TEXT */}
    <Sun className="mx-auto text-saffron mb-4" size={48} />

    <p className="text-lg font-semibold text-deep mb-8">
      Trusted by families across Lucknow
    </p>

    {/* ICON ROW */}
    <div className="flex justify-center gap-10 text-gray-700 mb-10">
      <div className="flex flex-col items-center gap-1">
        <Star className="text-saffron" />
        <span>Accurate</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Sparkles className="text-saffron" />
        <span>Spiritual</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Sun className="text-saffron" />
        <span>Guidance</span>
      </div>
    </div>

    {/* BOOK CONSULTATION — BOTTOM */}
    <Link
      to="/contact"
      className="
        block
        w-full
        px-6 py-4
        rounded-xl
        bg-saffron
        text-white
        font-bold
        text-lg
        shadow-md
        hover:scale-105
        transition
      "
    >
      Book Consultation
    </Link>

  </div>
</div>


      </section>
    </div>
  );
}

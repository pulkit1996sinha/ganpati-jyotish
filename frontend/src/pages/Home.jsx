import { Sparkles, Star, Sun } from "lucide-react";

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

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-saffron text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition">
              Book Consultation
            </button>

            <button className="border border-saffron text-saffron px-6 py-3 rounded-lg">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-xl text-center space-y-6">
            <Sun className="mx-auto text-saffron" size={48} />
            <p className="text-lg font-semibold text-deep">
              Trusted by families across Lucknow
            </p>

            <div className="flex justify-center gap-6 text-gray-600">
              <div>
                <Star className="mx-auto text-saffron" />
                <p>Accurate</p>
              </div>
              <div>
                <Sparkles className="mx-auto text-saffron" />
                <p>Spiritual</p>
              </div>
              <div>
                <Sun className="mx-auto text-saffron" />
                <p>Guidance</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

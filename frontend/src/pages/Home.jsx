import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-yellow-50 min-h-screen px-6 py-16">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-deep mb-6">
        Ganpati Jyotish Paramarsh Kendra
      </h1>

      <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
        Guidance through authentic Vedic astrology for clarity in life,
        relationships, career, and spiritual growth.
      </p>

      {/* SERVICES */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-10">

        <h2 className="text-2xl font-semibold text-deep mb-6 text-center">
          Our Services
        </h2>

        <ul className="space-y-4 text-gray-800 text-lg">
          <li className="flex items-center gap-3">
            <Sparkles className="text-saffron" />
            Kundali Analysis
          </li>

          <li className="flex items-center gap-3">
            <Sparkles className="text-saffron" />
            Marriage Matching
          </li>

          <li className="flex items-center gap-3">
            <Sparkles className="text-saffron" />
            Career Guidance
          </li>

          <li className="flex items-center gap-3">
            <Sparkles className="text-saffron" />
            Vastu Consultation
          </li>

          <li className="flex items-center gap-3">
            <Sparkles className="text-saffron" />
            Numerology
          </li>
        </ul>

      </section>

      {/* CONTACT INFO */}
      <div className="text-center mt-16">
  <p className="text-gray-700 mb-4">
    For consultation or personal guidance, feel free to reach out.
  </p>

  <a
    href="/contact"
    className="text-saffron font-semibold hover:underline text-lg"
  >
    Contact Me →
  </a>
</div>


    </div>
  );
}

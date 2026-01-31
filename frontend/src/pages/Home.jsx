import { Star, Sparkles, Sun } from "lucide-react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 via-yellow-50 to-white">


      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <Sun className="mx-auto text-saffron mb-6" size={56} />

        <h1 className="text-4xl md:text-5xl font-bold text-deep">
          Ganpati Jyotish Paramarsh Kendra
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Authentic Vedic astrology guidance for career, marriage,
          health, and life decisions.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-deep mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Kundali Analysis",
            "Marriage Matching",
            "Career Guidance",
            "Vastu Consultation",
            "Numerology",
            "Horoscope Remedies"
          ].map((service) => (
            <div
              key={service}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <Sparkles className="mx-auto text-saffron mb-4" />
              <h3 className="text-xl font-semibold text-deep">
                {service}
              </h3>
              <p className="mt-2 text-gray-600">
                Personalized astrological solutions based on traditional
                Jyotish principles.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-yellow-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-deep mb-10">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <Star className="mx-auto text-saffron mb-3" />
              <h4 className="font-semibold">Accurate Predictions</h4>
              <p className="text-gray-700 mt-2">
                Deep horoscope analysis with experience-based insights.
              </p>
            </div>

            <div>
              <Sparkles className="mx-auto text-saffron mb-3" />
              <h4 className="font-semibold">Spiritual Guidance</h4>
              <p className="text-gray-700 mt-2">
                Balanced approach combining astrology and spirituality.
              </p>
            </div>

            <div>
              <Sun className="mx-auto text-saffron mb-3" />
              <h4 className="font-semibold">Trusted Locally</h4>
              <p className="text-gray-700 mt-2">
                Serving families across Lucknow with trust and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-deep">
          Contact for Consultation
        </h2>

        <p className="mt-4 text-gray-700">
          Visit us or submit your consultation request through the contact page.
        </p>
      </section>

          <div className="text-center pb-20">
  <Link
  to="/contact"
  className="
    inline-block
    mt-6
    px-8 py-4
    rounded-xl
    bg-saffron
    text-white
    font-semibold
    text-lg
    shadow-md
    hover:scale-105
    transition
  "
>
  Contact Me
</Link>

</div>

    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-yellow-50 min-h-screen">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-4xl font-bold text-deep mb-4">
          Ganpati Jyotish Paramarsh Kendra
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Authentic Vedic astrology guidance for career, marriage,
          health, and life decisions.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-saffron mx-auto my-12 rounded-full" />

      {/* SERVICES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-deep mb-10">
          Our Services
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-center text-gray-800">
          <p>• Kundali Analysis</p>
          <p>• Marriage Matching</p>
          <p>• Career Guidance</p>
          <p>• Vastu Consultation</p>
          <p>• Numerology</p>
          <p>• Horoscope Remedies</p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-saffron mx-auto my-12 rounded-full" />

      {/* WHY */}
      <section className="py-16 px-6 bg-yellow-100 text-center">
        <h2 className="text-3xl font-semibold text-deep mb-8">
          Why Choose Us
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700">
          Trusted by families across Lucknow, we provide spiritual
          guidance rooted in traditional Jyotish knowledge and years
          of experience.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-semibold text-deep mb-4">
          Contact for Consultation
        </h2>

        <p className="text-gray-700">
          Please visit the contact page to submit your consultation request.
        </p>
      </section>

    </div>
  );
}

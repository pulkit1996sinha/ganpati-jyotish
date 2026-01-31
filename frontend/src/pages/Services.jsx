import { Star, Sun, Sparkles } from "lucide-react";

const services = [
  { title: "Kundali Analysis", icon: Star },
  { title: "Marriage Matching", icon: Sparkles },
  { title: "Career Guidance", icon: Sun },
  { title: "Vastu Consultation", icon: Star },
  { title: "Numerology", icon: Sparkles }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <s.icon className="mx-auto text-saffron mb-4" size={36} />
          <h3 className="text-xl font-semibold text-deep">
            {s.title}
          </h3>
          <p className="mt-2 text-gray-600">
            Personalized guidance using authentic Vedic principles.
          </p>
        </div>
      ))}
    </div>
  );
}

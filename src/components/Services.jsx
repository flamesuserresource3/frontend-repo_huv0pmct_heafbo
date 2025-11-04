import React from 'react';
import { Camera, Users, Sparkles, Calendar } from 'lucide-react';

const services = [
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Brand & Product',
    desc: 'Clean, modern visuals for campaigns, lookbooks, and e‑commerce.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Portraits & Headshots',
    desc: 'Studio or on‑location portraits with professional lighting.'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Events & Launches',
    desc: 'Discreet coverage for conferences, openings, and private events.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Creative Editorial',
    desc: 'Concept-driven editorials with art direction and styling.'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Services</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Tailored packages designed for clarity, quality, and consistency.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-gray-100 p-3 text-gray-800">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

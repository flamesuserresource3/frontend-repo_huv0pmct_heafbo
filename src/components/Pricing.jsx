import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Essential',
    price: '$299',
    desc: 'Perfect for quick sessions and profile portraits.',
    features: ['45‑minute shoot', '10 edited images', 'Online gallery']
  },
  {
    name: 'Standard',
    price: '$799',
    desc: 'Ideal for small brands and intimate events.',
    features: ['3‑hour shoot', '40 edited images', 'Studio & on‑location']
  },
  {
    name: 'Premium',
    price: '$1499',
    desc: 'For campaigns and full‑day coverage.',
    features: ['8‑hour shoot', '100+ edited images', 'Creative direction']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Pricing</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Transparent, flexible packages. Custom quotes available upon request.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
              </div>
              <div className="mb-6 text-4xl font-semibold">{t.price}
                <span className="text-base font-normal text-gray-500"> / session</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-black" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white transition hover:bg-black/90">
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

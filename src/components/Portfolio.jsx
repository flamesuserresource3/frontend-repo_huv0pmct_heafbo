import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341338985-c0477be52513?q=80&w=1200&auto=format&fit=crop'
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Portfolio</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              A selection of recent work across brand, portrait, and event projects.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-md bg-black px-4 py-2 text-sm text-white transition hover:bg-black/90 md:block">
            Book a Session
          </a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={src}
                alt={`Portfolio ${i + 1}`}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

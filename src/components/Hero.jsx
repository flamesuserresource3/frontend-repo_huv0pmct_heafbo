import React from 'react';
import Spline from '@splinetool/react-spline';
import { Camera, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Camera className="h-4 w-4" />
          <span>Modern Photography Studio</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Capture moments with a creative, minimalist touch
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Premium photography services for brands, events, and portraits — blending
          artistry and technology to tell your story beautifully.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-black transition hover:bg-white/90"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-5 py-3 text-white backdrop-blur transition hover:border-white/60"
          >
            <Mail className="h-4 w-4" />
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

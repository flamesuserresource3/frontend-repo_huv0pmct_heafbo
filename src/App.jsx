import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import { Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Let’s create something beautiful</h2>
              <p className="mt-3 max-w-xl text-white/80">
                Share your project details, preferred dates, and any references. We’ll respond within 24 hours with a tailored proposal.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                  <Mail className="h-4 w-4" /> hello@example.com
                </a>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                  <Phone className="h-4 w-4" /> +1 (234) 567‑890
                </a>
              </div>
            </div>
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-sm text-white/80">Name</label>
                    <input type="text" required className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white/40" placeholder="Your name" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-sm text-white/80">Email</label>
                    <input type="email" required className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white/40" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm text-white/80">Message</label>
                    <textarea rows={4} required className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white/40" placeholder="Tell us about your project" />
                  </div>
                </div>
                <button type="submit" className="mt-4 w-full rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90">
                  Send Inquiry
                </button>
                <p className="mt-2 text-center text-xs text-white/60">This demo form doesn’t send yet — use the email above.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-gray-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Minimal Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

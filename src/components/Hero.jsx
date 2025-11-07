import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(99,102,241,0.3),transparent_60%),radial-gradient(800px_400px_at_80%_0,rgba(236,72,153,0.25),transparent_60%),#05060a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-semibold ring-1 ring-white/10">
              <Sparkles size={14} />
              Web3 • Memecoin • Forex
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Komunitas Trader Web3 yang Elegan & Berkelas
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Pusat ekosistem trader memecoin dan forex: edukasi on-chain, strategi price action, risk management modern, dan jaringan komunitas profesional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#join" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-medium hover:opacity-90 transition shadow-lg shadow-fuchsia-500/20">
                Gabung Sekarang
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-slate-200 font-medium hover:bg-white/5 transition">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[520px] rounded-xl border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

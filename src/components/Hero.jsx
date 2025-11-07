import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
              <Sparkles size={14} />
              Komunitas Trader Memecoin & Forex
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Tempat Berkumpulnya Para Pencetak Profit di Era Baru
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              POESAT COMMUNITY adalah rumah bagi para trader memecoin dan forex yang ingin berkembang bareng. Dapatkan edukasi, sinyal berkualitas, dan ekosistem yang suportif untuk meningkatkan performa trading kamu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#join" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition shadow">
                Gabung Sekarang
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-amber-200 p-1 shadow-lg">
              <div className="w-full h-full rounded-xl bg-white grid grid-cols-3 grid-rows-3 overflow-hidden">
                <div className="col-span-2 row-span-2 p-6 flex flex-col justify-between bg-slate-50">
                  <div>
                    <p className="text-xs text-slate-500">Performance</p>
                    <p className="text-3xl font-black text-slate-900">+178%</p>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-md" />
                </div>
                <div className="p-6 bg-white border-l border-b">
                  <p className="text-xs text-slate-500">Risk</p>
                  <p className="font-semibold text-slate-800">Managed</p>
                </div>
                <div className="p-6 bg-white border-t lg:border-t-0 lg:border-l">
                  <p className="text-xs text-slate-500">Signals</p>
                  <p className="font-semibold text-slate-800">Premium</p>
                </div>
                <div className="col-span-3 p-6 bg-white border-t">
                  <p className="text-xs text-slate-500">Community</p>
                  <p className="font-semibold text-slate-800">Support 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

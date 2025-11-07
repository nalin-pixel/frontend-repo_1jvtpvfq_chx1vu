import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[radial-gradient(1000px_500px_at_10%_0,rgba(236,72,153,0.15),transparent_60%),#0a0b10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-black text-white">Tentang POESAT COMMUNITY</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Komunitas trader berorientasi hasil dengan kultur rendah ego, tinggi eksekusi. Kami menyatukan pendekatan price action, on-chain analytics, dan sistem manajemen risiko modern untuk menghasilkan keputusan yang konsisten.
            </p>
            <ul className="mt-4 list-disc list-inside text-slate-300/90 space-y-1">
              <li>Market review mingguan + watchlist yang actionable</li>
              <li>Library materi on-demand & catatan strategi</li>
              <li>Kolaborasi lintas market: crypto, memecoin, dan forex</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl p-[1px] bg-gradient-to-tr from-indigo-500/50 via-fuchsia-500/50 to-cyan-400/50">
              <div className="w-full h-full rounded-[15px] bg-black/60 border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

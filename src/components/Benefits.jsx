import React from 'react';
import { Shield, LineChart, MessageSquare, Brain } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Alpha Signals',
    desc: 'Momentum memecoin & setup forex berkualitas dengan entry, SL, TP yang jelas.'
  },
  {
    icon: Shield,
    title: 'Risk Framework',
    desc: 'Position sizing, drawdown control, dan checklist eksekusi yang disiplin.'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Community',
    desc: 'Diskusi live, watchlist harian, dan insight on-chain langsung di channel.'
  },
  {
    icon: Brain,
    title: 'Modul Edukasi',
    desc: 'Kurikulum Web3 & FX yang ringkas dan actionable — bukan teori bertele-tele.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Kenapa Bergabung?</h2>
          <p className="mt-3 text-slate-400">Bangun edge yang tak mudah ditiru dengan kombinasi tools dan komunitas.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-white flex items-center justify-center shadow">
                {React.createElement(f.icon, { size: 18 })}
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

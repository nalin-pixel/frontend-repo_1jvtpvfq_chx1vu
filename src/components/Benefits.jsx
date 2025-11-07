import React from 'react';
import { Shield, LineChart, MessageSquare, Brain } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Sinyal Premium',
    desc: 'Akses sinyal memecoin dan forex dengan analisis teknikal & fundamental yang solid.'
  },
  {
    icon: Shield,
    title: 'Manajemen Risiko',
    desc: 'Template risk management & position sizing supaya akun tetap sehat jangka panjang.'
  },
  {
    icon: MessageSquare,
    title: 'Komunitas Aktif',
    desc: 'Diskusi harian, live review market, dan dukungan dari trader berpengalaman.'
  },
  {
    icon: Brain,
    title: 'Edukasi Terstruktur',
    desc: 'Kurikulum step-by-step dari basic hingga advanced strategy yang bisa langsung dipraktikkan.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Kenapa Bergabung?</h2>
          <p className="mt-3 text-slate-600">Semua yang kamu butuhkan untuk naik level sebagai trader — dalam satu komunitas.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow">
                {React.createElement(f.icon, { size: 18 })}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

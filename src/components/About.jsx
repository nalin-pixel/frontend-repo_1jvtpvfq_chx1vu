import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-black text-slate-900">Tentang POESAT COMMUNITY</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Kami adalah komunitas trader yang fokus pada memecoin dan forex. Misi kami sederhana: bantu member mencapai konsistensi profit melalui edukasi yang jelas, eksekusi yang disiplin, dan lingkungan yang saling mendukung.
            </p>
            <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
              <li>Sesi live market review mingguan</li>
              <li>Akses library materi & rekaman</li>
              <li>Event kolaborasi & challenge trading</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-white p-1 border border-slate-200 shadow">
              <div className="w-full h-full rounded-xl bg-gradient-to-tr from-indigo-100 via-fuchsia-100 to-amber-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

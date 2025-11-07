import React from 'react';
import { TelegramLogo } from './TelegramLogo';

export default function CTA() {
  return (
    <section id="join" className="py-20 bg-gradient-to-b from-slate-900 to-black text-white relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-black">Siap Naik Kelas?</h2>
        <p className="mt-3 text-slate-300">Gabung sekarang dan rasakan bedanya belajar dan trading bareng komunitas yang solid.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition">
            <TelegramLogo className="w-5 h-5" />
            Masuk Grup Telegram
          </a>
          <a href="mailto:contact@poesat.community" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 font-medium transition">
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

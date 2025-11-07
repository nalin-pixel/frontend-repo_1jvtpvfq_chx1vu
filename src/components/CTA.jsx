import React from 'react';
import { TelegramLogo } from './TelegramLogo';

export default function CTA() {
  return (
    <section id="join" className="py-20 bg-[radial-gradient(1000px_500px_at_90%_0,rgba(59,130,246,0.2),transparent_60%),#05060a] text-white relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-black">Siap Naik Kelas?</h2>
        <p className="mt-3 text-slate-300">Gabung sekarang dan rasakan pengalaman komunitas web3 yang elegan, fokus eksekusi.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 hover:opacity-90 text-white font-medium transition border border-white/10">
            <TelegramLogo className="w-5 h-5" />
            Masuk Grup Telegram
          </a>
          <a href="mailto:contact@poesat.community" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 font-medium transition">
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

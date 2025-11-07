import React from 'react';
import { Rocket, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-amber-400 text-white shadow">
              <Rocket size={18} />
            </div>
            <span className="font-extrabold tracking-tight text-slate-900 text-lg">POESAT COMMUNITY</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#benefits" className="hover:text-slate-900 transition">Benefits</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#join" className="hover:text-slate-900 transition">Join</a>
          </nav>

          <a href="#join" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition shadow">
            <Users size={16} />
            <span>Gabung Sekarang</span>
          </a>
        </div>
      </div>
    </header>
  );
}

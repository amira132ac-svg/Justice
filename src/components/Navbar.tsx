import React, { useState } from 'react';
import { 
  Scale, 
  Search, 
  Printer, 
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onPrintDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchChange,
  searchQuery,
  onPrintDossier
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#222] transition-all">
      {/* Top Dossier Status Banner */}
      <div className="bg-[#080808] border-b border-[#1c1c1c] px-4 py-1.5 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-red-500">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
            <span className="font-bold">پرونده تحقیقی: تیم دریاسالار (زلزله لیگ)</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-[#161616] text-red-400 border border-red-950/60 text-[10px] font-bold">
            رسانه تحقیقی عدالت
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-700 to-red-950 flex items-center justify-center text-white shadow-lg shadow-red-950/50 font-bold border border-red-600/40">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col border-r-4 border-red-700 pr-2.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif">
              عدالت
            </span>
            <span className="text-[10px] text-zinc-400 font-medium -mt-0.5">
              رسانه خبری و تحقیقی
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 text-xs sm:text-sm font-medium text-zinc-300">
          <button
            type="button"
            onClick={() => scrollToSection('accounts-evidence')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-[#161616] transition-colors"
          >
            مدارک اکانت‌ها
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('former-teammates')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-[#161616] transition-colors"
          >
            اظهارات هم‌تیمی‌ها
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('gameplay-analysis')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-[#161616] transition-colors text-red-400 font-semibold"
          >
            ویدیوها و مقایسه
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('advance-shark')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-[#161616] transition-colors"
          >
            بخش Advance-Shark
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('new-updates')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-[#161616] transition-colors"
          >
            مکالمات و گزارش‌های جدید
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('summary-findings')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-[#161616] transition-colors"
          >
            جمع‌بندی مدارک
          </button>
        </nav>

        {/* Actions: Search & Print */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="global-search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجو در مدارک..."
              className="w-40 md:w-48 bg-[#111] border border-[#262626] focus:border-red-600 rounded-lg pr-9 pl-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none transition-all"
            />
          </div>

          <button
            type="button"
            id="print-dossier-btn"
            onClick={onPrintDossier}
            className="px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#2a2a2a] hover:border-red-700/50 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="چاپ یا ذخیره خلاصه گزارش پرونده"
          >
            <Printer className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden md:inline">چاپ سند</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141414] border border-[#2a2a2a] text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#222] bg-[#0d0d0d] p-4 space-y-2 shadow-2xl">
          <div className="relative mb-2">
            <Search className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجو در مدارک..."
              className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg pr-9 pl-3 py-2 text-xs text-zinc-200"
            />
          </div>

          <div className="flex flex-col space-y-1 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => scrollToSection('accounts-evidence')}
              className="text-right px-3 py-2 rounded-lg hover:bg-[#161616] text-zinc-200"
            >
              مدارک اکانت‌ها
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('former-teammates')}
              className="text-right px-3 py-2 rounded-lg hover:bg-[#161616] text-zinc-200"
            >
              اظهارات هم‌تیمی‌های سابق
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('gameplay-analysis')}
              className="text-right px-3 py-2 rounded-lg hover:bg-[#161616] text-red-400 font-semibold"
            >
              ویدیوها و مقایسه
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('advance-shark')}
              className="text-right px-3 py-2 rounded-lg hover:bg-[#161616] text-zinc-200"
            >
              بخش Advance-Shark
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('new-updates')}
              className="text-right px-3 py-2 rounded-lg hover:bg-[#161616] text-zinc-200"
            >
              مکالمات و گزارش‌های جدید
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('summary-findings')}
              className="text-right px-3 py-2 rounded-lg hover:bg-[#161616] text-zinc-200"
            >
              جمع‌بندی مدارک
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

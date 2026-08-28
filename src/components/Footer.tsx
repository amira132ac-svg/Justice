import React from 'react';
import { Scale, ArrowUp, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#222] text-zinc-400 py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold shadow-lg shadow-red-950/40">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white font-serif tracking-tight">عدالت</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/40 border border-red-800/60 text-red-400 font-mono">
                رسانه خبری و تحقیقی
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              پایگاه بازبینی مدارک و شواهد تصویری تیم دریاسالار در زلزله لیگ. تمامی اطلاعات بر پایه مدارک و اسکرین‌شات‌های ارائه‌شده تنظیم شده است.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <span className="font-bold text-zinc-200 block text-xs">سرفصل‌های سایت</span>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <a href="#accounts-evidence" className="hover:text-red-400 transition-colors">
                  مدارک اکانت‌ها و واگذاری
                </a>
              </li>
              <li>
                <a href="#former-teammates" className="hover:text-red-400 transition-colors">
                  اظهارات هم‌تیمی‌های سابق
                </a>
              </li>
              <li>
                <a href="#gameplay-analysis" className="hover:text-red-400 transition-colors">
                  ویدیوها و مقایسه ابول و حمید صفر
                </a>
              </li>
              <li>
                <a href="#advance-shark" className="hover:text-red-400 transition-colors">
                  بخش Advance-Shark (زمان بازی)
                </a>
              </li>
              <li>
                <a href="#new-updates" className="hover:text-red-400 transition-colors">
                  مکالمات و گزارش‌های جدید
                </a>
              </li>
              <li>
                <a href="#summary-findings" className="hover:text-red-400 transition-colors">
                  آنچه مدارک نشان می‌دهند
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Archive Details */}
          <div className="space-y-2">
            <span className="font-bold text-zinc-200 block text-xs">اطلاعات پرونده</span>
            <div className="p-3 bg-[#111111] rounded-xl border border-[#242424] space-y-1.5 text-[11px] font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">پرونده:</span>
                <span className="text-zinc-300">تیم دریاسالار (زلزله لیگ)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">مدارک:</span>
                <span className="text-red-400 font-bold">۶ مدرک تصویری</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">ویدیوها:</span>
                <span className="text-red-400 font-bold">۲ ویدیوی آپارات</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-zinc-500" />
            <span>رسانه تحقیقی عدالت</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

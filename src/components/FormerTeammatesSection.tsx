import React from 'react';
import { Users, Quote } from 'lucide-react';

export const FormerTeammatesSection: React.FC = () => {
  return (
    <section id="former-teammates" className="py-10 sm:py-14 bg-[#0d0d0d] border-b border-[#222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-4">
            <Users className="w-4 h-4" />
            <span>اظهارات هم‌تیمی‌های سابق</span>
          </div>

          <div className="relative z-10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-500 flex-shrink-0 mt-1">
              <Quote className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                اظهارات هم‌تیمی‌های سابق
              </h3>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                «برخی از افرادی که سابقه هم‌تیمی بودن با این بازیکنان را دارند، اظهار کرده‌اند که بازی مشاهده‌شده با بازی‌ای که از او می‌شناسند مطابقت ندارد.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

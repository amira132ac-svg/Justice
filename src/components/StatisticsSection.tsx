import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Trophy, 
  ShieldCheck, 
  AlertCircle,
  Gamepad,
  FileBadge
} from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  return (
    <section id="advance-shark" className="py-12 sm:py-16 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-2">
            <BarChart3 className="w-4 h-4" />
            <span>بخش Advance-Shark</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            اطلاعات اکانت Advance-Shark
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2">
            بررسی زمان بازی و اطلاعات ثبت‌شده در اسکرین‌شات کنسول پلی‌استیشن.
          </p>
        </div>

        {/* Verified Stats Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Account Stat Card (Advance-Shark35) */}
          <div className="lg:col-span-8 bg-[#111111] border border-[#262626] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222] pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-zinc-900 flex items-center justify-center text-white font-mono font-bold border border-red-700/50">
                  PS5
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      اکانت advance-shark35
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-red-950/40 text-red-400 border border-red-800/60 text-xs font-mono">
                      مدرک ۰۱
                    </span>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    بازی: EA SPORTS FC™ 26 (PlayStation 5)
                  </span>
                </div>
              </div>
            </div>

            {/* Core Verified Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Stat 1: 29 Hours Highlighted */}
              <div className="p-5 rounded-xl bg-[#181818] border-2 border-red-600 relative">
                <div className="flex items-center justify-between text-zinc-300 mb-2">
                  <span className="text-xs font-bold text-red-400">زمان بازی ثبت‌شده</span>
                  <Clock className="w-4 h-4 text-red-500" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                  29 Hours
                </div>
                <span className="text-xs text-red-300 font-bold mt-1.5 block font-mono">
                  Play Time: 29 Hours
                </span>
              </div>

              {/* Stat 2: Trophies */}
              <div className="p-5 rounded-xl bg-[#141414] border border-[#242424]">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">وضعیت تروفی‌ها</span>
                  <Trophy className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                  ۴٪
                </div>
                <span className="text-xs text-zinc-400 mt-1.5 block font-mono">
                  ۲ از ۴۴ تروفی (2/44)
                </span>
              </div>

              {/* Stat 3: Last active */}
              <div className="p-5 rounded-xl bg-[#141414] border border-[#242424]">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">آخرین فعالیت</span>
                  <Gamepad className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-zinc-200 mt-2">
                  ۱ ساعت قبل
                </div>
                <span className="text-xs text-zinc-400 mt-1.5 block font-mono">
                  Played: 1 hour ago
                </span>
              </div>
            </div>

            {/* Note about 29 hours and no extra goals/numbers */}
            <div className="p-4 rounded-xl bg-[#0d0d0d] border border-[#222] text-xs text-zinc-300 space-y-1.5">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <FileBadge className="w-4 h-4" />
                <span>بررسی داده‌های مدرک ۰۱:</span>
              </div>
              <p className="leading-relaxed text-zinc-300">
                در تصویر ارائه‌شده از کنسول PS5، زمان بازی این اکانت دقیقاً <strong className="text-white font-mono">Play Time: 29 Hours</strong> ثبت شده است. در این مدرک هیچ آمار دیگری از جمله تعداد گل‌ها، پاس گل‌ها یا سایر ارقام وجود ندارد.
              </p>
            </div>
          </div>

          {/* Side Panel: Focus on Presented Evidence */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#262626] shadow-xl">
              <div className="flex items-center gap-2.5 text-red-400 font-bold text-sm mb-3">
                <AlertCircle className="w-5 h-5" />
                <span>تنها آمار مستند در تصویر</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                تنها اطلاعات آماری موجود در اسکرین‌شات ارائه‌شده عبارت است از:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#141414] border border-red-900/40">
                  <span className="font-bold text-white block">مدت زمان بازی (Play Time):</span>
                  <span className="text-red-400 font-mono font-bold">29 Hours (۲۹ ساعت)</span>
                </div>

                <div className="p-3 rounded-lg bg-[#141414] border border-[#242424]">
                  <span className="font-bold text-zinc-300 block">سایر آمارها (گل، پاس گل و...):</span>
                  <span className="text-zinc-400">در اسکرین‌شات موجود نیست.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-zinc-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>مستند به مدرک تصویری رسمی کنسول PS5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


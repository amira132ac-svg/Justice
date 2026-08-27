import React from 'react';
import { 
  FileSearch, 
  BarChart2, 
  Gamepad2, 
  Video,
  Clock
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-10 sm:pb-14 border-b border-[#222] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
        
        {/* Main Brand Title & Headings */}
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-serif border-r-4 border-red-700 pr-4">
              عدالت
            </h1>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            گزارش ویژه؛ بررسی مدارک مربوط به تیم دریاسالار
          </h2>

          <p className="text-lg sm:text-xl font-medium text-zinc-300">
            تصاویر، اطلاعات اکانت‌ها و بررسی شباهت‌های گیم‌پلی
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">مدارک و اسناد</span>
              <FileSearch className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-xl font-bold text-white font-mono">۶ مدرک تصویری</div>
            <span className="text-[11px] text-zinc-500 mt-1 block">چت‌ها، زمان بازی و اسناد</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">زمان بازی Advance-Shark</span>
              <Clock className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-xl font-bold text-red-500 font-mono">29 Hours</div>
            <span className="text-[11px] text-zinc-500 mt-1 block">Play Time: 29 Hours</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">ویدیوهای آپارات</span>
              <Video className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-xl font-bold text-white font-mono">۲ ویدیو</div>
            <span className="text-[11px] text-zinc-500 mt-1 block">پخش مستقیم داخل سایت</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-medium">مقایسه ابول و حمید صفر</span>
              <Gamepad2 className="w-4 h-4 text-zinc-300" />
            </div>
            <div className="text-sm font-bold text-white mt-1">مشاهده شباهت</div>
            <span className="text-[11px] text-zinc-500 mt-1 block">حمید صفر — بازیکن تیم ملی</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  MessageSquareWarning, 
  Image as ImageIcon, 
  AlertTriangle, 
  ShieldAlert, 
  FileText,
  UserX,
  HelpCircle
} from 'lucide-react';

export const NewUpdatesSection: React.FC = () => {
  return (
    <section id="new-updates" className="py-10 sm:py-14 bg-[#0c0c0c] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-2">
            <MessageSquareWarning className="w-4 h-4" />
            <span>گزارش‌ها و مستندات الحاقی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            مکالمات جدید و گزارش‌های دریافتی
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
            بررسی پیام‌های ثبت‌شده پیرامون اکانت و اظهارات و گزارش‌های دریافتی مربوط به رفتارهای ثبت‌شده در جریان این پرونده.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* 1. مکالمه درباره اکانت */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-[#262626] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#222]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-red-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    مکالمه درباره اکانت
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#181818] text-red-400 border border-red-950/60 font-bold">
                  سند در حال تکمیل
                </span>
              </div>

              {/* Chat Dialog Display */}
              <div className="space-y-2.5 bg-[#14181f] p-4 rounded-xl border border-[#252f3d] mb-4 font-sans text-xs">
                <div className="bg-[#1f2937] p-2.5 rounded-lg max-w-[85%] border-r-2 border-indigo-500 text-zinc-100">
                  <span className="text-[10px] text-indigo-300 block font-bold mb-0.5">Matinam27</span>
                  «با حمید در ارتباطم»
                </div>

                <div className="bg-[#242f3d] p-2.5 rounded-lg max-w-[85%] mr-auto text-zinc-100 border-l-2 border-emerald-500">
                  <span className="text-[10px] text-emerald-300 block font-bold mb-0.5">Arian</span>
                  «البته اسمم تو لیستا نیست»
                </div>

                <div className="bg-[#1f2937] p-2.5 rounded-lg max-w-[85%] border-r-2 border-indigo-500 text-zinc-100">
                  <span className="text-[10px] text-indigo-300 block font-bold mb-0.5">Matinam27</span>
                  «اکانتم واسه تو انجین مکس میکنم»
                </div>
              </div>

              {/* Short explanation */}
              <div className="p-3.5 bg-[#161616] rounded-xl border border-[#262626] text-xs text-zinc-300 leading-relaxed mb-4">
                <span className="text-zinc-400 font-bold block mb-1">توضیح کوتاه:</span>
                در این مکالمه، درباره ارتباط با حمید، نبودن نام فرد در لیست و مکس کردن اکانت برای شخص دیگر صحبت شده است.
              </div>
            </div>

            {/* Evidence Placeholder Box */}
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-dashed border-[#333] flex items-center justify-center gap-3 text-zinc-500 text-xs font-mono">
              <ImageIcon className="w-4 h-4 text-zinc-600 flex-shrink-0" />
              <span>جایگاه اسکرین‌شات و مدرک تصویری (اسکرین‌شات بعداً اضافه می‌شود)</span>
            </div>
          </div>

          {/* 2. توهین به مادر بیمار یکی از دوستان */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-[#262626] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#222]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#211111] border border-red-900/50 text-red-400">
                    <UserX className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    توهین به مادر بیمار یکی از دوستان
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#201010] text-red-400 border border-red-900/60 font-bold">
                  گزارش و اظهارات
                </span>
              </div>

              {/* Main Report Content */}
              <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
                <div className="p-4 bg-[#181111] rounded-xl border border-red-950/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>محتوای پیام‌ها و گزارش ارائه‌شده:</span>
                  </div>
                  <p className="text-zinc-200 leading-relaxed">
                    طبق پیام ارائه‌شده، در جریان این ماجرا به مادر بیمار دوست ما توهین شده و از عبارت‌هایی با مضمون <span className="text-red-300 font-bold">«مادرت در بیمارستان جان بده»</span> و <span className="text-red-300 font-bold">«با زجر بمیره»</span> استفاده شده است.
                  </p>
                  <p className="text-zinc-200 leading-relaxed pt-1 border-t border-red-950/60">
                    همچنین در همان پیام‌ها، تهدید به برخورد در دنیای واقعی مطرح شده است.
                  </p>
                </div>

                <div className="p-3 bg-[#141414] rounded-xl border border-[#242424] text-[11px] text-zinc-400 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <span>
                    این بخش به‌عنوان گزارش و اظهارات دوست ما ثبت و نمایش داده شده است. طبق اصول رسانه‌ای، هیچ‌گونه آدرس، شماره تلفن یا اطلاعات خصوصی منتشر نمی‌شود.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#222] text-[11px] text-zinc-500 font-mono flex items-center justify-between">
              <span>وضعیت: گزارش ارائه‌شده پیرامون پرونده</span>
              <span className="text-red-400">حفظ کامل حریم خصوصی</span>
            </div>
          </div>

        </div>

        {/* 3. برداشت از مدارک */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-[#292929] shadow-xl">
          <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-[#222]">
            <div className="p-2 rounded-xl bg-[#181818] border border-[#282828] text-zinc-300">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">
              برداشت از مدارک
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p className="text-zinc-200 bg-[#161616] p-4 rounded-xl border border-[#242424]">
              اگر ادعاهای مربوط به توهین به خانواده و پیام‌های تهدیدآمیز درست باشد، چنین رفتاری بسیار جدی و غیرقابل‌قبول است. در کنار مدرک مکالمه مربوط به اکانت، این موارد باعث می‌شوند ادعاهای مطرح‌شده درباره اکانت‌ها و نحوه توضیح اتفاقات با دقت بیشتری بررسی شوند.
            </p>

            <div className="p-3.5 bg-[#0e0e0e] rounded-xl border border-[#222] text-xs text-zinc-400 font-medium">
              این مدارک به‌تنهایی ثابت نمی‌کنند که افراد موردنظر حتماً دروغ گفته‌اند یا اکانت دیگری را در اختیار گرفته‌اند؛ این موارد نیاز به بررسی و مدرک مستقل دارند.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

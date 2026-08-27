import React, { useState } from 'react';
import { EvidenceDocument } from '../types';
import { 
  ZoomIn, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Clock, 
  HardDrive,
  Lock
} from 'lucide-react';

interface VisualDocumentCardProps {
  doc: EvidenceDocument;
  onOpenModal: (doc: EvidenceDocument) => void;
  showHighlightsDefault?: boolean;
}

export const VisualDocumentCard: React.FC<VisualDocumentCardProps> = ({
  doc,
  onOpenModal,
  showHighlightsDefault = true,
}) => {
  const [showHighlights, setShowHighlights] = useState(showHighlightsDefault);

  return (
    <div 
      id={`evidence-card-${doc.id}`}
      className="group relative bg-[#111111] border border-[#242424] hover:border-[#383838] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Bar / Header of Card */}
      <div className="p-4 border-b border-[#222] bg-[#0d0d0d] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="px-2.5 py-1 rounded bg-red-950/40 text-red-400 border border-red-800/60 text-xs font-mono font-bold whitespace-nowrap">
            {doc.docNumber}
          </span>
          <span className="px-2 py-0.5 rounded bg-[#181818] text-zinc-300 border border-[#2a2a2a] text-xs truncate">
            {doc.categoryLabel}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            id={`toggle-highlights-${doc.id}`}
            onClick={() => setShowHighlights(!showHighlights)}
            className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors ${
              showHighlights 
                ? 'bg-red-950/50 text-red-300 border border-red-800/80' 
                : 'bg-[#181818] text-zinc-400 hover:text-zinc-200 border border-[#2a2a2a]'
            }`}
            title="نمایش یا پنهان‌سازی بخش‌های مشخص‌شده با کادر"
          >
            <Layers className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">نشانه‌گذاری</span>
          </button>
          <button
            type="button"
            id={`inspect-doc-${doc.id}`}
            onClick={() => onOpenModal(doc)}
            className="p-1.5 rounded bg-[#181818] hover:bg-[#252525] border border-[#2a2a2a] text-zinc-300 hover:text-white transition-colors"
            title="مشاهده در نمای بزرگ و بررسی دقیق"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image / Document Visual Display */}
      <div 
        className="relative bg-black cursor-pointer overflow-hidden select-none flex items-center justify-center min-h-[340px] max-h-[460px] p-2 border-b border-[#222]"
        onClick={() => onOpenModal(doc)}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {renderDocumentVisual(doc, showHighlights)}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 pointer-events-none">
          <div className="flex items-center gap-2 text-zinc-200 text-xs font-medium bg-[#141414]/95 backdrop-blur px-3 py-1.5 rounded-lg border border-[#2e2e2e]">
            <Eye className="w-3.5 h-3.5 text-red-500" />
            کلیک برای بررسی با ذره‌بین و متن کامل
          </div>
          {doc.dateOrTime && (
            <span className="text-xs text-zinc-400 bg-black/80 px-2.5 py-1 rounded border border-[#222]">
              {doc.dateOrTime}
            </span>
          )}
        </div>
      </div>

      {/* Card Content / Caption & Findings */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-[#111111]">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
            {doc.title}
          </h3>
          
          <div className="p-2.5 rounded-lg bg-red-950/20 border border-red-900/30 mb-3 text-zinc-200 text-xs sm:text-sm font-medium flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span>«{doc.shortCaption}»</span>
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
            {doc.description}
          </p>

          {/* Key Findings List */}
          <div className="space-y-1.5 mb-4">
            <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
              نکات کلیدی مستخرج از مدرک:
            </span>
            <ul className="space-y-1 text-xs text-zinc-300">
              {doc.keyFindings.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-[#222] flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 truncate">
            <HardDrive className="w-3.5 h-3.5 text-zinc-500" />
            <span className="truncate">{doc.sourceType}</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenModal(doc)}
            className="text-red-500 hover:text-red-400 font-medium flex items-center gap-1 transition-colors flex-shrink-0"
          >
            مشاهده کامل
            <span className="text-sm">←</span>
          </button>
        </div>
      </div>
    </div>
  );
};

function renderDocumentVisual(doc: EvidenceDocument, showHighlights: boolean) {
  switch (doc.imageType) {
    case 'ps5_interface':
      return (
        <div className="w-full h-full bg-[#0a0e1a] rounded-lg p-4 font-sans text-white relative border border-cyan-900/40 shadow-inner flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-48 bg-blue-600/10 blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-700 to-purple-800 flex items-center justify-center border border-indigo-400/50 shadow-md">
                <span className="text-xs font-mono text-cyan-200">PS5</span>
              </div>
              <div>
                <div className="text-base font-bold tracking-wide flex items-center gap-2">
                  <span className="text-zinc-100">advance-shark35</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </div>
                <div className="text-[11px] text-zinc-400 flex items-center gap-3 font-mono">
                  <span>Overview</span>
                  <span className="text-cyan-300 font-semibold border-b border-cyan-400">Games</span>
                  <span>Friends</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-mono">
              PS5 System
            </div>
          </div>

          <div className="my-auto py-3 bg-zinc-950/70 rounded-lg p-3.5 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-md bg-gradient-to-br from-emerald-800 via-teal-900 to-zinc-900 flex flex-col items-center justify-center p-1 border border-teal-500/30 text-center flex-shrink-0">
                <span className="text-[10px] font-mono tracking-tighter text-teal-300">EA SPORTS</span>
                <span className="text-sm font-black text-white">FC 26</span>
                <span className="text-[9px] px-1 bg-zinc-800 text-teal-400 rounded">PS5</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  EA SPORTS FC™ 26
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  Played: 1 hour ago
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-zinc-800">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                  <span className="text-amber-400">🏆</span>
                  <span className="font-mono font-bold text-amber-200">4%</span>
                  <span className="text-zinc-400 font-mono text-[11px]">2 / 44</span>
                </div>
                <div className="w-24 h-1.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-amber-400 w-[4%]" />
                </div>
              </div>

              <div className="bg-zinc-900 px-3 py-1.5 rounded-lg border border-cyan-500/30 text-left">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Playtime</div>
                <div className="text-base font-extrabold text-cyan-300 font-mono">
                  29 Hours
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-zinc-400 flex items-center justify-between border-t border-zinc-800/40 pt-2 font-mono">
            <span>PlayStation Network Verification</span>
            <span>Recorded in Trophy Subsystem</span>
          </div>

          {showHighlights && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[48%] right-2 sm:right-4 w-44 h-16 border-2 border-red-500 bg-red-600/15 rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                <span className="bg-red-600 text-white font-bold text-[11px] px-2 py-0.5 rounded shadow">
                  Play Time: 29 Hours
                </span>
              </div>
            </div>
          )}
        </div>
      );

    case 'chat_leak_1':
      return (
        <div className="w-full h-full bg-[#141b22] rounded-lg p-3 text-zinc-100 font-sans text-xs relative overflow-hidden flex flex-col justify-between border border-[#2a2a2a]">
          <div className="flex items-center justify-between border-b border-[#232e3c] pb-2 text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center font-bold text-white text-[10px]">
                A
              </div>
              <span className="font-bold text-red-400">ArshiyA</span>
              <span className="text-[10px] text-zinc-400 font-mono">Telegram</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-400 text-[10px]">
              <Lock className="w-3 h-3 text-zinc-500" />
              <span>اطلاعات خصوصی محو شده</span>
            </div>
          </div>

          <div className="space-y-2 py-2 overflow-hidden">
            <div className="flex flex-col gap-1 items-start">
              <div className="bg-[#1f2937] p-2 rounded-lg max-w-[88%] text-zinc-200 relative border border-[#2a2a2a]">
                <span className="text-[10px] text-zinc-400 block font-semibold mb-0.5">ArshiyA • 1:31 AM</span>
                بزار پیام دادم بهش
              </div>
              
              <div className="bg-[#1f2937] p-2 rounded-lg max-w-[88%] text-zinc-200 border-r-2 border-red-500 relative">
                <span className="text-[10px] text-red-400 block font-semibold mb-0.5">ArshiyA • 2:23 PM</span>
                به کسی چیزی نگو
              </div>

              <div className="bg-[#1f2937] p-2.5 rounded-lg max-w-[92%] text-zinc-100 font-medium bg-red-950/30 border border-red-600/40 relative">
                <span className="text-[10px] text-red-300 block font-semibold mb-0.5">ArshiyA • 2:23 PM</span>
                ما اکانتتو میخوایم
              </div>

              <div className="bg-[#1f2937] p-2 rounded-lg max-w-[92%] text-zinc-200 text-[11px]">
                ببین ما نه پلاستو میخوایم نه فیفاتو
              </div>

              <div className="bg-[#1f2937] p-2.5 rounded-lg max-w-[95%] text-red-200 font-medium bg-red-950/40 border-2 border-red-600 rounded-md">
                فقط اون ایدی که تو لیست رد شده اون اکانتو میخوایم همین
              </div>

              <div className="bg-[#1f2937] p-1.5 rounded-lg max-w-[90%] text-zinc-300 text-[10px]">
                بچه ها خودشون فیفا و پلاسو دارن
              </div>
            </div>
          </div>

          <div className="border-t border-[#232e3c] pt-1.5 flex items-center justify-between text-[10px] text-zinc-400">
            <span>چت گروهی: «اکانت کیو میخواید بدیم»</span>
            <span className="text-red-400 font-mono">سند #۰۲</span>
          </div>

          {showHighlights && (
            <div className="absolute top-[38%] left-2 right-2 h-20 border-2 border-red-500 bg-red-600/10 rounded pointer-events-none flex items-center justify-end px-3">
              <span className="bg-red-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow">
                شواهد درخواست اکانت
              </span>
            </div>
          )}
        </div>
      );

    case 'chat_leak_2':
      return (
        <div className="w-full h-full bg-[#141b22] rounded-lg p-3 text-zinc-100 text-xs relative flex flex-col justify-between border border-[#2a2a2a]">
          <div className="border-b border-[#232e3c] pb-2 flex items-center justify-between text-[11px]">
            <span className="font-bold text-red-400">مکالمات گروهی (طرح گزارش به اونر لیگ)</span>
            <span className="text-zinc-400 text-[10px]">ساعت ۲۱:۱۸ - ۲۲:۵۱</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="bg-[#1f2937] p-2.5 rounded-lg max-w-[90%] border-r-2 border-red-500">
              <span className="text-[10px] text-red-300 block font-bold">Ehsan Balouch</span>
              به علی زلزله میگم اکانت دادین به من
            </div>
            <div className="bg-[#1f2937] p-2 rounded-lg max-w-[50%] mr-auto text-zinc-400">
              <span className="text-[10px] text-zinc-400 block font-semibold">Arvin MC</span>
              هوممم
            </div>
            <div className="bg-[#1f2937] p-2.5 rounded-lg max-w-[90%] text-zinc-200">
              <span className="text-[10px] text-indigo-400 block font-semibold">I AM Matiniam</span>
              اون فکره ... فعلا <span className="text-[9px] text-zinc-400">(ویرایش شده ۲۱:۱۸)</span>
            </div>
            <div className="bg-[#242f3d] p-2 rounded-lg max-w-[90%] text-red-300 border border-red-900/40">
              <span className="text-[10px] text-red-400 block font-semibold">I AM Matiniam (۲۲:۵۱)</span>
              ... تو علی زلزله
            </div>
          </div>
          <div className="text-[10px] text-zinc-400 border-t border-[#232e3c] pt-2 flex items-center justify-between">
            <span>مکالمات گزارش به اونر و فحاشی</span>
            <span className="text-red-400 font-mono">سند #۰۳</span>
          </div>

          {showHighlights && (
            <div className="absolute top-[20%] right-2 left-2 h-14 border-2 border-red-500 bg-red-600/10 rounded pointer-events-none flex items-center justify-end px-2">
              <span className="bg-red-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow">
                طرح گزارش تخلف به علی زلزله (اونر)
              </span>
            </div>
          )}
        </div>
      );

    case 'chat_leak_3':
      return (
        <div className="w-full h-full bg-[#17212b] rounded-lg p-3 text-zinc-100 text-xs relative flex flex-col justify-between border border-zinc-700/60">
          <div className="border-b border-[#232e3c] pb-2 flex items-center justify-between text-[11px]">
            <span className="font-bold text-zinc-200">مکالمات تلگرام</span>
            <span className="text-zinc-400 text-[10px]">۲۲:۵۱ - ۲۲:۵۳</span>
          </div>
          <div className="space-y-2 py-3">
            <div className="bg-[#242f3d] p-2 rounded-lg max-w-[90%]">
              <span className="text-[10px] text-zinc-400 block font-semibold">Arvininho</span>
              وصل شه تلگرام کامل درمیارم
            </div>
            <div className="bg-[#242f3d] p-2.5 rounded-lg max-w-[95%] border-r-2 border-red-500">
              <span className="text-[10px] text-zinc-400 block font-semibold">Arvininho</span>
              از سال ۲۰۲۲ تو استریماش چت دادم منو نمیشناسه هنوز
            </div>
            <div className="bg-[#242f3d] p-2 rounded-lg max-w-[85%] text-zinc-300">
              <span className="text-[10px] text-zinc-400 block font-semibold">I AM Matiniam</span>
              روز اسمش هست تو لایوا
            </div>
          </div>
          <div className="text-[10px] text-zinc-400 border-t border-[#232e3c] pt-2 flex items-center justify-between">
            <span>مکالمات ثبت‌شده تلگرام</span>
            <span className="text-red-400 font-mono">سند #۰۴</span>
          </div>
        </div>
      );

    case 'chat_leak_4':
      return (
        <div className="w-full h-full bg-[#17212b] rounded-lg p-4 text-zinc-100 text-xs relative flex flex-col justify-between border border-zinc-700/60">
          <div className="border-b border-[#232e3c] pb-2 flex items-center justify-between text-[11px]">
            <span className="font-bold text-zinc-200">پیام ثبت‌شده</span>
            <span className="text-zinc-400 text-[10px]">۲۳:۵۶</span>
          </div>
          <div className="my-auto py-4">
            <div className="bg-[#242f3d] p-4 rounded-xl border border-zinc-600 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-white text-[11px]">
                  A
                </div>
                <div>
                  <span className="font-bold text-white block">Armita AMIRata</span>
                  <span className="text-[10px] text-zinc-400">۲۳:۵۶</span>
                </div>
              </div>
              <p className="text-sm font-medium text-zinc-200 mt-2 leading-relaxed">
                به مناسب زلزله ۴ ریشتری ... تو علی زلزله
              </p>
            </div>
          </div>
          <div className="text-[10px] text-zinc-400 border-t border-[#232e3c] pt-2 flex items-center justify-between">
            <span>اسکرین‌شات پیام تلگرام</span>
            <span className="text-red-400 font-mono">سند #۰۵</span>
          </div>
        </div>
      );

    case 'hamid_safar_1':
      return (
        <div className="w-full h-full bg-[#0d0d0d] rounded-lg p-4 text-white relative flex flex-col justify-between overflow-hidden border border-red-950/60 shadow-xl">
          <div className="flex items-center justify-between text-[11px] border-b border-zinc-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-zinc-200 font-bold">حمید صفر — بازیکن تیم ملی</span>
            </div>
            <span className="text-red-400 font-mono font-bold bg-red-950/50 px-2 py-0.5 rounded border border-red-800/40">سند #۰۶</span>
          </div>

          <div className="my-auto flex flex-col sm:flex-row items-center justify-center gap-5 py-4">
            <div className="w-28 h-32 rounded-2xl bg-gradient-to-b from-[#181818] to-[#121212] p-3 border-2 border-red-800/50 flex flex-col items-center justify-center relative shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-red-900 to-zinc-700 flex items-center justify-center border border-red-500/50 shadow-inner">
                <span className="text-sm font-black text-white font-mono">IRN</span>
              </div>
              <span className="text-xs text-zinc-100 font-bold mt-2.5">حمید صفر</span>
            </div>

            <div className="text-right space-y-2 max-w-[200px]">
              <div className="inline-block px-2.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800/60 text-[11px] font-bold">
                بازیکن تیم ملی
              </div>
              <h4 className="text-base font-black text-white">حمید صفر</h4>
              <p className="text-xs text-zinc-400 leading-snug">
                سوابق رسمی ملی و استناد در بررسی مقایسه‌ای گیم‌پلی
              </p>
            </div>
          </div>

          <div className="text-[10px] text-zinc-400 border-t border-zinc-800 pt-2.5 flex items-center justify-between font-mono">
            <span>آرشیو تصویری مستند</span>
            <span className="text-red-400">تطبیق ویدیوهای مسابقات</span>
          </div>

          {showHighlights && (
            <div className="absolute inset-0 pointer-events-none p-3 flex items-center justify-center">
              <div className="w-full h-full border-2 border-red-500/80 bg-red-600/10 rounded-lg flex items-start justify-end p-2">
                <span className="bg-red-700 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow">
                  حمید صفر — بازیکن تیم ملی
                </span>
              </div>
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
}

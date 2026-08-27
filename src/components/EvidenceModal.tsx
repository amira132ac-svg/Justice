import React, { useState } from 'react';
import { EvidenceDocument } from '../types';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Info, 
  FileText, 
  ShieldCheck,
  Copy,
  Check,
  Lock
} from 'lucide-react';

interface EvidenceModalProps {
  doc: EvidenceDocument | null;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ doc, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showHighlights, setShowHighlights] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!doc) return null;

  const handleCopyTranscript = () => {
    if (!doc.transcription) return;
    const text = doc.transcription.map(t => `${t.speaker ? `[${t.speaker}] ` : ''}${t.time ? `(${t.time}) ` : ''}${t.text}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0d0d0d] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#222] bg-[#080808] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-3 py-1 rounded bg-red-950/40 text-red-400 border border-red-800/60 text-xs font-mono font-bold">
              {doc.docNumber}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white truncate">
              {doc.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowHighlights(!showHighlights)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                showHighlights 
                  ? 'bg-red-950/50 text-red-300 border border-red-800/80' 
                  : 'bg-[#181818] text-zinc-400 hover:text-white border border-[#2a2a2a]'
              }`}
            >
              <Layers className="w-4 h-4 text-red-500" />
              <span>کادربندی مدارک</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#181818] hover:bg-[#252525] border border-[#2a2a2a] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Two Column Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Display Left/Center */}
          <div className="lg:col-span-7 bg-black p-4 sm:p-6 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-l border-[#222] min-h-[380px]">
            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#141414]/95 backdrop-blur border border-[#2a2a2a] p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
                className="p-1.5 rounded text-zinc-300 hover:text-white hover:bg-[#222]"
                title="بزرگ‌نمایی"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-zinc-300 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                className="p-1.5 rounded text-zinc-300 hover:text-white hover:bg-[#222]"
                title="کوچک‌نمایی"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="p-1.5 rounded text-zinc-300 hover:text-white hover:bg-[#222]"
                title="بازنشانی اندازه"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Scaled Visual */}
            <div 
              className="w-full max-w-lg transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {renderModalContent(doc, showHighlights)}
            </div>

            <div className="absolute bottom-4 right-4 text-[11px] text-zinc-500 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
              <span>مستندات رسمی پرونده</span>
            </div>
          </div>

          {/* Details Right Column */}
          <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-[#0d0d0d] overflow-y-auto">
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/30 text-zinc-200 text-sm font-medium">
                «{doc.shortCaption}»
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#141414] p-2.5 rounded-lg border border-[#222]">
                  <span className="text-zinc-400 block mb-1">منبع مدرک</span>
                  <span className="text-zinc-200 font-medium truncate block">{doc.sourceType}</span>
                </div>
                <div className="bg-[#141414] p-2.5 rounded-lg border border-[#222]">
                  <span className="text-zinc-400 block mb-1">زمان ثبت</span>
                  <span className="text-zinc-200 font-medium truncate block">{doc.dateOrTime || 'ثبت در آرشیو'}</span>
                </div>
              </div>

              {doc.statHighlights && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-zinc-300 block">داده‌های آماری استخراج‌شده:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {doc.statHighlights.map((st, i) => (
                      <div key={i} className="bg-[#141414] p-2.5 rounded-lg border border-[#222]">
                        <span className="text-[11px] text-zinc-400 block">{st.label}</span>
                        <span className="text-sm font-mono font-bold text-red-500">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <span className="text-xs font-bold text-zinc-300 block">بخش‌های مشخص‌شده:</span>
                <div className="space-y-2">
                  {doc.highlights.map(hl => (
                    <div key={hl.id} className="p-2.5 rounded-lg bg-[#141414] border border-red-900/30 text-xs">
                      <span className="font-bold text-red-400 block mb-0.5">{hl.label}</span>
                      <p className="text-zinc-400 leading-relaxed">{hl.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {doc.transcription && (
                <div className="space-y-2 pt-2 border-t border-[#222]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-zinc-400" />
                      متن مکالمه (اطلاعات خصوصی تار شده):
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyTranscript}
                      className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'کپی شد' : 'کپی متن'}</span>
                    </button>
                  </div>
                  <div className="bg-[#141414] rounded-lg p-3 max-h-52 overflow-y-auto text-xs space-y-2 border border-[#222] font-sans">
                    {doc.transcription.map((tr, idx) => (
                      <div 
                        key={idx} 
                        className={`p-1.5 rounded ${tr.isKey ? 'bg-red-950/30 border-r-2 border-red-500 text-zinc-100 font-semibold' : 'text-zinc-300'}`}
                      >
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-0.5">
                          <span>{tr.speaker}</span>
                          {tr.time && <span className="font-mono">{tr.time}</span>}
                        </div>
                        <p>{tr.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-[#141414] rounded-lg border border-[#222] text-[11px] text-zinc-400 flex items-start gap-2">
              <Info className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
              <span>کلیه مدارک به صورت مستند و عینی و با رعایت حریم خصوصی درج گردیده‌اند.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function renderModalContent(doc: EvidenceDocument, showHighlights: boolean) {
  switch (doc.imageType) {
    case 'ps5_interface':
      return (
        <div className="bg-[#0a0e1a] rounded-xl p-5 font-sans text-white border border-cyan-900 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-700 to-purple-800 flex items-center justify-center border-2 border-indigo-400">
                <span className="text-sm font-mono text-cyan-200">PS5</span>
              </div>
              <div>
                <div className="text-lg font-bold">advance-shark35</div>
                <div className="text-xs text-zinc-400 flex gap-3 font-mono">
                  <span>Overview</span>
                  <span className="text-cyan-300 font-bold border-b border-cyan-400">Games</span>
                  <span>Friends</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-mono">PS5 System</div>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg bg-teal-950 flex flex-col items-center justify-center border border-teal-500/40">
                <span className="text-xs font-mono text-teal-300">EA SPORTS</span>
                <span className="text-lg font-black text-white">FC 26</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-zinc-800 text-teal-300 rounded mt-0.5">PS5</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">EA SPORTS FC™ 26</h4>
                <p className="text-xs text-zinc-400 mt-1">Played: 1 hour ago</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-amber-400 text-sm">🏆</span>
                  <span className="text-xs font-mono font-bold text-amber-200">4%</span>
                  <span className="text-xs text-zinc-400 font-mono">(2 / 44)</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 px-5 py-3 rounded-xl border-2 border-cyan-400 text-left shadow-lg">
              <div className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Hours Played</div>
              <div className="text-2xl font-black text-cyan-300 font-mono">29</div>
            </div>
          </div>

          {showHighlights && (
            <div className="absolute top-[45%] right-6 border-2 border-red-500 bg-red-600/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xl animate-pulse">
              <span className="text-red-300 text-xs font-bold">Play Time: 29 Hours</span>
            </div>
          )}
        </div>
      );

    case 'chat_leak_1':
      return (
        <div className="bg-[#17212b] rounded-xl p-4 text-zinc-100 font-sans border border-zinc-700">
          <div className="border-b border-[#232e3c] pb-2.5 flex items-center justify-between mb-3">
            <span className="font-bold text-red-400">ArshiyA</span>
            <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
              <Lock className="w-3 h-3 text-zinc-500" />
              <span>اطلاعات خصوصی محو شده</span>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[90%]">
              <span className="text-[10px] text-zinc-400 block font-semibold mb-1">ArshiyA • 1:31 AM</span>
              بزار پیام دادم بهش
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[90%] border-r-4 border-red-500">
              <span className="text-[10px] text-red-400 block font-semibold mb-1">ArshiyA • 2:23 PM</span>
              به کسی چیزی نگو
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[92%] font-bold text-red-200 bg-red-950/30 border border-red-500">
              <span className="text-[10px] text-red-300 block font-semibold mb-1">ArshiyA • 2:23 PM</span>
              ما اکانتتو میخوایم
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[95%] text-zinc-200">
              ببین ما نه پلاستو میخوایم نه فیفاتو
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[98%] bg-red-950/40 border-2 border-red-500 text-red-100 font-bold">
              فقط اون ایدی که تو لیست رد شده اون اکانتو میخوایم همین
            </div>
            <div className="bg-[#242f3d] p-2.5 rounded-xl text-xs max-w-[90%] text-zinc-300">
              بچه ها خودشون فیفا و پلاسو دارن
            </div>
          </div>
        </div>
      );

    case 'chat_leak_2':
      return (
        <div className="bg-[#141b22] rounded-xl p-4 text-zinc-100 font-sans border border-[#2a2a2a]">
          <div className="border-b border-[#232e3c] pb-2.5 flex items-center justify-between mb-3">
            <span className="font-bold text-red-400">مکالمات گروهی (طرح گزارش به اونر لیگ)</span>
            <span className="text-zinc-400 text-xs font-mono">۲۱:۱۸ - ۲۲:۵۱</span>
          </div>
          <div className="space-y-2.5">
            <div className="bg-[#1f2937] p-3 rounded-xl text-xs max-w-[90%] border-r-4 border-red-500">
              <span className="text-[10px] text-red-300 block font-bold mb-1">Ehsan Balouch • ۲۱:۱۸</span>
              به علی زلزله میگم اکانت دادین به من
            </div>
            <div className="bg-[#1f2937] p-2 rounded-xl text-xs max-w-[50%] mr-auto text-zinc-400">
              <span className="text-[10px] text-zinc-400 block font-semibold mb-0.5">Arvin MC • ۲۱:۱۸</span>
              هوممم
            </div>
            <div className="bg-[#1f2937] p-3 rounded-xl text-xs max-w-[90%] text-zinc-200">
              <span className="text-[10px] text-indigo-400 block font-semibold mb-1">I AM Matiniam • ۲۱:۱۸</span>
              اون فکره ... فعلا <span className="text-[9px] text-zinc-400">(ویرایش شده)</span>
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[95%] text-red-300 border-2 border-red-800/80 bg-red-950/30 font-bold">
              <span className="text-[10px] text-red-400 block font-semibold mb-1">I AM Matiniam • ۲۲:۵۱ (فحاشی به برگزارکننده مسابقات)</span>
              ... تو علی زلزله
            </div>
          </div>
        </div>
      );

    case 'chat_leak_3':
      return (
        <div className="bg-[#17212b] rounded-xl p-4 text-zinc-100 font-sans border border-zinc-700">
          <div className="border-b border-[#232e3c] pb-2.5 flex items-center justify-between mb-3">
            <span className="font-bold text-zinc-200">مکالمات سابقه استریم‌ها</span>
            <span className="text-zinc-400 text-xs font-mono">۲۲:۵۱ - ۲۲:۵۳</span>
          </div>
          <div className="space-y-2.5">
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[90%]">
              <span className="text-[10px] text-zinc-400 block font-semibold mb-1">Arvininho</span>
              وصل شه تلگرام کامل درمیارم
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[95%] border-r-4 border-red-500">
              <span className="text-[10px] text-zinc-300 block font-semibold mb-1">Arvininho • ۲۲:۵۳</span>
              از سال ۲۰۲۲ تو استریماش چت دادم منو نمیشناسه هنوز
            </div>
            <div className="bg-[#242f3d] p-3 rounded-xl text-xs max-w-[85%] text-zinc-300">
              <span className="text-[10px] text-zinc-400 block font-semibold mb-1">I AM Matiniam</span>
              روز اسمش هست تو لایوا
            </div>
          </div>
        </div>
      );

    case 'chat_leak_4':
      return (
        <div className="bg-[#17212b] rounded-xl p-5 text-zinc-100 font-sans border border-red-900/60 shadow-xl">
          <div className="border-b border-[#232e3c] pb-2.5 flex items-center justify-between mb-4">
            <span className="font-bold text-red-400 flex items-center gap-1.5">
              <span>پیام حاوی فحاشی به علی زلزله</span>
            </span>
            <span className="text-zinc-400 text-xs font-mono">ساعت ۲۳:۵۶</span>
          </div>
          <div className="bg-[#242f3d] p-4 rounded-xl border-2 border-red-800/80 bg-red-950/20 shadow-lg">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-red-900 flex items-center justify-center font-bold text-white text-xs border border-red-500">
                A
              </div>
              <div>
                <span className="font-bold text-white block text-sm">Armita AMIRata</span>
                <span className="text-[10px] text-zinc-400 font-mono">۲۳:۵۶</span>
              </div>
            </div>
            <p className="text-sm font-bold text-red-200 mt-2 leading-relaxed bg-red-950/50 p-3 rounded-lg border border-red-800/60">
              به مناسبت زلزله ۴ ریشتری ... تو علی زلزله
            </p>
          </div>
        </div>
      );

    case 'hamid_safar_1':
      return (
        <div className="bg-[#0d0d0d] rounded-2xl p-6 text-white border border-red-950/70 shadow-2xl flex flex-col items-center justify-center relative">
          <div className="w-36 h-40 rounded-2xl bg-gradient-to-b from-[#181818] to-[#111111] border-2 border-red-800/60 shadow-2xl flex flex-col items-center justify-center p-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-900 to-zinc-700 flex items-center justify-center border-2 border-red-500 shadow-inner">
              <span className="text-base font-black text-white font-mono">IRN</span>
            </div>
            <span className="text-sm font-black text-white mt-3">حمید صفر</span>
            <span className="text-[11px] text-red-400 font-bold mt-1 bg-red-950/70 px-2 py-0.5 rounded border border-red-800/40">بازیکن تیم ملی</span>
          </div>

          <div className="text-center space-y-1.5">
            <h4 className="text-xl font-black text-white">حمید صفر</h4>
            <p className="text-sm text-red-400 font-medium">بازیکن تیم ملی — ورزش‌های الکترونیک</p>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
              مستند به شواهد تصویری و تطبیق سبک بازی در ویدیوهای ارائه‌شده مسابقات
            </p>
          </div>

          {showHighlights && (
            <div className="absolute top-4 right-4 bg-red-900/40 border border-red-600/60 px-3 py-1 rounded-lg text-xs font-bold text-red-200">
              حمید صفر — بازیکن تیم ملی
            </div>
          )}
        </div>
      );

    default:
      return (
        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center text-zinc-300">
          <FileText className="w-12 h-12 text-red-500 mx-auto mb-3" />
          <h4 className="font-bold text-white mb-2">{doc.title}</h4>
          <p className="text-xs text-zinc-400">{doc.description}</p>
        </div>
      );
  }
}

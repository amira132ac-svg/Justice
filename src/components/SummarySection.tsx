import React from 'react';
import { SUMMARY_FINDINGS } from '../data/evidenceData';
import { 
  FolderLock, 
  KeyRound, 
  Gamepad2, 
  BarChart3, 
  Video, 
  CheckCircle, 
  Scale, 
  ShieldAlert, 
  FileSpreadsheet,
  Users,
  Printer
} from 'lucide-react';

interface SummarySectionProps {
  onPrintDossier: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onPrintDossier }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderLock':
        return <FolderLock className="w-5 h-5 text-red-500" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-red-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-red-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-red-500" />;
      case 'Video':
        return <Video className="w-5 h-5 text-red-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-red-500" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="summary-findings" className="py-10 sm:py-14 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-2">
            <Scale className="w-4 h-4" />
            <span>جمع‌بندی مدارک و یافته‌ها</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            آنچه مدارک نشان می‌دهند
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed">
            بر اساس تحلیل ۶ مدرک تصویری و داده‌های ثبت‌شده، خلاصه یافته‌های مستند پرونده به شرح زیر است:
          </p>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {SUMMARY_FINDINGS.map((finding, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#383838] shadow-xl transition-all flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#0d0d0d] border border-[#222]">
                    {getIcon(finding.icon)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#181818] text-zinc-400 border border-[#2a2a2a]">
                    بخش {idx + 1} از ۵
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5">
                  {finding.title}
                </h3>

                <ul className="space-y-2 text-xs text-zinc-300">
                  {finding.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222] text-[11px] text-zinc-500 font-mono">
                مستند به شواهد تصویری و مکالمات پرونده
              </div>
            </div>
          ))}
        </div>

        {/* Concise Footer Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-[#262626] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-xs text-zinc-300">
            <span className="text-red-400 font-bold block">رسانه تحقیقی عدالت</span>
            <p>هدف این سایت ارائه و بازنمایی شفاف و مستقیم اسناد و مدارک تصویری است.</p>
          </div>
          <button
            type="button"
            onClick={onPrintDossier}
            className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-xs flex items-center gap-2 transition-all flex-shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>خروجی و چاپ گزارش</span>
          </button>
        </div>
      </div>
    </section>
  );
};

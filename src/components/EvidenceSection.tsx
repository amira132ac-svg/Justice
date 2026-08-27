import React, { useState, useMemo } from 'react';
import { EvidenceDocument } from '../types';
import { VisualDocumentCard } from './VisualDocumentCard';
import { 
  FolderLock, 
  Layers, 
  Filter, 
  HelpCircle,
  Info
} from 'lucide-react';

interface EvidenceSectionProps {
  documents: EvidenceDocument[];
  onOpenModal: (doc: EvidenceDocument) => void;
  searchQuery: string;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({
  documents,
  onOpenModal,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAllHighlights, setShowAllHighlights] = useState<boolean>(true);

  const categories = [
    { id: 'all', label: `همه اسناد و مدارک (${documents.length} سند)` },
    { id: 'account_transfer', label: 'واگذاری و دسترسی اکانت‌ها' },
    { id: 'playtime_stats', label: 'آمار زمان بازی کنسول' },
    { id: 'chat_evidence', label: 'مکالمات و پیام‌های تلگرام' },
    { id: 'identity_avatar', label: 'حمید صفر — بازیکن تیم ملی' },
  ];

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTitle = doc.title.toLowerCase().includes(query);
        const inDesc = doc.description.toLowerCase().includes(query);
        const inCaption = doc.shortCaption.toLowerCase().includes(query);
        const inFindings = doc.keyFindings.some((f) => f.toLowerCase().includes(query));
        const inTrans = doc.transcription?.some((t) => t.text.toLowerCase().includes(query) || (t.speaker && t.speaker.toLowerCase().includes(query)));
        return inTitle || inDesc || inCaption || inFindings || inTrans;
      }
      return true;
    });
  }, [documents, selectedCategory, searchQuery]);

  return (
    <section id="accounts-evidence" className="py-10 sm:py-14 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-2">
              <FolderLock className="w-4 h-4" />
              <span>بخش مدارک اکانت‌ها</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              مدارک اکانت‌ها، واگذاری و پیام‌ها
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              تصاویر، اسکرین‌شات‌ها و شواهد مربوط به اکانت‌ها، اطلاعات ساعات بازی و مکالمات مرتبط با واگذاری اکانت‌ها.
            </p>
          </div>

          {/* Quick toggle for highlights */}
          <div className="flex items-center gap-2 bg-[#111] border border-[#262626] p-1.5 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setShowAllHighlights(!showAllHighlights)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
                showAllHighlights 
                  ? 'bg-red-950/50 text-red-300 border border-red-800/80' 
                  : 'bg-[#181818] text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-red-500" />
              <span>کادربندی بخش‌های کلیدی: {showAllHighlights ? 'فعال' : 'خاموش'}</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-[#222]">
          <Filter className="w-4 h-4 text-zinc-500 flex-shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-red-700 text-white font-bold shadow-md border border-red-600'
                  : 'bg-[#111] text-zinc-400 hover:text-white hover:bg-[#1c1c1c] border border-[#262626]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Document Grid */}
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-12 bg-[#111] rounded-2xl border border-[#262626]">
            <HelpCircle className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
            <p className="text-zinc-400 text-sm">مدرکی یافت نشد.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="mt-2 text-xs text-red-400 underline"
            >
              مشاهده همه اسناد
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDocuments.map((doc) => (
              <VisualDocumentCard
                key={doc.id}
                doc={doc}
                onOpenModal={onOpenModal}
                showHighlightsDefault={showAllHighlights}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

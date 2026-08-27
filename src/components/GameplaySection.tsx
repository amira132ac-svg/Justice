import React, { useState } from 'react';
import { 
  Gamepad2, 
  Video, 
  Play, 
  ExternalLink,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

interface VideoData {
  id: string;
  number: string;
  title: string;
  aparatId: string;
  aparatUrl: string;
  embedUrl: string;
}

const COMPARISON_VIDEOS: VideoData[] = [
  {
    id: 'video-1',
    number: 'ویدیو ۰۱',
    title: 'ویدیو ۰۱ — ابول / حمید صفر',
    aparatId: 'qzc6mpz',
    aparatUrl: 'https://www.aparat.com/v/qzc6mpz',
    embedUrl: 'https://www.aparat.com/video/video/embed/videohash/qzc6mpz/vt/frame',
  },
  {
    id: 'video-2',
    number: 'ویدیو ۰۲',
    title: 'ویدیو ۰۲ — ابول / حمید صفر',
    aparatId: 'wik24b6',
    aparatUrl: 'https://www.aparat.com/v/wik24b6',
    embedUrl: 'https://www.aparat.com/video/video/embed/videohash/wik24b6/vt/frame',
  },
];

export const GameplaySection: React.FC = () => {
  const [hasError, setHasError] = useState<{ [key: string]: boolean }>({});
  const [reloadKey, setReloadKey] = useState<{ [key: string]: number }>({
    'video-1': 0,
    'video-2': 0,
  });

  const handleRetry = (id: string) => {
    setHasError(prev => ({ ...prev, [id]: false }));
    setReloadKey(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <section id="gameplay-analysis" className="py-10 sm:py-14 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* ۱. مقایسه ابول و حمید صفر */}
        <div id="comparison-section" className="bg-[#111111] border border-[#242424] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-3">
            <Gamepad2 className="w-4 h-4" />
            <span>مقایسه ابول و حمید صفر</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            مقایسه ابول و حمید صفر
          </h2>

          <div className="p-4 sm:p-5 rounded-xl bg-[#161616] border border-red-900/30 mb-4">
            <p className="text-base sm:text-lg text-zinc-100 font-medium">
              در ویدیوهای ارائه‌شده، شباهت قابل مشاهده است.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2e2e2e] text-xs sm:text-sm text-zinc-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>حمید صفر — بازیکن تیم ملی</span>
          </div>
        </div>

        {/* ۲. ویدیوهای مقایسه‌ای */}
        <div id="comparative-videos" className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono mb-2">
              <Video className="w-4 h-4" />
              <span>ویدیوهای مقایسه‌ای</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ویدیوهای مقایسه‌ای
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              در ویدیوهای ارائه‌شده، شباهت قابل مشاهده است.
            </p>
          </div>

          {/* 2 Players Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {COMPARISON_VIDEOS.map((vid) => {
              const error = hasError[vid.id];

              return (
                <div
                  key={vid.id}
                  className="bg-[#111111] border border-[#242424] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between"
                >
                  {/* Player Top Bar */}
                  <div className="p-3.5 sm:p-4 bg-[#0d0d0d] border-b border-[#222] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {vid.title}
                      </h4>
                    </div>
                    <a
                      href={vid.aparatUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs text-zinc-400 hover:text-red-400 flex items-center gap-1 font-mono transition-colors"
                      title="مشاهده در آپارات"
                    >
                      <span>آپارات</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Player Frame Area */}
                  <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                    {error ? (
                      /* Fallback Box */
                      <div className="p-6 text-center space-y-3 bg-[#141414] w-full h-full flex flex-col items-center justify-center">
                        <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
                        <p className="text-xs sm:text-sm text-zinc-300">
                          پخش ویدیو در پلیر:
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleRetry(vid.id)}
                            className="px-3 py-1.5 rounded-lg bg-[#222] hover:bg-[#2e2e2e] text-xs text-white flex items-center gap-1.5 border border-[#333]"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>تلاش مجدد</span>
                          </button>
                          <a
                            href={vid.aparatUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="px-3.5 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-xs text-white font-bold flex items-center gap-1.5"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>مشاهده در آپارات</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      /* Direct Embedded Video Player */
                      <iframe
                        key={`${vid.id}-${reloadKey[vid.id] || 0}`}
                        src={vid.embedUrl}
                        title={vid.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                        className="w-full h-full border-0"
                        onError={() => setHasError(prev => ({ ...prev, [vid.id]: true }))}
                      />
                    )}
                  </div>

                  {/* Player Bottom Footer */}
                  <div className="p-3.5 bg-[#0d0d0d] border-t border-[#202020] flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-zinc-300 font-mono">
                      {vid.number}
                    </span>
                    <a
                      href={vid.aparatUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 font-mono"
                    >
                      <span>لینک مستقیم آپارات</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

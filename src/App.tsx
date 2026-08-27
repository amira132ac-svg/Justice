/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EVIDENCE_DOCUMENTS } from './data/evidenceData';
import { EvidenceDocument } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EvidenceSection } from './components/EvidenceSection';
import { FormerTeammatesSection } from './components/FormerTeammatesSection';
import { GameplaySection } from './components/GameplaySection';
import { StatisticsSection } from './components/StatisticsSection';
import { SummarySection } from './components/SummarySection';
import { EvidenceModal } from './components/EvidenceModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedDoc, setSelectedDoc] = useState<EvidenceDocument | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handlePrintDossier = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col selection:bg-red-600/30 selection:text-red-200">
      {/* Navigation Header */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onPrintDossier={handlePrintDossier}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {/* Hero Section with Headline and Subtitle */}
        <HeroSection />

        {/* 1. Account Evidence Section (بخش مدارک اکانت‌ها و تیم دریاسالار) */}
        <EvidenceSection
          documents={EVIDENCE_DOCUMENTS}
          onOpenModal={setSelectedDoc}
          searchQuery={searchQuery}
        />

        {/* 2. Former Teammates Statements (اظهارات هم‌تیمی‌های سابق) */}
        <FormerTeammatesSection />

        {/* 3. Gameplay Analysis & Comparative Videos (مقایسه ابول و حمید صفر & ویدیوهای مقایسه‌ای) */}
        <GameplaySection />

        {/* 4. Advance-Shark Verified Stats (بخش Advance-Shark) */}
        <StatisticsSection />

        {/* 5. Findings Summary Section (بخش جمع‌بندی) */}
        <SummarySection onPrintDossier={handlePrintDossier} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Evidence Full Inspection Modal */}
      <EvidenceModal
        doc={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </div>
  );
}


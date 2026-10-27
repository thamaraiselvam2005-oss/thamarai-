import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  FileCheck,
  Compass,
  Scroll,
  Shirt,
  Ship,
  Mountain,
  HeartPulse,
} from 'lucide-react';
import { TRAVEL_GUIDELINES } from '../data/tourismData';

export const TravelGuidelinesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Temple Etiquette',
    'Backwaters & Houseboat',
    'Mountain & Ghats Driving',
    'Local Food & Hygiene',
  ];

  const filteredGuidelines =
    selectedCategory === 'All'
      ? TRAVEL_GUIDELINES
      : TRAVEL_GUIDELINES.filter((g) => g.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Temple Etiquette':
        return <Shirt className="w-4 h-4 text-amber-700" />;
      case 'Backwaters & Houseboat':
        return <Ship className="w-4 h-4 text-sky-700" />;
      case 'Mountain & Ghats Driving':
        return <Mountain className="w-4 h-4 text-emerald-700" />;
      case 'Local Food & Hygiene':
        return <HeartPulse className="w-4 h-4 text-rose-700" />;
      default:
        return <Compass className="w-4 h-4 text-stone-700" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
          <span>Official Ground Regulations</span>
          <span aria-hidden="true">·</span>
          <span>Verified October 2026</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
          Travel Guidelines, Sacred Etiquette & Safety Protocols
        </h2>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Avoid costly fines, temple entry rejections, and hazardous ghat mishaps. These guidelines reflect the actual ground rules enforced by the Tamil Nadu HR&CE, Kerala Devaswom Board, Maritime authorities, and Forest departments.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Guidelines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGuidelines.map((guideline) => (
          <div
            key={guideline.id}
            className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-2">
                {getCategoryIcon(guideline.category)}
                <span>{guideline.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-800">Mandatory Guidance</span>
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                {guideline.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed mb-5">
                {guideline.summary}
              </p>

              {/* Two Column Dos and Don'ts */}
              <div className="space-y-4">
                {/* DOs */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>DO FOLLOW THESE INSTRUCTIONS</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {guideline.dos.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DONTs */}
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-rose-900 mb-2">
                    <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>DO NOT ENGAGE IN THE FOLLOWING</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {guideline.donts.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-700 font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Verification Footer Note */}
            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500">
              <FileCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>{guideline.verifiedNote}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

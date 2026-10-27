import React from 'react';
import { Search, MapPin, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedState: string;
  setSelectedState: (s: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedState,
  setSelectedState,
  selectedCategory,
  setSelectedCategory,
  onExploreClick,
}) => {
  const categories = [
    'All Categories',
    'Hill Station',
    'Backwaters',
    'Heritage & Temples',
    'Coastal & Beaches',
    'Waterfalls & Wildlife',
  ];

  return (
    <div className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg"
          alt="Misty tea gardens of Munnar in Western Ghats, Kerala"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Quiet Metadata Kicker */}
          <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-4 tracking-wide">
            <span>OFFICIAL GUIDELINE PORTAL</span>
            <span aria-hidden="true">·</span>
            <span>KERALA & TAMIL NADU</span>
            <span aria-hidden="true">·</span>
            <span>VERIFIED OCTOBER 2026</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-5" style={{ textWrap: 'balance' }}>
            Discover South India with Verified Truth, Not Exaggerated Ads.
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Ground-verified itineraries, entry hours, authentic room amenities, local cuisine, and direct routes curated by senior tourism expert <strong className="text-white font-semibold">Thamarai Selvam</strong> from Trichy, Tamil Nadu.
          </p>

          {/* Interactive Search & Filter Box */}
          <div className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl text-stone-900 border border-white/20">
            {/* Row 1: State Filter Buttons & Query Input */}
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              {/* State Segmented Buttons */}
              <div className="inline-flex p-1 bg-stone-100 rounded-lg shrink-0">
                {['All States', 'Kerala', 'Tamil Nadu'].map((stateName) => {
                  const stateVal = stateName === 'All States' ? 'All' : stateName;
                  const isActive = selectedState === stateVal;
                  return (
                    <button
                      key={stateName}
                      type="button"
                      onClick={() => setSelectedState(stateVal)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-emerald-900 text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {stateName}
                    </button>
                  );
                })}
              </div>

              {/* Main Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Munnar, Alleppey, Srirangam, temples, waterfalls..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 text-stone-900 placeholder-stone-400"
                />
              </div>

              <button
                type="button"
                onClick={onExploreClick}
                className="px-5 py-2 text-sm font-semibold text-white bg-emerald-900 rounded-lg hover:bg-emerald-800 transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Search</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Row 2: Theme Quick Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs text-stone-600 scrollbar-none">
              <span className="font-medium text-stone-400 whitespace-nowrap pr-1">Themes:</span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-amber-100 text-amber-900 font-semibold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quiet Trust Evidence Adjacency */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Zero invented prices or fake star ratings
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Detailed routes from Trichy, Chennai & Kochi
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Verified local food specialties & FSSAI hygiene
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

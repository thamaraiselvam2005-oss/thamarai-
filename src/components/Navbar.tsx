import React, { useState } from 'react';
import { Compass, Bookmark, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { OWNER_INFO } from '../data/tourismData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  openItinerary: () => void;
  openContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  openItinerary,
  openContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'destinations', label: 'Destinations' },
    { id: 'hotels', label: 'Hotels & Stays' },
    { id: 'food', label: 'Food & Dining' },
    { id: 'guidelines', label: 'Travel Guidelines' },
    { id: 'about', label: 'About & Owner' },
    { id: 'faq', label: 'FAQs' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Verification notification banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>
          Ground-verified Kerala & Tamil Nadu Tourism Guidelines · Updated for 2026 Season
        </span>
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => handleNavClick('destinations')}
          className="text-left flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center shadow-xs group-hover:bg-emerald-700 transition-colors">
            <Compass className="w-5 h-5 text-amber-300" />
          </div>
          <div className="whitespace-nowrap shrink-0">
            <span className="font-serif text-lg sm:text-xl font-extrabold tracking-tight text-stone-950 group-hover:text-emerald-900 transition-colors block leading-tight">
              Thamarai Selvam
            </span>
            <span className="text-[11px] tracking-wider uppercase text-emerald-800 font-bold block">
              Tourist Guidelines Master · Trichy
            </span>
          </div>
        </button>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                  isActive
                    ? 'text-emerald-800 font-semibold border-b-2 border-emerald-800'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Saved Itinerary button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openItinerary}
            className="relative p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            title="Saved Itinerary Items"
            aria-label="View Saved Itinerary Items"
          >
            <Bookmark className="w-4 h-4 text-emerald-800" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[11px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={openContact}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-emerald-900 rounded-lg hover:bg-emerald-800 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>Plan My Trip</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === link.id
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-emerald-900 rounded-lg shadow-xs"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Contact Thamarai Selvam Office</span>
            </button>
            <div className="text-center text-xs text-stone-500 pt-1">
              Direct Helpline: {OWNER_INFO.displayPhone}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

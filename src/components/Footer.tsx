import React from 'react';
import { Compass, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { OWNER_INFO } from '../data/tourismData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openContact: () => void;
  openLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  openContact,
  openLegal,
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Founder Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
                <Compass className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                Tourist Guidelines Master
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              Curated ground intelligence for travelers discovering Kerala, Tamil Nadu, and South India. Zero inflated tariffs, zero fake reviews.
            </p>

            <div className="pt-1 text-[11px] text-stone-400">
              Founder & Director: <strong className="text-white font-semibold">{OWNER_INFO.name}</strong>
            </div>
          </div>

          {/* Col 2: Navigation Quick Links */}
          <div className="space-y-3">
            <span className="block font-serif font-bold text-sm text-white tracking-wide">
              Explore Guidelines
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('destinations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Destinations & Sightseeing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('hotels');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hotels & Room Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('food');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Restaurants & Regional Food
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('guidelines');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Temple & Safety Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Thamarai Selvam
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Destinations */}
          <div className="space-y-3">
            <span className="block font-serif font-bold text-sm text-white tracking-wide">
              Featured Circuits
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <span>Kerala: Munnar · Alleppey · Fort Kochi · Wayanad · Thekkady · Kovalam · Athirappilly</span>
              </li>
              <li className="pt-1">
                <span>Tamil Nadu: Trichy Srirangam · Madurai Meenakshi · Ooty · Kodaikanal · Rameswaram · Thanjavur Big Temple · Mahabalipuram · Kanyakumari</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Verification */}
          <div className="space-y-3">
            <span className="block font-serif font-bold text-sm text-white tracking-wide">
              Official Bureau
            </span>

            <div className="space-y-2 text-stone-400 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{OWNER_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href={`tel:${OWNER_INFO.phone}`} className="hover:text-white">
                  {OWNER_INFO.displayPhone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href={`mailto:${OWNER_INFO.email}`} className="hover:text-white">
                  {OWNER_INFO.email}
                </a>
              </p>

              <div className="pt-2">
                <button
                  onClick={openContact}
                  className="w-full px-3 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors cursor-pointer text-center"
                >
                  Send Direct Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>
              © 2026 Tourist Guidelines Master. Curated by Thamarai Selvam. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openLegal('privacy')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => openLegal('terms')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <span>PIN: 621011 Trichy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

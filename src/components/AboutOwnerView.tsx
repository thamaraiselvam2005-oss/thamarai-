import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  FileCheck2,
  Compass,
} from 'lucide-react';
import { OWNER_INFO } from '../data/tourismData';

interface AboutOwnerViewProps {
  onOpenContact: () => void;
}

export const AboutOwnerView: React.FC<AboutOwnerViewProps> = ({ onOpenContact }) => {
  return (
    <div className="space-y-10">
      {/* Editorial Hero Intro */}
      <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
            <span>ABOUT THE FOUNDER & PLATFORM</span>
            <span aria-hidden="true">·</span>
            <span>TIRUCHIRAPPALLI, TAMIL NADU</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight mb-4">
            "A traveler deserves the ground truth before booking their hard-earned journey."
          </h2>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light mb-6">
            Welcome to <strong>Tourist Guidelines Master</strong>. Founded by <strong>Thamarai Selvam</strong>, this portal was born out of a critical mission: to eradicate misleading hotel photos, inflated middleman commissions, and inaccurate travel advice that often ruin vacations for Indian families and foreign visitors exploring South India.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 font-semibold text-white transition-colors cursor-pointer shadow-xs"
            >
              Contact Thamarai Selvam
            </button>
            <div className="text-stone-400">
              Direct Helpline: <span className="text-white font-medium">{OWNER_INFO.displayPhone}</span>
            </div>
          </div>
        </div>

        {/* Subtle decorative background watermark */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Grid of Founder Information & Methodology */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Official Registered Contact Card */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-emerald-900 text-amber-300 flex items-center justify-center font-serif text-xl font-bold">
                TS
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {OWNER_INFO.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {OWNER_INFO.role}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-stone-700 border-t border-stone-100 pt-4 mb-6">
              <div>
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                  Registered Headquarters
                </span>
                <p className="flex items-start gap-2 text-stone-800 leading-relaxed">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{OWNER_INFO.address}</span>
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                  Direct Assistance Phone
                </span>
                <p className="flex items-center gap-2 text-stone-800 font-medium">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0" />
                  <a href={`tel:${OWNER_INFO.phone}`} className="hover:text-emerald-900">
                    {OWNER_INFO.displayPhone}
                  </a>
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                  Direct Inquiries Email
                </span>
                <p className="flex items-center gap-2 text-stone-800 font-medium">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0" />
                  <a href={`mailto:${OWNER_INFO.email}`} className="hover:text-emerald-900">
                    {OWNER_INFO.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg text-stone-500 text-[11px] border border-stone-200/80">
            <span className="font-semibold text-stone-800 block mb-0.5">Privacy & Fair Practice:</span>
            We do not sell personal tourist information or spam travelers. Personal details are protected according to the Information Technology Act of India.
          </div>
        </div>

        {/* Right 2 Columns: Core Guarantees & Philosophy */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
              The Tourist Guidelines Master Quality Charter
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              Unlike generic corporate booking aggregator sites that profit by boosting whoever pays the highest advertising bid, our database follows four unbendable pillars:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-800" />
                  <span>1. Zero Fabricated Tariffs</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  We never invent discount pricing or hide seasonal surges. What you see is the verified rack rate and typical off-season to peak-season range.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold mb-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-800" />
                  <span>2. Explicit In-Room Amenities</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  If a hotel lacks air conditioning (common in Munnar or Ooty) or has no elevator ramps for wheelchair users, we explicitly label it so you are never surprised upon arrival.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold mb-1.5">
                  <Award className="w-4 h-4 text-emerald-800" />
                  <span>3. Authentic Food Recommendations</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  From traditional banana leaf meals in Srirangam to authentic Syrian Christian duck roasts in Alleppey, we verify local hygiene and FSSAI standards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold mb-1.5">
                  <Globe2 className="w-4 h-4 text-emerald-800" />
                  <span>4. Scalable Pan-India Coverage</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Beginning with our home districts across Tamil Nadu and neighboring Kerala, we are methodically expanding across all 28 Indian States and Union Territories.
                </p>
              </div>
            </div>
          </div>

          {/* Regional Hub Focus: Trichy to South India */}
          <div className="bg-emerald-950 text-emerald-50 rounded-xl p-6 border border-emerald-900">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Strategic Geographic Center: Tiruchirappalli</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              Why Trichy is the Ideal Crossroads for South Indian Tourism
            </h4>
            <p className="text-xs text-emerald-200 leading-relaxed">
              Situated in the exact geographic center of Tamil Nadu with high-speed road access to Chennai (NH45), Madurai (NH44), Coimbatore, and the mountain corridors of Dindigul into Kerala, Trichy enables seamless multi-state tourism circuits that minimize backtracking and maximize sightseeing time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

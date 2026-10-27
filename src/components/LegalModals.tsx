import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { OWNER_INFO } from '../data/tourismData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-emerald-800" />
            ) : (
              <FileText className="w-5 h-5 text-emerald-800" />
            )}
            <h3 className="font-serif font-bold text-stone-900 text-lg">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs text-stone-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-stone-900">
                Last Updated: October 2026 · Tourist Guidelines Master
              </p>
              <p>
                Tourist Guidelines Master (operated under the leadership of Thamarai Selvam, Thuraiyur Main Road, Trichy District, Tamil Nadu, PIN 621011) is committed to protecting the privacy and personal data of every traveler who uses our platform.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">1. Information Collection & Usage</h4>
              <p>
                When you submit an inquiry for hotel bookings, route consultation, or itinerary assistance, we collect your name, mobile contact number, email address, and destination preferences. This data is used solely to coordinate direct tourism services and verified bookings with certified property managers and travel drivers.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">2. Zero Data Selling & Anti-Spam</h4>
              <p>
                We do NOT sell, rent, or trade your personal data to marketing third parties or automated telemarketers. You will only be contacted regarding your explicit travel inquiry.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">3. Protection of Contact Details</h4>
              <p>
                Personal contact details submitted by users are stored securely. Furthermore, the website owner’s personal direct channels are guarded to maintain professional communication standards under the Information Technology Act (2000) of India.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">4. Contact Data Officer</h4>
              <p>
                For data privacy inquiries or requests to remove your submitted information from our records, write to: <strong>{OWNER_INFO.email}</strong> or postal address: {OWNER_INFO.address}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-stone-900">
                Effective Date: October 2026 · Tourist Guidelines Master
              </p>
              <p>
                By accessing or utilizing the information published on Tourist Guidelines Master, you agree to comply with the terms and conditions outlined herein.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">1. Nature of the Service</h4>
              <p>
                Tourist Guidelines Master is an independent advisory and intelligence portal. We compile ground-verified tourist information, estimated entry fees, opening hours, route distances, and room amenities across Kerala, Tamil Nadu, and Indian states to empower independent travelers.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">2. Information Verification & Disclaimers</h4>
              <p>
                All information regarding museum hours, national park permits, temple darshan timings, and room tariffs is verified as of the date stamp shown on each destination profile. While every effort is made to maintain absolute accuracy, timings and tariffs may be subject to unexpected changes by governmental bodies, forest departments, or local weather conditions.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">3. Direct Hotel Relationships</h4>
              <p>
                Bookings made through verified inquiry channels link directly to respective property managements. Any transaction or stay agreement is directly between the guest and the property operator.
              </p>

              <h4 className="font-bold text-stone-900 text-sm pt-2">4. Jurisdiction</h4>
              <p>
                Any legal disputes arising from advisory services are subject to the exclusive jurisdiction of the civil courts in Tiruchirappalli (Trichy), Tamil Nadu, India.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-xs text-white bg-emerald-900 rounded-lg hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};

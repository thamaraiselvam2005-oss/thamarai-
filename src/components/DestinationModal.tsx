import React, { useState } from 'react';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Ticket,
  Plane,
  Train,
  Car,
  ShieldCheck,
  ExternalLink,
  Bookmark,
  Building2,
  UtensilsCrossed,
  AlertCircle,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { Destination } from '../types/tourism';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (destination: Destination) => void;
  onViewHotels: (destId: string) => void;
  onViewRestaurants: (destId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  isSaved,
  onToggleSave,
  onViewHotels,
  onViewRestaurants,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'attractions' | 'routes' | 'culture' | 'contacts'>('attractions');

  if (!destination) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${destination.name} ${destination.district} ${destination.state} tourism attractions`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header Media Banner */}
        <div className="relative h-56 sm:h-72 bg-stone-900 shrink-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top action: Save to Itinerary */}
          <button
            onClick={() => onToggleSave(destination)}
            className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer z-10 ${
              isSaved
                ? 'bg-emerald-800 text-white'
                : 'bg-white/90 text-stone-800 hover:bg-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved in Itinerary' : 'Save to Itinerary'}</span>
          </button>

          {/* Destination Title & Core Metadata */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1">
              <span>{destination.state.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>{destination.district} DISTRICT</span>
              <span aria-hidden="true">·</span>
              <span>{destination.category}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {destination.name}
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 italic line-clamp-1">
              "{destination.tagline}"
            </p>
          </div>
        </div>

        {/* Quick Links & Verification Header Bar */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-900 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{destination.verifiedDate}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600">Verified by Thamarai Selvam Team</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onViewHotels(destination.id);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-200/80 hover:bg-emerald-100 hover:text-emerald-900 text-stone-800 font-medium transition-colors cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-800" />
              <span>Nearby Hotels</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onViewRestaurants(destination.id);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-200/80 hover:bg-emerald-100 hover:text-emerald-900 text-stone-800 font-medium transition-colors cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-800" />
              <span>Local Food</span>
            </button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-white px-4 sm:px-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveSubTab('attractions')}
            className={`py-3 px-4 text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors border-b-2 ${
              activeSubTab === 'attractions'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Attractions & Hours ({destination.attractions.length})
          </button>
          <button
            onClick={() => setActiveSubTab('routes')}
            className={`py-3 px-4 text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors border-b-2 ${
              activeSubTab === 'routes'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Travel Routes & Distances
          </button>
          <button
            onClick={() => setActiveSubTab('culture')}
            className={`py-3 px-4 text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors border-b-2 ${
              activeSubTab === 'culture'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Best Season & Cultural Tips
          </button>
          <button
            onClick={() => setActiveSubTab('contacts')}
            className={`py-3 px-4 text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors border-b-2 ${
              activeSubTab === 'contacts'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Emergency & Helplines
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800">
          {/* Overview text always present */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              Destination Overview
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* TAB 1: Attractions */}
          {activeSubTab === 'attractions' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                Verified Sightseeing Attractions & Ticket Tariffs
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.attractions.map((attr, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h5 className="font-semibold text-stone-900 text-sm">
                          {attr.name}
                        </h5>
                        <span className="text-[10px] font-medium bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full shrink-0">
                          Verified
                        </span>
                      </div>

                      <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                        {attr.description}
                      </p>

                      <div className="space-y-1.5 text-xs text-stone-700">
                        <div className="flex items-start gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                          <span><strong>Hours:</strong> {attr.verifiedHours}</span>
                        </div>

                        <div className="flex items-start gap-1.5">
                          <Ticket className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span><strong>Entry Tariff:</strong> {attr.entryFee}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md">
                        {attr.highlight}
                      </span>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${attr.mapQuery} ${destination.state}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-500 hover:text-emerald-900 text-[11px] flex items-center gap-1"
                      >
                        <span>Map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Routes & Distances */}
          {activeSubTab === 'routes' && (
            <div className="space-y-6">
              {/* Distance Matrix Table */}
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Road Distances from Major Regional Hubs
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="block text-[11px] text-emerald-900 font-semibold mb-1">Trichy (Base)</span>
                    <strong className="text-base text-emerald-950 font-bold tabular-nums">
                      {destination.hubDistances.fromTrichyKm} km
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="block text-[11px] text-stone-600 font-medium mb-1">Chennai</span>
                    <strong className="text-base text-stone-900 font-bold tabular-nums">
                      {destination.hubDistances.fromChennaiKm} km
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="block text-[11px] text-stone-600 font-medium mb-1">Kochi</span>
                    <strong className="text-base text-stone-900 font-bold tabular-nums">
                      {destination.hubDistances.fromKochiKm} km
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="block text-[11px] text-stone-600 font-medium mb-1">Madurai</span>
                    <strong className="text-base text-stone-900 font-bold tabular-nums">
                      {destination.hubDistances.fromMaduraiKm} km
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="block text-[11px] text-stone-600 font-medium mb-1">Bangalore</span>
                    <strong className="text-base text-stone-900 font-bold tabular-nums">
                      {destination.hubDistances.fromBangaloreKm} km
                    </strong>
                  </div>
                </div>
              </div>

              {/* Transit Modes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Air */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 font-semibold text-stone-900 mb-2">
                    <Plane className="w-4 h-4 text-emerald-800" />
                    <span>By Flight</span>
                  </div>
                  <p className="text-stone-700 mb-1.5 font-medium">
                    {destination.travelRoutes.air.nearestAirport}
                  </p>
                  <p className="text-stone-500 mb-2">
                    Distance: <strong className="tabular-nums font-semibold text-stone-800">{destination.travelRoutes.air.distanceKm} km</strong>
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    {destination.travelRoutes.air.travelTip}
                  </p>
                </div>

                {/* Train */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 font-semibold text-stone-900 mb-2">
                    <Train className="w-4 h-4 text-emerald-800" />
                    <span>By Train</span>
                  </div>
                  <p className="text-stone-700 mb-1.5 font-medium">
                    {destination.travelRoutes.train.nearestStation}
                  </p>
                  <p className="text-stone-500 mb-2">
                    Distance: <strong className="tabular-nums font-semibold text-stone-800">{destination.travelRoutes.train.distanceKm} km</strong>
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    {destination.travelRoutes.train.travelTip}
                  </p>
                </div>

                {/* Road */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 font-semibold text-stone-900 mb-2">
                    <Car className="w-4 h-4 text-emerald-800" />
                    <span>By Road & Cab</span>
                  </div>
                  <p className="text-stone-700 mb-1.5 font-medium">
                    {destination.travelRoutes.road.majorHighways}
                  </p>
                  <p className="text-stone-600 mb-2">
                    {destination.travelRoutes.road.busConnectivity}
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    {destination.travelRoutes.road.cabTips}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Culture & Best Season */}
          {activeSubTab === 'culture' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1">
                  <Calendar className="w-4 h-4 text-amber-800" />
                  <span>Recommended Visiting Period</span>
                </div>
                <p className="text-xs text-amber-950 font-medium mb-1">
                  {destination.bestSeason}
                </p>
                <p className="text-xs text-stone-700">
                  {destination.weatherNotes}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Ground Etiquette & Travel Advice
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {destination.localCultureTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: Emergency Contacts */}
          {activeSubTab === 'contacts' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-2 text-rose-800 font-semibold mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Local Verified Helpline Directory ({destination.name})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold text-stone-400 uppercase block mb-1">Local Police</span>
                  <div className="flex items-center gap-2 text-stone-900 font-semibold">
                    <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
                    <span>{destination.emergencyContacts.police}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold text-stone-400 uppercase block mb-1">Nearest Government Hospital</span>
                  <div className="flex items-center gap-2 text-stone-900 font-semibold">
                    <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
                    <span>{destination.emergencyContacts.hospital}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold text-stone-400 uppercase block mb-1">State Tourism Helpline</span>
                  <div className="flex items-center gap-2 text-stone-900 font-semibold">
                    <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
                    <span>{destination.emergencyContacts.touristHelpline}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-stone-100 text-stone-600 text-[11px]">
                Tip: Dial <strong>112</strong> anywhere in India for national emergency response (Police, Fire, Ambulance).
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 border-t border-stone-200 px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-stone-600">
          <span>Tourist Guidelines Master · Curated by Thamarai Selvam</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

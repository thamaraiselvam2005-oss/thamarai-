import React from 'react';
import {
  X,
  Bookmark,
  Trash2,
  Printer,
  Share2,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { Destination, Hotel } from '../types/tourism';
import { OWNER_INFO } from '../data/tourismData';

interface ItineraryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedDestinations: Destination[];
  savedHotels: Hotel[];
  onRemoveDestination: (id: string) => void;
  onRemoveHotel: (id: string) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectHotel: (hotel: Hotel) => void;
  onOpenContact: () => void;
}

export const ItineraryDrawer: React.FC<ItineraryDrawerProps> = ({
  isOpen,
  onClose,
  savedDestinations,
  savedHotels,
  onRemoveDestination,
  onRemoveHotel,
  onSelectDestination,
  onSelectHotel,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const totalSaved = savedDestinations.length + savedHotels.length;

  const totalEstimatedStayTariff = savedHotels.reduce(
    (acc, h) => acc + h.approxPricePerNight,
    0
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-stone-200">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-800" />
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-base">
                Your Saved Itinerary Planner
              </h3>
              <span className="text-xs text-stone-500 font-medium">
                {totalSaved} items bookmarked
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-6 flex-1 text-xs text-stone-700">
          {totalSaved === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <Bookmark className="w-6 h-6" />
              </div>
              <p className="font-serif font-semibold text-stone-800 text-sm">
                No Destinations or Hotels Saved Yet
              </p>
              <p className="text-stone-500 leading-relaxed text-xs">
                Click the bookmark icon on any tourist destination or verified hotel to compile your customized holiday itinerary here.
              </p>
            </div>
          ) : (
            <>
              {/* Saved Destinations Group */}
              {savedDestinations.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-stone-400 uppercase tracking-wider text-[11px]">
                      Selected Destinations ({savedDestinations.length})
                    </span>
                  </div>

                  <div className="space-y-2">
                    {savedDestinations.map((dest) => (
                      <div
                        key={dest.id}
                        className="p-3 rounded-lg border border-stone-200 bg-stone-50/50 flex items-center justify-between gap-3 hover:border-emerald-300 transition-colors"
                      >
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => {
                            onClose();
                            onSelectDestination(dest);
                          }}
                        >
                          <h4 className="font-semibold text-stone-900 text-xs hover:text-emerald-900">
                            {dest.name} ({dest.state})
                          </h4>
                          <p className="text-[11px] text-stone-500 line-clamp-1">
                            {dest.category} · Best: {dest.bestSeason.split('(')[0]}
                          </p>
                        </div>

                        <button
                          onClick={() => onRemoveDestination(dest.id)}
                          className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                          title="Remove destination"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Hotels Group */}
              {savedHotels.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-stone-400 uppercase tracking-wider text-[11px]">
                      Selected Accommodations ({savedHotels.length})
                    </span>
                  </div>

                  <div className="space-y-2">
                    {savedHotels.map((h) => (
                      <div
                        key={h.id}
                        className="p-3 rounded-lg border border-stone-200 bg-stone-50/50 flex items-center justify-between gap-3 hover:border-emerald-300 transition-colors"
                      >
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => {
                            onClose();
                            onSelectHotel(h);
                          }}
                        >
                          <h4 className="font-semibold text-stone-900 text-xs hover:text-emerald-900">
                            {h.name}
                          </h4>
                          <p className="text-[11px] text-stone-500">
                            {h.destinationName} · Approx ₹{h.approxPricePerNight.toLocaleString('en-IN')}/night
                          </p>
                        </div>

                        <button
                          onClick={() => onRemoveHotel(h.id)}
                          className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                          title="Remove stay"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Estimated Budget Summary */}
              {savedHotels.length > 0 && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="block text-[11px] text-emerald-900 font-semibold mb-1">
                    Estimated Combined Stay Tariff (1 Night / hotel)
                  </span>
                  <div className="text-lg font-bold text-emerald-950 tabular-nums">
                    ₹{totalEstimatedStayTariff.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-stone-500">
                    Subject to seasonal variance; verified rack rate range.
                  </span>
                </div>
              )}

              {/* Print / Export Action */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Checklist</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full py-2.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-300" />
            <span>Send Saved Itinerary for Verification</span>
          </button>
          <div className="text-[10px] text-center text-stone-500">
            Thamarai Selvam Consulting · Trichy PIN 621011
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { MapPin, Calendar, Clock, Bookmark, ChevronRight, Navigation } from 'lucide-react';
import { Destination } from '../types/tourism';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
  isSaved: boolean;
  onToggleSave: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  return (
    <article className="group bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col hover:border-stone-300 hover:shadow-md transition-all duration-200">
      {/* Top Image Container with Fallback */}
      <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
        <img
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.district}, ${destination.state}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
          onError={(e) => {
            // Graceful styled fallback container
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* State / Region subtle unboxed badge */}
        <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
          {destination.state} · {destination.district}
        </div>

        {/* Save to Itinerary Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(destination);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
            isSaved
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white/90 text-stone-700 hover:bg-white hover:text-emerald-900'
          }`}
          aria-label={isSaved ? 'Remove from saved' : 'Save destination'}
          title={isSaved ? 'Saved to Travel Itinerary' : 'Save to Travel Itinerary'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Category quiet overlay tag */}
        <div className="absolute bottom-2 left-3 text-stone-200 text-xs font-medium drop-shadow-sm flex items-center gap-1">
          <MapPin className="w-3 h-3 text-amber-300" />
          <span>{destination.category}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span className="font-semibold text-emerald-800">{destination.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-stone-400" />
              <span>{destination.bestSeason.split('(')[0].trim()}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{destination.verifiedDate}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors mb-1">
            {destination.name}
          </h3>

          <p className="text-xs font-medium text-stone-600 italic mb-3 line-clamp-1">
            "{destination.tagline}"
          </p>

          <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-4">
            {destination.description}
          </p>

          {/* Key Attractions Preview */}
          <div className="border-t border-stone-100 pt-3 mb-4">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
              Verified Key Highlights ({destination.attractions.length})
            </span>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {destination.attractions.slice(0, 2).map((attr, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="line-clamp-1">
                    <strong className="font-medium text-stone-900">{attr.name}</strong>: {attr.highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Distance from Central Hub (Trichy / Origin) */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
          <div className="text-stone-500 flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Trichy: <strong className="font-medium text-stone-800 tabular-nums">{destination.hubDistances.fromTrichyKm} km</strong></span>
            <span aria-hidden="true">·</span>
            <span>Kochi: <strong className="font-medium text-stone-800 tabular-nums">{destination.hubDistances.fromKochiKm} km</strong></span>
          </div>

          <button
            onClick={() => onSelect(destination)}
            className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer text-xs"
          >
            <span>Full Guide</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

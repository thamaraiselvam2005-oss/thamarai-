import React from 'react';
import {
  Star,
  MapPin,
  Wifi,
  Wind,
  Car,
  Bath,
  Flame,
  Users,
  Accessibility,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { Hotel } from '../types/tourism';

interface HotelCardProps {
  hotel: Hotel;
  onSelect: (hotel: Hotel) => void;
  isSaved: boolean;
  onToggleSave: (hotel: Hotel) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({
  hotel,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  return (
    <article className="group bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col hover:border-stone-300 hover:shadow-md transition-all duration-200">
      {/* Hotel Image with Fallback */}
      <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
        <img
          src={hotel.image}
          alt={`${hotel.name}, ${hotel.destinationName}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* State / Category unboxed pill */}
        <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
          {hotel.state} · {hotel.category}
        </div>

        {/* Bookmark action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(hotel);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
            isSaved
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white/90 text-stone-700 hover:bg-white hover:text-emerald-900'
          }`}
          aria-label={isSaved ? 'Remove stay from saved' : 'Save stay to itinerary'}
          title={isSaved ? 'Saved in Itinerary' : 'Save to Itinerary'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Verified Price Tag */}
        <div className="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-right">
          <div className="text-[10px] text-stone-300 font-medium leading-none">Starting from</div>
          <div className="text-base font-bold tabular-nums text-amber-300">
            ₹{hotel.approxPricePerNight.toLocaleString('en-IN')}
            <span className="text-xs font-normal text-stone-200"> / night</span>
          </div>
        </div>
      </div>

      {/* Hotel Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span className="font-semibold text-emerald-800">{hotel.destinationName}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-amber-700 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{hotel.starRating} Verified Rating</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{hotel.verifiedDate}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors mb-1 line-clamp-1">
            {hotel.name}
          </h3>

          <p className="text-xs text-stone-500 flex items-start gap-1 mb-3 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <span>{hotel.address}</span>
          </p>

          {/* Room types snippet */}
          <div className="mb-3 p-2.5 rounded-lg bg-stone-50 text-xs text-stone-700">
            <span className="font-semibold text-stone-900 block mb-1">
              Available Room Options ({hotel.roomTypes.length}):
            </span>
            <div className="text-stone-600 line-clamp-1">
              {hotel.roomTypes.map((rt) => `${rt.type} (₹${rt.approxPrice})`).join(' · ')}
            </div>
          </div>

          {/* Verified Room Facilities Matrix */}
          <div className="mb-3">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
              Verified In-Room Facilities
            </span>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-xs">
              {/* AC */}
              <div className="flex items-center gap-1.5">
                <Wind className={`w-3.5 h-3.5 ${hotel.facilities.hasAC ? 'text-emerald-700' : 'text-stone-300'}`} />
                <span className={hotel.facilities.hasAC ? 'text-stone-800 font-medium' : 'text-stone-400 line-through'}>
                  {hotel.facilities.hasAC ? 'Air Conditioning' : 'AC (Not Required/Heater)'}
                </span>
              </div>

              {/* Wi-Fi */}
              <div className="flex items-center gap-1.5">
                <Wifi className={`w-3.5 h-3.5 ${hotel.facilities.hasWifi ? 'text-emerald-700' : 'text-stone-300'}`} />
                <span className={hotel.facilities.hasWifi ? 'text-stone-800 font-medium' : 'text-stone-400'}>
                  High-Speed Wi-Fi
                </span>
              </div>

              {/* Parking */}
              <div className="flex items-center gap-1.5">
                <Car className={`w-3.5 h-3.5 ${hotel.facilities.hasParking ? 'text-emerald-700' : 'text-stone-300'}`} />
                <span className={hotel.facilities.hasParking ? 'text-stone-800 font-medium' : 'text-stone-400'}>
                  Free Parking
                </span>
              </div>

              {/* Attached Bathroom */}
              <div className="flex items-center gap-1.5">
                <Bath className={`w-3.5 h-3.5 ${hotel.facilities.hasAttachedBath ? 'text-emerald-700' : 'text-stone-300'}`} />
                <span className={hotel.facilities.hasAttachedBath ? 'text-stone-800 font-medium' : 'text-stone-400'}>
                  Attached Bath & Geyser
                </span>
              </div>

              {/* Family Rooms */}
              <div className="flex items-center gap-1.5">
                <Users className={`w-3.5 h-3.5 ${hotel.facilities.hasFamilyRooms ? 'text-emerald-700' : 'text-stone-300'}`} />
                <span className={hotel.facilities.hasFamilyRooms ? 'text-stone-800 font-medium' : 'text-stone-400'}>
                  Family Rooms
                </span>
              </div>

              {/* Accessibility */}
              <div className="flex items-center gap-1.5">
                <Accessibility className={`w-3.5 h-3.5 ${hotel.facilities.hasWheelchairAccess ? 'text-emerald-700' : 'text-stone-300'}`} />
                <span className={hotel.facilities.hasWheelchairAccess ? 'text-stone-800 font-medium' : 'text-stone-400'}>
                  {hotel.facilities.hasWheelchairAccess ? 'Wheelchair Friendly' : 'Step Access Only'}
                </span>
              </div>
            </div>
          </div>

          {/* Facility Note if any */}
          {hotel.unverifiedFacilitiesNote && (
            <p className="text-[11px] text-stone-500 italic bg-amber-50/70 p-2 rounded-md mb-2">
              Note: {hotel.unverifiedFacilitiesNote}
            </p>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
          <div className="text-stone-500 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Price Verified 2026</span>
          </div>

          <button
            onClick={() => onSelect(hotel)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition-colors cursor-pointer text-xs shadow-xs"
          >
            <span>View Rooms & Inquire</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

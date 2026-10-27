import React, { useState } from 'react';
import {
  X,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Building,
  Wind,
  Wifi,
  Car,
  Bath,
  Flame,
  Accessibility,
  Bookmark,
  Send,
} from 'lucide-react';
import { Hotel, RoomType } from '../types/tourism';
import { OWNER_INFO } from '../data/tourismData';

interface HotelModalProps {
  hotel: Hotel | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (hotel: Hotel) => void;
}

export const HotelModal: React.FC<HotelModalProps> = ({
  hotel,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [nights, setNights] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);

  // Form State
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('2026-11-15');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!hotel) return null;

  const currentRoom: RoomType = hotel.roomTypes[selectedRoomIndex] || hotel.roomTypes[0];
  const estimatedTotal = currentRoom.approxPrice * nights * roomsCount;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      setFormError('Please enter your full name and mobile contact number.');
      return;
    }
    setFormError('');
    setIsSubmitted(true);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${hotel.name} ${hotel.address} ${hotel.state}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="relative h-48 sm:h-60 bg-stone-900 shrink-0">
          <img
            src={hotel.image}
            alt={hotel.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Save to Itinerary Bookmark Button */}
          <button
            onClick={() => onToggleSave(hotel)}
            className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer z-10 ${
              isSaved
                ? 'bg-emerald-800 text-white'
                : 'bg-white/90 text-stone-800 hover:bg-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved in Itinerary' : 'Save to Itinerary'}</span>
          </button>

          {/* Title & Location in header */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1">
              <span>{hotel.category.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>{hotel.destinationName} ({hotel.state})</span>
              <span aria-hidden="true">·</span>
              <span>RATING: {hotel.starRating} / 5</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {hotel.name}
            </h2>

            <p className="text-xs text-stone-300 flex items-center gap-1 line-clamp-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>{hotel.address}</span>
            </p>
          </div>
        </div>

        {/* Verification Strip */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-900 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Tariff Verified: {hotel.verifiedDate}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600">Zero Commission Direct Guidance</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${hotel.phone}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-200 text-stone-800 hover:bg-stone-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-600" />
              <span>{hotel.phone}</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Location Map</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800">
          {/* Section 1: Room Selector & Price Estimator */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
              1. Select Room Category & Calculate Approximate Cost
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {hotel.roomTypes.map((room, idx) => {
                const isSelected = selectedRoomIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedRoomIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-800 bg-emerald-50/60 ring-2 ring-emerald-800/20'
                        : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-stone-900 text-xs">
                        {room.type}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone-500 mb-2 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>
                    <div className="text-xs font-bold text-emerald-900 tabular-nums">
                      ₹{room.approxPrice.toLocaleString('en-IN')}{' '}
                      <span className="font-normal text-[10px] text-stone-500">/ night</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Calculation Panel */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 mb-1">
                    Number of Nights
                  </label>
                  <select
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="bg-white border border-stone-200 rounded-md px-2.5 py-1 text-xs font-semibold text-stone-800 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 7, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Night' : 'Nights'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-stone-500 mb-1">
                    Rooms Required
                  </label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="bg-white border border-stone-200 rounded-md px-2.5 py-1 text-xs font-semibold text-stone-800 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map((r) => (
                      <option key={r} value={r}>
                        {r} {r === 1 ? 'Room' : 'Rooms'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-right">
                <span className="block text-[11px] text-stone-500">
                  Estimated Base Total ({nights}N × {roomsCount}R)
                </span>
                <span className="text-lg font-bold text-stone-900 tabular-nums">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
                <span className="block text-[10px] text-stone-400">
                  + approx. 12% GST applicable at property
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Room Facilities Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
              2. Verified Room & Property Amenities
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className={`p-2.5 rounded-lg border ${hotel.facilities.hasAC ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-50 border-stone-200 text-stone-400'}`}>
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Wind className={`w-3.5 h-3.5 ${hotel.facilities.hasAC ? 'text-emerald-800' : 'text-stone-400'}`} />
                  <span>{hotel.facilities.hasAC ? 'Air Conditioned' : 'No AC (Heater)'}</span>
                </div>
                <span className="text-[10px] text-stone-500">
                  {hotel.facilities.hasAC ? 'Individual climate control' : 'High altitude region'}
                </span>
              </div>

              <div className={`p-2.5 rounded-lg border ${hotel.facilities.hasWifi ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-50 border-stone-200 text-stone-400'}`}>
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Wifi className="w-3.5 h-3.5 text-emerald-800" />
                  <span>High-Speed Wi-Fi</span>
                </div>
                <span className="text-[10px] text-stone-500">In all rooms & lobby</span>
              </div>

              <div className={`p-2.5 rounded-lg border ${hotel.facilities.hasParking ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-50 border-stone-200 text-stone-400'}`}>
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Car className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Free Guest Parking</span>
                </div>
                <span className="text-[10px] text-stone-500">Cars & tourist vans</span>
              </div>

              <div className={`p-2.5 rounded-lg border ${hotel.facilities.hasAttachedBath ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-50 border-stone-200 text-stone-400'}`}>
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Bath className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Attached Bathrooms</span>
                </div>
                <span className="text-[10px] text-stone-500">With 24/7 hot water geyser</span>
              </div>

              <div className={`p-2.5 rounded-lg border ${hotel.facilities.hasFamilyRooms ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-50 border-stone-200 text-stone-400'}`}>
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Users className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Family Suites</span>
                </div>
                <span className="text-[10px] text-stone-500">Up to 5 occupants</span>
              </div>

              <div className={`p-2.5 rounded-lg border ${hotel.facilities.hasWheelchairAccess ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-50 border-stone-200 text-stone-400'}`}>
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Accessibility className={`w-3.5 h-3.5 ${hotel.facilities.hasWheelchairAccess ? 'text-emerald-800' : 'text-stone-400'}`} />
                  <span>Wheelchair Access</span>
                </div>
                <span className="text-[10px] text-stone-500">
                  {hotel.facilities.hasWheelchairAccess ? 'Ramps & ground floor' : 'Step access only'}
                </span>
              </div>

              <div className="p-2.5 rounded-lg border bg-emerald-50/50 border-emerald-200">
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Generator Backup</span>
                </div>
                <span className="text-[10px] text-stone-500">Continuous lighting & fans</span>
              </div>

              <div className="p-2.5 rounded-lg border bg-emerald-50/50 border-emerald-200">
                <div className="flex items-center gap-1.5 font-medium mb-0.5">
                  <Building className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Dining Onsite</span>
                </div>
                <span className="text-[10px] text-stone-500">
                  {hotel.facilities.hasRestaurantOnsite ? 'Kitchen & room service' : 'Nearby dining only'}
                </span>
              </div>
            </div>

            {hotel.unverifiedFacilitiesNote && (
              <p className="text-xs text-stone-600 bg-amber-50/80 p-3 rounded-lg border border-amber-200/60 mt-3">
                <strong>Specific Property Advisory:</strong> {hotel.unverifiedFacilitiesNote}
              </p>
            )}
          </div>

          {/* Section 3: Official Booking Inquiry Form */}
          <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              3. Request Direct Booking Assistance & Official Confirmation
            </h4>
            <p className="text-xs text-stone-600 mb-4">
              Send your travel dates directly to the official property reservation desk with coordination support from Thamarai Selvam's guidance bureau in Trichy.
            </p>

            {isSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-900 text-white text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Inquiry Transmitted Successfully</span>
                </div>
                <p>
                  Thank you, <strong>{guestName}</strong>! Your inquiry for <strong>{hotel.name}</strong> ({currentRoom.type}, {nights} Nights) has been logged with Reference Code: <strong>TGM-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                </p>
                <p className="text-stone-300">
                  The property manager or Thamarai Selvam's office will reach you at <strong>{guestPhone}</strong> within 4 business hours to lock in the verified rate.
                </p>
                <div className="pt-2 text-[11px] text-amber-200">
                  Need immediate help? Call the Trichy helpline directly: {OWNER_INFO.displayPhone}
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                {formError && (
                  <div className="p-2.5 rounded-lg bg-rose-50 text-rose-800 text-xs border border-rose-200">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Lead Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Special Requirements (Optional)
                  </label>
                  <input
                    type="text"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="e.g. Ground floor for elderly parents, extra mattress, pure vegetarian breakfast"
                    className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-stone-500">
                    Your contact details are strictly protected and only shared with the verified property manager.
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-900 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                    <span>Submit Booking Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 border-t border-stone-200 px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-stone-600">
          <span>Hotel Address: {hotel.address}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

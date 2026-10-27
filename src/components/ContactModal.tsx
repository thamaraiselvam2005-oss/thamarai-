import React, { useState } from 'react';
import {
  X,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  User,
  Calendar,
  Compass,
} from 'lucide-react';
import { OWNER_INFO, DESTINATIONS_DATA } from '../data/tourismData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDestination?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledDestination = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(prefilledDestination || 'All / Custom Circuit');
  const [travelType, setTravelType] = useState('Family Vacation');
  const [travelersCount, setTravelersCount] = useState('2-4 Travelers');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please provide your name and phone number so we can assist you.');
      return;
    }
    setErrorMsg('');
    const genTicket = `TGM-TRZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(genTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-emerald-950 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-amber-300" />
            <span>TOURIST GUIDELINES MASTER · CONSULTATION DESK</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
            Connect with Thamarai Selvam
          </h2>

          <p className="text-xs text-stone-300 max-w-lg">
            Direct tourism guidance, hotel verification, route mapping, and personalized travel advice for your South India journey.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800 text-xs">
          {/* Official Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                Consultant Office
              </span>
              <p className="font-semibold text-stone-900 flex items-start gap-1 leading-tight">
                <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                <span>{OWNER_INFO.address}</span>
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                Direct Helpline
              </span>
              <p className="font-semibold text-stone-900 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <a href={`tel:${OWNER_INFO.phone}`} className="hover:text-emerald-900">
                  {OWNER_INFO.displayPhone}
                </a>
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                Official Email
              </span>
              <p className="font-semibold text-stone-900 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <a href={`mailto:${OWNER_INFO.email}`} className="hover:text-emerald-900 truncate">
                  {OWNER_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-900 text-white space-y-3">
              <div className="flex items-center gap-2 font-bold text-base text-amber-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <span>Inquiry Registered Successfully</span>
              </div>

              <p className="leading-relaxed">
                Thank you, <strong>{name}</strong>! Your travel request for <strong>{destination}</strong> has been assigned Inquiry Ticket ID: <span className="font-mono bg-emerald-950 px-2 py-0.5 rounded text-amber-300 font-bold">{ticketId}</span>.
              </p>

              <div className="bg-emerald-950/80 p-3.5 rounded-lg border border-emerald-800 space-y-1 text-stone-300">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Next Steps:</span>
                </div>
                <p>
                  Thamarai Selvam or our Trichy support coordinator will review your itinerary requirements and call/message you on <strong>{phone}</strong> within 4 hours.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-stone-300">
                  Need immediate phone assistance? Call {OWNER_INFO.displayPhone}
                </span>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-white text-stone-900 font-semibold rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-50 text-rose-800 rounded-lg border border-rose-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Krishnan"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 8903448430"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Destination of Interest
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                  >
                    <option value="All / Custom Circuit">All / Custom Circuit</option>
                    <optgroup label="Kerala">
                      <option value="Munnar (Tea Hills)">Munnar (Tea Hills)</option>
                      <option value="Alleppey (Backwaters)">Alleppey (Backwaters)</option>
                      <option value="Kochi (Colonial Fort)">Kochi (Colonial Fort)</option>
                      <option value="Wayanad (Forests & Caves)">Wayanad (Forests & Caves)</option>
                      <option value="Thekkady (Periyar Wildlife)">Thekkady (Periyar Wildlife)</option>
                      <option value="Kovalam (Beaches & Ayurveda)">Kovalam (Beaches & Ayurveda)</option>
                      <option value="Athirappilly (Waterfalls)">Athirappilly (Waterfalls)</option>
                    </optgroup>
                    <optgroup label="Tamil Nadu">
                      <option value="Trichy (Rockfort & Srirangam)">Trichy (Rockfort & Srirangam)</option>
                      <option value="Madurai (Meenakshi Amman)">Madurai (Meenakshi Amman)</option>
                      <option value="Ooty (Nilgiri Hills & Toy Train)">Ooty (Nilgiri Hills & Toy Train)</option>
                      <option value="Kodaikanal (Princess of Hills)">Kodaikanal (Princess of Hills)</option>
                      <option value="Rameswaram (Island & Pamban)">Rameswaram (Island & Pamban)</option>
                      <option value="Thanjavur (Big Temple)">Thanjavur (Big Temple)</option>
                      <option value="Mahabalipuram (Shore Temples)">Mahabalipuram (Shore Temples)</option>
                      <option value="Kanyakumari (Triveni Sangam)">Kanyakumari (Triveni Sangam)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Trip Style
                  </label>
                  <select
                    value={travelType}
                    onChange={(e) => setTravelType(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                  >
                    <option value="Family Vacation">Family Vacation</option>
                    <option value="Pilgrimage & Temple Darshan">Pilgrimage & Temple Darshan</option>
                    <option value="Honeymoon & Leisure">Honeymoon & Leisure</option>
                    <option value="Senior Citizens Comfort Tour">Senior Citizens Comfort Tour</option>
                    <option value="Solo / Backpacking">Solo / Backpacking</option>
                    <option value="Corporate / Group Tour">Corporate / Group Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Number of Travelers
                  </label>
                  <select
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                  >
                    <option value="1 Solo Traveler">1 Solo Traveler</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="3-5 Travelers (Family)">3-5 Travelers (Family)</option>
                    <option value="6-10 Travelers (Extended Group)">6-10 Travelers (Extended Group)</option>
                    <option value="10+ Travelers (Tour Group)">10+ Travelers (Tour Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Planning a 5-day tour from Trichy covering Madurai and Munnar. Need pure vegetarian restaurant recommendations and driver cab contact."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 text-stone-900"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Zero Spam Guarantee · Your Data is Protected</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Send Travel Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-50 border-t border-stone-200 px-5 py-3 flex items-center justify-between text-xs text-stone-500">
          <span>Headquarters: Thuraiyur Main Road, Trichy District, PIN 621011</span>
          <button
            onClick={onClose}
            className="text-stone-700 font-semibold hover:text-stone-900 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

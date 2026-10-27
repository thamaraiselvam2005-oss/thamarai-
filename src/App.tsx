/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass,
  MapPin,
  Building2,
  UtensilsCrossed,
  ShieldCheck,
  Bookmark,
  Search,
  Filter,
  CheckCircle2,
  ChevronRight,
  Phone,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationCard } from './components/DestinationCard';
import { DestinationModal } from './components/DestinationModal';
import { HotelCard } from './components/HotelCard';
import { HotelModal } from './components/HotelModal';
import { RestaurantCard } from './components/RestaurantCard';
import { TravelGuidelinesView } from './components/TravelGuidelinesView';
import { AboutOwnerView } from './components/AboutOwnerView';
import { FAQView } from './components/FAQView';
import { ContactModal } from './components/ContactModal';
import { ItineraryDrawer } from './components/ItineraryDrawer';
import { LegalModals } from './components/LegalModals';
import { Footer } from './components/Footer';

import {
  DESTINATIONS_DATA,
  HOTELS_DATA,
  RESTAURANTS_DATA,
  OWNER_INFO,
} from './data/tourismData';
import { Destination, Hotel, Restaurant } from './types/tourism';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('destinations');

  // Search & Global Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  // Hotel Specific Filters
  const [hotelBudgetFilter, setHotelBudgetFilter] = useState<string>('all');
  const [selectedHotelFacilities, setSelectedHotelFacilities] = useState<string[]>([]);
  const [hotelDestinationFilter, setHotelDestinationFilter] = useState<string>('all');

  // Food Specific Filters
  const [foodDietFilter, setFoodDietFilter] = useState<string>('All');
  const [foodDestinationFilter, setFoodDestinationFilter] = useState<string>('all');

  // Modals & Drawers
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const [activeHotel, setActiveHotel] = useState<Hotel | null>(null);
  const [isItineraryOpen, setIsItineraryOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [prefilledContactDest, setPrefilledContactDest] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Saved / Bookmarked Items (with localStorage persistence)
  const [savedDestinations, setSavedDestinations] = useState<Destination[]>(() => {
    try {
      const stored = localStorage.getItem('tgm_saved_destinations');
      return stored ? JSON.parse(stored) : [DESTINATIONS_DATA[0], DESTINATIONS_DATA[7]];
    } catch {
      return [DESTINATIONS_DATA[0], DESTINATIONS_DATA[7]];
    }
  });

  const [savedHotels, setSavedHotels] = useState<Hotel[]>(() => {
    try {
      const stored = localStorage.getItem('tgm_saved_hotels');
      return stored ? JSON.parse(stored) : [HOTELS_DATA[0]];
    } catch {
      return [HOTELS_DATA[0]];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tgm_saved_destinations', JSON.stringify(savedDestinations));
    } catch {
      // ignore
    }
  }, [savedDestinations]);

  useEffect(() => {
    try {
      localStorage.setItem('tgm_saved_hotels', JSON.stringify(savedHotels));
    } catch {
      // ignore
    }
  }, [savedHotels]);

  // Save Toggle Handlers
  const toggleSaveDestination = (dest: Destination) => {
    if (savedDestinations.some((d) => d.id === dest.id)) {
      setSavedDestinations(savedDestinations.filter((d) => d.id !== dest.id));
    } else {
      setSavedDestinations([...savedDestinations, dest]);
    }
  };

  const toggleSaveHotel = (hotel: Hotel) => {
    if (savedHotels.some((h) => h.id === hotel.id)) {
      setSavedHotels(savedHotels.filter((h) => h.id !== hotel.id));
    } else {
      setSavedHotels([...savedHotels, hotel]);
    }
  };

  // Facility Toggle Handler
  const toggleFacility = (facilityKey: string) => {
    if (selectedHotelFacilities.includes(facilityKey)) {
      setSelectedHotelFacilities(selectedHotelFacilities.filter((f) => f !== facilityKey));
    } else {
      setSelectedHotelFacilities([...selectedHotelFacilities, facilityKey]);
    }
  };

  // Filtered Destinations
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      // State Filter
      const matchesState = selectedState === 'All' || dest.state === selectedState;

      // Category Filter
      const matchesCategory =
        selectedCategory === 'All Categories' || dest.category === selectedCategory;

      // Search Query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.district.toLowerCase().includes(q) ||
        dest.tagline.toLowerCase().includes(q) ||
        dest.attractions.some(
          (a) =>
            a.name.toLowerCase().includes(q) ||
            a.description.toLowerCase().includes(q) ||
            a.highlight.toLowerCase().includes(q)
        );

      return matchesState && matchesCategory && matchesSearch;
    });
  }, [selectedState, selectedCategory, searchQuery]);

  // Filtered Hotels
  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      // State Filter
      const matchesState = selectedState === 'All' || hotel.state === selectedState;

      // Destination Filter
      const matchesDest =
        hotelDestinationFilter === 'all' || hotel.destinationId === hotelDestinationFilter;

      // Budget Filter
      let matchesBudget = true;
      if (hotelBudgetFilter === 'budget') {
        matchesBudget = hotel.approxPricePerNight < 3000;
      } else if (hotelBudgetFilter === 'mid') {
        matchesBudget =
          hotel.approxPricePerNight >= 3000 && hotel.approxPricePerNight <= 5000;
      } else if (hotelBudgetFilter === 'luxury') {
        matchesBudget = hotel.approxPricePerNight > 5000;
      }

      // Facility Checkboxes
      let matchesFacilities = true;
      for (const facility of selectedHotelFacilities) {
        if (!hotel.facilities[facility as keyof typeof hotel.facilities]) {
          matchesFacilities = false;
          break;
        }
      }

      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        hotel.name.toLowerCase().includes(q) ||
        hotel.destinationName.toLowerCase().includes(q) ||
        hotel.address.toLowerCase().includes(q) ||
        hotel.category.toLowerCase().includes(q);

      return matchesState && matchesDest && matchesBudget && matchesFacilities && matchesSearch;
    });
  }, [selectedState, hotelDestinationFilter, hotelBudgetFilter, selectedHotelFacilities, searchQuery]);

  // Filtered Restaurants
  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS_DATA.filter((rest) => {
      // State Filter
      const matchesState = selectedState === 'All' || rest.state === selectedState;

      // Destination Filter
      const matchesDest =
        foodDestinationFilter === 'all' || rest.destinationId === foodDestinationFilter;

      // Diet Filter
      const matchesDiet =
        foodDietFilter === 'All' ||
        rest.dietType === foodDietFilter ||
        (foodDietFilter === 'Pure Vegetarian' && rest.dietType === 'Pure Vegetarian');

      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        rest.name.toLowerCase().includes(q) ||
        rest.destinationName.toLowerCase().includes(q) ||
        rest.cuisineType.toLowerCase().includes(q) ||
        rest.signatureDishes.some((d) => d.toLowerCase().includes(q));

      return matchesState && matchesDest && matchesDiet && matchesSearch;
    });
  }, [selectedState, foodDestinationFilter, foodDietFilter, searchQuery]);

  const handleOpenContactWithDest = (destName?: string) => {
    setPrefilledContactDest(destName || '');
    setIsContactOpen(true);
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedState('All');
    setSelectedCategory('All Categories');
    setHotelBudgetFilter('all');
    setSelectedHotelFacilities([]);
    setHotelDestinationFilter('all');
    setFoodDietFilter('All');
    setFoodDestinationFilter('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-800 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedDestinations.length + savedHotels.length}
        openItinerary={() => setIsItineraryOpen(true)}
        openContact={() => handleOpenContactWithDest()}
      />

      {/* 2. Hero Section (visible on homepage/destinations tab) */}
      {activeTab === 'destinations' && (
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onExploreClick={() => {
            const el = document.getElementById('destinations-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      {/* 3. Main Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* --- VIEW 1: DESTINATIONS HUB --- */}
        {activeTab === 'destinations' && (
          <div id="destinations-grid" className="space-y-8">
            {/* Header row with result count & state tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Tourist Destinations ({filteredDestinations.length})
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Ground-verified attractions, opening hours, road routes & verified visiting months.
                </p>
              </div>

              {/* State Filter Buttons */}
              <div className="flex items-center gap-2">
                {['All', 'Kerala', 'Tamil Nadu'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedState(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedState === st
                        ? 'bg-emerald-900 text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {st === 'All' ? 'All Destinations' : st}
                  </button>
                ))}
              </div>
            </div>

            {/* If filters applied, provide a quick reset button */}
            {(selectedState !== 'All' ||
              selectedCategory !== 'All Categories' ||
              searchQuery.trim().length > 0) && (
              <div className="flex items-center justify-between bg-stone-100 p-2.5 px-4 rounded-lg text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
                  <span>
                    Filtered by:{' '}
                    <strong>
                      {selectedState !== 'All' ? selectedState : 'All States'}
                    </strong>{' '}
                    ·{' '}
                    <strong>
                      {selectedCategory !== 'All Categories'
                        ? selectedCategory
                        : 'All Categories'}
                    </strong>
                    {searchQuery && (
                      <span>
                        {' '}
                        · Search: "<strong>{searchQuery}</strong>"
                      </span>
                    )}
                  </span>
                </div>
                <button
                  onClick={resetAllFilters}
                  className="font-semibold text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              </div>
            )}

            {/* Destinations Grid */}
            {filteredDestinations.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
                <Compass className="w-10 h-10 text-stone-300 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-stone-800">
                  No destinations found matching your criteria
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  Try adjusting your search terms or clearing state and category filters.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-4 py-2 bg-emerald-900 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    destination={dest}
                    onSelect={(d) => setActiveDestination(d)}
                    isSaved={savedDestinations.some((s) => s.id === dest.id)}
                    onToggleSave={toggleSaveDestination}
                  />
                ))}
              </div>
            )}

            {/* Curated Circuit Showcase Callout */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950 to-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                  RECOMMENDED MULTI-STATE TRAVEL CIRCUIT
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  The Complete 10-Day Tamil Nadu & Kerala Grand Heritage Circuit
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Start from Trichy (Rockfort & Srirangam) → Thanjavur (Big Temple) → Madurai (Meenakshi Amman) → Theni Pass → Munnar (Tea Gardens) → Alleppey (Houseboat cruise) → Fort Kochi. Expertly planned routes with minimal mountain driving fatigue.
                </p>
              </div>

              <button
                onClick={() => handleOpenContactWithDest('10-Day Grand Circuit')}
                className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs whitespace-nowrap shrink-0 transition-colors shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>Request Custom Circuit Plan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* --- VIEW 2: HOTELS & STAYS --- */}
        {activeTab === 'hotels' && (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
                <span>Verified Accommodations & Tariffs</span>
                <span aria-hidden="true">·</span>
                <span>October 2026 Verification</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Hotels, Heritage Resorts & Backwater Houseboats ({filteredHotels.length})
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Filter verified stays by air conditioning, Wi-Fi, attached geyser baths, family capacity, wheelchair access, and budget. Transparent pricing without misleading extra fees.
              </p>
            </div>

            {/* Filter Control Console */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {/* State Filter */}
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    State
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 font-medium"
                  >
                    <option value="All">All States (Kerala & Tamil Nadu)</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                </div>

                {/* Destination Filter */}
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Specific Destination
                  </label>
                  <select
                    value={hotelDestinationFilter}
                    onChange={(e) => setHotelDestinationFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 font-medium"
                  >
                    <option value="all">All Destinations</option>
                    {DESTINATIONS_DATA.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.state})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Tariff Range / Night
                  </label>
                  <select
                    value={hotelBudgetFilter}
                    onChange={(e) => setHotelBudgetFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800 font-medium"
                  >
                    <option value="all">Any Price</option>
                    <option value="budget">Budget (Under ₹3,000 / night)</option>
                    <option value="mid">Mid-Range (₹3,000 - ₹5,000 / night)</option>
                    <option value="luxury">Luxury & Heritage (Above ₹5,000 / night)</option>
                  </select>
                </div>
              </div>

              {/* Room Facility Checkboxes */}
              <div className="pt-2 border-t border-stone-100">
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Filter by Verified Room Facilities:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: 'hasAC', label: 'Air Conditioning' },
                    { id: 'hasWifi', label: 'Free Wi-Fi' },
                    { id: 'hasParking', label: 'Car Parking' },
                    { id: 'hasAttachedBath', label: 'Attached Bath & Hot Water' },
                    { id: 'hasFamilyRooms', label: 'Family Rooms' },
                    { id: 'hasWheelchairAccess', label: 'Wheelchair Friendly' },
                    { id: 'hasSwimmingPool', label: 'Swimming Pool' },
                  ].map((fac) => {
                    const isChecked = selectedHotelFacilities.includes(fac.id);
                    return (
                      <button
                        key={fac.id}
                        type="button"
                        onClick={() => toggleFacility(fac.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                          isChecked
                            ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '}
                        {fac.label}
                      </button>
                    );
                  })}
                  {selectedHotelFacilities.length > 0 && (
                    <button
                      onClick={() => setSelectedHotelFacilities([])}
                      className="text-xs text-rose-700 hover:underline px-2 py-1 font-medium cursor-pointer"
                    >
                      Clear Amenities
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Hotel Cards Grid */}
            {filteredHotels.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
                <Building2 className="w-10 h-10 text-stone-300 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-stone-800">
                  No verified hotels match the chosen facilities or budget
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  Try relaxing your facility filters or choosing "All Destinations".
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-4 py-2 bg-emerald-900 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Reset Hotel Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    onSelect={(h) => setActiveHotel(h)}
                    isSaved={savedHotels.some((s) => s.id === hotel.id)}
                    onToggleSave={toggleSaveHotel}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- VIEW 3: FOOD & DINING --- */}
        {activeTab === 'food' && (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
                <span>Culinary Treasures & Dining Guide</span>
                <span aria-hidden="true">·</span>
                <span>FSSAI Hygiene Verified</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Authentic South Indian Cuisine & Legendary Messes ({filteredRestaurants.length})
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Discover the culinary heritage of Kerala and Tamil Nadu. From traditional banana leaf meals in Srirangam and Madurai's famous Jigarthanda to Alleppey pearl spot fish and Kerala puttu.
              </p>
            </div>

            {/* Filter Strip */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
              {/* Diet segmented tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <span className="font-bold text-stone-400 uppercase tracking-wider text-[11px] mr-1">
                  Food Preference:
                </span>
                {['All', 'Pure Vegetarian', 'Non-Vegetarian', 'Seafood Special'].map((diet) => {
                  const isActive = foodDietFilter === diet;
                  return (
                    <button
                      key={diet}
                      onClick={() => setFoodDietFilter(diet)}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-emerald-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {diet}
                    </button>
                  );
                })}
              </div>

              {/* State & City filter */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium text-stone-800 focus:outline-none"
                >
                  <option value="All">All States</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>

                <select
                  value={foodDestinationFilter}
                  onChange={(e) => setFoodDestinationFilter(e.target.value)}
                  className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium text-stone-800 focus:outline-none"
                >
                  <option value="all">All Cities</option>
                  {DESTINATIONS_DATA.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Restaurant Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 4: TRAVEL GUIDELINES & SAFETY --- */}
        {activeTab === 'guidelines' && <TravelGuidelinesView />}

        {/* --- VIEW 5: ABOUT OWNER & BUREAU --- */}
        {activeTab === 'about' && (
          <AboutOwnerView onOpenContact={() => handleOpenContactWithDest()} />
        )}

        {/* --- VIEW 6: FAQS --- */}
        {activeTab === 'faq' && (
          <FAQView onOpenContact={() => handleOpenContactWithDest()} />
        )}
      </main>

      {/* 4. Modals & Slide-overs */}
      {/* Destination Modal */}
      <DestinationModal
        destination={activeDestination}
        onClose={() => setActiveDestination(null)}
        isSaved={
          activeDestination
            ? savedDestinations.some((d) => d.id === activeDestination.id)
            : false
        }
        onToggleSave={toggleSaveDestination}
        onViewHotels={(destId) => {
          setActiveTab('hotels');
          setHotelDestinationFilter(destId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onViewRestaurants={(destId) => {
          setActiveTab('food');
          setFoodDestinationFilter(destId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Hotel Modal */}
      <HotelModal
        hotel={activeHotel}
        onClose={() => setActiveHotel(null)}
        isSaved={
          activeHotel ? savedHotels.some((h) => h.id === activeHotel.id) : false
        }
        onToggleSave={toggleSaveHotel}
      />

      {/* Saved Itinerary Slide-over Drawer */}
      <ItineraryDrawer
        isOpen={isItineraryOpen}
        onClose={() => setIsItineraryOpen(false)}
        savedDestinations={savedDestinations}
        savedHotels={savedHotels}
        onRemoveDestination={(id) =>
          setSavedDestinations(savedDestinations.filter((d) => d.id !== id))
        }
        onRemoveHotel={(id) =>
          setSavedHotels(savedHotels.filter((h) => h.id !== id))
        }
        onSelectDestination={(d) => setActiveDestination(d)}
        onSelectHotel={(h) => setActiveHotel(h)}
        onOpenContact={() => handleOpenContactWithDest('Saved Itinerary Request')}
      />

      {/* Consultation & Booking Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledDestination={prefilledContactDest}
      />

      {/* Legal Modals (Privacy & Terms) */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 5. Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openContact={() => handleOpenContactWithDest()}
        openLegal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}

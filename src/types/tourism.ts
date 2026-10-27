export interface Attraction {
  name: string;
  description: string;
  verifiedHours: string;
  entryFee: string;
  highlight: string;
  mapQuery: string;
}

export interface TravelRoutes {
  air: {
    nearestAirport: string;
    distanceKm: number;
    travelTip: string;
  };
  train: {
    nearestStation: string;
    distanceKm: number;
    travelTip: string;
    keyLines?: string;
  };
  road: {
    majorHighways: string;
    busConnectivity: string;
    cabTips: string;
  };
}

export interface HubDistances {
  fromTrichyKm: number;
  fromChennaiKm: number;
  fromKochiKm: number;
  fromMaduraiKm: number;
  fromBangaloreKm: number;
}

export interface Destination {
  id: string;
  name: string;
  state: 'Kerala' | 'Tamil Nadu';
  district: string;
  tagline: string;
  description: string;
  heroImage: string;
  category: 'Hill Station' | 'Backwaters' | 'Heritage & Temples' | 'Coastal & Beaches' | 'Waterfalls & Wildlife';
  bestSeason: string;
  weatherNotes: string;
  attractions: Attraction[];
  travelRoutes: TravelRoutes;
  hubDistances: HubDistances;
  verifiedDate: string;
  localCultureTips: string[];
  emergencyContacts: {
    police: string;
    hospital: string;
    touristHelpline: string;
  };
  geoCoordinates: {
    lat: number;
    lng: number;
  };
}

export interface RoomType {
  type: string;
  description: string;
  approxPrice: number;
  maxOccupancy: number;
}

export interface HotelFacilities {
  hasAC: boolean;
  hasWifi: boolean;
  hasParking: boolean;
  hasAttachedBath: boolean;
  hasHotWater: boolean;
  hasFamilyRooms: boolean;
  hasWheelchairAccess: boolean;
  hasPowerBackup: boolean;
  hasRestaurantOnsite: boolean;
  hasSwimmingPool?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  destinationId: string;
  destinationName: string;
  state: 'Kerala' | 'Tamil Nadu';
  category: 'Heritage Resort' | 'Backwater Houseboat' | 'Homestay' | 'Boutique Hotel' | 'Budget Lodge' | 'Eco Cottage';
  starRating: number;
  approxPricePerNight: number;
  address: string;
  phone: string;
  email: string;
  bookingWebsiteUrl: string;
  mapQuery: string;
  roomTypes: RoomType[];
  facilities: HotelFacilities;
  unverifiedFacilitiesNote?: string;
  verifiedDate: string;
  image: string;
  featured?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  destinationId: string;
  destinationName: string;
  state: 'Kerala' | 'Tamil Nadu';
  cuisineType: string;
  dietType: 'Pure Vegetarian' | 'Non-Vegetarian' | 'Both Veg & Non-Veg' | 'Seafood Special';
  signatureDishes: string[];
  avgCostForTwo: number;
  address: string;
  openingHours: string;
  contactPhone: string;
  mapQuery: string;
  hygieneFssaiVerified: boolean;
  verifiedDate: string;
  description: string;
}

export interface TravelGuideline {
  id: string;
  category: 'Temple Etiquette' | 'Backwaters & Houseboat' | 'Mountain & Ghats Driving' | 'Monsoon & Climate' | 'Local Food & Hygiene' | 'Packing & Essentials';
  title: string;
  summary: string;
  dos: string[];
  donts: string[];
  verifiedNote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Planning' | 'Kerala' | 'Tamil Nadu' | 'Transport & Cabs' | 'Temples & Culture';
}

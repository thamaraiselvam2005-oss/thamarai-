import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  ExternalLink,
  UtensilsCrossed,
  Leaf,
  Sparkles,
} from 'lucide-react';
import { Restaurant } from '../types/tourism';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const isPureVeg = restaurant.dietType === 'Pure Vegetarian';
  const isSeafood = restaurant.dietType === 'Seafood Special';

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${restaurant.name} ${restaurant.address} ${restaurant.state}`
  )}`;

  return (
    <article className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col hover:border-stone-300 hover:shadow-md transition-all duration-200">
      {/* Visual Header / Food Graphic */}
      <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden">
        <img
          src="/src/assets/images/south_indian_banana_leaf_feast_1793106417372.jpg"
          alt={restaurant.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
        />

        {/* State / Cuisine tag */}
        <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
          {restaurant.state} · {restaurant.cuisineType}
        </div>

        {/* Diet Category Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs text-xs font-semibold">
          {isPureVeg ? (
            <span className="flex items-center gap-1 text-emerald-800">
              <Leaf className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
              <span>Pure Veg</span>
            </span>
          ) : isSeafood ? (
            <span className="flex items-center gap-1 text-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Seafood Special</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-amber-900">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-700" />
              <span>Veg & Non-Veg</span>
            </span>
          )}
        </div>

        {/* Cost for Two pill */}
        <div className="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-right">
          <div className="text-[10px] text-stone-300 font-medium">Avg. for two</div>
          <div className="text-sm font-bold tabular-nums text-amber-300">
            ₹{restaurant.avgCostForTwo.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span className="font-semibold text-emerald-800">{restaurant.destinationName}</span>
            <span aria-hidden="true">·</span>
            <span>{restaurant.cuisineType}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-emerald-800 font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>FSSAI Hygiene Verified</span>
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
            {restaurant.name}
          </h3>

          <p className="text-xs text-stone-500 flex items-start gap-1 mb-3 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <span>{restaurant.address}</span>
          </p>

          <p className="text-xs text-stone-600 leading-relaxed mb-4">
            {restaurant.description}
          </p>

          {/* Signature Specialties */}
          <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/80 mb-4">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
              Must-Try Regional Specialties
            </span>
            <ul className="space-y-1 text-xs text-stone-800">
              {restaurant.signatureDishes.map((dish, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">★</span>
                  <span>{dish}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer: Hours & Contact */}
        <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-stone-600">
            <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>{restaurant.openingHours}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${restaurant.contactPhone}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-stone-600" />
              <span>{restaurant.contactPhone}</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-900 hover:bg-emerald-800 text-white font-medium transition-colors"
            >
              <MapPin className="w-3 h-3 text-amber-300" />
              <span>Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

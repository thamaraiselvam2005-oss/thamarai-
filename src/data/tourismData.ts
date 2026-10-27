import { Destination, Hotel, Restaurant, TravelGuideline, FAQItem } from '../types/tourism';

export const OWNER_INFO = {
  name: "Thamarai Selvam",
  role: "Chief Tourism Consultant & Regional Travel Director",
  brandName: "Tourist Guidelines Master",
  address: "Thuraiyur Main Road, Trichy District, Tamil Nadu, PIN 621011",
  phone: "+91 8903448430",
  displayPhone: "+91 89034 48430",
  email: "thamaraiselvamt74@gmail.com",
  districtsCovered: 52,
  statesCovered: "Kerala & Tamil Nadu (Expanding Pan-India)",
  verifiedYear: "2026",
  mission: "Providing authentic, ground-verified tourist intelligence for families, solo travelers, and global visitors exploring South India without inflated agent fees or misleading hotel promises."
};

export const DESTINATIONS_DATA: Destination[] = [
  // --- KERALA DESTINATIONS ---
  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    district: "Idukki",
    tagline: "Rolling tea carpeted valleys & mist-wrapped peaks",
    description: "Nestled at 1,600 meters in the Western Ghats, Munnar was once the summer resort of the British administration. It is celebrated for sprawling emerald tea plantations, rare flora like Neelakurinji, endangered Nilgiri Tahr mountain goats, cascading waterfalls, and cool mountain weather year-round.",
    heroImage: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg",
    category: "Hill Station",
    bestSeason: "September to March (Crisp 12°C - 22°C; monsoon from June to August for dramatic greenery)",
    weatherNotes: "Misty mornings, pleasant afternoons. Carry light woolens during winter and windcheaters during rain.",
    attractions: [
      {
        name: "Eravikulam National Park (Rajamalai)",
        description: "Habitat of the endangered Nilgiri Tahr. Scenic eco-buses take visitors to viewpoint trails overlooking Anamudi peak (2,695m).",
        verifiedHours: "07:30 AM – 04:00 PM (Closed Feb–March during Nilgiri Tahr calving season)",
        entryFee: "₹200 (Indian Adults), ₹500 (Foreigners), ₹50 (Children)",
        highlight: "Highest peak in South India views & rare wildlife",
        mapQuery: "Eravikulam National Park Munnar"
      },
      {
        name: "Mattupetty Dam & Echo Point",
        description: "Concrete gravity dam surrounded by tea estates and rolling hills. Speedboating and paddle boating available.",
        verifiedHours: "09:00 AM – 05:00 PM Daily",
        entryFee: "₹10 per person; Boating ₹500 - ₹1,000 for group boat",
        highlight: "Natural voice echo resonance across mountain lake",
        mapQuery: "Mattupetty Dam Munnar"
      },
      {
        name: "KDHP Tea Museum & Factory Tour",
        description: "India's first tea museum at Nullatanni Estate. Demonstrates orthodox tea processing and historic tea machinery since 1905.",
        verifiedHours: "09:00 AM – 04:30 PM (Closed Mondays)",
        entryFee: "₹125 per adult, ₹40 for tea tasting session",
        highlight: "Live tea leaf fermentation & black tea tasting",
        mapQuery: "Tea Museum Munnar Nullatanni"
      },
      {
        name: "Top Station",
        description: "Historic transshipment point for tea between Kerala and Tamil Nadu. Offers panoramic 360-degree views of the Western Ghats.",
        verifiedHours: "06:00 AM – 06:00 PM Daily",
        entryFee: "₹25 per adult",
        highlight: "Boundary ridge between Kerala & Tamil Nadu plains",
        mapQuery: "Top Station Munnar"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Cochin International Airport (COK)",
        distanceKm: 110,
        travelTip: "Taxi takes approximately 3.5 hours along NH85 with stops at Valara and Cheeyappara waterfalls."
      },
      train: {
        nearestStation: "Aluva (AWY) / Ernakulam Junction (ERS)",
        distanceKm: 120,
        travelTip: "KSRTC super-fast buses depart every 45 minutes from Aluva KSRTC stand directly to Munnar."
      },
      road: {
        majorHighways: "NH85 (Kochi-Dhanushkodi) & SH17 (Udumalpet-Munnar)",
        busConnectivity: "Direct KSRTC buses from Kochi, Kottayam, and Trichur. TNSTC buses from Coimbatore and Madurai.",
        cabTips: "Ensure hill-experienced driver; hairpin bends between Neriamangalam and Adimali require careful navigation."
      }
    },
    hubDistances: {
      fromTrichyKm: 275,
      fromChennaiKm: 580,
      fromKochiKm: 125,
      fromMaduraiKm: 155,
      fromBangaloreKm: 475
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Buy fresh GI-tagged Munnar Green Tea and homemade chocolate from certified cooperative outlets.",
      "Dress respectfully when visiting nearby tribal settlement fringes in Chinnar.",
      "Single-use plastic bottles are banned in Eravikulam sanctuary; carry reusable stainless steel bottles."
    ],
    emergencyContacts: {
      police: "+91 4865 230321",
      hospital: "+91 4865 230233 (Tata General Hospital Munnar)",
      touristHelpline: "1800-425-4747 (Kerala Tourism)"
    },
    geoCoordinates: { lat: 10.0889, lng: 77.0595 }
  },
  {
    id: "alleppey",
    name: "Alleppey (Alappuzha)",
    state: "Kerala",
    district: "Alappuzha",
    tagline: "Venice of the East & enchanting palm backwaters",
    description: "Famous for its labyrinth of canals, lagoons, and the shimmering Vembanad Lake, Alleppey is the undisputed epicenter of Kerala backwater cruising. Watch rustic village life, coconut husking, duck farming, and emerald rice fields lying below sea level.",
    heroImage: "/src/assets/images/alleppey_backwater_houseboat_1793106415542.jpg",
    category: "Backwaters",
    bestSeason: "October to March (Gentle breeze, 23°C - 30°C); August for the thrilling Nehru Trophy Boat Race.",
    weatherNotes: "Tropical maritime climate; humid afternoons cooled by coastal sea breeze in evening.",
    attractions: [
      {
        name: "Punnamada Backwater Canal & Vembanad Lake",
        description: "The arena for traditional snake boat races (Chundan Vallams) and prime boarding point for luxury kettuvallam houseboats.",
        verifiedHours: "Cruises operate 12:00 Noon to 05:30 PM (anchored overnight by 05:30 PM per harbor law)",
        entryFee: "Public SWTD water bus from ₹15; Private Shikara ₹600 - ₹1,000/hr; Houseboat ₹8,000 - ₹22,000/night",
        highlight: "Gliding through narrow village waterways beneath coconut canopies",
        mapQuery: "Punnamada Lake Alleppey"
      },
      {
        name: "Alappuzha Beach & Historic Pier",
        description: "150-year-old historic marine pier extending into the Arabian Sea with a 1862 operational lighthouse offering coastal views.",
        verifiedHours: "Beach open 24/7; Lighthouse open 03:00 PM – 05:00 PM (Closed Mondays)",
        entryFee: "Beach free; Lighthouse ₹20 (Adults), ₹10 (Children)",
        highlight: "Sunsets over Arabian Sea and coastal promenade",
        mapQuery: "Alappuzha Lighthouse and Beach"
      },
      {
        name: "Kuttanad Below-Sea-Level Rice Farming",
        description: "One of the few places on Earth where agricultural paddy farming is conducted 4 to 10 feet below mean sea level.",
        verifiedHours: "Sunrise to Sunset (Accessible via canoe or local government ferry)",
        entryFee: "Free exploration; ₹40 for government village ferry",
        highlight: "Ancient bio-saline farming designated as GIAHS by FAO",
        mapQuery: "Kuttanad Wetland Agriculture Alappuzha"
      },
      {
        name: "Marari Beach (Mararikulam)",
        description: "Quiet fishing hamlet beach 14 km north of Alleppey with white sands and traditional catamaran fishermen.",
        verifiedHours: "Open daily",
        entryFee: "Free",
        highlight: "Peaceful uncrowded beach walk & fresh sea catches",
        mapQuery: "Marari Beach Mararikulam"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Cochin International Airport (COK)",
        distanceKm: 85,
        travelTip: "National Highway 66 connects Cochin Airport to Alleppey in roughly 2.5 hours."
      },
      train: {
        nearestStation: "Alappuzha Railway Station (ALLP)",
        distanceKm: 3,
        travelTip: "Coastal rail line connects Trivandrum, Ernakulam, Kozhikode, and Mangalore with express stops."
      },
      road: {
        majorHighways: "NH66 (Panvel-Kanyakumari Corridor) & AC Road (Alappuzha-Changanassery)",
        busConnectivity: "KSRTC buses connect directly to Kochi (every 15 min), Trivandrum, and Madurai.",
        cabTips: "Board official pre-paid auto rickshaws at Alappuzha railway station to houseboat jetties (₹100 - ₹150)."
      }
    },
    hubDistances: {
      fromTrichyKm: 390,
      fromChennaiKm: 680,
      fromKochiKm: 55,
      fromMaduraiKm: 275,
      fromBangaloreKm: 585
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Always inspect houseboat DTPC green certification badge before paying final deposit.",
      "Night anchoring is strictly mandated from 5:30 PM to protect fishermen casting traditional night nets.",
      "Try local toddy shop culinary delicacies like Karimeen Pollichathu (pearl spot fish wrapped in banana leaf)."
    ],
    emergencyContacts: {
      police: "+91 477 2251322 (Coastal Police Station Alappuzha)",
      hospital: "+91 477 2282015 (Government T.D. Medical College Vandanam)",
      touristHelpline: "+91 477 2253308 (DTPC Alleppey Information Desk)"
    },
    geoCoordinates: { lat: 9.4981, lng: 76.3388 }
  },
  {
    id: "kochi",
    name: "Kochi (Cochin)",
    state: "Kerala",
    district: "Ernakulam",
    tagline: "The Queen of the Arabian Sea & historical trade crossroad",
    description: "A multicultural coastal city where Portuguese, Dutch, British, Arab, Chinese, and Jewish histories intertwine. Explore Fort Kochi's cantilevered Chinese fishing nets, colonial art cafes, vibrant spice markets of Mattancherry, and world-class Kathakali cultural theaters.",
    heroImage: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg",
    category: "Coastal & Beaches",
    bestSeason: "October to April (Pleasant 24°C - 32°C; December hosts Cochin Carnival and Biennale)",
    weatherNotes: "Coastal warm weather with tropical sunshine. Evenings by Fort Kochi beach walk are cool and breezy.",
    attractions: [
      {
        name: "Chinese Fishing Nets (Cheena Vala)",
        description: "Iconic shore-operated cantilevered mechanical fishing nets introduced by Chinese trader Kublai Khan's court in the 14th century.",
        verifiedHours: "Best viewed at sunrise (06:00 AM) and sunset (05:30 PM)",
        entryFee: "Free viewing; Nominal ₹50 tip if fishermen demonstrate manual counterweight winching",
        highlight: "Living medieval maritime engineering against vibrant harbor sunsets",
        mapQuery: "Chinese Fishing Nets Fort Kochi"
      },
      {
        name: "Mattancherry Dutch Palace & Jew Town",
        description: "Palace built by the Portuguese in 1555 with exquisite Ramayana murals and antique Dutch coronation robes, leading to the 1568 Paradesi Synagogue.",
        verifiedHours: "Palace: 09:45 AM – 01:00 PM & 02:00 PM – 04:45 PM (Closed Fridays)",
        entryFee: "₹5 per person; Synagogue ₹10 (Closed Fridays & Saturdays)",
        highlight: "Hand-painted 18th century willow pattern Cantonese floor tiles in Synagogue",
        mapQuery: "Mattancherry Palace Jew Town Kochi"
      },
      {
        name: "Kerala Kathakali Centre",
        description: "Intimate traditional auditorium where masters prepare elaborate organic facial makeup and perform classical Kathakali dance-drama.",
        verifiedHours: "Makeup demonstration 05:00 PM; Performance 06:00 PM – 07:30 PM daily",
        entryFee: "₹450 - ₹600 per person",
        highlight: "Watching 200-year-old classical mudra gestures & expressive facial movements",
        mapQuery: "Kerala Kathakali Centre Fort Kochi"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Cochin International Airport (COK) - Nedumbassery",
        distanceKm: 38,
        travelTip: "World's first 100% solar-powered airport. Electric feeder buses connect directly to Aluva Metro Station."
      },
      train: {
        nearestStation: "Ernakulam Junction (South) / Ernakulam Town (North)",
        distanceKm: 12,
        travelTip: "Kochi Metro connects both railway stations to city hubs. Take the Ro-Ro ferry from Marine Drive to Fort Kochi for ₹5."
      },
      road: {
        majorHighways: "NH544 (Salem-Kochi Highway) & NH66",
        busConnectivity: "KSRTC Vyttila Mobility Hub connects all Indian states, with air-conditioned low-floor city buses.",
        cabTips: "Uber and Ola operate reliably 24/7 across Kochi, Ernakulam, and Mattancherry."
      }
    },
    hubDistances: {
      fromTrichyKm: 345,
      fromChennaiKm: 685,
      fromKochiKm: 0,
      fromMaduraiKm: 260,
      fromBangaloreKm: 535
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Modest attire covering shoulders and knees is mandatory inside the Paradesi Synagogue and local heritage churches.",
      "Explore Fort Kochi best on foot or by renting local bicycles (₹150/day).",
      "Kochi Water Metro is an ultra-modern electric catamaran ferry network serving 10 island terminals."
    ],
    emergencyContacts: {
      police: "+91 484 2215055 (Fort Kochi Police)",
      hospital: "+91 484 2851234 (Amrita Institute of Medical Sciences)",
      touristHelpline: "+91 484 2353234 (Kerala Tourism Facilitation Centre)"
    },
    geoCoordinates: { lat: 9.9312, lng: 76.2673 }
  },
  {
    id: "wayanad",
    name: "Wayanad",
    state: "Kerala",
    district: "Wayanad",
    tagline: "Prehistoric caves, misty rainforests & spice valleys",
    description: "Located high on the Nilgiri Biosphere plateau, Wayanad is renowned for prehistoric rock engravings, gushing waterfalls, tribal coffee and spice plantations, and the largest earth dam in India.",
    heroImage: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg",
    category: "Waterfalls & Wildlife",
    bestSeason: "October to May (Pleasant 18°C - 28°C; trekking permits active)",
    weatherNotes: "Cool highland air; occasional rain showers keep forests vibrant and aromatic.",
    attractions: [
      {
        name: "Edakkal Caves (Ambukuthi Hills)",
        description: "Two natural rock shelters containing petroglyphic carvings dating back to the Neolithic era (6,000 BCE).",
        verifiedHours: "09:00 AM – 04:00 PM (Closed Mondays)",
        entryFee: "₹50 (Indian Adults), ₹100 (Foreigners); Jeep shuttle ₹90",
        highlight: "Stone age human and animal engravings at 1,200m altitude",
        mapQuery: "Edakkal Caves Wayanad"
      },
      {
        name: "Banasura Sagar Dam",
        description: "Largest earthen dam in India and second largest in Asia, impounding Karamanathodu river with picturesque reservoir islands.",
        verifiedHours: "09:00 AM – 05:00 PM Daily",
        entryFee: "₹40 per person; Speedboating ₹850 for 5 people",
        highlight: "Speedboat ride through misty submerged hillock islands",
        mapQuery: "Banasura Sagar Dam Wayanad"
      },
      {
        name: "Soochipara (Sentinel Rock) Waterfalls",
        description: "Three-tiered waterfall cascading from 200 meters into a natural pool surrounded by dense deciduous rainforest.",
        verifiedHours: "09:00 AM – 04:30 PM Daily",
        entryFee: "₹80 (Adults), ₹50 (Children)",
        highlight: "Refreshing jungle trek and swimming in natural mountain pool",
        mapQuery: "Soochipara Falls Wayanad"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Calicut International Airport (CCJ) - Kozhikode",
        distanceKm: 95,
        travelTip: "Pre-paid taxis available at Kozhikode airport to Wayanad via the 9 scenic Thamarassery Churam hairpin bends."
      },
      train: {
        nearestStation: "Kozhikode Railway Station (CLT)",
        distanceKm: 85,
        travelTip: "Frequent KSRTC fast-passenger buses run every 20 minutes from Kozhikode stand to Kalpetta and Sulthan Bathery."
      },
      road: {
        majorHighways: "NH766 (Kozhikode-Kollegal) through Bandipur National Park",
        busConnectivity: "Direct buses from Bangalore, Mysore, Ooty, and Cochin.",
        cabTips: "Note: Night traffic ban exists on NH766 through Bandipur forest corridor (09:00 PM to 06:00 AM)."
      }
    },
    hubDistances: {
      fromTrichyKm: 420,
      fromChennaiKm: 620,
      fromKochiKm: 250,
      fromMaduraiKm: 390,
      fromBangaloreKm: 275
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Purchase GI-tagged Wayanad Gandhakasala aromatic rice and pure forest honey from tribal welfare outlets.",
      "Check forest department permits 24 hours in advance for Chembra Peak trekking.",
      "Follow zero-littering rules strictly across all forest checkpoints."
    ],
    emergencyContacts: {
      police: "+91 4936 202229 (Kalpetta Police Station)",
      hospital: "+91 4936 202413 (District Hospital Mananthavady)",
      touristHelpline: "+91 4936 204441 (DTPC Wayanad)"
    },
    geoCoordinates: { lat: 11.6854, lng: 76.1320 }
  },
  {
    id: "thekkady",
    name: "Thekkady (Periyar)",
    state: "Kerala",
    district: "Idukki",
    tagline: "Periyar tiger reserve, cardamom hills & spice walks",
    description: "Famous for Periyar National Park, one of India's premier tiger and elephant sanctuaries centered on an artificial lake created by the 1895 Mullaperiyar Dam. Wander through aromatic cardamom, cinnamon, clove, and pepper plantations.",
    heroImage: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg",
    category: "Waterfalls & Wildlife",
    bestSeason: "September to May (Cool and pleasant 15°C - 26°C)",
    weatherNotes: "Aromatic mountain breeze, forest humidity in morning; pleasant evenings for spice walks.",
    attractions: [
      {
        name: "Periyar Lake Boat Safari",
        description: "90-minute wildlife observation cruise on the serene reservoir to spot wild elephants, gaur, sambar deer, and otters.",
        verifiedHours: "Departures: 07:30 AM, 09:30 AM, 11:15 AM, 01:45 PM, 03:30 PM",
        entryFee: "Park entry ₹45 (Indians), ₹500 (Foreigners); Boat ₹255/person (Book online via Periyar Tiger Conservation Foundation)",
        highlight: "Wild elephant herds bathing along the reservoir shoreline",
        mapQuery: "Periyar Tiger Reserve Boat Jetty Thekkady"
      },
      {
        name: "Spice Garden Tour & Kumily Market",
        description: "Guided botanical walks explaining the cultivation and medicinal properties of green cardamom, black pepper, nutmeg, vanilla, and allspice.",
        verifiedHours: "08:30 AM – 06:00 PM Daily",
        entryFee: "₹100 - ₹150 per person for guided garden walk",
        highlight: "Tasting raw cinnamon bark and hand-harvesting fresh green pepper",
        mapQuery: "Kumily Spice Plantation Thekkady"
      },
      {
        name: "Kadathanadan Kalari Centre",
        description: "Ancient Indian martial art arena showcasing Kalaripayattu combat techniques, sword fights, and agile acrobatics.",
        verifiedHours: "Shows daily 06:00 PM – 07:00 PM & 07:00 PM – 08:00 PM",
        entryFee: "₹300 per person",
        highlight: "Thrilling weapon duel with Urumi (flexible steel sword)",
        mapQuery: "Kadathanadan Kalari Centre Thekkady"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Madurai Airport (IXM)",
        distanceKm: 140,
        travelTip: "Madurai airport is closer to Thekkady than Cochin; taxi takes 3.5 hours via Theni ghats."
      },
      train: {
        nearestStation: "Kottayam Railway Station (KTYM)",
        distanceKm: 105,
        travelTip: "KSRTC buses connect Kottayam to Kumily/Thekkady every 30 minutes via Mundakkayam and Peermade."
      },
      road: {
        majorHighways: "NH183 (Kottayam-Kumily Highway) & Theni-Kumily Ghat Road",
        busConnectivity: "Direct buses from Madurai, Trichy, Kochi, and Trivandrum.",
        cabTips: "Road up from Theni to Kumily has wide sweeping hairpin curves with fruit stalls selling fresh pomegranates and grapes."
      }
    },
    hubDistances: {
      fromTrichyKm: 260,
      fromChennaiKm: 540,
      fromKochiKm: 160,
      fromMaduraiKm: 140,
      fromBangaloreKm: 510
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Always buy organic spices with FSSAI batch verification from official government Sahyadri Spice Cooperatives.",
      "Book morning 07:30 AM boat cruise in advance for best wildlife sighting probabilities.",
      "Wear leech socks when participating in guided jungle night treks."
    ],
    emergencyContacts: {
      police: "+91 4869 222100 (Kumily Police Station)",
      hospital: "+91 4869 222046 (St. John's Hospital Kattappana)",
      touristHelpline: "+91 4869 222620 (Periyar Information Centre)"
    },
    geoCoordinates: { lat: 9.6031, lng: 77.1615 }
  },
  {
    id: "kovalam",
    name: "Kovalam",
    state: "Kerala",
    district: "Thiruvananthapuram",
    tagline: "Crescent golden beaches, red-striped lighthouse & ayurveda",
    description: "Internationally famous since the 1930s, Kovalam consists of three adjacent crescent beaches separated by rocky promontories. It is renowned for authentic Ayurvedic rejuvenating wellness centres, fresh coastal seafood shacks, and tranquil warm sea swimming.",
    heroImage: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg",
    category: "Coastal & Beaches",
    bestSeason: "October to March (Warm 23°C - 31°C; gentle tides for swimming)",
    weatherNotes: "Tropical sea breeze, spectacular Arabian Sea sunsets.",
    attractions: [
      {
        name: "Lighthouse Beach & Vizhinjam Lighthouse",
        description: "The southernmost and most popular beach, dominated by a 35-meter tall striped lighthouse with a spiraling deck overlooking Kurumkal hillock.",
        verifiedHours: "Beach 24/7; Lighthouse deck 03:00 PM – 05:00 PM (Closed Mondays)",
        entryFee: "Lighthouse: ₹20 (Indians), ₹50 (Foreigners)",
        highlight: "Sweeping panorama of Poovar estuary and rocky coastline",
        mapQuery: "Vizhinjam Lighthouse Kovalam"
      },
      {
        name: "Hawah & Samudra Beaches",
        description: "Hawah (Eve's Beach) is frequented by local fishermen pulling shore seines at dawn; Samudra beach is a secluded cove for quiet meditation.",
        verifiedHours: "Open daily",
        entryFee: "Free",
        highlight: "Traditional wooden catamaran launches at sunrise",
        mapQuery: "Hawah Beach Kovalam"
      },
      {
        name: "Halcyon Castle (Napier Art Heritage)",
        description: "Constructed in 1932 by Rama Varma Valiya Koil Thampuran as a family retreat, showcasing blend of Travancore and colonial architecture.",
        verifiedHours: "10:00 AM – 05:00 PM",
        entryFee: "Free exterior access; interior dining access for guests",
        highlight: "Palatial stone architecture overlooking palm bluffs",
        mapQuery: "Halcyon Castle Kovalam"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Thiruvananthapuram International Airport (TRV)",
        distanceKm: 15,
        travelTip: "Quick 20-minute drive from Trivandrum International Airport via Kovalam Bypass Road."
      },
      train: {
        nearestStation: "Thiruvananthapuram Central (TVC)",
        distanceKm: 14,
        travelTip: "Major railway terminal with high-speed Vande Bharat and Rajdhani express connectivity."
      },
      road: {
        majorHighways: "NH66 Bypass & Kovalam-Vizhinjam Road",
        busConnectivity: "KSRTC city buses run every 15 minutes between East Fort (Trivandrum) and Kovalam.",
        cabTips: "Fixed-rate pre-paid taxi counter available inside Trivandrum Airport Arrivals."
      }
    },
    hubDistances: {
      fromTrichyKm: 385,
      fromChennaiKm: 730,
      fromKochiKm: 215,
      fromMaduraiKm: 310,
      fromBangaloreKm: 690
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Look for Government 'Green Leaf' or 'Olive Leaf' accredited Ayurveda clinics for authentic treatments.",
      "Lifeguards are stationed at Lighthouse Beach; obey safety flags regarding undercurrents.",
      "Pair your visit with Sri Padmanabhaswamy Temple in Trivandrum city (14 km away)."
    ],
    emergencyContacts: {
      police: "+91 471 2480255 (Kovalam Tourist Police Station)",
      hospital: "+91 471 2528386 (Government Medical College Thiruvananthapuram)",
      touristHelpline: "+91 471 2321132 (Kerala Tourism HQ)"
    },
    geoCoordinates: { lat: 8.4004, lng: 76.9787 }
  },
  {
    id: "athirappilly",
    name: "Athirappilly",
    state: "Kerala",
    district: "Thrissur",
    tagline: "The Niagara of South India & pristine Western Ghats rainforest",
    description: "Located at the entrance to the Sholayar ranges, Athirappilly is Kerala's largest waterfall, plummeting 80 feet across a 330-foot wide rock gorge surrounded by evergreen riparian forests inhabited by all four South Indian hornbill species.",
    heroImage: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg",
    category: "Waterfalls & Wildlife",
    bestSeason: "July to November (Peak monsoon and post-monsoon roaring cascades; open year-round)",
    weatherNotes: "Jungle spray creates natural mist cool zones; rainforest climate with occasional humidity.",
    attractions: [
      {
        name: "Athirappilly Main Falls & River Gorge",
        description: "The thunderous Chalakudy River drops dramatically into a misty gorge. A bamboo-railed stone pathway leads down to the rock base.",
        verifiedHours: "08:00 AM – 05:00 PM Daily",
        entryFee: "₹50 (Indians), ₹150 (Foreigners), Parking ₹50",
        highlight: "Walking right up to the spray mist at the waterfall base",
        mapQuery: "Athirappilly Waterfalls Chalakudy"
      },
      {
        name: "Vazhachal Falls & Forest Reserve",
        description: "Located 5 km upstream, this scenic cascading rapid flows over sloping granite boulders flanked by medicinal herbal gardens.",
        verifiedHours: "08:00 AM – 05:00 PM Daily",
        entryFee: "Included in same Athirappilly ticket",
        highlight: "Riparian bird sanctuary habitat of the Great Indian Hornbill",
        mapQuery: "Vazhachal Waterfalls"
      },
      {
        name: "Thumboormuzhy Dam & Butterfly Garden",
        description: "A check-dam with a graceful 140-meter suspension hanging bridge across the river, hosting over 148 species of native butterflies.",
        verifiedHours: "09:00 AM – 05:00 PM Daily",
        entryFee: "₹20 per adult",
        highlight: "Walking across the hanging suspension bridge with river views",
        mapQuery: "Thumboormuzhy Butterfly Garden"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Cochin International Airport (COK)",
        distanceKm: 42,
        travelTip: "Athirappilly is just a 1-hour scenic drive from Cochin Airport through rubber and palm plantations."
      },
      train: {
        nearestStation: "Chalakudy Railway Station (CKI) / Thrissur (TCR)",
        distanceKm: 30,
        travelTip: "KSRTC buses leave Chalakudy bus station to Athirappilly every 30 minutes."
      },
      road: {
        majorHighways: "SH21 (Chalakudy-Valparai Highway)",
        busConnectivity: "Direct buses from Chalakudy, Angamaly, and Thrissur.",
        cabTips: "Pre-book a taxi for a round-trip from Kochi/Chalakudy as return network cabs at the falls can be scarce."
      }
    },
    hubDistances: {
      fromTrichyKm: 310,
      fromChennaiKm: 610,
      fromKochiKm: 65,
      fromMaduraiKm: 280,
      fromBangaloreKm: 460
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Wear sturdy non-slip footwear for the 15-minute stone trail descending to the waterfall base.",
      "Swimming near the waterfall drop is strictly prohibited due to strong hidden undertows.",
      "Do not feed wild macaques on the forested pathways."
    ],
    emergencyContacts: {
      police: "+91 480 2769222 (Athirappilly Police Station)",
      hospital: "+91 480 2701812 (Government Taluk Hospital Chalakudy)",
      touristHelpline: "+91 487 2320800 (DTPC Thrissur)"
    },
    geoCoordinates: { lat: 10.2851, lng: 76.5698 }
  },

  // --- TAMIL NADU DESTINATIONS ---
  {
    id: "trichy",
    name: "Tiruchirappalli (Trichy)",
    state: "Tamil Nadu",
    district: "Tiruchirappalli",
    tagline: "Home of Rockfort, Grand Anicut & the majestic Sri Ranganathaswamy Temple",
    description: "Located centrally on the banks of the sacred Kaveri River, Trichy is the historic heartland of Tamil Nadu and the home district of Tourist Guidelines Master founder Thamarai Selvam. It hosts Srirangam (the largest functioning Hindu temple complex in the world), the 3.8-billion-year-old Rockfort hill, and the 2nd-century Grand Anicut (Kallanai), an engineering wonder of King Karikala Chola.",
    heroImage: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg",
    category: "Heritage & Temples",
    bestSeason: "October to March (Comfortable 20°C - 30°C; major temple festivals like Vaikunta Ekadashi in Dec-Jan)",
    weatherNotes: "Tropical central plains climate. Early morning and evening visits are ideal for temples and Rockfort stairs.",
    attractions: [
      {
        name: "Sri Ranganathaswamy Temple (Srirangam)",
        description: "Sprawling across 156 acres on an island formed by Kaveri and Kollidam rivers, with 21 magnificent gopurams including the 73-meter Rajagopuram, 39 pavilions, and UNESCO Asia-Pacific Award of Merit.",
        verifiedHours: "06:00 AM – 01:00 PM & 03:15 PM – 09:00 PM Daily",
        entryFee: "General entry free; Quick Darshan ₹100; Viswaroopa Seva ₹100",
        highlight: "Largest functioning temple compound on Earth with 1000-pillar hall",
        mapQuery: "Sri Ranganathaswamy Temple Srirangam Trichy"
      },
      {
        name: "Rockfort Ucchi Pillayar Temple",
        description: "Ancient rock citadel rising 83 meters above the city plains, carved with Pallava rock-cut cave temples and topped by the Ganesha shrine accessible via 437 stone-cut steps.",
        verifiedHours: "06:00 AM – 08:00 PM Daily",
        entryFee: "₹5 per person; Camera fee ₹20",
        highlight: "Spectacular 360-degree aerial view of the Kaveri basin and Trichy skyline",
        mapQuery: "Rockfort Temple Trichy"
      },
      {
        name: "Kallanai (Grand Anicut)",
        description: "Built by Chola King Karikala in the 2nd century CE, this stone masonry dam diverted Kaveri waters to delta irrigation and remains operational after nearly 2,000 years.",
        verifiedHours: "08:00 AM – 06:00 PM Daily",
        entryFee: "Free access; landscaped riverside park ₹10",
        highlight: "Ancient Chola water engineering marvel still irrigating delta paddy",
        mapQuery: "Grand Anicut Kallanai Trichy"
      },
      {
        name: "Jambukeswarar Temple (Thiruvanaikaval)",
        description: "One of the five Pancha Bhoota Sthalams representing the element of Water (Appu). The sanctum lingam is constantly submerged under natural spring water.",
        verifiedHours: "06:00 AM – 01:00 PM & 04:00 PM – 09:00 PM Daily",
        entryFee: "General entry free; Special Darshan ₹50",
        highlight: "Sanctum sanctorum spring that continuously oozes sacred water",
        mapQuery: "Jambukeswarar Temple Thiruvanaikaval Trichy"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Tiruchirappalli International Airport (TRZ)",
        distanceKm: 8,
        travelTip: "Active international terminal with direct flights to Singapore, Dubai, Kuala Lumpur, Colombo, Chennai, and Bangalore."
      },
      train: {
        nearestStation: "Tiruchirappalli Junction (TPJ)",
        distanceKm: 4,
        travelTip: "Major Southern Railway hub connecting all cities across Tamil Nadu, Kerala, Karnataka, and Delhi."
      },
      road: {
        majorHighways: "NH45 (Chennai-Trichy Highway) & NH83 (Trichy-Coimbatore-Dindigul)",
        busConnectivity: "Central Bus Stand & Chatram Bus Stand operate 24-hour express buses to all South Indian destinations.",
        cabTips: "Thuraiyur Main Road route connects easily to northern Trichy district and Perambalur bypass."
      }
    },
    hubDistances: {
      fromTrichyKm: 0,
      fromChennaiKm: 320,
      fromKochiKm: 345,
      fromMaduraiKm: 135,
      fromBangaloreKm: 340
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Traditional dress code is strictly followed in Srirangam and Jambukeswarar: Dhotis/Pyjamas with shirt or Kurta for men; Sarees or Salwar Kameez with dupatta for women.",
      "Taste Trichy's legendary filter coffee and banana leaf meals near Chathiram and Srirangam South Tower.",
      "Visit Thuraiyur Main Road and local agricultural markets for authentic native Trichy bananas (Poovan, Rasthali, Sevvazhai)."
    ],
    emergencyContacts: {
      police: "+91 431 2412522 (Trichy City Control Room)",
      hospital: "+91 431 2401011 (Mahatma Gandhi Memorial Government Hospital)",
      touristHelpline: "+91 431 2460136 (Tamil Nadu Tourism Development Corporation Trichy)"
    },
    geoCoordinates: { lat: 10.7905, lng: 78.7047 }
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    district: "Madurai",
    tagline: "The Athens of the East & the eternal temple city",
    description: "One of the world's oldest continuously inhabited cities, dating back more than 2,500 years. Madurai is centered like a lotus around the world-famous Meenakshi Sundareswarar Temple, renowned for nocturnal food streets, fragrant jasmine (Madurai Malli), and majestic Nayakkar architecture.",
    heroImage: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg",
    category: "Heritage & Temples",
    bestSeason: "October to March (Warm 21°C - 30°C; April-May hosts the grand Chithirai Festival)",
    weatherNotes: "Warm semi-arid climate; the temple halls are cool granite sanctuaries throughout the day.",
    attractions: [
      {
        name: "Meenakshi Sundareswarar Temple",
        description: "Dravidian architectural masterwork with 14 towering sculpted gopurams reaching up to 52 meters, housing 33,000 stone sculptures, the Hall of 1000 Pillars, and the sacred Golden Lotus tank.",
        verifiedHours: "05:00 AM – 12:30 PM & 04:00 PM – 10:00 PM (Night Palliyarai procession at 09:30 PM)",
        entryFee: "General entry free; Special Darshan ₹100; Thousand Pillar Hall ₹50",
        highlight: "Nightly procession where Sundareswarar is carried in a silver palanquin to Meenakshi's shrine",
        mapQuery: "Meenakshi Amman Temple Madurai"
      },
      {
        name: "Thirumalai Nayakkar Mahal",
        description: "17th-century royal palace blending Dravidian and Indo-Saracenic styles, renowned for its massive cylindrical stone pillars (20m high) and ornamental stucco work.",
        verifiedHours: "09:00 AM – 05:00 PM (Sound & Light show in English at 06:45 PM)",
        entryFee: "₹10 per adult; Light & Sound show ₹50",
        highlight: "Gigantic courtyard pillars and royal durbar ceiling frescos",
        mapQuery: "Thirumalai Nayakkar Palace Madurai"
      },
      {
        name: "Gandhi Memorial Museum (Tamukkam Palace)",
        description: "Housed in the historic palace of Rani Mangammal, this museum displays the blood-stained dhoti worn by Mahatma Gandhi when he was assassinated in 1948.",
        verifiedHours: "10:00 AM – 01:00 PM & 02:00 PM – 05:30 PM (Closed Fridays)",
        entryFee: "Free entry",
        highlight: "Sacred historical relics from the Indian Independence movement",
        mapQuery: "Gandhi Memorial Museum Madurai"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Madurai Airport (IXM)",
        distanceKm: 12,
        travelTip: "Direct flights to Chennai, Bangalore, Hyderabad, Mumbai, Colombo, and Dubai."
      },
      train: {
        nearestStation: "Madurai Junction (MDU)",
        distanceKm: 2,
        travelTip: "Major terminal with direct air-conditioned express trains to Chennai (Pandian Express, Tejas, Vande Bharat)."
      },
      road: {
        majorHighways: "NH44 (Kashmir-Kanyakumari Corridor) & NH85",
        busConnectivity: "Mattuthavani Integrated Bus Terminus (MIBT) offers 24/7 buses to all Tamil Nadu and Kerala destinations.",
        cabTips: "Madurai auto-rickshaws around temple streets are quick; agree on metered or app-based fares."
      }
    },
    hubDistances: {
      fromTrichyKm: 135,
      fromChennaiKm: 460,
      fromKochiKm: 260,
      fromMaduraiKm: 0,
      fromBangaloreKm: 435
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "No mobile phones or electronic gadgets are permitted inside Meenakshi Temple; safely deposit them at the official West Tower lockers (₹10).",
      "Do not miss Madurai's famous cooling dessert drink 'Famous Jigarthanda' at East Marret Street.",
      "Purchase GI-tagged fragrant Madurai Malli (jasmine garlands) at the early morning Mattuthavani flower market."
    ],
    emergencyContacts: {
      police: "+91 452 2341234 (Madurai Temple Police Booth)",
      hospital: "+91 452 2532535 (Government Rajaji Hospital)",
      touristHelpline: "+91 452 2334757 (TTDC Madurai)"
    },
    geoCoordinates: { lat: 9.9252, lng: 78.1198 }
  },
  {
    id: "ooty",
    name: "Ooty (Udhagamandalam)",
    state: "Tamil Nadu",
    district: "The Nilgiris",
    tagline: "The Queen of Hill Stations & UNESCO Toy Train",
    description: "Perched at 2,240 meters amidst the Blue Mountains (Nilgiris), Ooty was established by John Sullivan in the 1820s. Famous for eucalyptus groves, pine forests, manicured botanical gardens, the UNESCO World Heritage steam toy train, and crisp alpine weather.",
    heroImage: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg",
    category: "Hill Station",
    bestSeason: "October to June (Daytime 15°C - 20°C; Nighttime down to 5°C; Annual Flower Show in May)",
    weatherNotes: "Chilly evenings and nights; warm woolens, sweaters, and thermals recommended in winter.",
    attractions: [
      {
        name: "Nilgiri Mountain Railway (Toy Train)",
        description: "Built in 1908 and recognized by UNESCO, this meter-gauge railway uses a unique rack and pinion system with Swiss steam locomotives through 16 tunnels and 250 bridges.",
        verifiedHours: "Morning departure from Mettupalayam at 07:10 AM; Ooty to Coonoor multiple runs daily",
        entryFee: "First Class ₹205 - ₹600; Second Class ₹30 - ₹150 (Advance IRCTC booking required)",
        highlight: "Steaming through dramatic mountain gorges and tea cliffs",
        mapQuery: "Udagamandalam Railway Station Ooty"
      },
      {
        name: "Government Botanical Gardens",
        description: "55-acre terraced garden established in 1848 by William Graham McIvor, home to over 1,000 exotic species, a 20-million-year-old fossilized tree trunk, and Italian gardens.",
        verifiedHours: "07:00 AM – 06:30 PM Daily",
        entryFee: "₹40 (Adults), ₹20 (Children); Camera ₹50",
        highlight: "Centuries-old cork trees and manicured floral terraces",
        mapQuery: "Government Botanical Gardens Ooty"
      },
      {
        name: "Doddabetta Peak",
        description: "The highest mountain in the Nilgiri Hills at 2,637 meters, featuring a telescope house offering panoramic vistas of Bandipur and Chamundi Hills.",
        verifiedHours: "09:00 AM – 06:00 PM Daily",
        entryFee: "₹10 per adult; Telescope ₹10",
        highlight: "Highest viewpoint in Tamil Nadu with telescope house",
        mapQuery: "Doddabetta Peak Ooty"
      },
      {
        name: "Pykara Lake & Waterfalls",
        description: "Pristine Toda sacred river cascading into twin waterfalls with speedboating on the serene backwaters bordered by shola forests.",
        verifiedHours: "09:30 AM – 05:30 PM Daily",
        entryFee: "₹10 entry; Speedboat ₹800 for 8-seater",
        highlight: "Quiet pine-fringed boating away from commercial crowds",
        mapQuery: "Pykara Lake and Waterfalls Ooty"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Coimbatore International Airport (CJB)",
        distanceKm: 88,
        travelTip: "Taxi takes roughly 3 hours ascending via the Mettupalayam and Coonoor ghat road."
      },
      train: {
        nearestStation: "Mettupalayam (MTP) for toy train / Coimbatore Junction (CBE) for broad gauge",
        distanceKm: 50,
        travelTip: "Nilgiri Express connects Chennai directly to Mettupalayam to catch the morning UNESCO toy train."
      },
      road: {
        majorHighways: "NH181 (Gundlupet-Ooty-Coimbatore)",
        busConnectivity: "Frequent TNSTC buses from Coimbatore, Mettupalayam, Mysore, and Bangalore.",
        cabTips: "Kalhatty ghat route from Mysore has 36 steep hairpin bends; only experienced hill drivers with low-gear braking permitted."
      }
    },
    hubDistances: {
      fromTrichyKm: 290,
      fromChennaiKm: 535,
      fromKochiKm: 280,
      fromMaduraiKm: 300,
      fromBangaloreKm: 280
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Buy authentic Toda hand-embroidered shawls (GI certified) from government Poompuhar tribal emporiums.",
      "Sample fresh Nilgiri eucalyptus oil, wintergreen oil, and freshly baked homemade chocolates on Commercial Road.",
      "Nilgiri district strictly enforces a ban on plastic water bottles and carry bags; bring reusable metal containers."
    ],
    emergencyContacts: {
      police: "+91 423 2444003 (Ooty Town Police Station)",
      hospital: "+91 423 2442212 (Government Headquarters Hospital Ooty)",
      touristHelpline: "+91 423 2443977 (Tourist Office Ooty)"
    },
    geoCoordinates: { lat: 11.4102, lng: 76.6950 }
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal",
    state: "Tamil Nadu",
    district: "Dindigul",
    tagline: "The Princess of Hill Stations & the star-shaped Kodai lake",
    description: "Nestled at 2,133 meters in the Palani Hills, Kodaikanal was developed in 1845 by American missionaries. Renowned for its tranquil man-made star lake, misty cliff walks, pine forests, kurinji flowers, and cool crisp climate.",
    heroImage: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg",
    category: "Hill Station",
    bestSeason: "September to May (Crisp 11°C - 20°C; refreshing mist and waterfalls)",
    weatherNotes: "Mild climate, fog rolls across Kodai lake by 4:00 PM; light jackets needed.",
    attractions: [
      {
        name: "Kodaikanal Lake & Coaker's Walk",
        description: "A 60-acre star-shaped lake designed in 1863 with bicycle rentals and pedal boating. Adjacent Coaker's Walk is a 1-km paved pedestrian path on the edge of sheer mountain cliffs.",
        verifiedHours: "Lake boating 09:00 AM – 05:30 PM; Coaker's Walk 07:00 AM – 07:00 PM",
        entryFee: "Coaker's Walk ₹30; 2-Seater Pedal Boat ₹150; Cycle rent ₹50/hr",
        highlight: "Bicycling around the 5 km lake perimeter on misty mornings",
        mapQuery: "Kodaikanal Lake Coakers Walk"
      },
      {
        name: "Pillar Rocks & Guna Caves (Devil's Kitchen)",
        description: "Three gigantic granite rock boulders standing vertically 122 meters high, overlooking deep forest valleys with mysterious cave chambers nestled between the crevices.",
        verifiedHours: "09:00 AM – 04:30 PM Daily",
        entryFee: "₹10 entry per person",
        highlight: "Dramatic vertical rock sentinels framed by shifting fog",
        mapQuery: "Pillar Rocks Kodaikanal"
      },
      {
        name: "Bryant Park & Bear Shola Falls",
        description: "20-acre botanical park housing rare hybrids of roses, dahlias, and bodhi trees, with seasonal waterfalls nestled in dense pine woods.",
        verifiedHours: "09:00 AM – 06:00 PM Daily",
        entryFee: "₹30 per adult",
        highlight: "Glasshouse with over 740 flower varieties and walking paths",
        mapQuery: "Bryant Park Kodaikanal"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Madurai Airport (IXM)",
        distanceKm: 125,
        travelTip: "Taxi from Madurai takes 3 hours via Batlagundu and the scenic Palani ghat road."
      },
      train: {
        nearestStation: "Kodai Road Railway Station (KQN)",
        distanceKm: 80,
        travelTip: "Direct trains on the Chennai-Madurai-Trivandrum route; shared and private cabs wait at Kodai Road station."
      },
      road: {
        majorHighways: "SH156 (Ghat Road from Batlagundu) & Palani-Kodaikanal Road",
        busConnectivity: "Direct government buses from Dindigul, Madurai, Trichy, and Chennai.",
        cabTips: "Ghat road is broad and well-maintained with viewing decks at Dum Dum Rock falls."
      }
    },
    hubDistances: {
      fromTrichyKm: 195,
      fromChennaiKm: 520,
      fromKochiKm: 295,
      fromMaduraiKm: 120,
      fromBangaloreKm: 465
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Try fresh homemade cheese and organic plum jam from local dairy cooperatives.",
      "Check out eco-friendly Kurinji organic honey harvested from high-altitude wild bee hives.",
      "Follow forest department advisories when hiking around Vattakanal and Dolphin's Nose trails."
    ],
    emergencyContacts: {
      police: "+91 4542 240222 (Kodaikanal Police Station)",
      hospital: "+91 4542 241292 (KHMS Van Allen Hospital)",
      touristHelpline: "+91 4542 241675 (TTDC Kodaikanal)"
    },
    geoCoordinates: { lat: 10.2381, lng: 77.4892 }
  },
  {
    id: "rameswaram",
    name: "Rameswaram",
    state: "Tamil Nadu",
    district: "Ramanathapuram",
    tagline: "Sacred island pilgrimage, Pamban sea bridge & ghost town Dhanushkodi",
    description: "Located on Pamban Island in the Gulf of Mannar, Rameswaram is one of the four sacred Char Dham pilgrimage sites of India. Renowned for Sri Ramanathaswamy Temple with the longest pillared corridor in the world, the legendary Pamban sea bridge, and the ghost town of Dhanushkodi where the Indian Ocean meets the Bay of Bengal.",
    heroImage: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg",
    category: "Heritage & Temples",
    bestSeason: "October to April (Pleasant coastal breezes 22°C - 30°C)",
    weatherNotes: "Tropical island climate; sun is bright by midday, so carry caps and hydration.",
    attractions: [
      {
        name: "Sri Ramanathaswamy Temple & 22 Theerthams",
        description: "Historic Shiva temple with 1,212 granite carved pillars along 197-meter corridors. Pilgrims take sacred dips in Agni Theertham sea before bathing in the 22 holy well theerthams within the temple walls.",
        verifiedHours: "05:00 AM – 01:00 PM & 03:00 PM – 09:00 PM (Spadika Linga Darshan 05:00 AM – 06:00 AM)",
        entryFee: "General entry free; 22 Theertham bathing ticket ₹25; Special Darshan ₹50 - ₹100",
        highlight: "World's longest carved temple corridor and 22 sacred medicinal wells",
        mapQuery: "Ramanathaswamy Temple Rameswaram"
      },
      {
        name: "Pamban Sea Bridge",
        description: "India's first sea bridge opened in 1914 with a Scherzer rolling lift span allowing ships to pass beneath railway tracks over the open ocean.",
        verifiedHours: "Open view from road bridge 24/7",
        entryFee: "Free scenic drive along the Annai Indira Gandhi Road Bridge",
        highlight: "Watching trains roll directly over the azure blue sea waters",
        mapQuery: "Pamban Bridge Rameswaram"
      },
      {
        name: "Dhanushkodi & Arichal Munai (Rama Setu Viewpoint)",
        description: "The submerged ghost town destroyed in the 1964 cyclone, situated at the tip of the sand spit only 18 miles from Sri Lanka, where the calm Mahodadhi meets the rough Ratnakara ocean.",
        verifiedHours: "06:00 AM – 05:00 PM Daily (Strict gate timings for safety)",
        entryFee: "Free access via national highway extension road; Government minibus available",
        highlight: "Ghost town ruins of church, railway station and meeting of two oceans",
        mapQuery: "Arichal Munai Dhanushkodi"
      },
      {
        name: "Dr. A.P.J. Abdul Kalam National Memorial",
        description: "Built by DRDO in honor of India's beloved missile scientist and 11th President, displaying replicas of rockets, missiles, and his personal library.",
        verifiedHours: "09:00 AM – 01:00 PM & 02:00 PM – 05:00 PM (Closed Tuesdays)",
        entryFee: "Free entry",
        highlight: "Tribute to Dr. Kalam's life, scientific contributions, and childhood home",
        mapQuery: "APJ Abdul Kalam National Memorial Rameswaram"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Madurai Airport (IXM)",
        distanceKm: 175,
        travelTip: "Madurai is the closest airport; NH87 connects directly across the Pamban bridge in 3.5 hours."
      },
      train: {
        nearestStation: "Rameswaram Railway Station (RMM) / Mandapam (MMM)",
        distanceKm: 2,
        travelTip: "Direct express trains from Chennai, Trichy, Coimbatore, Varanasi, and Okha."
      },
      road: {
        majorHighways: "NH87 (Kochi-Dhanushkodi Highway)",
        busConnectivity: "Direct SETC and TNSTC buses from Trichy (Central Bus Stand), Madurai, Chennai, and Kanyakumari.",
        cabTips: "Private cabs and auto-rickshaws operate throughout Rameswaram town to Agni Theertham and temple gates."
      }
    },
    hubDistances: {
      fromTrichyKm: 225,
      fromChennaiKm: 560,
      fromKochiKm: 420,
      fromMaduraiKm: 170,
      fromBangaloreKm: 590
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Pilgrims traditionally begin with sea bath at Agni Theertham before entering the temple's 22 internal wells.",
      "Dress code strictly enforced: traditional clothes required; wet clothes from well bathing must be changed before entering the sanctum.",
      "Dhanushkodi beach winds are intense in the afternoon; visit between 7:00 AM and 11:00 AM."
    ],
    emergencyContacts: {
      police: "+91 4573 221223 (Rameswaram Town Police Station)",
      hospital: "+91 4573 221233 (Government Hospital Rameswaram)",
      touristHelpline: "+91 4573 221371 (Tourist Information Office)"
    },
    geoCoordinates: { lat: 9.2876, lng: 79.3129 }
  },
  {
    id: "thanjavur",
    name: "Thanjavur (Tanjore)",
    state: "Tamil Nadu",
    district: "Thanjavur",
    tagline: "The Rice Bowl of Tamil Nadu & the Great Living Chola Temples",
    description: "The historical capital of the mighty Chola Empire in the fertile Kaveri Delta, just 55 km east of Trichy. Celebrated for the UNESCO World Heritage Brihadisvara Temple (Big Temple), world-famous Tanjore paintings with 22-carat gold leaf, Thanjavur dancing dolls, and the historic Maratha Palace.",
    heroImage: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg",
    category: "Heritage & Temples",
    bestSeason: "October to March (Pleasant 22°C - 30°C; harvest festival Pongal in January)",
    weatherNotes: "Delta breezes keep evenings pleasant; temple granite can be warm around noon.",
    attractions: [
      {
        name: "Brihadisvara Temple (The Big Temple)",
        description: "Built by Emperor Raja Raja Chola I in 1010 CE, this 1000-year-old architectural marvel features a 66-meter granite vimana topped by an 80-tonne single granite capstone and an enormous monolithic Nandi bull.",
        verifiedHours: "06:00 AM – 12:30 PM & 04:00 PM – 08:30 PM Daily",
        entryFee: "Free entry (ASI protected monument)",
        highlight: "Interlocking stone architecture that has stood undefeated for over a millennium",
        mapQuery: "Brihadeeswara Temple Thanjavur"
      },
      {
        name: "Thanjavur Maratha Palace & Saraswathi Mahal Library",
        description: "Built originally by the Nayak rulers and enhanced by the Marathas, housing the centuries-old library with over 49,000 rare palm-leaf and paper manuscripts.",
        verifiedHours: "09:00 AM – 01:00 PM & 02:00 PM – 05:00 PM Daily",
        entryFee: "₹30 (Indians), ₹100 (Foreigners); Camera ₹50",
        highlight: "Ancient Chola bronze gallery featuring iconic Nataraja masterpieces",
        mapQuery: "Thanjavur Royal Palace and Art Gallery"
      },
      {
        name: "Schwartz Church & Sivaganga Park",
        description: "Built in 1779 by Danish missionary Rev. Christian Friedrich Schwartz under the patronage of Raja Serfoji II, reflecting Thanjavur's pluralistic history.",
        verifiedHours: "09:00 AM – 05:00 PM Daily",
        entryFee: "Free entry",
        highlight: "Marble bas-relief showing Raja Serfoji bidding farewell to Schwartz",
        mapQuery: "Schwartz Church Thanjavur"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Tiruchirappalli International Airport (TRZ)",
        distanceKm: 55,
        travelTip: "Convenient 50-minute drive from Trichy Airport along the 4-lane NH83 highway."
      },
      train: {
        nearestStation: "Thanjavur Junction (TJ)",
        distanceKm: 1.5,
        travelTip: "Direct express trains from Chennai (Uzhavan Express, Cholan Express), Bangalore, and Madurai."
      },
      road: {
        majorHighways: "NH83 (Trichy-Thanjavur Expressway) & NH36",
        busConnectivity: "Buses depart every 5 minutes from Trichy Central & Chatram bus stands directly to Thanjavur.",
        cabTips: "A combined 1-day or 2-day circuit combining Trichy (Srirangam) and Thanjavur (Big Temple) is the most popular cultural itinerary in South India."
      }
    },
    hubDistances: {
      fromTrichyKm: 55,
      fromChennaiKm: 340,
      fromKochiKm: 395,
      fromMaduraiKm: 190,
      fromBangaloreKm: 395
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Purchase certified authentic Tanjore Gold Leaf paintings directly from government artisans at Poompuhar Crafts Centre.",
      "Watch the lighting of the Brihadisvara Temple vimana at 6:30 PM for a breathtaking sight.",
      "Taste Thanjavur's traditional vegetarian banana leaf feast with native Kaveri delta red rice and sambar."
    ],
    emergencyContacts: {
      police: "+91 4362 230100 (Thanjavur West Police Station)",
      hospital: "+91 4362 240024 (Thanjavur Medical College Hospital)",
      touristHelpline: "+91 4362 230984 (Tourist Office Thanjavur)"
    },
    geoCoordinates: { lat: 10.7870, lng: 79.1378 }
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram (Mamallapuram)",
    state: "Tamil Nadu",
    district: "Chengalpattu",
    tagline: "UNESCO monolithic Shore Temple & 7th-century rock reliefs",
    description: "A coastal heritage jewel on the Coromandel Coast of the Bay of Bengal, built by the Pallava dynasty in the 7th and 8th centuries. Renowned for its Shore Temple, the monumental open-air rock relief of Arjuna's Penance, the monolithic Pancha Rathas, and Krishna's Butterball balance boulder.",
    heroImage: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg",
    category: "Heritage & Temples",
    bestSeason: "October to March (Breezy 22°C - 30°C; pleasant sea breeze; Mamallapuram Dance Festival in Jan-Feb)",
    weatherNotes: "Coastal sunshine; mornings are serene along the beach and rock monuments.",
    attractions: [
      {
        name: "Shore Temple",
        description: "Built in 700–728 CE by King Rajasimha, this structural temple made of cut granite blocks stands directly facing the crashing waves of the Bay of Bengal.",
        verifiedHours: "06:00 AM – 06:00 PM Daily",
        entryFee: "Combined ASI ticket: ₹40 (Indians), ₹600 (Foreigners) covering Shore Temple & Pancha Rathas",
        highlight: "1,300-year-old stone temple bathed in morning ocean spray",
        mapQuery: "Shore Temple Mahabalipuram"
      },
      {
        name: "Arjuna's Penance (Descent of the Ganges)",
        description: "A monumental 27-meter by 9-meter boulder carved with over 100 figures of gods, celestial beings, gandharvas, and life-sized elephants witnessing the descent of the sacred Ganges.",
        verifiedHours: "Open daylight hours",
        entryFee: "Free access (Open air roadside monument)",
        highlight: "World's largest open-air stone bas-relief carving",
        mapQuery: "Arjunas Penance Mahabalipuram"
      },
      {
        name: "Pancha Rathas (Five Chariots)",
        description: "Five monolithic temple models each carved out of a single enormous boulder of granite during King Narasimhavarman I's reign, named after the Pandavas.",
        verifiedHours: "06:00 AM – 06:00 PM Daily",
        entryFee: "Included in combined ASI ticket",
        highlight: "Monolithic elephant and lion statues carved with unbelievable anatomical precision",
        mapQuery: "Pancha Rathas Mahabalipuram"
      },
      {
        name: "Krishna's Butterball",
        description: "A giant natural granite boulder weighing 250 tonnes balanced precariously on a 45-degree smooth rock slope for over 1,200 years defying gravity.",
        verifiedHours: "Open daylight hours",
        entryFee: "Free access",
        highlight: "Fascinating geological marvel and playful photo spot",
        mapQuery: "Krishnas Butterball Mahabalipuram"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Chennai International Airport (MAA)",
        distanceKm: 55,
        travelTip: "Scenic 1-hour drive along the picturesque East Coast Road (ECR)."
      },
      train: {
        nearestStation: "Chengalpattu Junction (CGL)",
        distanceKm: 29,
        travelTip: "Frequent suburban trains from Chennai Central/Beach to Chengalpattu with connecting buses to Mahabalipuram."
      },
      road: {
        majorHighways: "State Highway 49 (East Coast Road) & Old Mahabalipuram Road (OMR)",
        busConnectivity: "Direct air-conditioned Volvo buses (Route 588, 599) run from Chennai CMBT and Thiruvanmiyur.",
        cabTips: "Uber, Ola, and local tourist taxis frequently service the ECR corridor."
      }
    },
    hubDistances: {
      fromTrichyKm: 290,
      fromChennaiKm: 55,
      fromKochiKm: 660,
      fromMaduraiKm: 430,
      fromBangaloreKm: 350
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Visit living stone sculpture studios along Five Rathas Road to observe traditional sthapathis (stone sculptors) at work.",
      "Check out fresh fish fry prepared at coastal beach shacks along Othavadai Street.",
      "Carry sunscreen, a sun hat, and water as the monuments have open stone courtyards."
    ],
    emergencyContacts: {
      police: "+91 44 27442229 (Mahabalipuram Police Station)",
      hospital: "+91 44 27442335 (Government Hospital Mamallapuram)",
      touristHelpline: "+91 44 27442232 (TTDC Tourist Information Bureau)"
    },
    geoCoordinates: { lat: 12.6269, lng: 80.1927 }
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari (Cape Comorin)",
    state: "Tamil Nadu",
    district: "Kanyakumari",
    tagline: "The Lands End where three mighty oceans unite",
    description: "The southernmost tip of the Indian subcontinent, where the Arabian Sea, the Bay of Bengal, and the Indian Ocean converge (Triveni Sangam). Famous for magical simultaneous sunrises and sunsets, the rock memorial of Swami Vivekananda, the 133-foot Thiruvalluvar Statue, and the 3,000-year-old Bhagavathy Amman Temple.",
    heroImage: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg",
    category: "Coastal & Beaches",
    bestSeason: "October to March (Delightful 23°C - 31°C; Chitra Pournami in April-May shows simultaneous sunset and moonrise)",
    weatherNotes: "Strong refreshing ocean breezes year-round; the sea horizon offers unbroken views.",
    attractions: [
      {
        name: "Vivekananda Rock Memorial & Thiruvalluvar Statue",
        description: "Built in 1970 on twin rocks 500 meters off the coast where Swami Vivekananda meditated in 1892, adjacent to the towering 133-foot stone colossus of philosopher Thiruvalluvar.",
        verifiedHours: "Ferry service 08:00 AM – 04:00 PM Daily (Subject to sea conditions)",
        entryFee: "Ferry ticket ₹50; Memorial entry ₹20",
        highlight: "Taking the ocean ferry and meditating in the rock dhyana mandapam",
        mapQuery: "Vivekananda Rock Memorial Kanyakumari"
      },
      {
        name: "Triveni Sangam & Sunset Point",
        description: "The sacred union point of three distinct bodies of water, where waves from three directions collide in mesmerizing patterns.",
        verifiedHours: "Open 24/7; Peak visiting hours 05:45 AM (Sunrise) and 05:45 PM (Sunset)",
        entryFee: "Free access",
        highlight: "Witnessing sunrise and sunset from the exact same beach platform",
        mapQuery: "Triveni Sangam Kanyakumari"
      },
      {
        name: "Bhagavathy Amman Temple (Kanyakumari Temple)",
        description: "3,000-year-old coastal temple dedicated to Goddess Kanya Kumari, legendary for the sparkling diamond nose ring visible far out at sea.",
        verifiedHours: "04:30 AM – 12:30 PM & 04:00 PM – 08:30 PM Daily",
        entryFee: "Free entry; Special Darshan ₹20 - ₹50",
        highlight: "Ancient coastal sanctum with sparkling diamond nose-stud",
        mapQuery: "Kanyakumari Amman Temple"
      }
    ],
    travelRoutes: {
      air: {
        nearestAirport: "Thiruvananthapuram International Airport (TRV)",
        distanceKm: 90,
        travelTip: "Trivandrum airport is the closest; taxi takes about 2 hours along the NH66 corridor."
      },
      train: {
        nearestStation: "Kanniyakumari Railway Station (CAPE)",
        distanceKm: 1,
        travelTip: "The southern terminus of the Indian Railways network, with direct trains from Kashmir, Mumbai, Delhi, and Dibrugarh."
      },
      road: {
        majorHighways: "NH44 (North-South Corridor Terminus) & NH66",
        busConnectivity: "Direct overnight SETC buses from Chennai, Trichy, Coimbatore, Bangalore, and Madurai.",
        cabTips: "Everything in town is within 2 km of the beachfront; walking and auto-rickshaws are convenient."
      }
    },
    hubDistances: {
      fromTrichyKm: 380,
      fromChennaiKm: 705,
      fromKochiKm: 310,
      fromMaduraiKm: 245,
      fromBangaloreKm: 670
    },
    verifiedDate: "Verified: October 2026",
    localCultureTips: [
      "Men must remove their shirts before entering the Bhagavathy Amman Temple per traditional Travancore customs.",
      "Wake up by 5:30 AM to secure a viewing spot at Sunrise Point overlooking the Vivekananda Rock.",
      "Try local coastal banana chips and palm jaggery sweets at the seaside market."
    ],
    emergencyContacts: {
      police: "+91 4652 246224 (Kanyakumari Coastal Police)",
      hospital: "+91 4652 246222 (Government Hospital Kanyakumari)",
      touristHelpline: "+91 4652 246276 (TTDC Tourist Office)"
    },
    geoCoordinates: { lat: 8.0883, lng: 77.5385 }
  }
];

export const HOTELS_DATA: Hotel[] = [
  {
    id: "h-munnar-tea-sanctuary",
    name: "Munnar Tea Sanctuary & Heritage Estate",
    destinationId: "munnar",
    destinationName: "Munnar",
    state: "Kerala",
    category: "Heritage Resort",
    starRating: 4.8,
    approxPricePerNight: 4200,
    address: "Pothamedu Viewpoint Road, Near Pallivasal, Munnar, Kerala 685612",
    phone: "+91 4865 231450",
    email: "reservations@munnarteasanctuary.com",
    bookingWebsiteUrl: "https://tourism.gov.in",
    mapQuery: "Pothamedu Munnar Resort",
    roomTypes: [
      { type: "Deluxe Tea Garden Room", description: "Balcony overlooking terraced tea slopes, king bed, valley mist views", approxPrice: 4200, maxOccupancy: 2 },
      { type: "Plantation Heritage Suite", description: "Spacious wooden cottage with fireplace, separate living area, panoramic balcony", approxPrice: 6500, maxOccupancy: 3 },
      { type: "Family 2-Bedroom Chalet", description: "Interconnected rooms for families, 2 king beds, kitchenette", approxPrice: 9800, maxOccupancy: 5 }
    ],
    facilities: {
      hasAC: false,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: false
    },
    unverifiedFacilitiesNote: "Highland climate does not require AC; ceramic room heaters provided upon request. Spa operates seasonally.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg",
    featured: true
  },
  {
    id: "h-alleppey-royal-houseboat",
    name: "Punnamada Royal Heritage Houseboat & Backwater Suites",
    destinationId: "alleppey",
    destinationName: "Alleppey",
    state: "Kerala",
    category: "Backwater Houseboat",
    starRating: 4.9,
    approxPricePerNight: 8500,
    address: "Punnamada Jetty, Finishing Point, Alappuzha, Kerala 688013",
    phone: "+91 477 2243890",
    email: "cruise@punnamadahouseboats.com",
    bookingWebsiteUrl: "https://keralatourism.org",
    mapQuery: "Punnamada Finishing Point Alappuzha",
    roomTypes: [
      { type: "1-Bedroom Deluxe Air-Conditioned Houseboat", description: "Private front deck, living lounge, captain, onboard cook & navigator", approxPrice: 8500, maxOccupancy: 2 },
      { type: "2-Bedroom Family Houseboat", description: "2 ensuite bedrooms with glass-walled AC lounge, traditional Kerala dining", approxPrice: 13500, maxOccupancy: 5 },
      { type: "Luxury Glass-Walled Upper Deck Houseboat", description: "Elevated second-level viewing terrace, jacuzzi, private chef", approxPrice: 19500, maxOccupancy: 4 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: false,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: false
    },
    unverifiedFacilitiesNote: "AC is powered continuously from 09:00 PM to 06:00 AM on standard tariff; full-time day AC available on Premium tariff.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/alleppey_backwater_houseboat_1793106415542.jpg",
    featured: true
  },
  {
    id: "h-kochi-colonial-harbour",
    name: "Old Fort Cochin Heritage Courtyard & Suites",
    destinationId: "kochi",
    destinationName: "Kochi",
    state: "Kerala",
    category: "Boutique Hotel",
    starRating: 4.7,
    approxPricePerNight: 5200,
    address: "Tower Road, Near St. Francis Church, Fort Kochi, Kerala 682001",
    phone: "+91 484 2218002",
    email: "stay@oldforthotelkochi.com",
    bookingWebsiteUrl: "https://keralatourism.org",
    mapQuery: "Tower Road Fort Kochi",
    roomTypes: [
      { type: "Heritage Garden Suite", description: "Portuguese arched windows, Dutch tile flooring, teak four-poster bed", approxPrice: 5200, maxOccupancy: 2 },
      { type: "Colonial Balcony Room", description: "Overlooking rain trees, antique brass fittings, walk-in shower", approxPrice: 6800, maxOccupancy: 2 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: true
    },
    unverifiedFacilitiesNote: "Onsite car parking is limited to 6 vehicles inside gate; valet street parking managed.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg"
  },
  {
    id: "h-trichy-sangam-hotel",
    name: "Sangam Hotel & Executive Residency",
    destinationId: "trichy",
    destinationName: "Tiruchirappalli",
    state: "Tamil Nadu",
    category: "Boutique Hotel",
    starRating: 4.6,
    approxPricePerNight: 3400,
    address: "Collector's Office Road, Cantonment, Tiruchirappalli, Tamil Nadu 620001",
    phone: "+91 431 2414700",
    email: "stay@sangamhoteltrichy.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Sangam Hotel Cantonment Trichy",
    roomTypes: [
      { type: "Executive Deluxe Room", description: "Modern air-conditioned room, work desk, fast Wi-Fi, city view", approxPrice: 3400, maxOccupancy: 2 },
      { type: "Club Suite", description: "Separate seating salon, complimentary buffet breakfast, airport transfers", approxPrice: 5200, maxOccupancy: 3 },
      { type: "Family 3-Bed Suite", description: "Spacious layout for temple pilgrimage families, 2 queen beds", approxPrice: 6900, maxOccupancy: 5 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: true
    },
    unverifiedFacilitiesNote: "Driver dormitory accommodation available for nominal charge of ₹250/night.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg",
    featured: true
  },
  {
    id: "h-madurai-heritage-resort",
    name: "Heritage Madurai Palace & Banyan Resort",
    destinationId: "madurai",
    destinationName: "Madurai",
    state: "Tamil Nadu",
    category: "Heritage Resort",
    starRating: 4.8,
    approxPricePerNight: 4800,
    address: "11 Melakkal Main Road, Kochadai, Madurai, Tamil Nadu 625016",
    phone: "+91 452 2385455",
    email: "contact@heritagemadurai.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Heritage Madurai Kochadai",
    roomTypes: [
      { type: "Deluxe Club Room", description: "Designed by Geoffrey Bawa, private plunge pool access, stone veranda", approxPrice: 4800, maxOccupancy: 2 },
      { type: "Luxury Pool Villa", description: "Private enclosed plunge pool, open-to-sky shower, antique wooden columns", approxPrice: 8500, maxOccupancy: 3 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: true
    },
    unverifiedFacilitiesNote: "Temple transfer shuttle runs twice daily at 07:00 AM and 04:30 PM.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg",
    featured: true
  },
  {
    id: "h-ooty-fern-hill",
    name: "Sterling Ooty Fern Hill Heritage Resort",
    destinationId: "ooty",
    destinationName: "Ooty",
    state: "Tamil Nadu",
    category: "Heritage Resort",
    starRating: 4.6,
    approxPricePerNight: 3900,
    address: "Fern Hill Road, Ooty, The Nilgiris, Tamil Nadu 643004",
    phone: "+91 423 2443097",
    email: "info@sterlingholidays.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Fern Hill Ooty Resort",
    roomTypes: [
      { type: "Classic Pine View Room", description: "Room heating, large bay window overlooking valley, timber flooring", approxPrice: 3900, maxOccupancy: 2 },
      { type: "Privilege Mountain Suite", description: "Spacious suite with colonial hearth, sofa bed, tea maker", approxPrice: 5800, maxOccupancy: 3 }
    ],
    facilities: {
      hasAC: false,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: false
    },
    unverifiedFacilitiesNote: "Central heating active from 06:00 PM to 08:00 AM during winter months (Nov–Feb).",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/hero_kerala_munnar_tea_1793106414738.jpg"
  },
  {
    id: "h-rameswaram-daiwik",
    name: "Daiwik Hotel Pilgrimage & Leisure",
    destinationId: "rameswaram",
    destinationName: "Rameswaram",
    state: "Tamil Nadu",
    category: "Boutique Hotel",
    starRating: 4.5,
    approxPricePerNight: 2900,
    address: "NH 49 Bypass, Near Rameswaram Bus Stand, Rameswaram, Tamil Nadu 623526",
    phone: "+91 4573 223222",
    email: "reservations@daiwikhotels.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Daiwik Hotel Rameswaram",
    roomTypes: [
      { type: "Superior AC Room", description: "Twin or king bed, pure vegetarian room service, temple prayer kit", approxPrice: 2900, maxOccupancy: 2 },
      { type: "Family Quad Room", description: "Two double beds, spacious bathroom for post-theertham changing", approxPrice: 4600, maxOccupancy: 4 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: false
    },
    unverifiedFacilitiesNote: "Pure vegetarian facility (no non-veg or alcohol allowed on premises). Specialized pre-darshan priests can be arranged via reception.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/south_indian_banana_leaf_feast_1793106417372.jpg"
  },
  {
    id: "h-thanjavur-chola-inn",
    name: "Hotel Gnanam Heritage & Chola Residency",
    destinationId: "thanjavur",
    destinationName: "Thanjavur",
    state: "Tamil Nadu",
    category: "Boutique Hotel",
    starRating: 4.4,
    approxPricePerNight: 2400,
    address: "M.C. Road, Opp. Head Post Office, Thanjavur, Tamil Nadu 613001",
    phone: "+91 4362 278505",
    email: "hotelgnanam@gmail.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Hotel Gnanam Thanjavur",
    roomTypes: [
      { type: "Standard Air-Conditioned Room", description: "Comfortable double room, 1 km from Big Temple, 24-hr hot water", approxPrice: 2400, maxOccupancy: 2 },
      { type: "Chola Executive Suite", description: "King bed, separate sofa lounge, complimentary breakfast", approxPrice: 3800, maxOccupancy: 3 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: false
    },
    unverifiedFacilitiesNote: "Check-in time 12:00 Noon / 24-hour checkout option available upon prior request.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/meenakshi_temple_madurai_1793106415950.jpg"
  },
  {
    id: "h-mahabs-radisson-temple",
    name: "Radisson Resort Temple Bay Coromandel",
    destinationId: "mahabalipuram",
    destinationName: "Mahabalipuram",
    state: "Tamil Nadu",
    category: "Heritage Resort",
    starRating: 4.9,
    approxPricePerNight: 7800,
    address: "57 Covelong Road, Mahabalipuram, Tamil Nadu 603104",
    phone: "+91 44 27443636",
    email: "reservations@radissontemplebay.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Radisson Blu Resort Temple Bay Mamallapuram",
    roomTypes: [
      { type: "Standard Sea-View Chalet", description: "Private patio facing the Bay of Bengal, rain shower, king bed", approxPrice: 7800, maxOccupancy: 2 },
      { type: "Lagoon Pool Villa", description: "Direct private deck leading into the 27,000 sq ft meandering pool", approxPrice: 12500, maxOccupancy: 3 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: true
    },
    unverifiedFacilitiesNote: "Private beach access monitored by certified lifeguards from 06:00 AM to 06:00 PM.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg"
  },
  {
    id: "h-kanyakumari-sparsa",
    name: "Sparsa Eco-Resort Cape Comorin",
    destinationId: "kanyakumari",
    destinationName: "Kanyakumari",
    state: "Tamil Nadu",
    category: "Heritage Resort",
    starRating: 4.7,
    approxPricePerNight: 4600,
    address: "6/112B Beach Road, Near Sunset Point, Kanyakumari, Tamil Nadu 629702",
    phone: "+91 4652 247005",
    email: "kanyakumari@sparsaresorts.com",
    bookingWebsiteUrl: "https://tamilnadutourism.tn.gov.in",
    mapQuery: "Sparsa Resort Kanyakumari Beach Road",
    roomTypes: [
      { type: "Ocean View Deluxe", description: "Unobstructed view of Indian Ocean and Vivekananda Rock", approxPrice: 4600, maxOccupancy: 2 },
      { type: "Executive Family Villa", description: "Spacious private villa with garden patio, 2 queen beds", approxPrice: 7200, maxOccupancy: 4 }
    ],
    facilities: {
      hasAC: true,
      hasWifi: true,
      hasParking: true,
      hasAttachedBath: true,
      hasHotWater: true,
      hasFamilyRooms: true,
      hasWheelchairAccess: true,
      hasPowerBackup: true,
      hasRestaurantOnsite: true,
      hasSwimmingPool: true
    },
    unverifiedFacilitiesNote: "Solar powered green certified resort; plastic-free eco policies strictly maintained.",
    verifiedDate: "Verified: October 2026",
    image: "/src/assets/images/kerala_heritage_resort_pool_1793106416879.jpg"
  }
];

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: "r-trichy-banana-leaf",
    name: "Sri Sangeetha & Traditional Banana Leaf Mess",
    destinationId: "trichy",
    destinationName: "Tiruchirappalli",
    state: "Tamil Nadu",
    cuisineType: "South Indian Traditional & Chettinad",
    dietType: "Pure Vegetarian",
    signatureDishes: [
      "Traditional South Indian Full Meals on Fresh Banana Leaf with 5 Kootus & Poriyals",
      "Ghee Roast Crispy Dosa with 3 Coconut Chutneys",
      "Authentic Srirangam Puliyodharai (Tamarind Rice) & Sakkarai Pongal",
      "Kumbakonam Degree Filter Coffee"
    ],
    avgCostForTwo: 350,
    address: "Collector's Office Road / Cantonment, Tiruchirappalli 620001",
    openingHours: "06:30 AM – 10:30 PM Daily",
    contactPhone: "+91 431 2414705",
    mapQuery: "Sri Sangeetha Restaurant Cantonment Trichy",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "An institution in Trichy for over four decades. Known for pristine cleanliness, lightning-fast banana leaf service, unlimited ghee sambar, and authentic filter coffee brewed with fresh cow's milk."
  },
  {
    id: "r-madurai-murugan",
    name: "Murugan Idli Shop & Famous Jigarthanda",
    destinationId: "madurai",
    destinationName: "Madurai",
    state: "Tamil Nadu",
    cuisineType: "Authentic Madurai Heritage Street & South Indian",
    dietType: "Pure Vegetarian",
    signatureDishes: [
      "Steaming Hot Fluffy Mallipoo Idlis (Cotton Soft)",
      "Four Signature Chutneys (Tomato, Coconut, Coriander, Peanut) & Gunpowder Ghee",
      "Crispy Ghee Podi Onion Uttapam",
      "Madurai Royal Special Jigarthanda with Badam Pisin & Nannari Sherbet"
    ],
    avgCostForTwo: 300,
    address: "West Masi Street, Near Meenakshi Amman Temple West Tower, Madurai 625001",
    openingHours: "07:00 AM – 11:00 PM Daily",
    contactPhone: "+91 452 2341379",
    mapQuery: "Murugan Idli Shop West Masi Street Madurai",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "The gold standard of Madurai breakfasts. Pair your melt-in-mouth idlis with the legendary Jigarthanda (meaning 'heart cooler'), made from condensed milk, almond gum (badam pisin), and handmade ice cream."
  },
  {
    id: "r-kochi-dhe-puttu",
    name: "Dhe Puttu & Malabar Spice Kitchen",
    destinationId: "kochi",
    destinationName: "Kochi",
    state: "Kerala",
    cuisineType: "Kerala Traditional & Malabar Seafood",
    dietType: "Both Veg & Non-Veg",
    signatureDishes: [
      "Traditional Kerala Steamed Puttu with Kadala Curry & Ripe Nendran Banana",
      "Meen Pollichathu (Seer Fish cooked in banana leaf with shallots & green chilies)",
      "Malabar Dum Biryani cooked with fragrant Kaima rice and fried onions",
      "Appam with Creamy Vegetable Stew & Coconut Milk"
    ],
    avgCostForTwo: 650,
    address: "NH Bypass, Edappally / Marine Drive, Kochi 682024",
    openingHours: "11:00 AM – 11:00 PM Daily",
    contactPhone: "+91 484 2808200",
    mapQuery: "Dhe Puttu Edappally Kochi",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "Celebrates Kerala's favorite breakfast staple (Puttu) in over 20 innovative savory and sweet varieties, alongside authentic coastal curries cooked in traditional clay pots."
  },
  {
    id: "r-alleppey-thaff",
    name: "Thaff Delicacy & Backwater Seafood Hub",
    destinationId: "alleppey",
    destinationName: "Alleppey",
    state: "Kerala",
    cuisineType: "Coastal Kerala & Syrian Christian",
    dietType: "Seafood Special",
    signatureDishes: [
      "Kuttanadan Tharavu Roast (Spicy Duck Roast in thick pepper gravy)",
      "Fresh Karimeen (Pearl Spot) Fry marinated with native red spices",
      "Tiger Prawn Roast with Roasted Coconut Gravy",
      "Soft Kerala Flaky Parotta with Beef or Mushroom Coconut Curry"
    ],
    avgCostForTwo: 550,
    address: "General Hospital Road, Near Boat Jetty, Alappuzha 688001",
    openingHours: "11:30 AM – 10:30 PM Daily",
    contactPhone: "+91 477 2235111",
    mapQuery: "Thaff Restaurant Alappuzha",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "Recommended by locals for genuine Alleppey backwater seafood and Syrian Christian home-style duck roasts straight from the canals of Kuttanad."
  },
  {
    id: "r-munnar-rapsy",
    name: "Rapsy Highland Restaurant & Tea Cafe",
    destinationId: "munnar",
    destinationName: "Munnar",
    state: "Kerala",
    cuisineType: "Kerala & International Traveler Cafe",
    dietType: "Both Veg & Non-Veg",
    signatureDishes: [
      "Spanish Omelette with Mountain Herbs",
      "Fresh Kerala Parotta with Spiced Chicken Chettinad",
      "Vegetable Biryani with Fresh Nilgiri Vegetables",
      "Hot Spiced Cardamom Chai brewed with Munnar Tea"
    ],
    avgCostForTwo: 380,
    address: "Main Bazaar Road, Munnar Town, Kerala 685612",
    openingHours: "07:00 AM – 10:00 PM Daily",
    contactPhone: "+91 4865 230456",
    mapQuery: "Rapsy Restaurant Munnar",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "Cozy budget-friendly landmark in Munnar town serving international backpackers and Indian traveling families since 1988."
  },
  {
    id: "r-thanjavur-ariya",
    name: "Sree Ariya Bhavan & Pattukkottai Mess",
    destinationId: "thanjavur",
    destinationName: "Thanjavur",
    state: "Tamil Nadu",
    cuisineType: "South Indian Delta Cuisine",
    dietType: "Pure Vegetarian",
    signatureDishes: [
      "Thanjavur Royal Thaligai (14-item traditional temple lunch on plantain leaf)",
      "Kuzhi Paniyaram with Tomato Spicy Chutney",
      "Thiruvaiyaru Ashoka Halwa (Signature Moong Dal & Ghee Sweet)",
      "Mor Kali (Buttermilk rice-flour savory cake)"
    ],
    avgCostForTwo: 280,
    address: "South Main Street, Near Old Bus Stand, Thanjavur 613001",
    openingHours: "06:00 AM – 10:00 PM Daily",
    contactPhone: "+91 4362 231120",
    mapQuery: "Sree Ariya Bhavan Thanjavur",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "A culinary pilgrimage in the heart of Tanjore. Do not leave without trying Thiruvaiyaru Ashoka Halwa, a rich golden sweet made with roasted yellow moong dal and desi ghee."
  },
  {
    id: "r-mahabs-moonrakers",
    name: "Moonrakers Seafood & Beachside Grille",
    destinationId: "mahabalipuram",
    destinationName: "Mahabalipuram",
    state: "Tamil Nadu",
    cuisineType: "Fresh Coastal Catch & Continental",
    dietType: "Seafood Special",
    signatureDishes: [
      "Tawa-Grilled Garlic Butter Lobster",
      "Squid and Calamari Pepper Fry",
      "Catch of the day Red Snapper Fish Masala",
      "Crispy Garlic Naan with Fish Curry"
    ],
    avgCostForTwo: 900,
    address: "Othavadai Street, Mahabalipuram 603104",
    openingHours: "11:00 AM – 11:00 PM Daily",
    contactPhone: "+91 44 27443120",
    mapQuery: "Moonrakers Restaurant Mahabalipuram",
    hygieneFssaiVerified: true,
    verifiedDate: "Verified: October 2026",
    description: "A legend among surfers and travelers visiting Mahabalipuram. Pick your fresh fish directly from the ice counter before it is seasoned and grilled to order."
  }
];

export const TRAVEL_GUIDELINES: TravelGuideline[] = [
  {
    id: "temple-dress-code",
    category: "Temple Etiquette",
    title: "South Indian Temple Dress Codes & Entry Customs",
    summary: "Ancient temples in Tamil Nadu and Kerala follow rigorous traditional sanctum dress codes mandated by the Hindu Religious and Charitable Endowments (HR&CE) and Devaswom boards.",
    dos: [
      "Men: Wear clean traditional Veshti / Dhoti or Pyjama with formal shirt or Angavastram (upper cloth). In Kerala temples (e.g., Padmanabhaswamy), men must bare their torso above the waist.",
      "Women: Wear traditional Saree, Dhavani, or Salwar Kameez with pinned dupatta. Modest skirts extending well below calves are accepted at ASI monuments.",
      "Always remove footwear and leave leather belts/wallets in footwear stalls outside temple rajagopurams.",
      "Walk in a clockwise direction (Pradakshina) around sanctum deities."
    ],
    donts: [
      "Do NOT wear shorts, ripped jeans, mini-skirts, sleeveless tops, or capris inside functioning sanctum temples.",
      "Do NOT take mobile phones, digital cameras, or video equipment inside Meenakshi Temple or Madurai sanctums (deposit them in official digital lockers).",
      "Do NOT photograph deities inside the inner sanctum sanctorum (Garbhagriha)."
    ],
    verifiedNote: "Guidelines verified compliant with Tamil Nadu HR&CE Notification & Kerala Devaswom Board Regulations (October 2026)."
  },
  {
    id: "houseboat-booking-safety",
    category: "Backwaters & Houseboat",
    title: "Alleppey & Kumarakom Houseboat Cruising Rules",
    summary: "Essential regulations to guarantee a safe, certified, and environmentally sustainable backwater kettuvallam cruise.",
    dos: [
      "Verify the DTPC (District Tourism Promotion Council) official safety classification sticker (Green Palm or Gold Star) on the boat hull before boarding.",
      "Check that life jackets and fire extinguishers are accessible on the passenger deck.",
      "Inform the cook of your spice tolerance and dietary choices (e.g. pure veg vs seafood) when checking in at 12:00 noon.",
      "Ensure water supply is municipal RO-treated for kitchen cooking."
    ],
    donts: [
      "Do NOT insist on cruising past 05:30 PM. Night cruising is prohibited by Kerala Maritime Board law to prevent entanglement with local fishermen's nets.",
      "Do NOT dispose of any plastic bottles, plastic wrap, or food containers into the backwater canals.",
      "Do NOT pay 100% advance to unauthorized middlemen at the bus stand or railway station. Book directly through verified operators or official DTPC counters."
    ],
    verifiedNote: "Compliant with Kerala Inland Vessels Safety Code (October 2026)."
  },
  {
    id: "mountain-ghat-driving",
    category: "Mountain & Ghats Driving",
    title: "Western Ghats & Nilgiri Mountain Road Guidelines",
    summary: "Driving up the hairpin bends of Munnar (NH85), Ooty (Kalhatty/Coonoor), and Kodaikanal requires specialized hill driving discipline.",
    dos: [
      "Always give right-of-way to vehicles driving uphill; ascending heavy buses cannot easily regain momentum.",
      "Shift into low gear (2nd or 3rd) when descending steep slopes to utilize engine braking rather than overheating brake pads.",
      "Sound your horn gently before blind hairpin turns (especially the 36 hairpin bends on Kalhatty ghat).",
      "Carry mist fog lamps in operational order for Munnar and Ooty mornings."
    ],
    donts: [
      "Do NOT overtake on blind turns, bridges, or steep upward crests under any circumstances.",
      "Do NOT drive between 09:00 PM and 06:00 AM on wildlife corridor highways (such as NH766 through Bandipur/Wayanad and Mudumalai forests) where night driving is prohibited.",
      "Do NOT stop to selfie with wild elephants or bison along forest roadsides."
    ],
    verifiedNote: "Verified with Nilgiris and Idukki District Police Traffic Advisories (October 2026)."
  },
  {
    id: "hygiene-water-health",
    category: "Local Food & Hygiene",
    title: "Food, Drinking Water & Health Precautions",
    summary: "How to relish rich South Indian spice cuisine comfortably without digestive hiccups.",
    dos: [
      "Drink only sealed packaged mineral water or boiled and cooled water ('Jeeraka Vellam' - cumin water served hot in Kerala restaurants).",
      "Dine at high-turnover local messes and restaurants where freshly cooked food is served hot on cleaned banana leaves.",
      "Carry ORS sachets, mosquito repellent cream (for backwaters and forest reserves), and mild antacids.",
      "Wash hands thoroughly before dining—traditional banana leaf eating is an authentic sensory experience best enjoyed by hand."
    ],
    donts: [
      "Do NOT consume raw cut fruits sold by dusty roadsides or unpasteurized drinks.",
      "Do NOT consume tap water in hotel bathrooms for drinking purposes.",
      "Do NOT drink unboiled water immediately after heavy spicy meals."
    ],
    verifiedNote: "Verified with FSSAI South Regional Health Standards (October 2026)."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Planning",
    question: "How many days are recommended for a Kerala and Tamil Nadu circuit?",
    answer: "A comprehensive combined circuit requires 10 to 14 days. A 7-day circuit typically covers Kochi - Munnar - Alleppey (Kerala) or Trichy - Thanjavur - Madurai - Rameswaram (Tamil Nadu). With 12 days, you can seamlessly connect Trichy / Madurai with Munnar and the Kerala backwaters via the Theni mountain pass."
  },
  {
    id: "faq-2",
    category: "Kerala",
    question: "Is it safe to cruise Alleppey backwaters during the monsoon season (June to August)?",
    answer: "Yes! Monsoon in Kerala is magical, and backwater canals turn intensely green and fragrant. However, during days of torrential weather warnings or high winds, the maritime board may temporarily pause lake cruising for safety. Houseboat operators offer sheltered covered lounges with rain curtains."
  },
  {
    id: "faq-3",
    category: "Temples & Culture",
    question: "Can non-Hindus enter the temples in Tamil Nadu and Kerala?",
    answer: "Policies vary by temple. In Tamil Nadu, monuments managed by the Archaeological Survey of India (ASI) such as the Brihadisvara Temple (Thanjavur), Shore Temple (Mahabalipuram), and Rockfort (Trichy) welcome all visitors unconditionally. Inside functioning consecrated sanctums like Meenakshi Temple (Madurai) and Srirangam, non-Hindus are welcome into the courtyards and thousand-pillar halls, but entrance into the inner sanctum sanctorum (Garbhagriha) is traditionally restricted to practicing Hindus. In Kerala, Sri Padmanabhaswamy and Guruvayur strictly permit only Hindus in traditional attire."
  },
  {
    id: "faq-4",
    category: "Transport & Cabs",
    question: "Is hiring a private cab recommended over self-driving in South India?",
    answer: "Yes, strongly recommended. Mountain roads in the Western Ghats (Munnar, Ooty, Kodaikanal) have sharp hairpin bends and narrow passing lanes where experienced local commercial drivers are invaluable. Furthermore, inter-state permit procedures between Kerala and Tamil Nadu are routinely managed by professional drivers."
  },
  {
    id: "faq-5",
    category: "Planning",
    question: "What is the best month to plan this holiday for comfortable weather?",
    answer: "October through March offers the most delightful weather across both states. Temperatures in the plains (Trichy, Madurai, Kochi) range between 22°C and 30°C, while hill stations (Munnar, Ooty, Kodaikanal) are crisp and cool (10°C to 18°C)."
  },
  {
    id: "faq-6",
    category: "Kerala",
    question: "How do I ensure the houseboat I book in Alleppey is legitimate and clean?",
    answer: "Always ensure the boat has an active DTPC green certification and pollution clearance certificate. Check that bedroom AC operates properly and that the boat provides clean drinking water. Tourist Guidelines Master only lists verified operators with verifiable physical contact credentials."
  },
  {
    id: "faq-7",
    category: "Transport & Cabs",
    question: "How can I reach Munnar from Trichy (the founder's base)?",
    answer: "The distance from Trichy to Munnar is approximately 275 km. By car, the route goes via Dindigul, Theni, and Bodimettu/Chinnakanal, taking approximately 6 to 7 hours of scenic driving through coconut plains ascending into tea mountains."
  }
];

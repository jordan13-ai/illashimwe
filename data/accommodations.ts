export interface Accommodation {
    id: string;
    slug: string;
    name: string;
    location: string;
    image: string;
    gallery: string[];
    rating: number;
    priceRange: string; // e.g. "$$$"
    description: string;
    longDescription?: string;
    features: string[];
}

export const ACCOMMODATIONS: Accommodation[] = [
    {
        id: "four-seasons-serengeti",
        slug: "four-seasons-safari-lodge-serengeti",
        name: "Four Seasons Safari Lodge",
        location: "Serengeti National Park",
        image: "/images/lions-resting-on-a-hill-in-the-serengeti-2026-03-24-06-27-42-utc.webp",
        gallery: ["/images/lions-resting-on-a-hill-in-the-serengeti-2026-03-24-06-27-42-utc.webp", "/images/leopard-walking-through-grassy-field-in-natural-ha-2026-01-07-07-35-03-utc.webp", "/images/hippo-silhouette-grazing-in-golden-african-sunset-2026-03-25-06-46-56-utc.webp"],
        rating: 5,
        priceRange: "$$$$",
        description: "Experience luxury in the heart of the wilderness with an infinity pool overlooking a watering hole frequented by elephants.",
        longDescription: "Deep in the heart of the world’s most celebrated wildlife reserves, where the Big Five run free, Four Seasons Safari Lodge Serengeti welcomes you to a sanctuary of creature comforts. With a crystal-clear infinity pool overlooking an active watering hole, you can watch elephant herds drink while sipping a cocktail.",
        features: ["Infinity Pool", "Spa", "Waterhole Views", "Kids Club", "Air Conditioning", "Wi-Fi"]
    },
    {
        id: "ngorongoro-crater-lodge",
        slug: "ngorongoro-crater-lodge",
        name: "Ngorongoro Crater Lodge",
        location: "Ngorongoro Conservation Area",
        image: "/images/tourist-observing-wildebeest-grazing-in-ngorongoro-2026-03-25-04-20-20-utc.webp",
        gallery: ["/images/tourist-observing-wildebeest-grazing-in-ngorongoro-2026-03-25-04-20-20-utc.webp", "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp"],
        rating: 5,
        priceRange: "$$$$",
        description: "Perched on the rim of the crater, this lodge offers architecture inspired by Maasai manyattas with Versailles-style luxury.",
        longDescription: "Ngorongoro Crater Lodge is defined by its architectural brilliance, perching on the edge of the world-famous Ngorongoro Crater. Be swept away by the combination of Maasai-inspired architecture and Versailles-style interiors, offering one of the most unique and romantic stays in Africa.",
        features: ["Crater Views", "Butler Service", "Fireplaces", "Fine Dining", "Wine Cellar"]
    },
    {
        id: "gran-melia-arusha",
        slug: "gran-melia-arusha",
        name: "Gran Meliá Arusha",
        location: "Arusha",
        image: "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
        gallery: ["/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp", "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp"],
        rating: 5,
        priceRange: "$$$",
        description: "An oasis of calm and luxury in Arusha, perfect for starting or ending your safari adventure.",
        longDescription: "Gran Meliá Arusha is an oasis of calm between Serengeti and Kilimanjaro. With modern architecture, lush gardens, and a spectacular view of Mount Meru, it is the perfect base for exploring the northern circuit.",
        features: ["Mount Meru Views", "Roof Top Bar", "Spa & Gym", "Tea & Coffee Gardens", "Pool"]
    },
    {
        id: "zuri-zanzibar",
        slug: "zuri-zanzibar",
        name: "Zuri Zanzibar",
        location: "Kendwa, Zanzibar",
        image: "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
        gallery: ["/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp", "/images/beautiful-wooden-pier-with-thatched-huts-in-ocean-2026-03-25-00-02-46-utc.webp"],
        rating: 4.8,
        priceRange: "$$$",
        description: "Located on a sunset-facing beach without tides, offering a unique blend of authentic social environments and luxury.",
        longDescription: "Zuri Zanzibar invites you to experience a unique blend of authentic social environments and high-end luxury. Located on a sunset-facing beach in Kendwa, it offers tide-free swimming all day long.",
        features: ["Private Beach", "Spice Garden", "Water Sports", "Wellness Center", "Sunset Views"]
    },
    {
        id: "tarangire-treetops",
        slug: "tarangire-treetops",
        name: "Tarangire Treetops",
        location: "Tarangire National Park",
        image: "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
        gallery: ["/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp", "/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp"],
        rating: 4.7,
        priceRange: "$$$",
        description: "Stay in elevated rooms built around ancient baobab trees for a truly unique and magical safari experience.",
        longDescription: "Tarangire Treetops sits alone in a private game reserve bordering Tarangire National Park and the Masai Steppe. The rooms are elevated above the ground maximizing the views over the tops of the marula and baobab trees.",
        features: ["Treehouse Rooms", "Night Game Drives", "Walking Safaris", "Bush Dining", "Swimming Pool"]
    },
    {
        id: "singita-sasakwa",
        slug: "singita-sasakwa-lodge",
        name: "Singita Sasakwa Lodge",
        location: "Serengeti (Grumeti Reserve)",
        image: "/images/serene-tree-silhouette-at-sunset-2026-03-26-10-49-45-utc.webp", // reusing generic
        gallery: ["/images/serene-tree-silhouette-at-sunset-2026-03-26-10-49-45-utc.webp"],
        rating: 5,
        priceRange: "$$$$$",
        description: "Old-world grandeur meets modern luxury in this turn-of-the-century manor style lodge with endless Serengeti views.",
        features: ["Private Reserve", "Tennis Court", "Equestrian Center", "Plunge Pools", "Spa"]
    },
    {
        id: "gibbs-farm",
        slug: "gibbs-farm",
        name: "Gibb's Farm",
        location: "Karatu",
        image: "/images/idyllic-pathway-surrounded-by-lush-foliage-through-2026-03-18-12-20-51-utc.webp", // reusing relevant context
        gallery: ["/images/idyllic-pathway-surrounded-by-lush-foliage-through-2026-03-18-12-20-51-utc.webp"],
        rating: 4.8,
        priceRange: "$$$",
        description: "A historic organic farm and lodge on the outer slopes of the Ngorongoro Crater, offering farm-to-table dining and peaceful gardens.",
        features: ["Organic Farm", "Farm-to-Table", "Coffee Tours", "Garden Cottages", "Spa"]
    },
    {
        id: "baraza-resort",
        slug: "baraza-resort-spa-zanzibar",
        name: "Baraza Resort & Spa",
        location: "Bwejuu, Zanzibar",
        image: "/images/beautiful-wooden-pier-with-thatched-huts-in-ocean-2026-03-25-00-02-46-utc.webp", // reusing generic
        gallery: ["/images/beautiful-wooden-pier-with-thatched-huts-in-ocean-2026-03-25-00-02-46-utc.webp"],
        rating: 5,
        priceRange: "$$$$",
        description: "A 5-star all-inclusive resort evoking the heritage of Zanzibar dating back to the era of the Sultans.",
        features: ["All-Inclusive", "Swahili Architecture", "Water Club", "Kids Club", "Private Plunge Pools"]
    },
    {
        id: "melia-serengeti",
        slug: "melia-serengeti-lodge",
        name: "Meliá Serengeti Lodge",
        location: "Serengeti National Park",
        image: "/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp", // reusing generic
        gallery: ["/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp"],
        rating: 4.7,
        priceRange: "$$$",
        description: "Modern luxury blending seamlessley with the surroundings, overlooking the River Mbalageti valley.",
        features: ["Infinity Pool", "Terrace Views", "Kids Zone", "Gym", "International Cuisine"]
    },
    {
        id: "namiri-plains",
        slug: "namiri-plains",
        name: "Namiri Plains",
        location: "Eastern Serengeti",
        image: "/images/wildebeest-and-zebra-tourist-safari-drive-2026-03-09-06-07-38-utc.webp", // reusing generic
        gallery: ["/images/wildebeest-and-zebra-tourist-safari-drive-2026-03-09-06-07-38-utc.webp"],
        rating: 5,
        priceRange: "$$$$",
        description: "Remote and exclusive, focusing on big cat sightings in a previously closed conservation area.",
        features: ["Big Cat Focus", "Secluded", "Walking Safaris", "Bathtub on Deck", "Photographic Bunker"]
    },
    {
        id: "serengeti-bushtops",
        slug: "serengeti-bushtops",
        name: "Serengeti Bushtops",
        location: "Northern Serengeti",
        image: "/images/hippo-silhouette-grazing-in-golden-african-sunset-2026-03-25-06-46-56-utc.webp", // reusing generic
        gallery: ["/images/hippo-silhouette-grazing-in-golden-african-sunset-2026-03-25-06-46-56-utc.webp"],
        rating: 5,
        priceRange: "$$$$$",
        description: "A magical haven for viewing the Great Migration, offering 5-star luxury tents with hot tubs.",
        features: ["Private Hot Tubs", "24h Butler", "Migration Views", "A La Carte Dining", "Spa"]
    },
    {
        id: "chemchem",
        slug: "chem-chem-lodge",
        name: "Chem Chem Lodge",
        location: "Tarangire-Manyara Corridor",
        image: "/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp", // reusing generic
        gallery: ["/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp"],
        rating: 4.9,
        priceRange: "$$$$",
        description: "Slow safari philosophy in a private concession, offering refined elegance and exclusive experiences.",
        features: ["Slow Safari", "Private Concession", "Flamingo Views", "Spa", "Gourmet Dining"]
    },
    {
        id: "kilindi-zanzibar",
        slug: "kilindi-zanzibar",
        name: "Kilindi Zanzibar",
        location: "Kendwa, Zanzibar",
        image: "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp", // reusing generic similar
        gallery: ["/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp"],
        rating: 4.8,
        priceRange: "$$$$",
        description: "Originally designed for Benny Andersson of ABBA, offering distinct domed pavilions and ultimate privacy.",
        features: ["Private Plunge Pools", "Rainwater Showers", "Adults Only", "Butler Service", "Beachfront"]
    },
    {
        id: "lemala-mpingo",
        slug: "lemala-mpingo-ridge",
        name: "Lemala Mpingo Ridge",
        location: "Tarangire National Park",
        image: "/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp", // reusing generic
        gallery: ["/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp"],
        rating: 4.8,
        priceRange: "$$$",
        description: "Setting a new standard in Tarangire with sweeping views across the perennial river and valley below.",
        features: ["Hilltop Views", "Outdoor Baths", "Night Drives", "Balloon Safaris", "Luxury Tents"]
    },
    {
        id: "jabali-ridge",
        slug: "jabali-ridge",
        name: "Jabali Ridge",
        location: "Ruaha National Park",
        image: "/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp", // reusing generic context
        gallery: ["/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp"],
        rating: 5,
        priceRange: "$$$$",
        description: "A sophisticated lodge set on a rocky outcrop in Ruaha, offering spectacular views and game viewing.",
        features: ["Infinity Pool", "Spa", "Rocky Outcrop", "Private Vehicles", "Walking Safaris"]
    }
];

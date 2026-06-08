export interface DayTrip {
    title: string;
    slug: string;
    description: string;
    image: string;
    duration: string;
    price: string;
    highlights: string[];
}

export const DAY_TRIPS: DayTrip[] = [
    {
        title: "Arusha National Park",
        slug: "arusha-np",
        description: "A gem of varied ecosystems. Spot giraffes, zebras, and flamingos against the backdrop of Mount Meru.",
        image: "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
        duration: "Full Day",
        price: "$250",
        highlights: ["Canoeing Safaris", "Walking Safari", "Ngurdoto Crater"],
    },
    {
        title: "Materuni Waterfalls & Coffee",
        slug: "materuni",
        description: "Hike to the majestic 80m waterfall and learn the art of coffee making with the Chagga people.",
        image: "/images/idyllic-pathway-surrounded-by-lush-foliage-through-2026-03-18-12-20-51-utc.webp",
        duration: "Full Day",
        price: "$120",
        highlights: ["Waterfall Hike", "Coffee Tour", "Local Lunch"],
    },
    {
        title: "Chemka Hot Springs",
        slug: "chemka",
        description: "Relax in the crystal clear, turquoise geothermal waters of Kikuletwa. A perfect post-safari retreat.",
        image: "/images/mega-menu/chemka.webp",
        duration: "Half Day",
        price: "$90",
        highlights: ["Swimming", "Relaxation", "Rope Swing"],
    },
    {
        title: "Tarangire Day Trip",
        slug: "tarangire-day",
        description: "Experience the Elephant Playground. A condensed safari adventure for those short on time.",
        image: "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
        duration: "Full Day",
        price: "$450",
        highlights: ["Elephants", "Baobabs", "Game Drive"],
    },
    {
        title: "Ngorongoro Day Tour",
        slug: "ngorongoro-day",
        description: "Descend into the crater for a chance to see the Big 5 in a single day.",
        image: "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        duration: "Full Day",
        price: "$650",
        highlights: ["Big 5", "Picnic Lunch", "Crater Views"],
    },
    {
        title: "Maasai Village Experience",
        slug: "maasai",
        description: "Engage with the Maasai community. seamless integration of culture and learning.",
        image: "/images/mega-menu/guides.webp",
        duration: "Half Day",
        price: "$80",
        highlights: ["Cultural Dance", "Boma Visit", "Crafts"],
    },
    {
        title: "Lake Duluti Canoeing",
        slug: "duluti",
        description: "Paddle peacefully on this crater lake, surrounded by lush forests and birdlife.",
        image: "/images/tranquil-ocean-scene-with-two-people-on-boat-2026-03-19-08-13-03-utc.webp",
        duration: "Half Day",
        price: "$60",
        highlights: ["Canoeing", "Bird Watching", "Nature Walk"],
    }
];

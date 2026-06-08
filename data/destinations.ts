export interface Destination {
    id: string;
    title: string;
    description: string;
    slug: string;
    image: string;
    highlights: string[];
    content?: string;
    gallery?: string[];
    metaTitle?: string;
    metaDescription?: string;
    bestFor?: string;
    faq?: {
        "@context": string;
        "@type": string;
        "mainEntity": {
            "@type": string;
            "name": string;
            "acceptedAnswer": {
                "@type": string;
                "text": string;
            }
        }[]
    };
}

export const DESTINATIONS_GENERAL = {
    title: "Tanzania's Iconic Destinations",
    subtitle: "Explore The Wild",
    description: "From the endless plains of the Serengeti to the snow-capped peak of Kilimanjaro and the pristine beaches of Zanzibar. Discover the magic of Tanzania.",
    image: "/images/sun-rising-over-kilimanjaro-from-mount-meru-summit-2026-03-25-08-23-46-utc.webp"
};

export const ALL_DESTINATIONS: Destination[] = [
    {
        id: "serengeti",
        title: "Serengeti National Park",
        slug: "serengeti",
        description: "The Serengeti is Tanzania’s most iconic safari destination and one of the greatest wildlife ecosystems on Earth.",
        image: "/images/lioness-and-herd-of-wildebeest-at-the-serengeti-na-2026-03-09-07-52-40-utc.webp",
        highlights: ["Great Migration (seasonal movement)", "Lions, cheetahs, leopards in high numbers", "Endless open plains", "Hot air balloon safaris"],
        metaTitle: "Serengeti National Park Safari | Great Migration & Big Cats",
        metaDescription: "Explore Serengeti National Park with expert local guides. Witness the Great Migration, big cats, and endless savannahs on private Tanzania safaris.",
        bestFor: "First-time safari travelers, honeymooners, photographers, luxury safari guests.",
        faq: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What is Serengeti famous for?", "acceptedAnswer": { "@type": "Answer", "text": "Serengeti is famous for the Great Migration, abundant big cats, and classic African safari scenery." } },
                { "@type": "Question", "name": "When is the best time to visit Serengeti?", "acceptedAnswer": { "@type": "Answer", "text": "Serengeti offers excellent wildlife viewing year-round. The best time depends on migration location." } }
            ]
        },
        gallery: [
            "/images/lioness-and-herd-of-wildebeest-at-the-serengeti-na-2026-03-09-07-52-40-utc.webp",
            "/images/leopard-walking-through-grassy-field-in-natural-ha-2026-01-07-07-35-03-utc.webp",
            "/images/mega-menu/balloon.webp"
        ],
        content: `
            <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">The Serengeti is Tanzania’s most iconic safari destination and one of the greatest wildlife ecosystems on Earth. It is globally renowned for the Great Migration, where millions of wildebeest and zebra move across the plains in search of water and fresh grazing.</p>
                
                <p class="text-gray-600 leading-relaxed">Beyond the migration, the Serengeti offers exceptional year-round game viewing, dramatic landscapes, and a timeless safari atmosphere.</p>
            </div>
        `
    },
    {
        id: "ngorongoro",
        title: "Ngorongoro Crater",
        slug: "ngorongoro",
        description: "The world’s largest intact volcanic caldera and one of Africa’s most concentrated wildlife areas.",
        image: "/images/tourist-observing-wildebeest-grazing-in-ngorongoro-2026-03-25-04-20-20-utc.webp",
        highlights: ["Big Five sightings possible in one day", "Flamingos and soda lakes", "Beautiful crater viewpoints", "Dense wildlife in compact area"],
        metaTitle: "Ngorongoro Crater Safari | Big Five in a Natural Wonder",
        metaDescription: "Visit Ngorongoro Crater with expert guides. Experience Big Five sightings inside one of Africa’s most breathtaking natural landscapes.",
        bestFor: "Families, Big Five seekers, short safaris, luxury travelers.",
        faq: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Can I see the Big Five in Ngorongoro?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Ngorongoro Crater is one of the best places in Africa to see the Big Five, including black rhino." } }
            ]
        },
        gallery: [
            "/images/tourist-observing-wildebeest-grazing-in-ngorongoro-2026-03-25-04-20-20-utc.webp",
            "/images/mega-menu/maasai.webp",
            "/hero_lion_portrait_1768491268079.webp"
        ],
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">The Ngorongoro Crater is the world’s largest intact volcanic caldera and one of Africa’s most concentrated wildlife areas. Its enclosed ecosystem supports an incredible number of animals, including the rare black rhino.</p>
            </div>
        `
    },
    {
        id: "tarangire",
        title: "Tarangire National Park",
        slug: "tarangire",
        description: "Tarangire is known for its massive elephant herds and dramatic landscapes filled with ancient baobab trees.",
        image: "/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp",
        highlights: ["Large elephant populations", "Baobab-dotted landscapes", "Fewer crowds", "Excellent birdlife"],
        metaTitle: "Tarangire National Park Safari | Elephants & Baobab Trees",
        metaDescription: "Discover Tarangire National Park, famous for huge elephant herds, giant baobab trees, and authentic safari experiences.",
        bestFor: "Repeat safari travelers, photographers, nature lovers.",
        gallery: [
            "/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp",
            "/hero_lion_portrait_1768491268079.webp"
        ],
        content: `
            <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">Tarangire is known for its massive elephant herds and dramatic landscapes filled with ancient baobab trees. During the dry season, wildlife gathers along the Tarangire River, creating unforgettable game viewing.</p>
            </div>
        `
    },
    {
        id: "manyara",
        title: "Lake Manyara National Park",
        slug: "lake-manyara",
        description: "Lake Manyara offers incredible diversity in a compact park. From dense forests to open lakeshore.",
        image: "/images/zebras-in-the-lake-manyara-national-park-tanzania-2026-01-09-14-41-07-utc.webp",
        highlights: ["Birdlife and flamingos", "Forest elephants", "Beautiful Rift Valley backdrop", "Great for short safaris"],
        metaTitle: "Lake Manyara Safari | Forests, Flamingos & Scenic Views",
        metaDescription: "Explore Lake Manyara National Park, home to lush forests, birdlife, Rift Valley scenery, and unique safari experiences.",
        gallery: [
            "/images/zebras-in-the-lake-manyara-national-park-tanzania-2026-01-09-14-41-07-utc.webp",
            "/hero_zanzibar_beach_1768491249395.webp"
        ],
        content: `
            <div class="space-y-8">
                 <p class="lead text-xl text-deep-brown font-medium mb-6">Lake Manyara offers incredible diversity in a compact park. From dense forests to open lakeshore, it is ideal for scenic safaris and day trips.</p>
            </div>
        `
    },
    {
        id: "zanzibar",
        title: "Zanzibar Island",
        slug: "zanzibar",
        description: "Zanzibar is the perfect destination after safari. Its white beaches, turquoise waters, and rich Swahili culture offer pure relaxation.",
        image: "/images/woman-resting-on-a-wild-beach-in-zanzibar-tanzani-2026-03-26-03-35-30-utc.webp",
        highlights: ["Luxury beach resorts", "Snorkeling and diving", "Stone Town cultural tours", "Spice farms"],
        metaTitle: "Zanzibar Beach Holidays | Safari & Beach Luxury Escape",
        metaDescription: "Relax in Zanzibar’s white-sand beaches after safari. Discover tropical waters, cultural heritage, and luxury island experiences.",
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">Zanzibar is the perfect destination after safari. Its white beaches, turquoise waters, and rich Swahili culture offer pure relaxation and romance.</p>
            </div>
        `
    },
    {
        id: "kilimanjaro",
        title: "Mount Kilimanjaro",
        slug: "kilimanjaro",
        description: "Mount Kilimanjaro is Africa’s highest mountain and one of the world’s most iconic trekking challenges.",
        image: "/images/sun-rising-over-kilimanjaro-from-mount-meru-summit-2026-03-25-08-23-46-utc.webp",
        highlights: ["Summit Trek", "Glaciers", "Seven Summits"],
        metaTitle: "Mount Kilimanjaro Climbing | Routes, Safety & Expert Guides",
        metaDescription: "Climb Mount Kilimanjaro with professional local guides. Explore routes, safety systems, and life-changing trekking experiences.",
        bestFor: "Adventure seekers, personal challenges, charity climbers, safari + trekking combinations.",
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">Mount Kilimanjaro is Africa’s highest mountain and one of the world’s most iconic trekking challenges. Climbers pass through rainforest, alpine desert, and icy summit landscapes before reaching Uhuru Peak (5,895m).</p>
            </div>
        `
    },
    {
        id: "arusha-np",
        title: "Arusha National Park",
        slug: "arusha-national-park",
        description: "A hidden gem near Arusha offering unique activities like canoeing on Momella Lakes and guided walking safaris.",
        image: "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
        highlights: ["Canoeing Safaris", "Walking Safaris", "Mount Meru Views", "Colobus Monkeys"],
        metaTitle: "Arusha National Park Safari | Canoeing & Mount Meru Views",
        metaDescription: "Visit Arusha National Park for canoeing, walking safaris, wildlife, and beautiful Mount Meru scenery near Arusha.",
        bestFor: "Day trips, acclimatization walks, bird watchers.",
        gallery: [
            "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp"
        ],
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">A hidden gem near Arusha offering unique activities like canoeing on Momella Lakes and guided walking safaris. It is the perfect place for a day trip or an acclimatization hike before climbing Kilimanjaro.</p>
            </div>
        `
    },
    {
        id: "materuni",
        title: "Materuni Waterfalls & Coffee Tour",
        slug: "materuni-waterfalls-coffee-tour",
        description: "A cultural and nature experience combining waterfall hiking with hands-on coffee preparation.",
        image: "/images/idyllic-pathway-surrounded-by-lush-foliage-through-2026-03-18-12-20-51-utc.webp",
        highlights: ["Waterfall Hike", "Coffee Making Tour", "Chagga Culture", "Local Lunch"],
        metaTitle: "Materuni Waterfalls & Coffee Tour | Cultural Day Trip Tanzania",
        metaDescription: "Enjoy Materuni Waterfalls and an authentic Chagga coffee experience near Mount Kilimanjaro.",
        gallery: [
            "/images/idyllic-pathway-surrounded-by-lush-foliage-through-2026-03-18-12-20-51-utc.webp",
            "/images/idyllic-pathway-surrounded-by-lush-foliage-through-2026-03-18-12-20-51-utc.webp"
        ],
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">A cultural and nature experience combining a scenic hike to the impressive 80m Materuni Waterfall with a hands-on coffee preparation tour in a local Chagga village.</p>
            </div>
        `
    },
    {
        id: "chemka",
        title: "Chemka Hot Springs",
        slug: "chemka-hot-springs",
        description: "Perfect for relaxation, swimming, and recovery after climbing Kilimanjaro.",
        image: "/images/mega-menu/chemka.webp",
        highlights: ["Natural Swimming Pool", "Relaxation", "Crystal Clear Water", "Garra Rufa Fish"],
        metaTitle: "Chemka Hot Springs Day Trip | Natural Swimming Oasis",
        metaDescription: "Swim and relax at Chemka Hot Springs, a crystal-clear natural oasis near Arusha and Moshi.",
        gallery: [
            "/images/mega-menu/chemka.webp"
        ],
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">Also known as Kikuletwa Hot Springs, this is a crystal-clear natural oasis in the middle of the dusty landscape. It is the perfect spot for relaxation, swimming, and recovery after a dusty safari or climbing Kilimanjaro.</p>
            </div>
        `
    },
    {
        id: "maasai",
        title: "Maasai Cultural Experience",
        slug: "maasai-cultural-experience",
        description: "A meaningful cultural experience offering insight into Maasai traditions, daily life, and community values.",
        image: "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
        highlights: ["Village Visit", "Traditional Dance", "Beadwork", "Cultural Insight"],
        metaTitle: "Maasai Cultural Experience Tanzania | Authentic Community Visit",
        metaDescription: "Experience Maasai culture responsibly. Learn traditions, lifestyle, and support community-based tourism.",
        gallery: [
            "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
            "/images/muted-colors-on-a-natural-background-of-a-sunrise-2026-03-09-23-11-08-utc.webp"
        ],
        content: `
             <div class="space-y-8">
                <p class="lead text-xl text-deep-brown font-medium mb-6">A meaningful cultural experience offering insight into Maasai traditions, daily life, and community values. We ensure our visits are respectful and support the local community directly.</p>
            </div>
        `
    }
];

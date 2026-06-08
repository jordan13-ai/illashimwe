export interface SafariPageData {
    title: string;
    subtitle?: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    content: string;
    image: string;
    stats?: { label: string; value: string }[];
    inclusions?: string[];
    gallery?: string[];
    itinerary?: { day: string; title: string; description: string }[];
    schema?: Record<string, unknown>;
}

export interface SafariPackage {
    title: string;
    slug: string;
    duration: string;
    image: string;
    description: string;
    price: string;
    overview: string; // HTML allowed
    highlights: string[];
    itinerary: { day: string; title: string; description: string }[];
    inclusions: string[];
    exclusions: string[];
    gallery: string[];
    categories?: string[];
    tag?: string;
}

const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
};

export const SAFARI_GENERAL: Record<string, SafariPageData> = {
    overview: {
        title: "Tanzania Safari",
        subtitle: "The Ultimate Wildlife Experience",
        description: "Witness the Great Migration, spot the Big 5, and explore the endless plains of the Serengeti.",
        metaTitle: "Tanzania Safari Holidays | Luxury Private Tours & Packages",
        metaDescription: "Book your dream Tanzania safari with Illashimwe Adventure. Tailor-made itineraries, expert guides, and luxury lodges in Serengeti, Ngorongoro, and beyond.",
        image: "/images/wildebeest-and-zebra-tourist-safari-drive-2026-03-09-06-07-38-utc.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Tanzania is the undisputed safari capital of the world. From the endless plains of the <strong>Serengeti</strong> to the Eden-like <strong>Ngorongoro Crater</strong>, this is where nature reigns supreme.</p>
            
            <p class="mb-6 text-gray-700">At <strong>Illashimwe Adventure</strong>, we craft private, bespoke safari experiences that take you deeper into the bush. Our 4x4 Land Cruisers are custom-built for photography and comfort, ensuring you have the best seat in the house for the Great Migration, lion hunts, and elephant crossings.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">The Northern Circuit</h3>
            <p class="mb-6 text-gray-700">The most famous safari route in the world, featuring:</p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Serengeti National Park:</strong> Home to 1.5 million wildebeest and the Big 5.</li>
                <li><strong>Ngorongoro Crater:</strong> A natural wonder with the highest density of predators.</li>
                <li><strong>Tarangire National Park:</strong> Famous for massive elephant herds and baobab trees.</li>
                <li><strong>Lake Manyara:</strong> Known for tree-climbing lions and flamingo-filled shores.</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Safari Styles</h3>
            <p class="mb-6 text-gray-700">We offer a range of styles to suit every traveler, from <strong>Luxury Lodge Safaris</strong> with infinity pools to authentic <strong>Tented Camps</strong> where you sleep to the sound of lions roaring.</p>
        `,
        stats: [
            { label: "Wildlife", value: "Big 5" },
            { label: "Transport", value: "4x4 Jeep" },
            { label: "Guide", value: "Expert" },
            { label: "Style", value: "Private" }
        ],
        schema: FAQ_SCHEMA
    }
};

export const SAFARI_PACKAGES: SafariPackage[] = [
    // --- GREAT MIGRATION ---
    {
        title: "7-Day Signature Safari",
        slug: "signature-7-day",
        duration: "7 Days",
        image: "/images/blue-wildebeests-on-the-maasai-mara-kenya-2026-03-26-00-16-05-utc.webp",
        description: "The classic Northern Circuit covering Tarangire, Serengeti, and Ngorongoro. The perfect introduction to Tanzania.",
        price: "$2,450",
        categories: ["All Experiences", "Great Migration"],
        tag: "Best Seller",
        overview: `<p>This 7-day safari is our most popular itinerary for a reason. It hits all the highlights of Northern Tanzania: the elephant-rich Tarangire, the tree-climbing lions of Lake Manyara, the endless plains of the Serengeti, and the wildlife concentration of the Ngorongoro Crater.</p>`,
        highlights: ["The Big 5", "Serengeti Plains", "Ngorongoro Crater Floor", "Tarangire Elephants"],
        itinerary: [
            { day: "Day 1", title: "Arusha to Tarangire", description: "Depart for Tarangire National Park, famous for its baobab trees and large elephant herds." },
            { day: "Day 2", title: "To Serengeti", description: "Journey to the Serengeti plains, game viewing en route." },
            { day: "Day 3", title: "Serengeti Full Day", description: "Follow the herds! Full day game drive in the heart of the migration." },
            { day: "Day 4", title: "Serengeti to Ngorongoro", description: "Morning game drive. Transfer to Ngorongoro Crater rim." },
            { day: "Day 5", title: "Ngorongoro Crater", description: "Descend into the crater for a 6-hour game drive." },
            { day: "Day 6", title: "Lake Manyara", description: "Visit Lake Manyara for flamingos and tree-climbing lions." },
            { day: "Day 7", title: "Return to Arusha", description: "Drive back to Arusha for departure." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert Guide", "Full board"],
        exclusions: ["Flights", "Visas", "Tips"],
        gallery: ["/images/blue-wildebeests-on-the-maasai-mara-kenya-2026-03-26-00-16-05-utc.webp", "/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp"]
    },
    {
        title: "8-Day Mara River Crossing",
        slug: "mara-river-crossing",
        duration: "8 Days",
        image: "/images/lion-watches-over-vast-herd-of-buffalo-in-savanna-2026-03-25-08-24-53-utc.webp",
        description: "Witness the dramatic river crossings in the Northern Serengeti (July-Oct).",
        price: "$3,200",
        categories: ["All Experiences", "Great Migration"],
        tag: "Seasonal",
        overview: `<p>A specialized itinerary focused on the dramatic Mara River crossings in the Northern Serengeti. This is wildlife action at its most intense.</p>`,
        highlights: ["River Crossings", "Northern Serengeti", "Crocodiles", "Predator Action"],
        itinerary: [
            { day: "Day 1-2", title: "Central Serengeti", description: "Explore the Seronera valley for big cats." },
            { day: "Day 3-6", title: "Northern Serengeti (Kogatende)", description: "Four days dedicated to waiting for and watching the river crossings." },
            { day: "Day 7", title: "Ngorongoro", description: "Visit the crater." },
            { day: "Day 8", title: "Arusha", description: "Return flight/drive." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert Guide", "Full board"],
        exclusions: ["Flights", "Visas", "Tips"],
        gallery: ["/images/lion-watches-over-vast-herd-of-buffalo-in-savanna-2026-03-25-08-24-53-utc.webp"]
    },
    {
        title: "6-Day Calving Season",
        slug: "calving-season",
        duration: "6 Days",
        image: "/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp",
        description: "See thousands of baby wildebeest in the Southern Serengeti (Jan-Mar).",
        price: "$2,100",
        categories: ["All Experiences", "Great Migration"],
        tag: "Special",
        overview: `<p>Experience the circle of life in the Ndutu region of Southern Serengeti, where thousands of calves are born daily during the green season.</p>`,
        highlights: ["Baby Animals", "Cheetah Hunts", "Green Plains", "Ndutu Area"],
        itinerary: [
            { day: "Day 1", title: "Arusha to Ndutu", description: "Drive to the Southern Serengeti ecosystem." },
            { day: "Day 2-3", title: "Ndutu Plains", description: "Witness the calving and the predators that follow." },
            { day: "Day 4", title: "Central Serengeti", description: "Move north for resident big cats." },
            { day: "Day 5", title: "Ngorongoro", description: "Crater tour." },
            { day: "Day 6", title: "Arusha", description: "Return." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert Guide", "Full board"],
        exclusions: ["Flights", "Visas", "Tips"],
        gallery: ["/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp"]
    },

    // --- FAMILY JOURNEYS ---
    {
        title: "Family Adventure",
        slug: "family-adventure",
        duration: "8 Days",
        image: "/images/lion-cubs-in-the-wild-with-safari-tourists-2026-03-30-18-52-01-utc.webp",
        description: "Child-friendly lodges and pace, with educational activities for young explorers.",
        price: "$2,800",
        categories: ["All Experiences", "Family Journeys"],
        tag: "Family",
        overview: `<p>A safari designed with children in mind. We use lodges with swimming pools and larger family rooms.</p>`,
        highlights: ["Junior Ranger Program", "Maasai Culture", "Swimming Pools", "Big 5"],
        itinerary: [
            { day: "Day 1", title: "Arusha Arrival", description: "Relax at a hotel with a pool." },
            { day: "Day 2", title: "Tarangire", description: "Short game drive." },
            { day: "Day 3", title: "Cultural Day", description: "Visit a school and village." },
            { day: "Day 4", title: "Ngorongoro", description: "Crater safari." },
            { day: "Day 5-6", title: "Serengeti", description: "Wildlife viewing with pool breaks." },
            { day: "Day 7", title: "Fly to Arusha", description: "Avoid the long drive." },
            { day: "Day 8", title: "Departure", description: "Transfer." }
        ],
        inclusions: ["Family Rooms", "Junior Ranger Activities", "Private Vehicle"],
        exclusions: ["Flights", "Visas", "Tips"],
        gallery: ["/images/lion-cubs-in-the-wild-with-safari-tourists-2026-03-30-18-52-01-utc.webp"]
    },
    {
        title: "10-Day Bush & Beach Family",
        slug: "bush-beach-family",
        duration: "10 Days",
        image: "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
        description: "The perfect balance: 5 days of wildlife followed by 5 days of Zanzibar fun.",
        price: "$3,500",
        categories: ["All Experiences", "Family Journeys"],
        tag: "Combo",
        overview: `<p>Combine the excitement of safari with the relaxation of Zanzibar. Perfect for families.</p>`,
        highlights: ["Safari", "Beach", "Snorkeling", "Family Suites"],
        itinerary: [
            { day: "Day 1-4", title: "Safari Circuit", description: "Tarangire, Ngorongoro, Manyara." },
            { day: "Day 5", title: "Fly to Zanzibar", description: "Direct flight from Arusha." },
            { day: "Day 6-9", title: "Zanzibar", description: "Beach relaxation and water sports." },
            { day: "Day 10", title: "Departure", description: "Fly home from Zanzibar." }
        ],
        inclusions: ["Family Rooms", "Flights to Zanzibar", "Private Vehicle"],
        exclusions: ["International Flights", "Visas", "Tips"],
        gallery: ["/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp"]
    },
    {
        title: "4-Day Serengeti Intro",
        slug: "serengeti-intro-kids",
        duration: "4 Days",
        image: "/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp",
        description: "A short, action-packed safari perfect for younger children with short attention spans.",
        price: "$1,600",
        categories: ["All Experiences", "Family Journeys"],
        tag: "Kid Friendly",
        overview: `<p>Short and sweet. We fly straight into the Serengeti to minimize driving time.</p>`,
        highlights: ["Fly-in Safari", "Serengeti", "Big Cats", "Pool Time"],
        itinerary: [
            { day: "Day 1", title: "Fly to Serengeti", description: "Morning flight, afternoon game drive." },
            { day: "Day 2", title: "Serengeti", description: "Morning game drive, afternoon pool." },
            { day: "Day 3", title: "Ngorongoro Crater", description: "Drive to crater, game drive, sleep on rim." },
            { day: "Day 4", title: "Fly to Arusha", description: "Drive to Manyara airstrip and fly out." }
        ],
        inclusions: ["Flights", "Family Tent", "Private Vehicle"],
        exclusions: ["International Flights", "Visas", "Tips"],
        gallery: ["/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp"]
    },

    // --- HONEYMOONS ---
    {
        title: "9-Day Honeymoon Luxury",
        slug: "honeymoon-luxury",
        duration: "9 Days",
        image: "/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp",
        description: "Romantic lodges, hot air balloon rides, and private bush dinners. Unforgettable.",
        price: "$4,200",
        categories: ["All Experiences", "honeymoon"],
        tag: "Luxury",
        overview: `<p>Celebrate your new life together with the adventure of a lifetime.</p>`,
        highlights: ["Hot Air Balloon", "Private Bush Dinner", "Luxury Suites"],
        itinerary: [
            { day: "Day 1", title: "Arusha Luxury", description: "Coffee lodge stay." },
            { day: "Day 2-3", title: "Tarangire Treetops", description: "Sleep in a baobab tree." },
            { day: "Day 4-6", title: "Serengeti & Balloon", description: "Sunrise flight and champagne breakfast." },
            { day: "Day 7-8", title: "Ngorongoro Crater", description: "Crater lodge luxury." },
            { day: "Day 9", title: "Departure", description: "Transfer." }
        ],
        inclusions: ["Luxury Lodges", "Balloon Safari", "Bush Dinner"],
        exclusions: ["Premium Spirits", "Flights", "Tips"],
        gallery: ["/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp"]
    },
    {
        title: "7-Day Intimate Wilderness",
        slug: "intimate-wilderness",
        duration: "7 Days",
        image: "/images/serene-tree-silhouette-at-sunset-2026-03-26-10-49-45-utc.webp",
        description: "Stay in exclusive, small camps away from the crowds for maximum privacy.",
        price: "$3,800",
        categories: ["All Experiences", "honeymoon"],
        tag: "Exclusive",
        overview: `<p>Escape the crowds. We select small, intimate camps where you might be the only guests.</p>`,
        highlights: ["Secluded Camps", "Private Vehicle", "Sunset Cocktails"],
        itinerary: [
            { day: "Day 1", title: "Arrival", description: "Arusha." },
            { day: "Day 2-4", title: "Remote Serengeti", description: "Eastern or Northern Serengeti away from minibuses." },
            { day: "Day 5-6", title: "Ngorongoro Highlands", description: "Scenic walks and crater view." },
            { day: "Day 7", title: "Departure", description: "Fly out." }
        ],
        inclusions: ["Intimate Camps", "Private Game Drives", "Drinks"],
        exclusions: ["Flights", "Tips"],
        gallery: ["/images/serene-tree-silhouette-at-sunset-2026-03-26-10-49-45-utc.webp"]
    },
    {
        title: "12-Day Safari & Zanzibar",
        slug: "safari-zanzibar-romance",
        duration: "12 Days",
        image: "/images/tourists-on-safari-tour-kasane-north-west-botsw-2026-03-25-00-58-39-utc.webp",
        description: "The ultimate bush and beach combination. 6 days safari, 6 days luxury beach resort.",
        price: "$5,500",
        categories: ["All Experiences", "honeymoon"],
        tag: "Ultimate",
        overview: `<p>The classic romantic combo. Dust of the safari followed by the turquoise waters of the Indian Ocean.</p>`,
        highlights: ["Big 5", "Private Island", "Sunset Dhow Cruise"],
        itinerary: [
            { day: "Day 1-6", title: "Luxury Safari", description: "Highlights of the Northern Circuit." },
            { day: "Day 7", title: "Fly to Zanzibar", description: "Direct flight." },
            { day: "Day 8-11", title: "Private Island Resort", description: "Mnemba or similar luxury." },
            { day: "Day 12", title: "Departure", description: "Fly home." }
        ],
        inclusions: ["Luxury Safari", "5* Beach Resort", "Internal Flights"],
        exclusions: ["International Flights", "Tips"],
        gallery: ["/images/tourists-on-safari-tour-kasane-north-west-botsw-2026-03-25-00-58-39-utc.webp"]
    },

    // --- CATEGORY PACKAGES ---
    {
        title: "Private Luxury Safari",
        slug: "luxury",
        duration: "Flexible",
        image: "/images/lion-watches-over-vast-herd-of-buffalo-in-savanna-2026-03-25-08-24-53-utc.webp",
        description: "Experience the ultimate in comfort and exclusivity with our private luxury safaris. Stay in high-end lodges and premium tented camps.",
        price: "Custom",
        categories: ["private-luxury"],
        tag: "Luxury",
        overview: `<p>Our Private Luxury Safari is tailored to provide an unparalleled experience in the wild without compromising on comfort. Enjoy exclusive game drives, gourmet dining, and spectacular accommodations.</p>`,
        highlights: ["Premium Accommodations", "Private Safari Guide", "Exclusive Game Drives", "Gourmet Dining"],
        itinerary: [
            { day: "Day 1", title: "Arrival in Arusha", description: "Settle into your luxury lodge and prepare for the adventure." },
            { day: "Day 2-3", title: "Tarangire & Manyara", description: "Explore the diverse ecosystems with premium comfort." },
            { day: "Day 4-6", title: "Serengeti National Park", description: "Witness the majestic wildlife of the Serengeti." },
            { day: "Day 7", title: "Ngorongoro & Departure", description: "Descend into the crater before your onward journey." }
        ],
        inclusions: ["All park fees", "Luxury 4x4", "Expert Guide", "Full board at premium lodges", "Selected drinks"],
        exclusions: ["International Flights", "Visas", "Premium Spirits", "Tips"],
        gallery: ["/images/lion-watches-over-vast-herd-of-buffalo-in-savanna-2026-03-25-08-24-53-utc.webp"]
    },
    {
        title: "Midrange Safari",
        slug: "midrange",
        duration: "Flexible",
        image: "/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp",
        description: "The perfect balance of comfort and value. Stay in comfortable, well-located lodges and camps.",
        price: "Custom",
        categories: ["midrange-safari"],
        tag: "Popular",
        overview: `<p>Our Midrange Safari offers incredible wildlife viewing and comfortable lodging at an excellent value. You'll enjoy private game drives and stay in authentic, comfortable accommodations.</p>`,
        highlights: ["Comfortable Lodges", "Private Vehicle", "Excellent Value", "Great Wildlife Viewing"],
        itinerary: [
            { day: "Day 1", title: "Start Your Safari", description: "Depart Arusha for Tarangire National Park." },
            { day: "Day 2", title: "Into the Serengeti", description: "Journey into the heart of the Serengeti." },
            { day: "Day 3", title: "Serengeti Exploration", description: "Full day game drive." },
            { day: "Day 4", title: "Ngorongoro Crater", description: "Crater game drive and return to Arusha." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert Guide", "Full board at midrange lodges"],
        exclusions: ["Flights", "Visas", "Drinks", "Tips"],
        gallery: ["/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp"]
    },
    {
        title: "Budget Safari",
        slug: "budget",
        duration: "Flexible",
        image: "/images/blue-wildebeests-on-the-maasai-mara-kenya-2026-03-26-00-16-05-utc.webp",
        description: "Experience the thrill of the African bush on a budget. Stay in public campsites and feel close to nature.",
        price: "Custom",
        categories: ["budget-safari"],
        tag: "Adventure",
        overview: `<p>For the adventurous traveler, our Budget Safari offers an authentic camping experience. Sleep under the stars and listen to the sounds of the African night.</p>`,
        highlights: ["Camping Experience", "Authentic Adventure", "Excellent Guides", "Unbeatable Value"],
        itinerary: [
            { day: "Day 1", title: "Tarangire Camping", description: "Game drive and set up camp." },
            { day: "Day 2", title: "Serengeti Bound", description: "Drive to Serengeti and camp in the park." },
            { day: "Day 3", title: "Serengeti & Ngorongoro", description: "Morning drive, move to Ngorongoro crater rim for camping." },
            { day: "Day 4", title: "Crater to Arusha", description: "Descend into the crater, then return to Arusha." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert Guide", "Camping equipment", "Camp cook"],
        exclusions: ["Sleeping bags", "Flights", "Visas", "Tips"],
        gallery: ["/images/blue-wildebeests-on-the-maasai-mara-kenya-2026-03-26-00-16-05-utc.webp"]
    },
    {
        title: "Shared Group Safari",
        slug: "group",
        duration: "Flexible",
        image: "/images/tourists-on-safari-tour-kasane-north-west-botsw-2026-03-25-00-58-39-utc.webp",
        description: "Join like-minded travelers on a shared safari. A great way to reduce costs and make new friends.",
        price: "Custom",
        categories: ["group-safari"],
        tag: "Social",
        overview: `<p>Our Shared Group Safaris are perfect for solo travelers or couples looking to share the experience and the cost. Travel in a shared vehicle with a fixed departure date.</p>`,
        highlights: ["Meet New People", "Cost-Effective", "Shared Vehicle", "Classic Northern Circuit"],
        itinerary: [
            { day: "Day 1", title: "Meet the Group", description: "Depart Arusha with your group to Lake Manyara or Tarangire." },
            { day: "Day 2", title: "Serengeti National Park", description: "Journey together to the Serengeti." },
            { day: "Day 3", title: "Ngorongoro Crater", description: "Game drive in the crater before heading back." }
        ],
        inclusions: ["All park fees", "Seat in shared 4x4", "Expert Guide", "Accommodation as specified", "Meals"],
        exclusions: ["Flights", "Visas", "Drinks", "Tips"],
        gallery: ["/images/tourists-on-safari-tour-kasane-north-west-botsw-2026-03-25-00-58-39-utc.webp"]
    },
    {
        title: "Flying Packages",
        slug: "flying",
        duration: "Flexible",
        image: "/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp",
        description: "Maximize your time on safari by flying between parks. Perfect for those with limited time or who want to avoid long drives.",
        price: "Custom",
        categories: ["flying-packages"],
        tag: "Time-Saver",
        overview: `<p>Skip the dusty roads and enjoy aerial views of the stunning Tanzanian landscape. Our flying packages take you directly to the action, maximizing your time on safari.</p>`,
        highlights: ["Scenic Flights", "Maximize Safari Time", "Avoid Long Drives", "Premium Experience"],
        itinerary: [
            { day: "Day 1", title: "Fly to Serengeti", description: "Board a light aircraft from Arusha to the Serengeti." },
            { day: "Day 2-3", title: "Serengeti Exploration", description: "Extensive game drives with your camp's vehicle." },
            { day: "Day 4", title: "Return Flight", description: "Fly back to Arusha or connect to Zanzibar." }
        ],
        inclusions: ["Internal flights", "All park fees", "Shared game drives", "Full board accommodation"],
        exclusions: ["International Flights", "Visas", "Tips"],
        gallery: ["/images/leopard-in-the-maasai-mara-national-park-kenya-2026-03-26-00-05-37-utc.webp"]
    },

    // ==================== PRIVATE LUXURY ====================
    {
        title: "7-Day Signature Private Luxury",
        slug: "private-luxury-7day",
        duration: "7 Days",
        image: "/images/lion-panthera-leo-rear-view-tsavo-kenya-afri-2026-03-25-01-21-56-utc.webp",
        description: "The definitive private luxury circuit: Tarangire's elephants, Serengeti's big cats, and the Ngorongoro Crater — all in hand-picked 5-star lodges.",
        price: "$3,500",
        categories: ["private-luxury"],
        tag: "Signature",
        overview: `<p>This is our most popular private luxury itinerary. Seven days covering all the highlights of Northern Tanzania — from Tarangire's ancient baobabs to the Ngorongoro Crater floor — staying in the finest lodges. Completely private: your vehicle, your guide, your schedule.</p>`,
        highlights: ["5-Star Lodge Stays", "Private 4x4 Land Cruiser", "Big 5 Wildlife", "Crater Floor Drive"],
        itinerary: [
            { day: "Day 1", title: "Arusha Arrival", description: "Welcome at Kilimanjaro Airport. Transfer to a luxury coffee lodge on the slopes of Mt. Meru. Evening welcome briefing over sundowners." },
            { day: "Day 2", title: "Tarangire National Park", description: "Full day in Tarangire — Tanzania's 'elephant park'. Home to 3,000+ elephants and iconic baobab trees. Luxury tented camp dinner under the stars." },
            { day: "Day 3", title: "Journey to Serengeti", description: "Morning game drive in Tarangire, then journey to the Serengeti via the scenic Ngorongoro Highlands. Afternoon game drive on arrival." },
            { day: "Day 4", title: "Serengeti — Full Day", description: "Full day dedicated to the Serengeti ecosystem. Follow lions, track cheetahs, and witness elephant herds. Bush lunch on the plains. Evening at a luxury lodge." },
            { day: "Day 5", title: "Serengeti — Dawn Drive", description: "Pre-dawn departure to catch predator activity at first light. Afternoon at leisure at the lodge with optional spa treatments." },
            { day: "Day 6", title: "Ngorongoro Crater", description: "Drive to Ngorongoro. Afternoon at leisure on the crater rim — spectacular views. Luxury crater lodge dinner." },
            { day: "Day 7", title: "Crater Drive & Return", description: "Early descent into the crater for a 6-hour game drive — the world's highest concentration of predators. Return to Arusha for evening flight." }
        ],
        inclusions: ["All park fees & conservation fees", "Private 4x4 Land Cruiser", "Expert licensed guide", "Full board at 5-star lodges", "Bottled water & snacks", "Laundry service"],
        exclusions: ["International flights", "Visa fees", "Premium spirits", "Tips & gratuities", "Travel insurance"],
        gallery: [
            "/images/lion-panthera-leo-rear-view-tsavo-kenya-afri-2026-03-25-01-21-56-utc.webp",
            "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
            "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        ],
    },
    {
        title: "5-Day Private Photography Safari",
        slug: "private-photography",
        duration: "5 Days",
        image: "/images/coalition-of-cheetahs-on-a-dry-tree-looking-for-pr-2026-03-18-06-31-11-utc.webp",
        description: "Specially designed for photographers. Converted open-sided vehicle, optimal sighting positions, and unlimited time at each sighting.",
        price: "$4,100",
        categories: ["private-luxury"],
        tag: "Photography",
        overview: `<p>Our Photography Safari is the gold standard for wildlife photographers. We use a custom-converted open-sided 4x4 for 360° shooting angles, position you for the best light at dawn and dusk, and allow unlimited time at each sighting. Your guide is also a photography enthusiast who understands composition and animal behavior.</p>`,
        highlights: ["Open-Sided Photography Vehicle", "Expert Photo-Guide", "Unlimited Sighting Time", "Golden Hour Drives"],
        itinerary: [
            { day: "Day 1", title: "Arusha & Briefing", description: "Arrive and meet your photography guide. Equipment check and briefing on the itinerary and shooting tips for African wildlife." },
            { day: "Day 2", title: "Serengeti — Central Plains", description: "Fly into the Serengeti. Afternoon drive through Seronera Valley — the lion and leopard capital. Golden hour photography session." },
            { day: "Day 3", title: "Serengeti — Full Day", description: "Pre-dawn drive for predator action. Set up at a water hole for approaching herds. Afternoon: big cat tracking with guide. Twilight drive." },
            { day: "Day 4", title: "Ngorongoro Crater", description: "Full 8-hour descent into the crater. Position near the flamingo lake, lion prides, and hyena dens. Best light at crater floor at dawn." },
            { day: "Day 5", title: "Morning Drive & Departure", description: "Final sunrise drive in Ngorongoro Highlands. Transfer to Arusha airport." }
        ],
        inclusions: ["Fly-in to Serengeti", "Open-sided photography vehicle", "Photography guide", "Full board at luxury camps", "All park fees"],
        exclusions: ["Camera gear", "International flights", "Tips", "Visa fees"],
        gallery: [
            "/images/coalition-of-cheetahs-on-a-dry-tree-looking-for-pr-2026-03-18-06-31-11-utc.webp",
            "/images/leopard-lying-on-rock-in-the-wild-2026-03-25-08-21-20-utc.webp",
        ],
    },
    {
        title: "10-Day Private Luxury & Zanzibar",
        slug: "private-luxury-zanzibar",
        duration: "10 Days",
        image: "/images/tropical-house-on-stilts-over-crystal-blue-waters-2026-03-17-00-42-39-utc.webp",
        description: "Five nights of private luxury safari followed by five nights at a 5-star Zanzibar beach resort. The ultimate Tanzania experience.",
        price: "$5,800",
        categories: ["private-luxury"],
        tag: "Ultimate",
        overview: `<p>The pinnacle of Tanzanian travel: a private luxury safari through the Northern Circuit combined with a stay at one of Zanzibar's finest beach resorts. You'll witness the Big 5 in complete privacy, then swap dust for turquoise ocean and powdery white sand.</p>`,
        highlights: ["Big 5 Private Safari", "5-Star Zanzibar Resort", "Fly Arusha–Zanzibar", "Dhow Sunset Cruise"],
        itinerary: [
            { day: "Day 1", title: "Arusha Arrival", description: "Arrive and overnight at a boutique mountain lodge." },
            { day: "Day 2", title: "Tarangire National Park", description: "Game drives among massive elephant herds and ancient baobab trees." },
            { day: "Day 3-4", title: "Serengeti National Park", description: "Two full days tracking lions, leopards, and cheetahs in the world's most famous wildlife park." },
            { day: "Day 5", title: "Ngorongoro Crater", description: "Descend into the crater for a 6-hour private game drive. Overnight on the crater rim." },
            { day: "Day 6", title: "Fly to Zanzibar", description: "Morning flight from Arusha to Zanzibar. Afternoon check-in at a 5-star beachfront resort." },
            { day: "Day 7-9", title: "Zanzibar Beach & Culture", description: "Three days of total relaxation. Snorkeling, Stone Town tour, dhow sunset cruise, and Jozani forest." },
            { day: "Day 10", title: "Departure", description: "Fly home from Zanzibar International Airport." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert guide", "Full board safari", "Internal flight to Zanzibar", "5-star resort (half board)", "Dhow cruise"],
        exclusions: ["International flights", "Visa fees", "Premium spirits", "Tips"],
        gallery: [
            "/images/tropical-house-on-stilts-over-crystal-blue-waters-2026-03-17-00-42-39-utc.webp",
            "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
        ],
    },

    // ==================== MIDRANGE SAFARI ====================
    {
        title: "6-Day Classic Midrange Circuit",
        slug: "midrange-6day",
        duration: "6 Days",
        image: "/images/safari-jeep-on-a-dirt-road-a-sunrise-drive-2026-03-25-00-55-18-utc.webp",
        description: "The perfect introduction to Tanzania. Six days covering Tarangire, Serengeti, and Ngorongoro in comfortable lodges with full board.",
        price: "$1,800",
        categories: ["midrange-safari"],
        tag: "Best Seller",
        overview: `<p>This is the classic Northern Circuit done right. A comfortable private vehicle, knowledgeable licensed guide, and well-located lodges at genuine value. You'll see the Big 5, experience the Serengeti plains, and descend into the Ngorongoro Crater — the three iconic experiences that define a Tanzania safari.</p>`,
        highlights: ["The Big 5", "Serengeti Plains", "Ngorongoro Crater", "Tarangire Elephants"],
        itinerary: [
            { day: "Day 1", title: "Arusha to Tarangire", description: "Early morning departure. Full day game drive in Tarangire — famous for massive elephant herds and diverse birdlife. Overnight at a comfortable lodge." },
            { day: "Day 2", title: "Tarangire to Serengeti", description: "Morning game drive in Tarangire. Afternoon drive through the Ngorongoro Highlands to the Serengeti. Game viewing en route." },
            { day: "Day 3", title: "Serengeti — Full Day", description: "Dedicated full day in the Serengeti. Track the Big 5 with your expert guide. Bush lunch on the plains." },
            { day: "Day 4", title: "Serengeti to Ngorongoro", description: "Morning game drive in Serengeti. Drive to Ngorongoro Crater rim for overnight with panoramic views." },
            { day: "Day 5", title: "Ngorongoro Crater", description: "Full descent into the crater. 6 hours among lions, elephants, hippos, and flamingos. Return to rim for dinner." },
            { day: "Day 6", title: "Return to Arusha", description: "Optional morning Lake Manyara game drive. Return to Arusha for evening departure." }
        ],
        inclusions: ["All park fees", "Private 4x4 Land Cruiser", "Expert licensed guide", "Full board accommodation", "Bottled water"],
        exclusions: ["Flights", "Visa fees", "Alcoholic drinks", "Tips"],
        gallery: [
            "/images/safari-jeep-on-a-dirt-road-a-sunrise-drive-2026-03-25-00-55-18-utc.webp",
            "/images/zebras-in-the-serengeti-national-park-tanzania-2026-03-26-01-33-32-utc.webp",
        ],
    },
    {
        title: "5-Day Serengeti & Crater Focus",
        slug: "midrange-serengeti-crater",
        duration: "5 Days",
        image: "/images/lioness-and-herd-of-wildebeest-at-the-serengeti-na-2026-03-09-07-52-40-utc.webp",
        description: "Maximum wildlife, minimum driving. Fly into the Serengeti and spend quality time at Africa's two most iconic parks.",
        price: "$2,200",
        categories: ["midrange-safari"],
        tag: "Fly-In",
        overview: `<p>For those who want the very best wildlife viewing without long driving days. We fly you directly into the Serengeti, giving you more time on game drives and less time on the road. The Ngorongoro Crater rounds out this action-packed 5-day itinerary.</p>`,
        highlights: ["Fly into Serengeti", "Maximum Game Drive Time", "Ngorongoro Crater", "Lion & Leopard Sightings"],
        itinerary: [
            { day: "Day 1", title: "Fly to Serengeti", description: "Morning flight from Arusha to the Serengeti. Afternoon game drive with your guide from camp." },
            { day: "Day 2", title: "Serengeti — Full Day", description: "Full day game drives. Morning predator tracking, afternoon following elephant herds. Bush lunch." },
            { day: "Day 3", title: "Serengeti to Ngorongoro", description: "Morning drive with game viewing. Transfer to Ngorongoro Crater rim lodge." },
            { day: "Day 4", title: "Ngorongoro Crater", description: "Full descent into the crater — the world's highest density of lions per square kilometer. Return to rim for dinner." },
            { day: "Day 5", title: "Manyara & Departure", description: "Morning Lake Manyara game drive. Return to Arusha airport." }
        ],
        inclusions: ["Internal flight to Serengeti", "All park fees", "Private 4x4", "Expert guide", "Full board accommodation"],
        exclusions: ["International flights", "Visa fees", "Drinks", "Tips"],
        gallery: [
            "/images/lioness-and-herd-of-wildebeest-at-the-serengeti-na-2026-03-09-07-52-40-utc.webp",
            "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        ],
    },
    {
        title: "9-Day Midrange Bush & Beach",
        slug: "midrange-beach",
        duration: "9 Days",
        image: "/images/koh-mook-tropical-island-in-the-andaman-sea-in-tha-2026-03-17-20-09-20-utc.webp",
        description: "Four nights of wildlife adventure followed by five nights at a beautiful Zanzibar beach hotel. The ultimate Tanzania combo at great value.",
        price: "$2,800",
        categories: ["midrange-safari"],
        tag: "Combo",
        overview: `<p>Combine the thrill of the safari with the relaxation of Zanzibar. This 9-day itinerary covers the classic Northern Circuit parks and then rewards you with five days on Zanzibar's stunning beaches. Comfortable midrange lodges throughout.</p>`,
        highlights: ["Northern Circuit Safari", "Zanzibar Beach", "Dhow Sailing", "Stone Town Tour"],
        itinerary: [
            { day: "Day 1", title: "Arusha Arrival", description: "Transfer to hotel. Evening briefing." },
            { day: "Day 2", title: "Tarangire National Park", description: "Full day game drive among elephants and baobabs." },
            { day: "Day 3", title: "Serengeti", description: "Drive to Serengeti. Afternoon game drive." },
            { day: "Day 4", title: "Serengeti Full Day", description: "Dawn to dusk game drives in the heart of the Serengeti." },
            { day: "Day 5", title: "Ngorongoro Crater", description: "Full day crater drive. Overnight on rim." },
            { day: "Day 6", title: "Fly to Zanzibar", description: "Morning flight. Afternoon check-in at beach hotel." },
            { day: "Day 7-8", title: "Zanzibar Beach Days", description: "Two days of beach relaxation, snorkeling, and water sports." },
            { day: "Day 9", title: "Stone Town & Departure", description: "Morning Stone Town tour. Evening flight home." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert guide", "Full board safari", "Internal flight to Zanzibar", "Beach hotel (breakfast)", "Stone Town tour"],
        exclusions: ["International flights", "Visa fees", "Drinks", "Tips"],
        gallery: [
            "/images/koh-mook-tropical-island-in-the-andaman-sea-in-tha-2026-03-17-20-09-20-utc.webp",
            "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
        ],
    },

    // ==================== BUDGET SAFARI ====================
    {
        title: "4-Day Budget Camping Safari",
        slug: "budget-4day",
        duration: "4 Days",
        image: "/images/tents-in-a-camping-site-near-kilimanjaro-mountain-2026-03-18-12-22-00-utc.webp",
        description: "Tanzania's two most iconic parks in four action-packed days. Camp inside the parks and wake up surrounded by wildlife.",
        price: "$650",
        categories: ["budget-safari"],
        tag: "Short & Thrilling",
        overview: `<p>Four days, two iconic parks, and a camping experience you'll never forget. This itinerary focuses on Tarangire and the Ngorongoro Crater — both accessible from Arusha — minimizing driving time and maximizing wildlife encounters. Our camp cook prepares hot meals, and the open sky is your ceiling.</p>`,
        highlights: ["Camp Inside National Parks", "Tarangire Elephants", "Ngorongoro Crater", "Camp Cook Provided"],
        itinerary: [
            { day: "Day 1", title: "Arusha to Tarangire", description: "Depart early morning. Game drive en route to the campsite inside Tarangire. Afternoon game drive. Evening bush dinner prepared by camp cook." },
            { day: "Day 2", title: "Tarangire Full Day", description: "Full day game drive exploring the Tarangire River ecosystem. Look for leopards in trees and elephants at the river crossing." },
            { day: "Day 3", title: "Tarangire to Ngorongoro", description: "Morning drive to Ngorongoro Conservation Area. Camp on the crater rim with stunning views." },
            { day: "Day 4", title: "Ngorongoro Crater & Departure", description: "Early descent into the crater for a full morning of game viewing. Return to Arusha by afternoon." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert guide", "Camping equipment (tent, sleeping mat)", "Camp cook (all meals)", "Bottled water"],
        exclusions: ["Sleeping bag (hire available $10/night)", "Flights", "Visa fees", "Tips"],
        gallery: [
            "/images/tents-in-a-camping-site-near-kilimanjaro-mountain-2026-03-18-12-22-00-utc.webp",
            "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
        ],
    },
    {
        title: "3-Day Budget Crater Escape",
        slug: "budget-crater",
        duration: "3 Days",
        image: "/images/hippo-silhouette-grazing-in-golden-african-sunset-2026-03-25-06-46-56-utc.webp",
        description: "The shortest, most affordable way to see Tanzania's best wildlife: Lake Manyara and the Ngorongoro Crater in three days.",
        price: "$480",
        categories: ["budget-safari"],
        tag: "Weekend Special",
        overview: `<p>Three days, two of Tanzania's most wildlife-rich ecosystems, and a price that makes it accessible to everyone. This short camping itinerary is perfect as an add-on to a Kilimanjaro climb or a standalone weekend adventure.</p>`,
        highlights: ["Lake Manyara Hippos & Flamingos", "Ngorongoro Crater", "Budget Camping", "Big 5 Possible"],
        itinerary: [
            { day: "Day 1", title: "Lake Manyara National Park", description: "Depart Arusha at 7am. Full day game drive in Lake Manyara. Famous for hippos, flamingos, and tree-climbing lions. Camp at public campsite." },
            { day: "Day 2", title: "Ngorongoro Crater", description: "Early morning drive to Ngorongoro. Full 8-hour descent into the crater. Camp on the rim with views into the caldera." },
            { day: "Day 3", title: "Morning Wildlife & Return", description: "Morning walk around the crater rim. Return to Arusha by noon." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert guide", "Camping equipment", "Camp cook (all meals)"],
        exclusions: ["Sleeping bag", "Flights", "Visa fees", "Tips"],
        gallery: [
            "/images/hippo-silhouette-grazing-in-golden-african-sunset-2026-03-25-06-46-56-utc.webp",
            "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        ],
    },
    {
        title: "7-Day Budget Full Experience",
        slug: "budget-7day",
        duration: "7 Days",
        image: "/images/group-of-zebras-standing-on-a-field-in-tanzania-2026-03-09-01-51-11-utc.webp",
        description: "The complete Northern Circuit on a budget. See the Big 5, the Great Migration, and all four iconic parks while camping under the stars.",
        price: "$1,100",
        categories: ["budget-safari"],
        tag: "Best Value",
        overview: `<p>Seven days covering Tarangire, Lake Manyara, the Serengeti, and Ngorongoro — the complete Northern Circuit — all while camping inside the parks. This is the most affordable way to see everything Tanzania has to offer. Maximum wildlife, minimum cost, maximum adventure.</p>`,
        highlights: ["Full Northern Circuit", "Serengeti Big Cats", "Ngorongoro Crater", "Camp Inside Parks"],
        itinerary: [
            { day: "Day 1", title: "Arusha to Tarangire", description: "Morning departure, afternoon game drive in Tarangire. Elephant herds and baobab trees. Bush camp dinner." },
            { day: "Day 2", title: "Tarangire & Lake Manyara", description: "Morning drive, then transfer to Lake Manyara. Evening game drive. Camp near the park." },
            { day: "Day 3", title: "Journey to Serengeti", description: "Drive through the scenic Ngorongoro Highlands. Arrive Serengeti for afternoon game drive." },
            { day: "Day 4", title: "Serengeti Full Day", description: "Full day in the Serengeti following the migration and tracking big cats." },
            { day: "Day 5", title: "Serengeti to Ngorongoro", description: "Morning game drive. Transfer to Ngorongoro crater rim camping area." },
            { day: "Day 6", title: "Ngorongoro Crater", description: "Full day descent into the crater — the world's greatest wildlife spectacle." },
            { day: "Day 7", title: "Return to Arusha", description: "Morning drive back to Arusha for departure." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert guide", "All camping equipment", "Camp cook (all meals)", "Bottled water"],
        exclusions: ["Sleeping bag (hire $10/night)", "Flights", "Visa fees", "Tips"],
        gallery: [
            "/images/group-of-zebras-standing-on-a-field-in-tanzania-2026-03-09-01-51-11-utc.webp",
            "/images/wildebeests-in-the-maasai-mara-national-park-keny-2026-03-26-02-01-17-utc.webp",
        ],
    },

    // ==================== SHARED GROUP ====================
    {
        title: "5-Day Classic Group Safari",
        slug: "group-5day",
        duration: "5 Days",
        image: "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
        description: "Join a small group of fellow travelers for five days on the classic Northern Circuit. Fixed weekly departures, max 6 travelers.",
        price: "$780",
        categories: ["group-safari"],
        tag: "Weekly Departure",
        overview: `<p>Our most popular shared group safari. Join up to 5 other travelers every Saturday for a five-day journey through Tanzania's iconic parks. You'll share a comfortable 4x4 Land Cruiser and stay in shared accommodation — the perfect way to meet like-minded adventurers while keeping costs down.</p>`,
        highlights: ["Small Group (Max 6)", "Weekly Saturday Departures", "Comfortable Lodges", "Full Northern Circuit"],
        itinerary: [
            { day: "Day 1", title: "Arusha to Tarangire", description: "Meet your group and guide at the hotel. Drive to Tarangire for afternoon game drives. Shared lodge dinner." },
            { day: "Day 2", title: "Lake Manyara", description: "Morning game drive in Tarangire. Afternoon Lake Manyara. Famous flamingos and hippos." },
            { day: "Day 3", title: "Serengeti", description: "Drive through Ngorongoro Highlands to the Serengeti. Afternoon game drive." },
            { day: "Day 4", title: "Ngorongoro Crater", description: "Full day descent into the Ngorongoro Crater. Group lunch inside the crater." },
            { day: "Day 5", title: "Return to Arusha", description: "Morning game drive. Return to Arusha by early afternoon." }
        ],
        inclusions: ["All park fees", "Seat in shared 4x4 (max 6 pax)", "Expert guide", "Accommodation as specified", "Full board"],
        exclusions: ["Flights", "Visa fees", "Drinks", "Tips", "Personal items"],
        gallery: [
            "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
            "/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp",
        ],
    },
    {
        title: "3-Day Weekend Group Getaway",
        slug: "group-weekend",
        duration: "3 Days",
        image: "/images/tourist-observing-wildebeest-grazing-in-ngorongoro-2026-03-25-04-20-20-utc.webp",
        description: "A three-day group safari perfect for the adventurous weekend traveler. Ngorongoro and Manyara with a small group.",
        price: "$450",
        categories: ["group-safari"],
        tag: "Weekend Break",
        overview: `<p>Can't commit to a week? Our 3-day group weekend safari is the perfect solution. Depart Friday, return Sunday. A small group explores Lake Manyara and the Ngorongoro Crater — two incredible parks — in a shared vehicle at an unbeatable price.</p>`,
        highlights: ["3-Day Weekend Format", "Ngorongoro Crater", "Lake Manyara", "Solo Traveler Friendly"],
        itinerary: [
            { day: "Day 1 (Fri)", title: "Arusha to Lake Manyara", description: "Afternoon departure. Game drive in Lake Manyara National Park. Shared camp or lodge." },
            { day: "Day 2 (Sat)", title: "Ngorongoro Crater", description: "Full descent into the crater. A full day among Tanzania's greatest density of wildlife. Shared group lunch." },
            { day: "Day 3 (Sun)", title: "Crater Rim & Return", description: "Morning walk with views into the crater. Return to Arusha by noon." }
        ],
        inclusions: ["All park fees", "Shared 4x4 vehicle", "Expert guide", "Accommodation (shared)", "Full board"],
        exclusions: ["Flights", "Visa fees", "Drinks", "Tips"],
        gallery: [
            "/images/tourist-observing-wildebeest-grazing-in-ngorongoro-2026-03-25-04-20-20-utc.webp",
            "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        ],
    },
    {
        title: "8-Day Group Safari & Beach",
        slug: "group-beach",
        duration: "8 Days",
        image: "/images/aerial-view-of-the-fishing-boats-in-clear-blue-wat-2026-03-17-21-33-44-utc.webp",
        description: "The classic group safari followed by shared accommodation in Zanzibar — the most affordable way to do the full Tanzania experience.",
        price: "$1,350",
        categories: ["group-safari"],
        tag: "Combo",
        overview: `<p>Join a small group for the best of both worlds: the Northern Circuit safari and Zanzibar beach combined. This 8-day shared itinerary is by far the most affordable way to experience all of Tanzania — bush and beach — at a price that's hard to beat.</p>`,
        highlights: ["Group Safari + Zanzibar Beach", "Northern Circuit Parks", "Shared Zanzibar Accommodation", "Internal Flight Included"],
        itinerary: [
            { day: "Day 1", title: "Arusha Group Meet", description: "Meet fellow travelers. Evening briefing." },
            { day: "Day 2", title: "Tarangire", description: "Full day group game drive." },
            { day: "Day 3", title: "Serengeti", description: "Drive to Serengeti. Afternoon game drive." },
            { day: "Day 4", title: "Serengeti Full Day", description: "Dawn to dusk big cat tracking with the group." },
            { day: "Day 5", title: "Ngorongoro", description: "Full crater descent. Group lunch on the crater floor." },
            { day: "Day 6", title: "Fly to Zanzibar", description: "Morning flight. Afternoon beach check-in (shared twin/double rooms)." },
            { day: "Day 7", title: "Zanzibar Beach Day", description: "Free day for swimming, snorkeling, or Stone Town tour (own cost)." },
            { day: "Day 8", title: "Departure", description: "Transfer to Zanzibar airport." }
        ],
        inclusions: ["All park fees", "Shared 4x4 (max 6 pax)", "Expert guide", "Full board safari", "Internal flight to Zanzibar", "Shared Zanzibar accommodation (breakfast)"],
        exclusions: ["International flights", "Visa fees", "Drinks", "Tips"],
        gallery: [
            "/images/aerial-view-of-the-fishing-boats-in-clear-blue-wat-2026-03-17-21-33-44-utc.webp",
            "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
        ],
    },

    // ==================== FLYING PACKAGES ====================
    {
        title: "4-Day Serengeti Fly-In Safari",
        slug: "flying-serengeti",
        duration: "4 Days",
        image: "/images/air-balloon-flying-over-a-barren-landscape-at-suns-2026-03-18-06-25-43-utc.webp",
        description: "Fly directly into the heart of the Serengeti and spend three full days in the finest remote camps. No long drives, just wildlife.",
        price: "$2,800",
        categories: ["flying-packages"],
        tag: "Fly-In",
        overview: `<p>Board a small charter aircraft in Arusha and land in the Serengeti in under an hour. Three full days of game drives from a remote camp, with your own vehicle and guide on standby at all times. No minibuses, no long driving days — just you and the Serengeti.</p>`,
        highlights: ["Charter Flight Arusha–Serengeti", "Three Full Days in Serengeti", "Remote Luxury Camp", "Private Guide & Vehicle"],
        itinerary: [
            { day: "Day 1", title: "Fly to Central Serengeti", description: "Early morning charter flight to Seronera or Grumeti airstrip. Afternoon game drive." },
            { day: "Day 2", title: "Serengeti Dawn Drive", description: "Pre-dawn departure for predator activity. Follow lions and cheetahs. Bush lunch on the plains." },
            { day: "Day 3", title: "Serengeti Evening Drive", description: "Morning at camp. Afternoon golden hour drive for photography. Night sounds of the bush." },
            { day: "Day 4", title: "Morning Drive & Return Flight", description: "Final morning drive. Flight back to Arusha for onward connections." }
        ],
        inclusions: ["Charter flight both ways", "All park fees", "Private 4x4 & guide at camp", "Full board at luxury camp"],
        exclusions: ["International flights", "Visa fees", "Premium drinks", "Tips"],
        gallery: [
            "/images/air-balloon-flying-over-a-barren-landscape-at-suns-2026-03-18-06-25-43-utc.webp",
            "/images/silhouette-of-an-elephant-in-savanna-and-an-air-ba-2026-03-18-07-03-34-utc.webp",
        ],
    },
    {
        title: "6-Day Fly & Drive Circuit",
        slug: "flying-circuit",
        duration: "6 Days",
        image: "/images/striped-hot-air-balloon-flies-over-green-plains-2026-03-09-23-55-05-utc.webp",
        description: "Fly into the Serengeti, then drive to Ngorongoro and Manyara. The best combination of aerial convenience and overland adventure.",
        price: "$3,500",
        categories: ["flying-packages"],
        tag: "Hybrid",
        overview: `<p>The best of both worlds. Fly directly into the Serengeti to start your safari immediately, then drive at a comfortable pace through Ngorongoro and Manyara on the way back to Arusha. You get maximum time in the Serengeti without losing the overland experience.</p>`,
        highlights: ["Fly into Serengeti", "Serengeti + Ngorongoro + Manyara", "Private Vehicle Overland", "No Wasted Travel Days"],
        itinerary: [
            { day: "Day 1", title: "Fly to Serengeti", description: "Charter flight to Serengeti. Afternoon game drive from your camp." },
            { day: "Day 2-3", title: "Serengeti Exploration", description: "Two full days in the Serengeti. Big cat tracking, elephant herds, and migration dynamics." },
            { day: "Day 4", title: "Serengeti to Ngorongoro", description: "Drive from Serengeti to Ngorongoro Crater rim. En route game viewing." },
            { day: "Day 5", title: "Ngorongoro Crater", description: "Full descent into the crater. 6+ hours of concentrated wildlife viewing." },
            { day: "Day 6", title: "Lake Manyara & Arusha", description: "Morning game drive in Lake Manyara. Return to Arusha by evening." }
        ],
        inclusions: ["Charter flight to Serengeti", "All park fees", "Private 4x4 & guide", "Full board accommodation"],
        exclusions: ["International flights", "Visa fees", "Drinks", "Tips"],
        gallery: [
            "/images/striped-hot-air-balloon-flies-over-green-plains-2026-03-09-23-55-05-utc.webp",
            "/images/wildebeest-and-zebra-tourist-safari-drive-2026-03-09-06-07-38-utc.webp",
        ],
    },
    {
        title: "7-Day Grand Flying Safari",
        slug: "flying-grand",
        duration: "7 Days",
        image: "/images/silhouette-of-an-elephant-in-savanna-and-an-air-ba-2026-03-18-07-03-34-utc.webp",
        description: "Fly between all four major parks. Serengeti, Tarangire, Ngorongoro, and Ruaha — Tanzania's north and south by air.",
        price: "$4,800",
        categories: ["flying-packages"],
        tag: "Grand Tour",
        overview: `<p>The grand flying safari covers more ground than any road trip could. By using light aircraft to hop between parks, you'll experience the Big 5 in four distinct ecosystems — from the elephant-packed Tarangire to the remote wilderness of the Serengeti's western corridor. This is Tanzania as few ever see it.</p>`,
        highlights: ["Four Parks by Air", "Remote Serengeti Regions", "Tarangire Fly-In", "Exclusive Remote Camps"],
        itinerary: [
            { day: "Day 1", title: "Fly to Tarangire", description: "Morning charter to Tarangire airstrip. Afternoon game drive among elephant superherd." },
            { day: "Day 2", title: "Tarangire Full Day", description: "Full day Tarangire game drives. Famous for leopards in trees and massive herds." },
            { day: "Day 3", title: "Fly to Western Serengeti", description: "Charter to Grumeti airstrip. Afternoon game drives in uncrowded western corridor." },
            { day: "Day 4", title: "Serengeti Full Day", description: "Track lions, leopards, and cheetahs in the remote western Serengeti." },
            { day: "Day 5", title: "Fly to Central Serengeti", description: "Scenic flight to Seronera. Game drives in the Serengeti's wildlife-rich heart." },
            { day: "Day 6", title: "Fly to Ngorongoro", description: "Charter to Lake Manyara airstrip. Afternoon Ngorongoro Crater rim arrival." },
            { day: "Day 7", title: "Ngorongoro Crater & Departure", description: "Full crater descent. Return to Arusha by road." }
        ],
        inclusions: ["All charter flights between parks", "All park fees", "Private guide & vehicle at each camp", "Full board luxury camps"],
        exclusions: ["International flights", "Visa fees", "Premium spirits", "Tips"],
        gallery: [
            "/images/silhouette-of-an-elephant-in-savanna-and-an-air-ba-2026-03-18-07-03-34-utc.webp",
            "/images/aerial-view-of-herd-of-african-elephants-standing-2026-03-25-00-59-53-utc.webp",
        ],
    },

    // ==================== HONEYMOONERS ====================
    {
        title: "5-Day Romantic Crater Escape",
        slug: "romantic-crater-escape",
        duration: "5 Days",
        image: "/images/muted-colors-on-a-natural-background-of-a-sunrise-2026-03-09-23-11-08-utc.webp",
        description: "A short, intensely romantic safari for honeymooners. Private crater dinner, sunset cocktails on a kopje, and a luxury Ngorongoro suite.",
        price: "$3,200",
        categories: ["honeymoon"],
        tag: "Romantic",
        overview: `<p>A perfectly crafted 5-day honeymoon safari for couples who want romance without a long itinerary. Stay in a luxury crater lodge, enjoy a private candlelit dinner inside the Ngorongoro Crater, and watch the sun set from a private kopje with Serengeti plains stretching to the horizon.</p>`,
        highlights: ["Private Crater Dinner", "Luxury Crater Lodge Suite", "Sunset Kopje Cocktails", "Tarangire Tree Lodge"],
        itinerary: [
            { day: "Day 1", title: "Arusha Luxury Welcome", description: "Arrive at a boutique coffee lodge. Welcome dinner for two with champagne." },
            { day: "Day 2", title: "Tarangire — Romantic Drive", description: "Private game drive in Tarangire. Sunset cocktails at the Silale swamp — famous for thousands of birds at dusk." },
            { day: "Day 3", title: "Serengeti — Kopje Sundowner", description: "Drive to Serengeti. Afternoon game drive. Private sundowner setup on a granite kopje for just the two of you." },
            { day: "Day 4", title: "Ngorongoro — Private Crater Dinner", description: "Drive to Ngorongoro. Morning crater game drive. Evening: private candlelit dinner inside the crater, exclusive Crater Lodge suite." },
            { day: "Day 5", title: "Crater Rim Morning & Departure", description: "Sunrise views from the crater rim. Return to Arusha airport." }
        ],
        inclusions: ["All park fees", "Private 4x4", "Expert guide", "Luxury accommodation", "Private crater dinner", "Kopje sundowner setup", "Champagne on arrival"],
        exclusions: ["International flights", "Visa fees", "Premium spirits", "Tips"],
        gallery: [
            "/images/muted-colors-on-a-natural-background-of-a-sunrise-2026-03-09-23-11-08-utc.webp",
            "/images/serene-tree-silhouette-at-sunset-2026-03-26-10-49-45-utc.webp",
        ],
    },

    // ==================== DAY TOURS ====================
    {
        title: "Ngorongoro Crater Day Tour",
        slug: "day-tour-ngorongoro",
        duration: "1 Day",
        image: "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        description: "A full day inside the Ngorongoro Crater — the world's largest intact volcanic caldera and Africa's most wildlife-rich arena.",
        price: "$280",
        categories: ["day-tours"],
        tag: "Most Popular",
        overview: `<p>The Ngorongoro Crater is one of Africa's seven natural wonders. A single day spent on the crater floor can yield sightings of all Big 5, plus hippos, flamingos, and hundreds of bird species. We depart Arusha at 6:30am, descend into the crater by 9am, and spend the entire day tracking wildlife before returning to Arusha by 7pm.</p>`,
        highlights: ["Big 5 in One Day", "Crater Floor Drive (8 hrs)", "Hippo Pool & Flamingo Lake", "Packed Lunch Included"],
        itinerary: [
            { day: "6:30 AM", title: "Departure from Arusha", description: "Early morning pickup from your hotel. Drive towards Ngorongoro Conservation Area." },
            { day: "9:00 AM", title: "Crater Descent", description: "Stop at the crater rim viewpoint for photos, then descend 600m to the crater floor." },
            { day: "9:00 AM–5:00 PM", title: "Full Day Game Drive", description: "Track lions, spotted hyenas, black rhinos, elephants, and buffalo. Picnic lunch at the hippo pool." },
            { day: "5:00 PM", title: "Crater Ascent", description: "Drive up from the crater floor to the rim, then back to Arusha." },
            { day: "7:00 PM", title: "Return to Arusha", description: "Hotel drop-off." }
        ],
        inclusions: ["Private 4x4 Land Cruiser", "Expert guide", "All park & crater fees", "Packed picnic lunch & bottled water"],
        exclusions: ["Hotel accommodation", "Tips", "Personal items"],
        gallery: [
            "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
            "/images/hippo-silhouette-grazing-in-golden-african-sunset-2026-03-25-06-46-56-utc.webp",
        ],
    },
    {
        title: "Tarangire Day Safari",
        slug: "day-tour-tarangire",
        duration: "1 Day",
        image: "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
        description: "Tanzania's 'elephant park': a full day among the world's largest concentration of elephants and iconic baobab trees.",
        price: "$200",
        categories: ["day-tours"],
        tag: "Elephant Safari",
        overview: `<p>Tarangire National Park is a hidden gem often skipped by shorter itineraries — which means fewer vehicles and a more authentic experience. Enormous elephant herds gather at the Tarangire River, and ancient baobab trees dot the landscape. A full day here is one of Tanzania's greatest wildlife experiences.</p>`,
        highlights: ["3,000+ Elephants", "Ancient Baobab Trees", "Tree-Climbing Lions Possible", "Diverse Birdlife"],
        itinerary: [
            { day: "6:30 AM", title: "Departure from Arusha", description: "Early pickup from your hotel. Drive southwest to Tarangire (approx 2 hours)." },
            { day: "8:30 AM", title: "Tarangire Entrance", description: "Enter the park and begin game drive along the Tarangire River." },
            { day: "8:30 AM–4:30 PM", title: "Full Day Game Drive", description: "Explore the park's diverse zones. Spot elephants, giraffes, zebras, wildebeest, and over 550 bird species. Bush lunch." },
            { day: "4:30 PM", title: "Exit & Return", description: "Exit the park. Return to Arusha by 6:30pm." }
        ],
        inclusions: ["Private 4x4", "Expert guide", "All park fees", "Packed lunch & water"],
        exclusions: ["Hotel", "Tips", "Personal items"],
        gallery: [
            "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
            "/images/herd-of-elephants-with-a-calf-in-grassy-field-2026-03-24-10-17-54-utc.webp",
        ],
    },
    {
        title: "Lake Manyara Day Trip",
        slug: "day-tour-manyara",
        duration: "1 Day",
        image: "/images/hippopotamus-in-the-lake-manyara-national-park-ta-2026-03-26-01-10-29-utc.webp",
        description: "Flamingos, tree-climbing lions, and thousands of hippos. A full day in Lake Manyara — Tanzania's most underrated park.",
        price: "$180",
        categories: ["day-tours"],
        tag: "Best Value Day Tour",
        overview: `<p>Lake Manyara National Park is one of Tanzania's most beautiful and accessible parks, famous for its tree-climbing lions, hippo pools, and the million flamingos that turn the lake pink. Just two hours from Arusha, it's the perfect day trip for those short on time but still wanting a full wildlife experience.</p>`,
        highlights: ["Tree-Climbing Lions", "Million Flamingos", "Hippo Pool", "Spectacular Lake Views"],
        itinerary: [
            { day: "7:00 AM", title: "Departure from Arusha", description: "Pickup from your hotel. Drive 2 hours to Lake Manyara." },
            { day: "9:00 AM", title: "Park Entrance & Groundwater Forest", description: "Enter the park's lush groundwater forest. Look for baboons, monkeys, and buffalo in the dense vegetation." },
            { day: "9:00 AM–4:00 PM", title: "Full Day Game Drive", description: "Circuit through the acacia woodland, lake shore, and hippo pool. Look for tree-climbing lions near the fig trees. Lunch at a viewpoint." },
            { day: "4:00 PM", title: "Return to Arusha", description: "Drive back. Hotel drop-off by 6:30pm." }
        ],
        inclusions: ["Private 4x4", "Expert guide", "All park fees", "Packed lunch & water"],
        exclusions: ["Hotel", "Tips", "Personal items"],
        gallery: [
            "/images/hippopotamus-in-the-lake-manyara-national-park-ta-2026-03-26-01-10-29-utc.webp",
            "/images/zebras-in-the-lake-manyara-national-park-tanzania-2026-01-09-14-41-07-utc.webp",
        ],
    },
    {
        title: "Arusha National Park Day Tour",
        slug: "day-tour-arusha",
        duration: "1 Day",
        image: "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
        description: "Tanzania's closest park to the city. Giraffes, zebras, flamingos, and Kilimanjaro views — all within 30 minutes of Arusha.",
        price: "$150",
        categories: ["day-tours"],
        tag: "Near Arusha",
        overview: `<p>Arusha National Park is a compact but spectacular park within 30 minutes of Arusha town. It's the only park in Tanzania where you can do a walking safari with an armed ranger. Expect giraffes, zebras, buffalo, hippos, and — on a clear day — stunning views of both Mt. Meru and Mt. Kilimanjaro rising above the plains.</p>`,
        highlights: ["Walking Safari Available", "Mt. Meru & Kilimanjaro Views", "Giraffes & Zebras", "Flamingo-Filled Momella Lakes"],
        itinerary: [
            { day: "7:30 AM", title: "Departure from Arusha", description: "Hotel pickup. 30-minute drive to Arusha National Park entrance." },
            { day: "8:00 AM", title: "Walking Safari", description: "Optional 2-hour guided bush walk with an armed ranger. Track buffalo and encounter giraffes on foot." },
            { day: "10:00 AM", title: "Game Drive — Momella Lakes", description: "Transfer to the Momella Lakes for flamingo viewing and birdwatching. Dozens of hippos at Kusini hippo pool." },
            { day: "12:00 PM", title: "Ngurdoto Crater Viewpoint", description: "Panoramic views into the 'Little Ngorongoro' crater. Picnic lunch." },
            { day: "2:00 PM", title: "Afternoon Game Drive & Return", description: "Final game drive through the acacia forest. Return to Arusha by 4:30pm." }
        ],
        inclusions: ["Private 4x4", "Expert guide", "Walking safari ranger fee", "All park fees", "Packed lunch & water"],
        exclusions: ["Hotel", "Tips", "Personal items"],
        gallery: [
            "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
            "/images/warthog-family-walking-through-green-grassy-field-2026-03-25-06-56-16-utc.webp",
        ],
    },
];

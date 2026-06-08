export interface SafariCategory {
    title: string;
    slug: string;
    description: string;
    image: string;
    content: string;
    gallery?: string[];
}

export const SAFARI_CATEGORIES: SafariCategory[] = [
    {
        title: "Private Luxury",
        slug: "private-luxury",
        description: "Exclusive private vehicles, expert guides, and hand-picked luxury lodges — no sharing, no compromises.",
        image: "/images/leopard-lying-on-rock-in-the-wild-2026-03-25-08-21-20-utc.webp",
        gallery: [
            "/images/leopard-lying-on-rock-in-the-wild-2026-03-25-08-21-20-utc.webp",
            "/images/lion-watches-over-vast-herd-of-buffalo-in-savanna-2026-03-25-08-24-53-utc.webp",
            "/images/beautiful-wooden-pier-with-thatched-huts-in-ocean-2026-03-25-00-02-46-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "Where exclusivity meets the wild."
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-2xl font-molot text-deep-brown mb-4">Total Exclusivity</h3>
                        <p class="text-gray-600 mb-6">
                            Your private vehicle, your expert guide, your schedule. No compromises. From champagne sunrise drives to private bush dinners under the stars, every moment is curated exclusively for you.
                        </p>
                        <ul class="space-y-2">
                            <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Private Guide & 4x4 Land Cruiser</li>
                            <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Luxury Lodges & Tented Camps</li>
                            <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Fully Flexible Daily Schedule</li>
                            <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Gourmet Bush Dining</li>
                        </ul>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 class="text-xl font-molot text-deep-brown mb-4">Why Go Private Luxury?</h3>
                        <p class="text-gray-600 text-sm mb-4">
                            Stay as long as you want at a lion sighting. Request a picnic breakfast on a kopje. Extend your game drive if a cheetah hunt is unfolding. With a private luxury safari, you are completely in control.
                        </p>
                    </div>
                </div>
            </div>
        `,
    },
    {
        title: "Midrange Safari",
        slug: "midrange-safari",
        description: "The sweet spot between comfort and value — private vehicle, quality lodges, exceptional wildlife.",
        image: "/images/wildebeest-and-zebra-tourist-safari-drive-2026-03-09-06-07-38-utc.webp",
        gallery: [
            "/images/wildebeest-and-zebra-tourist-safari-drive-2026-03-09-06-07-38-utc.webp",
            "/images/safari-jeep-on-a-dirt-road-a-sunrise-drive-2026-03-25-00-55-18-utc.webp",
            "/images/zebras-in-the-serengeti-national-park-tanzania-2026-03-26-01-33-32-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "The perfect balance: comfort without unnecessary expense."
                </p>
                <div>
                    <h3 class="text-2xl font-molot text-deep-brown mb-4">Excellent Value</h3>
                    <p class="text-gray-600 mb-6">
                        Our midrange safaris use private vehicles and stay in well-located, comfortable lodges and tented camps. You get the full Tanzania experience — the wildlife, the expert guides, the unforgettable sunsets — at a price that makes sense.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Private 4x4 Vehicle</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Comfortable Quality Lodges</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Full Board Meals Included</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Licensed Expert Guide</li>
                    </ul>
                </div>
            </div>
        `,
    },
    {
        title: "Budget Safari",
        slug: "budget-safari",
        description: "Authentic camping adventures. Sleep under the stars in the heart of the African bush.",
        image: "/images/tents-in-a-camping-site-near-kilimanjaro-mountain-2026-03-18-06-34-09-utc.webp",
        gallery: [
            "/images/tents-in-a-camping-site-near-kilimanjaro-mountain-2026-03-18-06-34-09-utc.webp",
            "/images/blue-wildebeests-on-the-maasai-mara-kenya-2026-03-26-00-16-05-utc.webp",
            "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "Real Africa. Real adventure. Unbeatable value."
                </p>
                <div>
                    <h3 class="text-2xl font-molot text-deep-brown mb-4">Camping in the Wild</h3>
                    <p class="text-gray-600 mb-6">
                        Sleep to the sound of lions calling in the distance. Our budget safaris use public campgrounds inside the national parks — the most authentic way to experience Tanzania. Rooftop tents, camp cooks, and private 4x4 vehicles ensure you have everything you need.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Private 4x4 with Camping Gear</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Camp Cook & Equipment Provided</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>All Park Fees Included</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Expert Licensed Guide</li>
                    </ul>
                </div>
            </div>
        `,
    },
    {
        title: "Shared Group",
        slug: "group-safari",
        description: "Join fellow adventurers on fixed departure dates. Share the experience, share the cost.",
        image: "/images/tourists-on-safari-tour-kasane-north-west-botsw-2026-03-25-00-58-39-utc.webp",
        gallery: [
            "/images/tourists-on-safari-tour-kasane-north-west-botsw-2026-03-25-00-58-39-utc.webp",
            "/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp",
            "/images/wildebeests-in-the-maasai-mara-national-park-keny-2026-03-26-02-01-17-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "Share the adventure. Make lifelong friends."
                </p>
                <div>
                    <h3 class="text-2xl font-molot text-deep-brown mb-4">Social Safari</h3>
                    <p class="text-gray-600 mb-6">
                        Perfect for solo travelers and couples looking to share the experience. Our group safaris depart on fixed dates with a maximum of 6 travelers per vehicle, ensuring an intimate experience at a shared and affordable cost.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Max 6 Travelers Per Vehicle</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Fixed Weekly Departure Dates</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Shared Accommodation</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Expert Licensed Group Guide</li>
                    </ul>
                </div>
            </div>
        `,
    },
    {
        title: "Flying Packages",
        slug: "flying-packages",
        description: "Skip the dusty roads. Fly between parks on light aircraft and maximize every safari hour.",
        image: "/images/sunrise-in-the-serengeti-national-park-with-hot-ai-2026-03-16-04-37-11-utc.webp",
        gallery: [
            "/images/sunrise-in-the-serengeti-national-park-with-hot-ai-2026-03-16-04-37-11-utc.webp",
            "/images/air-balloon-flying-over-a-barren-landscape-at-suns-2026-03-18-06-25-43-utc.webp",
            "/images/silhouette-of-an-elephant-in-savanna-and-an-air-ba-2026-03-18-07-03-34-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "Arrive by air. See more, drive less."
                </p>
                <div>
                    <h3 class="text-2xl font-molot text-deep-brown mb-4">The Fly-In Experience</h3>
                    <p class="text-gray-600 mb-6">
                        Charter flights on small aircraft whisk you directly to remote airstrips inside the national parks. Enjoy aerial views of the savanna, minimize driving time, and maximize wildlife hours. Perfect for short trips or those wanting the most exclusive, remote camps.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div class="bg-deep-brown text-white p-6 rounded-2xl text-center">
                            <span class="material-symbols-outlined text-4xl mb-2 text-primary">flight</span>
                            <h4 class="font-bold">Scenic Flights</h4>
                        </div>
                        <div class="bg-deep-brown text-white p-6 rounded-2xl text-center">
                            <span class="material-symbols-outlined text-4xl mb-2 text-primary">timer</span>
                            <h4 class="font-bold">Maximum Wildlife Time</h4>
                        </div>
                        <div class="bg-deep-brown text-white p-6 rounded-2xl text-center">
                            <span class="material-symbols-outlined text-4xl mb-2 text-primary">explore</span>
                            <h4 class="font-bold">Remote Access</h4>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
    {
        title: "Honeymooners",
        slug: "honeymoon",
        description: "Romance under African stars. Private dinners, luxury camps, and Zanzibar sunsets.",
        image: "/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp",
        gallery: [
            "/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp",
            "/images/beautiful-wooden-pier-with-thatched-huts-in-ocean-2026-03-25-00-02-46-utc.webp",
            "/images/woman-resting-on-a-wild-beach-in-zanzibar-tanzani-2026-03-26-03-35-30-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "The perfect start to your forever."
                </p>
                <div>
                    <h3 class="text-2xl font-molot text-deep-brown mb-4">Intimacy & Adventure</h3>
                    <p class="text-gray-600 mb-6">
                        Celebrate your love in one of the most romantic places on earth. From sunrise hot air balloon flights over the Serengeti to candlelit dinners in the bush, we craft moments of pure magic for newlyweds. Add a Zanzibar beach extension for the complete romantic escape.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Honeymoon Suites & Private Plunge Pools</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Private Bush Dinners Under the Stars</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Hot Air Balloon Sunrise Flights</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Zanzibar Beach Extension Available</li>
                    </ul>
                </div>
            </div>
        `,
    },
    {
        title: "Day Tours",
        slug: "day-tours",
        description: "One-day park visits from Arusha. Perfect as an add-on to a Kilimanjaro climb or standalone adventure.",
        image: "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
        gallery: [
            "/images/zebras-in-the-ngorongoro-crater-tanzania-2026-03-26-00-09-24-utc.webp",
            "/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp",
            "/images/giraffes-on-the-field-in-the-national-park-in-afri-2026-03-10-01-09-16-utc.webp",
        ],
        content: `
            <div class="space-y-10">
                <p class="lead text-2xl text-deep-brown font-medium mb-6 text-center italic font-serif">
                    "A full day in the wild, back by sunset."
                </p>
                <div>
                    <h3 class="text-2xl font-molot text-deep-brown mb-4">Day Safari Experts</h3>
                    <p class="text-gray-600 mb-6">
                        Short on time? Tanzania's parks are accessible by day trip from Arusha. We depart early to beat the crowds, spend the full day in the park, and return in the evening. All park fees, private 4x4 transport, and a packed lunch are included — no hidden costs.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Early Departure from Arusha (6:30 AM)</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>All Park Fees Included</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Packed Lunch & Drinking Water</li>
                        <li class="flex gap-2 items-center text-gray-700 text-sm"><span class="w-2 h-2 rounded-full bg-primary"></span>Expert Driver-Guide</li>
                    </ul>
                </div>
            </div>
        `,
    },
];

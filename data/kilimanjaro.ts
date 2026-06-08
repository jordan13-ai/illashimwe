export interface KiliPageData {
    title: string;
    subtitle?: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    content: string; // HTML or Markdown-like string
    image: string;
    stats?: { label: string; value: string }[];
    inclusions?: string[];
    gallery?: string[];
    dayByDay?: { day: string; title: string; description: string }[];
    schema?: Record<string, unknown>;
}

const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do I need climbing experience to climb Kilimanjaro?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Kilimanjaro is a trekking peak and does not require technical climbing skills." }
        },
        {
            "@type": "Question",
            "name": "How long does it take to climb Mount Kilimanjaro?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most climbs take between 6 and 9 days depending on the route." }
        },
        {
            "@type": "Question",
            "name": "What is the best route to climb Kilimanjaro?",
            "acceptedAnswer": { "@type": "Answer", "text": "Lemosho and Northern Circuit are considered the best routes for scenery and success rates." }
        },
        {
            "@type": "Question",
            "name": "Is climbing Kilimanjaro safe?",
            "acceptedAnswer": { "@type": "Answer", "text": "With proper guides, acclimatization, and safety systems, Kilimanjaro is a safe adventure." }
        }
    ]
};

export const KILI_GENERAL: Record<string, KiliPageData> = {
    overview: {
        title: "Mount Kilimanjaro",
        subtitle: "The Roof of Africa",
        description: "Experience the ultimate trek with our expert guides and 98% summit success rate.",
        metaTitle: "Mount Kilimanjaro Climbing | Expert Guided Treks from Tanzania",
        metaDescription: "Climb Mount Kilimanjaro with Illashimwe Adventure. Professional local guides, high success rates, detailed itineraries, and premium service from Arusha, Tanzania.",
        image: "/images/kilimanjaro-tanzania-2026-03-13-05-40-30-utc.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Mount Kilimanjaro, rising to <strong>5,895 meters</strong>, stands as Africa’s highest peak and one of the world’s most iconic trekking destinations. A journey to the summit of Kilimanjaro is not simply a climb — it is a transformational experience that takes you through lush rainforest, alpine moorland, high-altitude desert, and glacial summit landscapes.</p>
            
            <p class="mb-6 text-gray-700">At <strong>Illashimwe Adventure</strong>, we specialize in safe, carefully supported Kilimanjaro expeditions led by experienced local guides who were raised in the shadow of the mountain. Every climb is meticulously planned to prioritize safety, acclimatization, comfort, and genuine connection with the mountain.</p>

            <p class="mb-6 text-gray-700">Whether you are an experienced hiker or a first‑time climber, we design your journey to balance challenge with enjoyment, ensuring that every step toward the summit feels meaningful.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Geography & Zones</h3>
            <p class="mb-4 text-gray-700">Mount Kilimanjaro is a free‑standing volcanic mountain located in northern Tanzania near the Kenyan border. It consists of three volcanic cones:</p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Kibo</strong> — home to Uhuru Peak (the summit)</li>
                <li><strong>Mawenzi</strong> — rugged and technical</li>
                <li><strong>Shira</strong> — the oldest and eroded cone</li>
            </ul>
            <p class="mb-6 text-gray-700">What makes Kilimanjaro unique is that it allows climbers to reach nearly 6,000 meters <strong>without technical climbing skills</strong>, making it one of the most accessible high-altitude summits in the world.</p>
            
            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Climate Zones</h3>
             <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Cultivated farmland</li>
                <li>Rainforest</li>
                <li>Heath and moorland</li>
                <li>Alpine desert</li>
                <li>Arctic summit</li>
            </ul>
        `,
        gallery: [
            "/images/beautiful-scenery-of-a-mountain-landscape-in-the-k-2026-03-18-06-58-06-utc.webp",
            "/images/couple-backpackers-on-the-trek-to-kilimanjaro-moun-2026-03-17-00-04-58-utc.webp",
            "/images/mega-menu/summit-sign.webp"
        ],
        stats: [
            { label: "Height", value: "5,895m" },
            { label: "Location", value: "Tanzania" },
            { label: "Type", value: "Dormant Volcano" },
            { label: "First Ascent", value: "1889" }
        ],
        schema: FAQ_SCHEMA
    },
    "best-time": {
        title: "Best Time to Climb",
        subtitle: "Weather & Seasons Guide",
        description: "Discover the best months to climb Kilimanjaro. Learn about dry seasons, visibility, temperatures, and how to choose the perfect time for your trek.",
        metaTitle: "Best Time to Climb Mount Kilimanjaro | Weather & Seasons Guide",
        metaDescription: "Discover the best months to climb Kilimanjaro. Learn about dry seasons, visibility, temperatures, and how to choose the perfect time for your trek.",
        image: "/images/snow-on-top-of-mount-kilimanjaro-in-amboseli-2026-03-24-15-21-46-utc.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Mount Kilimanjaro can be climbed year‑round, but conditions vary significantly by season.</p>
            
            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Best Climbing Seasons</h3>
            
            <h4 class="font-bold text-lg text-primary mt-6 mb-2 text-deep-brown">January to March</h4>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Warm temperatures</li>
                <li>Fewer crowds</li>
                <li>Occasional afternoon clouds</li>
                <li>Ideal for quieter climbs</li>
            </ul>

            <h4 class="font-bold text-lg text-primary mt-6 mb-2 text-deep-brown">June to October</h4>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Dry season</li>
                <li>Excellent visibility</li>
                <li>Most popular period</li>
                <li>Best overall summit conditions</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Rainy Season Considerations</h3>
            <p class="mb-6 text-gray-700"><strong>April–May and November</strong> bring heavier rainfall. While climbs still operate, trails are muddier and visibility can be limited. However, these months offer greater solitude for adventurous travelers.</p>
            <p class="mb-6 text-gray-700">We advise each guest individually based on their travel dates, goals, and preferences.</p>
        `,
        stats: [
            { label: "Peak Season", value: "July-Aug" },
            { label: "Warmest", value: "Jan-Feb" },
            { label: "Wettest", value: "April-May" },
            { label: "Quietest", value: "Nov-Dec" }
        ],
        schema: FAQ_SCHEMA
    },
    safety: {
        title: "Success Rate & Safety",
        subtitle: "Professional Guided Climbs",
        description: "Learn how Illashimwe Adventure ensures high Kilimanjaro summit success rates through expert guides, acclimatization, medical checks, and safety systems.",
        metaTitle: "Kilimanjaro Success Rate & Safety | Professional Guided Climbs",
        metaDescription: "Learn how Illashimwe Adventure ensures high Kilimanjaro summit success rates through expert guides, acclimatization, medical checks, and safety systems.",
        image: "/images/nominated-hiking-to-the-top-of-mt-kilimanjaro-2026-03-09-08-20-20-utc.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Climbing Kilimanjaro is a serious high-altitude challenge, and success depends on preparation, pacing, and professional support.</p>
            
            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Our Safety System</h3>
            <ul class="list-none space-y-4 mb-8 text-gray-700">
                <li class="flex items-start gap-3"><span class="text-primary font-bold">✓</span> Certified mountain guides</li>
                <li class="flex items-start gap-3"><span class="text-primary font-bold">✓</span> Daily health monitoring (oxygen levels, symptoms)</li>
                <li class="flex items-start gap-3"><span class="text-primary font-bold">✓</span> Proper acclimatization itineraries</li>
                <li class="flex items-start gap-3"><span class="text-primary font-bold">✓</span> Emergency protocols & Evacuation plans</li>
                <li class="flex items-start gap-3"><span class="text-primary font-bold">✓</span> Oxygen and first-aid equipment</li>
                <li class="flex items-start gap-3"><span class="text-primary font-bold">✓</span> Nutritious meals and hydration management</li>
            </ul>

             <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Success Strategy</h3>
            <p class="mb-6 text-gray-700">We strongly recommend longer itineraries (7–9 days), which significantly improve acclimatization and summit success. Your safety will always come before the summit. A responsible climb is a successful climb.</p>
        `,
        stats: [
            { label: "Our Success Rate", value: "98%" },
            { label: "Guide Ratio", value: "1:2" },
            { label: "Porter Ratio", value: "1:3" },
            { label: "Oxygen", value: "Provided" }
        ],
        schema: FAQ_SCHEMA
    },
    faqs: {
        title: "Frequently Asked Questions",
        subtitle: "Everything You Need to Know",
        description: "Answers to the most common questions about climbing Kilimanjaro.",
        metaTitle: "Kilimanjaro Climbing FAQs | Illashimwe Adventure",
        metaDescription: "Get answers to common questions about climbing Kilimanjaro: difficulty, visas, tipping, safety, and more.",
        image: "/images/couple-backpackers-on-the-trek-to-kilimanjaro-moun-2026-03-17-00-04-58-utc.webp",
        content: `
            <div class="space-y-8 text-gray-700">
                <div>
                    <h3 class="font-bold text-deep-brown text-lg mb-2">Do I need climbing experience to climb Kilimanjaro?</h3>
                    <p>No. Kilimanjaro is a trekking peak and does not require technical climbing skills.</p>
                </div>
                <div>
                    <h3 class="font-bold text-deep-brown text-lg mb-2">How long does it take to climb Mount Kilimanjaro?</h3>
                    <p>Most climbs take between 6 and 9 days depending on the route.</p>
                </div>
                <div>
                    <h3 class="font-bold text-deep-brown text-lg mb-2">What is the best route to climb Kilimanjaro?</h3>
                    <p>Lemosho and Northern Circuit are considered the best routes for scenery and success rates.</p>
                </div>
                 <div>
                    <h3 class="font-bold text-deep-brown text-lg mb-2">Is climbing Kilimanjaro safe?</h3>
                    <p>With proper guides, acclimatization, and safety systems, Kilimanjaro is a safe adventure.</p>
                </div>
            </div>
        `,
        schema: FAQ_SCHEMA
    },
    "packing-list": {
        title: "Packing List",
        subtitle: "What to Pack for Your Climb",
        description: "Complete Kilimanjaro packing list covering clothing, gear, equipment, and essentials for a safe and comfortable climb.",
        metaTitle: "Kilimanjaro Packing List | What to Pack for Your Climb",
        metaDescription: "Complete Kilimanjaro packing list covering clothing, gear, equipment, and essentials for a safe and comfortable climb.",
        image: "/images/hiking-kilimanjaro-from-horombo-huts-2026-03-18-17-37-20-utc.webp",
        content: `
            <p class="mb-6 text-gray-700">Having the right gear is critical. Temperatures can range from +30°C in the rainforest to -20°C at the summit. We provide a full checklist upon booking and assist with rental gear locally.</p>
            
             <h3 class="text-xl font-molot text-deep-brown mt-8 mb-4">Essentials Include:</h3>
             <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Insulated jacket (Down/Synthetic)</li>
                <li>Waterproof shell (Jacket & Pants)</li>
                <li>Hiking boots (Waterproof & Broken-in)</li>
                <li>Thermal layers (Base & Mid)</li>
                <li>Sleeping bag (Rated to -15°C)</li>
                <li>Headlamp (+ extra batteries)</li>
                <li>Trekking poles</li>
                <li>Sunscreen & Sunglasses</li>
             </ul>
        `,
        schema: FAQ_SCHEMA
    }
};

export const KILI_ROUTES: Record<string, KiliPageData> = {
    machame: {
        title: "Machame Route",
        subtitle: "The Whiskey Route",
        description: "Climb Kilimanjaro via the scenic Machame Route. Full day-by-day itinerary, expert guides, high success rates.",
        metaTitle: "Machame Route Kilimanjaro | 7–8 Day Itinerary & Expert Guides",
        metaDescription: "Climb Kilimanjaro via the scenic Machame Route with a full day-by-day itinerary, high success rates, and professional local guides.",
        image: "/images/hiking-kilimanjaro-from-horombo-huts-2026-03-18-17-37-20-utc.webp",
        gallery: [
            "/images/kilimanjaro-tanzania-2026-03-13-05-40-30-utc.webp",
            "/images/couple-backpackers-on-the-trek-to-kilimanjaro-moun-2026-03-17-00-04-58-utc.webp",
            "/images/mega-menu/summit-sign.webp"
        ],
        stats: [
            { label: "Duration", value: "7-8 Days" },
            { label: "Difficulty", value: "Moderate to Challenging" },
            { label: "Traffic", value: "High" },
            { label: "Success (8 Days)", value: "Very High" },
            { label: "Overnight", value: "Tents" }
        ],
        content: `
            <p class="mb-6 text-gray-700">The Machame Route, often referred to as the "Whiskey Route", is one of the most popular and scenic routes on Mount Kilimanjaro. It offers excellent acclimatization thanks to its "climb high, sleep low" profile and rewards climbers with constantly changing landscapes.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Best For</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>First-time climbers seeking strong acclimatization</li>
                <li>Adventure-focused travelers</li>
                <li>Hikers who value scenery and variety</li>
                <li>Guests wanting a balance between challenge and success rate</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Highlights</h3>
             <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Lava Tower acclimatization hike</li>
                <li>The dramatic Barranco Wall</li>
                <li>Expansive views across Shira Plateau</li>
                <li>Sunrise at Uhuru Peak</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Specific Packing List</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Waterproof hiking boots</li>
                <li>Trekking poles (strongly recommended)</li>
                <li>Headlamp for summit night</li>
                <li>Insulated jacket for sub-zero temperatures</li>
                <li>Reusable water bottles / hydration system</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">FAQs</h3>
            <div class="space-y-6 text-gray-700">
                <div>
                     <p class="font-bold text-deep-brown mb-2">Is Machame suitable for beginners?</p>
                     <p>Yes, with good fitness and preparation, the Machame Route is suitable for beginners due to its strong acclimatization profile.</p>
                </div>
                <div>
                     <p class="font-bold text-deep-brown mb-2">How many days are recommended?</p>
                     <p>We strongly recommend 7–8 days for a safer and more enjoyable experience.</p>
                </div>
            </div>
        `,
        dayByDay: [
            { day: "Day 1", title: "Machame Gate to Machame Camp", description: "Rainforest immersion. Begin your trek through the lush rainforest winding up the muddy trails." },
            { day: "Day 2", title: "Machame Camp to Shira Camp", description: "Moorland landscapes emerge. Leave the rainforest and enter the heath zone, crossing the Shira Plateau." },
            { day: "Day 3", title: "Shira to Barranco Camp via Lava Tower", description: "Key acclimatization day. Climb high to Lava Tower (4600m) and sleep low at Barranco." },
            { day: "Day 4", title: "Barranco to Karanga Camp", description: "Climb the Barranco Wall. Conquer the famous wall and traverse ridges to Karanga Camp." },
            { day: "Day 5", title: "Karanga to Barafu Camp", description: "Summit preparation. A short day to base camp. Rest, hydrate, and prepare for midnight push." },
            { day: "Day 6", title: "Barafu to Uhuru Peak to Mweka Camp", description: "Summit Day! Reach Uhuru Peak at sunrise, then descend all the way to Mweka Camp." },
            { day: "Day 7", title: "Mweka Camp to Mweka Gate", description: "Descent and celebration. Final descent through the rainforest to collect your certificates." }
        ],
        schema: FAQ_SCHEMA
    },
    lemosho: {
        title: "Lemosho Route",
        subtitle: "The Most Scenic Route",
        description: "Discover the Lemosho Route on Kilimanjaro. A quieter, more scenic route with excellent acclimatization and high summit success rates.",
        metaTitle: "Lemosho Route Kilimanjaro | Most Scenic Route & 8 Day Itinerary",
        metaDescription: "Discover the Lemosho Route on Kilimanjaro. A quieter, more scenic route with excellent acclimatization and high summit success rates.",
        image: "/images/beautiful-scenery-of-a-mountain-landscape-in-the-k-2026-03-18-06-58-06-utc.webp",
        gallery: [
            "/images/hiking-kilimanjaro-from-horombo-huts-2026-03-18-17-37-20-utc.webp",
            "/images/mega-menu/summit-sign.webp"
        ],
        stats: [
            { label: "Duration", value: "7-9 Days" },
            { label: "Difficulty", value: "Moderate" },
            { label: "Success Rate", value: "Excellent" },
            { label: "Overnight", value: "Tents" }
        ],
        content: `
            <p class="mb-6 text-gray-700">The Lemosho Route is widely considered the most beautiful route on Mount Kilimanjaro. Beginning on the remote western side of the mountain, it offers fewer crowds, pristine scenery, and outstanding acclimatization.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Best For</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
               <li>Travelers seeking fewer crowds</li>
               <li>Photographers and nature lovers</li>
               <li>Luxury and private climbers</li>
               <li>Those prioritizing summit success</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Highlights</h3>
             <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Remote western approach</li>
                <li>Expansive Shira Plateau</li>
                <li>Excellent acclimatization profile</li>
                <li>High summit success rate</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Specific Packing List</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                 <li>Quality sleeping bag (-10°C rated or lower)</li>
                 <li>Warm gloves and thermal layers</li>
                 <li>Sunglasses with strong UV protection</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">FAQs</h3>
            <div class="space-y-6 text-gray-700">
                <div>
                     <p class="font-bold text-deep-brown mb-2">Is Lemosho better than Machame?</p>
                     <p>Both are excellent. Lemosho is quieter and offers slightly better acclimatization, making it ideal for premium experiences.</p>
                </div>
            </div>
        `,
        dayByDay: [
            { day: "Day 1", title: "Londorossi Gate to Mti Mkubwa Camp", description: "Rainforest trek. Drive to the trailhead and trek through pristine rainforest." },
            { day: "Day 2", title: "Mti Mkubwa to Shira Camp 1", description: "Steep ascent into heather zone and Shira Ridge." },
            { day: "Day 3", title: "Shira 1 to Shira 2", description: "Acclimatization. A gentle walk across Shira Plateau." },
            { day: "Day 4", title: "Shira 2 to Barranco Camp", description: "Via Lava Tower. Climb high, sleep low for acclimatization." },
            { day: "Day 5", title: "Barranco to Karanga Camp", description: "Scale the Barranco Wall and traverse beneath glaciers." },
            { day: "Day 6", title: "Karanga to Barafu Camp", description: "Ascend to base camp. Early dinner and rest for summit." },
            { day: "Day 7", title: "Barafu to Uhuru Peak to Mweka Camp", description: "Summit Day! Reach the Roof of Africa and descend." },
            { day: "Day 8", title: "Mweka Camp to Gate", description: "Descent. Continue down to the gate for celebration." }
        ],
        schema: FAQ_SCHEMA
    },
    marangu: {
        title: "Marangu Route",
        subtitle: "The Coca-Cola Route",
        description: "The Marangu Route is the only Kilimanjaro route with hut accommodation. Explore the itinerary, pros, and expert climbing tips.",
        metaTitle: "Marangu Route Kilimanjaro | Hut Route Itinerary & Guide",
        metaDescription: "The Marangu Route is the only Kilimanjaro route with hut accommodation. Explore the itinerary, pros, and expert climbing tips.",
        image: "/images/tents-in-a-camping-site-near-kilimanjaro-mountain-2026-03-18-06-34-09-utc.webp",
        gallery: [
            "/images/kilimanjaro-tanzania-2026-03-13-05-40-30-utc.webp",
            "/images/couple-backpackers-on-the-trek-to-kilimanjaro-moun-2026-03-17-00-04-58-utc.webp"
        ],
        stats: [
            { label: "Duration", value: "5-7 Days" },
            { label: "Difficulty", value: "Moderate" },
            { label: "Crowds", value: "High" },
            { label: "Overnight", value: "Huts" }
        ],
        content: `
            <p class="mb-6 text-gray-700">The Marangu Route is the only Kilimanjaro route that uses mountain huts instead of tents. It follows a more direct path to the summit and is often chosen for comfort.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Best For</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
               <li>Travelers preferring hut accommodation</li>
               <li>Budget-conscious climbers</li>
               <li>Those uncomfortable sleeping in tents</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Highlights</h3>
             <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Hut accommodation</li>
                <li>Gentle gradients</li>
                <li>Views of Mawenzi Peak</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Specific Packing List</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                 <li>Warm sleeping bag (huts are cold at night)</li>
                 <li>Earplugs (shared hut environment)</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">FAQs</h3>
            <div class="space-y-6 text-gray-700">
                <div>
                     <p class="font-bold text-deep-brown mb-2">Does Marangu have a lower success rate?</p>
                     <p>Yes, shorter itineraries reduce acclimatization. We recommend adding extra days for better success.</p>
                </div>
            </div>
        `,
        dayByDay: [
            { day: "Day 1", title: "Marangu Gate to Mandara Hut", description: "Hike through the rainforest to the first A-frame huts." },
            { day: "Day 2", title: "Mandara to Horombo Hut", description: "Ascend into heath and moorland zone with views of Mawenzi." },
            { day: "Day 3", title: "Horombo to Kibo Hut", description: "Cross the Alpine Desert saddle between Mawenzi and Kibo." },
            { day: "Day 4", title: "Summit! Kibo to Uhuru to Horombo", description: "Midnight ascent to Gillman's Point and Uhuru Peak, then descend." },
            { day: "Day 5", title: "Horombo to Mandara Hut", description: "Descent for those on the 6-day itinerary (extra day usually Day 3)." },
            { day: "Day 6", title: "Mandara to Gate", description: "Final descent to the gate." }
        ],
        schema: FAQ_SCHEMA
    },
    rongai: {
        title: "Rongai Route",
        subtitle: "The Northern Approach",
        description: "Discover the Rongai Route — Kilimanjaro’s quiet northern approach with gentle trails and beautiful wilderness.",
        metaTitle: "Rongai Route Kilimanjaro | Quiet Northern Route Itinerary",
        metaDescription: "Discover the Rongai Route — Kilimanjaro’s quiet northern approach with gentle trails and beautiful wilderness.",
        image: "/images/kilimanjaro-tanzania-2026-03-13-05-40-30-utc.webp",
        stats: [
            { label: "Duration", value: "6-7 Days" },
            { label: "Difficulty", value: "Moderate" },
            { label: "Traffic", value: "Low" },
            { label: "Overnight", value: "Tents" }
        ],
        content: `
            <p class="mb-6 text-gray-700">The Rongai Route approaches Kilimanjaro from the remote northern side near the Kenyan border. It offers a peaceful climb with fewer crowds.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Best For</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
               <li>Climbers seeking solitude</li>
               <li>Travelers climbing during rainy season</li>
               <li>Those preferring gentle gradients</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Highlights</h3>
             <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Remote wilderness feel</li>
                <li>Views of Mawenzi Peak</li>
                <li>Excellent during wet season</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Specific Packing List</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                 <li>Waterproof layers</li>
                 <li>Extra warm layers (cold northern winds)</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">FAQs</h3>
            <div class="space-y-6 text-gray-700">
                <div>
                     <p class="font-bold text-deep-brown mb-2">Is Rongai less crowded?</p>
                     <p>Yes, Rongai is one of the quietest routes on Kilimanjaro.</p>
                </div>
            </div>
        `,
        dayByDay: [
            { day: "Day 1", title: "Nalemoru Gate to Simba Camp", description: "Trek through pine forests and potato fields." },
            { day: "Day 2", title: "Simba to Second Cave Camp", description: "Steady ascent towards Kibo with views of eastern ice fields." },
            { day: "Day 3", title: "Second Cave to Kikelewa Camp", description: "Trek across moorland towards jagged peak of Mawenzi." },
            { day: "Day 4", title: "Kikelewa to Mawenzi Tarn", description: "Steep climb to spectacular tarn beneath Mawenzi spires." },
            { day: "Day 5", title: "Mawenzi to Kibo Hut", description: "Cross the Saddle to Kibo Hut, joining Marangu route." },
            { day: "Day 6", title: "Summit! Kibo to Uhuru to Horombo", description: "Summit Uhuru Peak and descend to Horombo Camp." },
            { day: "Day 7", title: "Horombo to Gate", description: "Exit via the Marangu Gate." }
        ],
        schema: FAQ_SCHEMA
    },
    "northern-circuit": {
        title: "Northern Circuit",
        subtitle: "The Ultimate Grand Traverse",
        description: "The Northern Circuit offers the highest summit success rate on Kilimanjaro. Explore the complete 9-day itinerary and expert support.",
        metaTitle: "Northern Circuit Kilimanjaro | Highest Success Route (9 Days)",
        metaDescription: "The Northern Circuit offers the highest summit success rate on Kilimanjaro. Explore the complete 9-day itinerary and expert support.",
        image: "/images/kilimanjaro-tanzania-2026-03-13-05-40-30-utc.webp",
        stats: [
            { label: "Duration", value: "8-10 Days" },
            { label: "Difficulty", value: "Moderate" },
            { label: "Success Rate", value: "Highest (98%+)" },
            { label: "Overnight", value: "Tents" }
        ],
        content: `
            <p class="mb-6 text-gray-700">The Northern Circuit is Kilimanjaro’s longest and most comprehensive route, circling the mountain and providing exceptional acclimatization.</p>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Best For</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
               <li>Serious climbers</li>
               <li>Travelers prioritizing summit success</li>
               <li>Those seeking a premium, low-crowd experience</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Highlights</h3>
             <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Full circumnavigation of the mountain</li>
                <li>Remote northern slopes</li>
                <li>Exceptional acclimatization</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Route Specific Packing List</h3>
            <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                 <li>High-quality down jacket</li>
                 <li>Durable gloves for extended cold exposure</li>
            </ul>

            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">FAQs</h3>
            <div class="space-y-6 text-gray-700">
                <div>
                     <p class="font-bold text-deep-brown mb-2">Why does Northern Circuit have the highest success rate?</p>
                     <p>Because of its longer duration and superior acclimatization profile.</p>
                </div>
            </div>
        `,
        dayByDay: [
            { day: "Day 1", title: "Londorossi to Mti Mkubwa", description: "Follow Lemosho route up to Shira Plateau." },
            { day: "Day 2", title: "Mti Mkubwa to Shira 1", description: "Steep ascent into heather zone." },
            { day: "Day 3", title: "Shira 1 to Shira 2", description: "Gentle walk across plateau." },
            { day: "Day 4", title: "Shira 2 to Moir Hut", description: "Divert north away from crowds." },
            { day: "Day 5", title: "Moir Hut to Buffalo Camp", description: "Traverse northern slopes. Remote and quiet." },
            { day: "Day 6", title: "Buffalo Camp to Third Cave", description: "Spectacular northern scenery." },
            { day: "Day 7", title: "Third Cave to School Hut", description: "Short day to high camp to prepare for summit." },
            { day: "Day 8", title: "Summit! School Hut to Uhuru to Mweka", description: "Ascend to Gilman's Point and Uhuru Peak, descend to Mweka." },
            { day: "Day 9", title: "Mweka to Gate", description: "Long descent to Mweka Gate." }
        ],
        schema: FAQ_SCHEMA
    }
};

export const KILI_PACKAGES: Record<string, KiliPageData> = {
    short: {
        title: "5–6 Days Climbs",
        subtitle: "Express Adventures",
        description: "Choose from flexible Kilimanjaro climbing packages including short climbs, recommended itineraries, and luxury experiences.",
        metaTitle: "Kilimanjaro Climb Packages | 5–6 Days, 7–8 Days & Luxury Options",
        metaDescription: "Choose from flexible Kilimanjaro climbing packages including short climbs, recommended itineraries, and luxury experiences.",
        image: "/images/tents-in-a-camping-site-near-kilimanjaro-mountain-2026-03-18-06-34-09-utc.webp",
        stats: [
            { label: "Budget", value: "Low" },
            { label: "Pace", value: "Fast" },
            { label: "Success", value: "Lower" }
        ],
        content: `
            <p class="mb-6 text-gray-700">Designed for experienced trekkers with limited time. Faster ascents require strong fitness and prior acclimatization is highly recommended.</p>
        `,
        schema: FAQ_SCHEMA
    },
    standard: {
        title: "7–8 Days Climbs",
        subtitle: "Recommended for Success",
        description: "The ideal balance of safety, comfort, and success. Best option for most climbers.",
        metaTitle: "Kilimanjaro Climb Packages | 7–8 Days Recommended",
        metaDescription: "The ideal balance of safety, comfort, and success. Best option for most climbers.",
        image: "/images/beautiful-scenery-of-a-mountain-landscape-in-the-k-2026-03-18-06-58-06-utc.webp",
        stats: [
            { label: "Budget", value: "Medium" },
            { label: "Pace", value: "Optimal" },
            { label: "Success", value: "High" }
        ],
        content: `
            <p class="mb-6 text-gray-700">We highly recommend 7 or 8-day climbs. The extra day allows your body to produce more red blood cells, making the summit night significantly easier and safer.</p>
        `,
        schema: FAQ_SCHEMA
    },
    luxury: {
        title: "Luxury Kilimanjaro",
        subtitle: "Climb in Comfort",
        description: "Premium experience including private toilets, superior tents, enhanced meals, and personalized support.",
        metaTitle: "Luxury Kilimanjaro Climbs | Premium Service",
        metaDescription: "Premium experience including private toilets, superior tents, enhanced meals, and personalized support.",
        image: "/images/hiking-kilimanjaro-from-horombo-huts-2026-03-18-17-37-20-utc.webp",
        inclusions: ["Walk-in Tents (Stand up inside)", "Cot Beds & Thick Mattresses", "Private Toilet Tent", "Hot Water Bottles", "Expanded Gourmet Menu"],
        content: `
            <p class="mb-6 text-gray-700">Experience the mountain with a touch of luxury. Our luxury packages ensure you sleep well and eat well, which are critical factors for summit success.</p>
        `,
        schema: FAQ_SCHEMA
    }
};

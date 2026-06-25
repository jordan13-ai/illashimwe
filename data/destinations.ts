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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">The Serengeti is Tanzania’s most iconic safari destination and one of the greatest wildlife ecosystems on Earth. Spanning over 14,750 km², it is globally renowned for the Great Migration — a continuous circular movement of 1.5 million wildebeest, 400,000 zebra, and 200,000 gazelle across the plains in search of water and fresh grazing.</p>

                <p class="text-gray-600 leading-relaxed">Beyond the migration, the Serengeti offers exceptional year-round game viewing, dramatic golden grasslands, and a timeless safari atmosphere that has inspired explorers, filmmakers, and naturalists for generations. The name "Serengeti" comes from the Maasai word <em>Siringet</em>, meaning "the land that runs on forever" — and standing at its centre, you will understand why.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Great Migration</h3>
                <p class="text-gray-600 leading-relaxed mb-4">The migration is a year-round event that follows a seasonal circular route. Here is what to expect each season:</p>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>January – March (Calving Season):</strong> The southern Serengeti and Ndutu area. Around 8,000 calves are born every day — and where there are calves, there are predators. This is the best time for cheetah, lion, and hyena action.</li>
                    <li><strong>April – June (Long Rains):</strong> The herds move north through the central Serengeti. Dramatic river crossings begin forming. Lush green landscapes make for spectacular photography.</li>
                    <li><strong>July – October (River Crossings):</strong> The most dramatic phase. Wildebeest cross the crocodile-filled Mara River in the northern Serengeti — a spectacle unlike anything else on Earth.</li>
                    <li><strong>November – December (Short Rains):</strong> The herds return south to the Serengeti plains and Ndutu. Excellent predator activity throughout.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Wildlife to Expect</h3>
                <p class="text-gray-600 leading-relaxed mb-4">The Serengeti supports one of Africa’s most impressive concentrations of wildlife:</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Big Cats:</strong> The Serengeti is home to Africa’s largest lion population (over 3,000), plus cheetahs and leopards in consistently high numbers.</li>
                    <li><strong>Elephants & Buffalo:</strong> Large herds roam the western corridor and northern areas year-round.</li>
                    <li><strong>Hippos & Crocodiles:</strong> Found in the Grumeti and Mara rivers throughout the park.</li>
                    <li><strong>Birdlife:</strong> Over 500 species recorded, including lilac-breasted rollers, ostriches, secretary birds, and numerous raptors.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Unique Experiences</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Hot Air Balloon Safari:</strong> Drift over the plains at dawn and watch the migration from above — a truly unforgettable way to experience the Serengeti.</li>
                    <li><strong>Walking Safaris:</strong> Follow a ranger on foot through the bush for a completely different perspective on the ecosystem.</li>
                    <li><strong>Night Game Drives:</strong> Available at select camps — discover the nocturnal side of the Serengeti: aardvarks, civets, leopards on the move.</li>
                    <li><strong>Fly Camping:</strong> Spend a night under the stars in a remote location, with only the sounds of the wild around you.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Park Fees:</strong> USD $70 per person per day (included in all Illashimwe packages)</li>
                    <li><strong>Getting There:</strong> 4–6 hour drive from Arusha, or 45-minute charter flight to one of several airstrips</li>
                    <li><strong>Accommodation:</strong> From luxury tented camps and lodges to mobile camps that follow the migration</li>
                    <li><strong>Best Vehicle:</strong> All our game drives use custom 4WD Toyota Land Cruisers with pop-up roofs for 360° viewing</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">The Ngorongoro Crater is the world’s largest intact volcanic caldera — a breathtaking natural amphitheatre 19 km wide and 600 metres deep, sheltering one of Africa’s most extraordinary concentrations of wildlife. Formed around 2.5 million years ago when a massive volcano collapsed, the crater floor covers 260 km² of grasslands, forests, swamps, and a soda lake.</p>

                <p class="text-gray-600 leading-relaxed">The crater is part of the larger Ngorongoro Conservation Area (NCA), a UNESCO World Heritage Site since 1979 and one of Africa’s most important protected areas. Unlike traditional national parks, the NCA is a multiple-use zone where Maasai herders live alongside wildlife — a rare model of co-existence.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Wildlife Inside the Crater</h3>
                <p class="text-gray-600 leading-relaxed mb-4">The crater floor sustains around 25,000 large animals permanently. Because animals are largely enclosed (most cannot scale the steep crater walls), wildlife density is extraordinary:</p>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Black Rhino:</strong> Ngorongoro is one of the last places in Tanzania where you have a genuine chance of spotting the critically endangered black rhino. A small but growing population is closely monitored.</li>
                    <li><strong>Lions:</strong> The crater has one of Africa’s highest lion densities. The inbreeding from isolation has created distinctively maned males — some with the darkest manes recorded anywhere.</li>
                    <li><strong>Elephants:</strong> Mostly large old bulls (known as "crater bulls") with enormous tusks descended from the days before heavy poaching.</li>
                    <li><strong>Flamingos:</strong> Lake Magadi at the crater floor attracts thousands of flamingos, particularly during the wet season.</li>
                    <li><strong>Hyenas & Cheetahs:</strong> Spotted hyenas are common throughout the crater floor. Cheetahs are regularly sighted on the open grasslands.</li>
                    <li><strong>Hippos & Buffalos:</strong> Hippo pools and enormous buffalo herds dot the crater floor.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Best Time to Visit</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>June – October (Dry Season):</strong> Clearest skies, best game viewing, animals concentrate around water sources. Rhino sightings most reliable.</li>
                    <li><strong>November – May (Wet Season):</strong> Fewer visitors, lush green landscapes, flamingos on the lake, dramatic skies. Wildlife remains excellent as animals never leave the crater.</li>
                    <li><strong>Year-round:</strong> Unlike other parks, Ngorongoro delivers outstanding wildlife any month of the year.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Crater Rim & Olduvai Gorge</h3>
                <p class="text-gray-600 leading-relaxed mb-4">The experience extends beyond the crater floor:</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Crater Rim:</strong> Dense montane forest home to elephant, buffalo, and colobus monkeys. Stunning viewpoints at sunrise are unmissable.</li>
                    <li><strong>Olduvai Gorge:</strong> 45 minutes from the crater, this is where Dr. Louis and Mary Leakey discovered 3.75-million-year-old hominid footprints. A small museum tells the story of human evolution.</li>
                    <li><strong>Empakaai Crater:</strong> A less-visited, deep crater with a soda lake, towering forest, and incredible views of Ol Doinyo Lengai volcano.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Access:</strong> 3-hour drive from Arusha. Usually combined with Serengeti (2–3 days crater + 3–4 days Serengeti).</li>
                    <li><strong>Descent Limit:</strong> Vehicles must exit the crater by 6:00 PM. Only a limited number of vehicles are permitted in the crater daily.</li>
                    <li><strong>Conservation Fee:</strong> USD $70.40 per person per day (included in all Illashimwe packages)</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">Tarangire National Park is one of Tanzania's most underrated safari destinations — a vast wilderness of elephant-dotted savannah, ancient baobab forests, and the life-giving Tarangire River. Covering 2,850 km² in the Great Rift Valley, it is home to Africa's highest concentration of elephants outside of Botswana, and one of the most diverse bird habitats on the continent.</p>

                <p class="text-gray-600 leading-relaxed">While the Serengeti gets the headlines, experienced safari travellers know Tarangire delivers some of the most dramatic and intimate wildlife encounters in all of Africa — with far fewer vehicles. Game drives here feel genuinely wild and private.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Elephants of Tarangire</h3>
                <p class="text-gray-600 leading-relaxed mb-4">No park in East Africa delivers elephant experiences quite like Tarangire. During the dry season (June–October), hundreds of elephants from across the ecosystem converge on the Tarangire River — the only permanent water source for miles. You will encounter:</p>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li>Herds of 50–200 elephants drinking, bathing, and socialising at the river</li>
                    <li>Multi-generational family units with tiny calves and enormous matriarchs</li>
                    <li>Bulls in musth — a state of heightened hormonal activity — displaying to each other</li>
                    <li>Night-time elephant crossings visible from many camps along the river</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Baobab Landscape</h3>
                <p class="text-gray-600 leading-relaxed">Tarangire's landscape is defined by its ancient baobab trees — some over 1,000 years old, with trunks so wide that three people cannot embrace them. These iconic "upside-down trees" create a surreal, other-worldly backdrop for game drives and photography. At sunset, the silhouette of elephants against a sky of orange and pink, framed by baobabs, is one of the great images of African wildlife.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Wildlife Beyond Elephants</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Lions & Leopards:</strong> Tree-climbing lions are regularly spotted here — a rare behaviour seen in very few places in Africa.</li>
                    <li><strong>Wild Dogs:</strong> Tarangire is one of Tanzania's best locations for spotting African wild dogs, a critically endangered species.</li>
                    <li><strong>Large Herds:</strong> Wildebeest, zebra, buffalo, and giraffe move through in enormous numbers during the dry season.</li>
                    <li><strong>Birds:</strong> Over 550 species recorded — including yellow-collared lovebirds, Kori bustards, and the rare ashy starling found only in Tanzania.</li>
                    <li><strong>Smaller Mammals:</strong> Mongoose, mongoose, dik-dik, lesser kudu, and fringe-eared oryx — species rarely seen elsewhere.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Best Time to Visit</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>June – October (Peak Dry Season):</strong> Best wildlife concentration at the river. Thousands of animals per day. Iconic elephant experiences.</li>
                    <li><strong>November – May (Green Season):</strong> Lush, dramatic landscapes. Excellent bird life with migratory species. Fewer tourists, lower prices.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Location:</strong> 120 km south of Arusha — approximately 2.5 hours by road</li>
                    <li><strong>Combination:</strong> Easily combined with Ngorongoro Crater (4WD day trip between the two)</li>
                    <li><strong>Park Fee:</strong> USD $53.10 per person per day (included in all Illashimwe packages)</li>
                    <li><strong>Activities:</strong> Game drives, walking safaris, night drives at private conservancies bordering the park</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">Lake Manyara National Park is one of Tanzania's most diverse and scenically beautiful parks — yet it remains overlooked by travellers focused only on the Serengeti and Ngorongoro. Covering 330 km², with the soda lake itself occupying 230 km², Manyara rewards visitors with an extraordinary range of habitats: dense groundwater forest, open floodplains, hot springs, and the shimmering lake that draws thousands of flamingos and pelicans.</p>

                <p class="text-gray-600 leading-relaxed">Ernest Hemingway called the view from the Rift Valley escarpment above Manyara "the loveliest I had seen in Africa." That view — of the lake stretching into the haze, forest glowing green below, and the Rift Valley walls rising 600 metres — has not changed.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Famous Tree-Climbing Lions</h3>
                <p class="text-gray-600 leading-relaxed">Lake Manyara is one of only two places in the world where lions routinely climb trees and rest in their branches. No one is entirely sure why — theories include cooling breezes, fewer insects, better vantage points, or simply habit passed down through generations. Whatever the reason, spotting a pride of lions draped across acacia branches is one of the most extraordinary sights in African wildlife.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Wildlife to Expect</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Flamingos & Pelicans:</strong> When conditions are right, hundreds of thousands of flamingos turn the lake pink — one of Africa's iconic spectacles. Great white pelicans also gather in large flocks.</li>
                    <li><strong>Hippos:</strong> The hippo pool near the park entrance is one of the most accessible and prolific in Tanzania — up to 200 hippos in a single pool.</li>
                    <li><strong>Forest Elephants:</strong> The groundwater forest shelters elephants who are notably more relaxed around vehicles than in open-country parks.</li>
                    <li><strong>Baboons:</strong> Large troops of olive baboons are ever-present throughout the forest zones.</li>
                    <li><strong>Wildebeest & Zebra:</strong> Significant herds roam the open floodplains, particularly in the wet season.</li>
                    <li><strong>Birds:</strong> Over 400 species recorded — Manyara is considered one of East Africa's finest bird habitats.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Unique Experiences</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Night Drives:</strong> Available in the private concession areas — see genets, porcupines, lions, and bush babies after dark.</li>
                    <li><strong>Canopy Walkway:</strong> A treetop walkway in the forest allows you to walk at the level of the tree canopy — exceptional bird spotting and a completely different perspective on the forest.</li>
                    <li><strong>Maasai Boma Visit:</strong> Many Manyara itineraries combine with a Maasai cultural experience along the Rift Valley escarpment.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Location:</strong> 130 km west of Arusha — approximately 2 hours by road</li>
                    <li><strong>Duration:</strong> Half-day to full-day visit; ideal as an entry point for the Northern Circuit</li>
                    <li><strong>Combination:</strong> Usually the first or last stop on a Ngorongoro–Serengeti itinerary</li>
                    <li><strong>Park Fee:</strong> USD $53.10 per person per day (included in all Illashimwe packages)</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">Zanzibar — the "Spice Island" of the Indian Ocean — is the perfect reward after days in the bush. An archipelago of coral islands 35 km off the Tanzanian coast, it combines powdery white beaches, turquoise warm water, vibrant coral reefs, and one of the most fascinating cultural cities in Africa: Stone Town, a UNESCO World Heritage Site.</p>

                <p class="text-gray-600 leading-relaxed">The most popular safari combination in Tanzania is 5–7 nights safari followed by 3–5 nights in Zanzibar. After early morning game drives and dusty bush roads, the sensation of arriving at a luxury beach resort on the Indian Ocean, with a cold drink in hand, is something our guests describe as perfection.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Beaches</h3>
                <p class="text-gray-600 leading-relaxed mb-4">Zanzibar's beaches vary dramatically by location — each coast has its own character:</p>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Nungwi (North):</strong> The most famous stretch of beach. White sand, calm turquoise water, lively atmosphere, and excellent snorkelling. Sunsets here are exceptional.</li>
                    <li><strong>Kendwa (North):</strong> Quieter than Nungwi but equally beautiful. The only north coast beach accessible at low tide. Home to a famous full moon beach party.</li>
                    <li><strong>Paje & Jambiani (Southeast):</strong> Shallow, emerald-coloured water with a long reef. Paradise for kitesurfers. Boutique hotels and a slow, relaxed vibe.</li>
                    <li><strong>Matemwe (Northeast):</strong> Pristine, uncrowded, perfect for luxury travellers who want total seclusion. Excellent access to Mnemba Atoll.</li>
                    <li><strong>Kizimkazi (South):</strong> Dolphin territory. Seasonal sightings of spinner and bottlenose dolphins, plus excellent snorkelling reefs.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Stone Town</h3>
                <p class="text-gray-600 leading-relaxed mb-4">A labyrinth of narrow streets, carved wooden doors, mosques, Arab palaces, and Swahili bazaars, Stone Town is unlike any city in Africa. It has been inhabited continuously for over 1,000 years and reflects layers of Arab, Persian, Indian, Portuguese, and British influence. Key experiences include:</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li>The Old Fort (Ngome Kongwe) — Zanzibar's oldest surviving building, built in 1699</li>
                    <li>The House of Wonders (Beit al-Ajaib) — the first building in East Africa to have electricity and an elevator</li>
                    <li>Freddie Mercury's birthplace — the rock legend was born here in 1946</li>
                    <li>The Forodhani Night Market — outdoor seafood market on the waterfront, open every evening</li>
                    <li>Spice Farm Tours — learn how cloves, vanilla, cinnamon, and cardamom grow</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Marine Experiences</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Mnemba Atoll:</strong> Tanzania's finest dive site — home to sea turtles, reef sharks, barracuda, manta rays, and over 150 coral species. Exclusive access maintained by &Beyond lodge on the islet.</li>
                    <li><strong>Snorkelling:</strong> Excellent snorkelling reefs accessible from many beaches, including Nakupenda sandbank and Prison Island reef.</li>
                    <li><strong>Whale Sharks:</strong> Seasonal whale shark sightings off Diani and in the south of the island (October–February).</li>
                    <li><strong>Dhow Sunset Cruise:</strong> A traditional wooden dhow sailing at sunset — romantic and deeply Zanzibari.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Best Time to Visit</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>June – October:</strong> Dry season. Best weather, calm seas, ideal snorkelling and diving.</li>
                    <li><strong>December – February:</strong> Hot and sunny. Good water visibility. Whale shark season.</li>
                    <li><strong>Avoid:</strong> April–May (long rains) and November (short rains) for beach holidays.</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">Mount Kilimanjaro is the highest free-standing mountain on Earth and one of the Seven Summits — the seven highest peaks of each continent. Rising 5,895 metres above sea level, it stands above the East African plains in the northwest corner of Tanzania, and on a clear day it is visible from over 200 km away. Unlike many mountains of similar altitude, Kilimanjaro requires no technical climbing equipment — anyone with fitness, determination, and the right guide can reach the summit.</p>

                <p class="text-gray-600 leading-relaxed">Over 50,000 climbers attempt Kilimanjaro each year. Of those, roughly 65% reach the summit. With Illashimwe’s expert guides, acclimatisation-focused itineraries, and summit success strategies, our success rate is significantly higher. We do not rush the mountain.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Climbing Routes</h3>
                <ul class="list-disc pl-6 space-y-4 text-gray-600">
                    <li><strong>Machame Route (7 days) — Most Popular:</strong> Known as the "Whiskey Route" for its challenging terrain. Excellent acclimatisation profile via the "climb high, sleep low" method. Spectacular scenery through rainforest, heath, and the iconic Barranco Wall. Our most recommended route.</li>
                    <li><strong>Lemosho Route (8 days) — Best Overall:</strong> The most scenic and least crowded route. A longer, gentler approach gives superior acclimatisation and the highest summit success rates. Traverses the entire western side of the mountain through pristine wilderness. Ideal for serious trekkers who want the full Kilimanjaro experience.</li>
                    <li><strong>Marangu Route (6 days) — The Classic:</strong> The only route with dormitory-style hut accommodation (vs. tents on other routes). Known as the "Coca-Cola Route" — historically the easiest, but actually has a lower success rate due to its shorter acclimatisation time. Good for those who prefer indoor sleeping.</li>
                    <li><strong>Rongai Route (7 days) — Northern Approach:</strong> The only route approaching from the north (Kenya side). Less traffic, drier conditions, excellent wildlife sightings. Summit approach via Kibo hut shares the Marangu descent route.</li>
                    <li><strong>Northern Circuit (9–10 days) — Highest Success Rate:</strong> The longest and most complete route, circumnavigating nearly the entire mountain above 3,500m. Best acclimatisation. Guaranteed small group exclusivity. Recommended for those who want to maximise summit chances.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Five Climate Zones</h3>
                <p class="text-gray-600 leading-relaxed mb-4">Climbing Kilimanjaro is like walking from the equator to the Arctic in 5–8 days. You pass through five distinct ecological zones:</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Cultivated Zone (800–1,800m):</strong> Coffee and banana plantations on the lower slopes. Cool and green.</li>
                    <li><strong>Montane Forest (1,800–2,800m):</strong> Dense rainforest with colobus monkeys, hornbills, and lush vegetation. Often misty and atmospheric.</li>
                    <li><strong>Heath & Moorland (2,800–4,000m):</strong> Open heather moorland with giant lobelias and groundsels — bizarre, alien-looking plants that only grow here.</li>
                    <li><strong>Alpine Desert (4,000–5,000m):</strong> A stark, cold, rocky plateau with extreme temperature swings. Little vegetation. High altitude effects begin.</li>
                    <li><strong>Arctic Summit Zone (5,000–5,895m):</strong> Ice fields, glaciers, and the crater rim. Uhuru Peak — the highest point in Africa. The air contains 50% less oxygen than at sea level.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">What Illashimwe Provides</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li>KINAPA-certified, medically trained senior mountain guides</li>
                    <li>Pulse oximeter monitoring at every camp (early detection of AMS)</li>
                    <li>Professional porters carrying up to 20 kg per client (well within KINAPA regulations)</li>
                    <li>Full cook and camp crew for hot meals at every stop</li>
                    <li>Quality four-season tents and dining tents (Machame, Lemosho, Rongai, Northern Circuit)</li>
                    <li>Emergency oxygen and wilderness first aid kit carried on all climbs</li>
                    <li>All park fees, rescue fees, and crater camping fees where applicable</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Best Time to Climb</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>January – March:</strong> Dry, cold at summit, excellent visibility. Less crowded than peak season.</li>
                    <li><strong>June – October:</strong> Peak season. Dry and clear. Summit views at their best. Busier on popular routes.</li>
                    <li><strong>Avoid:</strong> April–May (long rains). High precipitation and poor visibility. Not recommended.</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">Arusha National Park is a hidden gem just 25 km from Arusha city — yet most safari travellers drive straight past it on their way to more famous parks. This is their loss. At just 552 km², Arusha NP packs in an extraordinary range of habitats: the forests of Mount Meru (4,566m), the clear Momella Lakes, fig-tree forest, open savannah, and the Ngurdoto Crater — a smaller sibling to Ngorongoro, rich in buffalo and birds.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Canoeing on Momella Lakes</h3>
                <p class="text-gray-600 leading-relaxed">Arusha NP is the only national park in Tanzania where you can canoe on lakes in the presence of wildlife. The Momella Lakes — a series of seven shallow alkaline lakes fed by underground streams — support large populations of hippos, flamingos, and hundreds of bird species. Paddling silently between lakes with giraffes and buffalo on the shore is an experience you will not find anywhere else in East Africa.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Guided Walking Safaris</h3>
                <p class="text-gray-600 leading-relaxed mb-4">Arusha NP is one of very few Tanzanian parks where you can walk freely with an armed ranger through open wilderness. This is the closest most safari visitors will get to experiencing Africa on foot — and it changes everything. Sounds, smells, footprints, termite mounds, dung beetles — details invisible from a vehicle suddenly come alive.</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li>2–4 hour guided nature walks through forest and savannah</li>
                    <li>Multi-day Mount Meru trek (Tanzania's second-highest peak) — an acclimatisation hike before Kilimanjaro</li>
                    <li>Fig Forest walks to spot black-and-white colobus monkeys in the canopy</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Wildlife</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Giraffes:</strong> Masai giraffes are common throughout the park — often the first wild giraffes our guests encounter.</li>
                    <li><strong>Buffalo:</strong> Large herds roam the Ngurdoto Crater floor (viewable from the rim only — no vehicles permitted inside).</li>
                    <li><strong>Colobus Monkeys:</strong> Black-and-white colobus monkeys inhabit the fig forests in large, highly visible troops.</li>
                    <li><strong>Flamingos:</strong> The Momella Lakes host flamingos and over 400 bird species.</li>
                    <li><strong>Warthogs, Zebra, Waterbuck:</strong> All common across the savannah sections.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Location:</strong> 25 km from Arusha — 30-minute drive</li>
                    <li><strong>Best For:</strong> Day trips, safari introductions, Kilimanjaro acclimatisation walks</li>
                    <li><strong>Park Fee:</strong> USD $45 per person per day (included in all Illashimwe packages)</li>
                    <li><strong>Combination:</strong> Pairs perfectly with a Maasai cultural visit in the afternoon</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">The Materuni Waterfalls and Coffee Tour is one of the most rewarding cultural experiences available near Kilimanjaro — combining a scenic hike through the lush Chagga farmlands on the southern slopes of Kilimanjaro with an unforgettable encounter with the people who have farmed this land for centuries.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Waterfall Hike</h3>
                <p class="text-gray-600 leading-relaxed mb-4">The hike begins in Materuni village (1,800m) and descends through terraced farms, banana groves, and dense tropical forest to reach the base of Materuni Waterfall — a powerful 80-metre cascade that thunders into a natural pool surrounded by ferns and volcanic rock.</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li>2–3 hour round-trip hike through Chagga farmland</li>
                    <li>Moderate difficulty — suitable for most fitness levels</li>
                    <li>Swimming in the cool natural pool at the base of the falls</li>
                    <li>Views of Kilimanjaro above the farmland (on clear mornings)</li>
                    <li>Guided by local Chagga community members throughout</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Coffee Experience</h3>
                <p class="text-gray-600 leading-relaxed mb-4">Tanzania produces some of the world's finest Arabica coffee, grown in the rich volcanic soil on Kilimanjaro's slopes. The Chagga people have been cultivating coffee here for generations. The hands-on tour walks you through every step of the process:</p>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Harvesting:</strong> Pick ripe red coffee cherries directly from the trees</li>
                    <li><strong>Pulping:</strong> Remove the fruit skin from the bean using traditional wooden tools</li>
                    <li><strong>Fermentation & Washing:</strong> Learn how beans are fermented in water to remove the mucilage</li>
                    <li><strong>Sun Drying:</strong> Spread beans on raised drying beds in the equatorial sun</li>
                    <li><strong>Roasting:</strong> Roast beans in a clay pot over an open fire, stirring constantly</li>
                    <li><strong>Grinding & Brewing:</strong> Grind by hand and brew using traditional methods</li>
                    <li><strong>Tasting:</strong> Drink your own freshly made cup of Kilimanjaro coffee — the freshest cup you will ever have</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">The Chagga Culture</h3>
                <p class="text-gray-600 leading-relaxed">The Chagga are the third-largest ethnic group in Tanzania and have been farming the slopes of Kilimanjaro for at least 400 years. Known for their ingenuity and agricultural skill, they developed an elaborate system of furrows (mifereji) to channel meltwater from Kilimanjaro's glaciers down to their farms. Your local guide will share stories, proverbs, and traditions that connect the Chagga's daily life to the mountain above.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Duration:</strong> Full day (approximately 7–8 hours including drive)</li>
                    <li><strong>Departs:</strong> Arusha or Moshi hotel, 7:00–8:00 AM</li>
                    <li><strong>Includes:</strong> Local lunch in the village, all guide fees, park entry, coffee kit</li>
                    <li><strong>What to Bring:</strong> Comfortable hiking shoes, light rain jacket, sunscreen, water bottle</li>
                    <li><strong>Best combined with:</strong> Kilimanjaro climb (day before summit trip) or Arusha NP day</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">Chemka Hot Springs — also known as Kikuletwa Hot Springs — is one of Tanzania's most magical natural secrets. Hidden in a palm-fringed oasis in the middle of the semi-arid landscape between Arusha and Moshi, it is a crystal-clear freshwater spring that maintains a perfect temperature of around 32°C (90°F) year-round, surrounded by ancient fig trees and wild date palms whose roots plunge into the aqua-blue water.</p>

                <p class="text-gray-600 leading-relaxed">The springs are fed by underground water filtering through the volcanic rock of Kilimanjaro. The result is extraordinarily clear water — you can see 10 metres to the sandy bottom — in the middle of a dry, dusty landscape. First-time visitors consistently describe it as appearing like a mirage.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">What to Expect</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Swimming & Floating:</strong> The calm, warm water is perfect for long, relaxed swims and floating. The natural current is gentle. Most guests spend 3–5 hours in and around the water.</li>
                    <li><strong>Tree Swings & Rope Jumps:</strong> Branches of the ancient fig trees extend directly over the deep pool. Local ropes allow you to swing and drop into the water — popular with adventurous guests.</li>
                    <li><strong>Garra Rufa Fish:</strong> Thousands of small "doctor fish" inhabit the springs. They gently nibble dead skin from your feet and legs — a natural fish spa experience that is surprisingly relaxing.</li>
                    <li><strong>Snorkelling:</strong> Bring a mask and snorkel for an incredible freshwater snorkelling experience — the underwater visibility is exceptional, with fish visible in every direction.</li>
                    <li><strong>Birdwatching:</strong> The palm oasis is a habitat for malachite kingfishers, African fish eagles, bee-eaters, and numerous other species.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Why Guests Love It</h3>
                <p class="text-gray-600 leading-relaxed mb-4">Chemka is particularly beloved as a recovery experience:</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Post-Kilimanjaro Recovery:</strong> After 6–8 days on the mountain, the warm mineral water relieves tired muscles immediately. Almost every Kilimanjaro descent itinerary ends here.</li>
                    <li><strong>Mid-Safari Break:</strong> A perfect full-day relaxation stop between Arusha and Moshi parks — a total contrast to dusty game drives.</li>
                    <li><strong>Honeymoon & Couples:</strong> The secluded, lush setting is exceptionally romantic, particularly in the early morning before crowds arrive.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Location:</strong> 65 km from Arusha, 40 km from Moshi — approximately 1.5 hours by road</li>
                    <li><strong>Best Time:</strong> Morning visits (before 10 AM) for fewer crowds and better light. Can be busy on weekends.</li>
                    <li><strong>What to Bring:</strong> Swimwear, towel, snorkelling mask (optional), water shoes (recommended), snacks and drinks</li>
                    <li><strong>Duration:</strong> Half-day to full-day depending on how long you want to stay</li>
                    <li><strong>Combination:</strong> Pairs perfectly with Materuni Waterfalls (morning) + Chemka (afternoon)</li>
                </ul>
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
            <div class="space-y-10">
                <p class="text-xl text-deep-brown font-medium leading-relaxed">A Maasai Cultural Experience with Illashimwe Adventure is one of the most moving and memorable encounters available to visitors in Tanzania — a respectful, genuine exchange with one of Africa's most iconic peoples, in their own home, on their own terms.</p>

                <p class="text-gray-600 leading-relaxed">The Maasai are a Nilotic semi-nomadic people who have inhabited the Great Rift Valley of Kenya and Tanzania for at least 400 years. Known for their striking red shukas (robes), elaborate beadwork, warrior traditions, and co-existence with wildlife across vast rangelands, they are arguably the most recognisable ethnic group in Africa. Yet the reality of Maasai life is far richer and more complex than any postcard image suggests.</p>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">What the Experience Includes</h3>
                <ul class="list-disc pl-6 space-y-3 text-gray-600">
                    <li><strong>Village Welcome Ceremony:</strong> Arrival is marked by a traditional warrior welcome — singing, jumping, and the iconic Adumu (jumping dance) performed by young Maasai men who compete to jump the highest.</li>
                    <li><strong>Boma Tour:</strong> A guided walk through the enkang (family compound) — a circle of low mud-and-dung homes arranged around a central cattle pen. Learn how the homes are built entirely by Maasai women.</li>
                    <li><strong>Fire Making:</strong> Learn the traditional method of making fire from two sticks — a technique unchanged for thousands of years.</li>
                    <li><strong>Beadwork & Jewellery:</strong> Maasai beadwork is a sophisticated visual language. Women will demonstrate the meaning of different colours and patterns, and you can purchase handmade pieces directly from the artisans.</li>
                    <li><strong>Medicinal Plants:</strong> A guided walk identifying the wild plants used in Maasai traditional medicine, and their specific applications.</li>
                    <li><strong>School Visit:</strong> Visit the community school where you can interact with children and see the efforts being made to provide education while preserving cultural identity.</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Our Approach: Responsible Cultural Tourism</h3>
                <p class="text-gray-600 leading-relaxed mb-4">Illashimwe works exclusively with communities that have freely chosen to host visitors, receive fair payment, and maintain full control over what is shared. Our commitments:</p>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li>All purchases from the community go directly to artisans, not intermediaries</li>
                    <li>Photography is welcomed but always with the explicit consent of individuals</li>
                    <li>A portion of every cultural tour fee is directed to the community school fund</li>
                    <li>We brief guests in advance on respectful conduct — appropriate dress, photography etiquette, and acceptable gift-giving</li>
                </ul>

                <h3 class="text-2xl font-molot text-deep-brown mt-10 mb-4">Practical Information</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Duration:</strong> 2–3 hours for a village visit</li>
                    <li><strong>Location:</strong> Communities near Arusha NP, Lake Manyara, and the Ngorongoro area</li>
                    <li><strong>Combination:</strong> Pairs naturally with Arusha National Park (morning game drive, afternoon cultural visit)</li>
                    <li><strong>Group Size:</strong> Best experienced in small groups of 2–8 people for genuine interaction</li>
                    <li><strong>What to Bring:</strong> Respectful clothing (covered shoulders and knees appreciated), some cash for direct artisan purchases</li>
                </ul>
            </div>
        `
    }
];

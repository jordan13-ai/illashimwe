export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface NavColumn {
    title: string;
    items: NavItem[];
}

export interface MegaMenuStats {
    value: string;
    label: string;
}

export interface MegaMenuSection {
    id: string;
    label: string;
    href: string;
    columns?: NavColumn[];
    featured?: {
        image: string;
        title: string;
        description: string;
        href: string;
    };
    stats?: MegaMenuStats[];
}

export const MAIN_NAV_ITEMS: MegaMenuSection[] = [
    // --------------------------------------------------------------------------------
    // LEFT NAV SIDE
    // --------------------------------------------------------------------------------

    {
        id: "safari",
        label: "Safari",
        href: "/safari",
        columns: [
            {
                title: "Safari Categories",
                items: [
                    { label: "All Safari Packages", href: "/safari/packages" },
                    { label: "Private Luxury", href: "/safari/private-luxury" },
                    { label: "Midrange Safari", href: "/safari/midrange-safari" },
                    { label: "Budget Safari", href: "/safari/budget-safari" },
                    { label: "Honeymooners", href: "/safari/honeymoon" },
                    { label: "Flying Packages", href: "/safari/flying-packages" },
                ],
            },
            {
                title: "More Options",
                items: [
                    { label: "Shared Group Safaris", href: "/safari/group-safari" },
                    { label: "Day Tours", href: "/safari/day-tours" },
                ],
            },
        ],
        featured: {
            image: "/images/lions-resting-on-a-hill-in-the-serengeti-2026-03-24-06-27-42-utc.webp",
            title: "Private Safaris",
            description: "Experience the wild on your own terms with a private 4x4 vehicle and guide.",
            href: "/safari/private",
        }
    },
    {
        id: "destinations",
        label: "Destinations",
        href: "/destinations",
        columns: [
            {
                title: "National Parks",
                items: [
                    { label: "Serengeti National Park", href: "/destinations/serengeti" },
                    { label: "Ngorongoro Crater", href: "/destinations/ngorongoro" },
                    { label: "Tarangire National Park", href: "/destinations/tarangire" },
                    { label: "Lake Manyara", href: "/destinations/lake-manyara" },
                    { label: "Arusha National Park", href: "/destinations/arusha-national-park" },
                ]
            },
            {
                title: "More Gems",
                items: [
                    { label: "Mount Kilimanjaro", href: "/destinations/kilimanjaro" },
                    { label: "Zanzibar Island", href: "/destinations/zanzibar" },
                    { label: "Materuni Waterfalls", href: "/destinations/materuni-waterfalls-coffee-tour" },
                    { label: "Chemka Hot Springs", href: "/destinations/chemka-hot-springs" },
                    { label: "Maasai Experience", href: "/destinations/maasai-cultural-experience" },
                ]
            }
        ],
        featured: {
            image: "/images/aerial-view-of-colorful-boats-in-transparent-water-2026-03-25-08-21-26-utc.webp",
            title: "Zanzibar Island",
            description: "The ultimate beach relaxation after your safari adventure.",
            href: "/destinations/zanzibar"
        }
    },

    // --------------------------------------------------------------------------------
    // RIGHT NAV SIDE (Note: These will be filtered in the Navbar component to split them)
    // --------------------------------------------------------------------------------
    {
        id: "experiences",
        label: "Experiences",
        href: "/experiences",
        columns: [
            {
                title: "By Interest",
                items: [
                    { label: "Honeymoon Experiences", href: "/experiences/honeymoon" },
                    { label: "Cultural Experiences", href: "/experiences/cultural" },
                    { label: "Photography Safaris", href: "/experiences/photography" },
                    { label: "Balloon Safaris", href: "/experiences/balloon" },
                ]
            },
            {
                title: "Types",
                items: [
                    { label: "Walking Safaris", href: "/experiences/walking" },
                    { label: "Fly-in Safaris", href: "/experiences/fly-in" },
                    { label: "Beach & Safari Combos", href: "/experiences/beach-safari" },
                    { label: "Luxury Lodges Collection", href: "/experiences/lodges" },
                ]
            }
        ],
        featured: {
            image: "/images/hot-air-balloon-in-maasai-mara-national-reserve-k-2026-01-06-09-39-47-utc.webp",
            title: "Balloon Safaris",
            description: "Float above the Serengeti plains at sunrise for an unforgettable perspective.",
            href: "/experiences/balloon",
        }
    },
    {
        id: "about",
        label: "About Us",
        href: "/about",
        columns: [
            {
                title: "Our Company",
                items: [
                    { label: "Our Story", href: "/about/story" },
                    { label: "Why Travel With Us", href: "/about/why-us" },
                    { label: "Our Guides", href: "/about/guides" },
                    { label: "Our Vehicles", href: "/about/vehicles" },
                ],
            },
            {
                title: "Trust & Info",
                items: [
                    { label: "Responsible Tourism", href: "/about/responsible-tourism" },
                    { label: "Reviews & Testimonials", href: "/testimonials" },
                    { label: "FAQs", href: "/faqs" },
                ],
            },
        ],
        featured: {
            image: "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
            title: "Expert Guides",
            description: "Meet the passionate team dedicated to making your adventure extraordinary.",
            href: "/about/guides",
        }
    },
    {
        id: "contacts",
        label: "Contacts",
        href: "/contact",
        columns: [
            {
                title: "Get in Touch",
                items: [
                    { label: "Contact Us", href: "/contact" },
                    { label: "Plan Your Trip", href: "/plan-trip" },
                    { label: "Get a Quote", href: "/quote" },
                ]
            },
            {
                title: "Connect",
                items: [
                    { label: "WhatsApp Chat", href: "https://wa.me/255755310533", isExternal: true },
                    { label: "Office Location", href: "/contact#map" },
                ]
            }
        ],
        featured: {
            image: "/images/safari-vehicles-in-open-kenya-field-2026-03-09-04-32-13-utc.webp",
            title: "Start Planning",
            description: "Ready for your adventure? Let's verify availability and start planning.",
            href: "/plan-trip",
        }
    },
];

export const NAV_SPLIT_INDEX = 2; // Split after Safari and Destinations.

export interface ExperiencePageData {
    title: string;
    description: string;
    image: string;
    content: string;
    stats?: { label: string; value: string }[];
}

export const EXPERIENCES_GENERAL = {
    overview: {
        title: "Curated Experiences",
        description: "Go beyond the ordinary. From hot air balloon safaris to cultural immersions with the Maasai.",
        image: "/images/safari-jeep-on-a-dirt-road-a-sunrise-drive-2026-03-25-00-55-18-utc.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Tanzania offers more than just game drives. It invites you to participate, observe, and connect with the land and its people.</p>
            <p class="mb-6 text-gray-700">Whether drifting silently over the Serengeti in a balloon at sunrise, walking with Maasai warriors, or relaxing on the pristine beaches of Zanzibar, our experiences are designed to awaken your senses.</p>
        `,
        stats: [
            { label: "Culture", value: "Authentic" },
            { label: "Adventure", value: "Limitless" },
            { label: "Memories", value: "Forever" },
            { label: "Guides", value: "Local" }
        ]
    }
};

export const EXPERIENCE_TYPES = [
    {
        title: "Balloon Safaris",
        slug: "balloon",
        image: "/images/hot-air-balloon-in-maasai-mara-national-reserve-k-2026-01-06-09-39-47-utc.webp",
        description: "Float above the plains as the sun rises. A champagne breakfast in the bush awaits upon landing.",
        icon: "cloud"
    },
    {
        title: "Cultural Visits",
        slug: "cultural",
        image: "/images/mega-menu/guides.webp",
        description: "Meet the Maasai and Hadzabe tribes. Learn their traditions, dances, and survival skills.",
        icon: "groups"
    },
    {
        title: "Walking Safaris",
        slug: "walking",
        image: "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
        description: "Step out of the vehicle and walk on the wild side. Track animals on foot with armed rangers.",
        icon: "hiking"
    },
    {
        title: "Honeymoons",
        slug: "honeymoon",
        image: "/images/beautiful-wooden-pier-with-thatched-huts-in-ocean-2026-03-25-00-02-46-utc.webp",
        description: "Private dinners, secluded luxury tents, and romantic sunsets. The perfect start to your life together.",
        icon: "favorite"
    },
    {
        title: "Photography",
        slug: "photography",
        image: "/images/leopard-lying-on-rock-in-the-wild-2026-03-25-08-21-20-utc.webp",
        description: "Specialized vehicles and guides for serious photographers. Get the perfect shot.",
        icon: "camera_alt"
    }
];

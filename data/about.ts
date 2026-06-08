export interface AboutPageData {
    title: string;
    description: string;
    content: string;
    image: string;
}

export const ABOUT_PAGES: Record<string, AboutPageData> = {
    story: {
        title: "Our Story",
        description: "From humble beginnings to Tanzania's premier boutique safari operator.",
        image: "/images/mega-menu/guides.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Illashimwe Adventure was born from a deep love for the African wilderness and a desire to share its magic with the world in a way that respects both nature and local communities.</p>
            <p class="mb-6 text-gray-700">Founded by local guides who grew up in the shadow of Kilimanjaro, we noticed a gap in the industry: a need for truly personalized, high-quality experiences that prioritize guest connection over mass tourism.</p>
            <p class="mb-6 text-gray-700">Today, we are proud to be a 100% locally owned and operated company, employing over 50 staff members and supporting numerous community projects. When you travel with us, you are not just a tourist; you are family.</p>
        `
    },
    "why-us": {
        title: "Why Travel With Us",
        description: "The Illashimwe Difference: Passion, Expertise, and Excellence.",
        image: "/images/mega-menu/lemosho-scenic.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Choosing the right safari operator can be overwhelming. Here is why thousands of travelers trust us with their dream vacation.</p>
            <ul class="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li><strong>Local Expertise:</strong> We don't just work here; we live here. Our knowledge of the parks, wildlife patterns, and hidden gems is unmatched.</li>
                <li><strong>Private 4x4 Land Cruisers:</strong> We guarantee a window seat for every passenger in our custom-built safari vehicles, equipped with charging points and fridges.</li>
                <li><strong>Top-Rated Guides:</strong> Our guides are Silver and Gold level certified, fluent in English, and passionate about storytelling.</li>
                <li><strong>Sustainable Impact:</strong> We are committed to eco-friendly practices and fair wages for our porters and staff.</li>
            </ul>
        `
    },
    guides: {
        title: "Meet Our Guides",
        description: "The heroes of your safari.",
        image: "/images/mega-menu/guides.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">A safari guide can make or break your trip. That's why we invest heavily in training and retaining the best talent in Tanzania.</p>
            <p class="mb-6 text-gray-700">Our guides are more than just drivers; they are naturalists, historians, and friends. With an average of 10+ years of experience, they know how to predict animal behavior, spot camouflage leopards, and explain the complex ecosystems of the savannah.</p>
            <p class="mb-6 text-gray-700">They undergo rigorous annual training in first aid, wildlife management, and customer service to ensure your safety and comfort at all times.</p>
        `
    },
    vehicles: {
        title: "Our Vehicles",
        description: "Comfort and reliability in the bush.",
        image: "/images/mega-menu/machame-camp.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">Our fleet consists of extended Toyota Land Cruisers, specifically modified for the rugged Tanzanian terrain.</p>
            <ul class="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li><strong>Pop-Up Roofs:</strong> For 360-degree unobstructed game viewing and photography.</li>
                <li><strong>Charging Ports:</strong> Inverters to keep your cameras and phones charged.</li>
                <li><strong>Fridge/Cooler:</strong> To keep your drinks cold throughout the day.</li>
                <li><strong>Radio Communication:</strong> Connected to park rangers and other guides to share wildlife sightings.</li>
                <li><strong>Comfortable Seating:</strong> Reclining seats with ample legroom.</li>
            </ul>
        `
    },
    "responsible-tourism": {
        title: "Responsible Tourism",
        description: "Travel that makes a difference.",
        image: "/images/mega-menu/kilimanjaro.webp",
        content: `
            <p class="lead text-xl text-deep-brown font-medium mb-6">We believe tourism should be a force for good. We are dedicated to preserving Tanzania's natural heritage and empowering its people.</p>
            <h3 class="text-2xl font-molot text-deep-brown mt-12 mb-4">Our Commitments</h3>
            <ul class="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li><strong>Porter Welfare:</strong> We adhere to KPAP guidelines, ensuring fair wages, proper gear, and 3 meals a day for our Kilimanjaro porters.</li>
                <li><strong>Eco-Friendly Operations:</strong> We follow "Leave No Trace" principles on the mountain and use solar power in our camps where possible.</li>
                <li><strong>Community Support:</strong> A percentage of our profits goes to local schools and orphanages in the Arusha region.</li>
            </ul>
        `
    }
};

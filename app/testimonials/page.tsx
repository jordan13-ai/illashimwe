import { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Testimonials | Illashimwe Adventure",
    description: "Read what our guests say about their safari and Kilimanjaro experiences with Illashimwe Adventure.",
};

const TESTIMONIALS = [
    {
        name: "Sarah & Mike",
        country: "USA",
        tour: "7-Day Safari & Zanzibar",
        rating: 5,
        text: "The trip of a lifetime! Everything was perfectly organized, from the airport pickup to the lodge selection. Our guide, Joseph, was incredible at spotting wildlife and was so knowledgeable."
    },
    {
        name: "David L.",
        country: "UK",
        tour: "Kilimanjaro Lemosho Route",
        rating: 5,
        text: "Summiting Kilimanjaro was the hardest thing I've ever done, but the Illashimwe team made it possible. The porters are superheroes. I felt safe and supported every step of the way."
    },
    {
        name: "The Chen Family",
        country: "Singapore",
        tour: "Family Safari",
        rating: 5,
        text: "We were worried about bringing our kids (ages 8 and 10), but the team customized everything for us. Shorter game drives, kid-friendly meals, and lodges with pools. Perfection."
    },
    {
        name: "Jessica R.",
        country: "Australia",
        tour: "9-Day Northern Circuit",
        rating: 5,
        text: "Highly recommend Illashimwe. Local company, fair prices, and top-tier service. The food on the mountain was better than I eat at home!"
    }
];

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/images/mega-menu/machame-camp.webp"
                    alt="Happy Climbers"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase mb-4">
                        Guest Reviews
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        Stories from the Wild
                    </h1>
                </div>
            </div>

            {/* Testimonials Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TESTIMONIALS.map((t, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-xl text-gray-600 font-light italic mb-8 flex-1 leading-relaxed">
                                    &quot;{t.text}&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-deep-brown rounded-full flex items-center justify-center text-white font-molot text-xl">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-deep-brown">{t.name}</h4>
                                        <p className="text-sm text-gray-500">{t.country} • {t.tour}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TripAdvisor Badge Placeholder */}
                    <div className="mt-20 text-center">
                        <p className="font-bold text-deep-brown mb-4 uppercase tracking-widest text-sm">Read more reviews on TripAdvisor</p>
                        <div className="w-40 h-24 bg-white mx-auto border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                            [TripAdvisor Widget]
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

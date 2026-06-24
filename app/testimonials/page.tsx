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

                    {/* TripAdvisor CTA */}
                    <div className="mt-20 text-center">
                        <p className="font-bold text-deep-brown mb-6 uppercase tracking-widest text-sm">Read more reviews on TripAdvisor</p>
                        <a
                            href="https://www.tripadvisor.com/Search?q=Illashimwe+Adventure"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#34E0A1] text-[#1A1A1A] font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                            View Us on TripAdvisor
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

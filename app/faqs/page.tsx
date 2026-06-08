import { Metadata } from "next";
import Image from "next/image";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Illashimwe Adventure",
    description: "Common questions about traveling to Tanzania, climbing Kilimanjaro, and booking your safari.",
};

const FAQS = [
    {
        category: "Booking & Planning",
        questions: [
            {
                q: "What is the best time to visit Tanzania?",
                a: "For safaris, the dry season (June to October) is best for game viewing. The Great Migration is in the Serengeti during this time. For Kilimanjaro, Jan-March and June-Oct are ideal."
            },
            {
                q: "Do I need a visa?",
                a: "Yes, most visitors require a visa. You can get an eVisa online before you travel or a visa on arrival at major airports (Kilimanjaro/JRO or Dar es Salaam). Please check the latest requirements for your nationality."
            },
            {
                q: "Is it safe to travel to Tanzania?",
                a: "Yes, Tanzania is one of the safest countries in Africa for tourists. However, as with any travel, sensible precautions should be taken (don't walk alone at night in cities, keep valuables safe)."
            }
        ]
    },
    {
        category: "Safari Experience",
        questions: [
            {
                q: "What type of vehicles do you use?",
                a: "We use custom-built 4x4 Toyota Land Cruisers with pop-up roofs for 360-degree game viewing. Everyone gets a window seat."
            },
            {
                q: "What should I pack?",
                a: "Light, neutral-colored clothing for safari. Warm layers for early mornings and nights. Sunscreen, hat, sunglasses, and good binoculars are essential."
            }
        ]
    },
    {
        category: "Kilimanjaro",
        questions: [
            {
                q: "Which route should I choose?",
                a: "For the highest success rate and scenery, we recommend Lemosho (7 or 8 days) or the Northern Circuit (9 days). Machame is great for more adventurous hikers."
            },
            {
                q: "How fit do I need to be?",
                a: "You don't need to be an athlete, but good cardiovascular fitness is required. We recommend hiking and cardio training for at least 3 months prior to your climb."
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/images/mega-menu/kilimanjaro.webp"
                    alt="FAQs"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        Frequently Asked Questions
                    </h1>
                </div>
            </div>

            {/* FAQs */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    {FAQS.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="font-molot text-3xl text-deep-brown mb-8 border-b border-gray-200 pb-2">{category.category}</h2>
                            <div className="space-y-6">
                                {category.questions.map((faq, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h3 className="flex items-start gap-3 font-bold text-lg text-deep-brown mb-3">
                                            <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-600 pl-9 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

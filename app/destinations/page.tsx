import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DESTINATIONS_GENERAL, ALL_DESTINATIONS } from "@/data/destinations";

export const metadata: Metadata = {
    title: "Destinations in Tanzania | Illashimwe Adventure",
    description: "Explore the best safari destinations in Tanzania including Serengeti, Ngorongoro Crater, Tarangire, and Zanzibar.",
};

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={DESTINATIONS_GENERAL.image}
                    alt="Tanzania Landscapes"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <p className="font-[family-name:var(--font-script)] text-primary text-4xl md:text-5xl lg:text-6xl mb-0 drop-shadow-sm">
                        {DESTINATIONS_GENERAL.subtitle}
                    </p>
                    <h1 className="font-serif font-bold uppercase text-5xl md:text-6xl lg:text-7xl text-white tracking-wide leading-none mb-6">
                        {DESTINATIONS_GENERAL.title}
                    </h1>
                    <p className="text-lg md:text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
                        {DESTINATIONS_GENERAL.description}
                    </p>
                </div>
            </div>

            {/* Destinations Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {ALL_DESTINATIONS.map((dest) => (
                            <Link href={`/destinations/${dest.slug}`} key={dest.slug} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={dest.image}
                                        alt={dest.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {dest.highlights.map((tag, i) => (
                                                <span key={i} className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="font-serif font-bold text-3xl text-white group-hover:text-cream transition-colors duration-300">{dest.title}</h3>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1 justify-between">
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        {dest.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

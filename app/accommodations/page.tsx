import { ACCOMMODATIONS } from "@/data/accommodations";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/home/TrustBar";
import FinalCTA from "@/components/home/FinalCTA";

export default function AccommodationsPage() {
    return (
        <main className="min-h-screen bg-cream">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-deep-brown">
                <Image
                    src="/images/generated/luxury-lodge-interior.webp" // Use a good hero image
                    alt="Luxury Safari Accommodations"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6">
                        Stay in Excellence
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                        Hand-picked luxury lodges and tented camps ensuring your nights are as magical as your days.
                    </p>
                </div>
            </div>

            <TrustBar />

            <section className="py-24 px-6 md:px-12 text-deep-brown">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ACCOMMODATIONS.map((lodge) => (
                            <Link href={`/accommodations/${lodge.slug}`} key={lodge.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={lodge.image}
                                        alt={lodge.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-deep-brown shadow-sm">
                                        {lodge.priceRange}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-serif font-bold text-deep-brown mb-1 group-hover:text-safari-green transition-colors">
                                                {lodge.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-medium">
                                                {lodge.location}
                                            </p>
                                        </div>
                                        <div className="flex items-center bg-safari-green/10 px-2 py-1 rounded text-safari-green font-bold text-sm">
                                            ★ {lodge.rating}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                                        {lodge.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                        {lodge.features.slice(0, 3).map((feature, idx) => (
                                            <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}

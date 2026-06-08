import { ACCOMMODATIONS } from "@/data/accommodations";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Accommodation() {
    return (
        <section className="bg-cream py-24 px-6 md:px-12 text-deep-brown">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-safari-green font-bold tracking-widest uppercase text-sm mb-4 block">
                        Rest in Comfort
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
                        Hand-Picked Lodges
                    </h2>
                    <p className="text-deep-brown/70 max-w-2xl mx-auto text-lg leading-relaxed">
                        We have curated a selection of the finest accommodations, from luxury tented camps to heritage lodges, ensuring your nights are as magical as your days.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {ACCOMMODATIONS.slice(0, 3).map((lodge) => (
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

                <div className="text-center">
                    <Link
                        href="/accommodations"
                        className="inline-block bg-safari-green text-white font-bold py-4 px-10 rounded-full hover:bg-safari-green/90 transition-all transform hover:scale-105 shadow-lg shadow-safari-green/20"
                    >
                        View All Accommodations
                    </Link>
                </div>
            </div>
        </section>
    );
}

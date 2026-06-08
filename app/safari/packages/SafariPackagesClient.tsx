"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SAFARI_PACKAGES } from "@/data/safari";
import { SAFARI_CATEGORIES } from "@/data/safari-categories";
import { cn } from "@/lib/utils";

const FILTERS = [
    { id: "all", label: "All Packages", slug: null },
    ...SAFARI_CATEGORIES.map((c) => ({ id: c.slug, label: c.title, slug: c.slug })),
];

export default function SafariPackagesClient() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredPackages = useMemo(() => {
        if (activeFilter === "all") return SAFARI_PACKAGES;
        return SAFARI_PACKAGES.filter((pkg) => pkg.categories?.includes(activeFilter));
    }, [activeFilter]);

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Category Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
                                activeFilter === filter.id
                                    ? "bg-deep-brown text-white border-deep-brown shadow-lg scale-105"
                                    : "bg-white text-deep-brown/60 border-deep-brown/10 hover:text-deep-brown hover:border-deep-brown/30"
                            )}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPackages.map((pkg) => (
                        <Link
                            href={`/safari/packages/${pkg.slug}`}
                            key={pkg.slug}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 text-deep-brown text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                    {pkg.duration}
                                </div>
                                {pkg.tag && (
                                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                        {pkg.tag}
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="font-molot text-xl text-deep-brown mb-2 group-hover:text-primary transition-colors leading-tight">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-primary font-bold text-lg mb-3">
                                        {pkg.price}{" "}
                                        <span className="text-xs text-gray-400 font-normal">/ person</span>
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {pkg.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                    View Itinerary <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredPackages.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-lg">No packages found for this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

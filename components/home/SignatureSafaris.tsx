"use client";

import { safariFilters } from "@/data/homepage";
import { SAFARI_PACKAGES } from "@/data/safari";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SignatureSafaris() {
    const [activeFilter, setActiveFilter] = useState("All Experiences");

    const filteredPackages = useMemo(() => {
        if (activeFilter === "All Experiences") {
            // Return first 3 or specific ones if "All" is selected, or maybe mix? 
            // Let's return the first 3 which are diverse, or specifically curated ones.
            // For now, let's just show the first 3 to keep layout clean, or maybe 6 if we want rows.
            // The design shows 3 cards. Let's show 3 "Feature" ones.
            return SAFARI_PACKAGES.slice(0, 3);
        }
        return SAFARI_PACKAGES.filter(pkg => pkg.categories?.includes(activeFilter)).slice(0, 3);
    }, [activeFilter]);

    return (
        <section className="bg-background-light py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header & Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                            Curated Expeditions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-molot font-black mb-6 leading-tight text-deep-brown">
                            Signature <span className="italic text-primary font-serif">Safaris</span>
                        </h2>
                        <p className="text-deep-brown/70 text-lg leading-relaxed font-light">
                            Hand-crafted journeys designed to immerse you in the raw beauty and unparalleled luxury of the Tanzanian wilderness.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap gap-2"
                    >
                        {safariFilters.map((filter, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border border-deep-brown/10",
                                    activeFilter === filter
                                        ? "bg-deep-brown text-white shadow-lg transform scale-105"
                                        : "bg-white text-deep-brown/60 hover:bg-white hover:text-deep-brown hover:border-deep-brown/30"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPackages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-white rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-[580px]"
                        >
                            {/* Image Container - Taller with cleaner badge */}
                            <div className="relative h-[65%] overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>

                                {/* Badge - Minimalist Tag */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-deep-brown px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        {pkg.duration}
                                    </span>
                                    {pkg.tag && (
                                        <span className="bg-primary/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                            {pkg.tag}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content - Cleaner, more whitespace */}
                            <div className="relative flex-1 p-8 flex flex-col justify-between bg-white">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-serif font-black text-deep-brown group-hover:text-primary transition-colors duration-300 pr-4 leading-tight">
                                            {pkg.title}
                                        </h3>
                                        <div className="text-right shrink-0">
                                            <p className="text-xs text-deep-brown/40 font-bold uppercase tracking-wider mb-1">From</p>
                                            <p className="font-serif font-bold text-lg text-safari-green">{pkg.price}</p>
                                        </div>
                                    </div>

                                    <p className="text-deep-brown/60 text-base leading-relaxed line-clamp-3">
                                        {pkg.description}
                                    </p>
                                </div>

                                <Link
                                    href={`/safari/packages/${pkg.slug}`}
                                    className="pt-6 mt-4 border-t border-deep-brown/5 flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300"
                                >
                                    View Itinerary
                                    <ArrowUpRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 flex justify-center"
                >
                    <Link href="/safari/packages">
                        <button className="px-8 py-4 bg-primary text-deep-brown rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                            Explore More Itineraries
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

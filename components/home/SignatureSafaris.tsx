"use client";

import { safariFilters } from "@/data/homepage";
import { SAFARI_PACKAGES } from "@/data/safari";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SignatureSafaris() {
    const [activeFilter, setActiveFilter] = useState("All Experiences");

    const filteredPackages = useMemo(() => {
        if (activeFilter === "All Experiences") {
            return SAFARI_PACKAGES.slice(0, 3);
        }
        return SAFARI_PACKAGES.filter(pkg => pkg.categories?.includes(activeFilter)).slice(0, 3);
    }, [activeFilter]);

    return (
        <section className="bg-[#FDFCF8] py-32 px-6 relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header & Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-primary" />
                            <p className="font-[family-name:var(--font-script)] text-primary text-3xl md:text-4xl">
                                Curated Expeditions
                            </p>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight text-deep-brown leading-none mb-6">
                            Signature <br /> Safaris
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light">
                            Hand-crafted journeys designed to immerse you in the raw beauty and unparalleled luxury of the Tanzanian wilderness.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap lg:justify-end gap-3 max-w-lg"
                    >
                        {safariFilters.map((filter, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 border",
                                    activeFilter === filter
                                        ? "bg-deep-brown text-white border-deep-brown shadow-md"
                                        : "bg-transparent text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group flex flex-col bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden border border-gray-100"
                        >
                            {/* Image Section */}
                            <div className="relative h-[300px] w-full overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                
                                {/* Tags */}
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    {pkg.tag && (
                                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                            {pkg.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-white">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5 text-right">From</p>
                                        <p className="font-serif font-black text-lg text-deep-brown">{pkg.price}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Tanzania</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-deep-brown group-hover:text-primary transition-colors duration-300 leading-tight mb-4">
                                    {pkg.title}
                                </h3>
                                
                                <p className="text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                                    {pkg.description}
                                </p>

                                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                                    <Link
                                        href={`/safari/packages/${pkg.slug}`}
                                        className="text-xs font-bold text-deep-brown uppercase tracking-[0.2em] group-hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        View Itinerary
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 text-gray-400">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
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
                    className="mt-20 flex justify-center"
                >
                    <Link href="/safari/packages" className="group flex items-center justify-center gap-3 bg-deep-brown text-white px-10 py-5 rounded-full font-bold transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:bg-primary transform hover:-translate-y-1">
                        Explore All Itineraries <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

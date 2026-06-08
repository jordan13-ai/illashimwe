"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandQuote() {
    return (
        <section className="bg-deep-brown py-24 px-6 overflow-hidden text-cream relative mt-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Image Side */}
                <div className="relative h-[600px] w-full max-w-md mx-auto lg:max-w-none rounded-t-[300px] rounded-b-[100px] overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_rgba(202,160,82,0.15)] order-2 lg:order-1 transform hover:-translate-y-2 transition-transform duration-700 group">
                    <Image
                        src="/brand_quote_camp.webp"
                        alt="The Illashimwe Legacy - Mobile Camp"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                    <div className="inline-block mb-8">
                        <span className="text-primary font-bold tracking-[0.2em] text-sm border-b pb-1 border-primary">
                            OUR PROMISE
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-molot mb-12 leading-tight">
                        More Than An <span className="text-primary italic font-serif">Itinerary</span>
                    </h2>

                    <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-cream/80 mb-12">
                        &quot;A safari with Illashimwe Adventure is a connection to the land, its people, and its wildlife. We are dedicated to crafting journeys that <strong className="text-white font-serif italic">inspire, empower, and remain with you</strong> long after you return home.&quot;
                    </blockquote>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-8 justify-center lg:justify-start">
                            <div className="border-l border-white/20 pl-6">
                                <h4 className="text-3xl font-serif text-white mb-2">100%</h4>
                                <p className="text-xs uppercase tracking-widest text-primary">Local <br />Ownership</p>
                            </div>
                            <div className="border-l border-white/20 pl-6">
                                <h4 className="text-3xl font-serif text-white mb-2">Safety</h4>
                                <p className="text-xs uppercase tracking-widest text-primary">First <br />Approach</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link href="/about">
                                <button className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-deep-brown px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all inline-flex items-center gap-4">
                                    Read Our Full Story
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

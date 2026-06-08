import { destinations } from "@/data/homepage";
import Link from "next/link";
import React from "react";

export default function Destinations() {
    return (
        <section className="bg-deep-brown py-24 px-6 text-cream">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <p className="font-[family-name:var(--font-script)] text-primary text-5xl md:text-6xl mb-0 pl-1 drop-shadow-sm">
                            Explore our
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-wide leading-none mb-6 text-cream">
                            Untamed Destinations
                        </h2>
                        <p className="text-cream/80 text-lg font-light max-w-lg leading-relaxed">
                            Tanzania&apos;s most iconic landscapes, curated for your ultimate discovery.
                        </p>
                    </div>
                    <Link href="/destinations" className="border border-cream/30 hover:bg-cream/10 text-cream px-8 py-3 rounded-full font-bold transition-all uppercase tracking-widest text-sm focus:ring-2 focus:ring-offset-2 focus:ring-cream inline-block backdrop-blur-sm shadow-md hover:-translate-y-1">
                        View Map
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {destinations.map((dest, index) => (
                        <Link
                            href={`/destinations/${dest.slug}`}
                            key={index}
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-cream/50 block shadow-xl transition-shadow hover:shadow-2xl"
                            tabIndex={0}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url('${dest.image}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-3 inline-block shadow-sm">
                                    {dest.tag}
                                </span>
                                <h3 className="text-2xl font-serif font-bold group-hover:text-cream transition-colors duration-300">{dest.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

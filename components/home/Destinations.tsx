import { destinations } from "@/data/homepage";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Destinations() {
    return (
        <section className="bg-[#FDFCF8] py-28 relative overflow-hidden border-y border-gray-100">
            {/* Header Area */}
            <div className="max-w-[1400px] mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-2xl">
                    <p className="font-[family-name:var(--font-script)] text-primary text-4xl lg:text-5xl mb-4">
                        Explore our
                    </p>
                    <h2 className="text-5xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.1] text-deep-brown">
                        Untamed <br /> Destinations
                    </h2>
                </div>
                <div className="flex flex-col items-start md:items-end gap-6 max-w-sm">
                    <p className="text-gray-500 text-lg font-light leading-relaxed md:text-right">
                        Tanzania's most iconic landscapes, curated for your ultimate African discovery. Swipe to explore.
                    </p>
                    <Link href="/destinations" className="group flex items-center gap-3 text-deep-brown font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
                        View All Destinations <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div className="w-full pb-16 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-12 flex gap-6 md:gap-10">
                {destinations.map((dest, index) => (
                    <Link
                        href={`/destinations/${dest.slug}`}
                        key={index}
                        className="group relative shrink-0 w-[85vw] md:w-[320px] lg:w-[280px] xl:w-[320px] h-[450px] md:h-[480px] rounded-[2rem] overflow-hidden snap-center md:snap-start block"
                    >
                        {/* Image */}
                        <Image
                            src={dest.image}
                            alt={dest.title}
                            fill
                            sizes="(max-width: 768px) 85vw, 320px"
                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                        
                        {/* Elegant Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Inner Border Overlay */}
                        <div className="absolute inset-4 rounded-[1.5rem] border border-white/0 group-hover:border-white/30 scale-[0.95] group-hover:scale-100 transition-all duration-700 pointer-events-none" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="flex items-center gap-4 mb-4 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                                <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border-b border-primary text-primary pb-1">
                                    {dest.tag}
                                </span>
                            </div>
                            <div className="flex items-end justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-3xl md:text-4xl font-serif font-black text-white tracking-wide group-hover:text-primary transition-colors duration-500 drop-shadow-md">
                                    {dest.title}
                                </h3>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-deep-brown flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl shrink-0 ml-3">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                {/* End spacer so the last item isn't flush with the right edge */}
                <div className="shrink-0 w-6 md:w-[10vw]" />
            </div>
            
            {/* Custom scrollbar styling */}
            <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}

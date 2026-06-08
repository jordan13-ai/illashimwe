import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="bg-deep-brown py-32 px-6 text-center relative overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-flex items-center justify-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-primary" />
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Your Next Adventure</span>
                    <div className="w-12 h-[1px] bg-primary" />
                </div>
                
                <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-8 leading-none uppercase tracking-tight">
                    Ready to Answer <br/> the Call of the <span className="text-primary italic font-serif">Wild?</span>
                </h2>
                
                <p className="text-cream/70 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                    Spaces are limited for the Great Migration season. Start planning your custom itinerary today with one of our private safari consultants.
                </p>
                
                <Link href="/contact" className="inline-flex">
                    <button className="group bg-primary hover:bg-white transition-colors text-deep-brown px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center justify-center gap-3 transform hover:-translate-y-1 duration-300">
                        Design Your Safari
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </section>
    );
}

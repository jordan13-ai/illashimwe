import { trustBarItems } from "@/data/homepage";
import React from "react";

export default function TrustBar() {
    return (
        <section className="bg-[#FDFCF8] py-12 border-b border-deep-brown/5">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {trustBarItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 group cursor-default">
                        <span className="material-symbols-outlined text-deep-brown/30 group-hover:text-primary text-4xl transition-colors duration-500">
                            {item.icon}
                        </span>
                        <div>
                            <p className="font-serif font-bold text-deep-brown text-lg tracking-wide group-hover:text-primary transition-colors duration-300">{item.title}</p>
                            <p className="text-[10px] text-deep-brown/50 uppercase tracking-widest font-sans mt-1">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import { trustBarItems } from "@/data/homepage";
import React from "react";

export default function TrustBar() {
    return (
        <section className="bg-cream py-10 border-b border-deep-brown/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {trustBarItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-safari-green text-3xl">
                            {item.icon}
                        </span>
                        <div>
                            <p className="font-serif font-bold text-deep-brown">{item.title}</p>
                            <p className="text-xs text-deep-brown/60 uppercase tracking-widest font-sans">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

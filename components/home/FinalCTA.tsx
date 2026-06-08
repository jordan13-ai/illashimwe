import React from "react";

export default function FinalCTA() {
    return (
        <section className="bg-deep-brown py-32 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-cream text-5xl font-serif font-black mb-8 leading-tight">
                    Ready to Answer the Call of the Wild?
                </h2>
                <p className="text-cream/70 text-xl mb-12 font-light">
                    Spaces are limited for the Great Migration season. Start your planning
                    today with a private consultant.
                </p>
                <button className="bg-primary hover:scale-105 transition-transform text-deep-brown px-12 py-5 rounded-xl font-bold text-xl uppercase tracking-tight shadow-2xl shadow-primary/20 focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Design Your Safari
                </button>
            </div>
        </section>
    );
}

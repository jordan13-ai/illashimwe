"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";


const TESTIMONIALS = [
    {
        id: 1,
        quote: "Beyond anything we could have imagined. Illashimwe showed us the Serengeti not as tourists, but as guests of the wilderness.",
        author: "The Sterling Family",
        location: "London, UK",
        rating: 5,
    },
    {
        id: 2,
        quote: "Climbing Kilimanjaro was a dream, but the team made it a reality. Their support and expertise were world-class.",
        author: "Marcus & Elena",
        location: "Berlin, Germany",
        rating: 5,
    },
    {
        id: 3,
        quote: "Every detail was perfect. From the luxury tented camps to the knowledgeable guides. Highly recommended!",
        author: "Sarah Jenkins",
        location: "New York, USA",
        rating: 5,
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const activeReview = TESTIMONIALS[activeIndex];

    return (
        <section className="bg-cream py-24 px-6 overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="flex flex-col items-center gap-4 mb-4">
                    <span className="text-primary uppercase tracking-[0.2em] font-bold text-xs">Client Stories</span>
                    <div className="h-px w-12 bg-primary"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-molot font-black mb-2 text-deep-brown">
                    Whispers from the <span className="italic text-primary font-serif">Savannah</span>
                </h2>

                <p className="text-deep-brown/60 text-sm font-bold uppercase tracking-widest mb-12">
                    500+ 5-Star Reviews
                </p>

                <div className="min-h-[300px] flex flex-col items-center justify-center transition-all duration-500">
                    <div className="mb-8 text-primary/20">
                        <Quote className="w-16 h-16 fill-current" />
                    </div>

                    <div className="flex gap-1 text-primary mb-8">
                        {[...Array(activeReview.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed text-deep-brown/90 mb-10 italic max-w-3xl">
                        &quot;{activeReview.quote}&quot;
                    </blockquote>

                    <div>
                        <p className="font-bold text-deep-brown text-lg">{activeReview.author}</p>
                        <p className="text-deep-brown/60 text-sm uppercase tracking-wider">{activeReview.location}</p>
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-12">
                    <button
                        onClick={prevTestimonial}
                        className="bg-transparent hover:bg-primary hover:text-deep-brown text-deep-brown border border-deep-brown/10 hover:border-primary p-4 rounded-full transition-all shadow-sm group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="bg-transparent hover:bg-primary hover:text-deep-brown text-deep-brown border border-deep-brown/10 hover:border-primary p-4 rounded-full transition-all shadow-sm group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[60px] border-deep-brown/20 blur-3xl"></div>
            </div>
        </section>
    );
}

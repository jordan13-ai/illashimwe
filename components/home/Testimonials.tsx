"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <section className="bg-deep-brown py-32 px-6 overflow-hidden relative">
            <div className="max-w-[1000px] mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6 mb-16"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span className="font-[family-name:var(--font-script)] text-primary text-3xl md:text-4xl">Client Stories</span>
                        <div className="w-12 h-[1px] bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black uppercase tracking-tight text-white leading-none">
                        Whispers from the <br /> Savannah
                    </h2>
                </motion.div>

                <div className="min-h-[350px] relative flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 text-white/5">
                        <Quote className="w-32 h-32 fill-current" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center justify-center relative z-10 w-full"
                        >
                            <div className="flex gap-1 text-primary mb-8">
                                {[...Array(activeReview.rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-current" />
                                ))}
                            </div>

                            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight text-white mb-10 italic max-w-4xl tracking-wide font-light">
                                &quot;{activeReview.quote}&quot;
                            </blockquote>

                            <div>
                                <p className="font-bold text-white text-lg tracking-widest uppercase mb-1">{activeReview.author}</p>
                                <p className="text-white/50 text-sm uppercase tracking-[0.2em]">{activeReview.location}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-8 mt-16">
                    <button
                        onClick={prevTestimonial}
                        className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-deep-brown transition-all duration-300 transform hover:-translate-x-1"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-3">
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeIndex === idx ? "bg-primary w-8" : "bg-white/20 hover:bg-white/50"}`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextTestimonial}
                        className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-deep-brown transition-all duration-300 transform hover:translate-x-1"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
            
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}

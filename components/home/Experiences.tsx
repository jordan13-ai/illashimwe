"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/homepage";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Experiences() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % experiences.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    // Calculate visible slides for carousel effect (3 cards visible on desktop)
    const getVisibleSlides = () => {
        const slides = [];
        for (let i = 0; i < 3; i++) {
            slides.push(experiences[(current + i) % experiences.length]);
        }
        return slides;
    };

    return (
        <section className="bg-background-light py-28 px-6 md:px-0 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 relative z-10"
                    >
                        <div className="relative">
                            <p className="font-[family-name:var(--font-script)] text-primary text-5xl md:text-6xl mb-0 pl-1">
                                Choose your
                            </p>
                            <h2 className="text-deep-brown text-4xl md:text-5xl font-serif font-bold uppercase tracking-wide leading-none mb-8">
                                Experience
                            </h2>
                            <p className="text-deep-brown/70 text-lg leading-relaxed mb-10 font-light max-w-md">
                                Discover thrilling adventures, cultural tours and serene getaways in Tanzania, Kilimanjaro and Zanzibar. Tailor your journey for unforgettable memories.
                            </p>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={prev}
                                    className="w-14 h-14 rounded-full border border-deep-brown/30 flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors group"
                                    aria-label="Previous Experience"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-14 h-14 rounded-full bg-deep-brown/90 flex items-center justify-center text-cream hover:bg-primary transition-colors group"
                                    aria-label="Next Experience"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Carousel */}
                    <div className="lg:w-2/3 w-full relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {getVisibleSlides().map((exp, idx) => (
                                    <Link
                                        key={`${exp.id}-${current + idx}`}
                                        href={
                                            exp.id === "safaris" ? "/safari/luxury" :
                                                exp.id === "migration" ? "/safari/migration" :
                                                    exp.id === "beach" ? "/destinations/zanzibar" :
                                                        exp.id === "trekking" ? "/kilimanjaro" : "#"
                                        }
                                        className="relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl block"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="h-full w-full relative"
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${exp.image})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                                                <h3 className="text-cream text-xl font-bold uppercase tracking-widest font-serif mb-2 border-b-2 border-primary/0 group-hover:border-primary inline-block pb-1 transition-all">
                                                    {exp.title}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

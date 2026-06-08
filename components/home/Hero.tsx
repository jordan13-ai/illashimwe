"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafariQuiz from "./SafariQuiz";

const backgrounds = [
    "/images/lioness-at-the-serengeti-national-park-tanzania-2026-01-05-04-42-12-utc.webp",
    "/images/snow-on-top-of-mount-kilimanjaro-in-amboseli-2026-03-24-15-21-46-utc.webp",
    "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
    "/images/hot-air-balloon-in-maasai-mara-national-reserve-k-2026-01-06-09-39-47-utc.webp",
];

const topics = [
    "Experiences",
    "Big 5 Safari",
    "Great Migration",
    "Mt. Kilimanjaro",
    "Zanzibar Beach",
    "Serengeti Tours",
    "Ngorongoro Tours",
    "Lake Manyara Tours",
    "Tarangire Tours",
    "Photographic Safari"
];

export default function Hero() {
    const [currentBg, setCurrentBg] = useState(0);
    const [currentTopic, setCurrentTopic] = useState(0);
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    // Cycle backgrounds every 8 seconds
    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 8000);
        return () => clearInterval(bgInterval);
    }, []);

    // Cycle topics every 3 seconds
    useEffect(() => {
        const topicInterval = setInterval(() => {
            setCurrentTopic((prev) => (prev + 1) % topics.length);
        }, 3000);
        return () => clearInterval(topicInterval);
    }, []);

    return (
        <section className="relative h-[85vh] w-full overflow-hidden bg-black">
            {/* Background Slideshow with Ken Burns Effect */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentBg}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("${backgrounds[currentBg]}")`
                    }}
                />
            </AnimatePresence>

            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto z-10">
                <h1 className="text-cream text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 tracking-wide drop-shadow-2xl">
                    <span className="block text-4xl md:text-5xl font-[family-name:var(--font-script)] mb-4 normal-case tracking-normal text-cream/90 font-normal">
                        Discover
                    </span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentTopic}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="block text-primary"
                        >
                            {topics[currentTopic]}
                        </motion.span>
                    </AnimatePresence>
                </h1>
                <p className="text-cream/90 text-lg md:text-xl max-w-2xl mb-10 font-light drop-shadow-md">
                    Experience the untamed beauty of the Serengeti with bespoke itineraries designed for the discerning traveler.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="bg-primary hover:bg-primary/90 hover:-translate-y-1 transition-all text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Plan Your Journey
                    </button>
                    <button className="border border-cream/50 text-cream hover:bg-cream/10 hover:-translate-y-1 px-10 py-4 rounded-full font-bold text-lg transition-all tracking-wide focus:ring-2 focus:ring-offset-2 focus:ring-cream backdrop-blur-sm">
                        Explore Safaris
                    </button>
                </div>
            </div>
            <SafariQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </section>
    );
}

"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SafariQuiz = dynamic(() => import("./SafariQuiz"), { ssr: false });

const backgrounds = [
    "/images/lioness-at-the-serengeti-national-park-tanzania-2026-01-05-04-42-12-utc.webp",
    "/images/snow-on-top-of-mount-kilimanjaro-in-amboseli-2026-03-24-15-21-46-utc.webp",
    "/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp",
    "/images/hot-air-balloon-in-maasai-mara-national-reserve-k-2026-01-06-09-39-47-utc.webp",
];

const topics = [
    "The Great Migration",
    "Untamed Wilderness",
    "Serengeti Horizons",
    "Zanzibar Escapes"
];

export default function Hero() {
    const [currentBg, setCurrentBg] = useState(0);
    const [currentTopic, setCurrentTopic] = useState(0);
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 6000);
        return () => clearInterval(bgInterval);
    }, []);

    useEffect(() => {
        const topicInterval = setInterval(() => {
            setCurrentTopic((prev) => (prev + 1) % topics.length);
        }, 6000);
        return () => clearInterval(topicInterval);
    }, []);

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentBg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        className="absolute inset-0"
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 15, ease: "linear" }}
                    >
                        <Image
                            src={backgrounds[currentBg]}
                            alt=""
                            fill
                            className="object-cover object-center"
                            priority={currentBg === 0}
                            sizes="100vw"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Dark Overlay for Text Legibility */}
            <div className="absolute inset-0 z-10 bg-black/40" />

            <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center mt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex justify-center items-center gap-4 mb-6"
                >
                    <div className="w-16 h-[1px] bg-primary" />
                    <span className="font-[family-name:var(--font-script)] text-primary text-3xl md:text-4xl tracking-widest">
                        Curated Expeditions
                    </span>
                    <div className="w-16 h-[1px] bg-primary" />
                </motion.div>
                
                <div className="h-[120px] md:h-[160px] flex items-center justify-center mb-6">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentTopic}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-black uppercase tracking-widest drop-shadow-lg"
                        >
                            {topics[currentTopic]}
                        </motion.h1>
                    </AnimatePresence>
                </div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
                >
                    Experience the raw beauty of Tanzania with bespoke itineraries designed for the discerning traveler.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                >
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="bg-primary text-deep-brown hover:bg-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Design Your Journey
                    </button>
                    <a href="/safari" className="text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm border border-white/50 hover:bg-white hover:text-deep-brown transition-all backdrop-blur-sm w-full sm:w-auto text-center">
                        View Safaris
                    </a>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
                    <motion.div 
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
            
            <SafariQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </section>
    );
}

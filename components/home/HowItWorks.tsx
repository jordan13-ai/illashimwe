"use client";

import { howItWorksSteps } from "@/data/homepage";
import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    return (
        <section className="bg-cream py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-safari-green text-sm font-bold tracking-widest uppercase mb-4 block"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-molot font-black text-deep-brown"
                    >
                        Your Journey Begins Here
                    </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] z-0">
                        <div className="w-full h-full bg-deep-brown/10 dashed-line"></div>
                    </div>

                    {howItWorksSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex-1 flex flex-col items-center text-center relative z-10 group"
                        >
                            <div className="w-32 h-32 relative mb-8 flex items-center justify-center">
                                {/* Decorative rings */}
                                <div className="absolute inset-0 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"></div>
                                <div className="absolute inset-2 border border-dashed border-deep-brown/20 rounded-full group-hover:rotate-90 transition-transform duration-700 ease-out"></div>

                                <span className="material-symbols-outlined text-5xl text-safari-green relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </span>

                                {/* Step Number Badge */}
                                <div className="absolute -top-1 -right-1 w-8 h-8 bg-safari-green rounded-full flex items-center justify-center text-cream font-serif font-bold text-sm shadow-sm border-2 border-cream">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="font-serif font-bold text-2xl text-deep-brown mb-4 group-hover:text-safari-green transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-deep-brown/70 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Connector Line */}
                <div className="md:hidden absolute top-[300px] bottom-[100px] left-1/2 w-[2px] bg-deep-brown/10 -ml-[1px] -z-10"></div>
            </div>

            <style jsx>{`
                .dashed-line {
                    background-image: linear-gradient(to right, currentColor 50%, transparent 50%);
                    background-size: 20px 100%;
                }
            `}</style>
        </section>
    );
}

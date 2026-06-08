"use client";

import { howItWorksSteps } from "@/data/homepage";
import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    return (
        <section className="bg-[#FDFCF8] py-32 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-4 mb-4"
                    >
                        <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                            How It Works
                        </span>
                        <div className="w-12 h-[1px] bg-primary"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-serif font-black text-deep-brown uppercase tracking-tight"
                    >
                        Your Journey Begins
                    </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] z-0">
                        <div className="w-full h-full bg-deep-brown/20 dashed-line"></div>
                    </div>

                    {howItWorksSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex-1 flex flex-col items-center text-center relative z-10 group cursor-default"
                        >
                            <div className="w-32 h-32 relative mb-10 flex items-center justify-center">
                                {/* Decorative rings */}
                                <div className="absolute inset-0 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-700 ease-out border border-deep-brown/5"></div>
                                <div className="absolute inset-3 border border-deep-brown/10 rounded-full group-hover:rotate-180 transition-transform duration-[1.5s] ease-out"></div>

                                <span className="material-symbols-outlined text-4xl text-deep-brown/40 group-hover:text-primary relative z-10 transition-colors duration-500">
                                    {step.icon}
                                </span>

                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg shadow-md border-4 border-[#FDFCF8]">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="font-serif font-bold text-2xl text-deep-brown mb-4 group-hover:text-primary transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed px-4 font-light text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Connector Line */}
                <div className="md:hidden absolute top-[300px] bottom-[100px] left-1/2 w-[1px] bg-deep-brown/20 -ml-[0.5px] -z-10 dashed-line-vertical"></div>
            </div>

            <style jsx>{`
                .dashed-line {
                    background-image: linear-gradient(to right, currentColor 50%, transparent 50%);
                    background-size: 16px 100%;
                }
                .dashed-line-vertical {
                    background-image: linear-gradient(to bottom, currentColor 50%, transparent 50%);
                    background-size: 100% 16px;
                }
            `}</style>
        </section>
    );
}

"use client";

import { whyChooseItems } from "@/data/homepage";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChoose() {
    return (
        <section className="relative py-24 px-6 md:px-0 bg-deep-brown text-cream overflow-hidden">
            {/* Texture Background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url('/why_choose_bg_texture_1768492250010.webp')", backgroundSize: "cover" }}
            ></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Col: Sticky image or main visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-x-1 border-4 border-white/5">
                            <Image
                                src="/safari_guide_portrait_1768492265746.webp"
                                alt="Expert Guide"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <p className="font-[family-name:var(--font-script)] text-primary text-4xl mb-2">Authentic</p>
                                <h3 className="text-3xl font-bold uppercase tracking-tight">Connections</h3>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4"></div>
                    </motion.div>

                    {/* Right Col: Grid of features */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <p className="font-[family-name:var(--font-script)] text-primary text-5xl mb-2">The Illashimwe</p>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight font-molot text-cream">Difference</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {whyChooseItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-6 p-6 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-white/5 hover:border-primary/20"
                                >
                                    <div className="shrink-0 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <span className="material-symbols-outlined text-3xl text-primary group-hover:text-deep-brown">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 text-cream group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-cream/60 leading-relaxed group-hover:text-cream/80 transition-colors text-base">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

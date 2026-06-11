import { ACCOMMODATIONS } from "@/data/accommodations";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Accommodation() {
    return (
        <section className="bg-white py-32 px-6 md:px-12 text-deep-brown">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <div className="max-w-2xl anim-fade-up">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-primary" />
                            <p className="font-[family-name:var(--font-script)] text-primary text-4xl lg:text-5xl">
                                Rest in Comfort
                            </p>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight text-deep-brown leading-none mb-6">
                            Hand-Picked <br /> Lodges
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light">
                            We have curated a selection of the finest accommodations, from luxury tented camps to heritage lodges, ensuring your nights are as magical as your days.
                        </p>
                    </div>

                    <div className="anim-fade-right anim-delay-2">
                        <Link href="/accommodations" className="group flex items-center justify-center gap-3 bg-transparent border border-gray-200 text-deep-brown px-8 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-sm hover:border-primary hover:text-primary transform hover:-translate-y-1">
                            All Accommodations <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {ACCOMMODATIONS.slice(0, 3).map((lodge, index) => (
                        <div
                            key={lodge.id}
                            className="anim-fade-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Link href={`/accommodations/${lodge.slug}`} className="group block">
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src={lodge.image}
                                        alt={lodge.name}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-deep-brown tracking-[0.2em] uppercase shadow-sm">
                                        {lodge.priceRange}
                                    </div>

                                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg text-primary">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-2">{lodge.location}</p>
                                            <h3 className="text-3xl font-serif font-bold text-deep-brown group-hover:text-primary transition-colors duration-300 leading-tight">
                                                {lodge.name}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {lodge.features.slice(0, 2).map((feature, idx) => (
                                            <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { experiences } from "@/data/homepage";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Experiences() {
    return (
        <section className="bg-deep-brown py-32 px-6 overflow-hidden text-white relative">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-[1400px] relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-4 mb-6 anim-fade-up">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span className="font-[family-name:var(--font-script)] text-primary text-3xl md:text-4xl">
                            Tailored for you
                        </span>
                        <div className="w-12 h-[1px] bg-primary" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.1] mb-8 anim-fade-up anim-delay-1">
                        Choose your <br className="hidden md:block"/> <span className="text-white">Experience</span>
                    </h2>

                    <p className="text-white/70 text-lg leading-relaxed font-light mx-auto anim-fade-up anim-delay-2">
                        Discover thrilling adventures, cultural tours and serene getaways in Tanzania, Kilimanjaro and Zanzibar. Tailor your journey for unforgettable memories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={exp.id}
                            className="anim-fade-up"
                            style={{ animationDelay: `${idx * 120}ms` }}
                        >
                            <Link
                                href={
                                    exp.id === "safaris" ? "/safari" :
                                    exp.id === "migration" ? "/destinations/serengeti" :
                                    exp.id === "beach" ? "/destinations/zanzibar" :
                                    exp.id === "trekking" ? "/kilimanjaro" : "#"
                                }
                                className="group block h-[500px] relative rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={exp.image}
                                    alt={exp.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <ArrowUpRight className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-black text-white tracking-wide mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                                        {exp.title}
                                    </h3>
                                    <div className="w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-12" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

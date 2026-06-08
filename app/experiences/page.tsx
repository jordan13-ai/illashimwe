import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXPERIENCES_GENERAL, EXPERIENCE_TYPES } from "@/data/experiences";

export const metadata: Metadata = {
    title: "Experiences | Illashimwe Adventure",
    description: "Discover curated travel experiences in Tanzania. Balloon safaris, cultural tours, walking safaris, and honeymoons.",
};

export default function ExperiencesPage() {
    const data = EXPERIENCES_GENERAL.overview;

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={data.image}
                    alt="Tanzania Experiences"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase">
                        Beyond the Drive
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
                        CURATED<br />EXPERIENCES
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </div>

            {/* Intro Content */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Immerse Yourself</h2>
                    <div
                        className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </div>
            </section>

            {/* Experience Types Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EXPERIENCE_TYPES.map((exp) => (
                            <Link href={`/experiences/${exp.slug}`} key={exp.slug} className="group flex flex-col h-full bg-[#F5F5F0] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="font-molot text-2xl">{exp.title}</h3>
                                    </div>
                                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                                        <span className="material-symbols-outlined">{exp.icon}</span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                                        {exp.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                        Discover <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-deep-brown relative overflow-hidden text-center px-6">
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="font-molot text-4xl md:text-5xl text-white mb-8">
                        Design Your Journey
                    </h2>
                    <p className="text-lg text-white/80 mb-10 font-light leading-relaxed">
                        Combine these experiences into a bespoke itinerary.
                    </p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-xl px-12 py-8 rounded-full shadow-lg">
                            Start Planning
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

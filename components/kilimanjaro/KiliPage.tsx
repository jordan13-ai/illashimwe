"use client";

import { KiliPageData } from "@/data/kilimanjaro";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mountain, MapPin, Clock, Trophy } from "lucide-react";

export default function KiliPages({ data }: { data: KiliPageData }) {
    if (!data) return <div className="pt-32 text-center">Page not found</div>;

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a231a] via-transparent to-black/20" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-white max-w-7xl mx-auto z-10">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/90 text-deep-brown text-xs font-bold uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
                            <Mountain className="w-3 h-3" /> Kilimanjaro Expedition
                        </span>
                        <h1 className="font-molot text-4xl md:text-6xl mb-6 text-shadow-xl text-white leading-tight">
                            {data.title}
                        </h1>
                        {data.subtitle && (
                            <p className="text-xl md:text-2xl font-light text-cream/90 max-w-3xl leading-relaxed">
                                {data.subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick Stats Bar */}
            {data.stats && (
                <div className="bg-white border-b border-gray-100 shadow-sm relative z-20">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                            {data.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        {/* Icon based on label logic or generic */}
                                        {stat.label.includes("Duration") ? <Clock className="w-5 h-5" /> :
                                            stat.label.includes("Success") ? <Trophy className="w-5 h-5" /> :
                                                stat.label.includes("Location") ? <MapPin className="w-5 h-5" /> :
                                                    <Check className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                                        <p className="text-lg md:text-xl font-molot text-deep-brown leading-none">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 text-deep-brown">

                {/* Left Column: Content */}
                <div className="lg:col-span-8 space-y-12">

                    {/* Description / Content */}
                    <div className="prose prose-lg prose-headings:font-molot prose-headings:text-deep-brown prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-deep-brown max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>

                    {/* Gallery Section */}
                    {data.gallery && (
                        <div className="space-y-8 pt-12 border-t border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-molot text-3xl text-deep-brown">Expedition Gallery</h3>
                                <div className="h-px flex-1 bg-gray-200 ml-8"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px]">
                                {data.gallery.map((img, idx) => (
                                    <div key={idx} className={cn(
                                        "relative rounded-2xl overflow-hidden shadow-md group cursor-pointer",
                                        idx === 0 ? "md:col-span-2 md:row-span-2 md:h-[500px]" : ""
                                    )}>
                                        <Image
                                            src={img}
                                            alt={`Gallery ${idx}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Inclusions Section */}
                    {data.inclusions && (
                        <div className="bg-[#2F3E2E] text-cream p-10 rounded-3xl relative overflow-hidden">
                            {/* Texture */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('/noise.webp')" }}></div>

                            <h3 className="font-molot text-3xl mb-8 relative z-10 text-cream">What&apos;s Included</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10 text-cream/90">
                                {data.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="w-5 h-5 mt-1 rounded-full bg-primary flex items-center justify-center text-deep-brown shrink-0">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <span className="text-lg font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Day-by-Day Itinerary */}
                    {data.dayByDay && (
                        <div className="space-y-8 pt-6">
                            <h3 className="font-molot text-3xl text-deep-brown mb-6">Day-by-Day Itinerary</h3>
                            <div className="space-y-0 relative border-l-2 border-primary/20 ml-3">
                                {data.dayByDay.map((day, idx) => (
                                    <div key={idx} className="relative pl-10 pb-12 last:pb-0 group">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary group-hover:scale-125 transition-transform" />
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                                                {day.day}
                                            </span>
                                            <h4 className="font-molot text-xl text-deep-brown mb-3">{day.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">{day.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-32 space-y-8">

                        {/* CTA Card */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h3 className="font-molot text-2xl text-deep-brown mb-4">Book This Trek</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Secure your spot on the Roof of Africa. Our team handles all permits and logistics.
                            </p>

                            <Link href="/plan-trip" className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 mb-4">
                                Start Planning
                            </Link>

                            <div className="text-center">
                                <Link href="/contact" className="text-sm text-gray-400 hover:text-primary underline decoration-dotted underline-offset-4">
                                    Ask a Question First
                                </Link>
                            </div>
                        </div>

                        {/* Route Navigation */}
                        <div className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-200">
                            <h4 className="font-bold text-deep-brown uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" /> Explore Routes
                            </h4>
                            <nav className="space-y-1">
                                {[
                                    { name: "Machame Route", href: "/kilimanjaro/routes/machame", days: "6-7 Days" },
                                    { name: "Lemosho Route", href: "/kilimanjaro/routes/lemosho", days: "7-8 Days" },
                                    { name: "Marangu Route", href: "/kilimanjaro/routes/marangu", days: "5-6 Days" },
                                    { name: "Rongai Route", href: "/kilimanjaro/routes/rongai", days: "6-7 Days" },
                                    { name: "Northern Circuit", href: "/kilimanjaro/routes/northern-circuit", days: "9 Days" },
                                ].map((item) => (
                                    <Link key={item.name} href={item.href} className="group flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-deep-brown">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm">{item.name}</span>
                                            <span className="text-[10px] text-gray-400 font-medium tracking-wide">{item.days}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Help Box */}
                        <div className="bg-deep-brown rounded-3xl p-8 text-center text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                            <h4 className="font-molot text-xl mb-2 relative z-10">Need Expert Advice?</h4>
                            <p className="text-sm text-white/70 mb-6 relative z-10">Chat with our Kilimanjaro specialists directly on WhatsApp.</p>
                            <Link href="https://wa.me/255755310533" target="_blank" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-deep-brown text-white text-sm font-bold py-3 px-6 rounded-full transition-all border border-white/20 relative z-10">
                                Chat Now
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Schema Markup */}
                {data.schema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
                    />
                )}
            </div>
        </div>
    );
}

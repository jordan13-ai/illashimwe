import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { DAY_TRIPS } from "@/data/day-trips";

export const metadata: Metadata = {
    title: "Day Trips & Excursions | Illashimwe Adventure",
    description: "Explore Arusha and Moshi with our curated day trips. Waterfalls, hot springs, cultural tours, and short safaris.",
};

export default function DayTripsPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/images/mega-menu/chemka.webp"
                    alt="Day Trips"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase mb-4">
                        Short & Sweet
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        Day Adventures
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                        Discover the magic of Tanzania in just one day.
                    </p>
                </div>
            </div>

            {/* List */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DAY_TRIPS.map((trip) => (
                            <Link href={`/day-trips/${trip.slug}`} key={trip.slug} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={trip.image}
                                        alt={trip.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 text-deep-brown text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {trip.duration}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1 justify-between">
                                    <div>
                                        <h3 className="font-molot text-2xl text-deep-brown mb-2 group-hover:text-primary transition-colors">{trip.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {trip.highlights.slice(0, 2).map((h, i) => (
                                                <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {trip.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                        <span className="text-xl font-bold text-deep-brown">{trip.price}</span>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                            Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

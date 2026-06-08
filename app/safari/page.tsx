import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Map, ShieldCheck, Binoculars, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAFARI_GENERAL, SAFARI_PACKAGES } from "@/data/safari";

export const metadata: Metadata = {
    title: "Tanzania Safari Expeditions | Illashimwe Adventure",
    description: "Experience the ultimate African safari. Private tours to Serengeti, Ngorongoro, Tarangire, and more.",
};

export default function SafariLandingPage() {
    const data = SAFARI_GENERAL.overview;

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero Section */}
            <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={data.image}
                    alt="Tanzania Safari"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E2E] via-transparent to-black/20" />

                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase">
                        Wilderness Awaits
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
                        UNFORGETTABLE<br />SAFARIS
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-14 rounded-full">
                            View Itineraries
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white font-medium text-lg px-8 h-14 rounded-full">
                            Customize Trip
                        </Button>
                    </div>
                </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="relative z-20 -mt-20 max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Wildlife", value: "Big 5", icon: Binoculars, color: "text-amber-500" },
                        { label: "Transport", value: "4x4 Jeep", icon: Map, color: "text-green-600" },
                        { label: "Photography", value: "Expert", icon: Camera, color: "text-blue-500" },
                        { label: "Safety", value: "100%", icon: ShieldCheck, color: "text-purple-500" }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                            <div className={`p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors ${stat.color}`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <span className="text-3xl font-molot text-deep-brown">{stat.value}</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">The Illashimwe Way</h2>
                    <h3 className="font-molot text-3xl md:text-4xl text-deep-brown leading-tight">
                        More Than Just A Drive
                    </h3>
                    <div
                        className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </div>
            </section>

            {/* Featured Packages */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Curated For You</span>
                            <h2 className="font-molot text-3xl md:text-4xl text-deep-brown">Popular Safaris</h2>
                        </div>
                        <Link href="/safari/packages" className="hidden md:flex items-center gap-2 text-deep-brown font-bold hover:text-primary transition-colors">
                            View All Packages <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SAFARI_PACKAGES.map((pkg) => (
                            <Link href={`/safari/packages/${pkg.slug}`} key={pkg.slug} className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                                        {pkg.duration}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-molot text-white mb-2 leading-tight">{pkg.title}</h3>
                                    <p className="text-primary font-bold text-lg mb-3">{pkg.price} <span className="text-xs text-white/60 font-normal">/ person</span></p>
                                    <p className="text-gray-300 text-sm line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {pkg.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        Explore <ArrowRight className="w-4 h-4" />
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
                    <h2 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                        The Wild is Calling
                    </h2>
                    <p className="text-lg text-white/80 mb-10 font-light leading-relaxed">
                        Start planning your dream safari today. Our experts are ready to craft your perfect itinerary.
                    </p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-xl px-12 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all">
                            Start Planning
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

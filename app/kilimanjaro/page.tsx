import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Mountain, Trophy, CloudSun, ShieldCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Kilimanjaro Expeditions | Illashimwe Adventure",
    description: "The ultimate guide to climbing Mt. Kilimanjaro. Explore routes, packages, and expert advice for your summit success.",
};

const ROUTES = [
    {
        name: "Machame Route",
        slug: "machame",
        alt: "The Whiskey Route",
        days: "6-7 Days",
        difficulty: "High",
        traffic: "High",
        desc: "The most popular route known for its scenic value and great acclimatization.",
        img: "/images/mega-menu/machame-camp.webp"
    },
    {
        name: "Lemosho Route",
        slug: "lemosho",
        alt: "Most Scenic",
        days: "7-8 Days",
        difficulty: "Medium",
        traffic: "Medium",
        desc: "A beautiful, longer route approaching from the west with high success rates.",
        img: "/images/mega-menu/lemosho-scenic.webp"
    },
    {
        name: "Marangu Route",
        slug: "marangu",
        alt: "The Coca-Cola Route",
        days: "5-6 Days",
        difficulty: "Medium",
        traffic: "High",
        desc: "The only route with hut accommodation. Direct but lower success profile.",
        img: "/images/mega-menu/marangu-huts.webp"
    },
    {
        name: "Northern Circuit",
        slug: "northern-circuit",
        alt: "Grand Traverse",
        days: "9 Days",
        difficulty: "Medium",
        traffic: "Low",
        desc: "The newest and longest route offering the ultimate acclimatization experience.",
        img: "/images/mega-menu/kilimanjaro.webp"
    }
];

export default function KilimanjaroLandingPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero Section */}
            <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/images/mega-menu/kilimanjaro.webp"
                    alt="Mount Kilimanjaro Summit"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E2E] via-transparent to-black/30" />

                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase">
                        The Roof of Africa
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
                        CONQUER<br />KILIMANJARO
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        Journey to 5,895m with Tanzania&apos;s most trusted guides. Experience the adventure of a lifetime.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kilimanjaro/packages/standard">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-14 rounded-full">
                                Explore Packages
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white font-medium text-lg px-8 h-14 rounded-full">
                                Talk to an Expert
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="relative z-20 -mt-20 max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Success Rate", value: "98%", icon: Trophy, color: "text-amber-500" },
                        { label: "Expert Guides", value: "WFR Certified", icon: Mountain, color: "text-green-600" },
                        { label: "Safety Record", value: "100%", icon: ShieldCheck, color: "text-blue-500" },
                        { label: "Happy Climbers", value: "5,000+", icon: Calendar, color: "text-purple-500" }
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
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Why Climb With Us?</h2>
                    <h3 className="font-molot text-3xl md:text-4xl text-deep-brown leading-tight">
                        We Don&apos;t Just Guide You.<br />We Walk Every Step With You.
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        At Illashimwe Adventure, we believe that climbing Kilimanjaro is more than just reaching the summit. It&apos;s about the camaraderie, the breathtaking landscapes, and the safely guided journey. Our local guides know every stone and storm on the mountain, ensuring your safety is paramount while you focus on the achievement.
                    </p>
                </div>
            </section>

            {/* Route Showcase */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Choose Your Path</span>
                            <h2 className="font-molot text-3xl md:text-4xl text-deep-brown">Iconic Routes</h2>
                        </div>
                        <Link href="/kilimanjaro/overview" className="hidden md:flex items-center gap-2 text-deep-brown font-bold hover:text-primary transition-colors">
                            Compare All Routes <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ROUTES.map((route) => (
                            <Link href={`/kilimanjaro/routes/${route.slug}`} key={route.slug} className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer">
                                <Image
                                    src={route.img}
                                    alt={route.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                                        {route.days}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{route.alt}</span>
                                    <h3 className="text-2xl font-molot text-white mb-3">{route.name}</h3>
                                    <p className="text-gray-300 text-sm line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {route.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        View Itinerary <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Planning Hub (Bento Grid) */}
            <section className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Preparation</span>
                        <h2 className="font-molot text-3xl md:text-4xl text-deep-brown">Plan Your Expedition</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[500px]">
                        {/* Large Card */}
                        <Link href="/kilimanjaro/best-time" className="md:col-span-2 relative bg-white rounded-3xl p-10 overflow-hidden group border border-gray-200 hover:shadow-xl transition-all">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                        <CloudSun className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-molot text-2xl md:text-3xl text-deep-brown mb-4">Best Time to Climb</h3>
                                    <p className="text-gray-600 max-w-md text-lg leading-relaxed">Understanding the seasons is crucial. While you can climb year-round, the dry seasons offer the best views and highest success rates.</p>
                                </div>
                                <div className="flex items-center gap-3 text-deep-brown font-bold group-hover:gap-5 transition-all mt-8">
                                    Check Weather Guide <ArrowRight className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                            <Image
                                src="/images/mega-menu/kilimanjaro.webp"
                                alt="Weather"
                                width={400}
                                height={300}
                                className="absolute bottom-0 right-0 w-1/2 object-contain opacity-20 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0"
                            />
                        </Link>

                        {/* Stacked Small Cards */}
                        <div className="flex flex-col gap-6">
                            <Link href="/kilimanjaro/packing-list" className="flex-1 bg-deep-brown rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all">
                                                <div className="relative z-10">
                                    <h3 className="font-molot text-2xl text-white mb-2">Packing List</h3>
                                    <p className="text-white/70 text-sm mb-4 leading-relaxed">Gear up correctly for -20°C summit nights.</p>
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary rotate-45 group-hover:rotate-0 transition-transform">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>

                            <Link href="/kilimanjaro/safety" className="flex-1 bg-white rounded-3xl p-8 border border-gray-200 group hover:border-primary/50 transition-all hover:shadow-lg">
                                <h3 className="font-molot text-2xl text-deep-brown mb-2">Safety First</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Our WFR guides and evacuation protocols.</p>
                                <div className="text-primary font-bold text-sm flex items-center gap-2">
                                    Read Protocols <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-deep-brown relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                        Ready for the Challenge?
                    </h2>
                    <p className="text-lg text-white/80 mb-10 font-light leading-relaxed">
                        Let us build your custom itinerary. From route selection to gear rental, we handle every detail so you can focus on the climb.
                    </p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-xl px-12 py-8 rounded-full shadow-[0_0_20px_rgba(247,138,29,0.3)] hover:shadow-[0_0_30px_rgba(247,138,29,0.5)] transition-all transform hover:-translate-y-1">
                            Start Planning Your Climb
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

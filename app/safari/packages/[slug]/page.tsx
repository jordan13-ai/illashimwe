import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, MapPin, Users, Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAFARI_PACKAGES } from "@/data/safari";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return SAFARI_PACKAGES.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const pkg = SAFARI_PACKAGES.find((p) => p.slug === slug);

    if (!pkg) {
        return {
            title: "Safari Package Not Found",
        };
    }

    return {
        title: `${pkg.title} | Illashimwe Adventure`,
        description: pkg.description,
    };
}

export default async function SafariPackagePage({ params }: PageProps) {
    const { slug } = await params;
    const pkg = SAFARI_PACKAGES.find((p) => p.slug === slug);

    if (!pkg) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#FDFCF8]">
            {/* Immersive Hero */}
            <div className="relative h-[85vh] w-full flex items-end pb-24 justify-center overflow-hidden bg-deep-brown">
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 text-center max-w-5xl px-6 w-full">
                    <div className="flex justify-center gap-3 mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/90 text-white font-bold tracking-widest text-xs uppercase backdrop-blur-md">
                            <Clock className="w-3 h-3 mr-2" /> {pkg.duration}
                        </span>
                        {pkg.tag && (
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white font-bold tracking-widest text-xs uppercase backdrop-blur-md border border-white/20">
                                {pkg.tag}
                            </span>
                        )}
                    </div>

                    <h1 className="font-molot text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-8 drop-shadow-lg">
                        {pkg.title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed antialiased">
                        {pkg.description}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Content Column */}
                    <div className="lg:col-span-8 flex flex-col gap-16 pb-24">

                        {/* Highlights Grid */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                                <Star className="w-4 h-4" /> Trip Highlights
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {pkg.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <p className="text-deep-brown font-medium">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <h2 className="font-serif font-black text-4xl text-deep-brown mb-8">The Experience</h2>
                            <div
                                className="prose prose-lg prose-headings:font-serif prose-headings:text-deep-brown prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-strong:text-deep-brown prose-strong:font-bold max-w-none"
                                dangerouslySetInnerHTML={{ __html: pkg.overview }}
                            />
                        </div>

                        {/* Visual Divider */}
                        <hr className="border-gray-200" />

                        {/* Itinerary Timeline */}
                        <div>
                            <h2 className="font-serif font-black text-4xl text-deep-brown mb-12 flex items-center gap-4">
                                Daily Itinerary
                                <span className="text-lg font-light text-gray-400 font-sans normal-case ml-auto hidden md:block">Step-by-step journey</span>
                            </h2>
                            <div className="relative space-y-12 pl-8 md:pl-0">
                                {/* Vertical Line on Mobile */}
                                <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gray-200 md:hidden block" />

                                {pkg.itinerary.map((day, idx) => (
                                    <div key={idx} className="group md:grid md:grid-cols-12 gap-8 relative">

                                        {/* Day Marker (Desktop) */}
                                        <div className="col-span-3 hidden md:flex flex-col items-end text-right pt-2">
                                            <span className="text-3xl font-black text-gray-200 group-hover:text-primary transition-colors duration-300 font-molot">
                                                {day.day}
                                            </span>
                                        </div>

                                        {/* Timeline Dot (Mobile & Desktop alignment) */}
                                        <div className="absolute -left-[33px] md:relative md:left-0 md:col-span-1 flex justify-center pt-3">
                                            <div className="w-4 h-4 rounded-full bg-white border-4 border-gray-300 md:group-hover:border-primary transition-colors z-10 shadow-sm" />
                                            {/* Connecting Line Desktop */}
                                            {idx !== pkg.itinerary.length - 1 && (
                                                <div className="absolute top-8 bottom-[-48px] w-0.5 bg-gray-200 hidden md:block" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="md:col-span-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                                            <span className="md:hidden text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{day.day}</span>
                                            <h3 className="font-serif font-bold text-xl text-deep-brown mb-4">{day.title}</h3>
                                            <p className="text-gray-600 leading-relaxed font-light">{day.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Divider */}
                        <hr className="border-gray-200" />

                        {/* Inclusions / Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#F6FCEF] p-8 rounded-3xl">
                                <h3 className="font-bold text-deep-brown mb-6 flex items-center gap-3 text-lg uppercase tracking-wide">
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm"><Check className="w-4 h-4" /></div>
                                    Included
                                </h3>
                                <ul className="space-y-4">
                                    {pkg.inclusions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                            <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#FEF2F2] p-8 rounded-3xl">
                                <h3 className="font-bold text-deep-brown mb-6 flex items-center gap-3 text-lg uppercase tracking-wide">
                                    <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center shadow-sm"><X className="w-4 h-4" /></div>
                                    Excluded
                                </h3>
                                <ul className="space-y-4">
                                    {pkg.exclusions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                            <X className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Gallery Grid */}
                        {pkg.gallery && pkg.gallery.length > 0 && (
                            <div>
                                <h2 className="font-serif font-black text-4xl text-deep-brown mb-10">Visual Journey</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {pkg.gallery.map((img, idx) => (
                                        <div key={idx} className={`relative rounded-3xl overflow-hidden shadow-lg group ${idx === 0 ? 'md:col-span-2 h-[400px]' : 'h-[300px]'}`}>
                                            <Image
                                                src={img}
                                                alt={`${pkg.title} ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Right Sticky Sidebar */}
                    <div className="lg:col-span-4 relative">
                        <div className="lg:sticky lg:top-8 flex flex-col gap-6">

                            {/* Booking Card */}
                            <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-safari-green/5 rounded-full blur-3xl -mr-10 -mt-10" />

                                <div className="relative z-10">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Starting From</p>
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-4xl font-serif font-black text-safari-green">{pkg.price}</span>
                                        <span className="text-gray-400 font-light">/ person</span>
                                    </div>

                                    <div className="space-y-6 mb-8 border-y border-gray-100 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-deep-brown/5 flex items-center justify-center text-deep-brown">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Availability</p>
                                                <p className="font-bold text-deep-brown">Daily Departures</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-deep-brown/5 flex items-center justify-center text-deep-brown">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Group Style</p>
                                                <p className="font-bold text-deep-brown">Private & Exclusive</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-deep-brown/5 flex items-center justify-center text-deep-brown">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Starts/Ends</p>
                                                <p className="font-bold text-deep-brown">Arusha/Kilimanjaro</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/plan-trip" className="block w-full">
                                        <Button className="w-full bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg py-7 h-auto rounded-xl shadow-[0_10px_30px_rgba(247,138,29,0.25)] hover:shadow-[0_10px_40px_rgba(247,138,29,0.4)] transition-all transform hover:-translate-y-1">
                                            Request Quote <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>

                                    <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
                                        No payment required today. Get a customized plan from our travel experts.
                                    </p>
                                </div>
                            </div>

                            {/* Help Card */}
                            <div className="bg-deep-brown p-8 rounded-[2rem] text-white relative overflow-hidden">
                                <div className="relative z-10 text-center">
                                    <h3 className="font-molot text-xl mb-3">Need Help Planning?</h3>
                                    <p className="text-white/70 text-sm mb-6 font-light">
                                        Not sure if this is the right safari for you? Talk to our local experts.
                                    </p>
                                    <Link href="/contact">
                                        <Button variant="outline" className="w-full border-white/20 hover:bg-white hover:text-deep-brown text-white bg-transparent">
                                            Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Related Packages */}
            <div className="bg-white border-t border-gray-100 py-24 relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="font-serif font-black text-4xl text-deep-brown">Related Itineraries</h2>
                        <Link href="/safari/packages" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-deep-brown transition-colors">
                            View All <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SAFARI_PACKAGES.filter((p) => 
                            p.slug !== pkg.slug && 
                            (p.categories?.some(c => pkg.categories?.includes(c)) || false)
                        ).slice(0, 3).concat(
                            SAFARI_PACKAGES.filter(p => 
                                p.slug !== pkg.slug && 
                                !(p.categories?.some(c => pkg.categories?.includes(c)) || false)
                            ).slice(0, 3)
                        ).slice(0, 3).map((relatedPkg) => (
                            <Link href={`/safari/packages/${relatedPkg.slug}`} key={relatedPkg.slug} className="group flex flex-col bg-[#FDFCF8] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={relatedPkg.image}
                                        alt={relatedPkg.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 text-deep-brown text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                        {relatedPkg.duration}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 justify-between">
                                    <div>
                                        <h3 className="font-molot text-xl text-deep-brown mb-2 group-hover:text-primary transition-colors">{relatedPkg.title}</h3>
                                        <p className="text-primary font-bold text-lg mb-4">{relatedPkg.price} <span className="text-xs text-gray-400 font-normal">/ person</span></p>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                        View Detail <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link href="/safari/packages">
                            <Button variant="outline" className="w-full border-gray-200 text-deep-brown">
                                View All Itineraries
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Sticky Mobile Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-safe">
                <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase">Total Price</span>
                    <span className="text-xl font-serif font-black text-safari-green">{pkg.price}</span>
                </div>
                <Link href="/plan-trip">
                    <Button className="bg-primary text-deep-brown font-bold rounded-full px-6">
                        Book Now
                    </Button>
                </Link>
            </div>
        </div>
    );
}

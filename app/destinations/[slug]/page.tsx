import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_DESTINATIONS } from "@/data/destinations";
import { SAFARI_PACKAGES } from "@/data/safari";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return ALL_DESTINATIONS.map((dest) => ({
        slug: dest.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const dest = ALL_DESTINATIONS.find((d) => d.slug === slug);

    if (!dest) {
        return {
            title: "Destination Not Found",
        };
    }

    return {
        title: dest.metaTitle || `${dest.title} | Illashimwe Adventure`,
        description: dest.metaDescription || dest.description,
    };
}

export default async function DestinationPage({ params }: PageProps) {
    const { slug } = await params;
    const dest = ALL_DESTINATIONS.find((d) => d.slug === slug);

    if (!dest) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* JSON-LD Schema */}
            {dest.faq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(dest.faq) }}
                />
            )}

            {/* Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="font-molot text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
                        {dest.title}
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
                        {dest.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto">
                    {/* Best For Section */}
                    {dest.bestFor && (
                        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl mb-12 text-center">
                            <span className="text-sm uppercase tracking-widest text-primary font-bold block mb-2">Best For</span>
                            <p className="text-deep-brown font-medium text-lg">{dest.bestFor}</p>
                        </div>
                    )}

                    <p className="text-xl text-deep-brown font-medium mb-12 leading-relaxed">
                        {dest.description}
                    </p>

                    {/* Content */}
                    {dest.content && <div dangerouslySetInnerHTML={{ __html: dest.content }} />}

                    {/* Highlights */}
                    <div className="my-16">
                        <h3 className="font-molot text-2xl text-deep-brown mb-6">Experience Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {dest.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check className="w-4 h-4 text-primary font-bold" />
                                    </span>
                                    <span className="font-medium text-gray-700">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    {dest.gallery && (
                        <div className="my-16">
                            <h3 className="font-molot text-2xl text-deep-brown mb-6">Gallery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {dest.gallery.map((img, idx) => (
                                    <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
                                        <Image
                                            src={img}
                                            alt={`${dest.title} ${idx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ */}
                    {dest.faq && (
                        <div className="my-16">
                            <h3 className="font-molot text-2xl text-deep-brown mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {dest.faq.mainEntity.map((q, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-deep-brown mb-2">{q.name}</h4>
                                        <p className="text-gray-600 text-sm">{q.acceptedAnswer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Itineraries */}
            {(() => {
                const destinationPackages = SAFARI_PACKAGES.filter(pkg => 
                    pkg.title.toLowerCase().includes(dest.slug.toLowerCase()) || 
                    pkg.title.toLowerCase().includes(dest.title.toLowerCase()) ||
                    pkg.description.toLowerCase().includes(dest.title.toLowerCase()) || 
                    pkg.overview.toLowerCase().includes(dest.title.toLowerCase()) ||
                    pkg.itinerary.some(day => day.title.toLowerCase().includes(dest.title.toLowerCase()) || day.description.toLowerCase().includes(dest.title.toLowerCase()))
                );

                if (destinationPackages.length === 0) return null;

                return (
                    <section className="bg-[#FDFCF8] py-24 px-6 border-t border-gray-100">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="flex flex-col items-center mb-16 text-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-[1px] bg-primary" />
                                    <p className="font-[family-name:var(--font-script)] text-primary text-3xl md:text-4xl">
                                        Continue Exploring
                                    </p>
                                    <div className="w-12 h-[1px] bg-primary" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tight text-deep-brown">
                                    {dest.title} Itineraries
                                </h2>
                            </div>

                            <div className="relative w-full">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                                `}} />
                                <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 hide-scrollbar px-4 md:px-8">
                                    {destinationPackages.slice(0, 6).map((pkg) => (
                                        <Link href={`/safari/packages/${pkg.slug}`} key={pkg.slug} className="group flex flex-col bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden border border-gray-100 min-w-[85vw] md:min-w-[420px] max-w-[420px] snap-start shrink-0">
                                            {/* Image Section */}
                                            <div className="relative h-[300px] w-full overflow-hidden">
                                                <Image
                                                    src={pkg.image}
                                                    alt={pkg.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                
                                                {/* Tags */}
                                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                                    {pkg.tag && (
                                                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                                            {pkg.tag}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute top-6 right-6">
                                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-white">
                                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5 text-right">From</p>
                                                        <p className="font-serif font-black text-lg text-deep-brown">{pkg.price}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                                <div className="flex items-center gap-6 mb-6">
                                                    <div className="flex items-center gap-2 text-gray-500">
                                                        <Clock className="w-4 h-4 text-primary" />
                                                        <span className="text-xs font-bold uppercase tracking-widest">{pkg.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-500">
                                                        <MapPin className="w-4 h-4 text-primary" />
                                                        <span className="text-xs font-bold uppercase tracking-widest">Tanzania</span>
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-deep-brown group-hover:text-primary transition-colors duration-300 leading-tight mb-4">
                                                    {pkg.title}
                                                </h3>
                                                
                                                <p className="text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                                                    {pkg.description}
                                                </p>

                                                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                                                    <span className="text-xs font-bold text-deep-brown uppercase tracking-[0.2em] group-hover:text-primary transition-colors flex items-center gap-2">
                                                        View Itinerary
                                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 text-gray-400">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })()}

            {/* CTA */}
            <section className="py-24 bg-[#F5F5F0]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="p-12 md:p-16 bg-white rounded-[3rem] shadow-xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20" />
                        <div className="relative z-10">
                            <h2 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-deep-brown mb-6">
                                Ready to go?
                            </h2>
                            <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto font-light leading-relaxed">
                                Start planning your trip to {dest.title} today. Let our experts craft the perfect bespoke journey for you.
                            </p>
                            <Link href="/plan-trip">
                                <Button className="bg-deep-brown hover:bg-primary text-white font-bold text-sm uppercase tracking-widest px-10 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                    Plan My Trip <ArrowRight className="ml-3 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

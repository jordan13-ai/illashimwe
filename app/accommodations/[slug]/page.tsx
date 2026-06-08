import { ACCOMMODATIONS } from "@/data/accommodations";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrustBar from "@/components/home/TrustBar";
import FinalCTA from "@/components/home/FinalCTA";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return ACCOMMODATIONS.map((accommodation) => ({
        slug: accommodation.slug,
    }));
}

export default async function AccommodationDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const lodge = ACCOMMODATIONS.find((acc) => acc.slug === slug);

    if (!lodge) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-deep-brown">
                <Image
                    src={lodge.image}
                    alt={lodge.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white max-w-7xl mx-auto">
                    <Link href="/accommodations" className="inline-flex items-center text-sm font-bold uppercase tracking-widest mb-4 hover:text-safari-green transition-colors">
                        ← Back to Accommodations
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-serif font-black mb-2">
                        {lodge.name}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 font-medium">
                        {lodge.location}
                    </p>
                </div>
            </div>

            <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-deep-brown mb-6">Overview</h2>
                            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                                {lodge.longDescription || lodge.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {lodge.gallery && lodge.gallery.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-deep-brown mb-6">Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {lodge.gallery.map((img, idx) => (
                                        <div key={idx} className={`relative rounded-xl overflow-hidden ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}>
                                            <Image
                                                src={img}
                                                alt={`${lodge.name} gallery image ${idx + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-8">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Price Range</span>
                                    <div className="text-2xl font-bold text-safari-green">{lodge.priceRange}</div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Rating</span>
                                    <div className="flex items-center justify-end text-orange-400 font-bold text-xl">
                                        ★ {lodge.rating}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mb-8">
                                <h4 className="font-bold text-deep-brown mb-4 uppercase text-sm tracking-wider">Amenities & Features</h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {lodge.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-safari-green rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="block w-full text-center bg-deep-brown text-white py-4 rounded-lg font-bold hover:bg-deep-brown/90 transition-all">
                                Book this Lodge
                            </Link>
                            <p className="text-center text-xs text-gray-400 mt-4">
                                Check availability and customized rates
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />
            <FinalCTA />
        </main>
    );
}

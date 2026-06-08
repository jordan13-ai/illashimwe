import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_DESTINATIONS } from "@/data/destinations";

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

                {/* CTA */}
                <div className="mt-16 p-8 bg-white rounded-3xl shadow-lg border border-gray-100 text-center">
                    <h2 className="font-molot text-3xl text-deep-brown mb-4">Ready to go?</h2>
                    <p className="text-gray-600 mb-8">Start planning your trip to {dest.title} today.</p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-12 rounded-full">
                            Plan My Trip <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

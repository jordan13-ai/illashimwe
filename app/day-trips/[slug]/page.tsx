import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DAY_TRIPS } from "@/data/day-trips";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return DAY_TRIPS.map((trip) => ({
        slug: trip.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const trip = DAY_TRIPS.find((t) => t.slug === slug);

    if (!trip) {
        return {
            title: "Day Trip Not Found",
        };
    }

    return {
        title: `${trip.title} | Illashimwe Adventure`,
        description: trip.description,
    };
}

export default async function DayTripPage({ params }: PageProps) {
    const { slug } = await params;
    const trip = DAY_TRIPS.find((t) => t.slug === slug);

    if (!trip) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2 w-fit mx-auto">
                        <Clock className="w-4 h-4" /> {trip.duration}
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        {trip.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto text-center">
                    <p className="text-xl text-deep-brown font-medium mb-12 leading-relaxed">
                        {trip.description}
                    </p>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left mb-12">
                        <h3 className="font-molot text-2xl text-deep-brown mb-6">Highlights</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {trip.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                        <Check className="w-3 h-3" />
                                    </span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 p-8 bg-deep-brown rounded-3xl shadow-lg border border-gray-100 text-center text-white">
                    <h2 className="font-molot text-3xl mb-4">Book This Trip</h2>
                    <p className="text-white/80 mb-8 max-w-md mx-auto">
                        Experience {trip.title} for just <span className="font-bold text-primary">{trip.price}</span> per person.
                    </p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-12 rounded-full">
                            Book Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

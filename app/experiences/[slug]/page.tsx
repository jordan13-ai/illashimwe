import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXPERIENCE_TYPES } from "@/data/experiences";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return EXPERIENCE_TYPES.map((exp) => ({
        slug: exp.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const exp = EXPERIENCE_TYPES.find((e) => e.slug === slug);

    if (!exp) {
        return {
            title: "Experience Not Found",
        };
    }

    return {
        title: `${exp.title} | Illashimwe Adventure`,
        description: exp.description,
    };
}

export default async function ExperiencePage({ params }: PageProps) {
    const { slug } = await params;
    const exp = EXPERIENCE_TYPES.find((e) => e.slug === slug);

    if (!exp) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        {exp.title}
                    </h1>
                    <span className="material-symbols-outlined text-4xl text-white/80">
                        {exp.icon}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto text-center">
                    <p className="text-xl text-deep-brown font-medium mb-8 leading-relaxed">
                        {exp.description}
                    </p>
                    <p>
                        Immerse yourself in the magic of Tanzania with our specialized {exp.title} experiences.
                        We curate every detail to ensure your journey is authentic, safe, and unforgettable.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-16 p-8 bg-white rounded-3xl shadow-lg border border-gray-100 text-center">
                    <h2 className="font-molot text-3xl text-deep-brown mb-4">Interested in this experience?</h2>
                    <p className="text-gray-600 mb-8">Add this to your custom itinerary.</p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-12 rounded-full">
                            Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

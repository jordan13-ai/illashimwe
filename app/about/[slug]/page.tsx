import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_PAGES } from "@/data/about";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(ABOUT_PAGES).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = ABOUT_PAGES[slug];

    if (!page) {
        return {
            title: "About Us",
        };
    }

    return {
        title: `${page.title} | Illashimwe Adventure`,
        description: page.description,
    };
}

export default async function AboutSubPage({ params }: PageProps) {
    const { slug } = await params;
    const page = ABOUT_PAGES[slug];

    if (!page) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase mb-6">
                        About Us
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        {page.title}
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                        {page.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div
                    className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto"
                    dangerouslySetInnerHTML={{ __html: page.content }}
                />

                {/* CTA */}
                <div className="mt-16 p-8 bg-white rounded-3xl shadow-lg border border-gray-100 text-center">
                    <h2 className="font-molot text-3xl text-deep-brown mb-4">Join Our Family</h2>
                    <p className="text-gray-600 mb-8">Let us show you the real Tanzania.</p>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-12 rounded-full">
                            Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAFARI_CATEGORIES } from "@/data/safari-categories";
import { SAFARI_PACKAGES } from "@/data/safari";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return SAFARI_CATEGORIES.map((cat) => ({
        slug: cat.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const cat = SAFARI_CATEGORIES.find((c) => c.slug === slug);

    if (!cat) {
        return {
            title: "Safari Category Not Found",
        };
    }

    return {
        title: `${cat.title} | Illashimwe Adventure`,
        description: cat.description,
    };
}

export default async function SafariCategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const cat = SAFARI_CATEGORIES.find((c) => c.slug === slug);

    if (!cat) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-bold tracking-widest text-sm uppercase mb-6">
                        Safari Style
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        {cat.title}
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                        {cat.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div
                    className="prose prose-lg prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed mx-auto mb-20"
                    dangerouslySetInnerHTML={{ __html: cat.content }}
                />

                {/* Gallery */}
                {cat.gallery && (
                    <div className="mb-20">
                        <h3 className="font-molot text-3xl text-deep-brown text-center mb-10">Visualizing the Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cat.gallery.map((img, idx) => (
                                <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
                                    <Image
                                        src={img}
                                        alt={`${cat.title} ${idx + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Packages filtered by category slug */}
                <h3 className="font-molot text-3xl text-deep-brown text-center mb-10">Our {cat.title} Itineraries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {SAFARI_PACKAGES.filter(pkg => pkg.categories?.includes(cat.slug)).map((pkg) => (
                        <Link href={`/safari/packages/${pkg.slug}`} key={pkg.slug} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 text-deep-brown text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                    {pkg.duration}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-molot text-2xl text-deep-brown mb-2 group-hover:text-primary transition-colors">{pkg.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{pkg.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>


                {/* CTA */}
                <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 text-center">
                    <h2 className="font-molot text-3xl text-deep-brown mb-4">Plan Your {cat.title}</h2>
                    <p className="text-gray-600 mb-8">Contact our experts to tailor this exact experience for you.</p>
                    <Link href="/plan-trip">
                        <Button className="bg-primary hover:bg-primary/90 text-deep-brown font-bold text-lg px-8 h-12 rounded-full">
                            Start Planning <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Image from 'next/image';


interface ResourcePageLayoutProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    children: React.ReactNode;
}

export default function ResourcePageLayout({
    title,
    subtitle,
    backgroundImage = "/natural_safari_hero.webp",
    children
}: ResourcePageLayoutProps) {
    return (
        <main className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Using a placeholder or the provided background */}
                    {/* If we don't have a reliable image for every page, we can use a dark pattern or specific images if available. 
                       For now, relying on the prop or a default. */}
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
                    <h1 className="font-molot text-5xl md:text-7xl mb-6 tracking-wide">{title}</h1>
                    {subtitle && (
                        <p className="font-serif text-xl md:text-2xl text-cream/90 italic">
                            {subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg -mt-32 relative z-20 rounded-lg">
                    <div className="rich-text">
                        {children}
                    </div>
                </div>
            </section>
        </main>
    );
}

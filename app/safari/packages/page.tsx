import Image from "next/image";
import { Metadata } from "next";
import SafariPackagesClient from "./SafariPackagesClient";

export const metadata: Metadata = {
    title: "Safari Packages | Illashimwe Adventure",
    description: "Browse our range of Tanzania safari packages. From short tours to luxury honeymoons and migration safaris.",
};

export default function SafariPackagesListPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero */}
            <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/images/mega-menu/migration.webp"
                    alt="Safari Packages"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
                        Safari Itineraries
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                        Your gateway to the African wilderness.
                    </p>
                </div>
            </div>

            <SafariPackagesClient />
        </div>
    );
}

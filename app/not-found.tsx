import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A2E1A]">
            <Image
                src="/hero_serengeti_migration_1768491216654.webp"
                alt="Serengeti plains"
                fill
                className="object-cover opacity-30"
                priority
                sizes="100vw"
            />
            <div className="relative z-10 text-center px-6 max-w-2xl">
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6">
                    Page Not Found
                </p>
                <h1 className="font-molot text-[120px] md:text-[180px] leading-none text-white/10 select-none mb-0 -mt-8">
                    404
                </h1>
                <h2 className="font-molot text-3xl md:text-5xl text-white mt-2 mb-6 leading-tight">
                    Lost in the Wilderness
                </h2>
                <p className="text-white/70 text-lg font-light mb-10 leading-relaxed">
                    This page has wandered off the trail. Let us guide you back to civilization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-primary text-white font-molot tracking-wider px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/contact"
                        className="border border-white/30 text-white font-bold tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

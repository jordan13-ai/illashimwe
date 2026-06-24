import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandQuote() {
    return (
        <section className="bg-deep-brown py-32 px-6 overflow-hidden text-cream relative">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">

                {/* Image Side */}
                <div className="relative h-[420px] md:h-[550px] lg:h-[750px] w-full max-w-md mx-auto lg:max-w-none rounded-t-[100px] md:rounded-t-[200px] lg:rounded-t-[300px] rounded-b-[30px] overflow-hidden order-2 lg:order-1 transform transition-transform duration-700 group anim-fade-left">
                    <Image
                        src="/brand_quote_camp.webp"
                        alt="The Illashimwe Legacy - Mobile Camp"
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-700"></div>
                    <div className="absolute inset-4 rounded-t-[280px] rounded-b-[15px] border border-white/20 scale-[0.98] group-hover:scale-100 transition-all duration-700 pointer-events-none" />
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2 text-center lg:text-left anim-fade-up anim-delay-2">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-primary hidden lg:block" />
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                            Our Promise
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-none mb-10 text-white">
                        More Than An <br className="hidden lg:block" /> <span className="text-primary">Itinerary</span>
                    </h2>

                    <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-cream/90 mb-12 italic tracking-wide">
                        &quot;A safari with Illashimwe Adventure is a connection to the land, its people, and its wildlife. We craft journeys that <strong className="text-white font-serif font-bold not-italic border-b border-primary pb-1">inspire and empower</strong>.&quot;
                    </blockquote>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center lg:justify-start">
                            <div className="border-l border-white/20 pl-6 text-left">
                                <h4 className="text-4xl font-serif font-black text-white mb-2 tracking-wide">100%</h4>
                                <p className="text-[10px] uppercase tracking-widest text-primary/80">Local <br />Ownership</p>
                            </div>
                            <div className="border-l border-white/20 pl-6 text-left">
                                <h4 className="text-4xl font-serif font-black text-white mb-2 tracking-wide">Safety</h4>
                                <p className="text-[10px] uppercase tracking-widest text-primary/80">First <br />Approach</p>
                            </div>
                        </div>

                        <div className="pt-8 flex justify-center lg:justify-start">
                            <Link href="/about" className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-sm hover:border-primary hover:bg-primary hover:text-deep-brown transform hover:-translate-y-1">
                                Read Our Full Story
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

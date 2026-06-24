import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Users, Shield, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Story | Illashimwe Adventure — Luxury Safari Company, Arusha",
    description: "Illashimwe Adventure is a refined luxury safari company based in Arusha, Tanzania. Our name means 'God is good' — a promise of trust, care, and excellence on every journey.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">

            {/* Hero */}
            <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/hero_lion_portrait_1768491268079.webp"
                    alt="Tanzania wilderness — Illashimwe Adventure"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#2F3E2E]/90" />

                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-[0.2em] text-xs uppercase">
                        Our Story
                    </span>
                    <h1 className="font-molot text-5xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight">
                        CRAFTED FOR THE<br />DISCERNING TRAVELER
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
                        Comfort, authenticity, and unforgettable experiences — woven into every journey we design.
                    </p>
                </div>
            </div>

            {/* Brand Story — Three Paragraphs */}
            <section className="py-28 px-6 bg-[#F5F5F0]">
                <div className="max-w-5xl mx-auto">

                    {/* Overline */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Who We Are</span>
                    </div>

                    {/* Para 1 */}
                    <p className="text-2xl md:text-3xl font-serif font-light text-deep-brown leading-relaxed mb-10">
                        Illashimwe Adventure is a refined safari company based in Arusha, Tanzania, created for travelers who seek
                        <span className="font-semibold text-primary"> comfort, authenticity, and unforgettable experiences</span>.
                    </p>

                    {/* Name meaning callout */}
                    <div className="bg-deep-brown text-white rounded-3xl p-10 md:p-14 my-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5"
                            style={{ backgroundImage: `radial-gradient(circle at 10% 50%, #F78A1D 0%, transparent 40%), radial-gradient(circle at 90% 50%, #F78A1D 0%, transparent 40%)` }} />
                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <span className="font-[family-name:var(--font-script)] text-primary text-5xl md:text-6xl block mb-4">Illashimwe</span>
                            <p className="text-2xl md:text-3xl font-serif font-light text-white/90 leading-relaxed italic">
                                &ldquo;God is good&rdquo;
                            </p>
                            <div className="w-16 h-[1px] bg-primary/60 mx-auto my-6" />
                            <p className="text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                                Our name symbolizes gratitude, trust, and the belief that every journey should be handled with care and excellence.
                                Inspired by Tanzania&apos;s breathtaking landscapes and rich wildlife, we design private, carefully curated safaris
                                that combine adventure with comfort and seamless service.
                            </p>
                        </div>
                    </div>

                    {/* Para 3 */}
                    <p className="text-xl text-gray-700 leading-relaxed font-light max-w-3xl">
                        From elegant lodges overlooking the savannah to expertly guided game drives, every detail is thoughtfully planned.
                        At Illashimwe Adventure, luxury is not just about where you stay &mdash; it is about
                        <span className="font-semibold text-deep-brown"> how you feel throughout your journey</span>.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">What We Stand For</span>
                        <h2 className="font-molot text-3xl md:text-4xl text-deep-brown">The Illashimwe Promise</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Local Expertise", desc: "Our guides are born and raised in Tanzania, offering insights no guidebook can match.", icon: Users },
                            { title: "Safety First", desc: "Your safety is our priority, with rigorous training and emergency evacuation protocols.", icon: Shield },
                            { title: "Sustainable", desc: "We practice responsible tourism that directly benefits local communities and conservation.", icon: Heart },
                            { title: "Excellence", desc: "Award-winning attention to detail in every itinerary — from vehicle to lodge to guide.", icon: Award },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#F5F5F0] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-molot text-xl text-deep-brown mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <section className="py-16 bg-[#F5F5F0] border-y border-gray-200">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { stat: "100%", label: "Local Ownership" },
                        { stat: "10+", label: "Years of Excellence" },
                        { stat: "500+", label: "Safaris Completed" },
                        { stat: "5★", label: "Guest Satisfaction" },
                    ].map((s, i) => (
                        <div key={i}>
                            <p className="font-molot text-4xl md:text-5xl text-deep-brown mb-2">{s.stat}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 bg-deep-brown relative overflow-hidden text-center px-6">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `radial-gradient(ellipse at 50% 0%, #F78A1D 0%, transparent 60%)` }} />
                <div className="max-w-3xl mx-auto relative z-10">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-6">Begin Your Journey</span>
                    <h2 className="font-molot text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Ready to Experience<br />the Real Tanzania?
                    </h2>
                    <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-xl mx-auto">
                        Tell us your dream and our experts will craft a private itinerary — tailored exactly to how you want to feel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/plan-trip" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white hover:text-deep-brown transition-all uppercase tracking-wider">
                            Plan My Trip <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white hover:text-deep-brown transition-all uppercase tracking-wider">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

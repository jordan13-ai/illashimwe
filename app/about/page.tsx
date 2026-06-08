import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Users, Shield, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Illashimwe Adventure",
    description: "Learn about our story, our passionate guides, and our commitment to sustainable tourism in Tanzania.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#2F3E2E]">
                <Image
                    src="/hero_lion_portrait_1768491268079.webp"
                    alt="Illashimwe Adventure Team"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-bold tracking-widest text-sm uppercase">
                        Our Story
                    </span>
                    <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
                        PASSION FOR<br />THE WILD
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        We are a team of local experts dedicated to sharing the authentic beauty of Tanzania with the world.
                    </p>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Who We Are</h2>
                    <h3 className="font-molot text-3xl md:text-4xl text-deep-brown leading-tight">
                        Deeply Rooted in Tanzania
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        Illashimwe Adventure was born from a deep love for the African wilderness and a desire to showcase Tanzania&apos;s wonders through the eyes of those who call it home. Our name &quot;Illashimwe&quot; reflects our commitment to excellence and gratitude for the natural world. We craft journeys that are not just vacations, but transformative experiences that connect you with nature, culture, and yourself.
                    </p>
                </div>
            </section>

            {/* Core Values / Why Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Local Expertise", desc: "Our guides are born and raised here, offering insights no guidebook can match.", icon: Users },
                            { title: "Safety First", desc: "Your safety is our priority, with rigorous training and evacuation protocols.", icon: Shield },
                            { title: "Sustainable", desc: "We practice responsible tourism that benefits local communities and conservation.", icon: Heart },
                            { title: "Excellence", desc: "Award-winning service and attention to detail in every itinerary we craft.", icon: Award }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#F5F5F0] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-molot text-xl md:text-2xl text-deep-brown mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-deep-brown relative overflow-hidden text-center px-6">
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="font-molot text-3xl md:text-4xl text-white mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-lg text-white/80 mb-10 font-light leading-relaxed">
                        Our guides are the heart of Illashimwe. Friendly, knowledgeable, and passionate about revealing Tanzania&apos;s secrets.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-deep-brown font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-deep-brown transition-colors">
                        Get In Touch <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

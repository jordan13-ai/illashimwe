import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Users, Shield, Award, Heart, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Story | Illashimwe Adventure — Luxury Safari Company, Arusha",
    description: "Illashimwe Adventure is a refined luxury safari company based in Arusha, Tanzania. Our name means 'God is good' — a promise of trust, care, and excellence on every journey.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0] overflow-x-hidden">

            {/* ── HERO: Full-screen ───────────────────────────────────────────── */}
            <section className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
                <Image
                    src="/hero_lion_portrait_1768491268079.webp"
                    alt="Tanzania wilderness"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                    sizes="100vw"
                />
                {/* layered gradients for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">Arusha, Tanzania</span>
                        <div className="w-12 h-[1px] bg-primary" />
                    </div>
                    <h1 className="font-molot text-6xl md:text-8xl lg:text-[110px] text-white tracking-wider leading-none mb-8">
                        OUR STORY
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed tracking-wide">
                        Where Africa&rsquo;s wilderness meets the art of refined travel.
                    </p>
                </div>

                {/* scroll cue */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                    <div className="w-[1px] h-14 bg-white/20 overflow-hidden relative">
                        <div className="w-full h-1/2 bg-primary absolute top-0 animate-[slideDown_2s_ease-in-out_infinite]" />
                    </div>
                </div>
            </section>

            {/* ── OUR STORY: Split layout ─────────────────────────────────────── */}
            <section className="bg-[#F5F5F0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">

                    {/* Image column — sticky on scroll */}
                    <div className="relative h-[60vh] lg:h-auto lg:min-h-[800px] overflow-hidden">
                        <Image
                            src="/brand_quote_camp.webp"
                            alt="Illashimwe Adventure — mobile camp in the bush"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        {/* location badge */}
                        <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            <span className="text-white text-xs font-bold tracking-widest uppercase">Serengeti, Tanzania</span>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="px-8 md:px-16 py-20 lg:py-32 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-8 h-[1px] bg-primary" />
                            <span className="text-primary font-bold tracking-[0.25em] text-[10px] uppercase">Who We Are</span>
                        </div>

                        <h2 className="font-molot text-4xl md:text-5xl text-deep-brown leading-tight mb-10">
                            A REFINED SAFARI<br />COMPANY
                        </h2>

                        <div className="space-y-7 text-gray-600 font-light leading-[1.9] text-lg">
                            <p>
                                Illashimwe Adventure is a refined safari company based in Arusha, Tanzania, created for travelers who seek
                                <strong className="font-semibold text-deep-brown"> comfort, authenticity, and unforgettable experiences</strong>.
                            </p>
                            <p>
                                Inspired by Tanzania&apos;s breathtaking landscapes and rich wildlife, we design private, carefully curated safaris
                                that combine adventure with comfort and seamless service.
                            </p>
                            <p>
                                From elegant lodges overlooking the savannah to expertly guided game drives, every detail is thoughtfully planned.
                                At Illashimwe Adventure, luxury is not just about where you stay &mdash; it is about
                                <strong className="font-semibold text-deep-brown"> how you feel throughout your journey</strong>.
                            </p>
                        </div>

                        <div className="mt-14 pt-10 border-t border-gray-200 flex items-center gap-8">
                            <div>
                                <p className="font-molot text-4xl text-deep-brown">500+</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Safaris Crafted</p>
                            </div>
                            <div className="w-[1px] h-12 bg-gray-200" />
                            <div>
                                <p className="font-molot text-4xl text-deep-brown">Private</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Tailor-Made Only</p>
                            </div>
                            <div className="w-[1px] h-12 bg-gray-200" />
                            <div>
                                <p className="font-molot text-4xl text-deep-brown">5★</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Guest Rated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NAME MEANING: Full-width dark ───────────────────────────────── */}
            <section className="relative bg-deep-brown py-28 md:py-40 px-6 overflow-hidden">
                {/* decorative radial glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="font-[family-name:var(--font-script)] text-primary text-7xl md:text-9xl block leading-none mb-6">
                        Illashimwe
                    </span>
                    <div className="flex items-center justify-center gap-6 mb-10">
                        <div className="w-16 h-[1px] bg-primary/40" />
                        <p className="text-white/60 text-sm font-bold tracking-[0.3em] uppercase">The Meaning</p>
                        <div className="w-16 h-[1px] bg-primary/40" />
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-white font-light italic mb-10 leading-relaxed">
                        &ldquo;God is good&rdquo;
                    </h3>
                    <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Our name symbolizes gratitude, trust, and the unwavering belief that every journey should be handled
                        with care and excellence — from the first conversation to the last farewell at the airport.
                    </p>
                </div>
            </section>

            {/* ── THREE PRINCIPLES: Editorial image grid ──────────────────────── */}
            <section className="bg-[#F5F5F0] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.25em] text-[10px] uppercase block mb-4">What Guides Us</span>
                        <h2 className="font-molot text-4xl md:text-5xl text-deep-brown">Our Three Principles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                img: "/images/lioness-at-the-serengeti-national-park-tanzania-2026-01-05-04-42-12-utc.webp",
                                number: "01",
                                title: "Comfort",
                                desc: "Every lodge, vehicle, and experience is hand-selected to deliver seamless comfort without compromising the authenticity of Africa.",
                            },
                            {
                                img: "/images/a-safari-guide-by-a-jeep-on-a-sunrise-drive-throug-2026-03-25-02-48-55-utc.webp",
                                number: "02",
                                title: "Authenticity",
                                desc: "We go beyond the surface — connecting you with Tanzania's people, cultures, and wilderness in ways that feel genuine and meaningful.",
                            },
                            {
                                img: "/images/hot-air-balloon-in-maasai-mara-national-reserve-k-2026-01-06-09-39-47-utc.webp",
                                number: "03",
                                title: "Excellence",
                                desc: "From itinerary design to in-bush service, our commitment to detail ensures every moment exceeds your expectations.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="group relative h-[560px] rounded-3xl overflow-hidden cursor-default">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <span className="font-molot text-white/20 text-6xl leading-none">{item.number}</span>
                                    <div>
                                        <h3 className="font-molot text-3xl text-white mb-3">{item.title}</h3>
                                        <p className="text-white/70 font-light leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GUIDE PORTRAIT: Full-width immersive ────────────────────────── */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/safari_guide_portrait_1768492265746.webp"
                    alt="Expert Illashimwe guide in the field"
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/90 via-deep-brown/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
                        <div className="max-w-lg">
                            <span className="text-primary font-bold tracking-[0.25em] text-[10px] uppercase block mb-6">Our People</span>
                            <h2 className="font-molot text-4xl md:text-5xl text-white leading-tight mb-6">
                                EXPERTS BORN<br />FROM THE BUSH
                            </h2>
                            <p className="text-white/70 font-light leading-relaxed mb-10 text-lg">
                                Our guides are not just drivers — they are naturalists, storytellers, and friends. Born and raised in Tanzania,
                                they know every animal trail, every seasonal secret, every best-kept viewpoint.
                            </p>
                            <Link href="/about/guides" className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
                                Meet the Team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CORE VALUES: Clean cards ─────────────────────────────────────── */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.25em] text-[10px] uppercase block mb-4">What We Stand For</span>
                        <h2 className="font-molot text-4xl md:text-5xl text-deep-brown">The Illashimwe Promise</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Users,
                                title: "Local Expertise",
                                desc: "Our guides are born and raised in Tanzania, offering insights no guidebook can match.",
                            },
                            {
                                icon: Shield,
                                title: "Safety First",
                                desc: "Your safety is our priority — rigorous training, WFR certification, and evacuation protocols on every trip.",
                            },
                            {
                                icon: Heart,
                                title: "Sustainable Travel",
                                desc: "We practice responsible tourism that directly benefits local communities and wildlife conservation.",
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                desc: "Meticulous attention to detail in every itinerary — from the vehicle to the lodge to the guide.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-[#F5F5F0] hover:bg-deep-brown transition-all duration-500 cursor-default">
                                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-molot text-xl text-deep-brown group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PHOTO EDITORIAL: Asymmetric grid ────────────────────────────── */}
            <section className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.25em] text-[10px] uppercase block mb-4">Tanzania Through Our Eyes</span>
                        <h2 className="font-molot text-4xl md:text-5xl text-deep-brown">Life in the Wild</h2>
                    </div>
                    <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
                        {/* Large left */}
                        <div className="col-span-12 md:col-span-6 row-span-2 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/images/elephant-herd-seeking-shade-under-an-acacia-tree-i-2026-03-25-05-04-43-utc.webp"
                                alt="Elephant herd under acacia tree"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Top right */}
                        <div className="col-span-12 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/images/african-lionesses-in-the-maasai-mara-national-park-2026-03-26-01-44-51-utc.webp"
                                alt="African lionesses"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                        {/* Top far right */}
                        <div className="col-span-12 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/images/aerial-view-of-herd-of-african-elephants-standing-2026-03-25-00-59-53-utc.webp"
                                alt="Aerial view of elephants"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                        {/* Bottom right */}
                        <div className="col-span-12 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/images/beautiful-tropical-beach-with-white-sand-and-clear-2026-03-18-05-44-03-utc.webp"
                                alt="Zanzibar beach"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                        {/* Bottom far right */}
                        <div className="col-span-12 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/images/snow-on-top-of-mount-kilimanjaro-in-amboseli-2026-03-24-15-21-46-utc.webp"
                                alt="Mount Kilimanjaro"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GUEST WORDS: Single quote ───────────────────────────────────── */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                    </div>
                    <blockquote className="font-serif text-2xl md:text-4xl text-deep-brown font-light italic leading-relaxed mb-10">
                        &ldquo;The trip of a lifetime. Everything was perfectly organized — our guide was incredible at spotting wildlife and so knowledgeable. Illashimwe Adventure exceeded every expectation.&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-deep-brown rounded-full flex items-center justify-center text-white font-molot text-xl">S</div>
                        <div className="text-left">
                            <p className="font-bold text-deep-brown text-sm">Sarah & Mike</p>
                            <p className="text-gray-400 text-xs uppercase tracking-widest">United States · 7-Day Safari & Zanzibar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
            <section className="bg-[#F5F5F0] border-y border-gray-200 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {[
                        { stat: "100%", label: "Locally Owned & Operated" },
                        { stat: "100%", label: "Tailor-Made Private Trips" },
                        { stat: "500+", label: "Private Safaris Crafted" },
                        { stat: "5★", label: "Average Guest Rating" },
                    ].map((s, i) => (
                        <div key={i}>
                            <p className="font-molot text-5xl md:text-6xl text-deep-brown mb-3">{s.stat}</p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA: Final ──────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden">
                <div className="relative h-[600px] w-full">
                    <Image
                        src="/images/serene-tree-silhouette-at-sunset-2026-03-26-10-49-45-utc.webp"
                        alt="African sunset silhouette"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/70 to-transparent" />

                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 text-center">
                        <span className="text-primary font-bold tracking-[0.25em] text-[10px] uppercase block mb-5">Begin Your Journey</span>
                        <h2 className="font-molot text-4xl md:text-6xl text-white mb-6 leading-tight">
                            Ready to Experience<br />the Real Tanzania?
                        </h2>
                        <p className="text-white/60 font-light text-lg max-w-xl mb-12 leading-relaxed">
                            Tell us your dream and our experts will craft a private itinerary — tailored exactly to how you want to feel.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plan-trip"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-10 py-4 rounded-full hover:bg-white hover:text-deep-brown transition-all uppercase tracking-wider shadow-lg"
                            >
                                Plan My Trip <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold text-sm px-10 py-4 rounded-full hover:bg-white hover:text-deep-brown transition-all uppercase tracking-wider"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="relative mt-24">
            {/* Safari Silhouette Top Decoration using SVG for perfect color match */}
            <div className="absolute top-0 left-0 w-full transform -translate-y-[98%] z-10 text-deep-brown overflow-hidden leading-[0]">
                <svg
                    className="w-full h-16 md:h-24 lg:h-32 min-w-[1000px] relative left-1/2 -translate-x-1/2"
                    viewBox="0 0 1440 320"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    {/* Add some "trees" to the silhouette */}
                    <path d="M110 210 C 110 210, 100 180, 80 180 C 60 180, 50 200, 50 210 Z" />
                    <path d="M960 230 C 960 230, 940 160, 980 150 C 1020 140, 1020 220, 1000 230 Z" />
                    <path d="M1250 160 C 1250 160, 1280 100, 1320 110 C 1360 120, 1340 170, 1330 180 Z" />
                </svg>
            </div>

            <footer className="bg-deep-brown pt-16 pb-8 px-6 text-cream relative z-20">
                <div className="max-w-[90rem] mx-auto">
                    {/* Main 5-Column Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

                        {/* Column 1: Brand */}
                        <div className="flex flex-col gap-6">
                            <div className="mb-2">
                                <Image
                                    src="/logo/illashimwe logo.webp"
                                    alt="Illashimwe Adventure"
                                    width={180}
                                    height={80}
                                    className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                                />
                            </div>
                            <p className="text-cream/70 text-sm leading-relaxed">
                                Your trusted partner for authentic Tanzanian adventures. Creating memories through safe, sustainable, and spectacular travel.
                            </p>
                            <div className="flex gap-3">
                                <Link href="https://www.facebook.com/illashimweadventure" target="_blank" className="border border-cream/20 rounded-full p-2 hover:border-safari-green hover:text-safari-green transition-all">
                                    <span className="material-symbols-outlined text-lg">public</span>
                                </Link>
                                <Link href="https://www.instagram.com/illashimwe_adventure" target="_blank" className="border border-cream/20 rounded-full p-2 hover:border-safari-green hover:text-safari-green transition-all">
                                    <span className="material-symbols-outlined text-lg">photo_camera</span>
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Safari Categories */}
                        <div className="lg:border-l border-white/10 lg:pl-8">
                            <h4 className="font-bold uppercase tracking-wider text-xs border-l-2 border-safari-green pl-3 mb-6 text-cream/90">Safari Categories</h4>
                            <ul className="space-y-3 text-sm text-cream/70">
                                <li><Link className="hover:text-safari-green transition-colors block" href="/safari/private-luxury">Private Luxury</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/safari/midrange-safari">Midrange Safari</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/safari/budget-safari">Budget Safari</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/safari/group-safari">Shared Group</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/safari/flying-packages">Flying Packages</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/experiences/honeymoon">Honeymooners</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/day-trips">Day Tours</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Mountain Trekking */}
                        <div className="lg:border-l border-white/10 lg:pl-8">
                            <h4 className="font-bold uppercase tracking-wider text-xs border-l-2 border-safari-green pl-3 mb-6 text-cream/90">Mountain Trekking</h4>
                            <ul className="space-y-3 text-sm text-cream/70">
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro/routes/machame">Machame Route</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro/routes/lemosho">Lemosho Route</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro/routes/marangu">Marangu Route</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro/routes/rongai">Rongai Route</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro/routes/northern-circuit">Northern Circuit</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro">Mount Meru</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/kilimanjaro/overview">Trekking Tips</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Travel Resources */}
                        <div className="lg:border-l border-white/10 lg:pl-8">
                            <h4 className="font-bold uppercase tracking-wider text-xs border-l-2 border-safari-green pl-3 mb-6 text-cream/90">Travel Resources</h4>
                            <ul className="space-y-3 text-sm text-cream/70">
                                <li><Link className="hover:text-safari-green transition-colors block" href="/guide">Tanzania Travel Guide</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/packing-essentials">Packing Essentials</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/health-safety">Health & Safety</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/cultural-etiquette">Cultural Etiquette</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/faq">FAQ</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link className="hover:text-safari-green transition-colors block" href="/terms">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* Column 5: Arusha Office */}
                        <div className="lg:border-l border-white/10 lg:pl-8">
                            <h4 className="font-bold uppercase tracking-wider text-xs border-l-2 border-safari-green pl-3 mb-6 text-cream/90">Arusha Office</h4>
                            <ul className="space-y-4 text-sm text-cream/70">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-safari-green text-lg shrink-0 mt-0.5">location_on</span>
                                    <span>Main St, Arusha, Tanzania<br />East Africa</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-safari-green text-lg shrink-0">call</span>
                                    <Link href="tel:+255755310533" className="hover:text-white transition-colors">+255 755 310 533</Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-safari-green text-lg shrink-0">mail</span>
                                    <Link href="mailto:info@illashimweadventures.com" className="hover:text-white transition-colors break-all">info@illashimweadventures.com</Link>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 opacity-80">
                                <div className="border border-cream/30 p-2 rounded">
                                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                                </div>
                                <div className="text-xs leading-tight">
                                    <span className="block font-bold mb-0.5 text-cream/90">MEMBER OF</span>
                                    Licensed Local Agency
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
                        <p>© {new Date().getFullYear()} Illashimwe Adventure. All Rights Reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-wider font-medium">
                            <Link href="/about" className="hover:text-safari-green transition-colors">Why Us</Link>
                            <Link href="/contact" className="hover:text-safari-green transition-colors">Contact</Link>
                            <Link href="/safari/packages" className="hover:text-safari-green transition-colors">Packages</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

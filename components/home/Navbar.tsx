"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowRight } from "lucide-react";
import { MAIN_NAV_ITEMS, NAV_SPLIT_INDEX, MegaMenuSection } from "@/data/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Split navigation items
    const leftNavItems = MAIN_NAV_ITEMS.slice(0, NAV_SPLIT_INDEX);
    const rightNavItems = MAIN_NAV_ITEMS.slice(NAV_SPLIT_INDEX);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const MegaMenu = ({ item }: { item: MegaMenuSection }) => (
        <div
            className="absolute left-0 w-full bg-deep-brown/95 backdrop-blur-xl shadow-2xl border-t border-white/10 animate-in fade-in slide-in-from-top-1 duration-200 z-50 group-hover:block"
            style={{
                top: "100%",
                paddingTop: "16px", // Safe buffer area
                marginTop: "-1px" // Overlap border slightly
            }}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 flex gap-8 lg:gap-16">
                {/* Columns */}
                <div className="flex-1 grid grid-cols-3 gap-8 lg:gap-12 border-r border-white/10 pr-8">
                    {item.columns?.map((col, idx) => (
                        <div key={idx} className="space-y-4">
                            <h4 className="font-molot text-lg text-cream tracking-wider border-b-2 border-primary/20 pb-2 mb-2 inline-block">
                                {col.title}
                            </h4>
                            <ul className="space-y-2">
                                {col.items.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            target={link.isExternal ? "_blank" : "_self"}
                                            className="group/link flex items-center justify-between py-2 px-3 -ml-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/link:bg-primary transition-colors"></span>
                                                <span className="text-sm font-medium text-cream/70 group-hover/link:text-white group-hover/link:font-bold transition-colors">
                                                    {link.label}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Featured Section */}
                {item.featured && (
                    <div className="w-[300px] xl:w-[360px] shrink-0">
                        <Link href={item.featured.href} className="group block relative rounded-2xl overflow-hidden h-full min-h-[300px] shadow-lg border border-white/5 hover:border-primary/50 transition-all duration-500">
                            <Image
                                src={item.featured.image}
                                alt={item.featured.title}
                                fill
                                loading="lazy"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="360px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-deep-brown/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block shadow-md">
                                        Featured
                                    </span>
                                    <h3 className="font-molot text-2xl mb-2">{item.featured.title}</h3>
                                    <p className="text-sm text-cream/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                        {item.featured.description}
                                    </p>
                                </div>
                                <span className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    Explore Now <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );

    const NavItem = ({ item }: { item: MegaMenuSection }) => (
        <div
            className="group h-full flex items-center"
            onMouseEnter={() => setActiveDropdown(item.id)}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <Link
                href={item.href}
                className={cn(
                    "relative px-4 h-full flex items-center gap-1.5 text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors duration-300",
                    activeDropdown
                        ? "text-primary placeholder-opacity-100" // Active state
                        : "text-cream hover:text-primary"        // Default/Hover state
                )}
            >
                {item.label}
                {item.columns && (
                    <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        activeDropdown === item.id ? "rotate-180 text-primary" : "text-white/50 group-hover:text-primary"
                    )} />
                )}

                {/* Active Indicator (Top Line) */}
                <span className={cn(
                    "absolute top-0 left-0 w-full h-1 bg-primary transform transition-transform duration-300 origin-center",
                    activeDropdown === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                )}></span>
            </Link>

            {/* Mega Menu Overlay */}
            {activeDropdown === item.id && item.columns && (
                <MegaMenu item={item} />
            )}
        </div>
    );

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                scrolled || activeDropdown
                    ? "bg-deep-brown/95 backdrop-blur-md shadow-2xl py-0 border-white/10"
                    : "bg-transparent py-4 border-transparent"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative flex items-center justify-between h-20 md:h-24 transition-all duration-300" onMouseLeave={() => setActiveDropdown(null)}>

                {/* Left Navigation */}
                <nav className="hidden lg:flex items-center gap-2 flex-1 justify-end pr-8 h-full">
                    {leftNavItems.map((item) => (
                        <NavItem key={item.id} item={item} />
                    ))}
                </nav>

                {/* Center Logo */}
                <div className="flex-shrink-0 relative z-50 mx-auto transform transition-transform duration-300 hover:scale-105">
                    <Link href="/" className="block">
                        <Image
                            src="/logo/illashimwe logo.webp"
                            alt="Illashimwe Adventure"
                            width={240}
                            height={80}
                            className={cn(
                                "object-contain transition-all duration-300 brightness-0 invert", // Always white/bright
                                (scrolled || activeDropdown) ? "h-16 w-auto" : "h-20 w-auto"
                            )}
                            priority
                        />
                    </Link>
                </div>

                {/* Right Navigation */}
                <nav className="hidden lg:flex items-center gap-2 flex-1 justify-start pl-8 h-full">
                    {rightNavItems.map((item) => (
                        <NavItem key={item.id} item={item} />
                    ))}
                </nav>

                {/* Absolute Right: Plan Trip (Desktop) */}
                <div className="hidden xl:flex absolute right-8 items-center">
                    <Link
                        href="/plan-trip"
                        className={cn(
                            "px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg",
                            "bg-primary text-white hover:bg-white hover:text-deep-brown hover:scale-105 active:scale-95"
                        )}
                    >
                        <span className="material-symbols-outlined text-lg">edit_calendar</span>
                        <span className="hidden 2xl:inline">Plan My Trip</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 text-cream hover:text-primary transition-colors p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div id="mobile-menu" className="fixed inset-0 bg-deep-brown z-50 flex flex-col pt-24 px-6 lg:hidden animate-in slide-in-from-right duration-300 overflow-y-auto">
                    <button
                        className="absolute top-6 right-4 text-cream hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    <nav className="flex flex-col gap-6 pb-20">
                        {MAIN_NAV_ITEMS.map((item) => (
                            <div key={item.id} className="border-b border-white/5 pb-4">
                                <Link
                                    href={item.href}
                                    className="text-cream hover:text-primary text-3xl font-molot tracking-wide transition-colors flex justify-between items-center"
                                    onClick={() => !item.columns && setIsOpen(false)}
                                >
                                    {item.label}
                                    {item.columns && <ChevronDown className="w-6 h-6 text-primary/80" />}
                                </Link>

                                {/* Mobile Submenu */}
                                {item.columns && (
                                    <div className="mt-6 pl-4 space-y-8">
                                        {item.columns.map((col, idx) => (
                                            <div key={idx}>
                                                <h5 className="text-primary text-xs uppercase tracking-widest font-bold mb-4 border-l-2 border-primary pl-3">{col.title}</h5>
                                                <ul className="space-y-3 pl-4">
                                                    {col.items.map((sub, subIdx) => (
                                                        <li key={subIdx}>
                                                            <Link
                                                                href={sub.href}
                                                                className="text-cream/70 hover:text-white text-base block py-1 font-light"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="mt-auto pb-10 pt-6 border-t border-white/10 text-center">
                        <Link href="/plan-trip" className="inline-block w-full bg-primary text-white font-bold py-4 rounded-xl uppercase tracking-widest mb-6 shadow-lg">
                            Plan Your Trip
                        </Link>
                        <p className="text-cream/40 text-xs uppercase tracking-widest">
                            Crafted for the Wild
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
}

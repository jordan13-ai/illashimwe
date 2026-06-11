import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
    title: "Contact Us | Illashimwe Adventure",
    description: "Get in touch with our team to start planning your Tanzania adventure. Call, email, or visit us in Arusha.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Header */}
            <div className="bg-deep-brown text-white pt-40 pb-20 px-6 text-center">
                <h1 className="font-molot text-4xl md:text-5xl lg:text-6xl mb-6">Let&apos;s Talk Adventure</h1>
                <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
                    We&apos;re here to answer your questions and help you plan the trip of a lifetime.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Info Cards - Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-molot text-xl text-deep-brown mb-2">Call Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">Mon-Fri from 8am to 5pm EAT.</p>
                            <a href="tel:+255755310533" className="text-lg font-bold text-deep-brown hover:text-primary transition-colors block">
                                +255 755 310 533
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-molot text-xl text-deep-brown mb-2">Email Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">We&apos;ll get back to you within 24 hours.</p>
                            <a href="mailto:info@illashimweadventures.com" className="text-lg font-bold text-deep-brown hover:text-primary transition-colors block">
                                info@illashimweadventures.com
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-molot text-xl text-deep-brown mb-2">Visit Us</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Illashimwe Adventure HQ<br />
                                Arusha, Tanzania
                            </p>
                        </div>
                    </div>

                    {/* Contact Form - Right Column */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h2 className="font-molot text-3xl text-deep-brown mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-bold text-deep-brown uppercase tracking-wider">First name</label>
                                    <Input id="firstName" placeholder="Jane" className="bg-[#F9FAFB] border-gray-200 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-bold text-deep-brown uppercase tracking-wider">Last name</label>
                                    <Input id="lastName" placeholder="Doe" className="bg-[#F9FAFB] border-gray-200 h-12" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-deep-brown uppercase tracking-wider">Email</label>
                                <Input id="email" type="email" placeholder="jane@example.com" className="bg-[#F9FAFB] border-gray-200 h-12" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-deep-brown uppercase tracking-wider">Message</label>
                                <Textarea id="message" placeholder="Tell us about your dream trip..." className="bg-[#F9FAFB] border-gray-200 min-h-[150px]" />
                            </div>

                            <Button className="w-full bg-deep-brown hover:bg-deep-brown/90 text-white font-bold text-lg h-14 rounded-xl">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Map Placeholder */}
            <div id="map" className="h-[400px] w-full bg-gray-200 mt-20 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest">
                    Interactive Map Loading...
                </div>
            </div>
        </div>
    );
}

import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Plan Your Tanzania Adventure",
    description: "Get in touch with our team to start planning your Tanzania safari or Kilimanjaro climb. Call, email, or visit us in Arusha.",
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

                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-molot text-xl text-deep-brown mb-2">Call Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">Mon–Sun, 7am–8pm EAT.</p>
                            <a href="tel:+255755310533" className="text-lg font-bold text-deep-brown hover:text-primary transition-colors block">
                                +255 755 310 533
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-molot text-xl text-deep-brown mb-2">Email Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">We&apos;ll reply within 24 hours.</p>
                            <a href="mailto:info@illashimweadventures.com" className="text-lg font-bold text-deep-brown hover:text-primary transition-colors block break-all">
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

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h2 className="font-molot text-3xl text-deep-brown mb-6">Send a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Google Maps — Arusha, Tanzania */}
            <div className="h-[400px] w-full mt-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63690.42156454783!2d36.61698322090819!3d-3.3869143632716826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371eb0b67a12e3%3A0xde50c2c4de70a8da!2sArusha%2C+Tanzania!5e0!3m2!1sen!2sus!4v1719000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Illashimwe Adventure — Arusha, Tanzania"
                />
            </div>
        </div>
    );
}

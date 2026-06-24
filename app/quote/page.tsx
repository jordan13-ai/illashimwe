import { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
    title: "Get a Free Safari Quote | Illashimwe Adventure",
    description: "Request a free, no-obligation custom quote for your Tanzania safari, Kilimanjaro climb, or Zanzibar holiday. Our experts respond within 24 hours.",
};

export default function QuotePage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0] pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-[#2F3E2E] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `radial-gradient(circle at 20% 30%, #4A5D49 0%, transparent 20%),
                                                   radial-gradient(circle at 80% 70%, #4A5D49 0%, transparent 20%),
                                                   radial-gradient(circle at 50% 50%, #1F2B1E 0%, transparent 40%)`,
                                backgroundSize: "400px 400px"
                            }} />
                    </div>
                    <div className="relative z-10">
                        <h1 className="font-molot text-4xl md:text-5xl text-[#F5F5F0] mb-6 tracking-wide">
                            GET A FREE QUOTE
                        </h1>
                        <p className="text-[#F5F5F0]/80 mb-12 max-w-2xl text-lg font-light">
                            Tell us about your dream adventure and our safari experts will build a custom itinerary and quote — no strings attached.
                        </p>
                        <QuoteForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

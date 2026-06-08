"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function QuotePage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0] pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">

                {/* Form Container */}
                <div className="bg-[#2F3E2E] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">

                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `radial-gradient(circle at 20% 30%, #4A5D49 0%, transparent 20%), 
                                                   radial-gradient(circle at 80% 70%, #4A5D49 0%, transparent 20%),
                                                   radial-gradient(circle at 50% 50%, #1F2B1E 0%, transparent 40%)`,
                                backgroundSize: "400px 400px"
                            }}>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h1 className="font-molot text-4xl md:text-5xl text-[#F5F5F0] mb-6 tracking-wide text-shadow-sm">
                            GET A FREE QUOTE
                        </h1>
                        <p className="text-[#F5F5F0]/80 mb-12 max-w-2xl text-lg font-light">
                            Tell us a bit about your dream adventure, and our safari experts will build a custom itinerary and quote just for you. No strings attached.
                        </p>

                        <form className="space-y-8">
                            {/* Row 1: Names */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">First Name *</label>
                                    <Input placeholder="" className="bg-[#FFFDF7] border-none h-12 text-deep-brown placeholder:text-gray-400" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Last Name *</label>
                                    <Input placeholder="" className="bg-[#FFFDF7] border-none h-12 text-deep-brown placeholder:text-gray-400" />
                                </div>
                            </div>

                            {/* Row 2: Contact */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Email *</label>
                                    <Input type="email" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Phone/Mobile *</label>
                                    <Input type="tel" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                                </div>
                            </div>

                            {/* Row 3: Trip Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Destinations of Interest</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        <option value="safari">Wildlife Safari</option>
                                        <option value="kilimanjaro">Mount Kilimanjaro</option>
                                        <option value="zanzibar">Zanzibar Beach</option>
                                        <option value="cultural">Cultural Day Trips</option>
                                        <option value="combo">Combo (Safari + Trek/Beach)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Approx. Travel Date</label>
                                    <Input type="date" className="bg-[#FFFDF7] border-none h-12 text-deep-brown/80" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Budget Per Person (USD)</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        <option value="1500-2500">$1,500 - $2,500</option>
                                        <option value="2500-4000">$2,500 - $4,000</option>
                                        <option value="4000-6000">$4,000 - $6,000</option>
                                        <option value="6000+">$6,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 4: Group Size */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">No. of Adults</label>
                                    <Input type="number" min="1" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">No. of Children</label>
                                    <Input type="number" min="0" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Currency</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="usd">USD ($)</option>
                                        <option value="eur">EUR (€)</option>
                                        <option value="gbp">GBP (£)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="space-y-2">
                                <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Additional Details </label>
                                <Textarea
                                    placeholder="Any specific parks, animals you want to see, or special occasions?"
                                    className="bg-[#FFFDF7] border-none min-h-[160px] text-deep-brown placeholder:text-gray-400 resize-none p-4"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 flex items-center justify-between">
                                <p className="text-white/60 text-xs hidden md:block">
                                    We respect your privacy. No spam, ever.
                                </p>
                                <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-molot text-xl tracking-wider px-10 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    REQUEST QUOTE
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

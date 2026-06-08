"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function PlanTripPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0] pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">

                {/* Form Container */}
                <div className="bg-[#2F3E2E] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">

                    {/* Background Texture (Abstract Camo/Leaf pattern via CSS gradients) */}
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
                        <h1 className="font-molot text-4xl md:text-5xl text-[#F5F5F0] mb-12 tracking-wide text-shadow-sm">
                            CUSTOM TRIP REQUEST
                        </h1>

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

                            {/* Row 2: Contact & Nationality */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Email *</label>
                                    <Input type="email" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Phone/Mobile *</label>
                                    <Input type="tel" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Nationality *</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ca">Canada</option>
                                        <option value="au">Australia</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 3: Preferences */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Preferred Experience *</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        <option value="safari">Safari</option>
                                        <option value="kilimanjaro">Kilimanjaro Trek</option>
                                        <option value="beach">Beach Holiday</option>
                                        <option value="cultural">Cultural Tour</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Preferred Destinations *</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        <option value="serengeti">Serengeti</option>
                                        <option value="ngorongoro">Ngorongoro</option>
                                        <option value="zanzibar">Zanzibar</option>
                                        <option value="tarangire">Tarangire</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Accommodation Type *</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        <option value="luxury">Luxury Lodge</option>
                                        <option value="mid-range">Mid-Range Tented Camp</option>
                                        <option value="budget">Budget Camping</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 4: Trip Details */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Travel Date *</label>
                                    <Input type="date" className="bg-[#FFFDF7] border-none h-12 text-deep-brown/80" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Adults (+12) *</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                                            <option key={num} value={num.toString()}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Children (3-11)</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        {[0, 1, 2, 3, 4, "5+"].map((num) => (
                                            <option key={num} value={num.toString()}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Infants (0-2)</label>
                                    <select className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="" disabled selected>- Select -</option>
                                        {[0, 1, 2, 3].map((num) => (
                                            <option key={num} value={num.toString()}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="space-y-2">
                                <label className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Comments</label>
                                <Textarea
                                    placeholder="Tell us what your dream trip is like..."
                                    className="bg-[#FFFDF7] border-none min-h-[160px] text-deep-brown placeholder:text-gray-400 resize-none p-4"
                                />
                            </div>

                            {/* Terms Checkboxes */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center space-x-3">
                                    <Checkbox id="terms" className="bg-[#FFFDF7]" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-[#F5F5F0]/80 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I have read and agree to the <span className="text-primary hover:underline cursor-pointer">Booking Conditions</span>, <span className="text-primary hover:underline cursor-pointer">Terms and Conditions</span> and <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
                                    </label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Checkbox id="marketing" className="bg-[#FFFDF7]" />
                                    <label
                                        htmlFor="marketing"
                                        className="text-sm text-[#F5F5F0]/80 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Get travel tips and safari offers from us?
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-molot text-xl tracking-wider px-10 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    SUBMIT ENQUIRY
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

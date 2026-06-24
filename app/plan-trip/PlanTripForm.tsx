"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function PlanTripForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        const data = new FormData(e.currentTarget);
        try {
            const res = await fetch("/submit.php", {
                method: "POST",
                body: data,
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
                <h2 className="font-molot text-3xl text-[#F5F5F0] mb-4">Enquiry Received!</h2>
                <p className="text-[#F5F5F0]/80 max-w-md">
                    Thank you! Our safari experts will review your request and get back to you within 24 hours with a custom itinerary.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="form_type" value="plan-trip" />

            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">First Name *</label>
                    <Input id="firstName" name="firstName" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Last Name *</label>
                    <Input id="lastName" name="lastName" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
            </div>

            {/* Row 2: Contact & Nationality */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Email *</label>
                    <Input id="email" name="email" type="email" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Phone/Mobile *</label>
                    <Input id="phone" name="phone" type="tel" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="nationality" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Nationality *</label>
                    <select id="nationality" name="nationality" required className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
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
                    <label htmlFor="experience" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Preferred Experience *</label>
                    <select id="experience" name="experience" required className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        <option value="safari">Safari</option>
                        <option value="kilimanjaro">Kilimanjaro Trek</option>
                        <option value="beach">Beach Holiday</option>
                        <option value="cultural">Cultural Tour</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="destination" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Preferred Destinations *</label>
                    <select id="destination" name="destination" required className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        <option value="serengeti">Serengeti</option>
                        <option value="ngorongoro">Ngorongoro</option>
                        <option value="zanzibar">Zanzibar</option>
                        <option value="tarangire">Tarangire</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="accommodation" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Accommodation Type *</label>
                    <select id="accommodation" name="accommodation" required className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        <option value="luxury">Luxury Lodge</option>
                        <option value="mid-range">Mid-Range Tented Camp</option>
                        <option value="budget">Budget Camping</option>
                    </select>
                </div>
            </div>

            {/* Row 4: Trip Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                    <label htmlFor="travelDate" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Travel Date *</label>
                    <Input id="travelDate" name="travelDate" type="date" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown/80" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="adults" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Adults (+12) *</label>
                    <select id="adults" name="adults" required className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        {[1, 2, 3, 4, 5, 6, "7+"].map((n) => <option key={n} value={n.toString()}>{n}</option>)}
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="children" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Children (3–11)</label>
                    <select id="children" name="children" className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        {[0, 1, 2, 3, 4, "5+"].map((n) => <option key={n} value={n.toString()}>{n}</option>)}
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="infants" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Infants (0–2)</label>
                    <select id="infants" name="infants" className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        {[0, 1, 2, 3].map((n) => <option key={n} value={n.toString()}>{n}</option>)}
                    </select>
                </div>
            </div>

            {/* Comments */}
            <div className="space-y-2">
                <label htmlFor="comments" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Comments</label>
                <Textarea id="comments" name="comments" placeholder="Tell us what your dream trip is like..." className="bg-[#FFFDF7] border-none min-h-[160px] text-deep-brown placeholder:text-gray-400 resize-none p-4" />
            </div>

            {/* Terms */}
            <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                    <Checkbox id="terms" name="terms" required className="bg-[#FFFDF7]" />
                    <label htmlFor="terms" className="text-sm text-[#F5F5F0]/80 font-medium leading-none">
                        I agree to the <span className="text-primary">Terms and Conditions</span> and <span className="text-primary">Privacy Policy</span>
                    </label>
                </div>
                <div className="flex items-center space-x-3">
                    <Checkbox id="marketing" name="marketing" className="bg-[#FFFDF7]" />
                    <label htmlFor="marketing" className="text-sm text-[#F5F5F0]/80 font-medium leading-none">
                        Get travel tips and safari offers from us?
                    </label>
                </div>
            </div>

            {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please email us directly at info@illashimweadventures.com</p>
            )}

            <div className="pt-8">
                <Button type="submit" disabled={status === "loading"} size="lg" className="bg-primary hover:bg-primary/90 text-white font-molot text-xl tracking-wider px-10 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-60">
                    {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Sending…</> : "SUBMIT ENQUIRY"}
                </Button>
            </div>
        </form>
    );
}

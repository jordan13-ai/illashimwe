"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function QuoteForm() {
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
                <h2 className="font-molot text-3xl text-[#F5F5F0] mb-4">Quote Request Sent!</h2>
                <p className="text-[#F5F5F0]/80 max-w-md">
                    Our safari experts will craft a custom quote for you within 24 hours. Check your inbox!
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="form_type" value="quote" />

            {/* Names */}
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

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Email *</label>
                    <Input id="email" name="email" type="email" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Phone/Mobile *</label>
                    <Input id="phone" name="phone" type="tel" required className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
            </div>

            {/* Trip Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label htmlFor="destination" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Destinations of Interest</label>
                    <select id="destination" name="destination" className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        <option value="safari">Wildlife Safari</option>
                        <option value="kilimanjaro">Mount Kilimanjaro</option>
                        <option value="zanzibar">Zanzibar Beach</option>
                        <option value="cultural">Cultural Day Trips</option>
                        <option value="combo">Combo (Safari + Trek/Beach)</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="travelDate" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Approx. Travel Date</label>
                    <Input id="travelDate" name="travelDate" type="date" className="bg-[#FFFDF7] border-none h-12 text-deep-brown/80" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="budget" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Budget Per Person (USD)</label>
                    <select id="budget" name="budget" className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="" disabled>- Select -</option>
                        <option value="1500-2500">$1,500 – $2,500</option>
                        <option value="2500-4000">$2,500 – $4,000</option>
                        <option value="4000-6000">$4,000 – $6,000</option>
                        <option value="6000+">$6,000+</option>
                    </select>
                </div>
            </div>

            {/* Group Size */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label htmlFor="adults" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">No. of Adults</label>
                    <Input id="adults" name="adults" type="number" min="1" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="children" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">No. of Children</label>
                    <Input id="children" name="children" type="number" min="0" className="bg-[#FFFDF7] border-none h-12 text-deep-brown" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="currency" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Currency</label>
                    <select id="currency" name="currency" className="flex h-12 w-full rounded-md border-none bg-[#FFFDF7] px-3 py-2 text-sm text-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option value="usd">USD ($)</option>
                        <option value="eur">EUR (€)</option>
                        <option value="gbp">GBP (£)</option>
                    </select>
                </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-2">
                <label htmlFor="details" className="text-[#F5F5F0] text-xs font-bold uppercase tracking-widest">Additional Details</label>
                <Textarea id="details" name="details" placeholder="Any specific parks, animals you want to see, or special occasions?" className="bg-[#FFFDF7] border-none min-h-[160px] text-deep-brown placeholder:text-gray-400 resize-none p-4" />
            </div>

            {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please email us at info@illashimweadventures.com</p>
            )}

            <div className="pt-4 flex items-center justify-between">
                <p className="text-white/60 text-xs hidden md:block">We respect your privacy. No spam, ever.</p>
                <Button type="submit" disabled={status === "loading"} size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-molot text-xl tracking-wider px-10 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-60">
                    {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Sending…</> : "REQUEST QUOTE"}
                </Button>
            </div>
        </form>
    );
}

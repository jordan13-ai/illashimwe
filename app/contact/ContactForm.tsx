"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
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
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="font-molot text-2xl text-deep-brown mb-3">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form_type" value="contact" />
            {/* Honeypot — hidden from humans, bots fill it */}
            <input type="text" name="_hp" aria-hidden="true" tabIndex={-1} className="hidden" autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-deep-brown uppercase tracking-wider">First name</label>
                    <Input id="firstName" name="firstName" required placeholder="Jane" className="bg-[#F9FAFB] border-gray-200 h-12" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-deep-brown uppercase tracking-wider">Last name</label>
                    <Input id="lastName" name="lastName" required placeholder="Doe" className="bg-[#F9FAFB] border-gray-200 h-12" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-deep-brown uppercase tracking-wider">Email</label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="bg-[#F9FAFB] border-gray-200 h-12" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-deep-brown uppercase tracking-wider">Message</label>
                <Textarea id="message" name="message" required placeholder="Tell us about your dream trip..." className="bg-[#F9FAFB] border-gray-200 min-h-[150px]" />
            </div>

            {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please email us at info@illashimweadventures.com</p>
            )}

            <Button type="submit" disabled={status === "loading"} className="w-full bg-deep-brown hover:bg-deep-brown/90 text-white font-bold text-lg h-14 rounded-xl disabled:opacity-60">
                {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Sending…</> : "Send Message"}
            </Button>
        </form>
    );
}

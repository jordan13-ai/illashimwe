"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "255755310533";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// ── Chatbot conversation tree ─────────────────────────────────────────────────
type Step = {
    message: string;
    options: { label: string; next: string }[];
};

const STEPS: Record<string, Step> = {
    start: {
        message: "Hi there! 👋 I'm Amara, your Illashimwe safari assistant. How can I help you today?",
        options: [
            { label: "🦁 Plan a Safari", next: "safari" },
            { label: "🏔️ Climb Kilimanjaro", next: "kili" },
            { label: "💰 Pricing & Packages", next: "pricing" },
            { label: "💬 Talk to a Human", next: "human" },
        ],
    },
    safari: {
        message: "Wonderful! Which experience excites you most?",
        options: [
            { label: "🌅 Great Migration (Serengeti)", next: "contact_wa" },
            { label: "🦏 Ngorongoro Crater", next: "contact_wa" },
            { label: "🏖️ Safari + Zanzibar Beach", next: "contact_wa" },
            { label: "🗺️ Show me all options", next: "packages" },
        ],
    },
    kili: {
        message: "Incredible! Kilimanjaro is one of the world's great adventures. What suits you?",
        options: [
            { label: "🥾 Machame Route (7 days)", next: "contact_wa" },
            { label: "🌿 Lemosho Route (8 days)", next: "contact_wa" },
            { label: "🏠 Marangu Route (6 days)", next: "contact_wa" },
            { label: "🤔 Help me choose a route", next: "contact_wa" },
        ],
    },
    pricing: {
        message: "Our experiences start from $1,500 per person. Everything is fully tailored — no two trips are the same.",
        options: [
            { label: "📦 View All Packages", next: "packages" },
            { label: "✍️ Get a Custom Quote", next: "quote" },
            { label: "💬 Ask via WhatsApp", next: "contact_wa" },
        ],
    },
    human: {
        message: "Of course! Our team is available 7 days a week, 7am – 8pm EAT. How would you like to reach us?",
        options: [
            { label: "💬 WhatsApp Now", next: "contact_wa" },
            { label: "✉️ Send a Message", next: "contact_form" },
            { label: "📞 Call +255 755 310 533", next: "contact_call" },
        ],
    },
    packages: { message: "packages_redirect", options: [] },
    quote: { message: "quote_redirect", options: [] },
    contact_wa: { message: "wa_redirect", options: [] },
    contact_form: { message: "form_redirect", options: [] },
    contact_call: { message: "call_redirect", options: [] },
};

type Message = { from: "bot" | "user"; text: string };

export default function FloatingWidgets() {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { from: "bot", text: STEPS.start.message },
    ]);
    const [step, setStep] = useState("start");
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    function handleOption(option: { label: string; next: string }) {
        const userMsg: Message = { from: "user", text: option.label };
        setMessages(prev => [...prev, userMsg]);
        setTyping(true);
        setStep(option.next);

        setTimeout(() => {
            setTyping(false);
            const next = STEPS[option.next];
            if (!next) return;

            // Handle redirects
            if (next.message === "wa_redirect") {
                setMessages(prev => [...prev, {
                    from: "bot",
                    text: "Opening WhatsApp now — our team will respond within minutes! 🚀",
                }]);
                setTimeout(() => window.open(WHATSAPP_URL, "_blank"), 800);
                return;
            }
            if (next.message === "form_redirect") {
                setMessages(prev => [...prev, {
                    from: "bot",
                    text: "Taking you to our contact form — we reply within 24 hours! ✉️",
                }]);
                setTimeout(() => window.location.href = "/contact/", 800);
                return;
            }
            if (next.message === "call_redirect") {
                setMessages(prev => [...prev, {
                    from: "bot",
                    text: "Connecting you now! If we miss you, we'll call back. 📞",
                }]);
                setTimeout(() => window.location.href = "tel:+255755310533", 800);
                return;
            }
            if (next.message === "packages_redirect") {
                setMessages(prev => [...prev, {
                    from: "bot",
                    text: "Opening our packages page for you! 🦁",
                }]);
                setTimeout(() => window.location.href = "/safari/packages/", 800);
                return;
            }
            if (next.message === "quote_redirect") {
                setMessages(prev => [...prev, {
                    from: "bot",
                    text: "Taking you to our quote form — we'll craft a bespoke price for you! ✍️",
                }]);
                setTimeout(() => window.location.href = "/quote/", 800);
                return;
            }

            setMessages(prev => [...prev, { from: "bot", text: next.message }]);
        }, 900);
    }

    function resetChat() {
        setMessages([{ from: "bot", text: STEPS.start.message }]);
        setStep("start");
        setTyping(false);
    }

    const currentStep = STEPS[step];
    const showOptions = !typing && currentStep?.options?.length > 0;

    return (
        <>
            {/* ── WhatsApp Floating Button ──────────────────────────────── */}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
            >
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.625a.75.75 0 0 0 .919.919l5.752-1.476A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.53-5.21-1.446l-.374-.222-3.873.994.994-3.832-.241-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
            </a>

            {/* ── Chatbot Toggle Button ─────────────────────────────────── */}
            <button
                onClick={() => setChatOpen(o => !o)}
                aria-label={chatOpen ? "Close chat" : "Open chat assistant"}
                className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#8B5E3C] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
            >
                {chatOpen
                    ? <X className="w-6 h-6 text-white" />
                    : <MessageCircle className="w-6 h-6 text-white" />
                }
                {/* Pulse dot — shows when chat is closed */}
                {!chatOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white animate-pulse" />
                )}
            </button>

            {/* ── Chat Panel ───────────────────────────────────────────── */}
            {chatOpen && (
                <div className="fixed bottom-40 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
                    {/* Header */}
                    <div className="bg-[#2B140A] px-4 py-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🦁</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-bold text-sm leading-tight">Amara</p>
                            <p className="text-white/60 text-xs">Illashimwe Safari Assistant</p>
                        </div>
                        <button
                            onClick={resetChat}
                            title="Restart conversation"
                            className="text-white/50 hover:text-white text-xs underline"
                        >
                            Restart
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-[#F9F5F0]">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                                    msg.from === "bot"
                                        ? "bg-white text-gray-800 rounded-tl-sm shadow-sm"
                                        : "bg-[#8B5E3C] text-white rounded-tr-sm"
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {typing && (
                            <div className="flex justify-start">
                                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Quick reply options */}
                    {showOptions && (
                        <div className="p-3 border-t border-gray-100 bg-white space-y-2">
                            {currentStep.options.map((opt) => (
                                <button
                                    key={opt.label}
                                    onClick={() => handleOption(opt)}
                                    className="w-full text-left px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-700 hover:border-[#8B5E3C] hover:bg-[#F9F5F0] hover:text-[#8B5E3C] transition-all font-medium"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* WhatsApp shortcut footer */}
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
                        <Send className="w-3 h-3 text-gray-400 flex-shrink-0" />
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-[#25D366] transition-colors"
                        >
                            Chat directly on WhatsApp →
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

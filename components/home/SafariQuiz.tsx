"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, CheckCircle2, Loader2 } from "lucide-react";

interface SafariQuizProps {
    isOpen: boolean;
    onClose: () => void;
}

const quizSteps = [
    {
        title: "Who's traveling?",
        question: "Select your party type to help us tailor the experience.",
        options: ["Solo Adventurer", "Couple / Honeymoon", "Family with Kids", "Group of Friends"],
    },
    {
        title: "What is your main focus?",
        question: "What are you most excited to see or do?",
        options: ["The Great Migration", "Big 5 Wildlife Viewing", "Photography & Nature", "Culture & Relaxation"],
    },
    {
        title: "When are you planning to travel?",
        question: "This helps us suggest the best destinations based on seasonality.",
        options: ["Within 3 months", "3-6 months", "6+ months", "Undecided"],
    },
];

export default function SafariQuiz({ isOpen, onClose }: SafariQuizProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    if (!isOpen) return null;

    const handleSelect = (option: string) => {
        setAnswers({ ...answers, [currentStep]: option });
        if (currentStep < quizSteps.length) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300); // Slight delay for visual feedback
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await fetch("/submit.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ form_type: "safari-quiz", name, email, ...answers }),
            });
        } finally {
            setIsLoading(false);
            setIsSubmitted(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsSubmitted(false);
        setEmail("");
        setName("");
        onClose();
    };

    const progress = ((currentStep) / (quizSteps.length + 1)) * 100; // +1 for the lead capture step

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="quiz-title"
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col relative"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <h2 id="quiz-title" className="text-2xl font-serif font-bold text-gray-900">
                            Build Your Safari
                        </h2>
                        <button
                            onClick={onClose}
                            aria-label="Close quiz"
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    {!isSubmitted && (
                        <div className="w-full bg-gray-100 h-1.5">
                            <motion.div
                                className="bg-primary h-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-8 min-h-[350px] flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                                        Journey Begun
                                    </h3>
                                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                        Thank you, {name}! We've received your preferences and our safari experts will craft a tailored itinerary for you shortly.
                                    </p>
                                    <button
                                        onClick={resetQuiz}
                                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            ) : currentStep < quizSteps.length ? (
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="mb-8">
                                        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                                            Step {currentStep + 1} of {quizSteps.length}
                                        </span>
                                        <h3 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-3">
                                            {quizSteps[currentStep].title}
                                        </h3>
                                        <p className="text-gray-500">{quizSteps[currentStep].question}</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {quizSteps[currentStep].options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleSelect(option)}
                                                className={`text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${answers[currentStep] === option
                                                        ? "border-primary bg-primary/5 shadow-md"
                                                        : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className={`font-medium ${answers[currentStep] === option ? "text-primary" : "text-gray-700"}`}>
                                                    {option}
                                                </span>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${answers[currentStep] === option ? "border-primary" : "border-gray-300"}`}>
                                                    {answers[currentStep] === option && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="lead-capture"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="mb-8 text-center">
                                        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3">
                                            Where should we send your itinerary?
                                        </h3>
                                        <p className="text-gray-500">
                                            Based on your choices, we're putting together the perfect safari experience.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-primary text-white py-4 rounded-xl font-bold tracking-wide shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-0.5 mt-6 disabled:opacity-60 flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" />Sending…</> : "Get My Custom Itinerary"}
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer Controls */}
                    {!isSubmitted && (
                        <div className="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-100">
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${currentStep === 0
                                        ? "text-gray-300 cursor-not-allowed"
                                        : "text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span>Back</span>
                            </button>
                            <div className="text-sm text-gray-400 font-medium tracking-wide">
                                ILLASHIMWE ADVENTURES
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

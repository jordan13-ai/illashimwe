import { Metadata } from "next";
import PlanTripForm from "./PlanTripForm";

export const metadata: Metadata = {
    title: "Plan My Trip | Custom Tanzania Safari Request",
    description: "Tell us your dream adventure and our experts will build a bespoke Tanzania safari, Kilimanjaro climb, or Zanzibar escape — tailored to your dates, budget, and style.",
};

export default function PlanTripPage() {
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
                        <h1 className="font-molot text-4xl md:text-5xl text-[#F5F5F0] mb-12 tracking-wide">
                            CUSTOM TRIP REQUEST
                        </h1>
                        <PlanTripForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

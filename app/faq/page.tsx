import { Metadata } from "next";
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Tanzania Safari & Kilimanjaro",
    description: "Answers to common questions about Tanzania safaris, Kilimanjaro climbs, visa requirements, best time to visit, what to pack, and booking with Illashimwe Adventure.",
};

export default function FAQPage() {
    return (
        <ResourcePageLayout
            title="Frequently Asked Questions"
            subtitle="Answers to your most common queries."
            backgroundImage="/images/generated/game-drive-lions.webp"
        >
            <div className="space-y-12">

                {/* Booking & Logistics */}
                <section>
                    <h3 className="text-primary border-b border-gray-200 pb-2 mb-6">Booking & Logistics</h3>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                What is included in the safari price?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                Our safari packages are comprehensive. They typically include:
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Private 4x4 Land Cruiser with pop-up roof.</li>
                                    <li>Professional English-speaking driver/guide.</li>
                                    <li>All park entrance and concession fees.</li>
                                    <li>Accommodations as specified in the itinerary.</li>
                                    <li>All meals (Breakfast, Lunch, Dinner) and drinking water.</li>
                                    <li>AMREF Flying Doctors evacuation insurance.</li>
                                </ul>
                                Exclusions are international flights, visas, travel insurance, tips, alcohol, and laundry.
                            </div>
                        </details>

                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                How do I make a payment?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                We accept payments via Bank Transfer (Wire Transfer) or Credit Card (via a secure online link, subject to a surcharge). A 30% deposit is required to confirm your booking, with the balance due 45 days before arrival.
                            </div>
                        </details>

                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                Do I need travel insurance?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                Yes, comprehensive travel insurance is mandatory. It must cover medical expenses, repatriation, and trip cancellation. While we include evacuation cover, it does not pay for hospital bills.
                            </div>
                        </details>
                    </div>
                </section>

                {/* On Safari */}
                <section>
                    <h3 className="text-primary border-b border-gray-200 pb-2 mb-6">On Safari</h3>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                What are the vehicles like?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                We use custom-built Toyota Land Cruisers extended for comfort. They feature large sliding windows and a pop-up roof for 360-degree game viewing. Each vehicle has a fridge/cooler box, charging ports (UK 3-pin & USB), and radio communication.
                            </div>
                        </details>

                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                Is there WiFi and charging?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                <strong>Charging:</strong> Yes, you can charge your devices in the vehicle during drives and at your lodge/camp.
                                <br />
                                <strong>WiFi:</strong> Most lodges provide WiFi in the main lounge/dining areas. Connection speeds vary and may be slow in remote areas. We encourage you to disconnect and enjoy nature!
                            </div>
                        </details>

                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                Can children come on safari?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                Absolutely! We love hosting families. Children aged 6+ enjoy safaris the most. We can arrange family tents, shorter game drives, and lodges with pools to keep the little ones entertained.
                            </div>
                        </details>
                    </div>
                </section>

                {/* Kilimanjaro & Trekking */}
                <section>
                    <h3 className="text-primary border-b border-gray-200 pb-2 mb-6">Kilimanjaro Trekking</h3>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                Which route is best for beginners?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                We highly recommend the <strong>Lemosho</strong> or <strong>Machame</strong> routes. They offer better acclimatization profiles (&quot;climb high, sleep low&quot;) which significantly increases your summit success rate compared to the shorter Marangu route.
                            </div>
                        </details>

                        <details className="group bg-gray-50 rounded-lg p-4 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-deep-brown">
                                How physically fit do I need to be?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                You don&apos;t need to be a marathon runner, but good cardio fitness and leg strength are essential. The main challenge is altitude, not technical climbing. We recommend hiking, cycling, or jogging 3-4 times a week for at least 2 months prior to your trip.
                            </div>
                        </details>
                    </div>
                </section>

            </div>
        </ResourcePageLayout>
    );
}

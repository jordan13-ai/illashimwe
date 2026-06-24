import { Metadata } from "next";
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export const metadata: Metadata = {
    title: "Safari Packing List | What to Bring to Tanzania",
    description: "The ultimate Tanzania safari packing list — clothing, camera gear, medications, and documents. Expert advice from Illashimwe Adventure guides to pack light and right.",
};

export default function PackingPage() {
    return (
        <ResourcePageLayout
            title="Packing Essentials"
            subtitle="The ultimate checklist for Safari, Trekking, and Beach holidays."
            backgroundImage="/images/generated/safari-camping.webp"
        >
            <div className="space-y-16">

                {/* Introduction */}
                <section>
                    <p className="text-lg leading-relaxed">
                        Packing for Tanzania can be tricky due to the varied climates. You might experience the tropical heat of Zanzibar, the dry savannah dust, and the freezing glacial temperatures of Kilimanjaro all in one trip. Soft-sided luggage (duffel bags) is highly recommended for safari vehicles and light aircraft flights, where strict weight limits (15kg/33lbs) often apply.
                    </p>
                </section>

                {/* Safari Packing */}
                <section>
                    <h3 className="border-b-2 border-primary/20 pb-2 mb-6">Safari Packing List</h3>
                    <p className="mb-6">For game drives, comfort is key. Stick to neutral colors (khaki, beige, green) to blend in with the bush. Avoid bright blue/black (attracts tsetse flies) and camouflage patterns (reserved for military).</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="mt-0 text-deep-brown">Clothing</h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>3-4 T-shirts or breathable shirts</li>
                                <li>2 Long-sleeved shirts (protection from sun/insects)</li>
                                <li>2 Pairs of zip-off safari trousers</li>
                                <li>1 Fleece or lightweight jacket (mornings are chilly!)</li>
                                <li>Comfortable walking shoes/sneakers</li>
                                <li>Sandals or flip-flops for the lodge</li>
                                <li>Wide-brimmed safari hat</li>
                                <li>Swimwear (most lodges have pools)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="mt-0 text-deep-brown">Essentials & Gadgets</h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>Binoculars (8x42 or 10x42 recommended)</li>
                                <li>Camera with zoom lens (300mm+) & extra SD cards</li>
                                <li>Power bank & universal travel adapter (Type G)</li>
                                <li>Sunglasses & Sunscreen (SPF 30+)</li>
                                <li>Insect repellent (DEET based)</li>
                                <li>Malaria prophylaxis tablets</li>
                                <li>Personal toiletries & hygiene products</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Kilimanjaro Gear */}
                <section>
                    <h3 className="border-b-2 border-primary/20 pb-2 mb-6">Kilimanjaro Trekking Gear</h3>
                    <p className="mb-6">Scaling the roof of Africa requires specialized technical gear. Temperatures can drop to -20°C at the summit.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="border border-gray-200 p-5 rounded">
                            <h4 className="text-primary text-lg mt-0">Base & Mid Layers</h4>
                            <ul className="list-disc pl-4 text-sm spacing-y-1">
                                <li>2-3 Thermal tops (moisture-wicking, no cotton)</li>
                                <li>1 Thermal legging</li>
                                <li>2 Fleece jackets (1 light, 1 heavy)</li>
                                <li>Hiking trousers (convertible)</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 p-5 rounded">
                            <h4 className="text-primary text-lg mt-0">Outer Layers</h4>
                            <ul className="list-disc pl-4 text-sm spacing-y-1">
                                <li>Waterproof/Windproof Jacket (Gore-Tex)</li>
                                <li>Waterproof Trousers (Side zippers helpful)</li>
                                <li>Heavy Down Jacket (Rated for -20°C)</li>
                                <li>Warm beanie & Neck gaiter (Buff)</li>
                                <li>Waterproof gloves + thin liners</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 p-5 rounded">
                            <h4 className="text-primary text-lg mt-0">Footwear & Equipment</h4>
                            <ul className="list-disc pl-4 text-sm spacing-y-1">
                                <li>Broken-in Hiking Boots (Waterproof)</li>
                                <li>Gaiters (to keep scree out)</li>
                                <li>4-5 Pairs of wool/trekking socks</li>
                                <li>Sleeping Bag (-15°C rating)</li>
                                <li>Trekking Poles (adjustable)</li>
                                <li>Headlamp + spare batteries</li>
                                <li>Daypack (30-40L) with rain cover</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* First Aid */}
                <section>
                    <h3>Personal First Aid Kit</h3>
                    <p>While our guides carry medical kits, bringing your own small supply is wise.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-gray-700">
                        <li>• Painkillers (Paracetamol/Ibuprofen)</li>
                        <li>• Antihistamines for allergies</li>
                        <li>• Antiseptic cream & Plasters/Band-aids</li>
                        <li>• Rehydration salts (electrolytes)</li>
                        <li>• Motion sickness tablets (for light aircraft)</li>
                        <li>• Any personal prescription medication</li>
                    </ul>
                </section>

                <div className="bg-primary/10 p-8 rounded-xl border-l-4 border-primary flex gap-4 items-start">
                    <span className="material-symbols-outlined text-4xl text-primary">inventory_2</span>
                    <div>
                        <h4 className="mt-0 text-deep-brown">Gear Rental Available</h4>
                        <p className="mb-0 text-sm">
                            Don&apos;t want to buy expensive gear for one trip? We offer high-quality rental equipment for Kilimanjaro climbs, including sleeping bags, down jackets, and trekking poles. Let us know your sizes when booking!
                        </p>
                    </div>
                </div>
            </div>
        </ResourcePageLayout>
    );
}

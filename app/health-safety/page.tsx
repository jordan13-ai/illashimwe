import { Metadata } from "next";
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export const metadata: Metadata = {
    title: "Health & Safety on Safari | Tanzania Travel Tips",
    description: "Essential health and safety information for your Tanzania safari — vaccinations, malaria prevention, altitude sickness on Kilimanjaro, and emergency protocols.",
};

export default function HealthSafetyPage() {
    return (
        <ResourcePageLayout
            title="Health & Safety"
            subtitle="Comprehensive advice for a safe and worry-free journey."
            backgroundImage="/images/generated/luxury-lodge-interior.webp"
        >
            <div className="space-y-12">
                <section>
                    <h3>Pre-Trip Health Planning</h3>
                    <p>
                        Preparing your health for an African safari is just as important as packing your bags. We strongly recommend visiting a travel clinic or your GP at least 4-6 weeks before departure to update your vaccinations and discuss malaria prophylaxis.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-safari-green text-xl mb-4 font-bold">Vaccinations</h4>
                        <ul className="space-y-3">
                            <li>
                                <strong>Yellow Fever:</strong> Mandatory if arriving from a country with risk of yellow fever (e.g., Kenya, Ethiopia). You must present your yellow card at immigration.
                            </li>
                            <li>
                                <strong>Routine Vaccines:</strong> Ensure you are up to date with Tetanus, Diphtheria, Polio, and MMR.
                            </li>
                            <li>
                                <strong>Recommended:</strong> Hepatitis A & B, Typhoid. Rabies is generally not needed for standard safaris but consider it if you plan extensive interaction with animals or remote village stays.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-safari-green text-xl mb-4 font-bold">Malaria Prevention</h4>
                        <p className="text-sm mb-4">
                            Malaria is present in most parts of Tanzania below 1,800m. Prevention is a two-step process: prophylaxis and bite prevention.
                        </p>
                        <ul className="space-y-2 list-disc pl-5 text-sm">
                            <li><strong>Meds:</strong> Take anti-malarials (like Malarone or Doxycycline) as prescribed.</li>
                            <li><strong>Cover Up:</strong> Wear long sleeves and pants after dusk.</li>
                            <li><strong>Repel:</strong> Use insect repellent with 30%+ DEET.</li>
                            <li><strong>Nets:</strong> Sleep under the treated mosquito nets provided in all our accommodations.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-blue-50 p-8 rounded-xl border border-blue-100 items-start gap-6 flex flex-col md:flex-row">
                    <div className="shrink-0 bg-blue-100 p-4 rounded-full text-blue-600">
                        <span className="material-symbols-outlined text-4xl">medical_services</span>
                    </div>
                    <div>
                        <h3 className="mt-0 text-blue-900">Emergency Evacuation Coverage</h3>
                        <p className="text-blue-800/80">
                            We take your safety seriously. Every client travelling with Illashimwe Adventure is automatically enrolled in <strong>AMREF Flying Doctors</strong> Tourist Evacuation scheme.
                        </p>
                        <p className="text-blue-800/80 mb-0">
                            This provides immediate air evacuation from the bush to a high-standard hospital in Nairobi or Dar es Salaam in the event of a critical medical emergency. Please note: This is <em>transport only</em>. You must still have comprehensive travel insurance to cover medical bills and hospital stays.
                        </p>
                    </div>
                </section>

                <section>
                    <h3>Food & Water Hygiene</h3>
                    <p>
                        Traveler&apos;s diarrhea is the most common ailment, but it is easily avoidable.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <li className="bg-white shadow p-4 rounded border-t-4 border-safari-green">
                            <strong>Drinking Water:</strong> Never drink tap water. We provide unlimited bottled mineral water in our safari vehicles. Use bottled water for brushing teeth as well.
                        </li>
                        <li className="bg-white shadow p-4 rounded border-t-4 border-safari-green">
                            <strong>Fresh Produce:</strong> In our partner lodges, salads and fruits are washed with purified water and are safe to eat. Avoid street food that looks uncooked or has been sitting out.
                        </li>
                        <li className="bg-white shadow p-4 rounded border-t-4 border-safari-green">
                            <strong>Dietary Needs:</strong> We cater to all dietary requirements including gluten-free, vegan, and nut allergies. Please inform us in advance so our chefs can prepare.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Sun & Hydration</h3>
                    <p>
                        The equatorial sun is stronger than you think, especially at high altitudes (like Ngorongoro or Kilimanjaro).
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Drink at least 3-4 liters of water per day.</li>
                        <li>Wear a wide-brimmed hat and quality sunglasses.</li>
                        <li>Apply high-factor sunscreen (SPF 30-50) frequently.</li>
                    </ul>
                </section>

                <section>
                    <h3>Safety on Safari</h3>
                    <p>
                        Wild animals are dangerous. While incidents are extremely rare, following rules is essential:
                    </p>
                    <ul className="list-disc pl-5 mt-2 font-bold text-deep-brown">
                        <li>Never leave the vehicle unless told to do so by your guide.</li>
                        <li>Do not stand up when the vehicle is moving.</li>
                        <li>Keep your voice low to avoid stressing the animals.</li>
                        <li>At lodges, never walk alone at night—ask for a guard (askari) to escort you to your room.</li>
                    </ul>
                </section>
            </div>
        </ResourcePageLayout>
    );
}

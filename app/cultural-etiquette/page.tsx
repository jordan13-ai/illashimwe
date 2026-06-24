import { Metadata } from "next";
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export const metadata: Metadata = {
    title: "Cultural Etiquette in Tanzania | Safari Dos & Don'ts",
    description: "Respect local customs and make meaningful connections. Learn Tanzania's cultural etiquette — greetings, dress codes, wildlife ethics, and community interaction tips.",
};

export default function CulturalEtiquettePage() {
    return (
        <ResourcePageLayout
            title="Cultural Etiquette"
            subtitle="Connect meaningfully with the people and traditions of Tanzania."
            backgroundImage="/images/generated/maasai-dance.webp"
        >
            <div className="space-y-12">
                <section>
                    <h3>The Tanzanian Spirit</h3>
                    <p>
                        Tanzanians are known for their friendliness, warmth, and politeness. The culture is a rich tapestry of over 120 tribes, yet united by a common language (Swahili) and a sense of national unity. A smile and a respectful greeting go a long way here.
                    </p>
                </section>

                <section>
                    <h3>Language & Greetings</h3>
                    <p>
                        While English is widely spoken, learning a few words of Swahili shows immense respect. Greetings are very important and should never be rushed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <strong>Jambo!</strong> (Hello!) <br />
                            <span className="text-gray-500 text-sm">Universal greeting.</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <strong>Habari?</strong> (How are you?) <br />
                            <span className="text-gray-500 text-sm">Reply with &quot;Nzuri&quot; (Good).</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <strong>Karibu</strong> (Welcome) <br />
                            <span className="text-gray-500 text-sm">You will hear this often!</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <strong>Asante Sana</strong> (Thank you very much) <br />
                            <span className="text-gray-500 text-sm">Politeness is key.</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <strong>Pole</strong> (Sorry / Sympathy) <br />
                            <span className="text-gray-500 text-sm">Said if you trip, sneeze, or look tired.</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100">
                            <strong>Hakuna Matata</strong> (No worries) <br />
                            <span className="text-gray-500 text-sm">Yes, it&apos;s a real phrase!</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3>Detailed Tipping Guide</h3>
                    <p>
                        Tipping is a vital part of the safari economy. It supplements the income of guides and staff who work fastidiously to make your trip special.
                    </p>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-3 font-bold text-deep-brown">Role</th>
                                    <th className="p-3 font-bold text-deep-brown">Recommended Amount</th>
                                    <th className="p-3 font-bold text-deep-brown">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr>
                                    <td className="p-3 font-bold">Safari Driver Guide</td>
                                    <td className="p-3">$20 - $30 per day</td>
                                    <td className="p-3">Per vehicle/group. Handed directly at the end.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Kilimanjaro Chief Guide</td>
                                    <td className="p-3">$20 - $25 per day</td>
                                    <td className="p-3">From the whole group.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Assistant Guides</td>
                                    <td className="p-3">$15 - $20 per day</td>
                                    <td className="p-3">Crucial for large climbing groups.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Cooks</td>
                                    <td className="p-3">$15 per day</td>
                                    <td className="p-3">For both Safari and Kili.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Porters</td>
                                    <td className="p-3">$10 per day per porter</td>
                                    <td className="p-3">You will have multiple porters.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Lodge Staff</td>
                                    <td className="p-3">$5 - $10 per day</td>
                                    <td className="p-3">Place in the communal tip box.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 italic">* Amounts are suggestions and should reflect the quality of service. US Dollars (printed after 2009) or TZS are accepted.</p>
                </section>

                <section>
                    <h3>Responsible Tourism</h3>
                    <ul className="space-y-4">
                        <li>
                            <strong>Photography:</strong> Always ask permission before photographing people. In some tourist areas (like Maasai bomas), a small fee is expected in exchange for photos. Do not photograph military buildings, airports, or police.
                        </li>
                        <li>
                            <strong>Dress Modestly:</strong> While safari wear is casual, when in towns (Arusha, Moshi) or Zanzibar (Stone Town), avoid short skirts or revealing tops. Shoulders and knees should be covered out of respect for local conservative values.
                        </li>
                        <li>
                            <strong>Environment:</strong> Tanzania banned plastic bags in 2019. Do not bring single-use plastic bags into the country. Leave no trace—carry all your litter back with you.
                        </li>
                        <li>
                            <strong>Children:</strong> Please do not give money or sweets to children on the roadside. It encourages begging and truancy. If you wish to help, we can arrange a visit to a school or orphanage to donate supplies directly.
                        </li>
                    </ul>
                </section>
            </div>
        </ResourcePageLayout>
    );
}

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export default function GuidePage() {
    return (
        <ResourcePageLayout
            title="Tanzania Travel Guide"
            subtitle="Everything you need to know before your adventure."
            backgroundImage="/images/generated/four-seasons.webp" // Using one of the generated images if available, or fallback
        >
            <h3>Visa Requirements</h3>
            <p>
                Most visitors to Tanzania require a visa. You can obtain a visa on arrival at major entry points (Dar es Salaam, Kilimanjaro, Zanzibar) or apply online for an e-Visa in advance. The cost is typically $50 USD for most nationalities and $100 USD for US citizens. Please ensure your passport is valid for at least six months beyond your departure date.
            </p>

            <h3>Best Time to Visit</h3>
            <p>
                Tanzania is a year-round destination, but the best time depends on what you want to see:
            </p>
            <ul>
                <li><strong>June to October:</strong> Best for game viewing in all parks (Dry Season). The Great Migration is in the Northern Serengeti.</li>
                <li><strong>January to March:</strong> Calving season in the Southern Serengeti and excellent bird watching.</li>
                <li><strong>April and May:</strong> The long rains (&lsquo;Green Season&rsquo;). Fewer crowds and lush landscapes, though some roads may be muddy.</li>
            </ul>

            <h3>Currency & Payments</h3>
            <p>
                The local currency is the Tanzanian Shilling (TZS). However, US Dollars are widely accepted for tourism services. We recommend carrying newer US Dollar notes (printed after 2009) as older notes are often rejected. Credit cards (Visa/Mastercard) are accepted at most hotels/lodges but may incur a surcharge.
            </p>

            <h3>Language</h3>
            <p>
                Swahili and English are the official languages. English is widely spoken in the tourism industry, so you’ll have no trouble communicating with your guides and lodge staff. Learning a distinct phrase like &quot;Jambo&quot; (Hello) or &quot;Asante&quot; (Thank you) is always appreciated!
            </p>

            <h3>Getting There</h3>
            <p>
                <strong>Kilimanjaro International Airport (JRO):</strong> The best gateway for the Northern Safari Circuit (Serengeti, Ngorongoro) and Mount Kilimanjaro treks.
            </p>
            <p>
                <strong>Julius Nyerere International Airport (DAR):</strong> Located in Dar es Salaam, ideal for the Southern Circuit or business travel.
            </p>
            <p>
                <strong>Abeid Amani Karume International Airport (ZNZ):</strong> The main entry point for Zanzibar island.
            </p>
        </ResourcePageLayout>
    );
}

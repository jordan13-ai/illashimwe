import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export default function TermsPage() {
    return (
        <ResourcePageLayout
            title="Terms & Conditions"
            subtitle="The agreement between you and Illashimwe Adventure."
            backgroundImage="/images/generated/ngorongoro-crater.webp"
        >
            <h3>1. Booking & Confirmation</h3>
            <p>
                A deposit of 30% is required to confirm your booking. The balance is due 45 days prior to the departure date. If the booking is made within 45 days of departure, full payment is required immediately.
            </p>

            <h3>2. Cancellation Policy</h3>
            <p>
                Cancellations must be made in writing. The following cancellation fees apply:
            </p>
            <ul>
                <li><strong>More than 60 days prior:</strong> Deposit is non-refundable (but may be transferred).</li>
                <li><strong>60 - 30 days prior:</strong> 50% of total tour cost.</li>
                <li><strong>29 - 15 days prior:</strong> 75% of total tour cost.</li>
                <li><strong>Less than 15 days prior:</strong> 100% of total tour cost.</li>
            </ul>

            <h3>3. Travel Insurance</h3>
            <p>
                Comprehensive travel insurance is mandatory for all clients. It must cover personal injury, medical expenses, repatriation, and evacuation expenses (AMREF Flying Doctors coverage is for transport only). We also strongly recommend cancellation coverage.
            </p>

            <h3>4. Changes to Itinerary</h3>
            <p>
                Illashimwe Adventure reserves the right to alter the itinerary or accommodation in the event of unforeseen circumstances (e.g., weather, road conditions) to ensure the safety and enjoyment of the trip. We will make every effort to provide a comparable alternative.
            </p>

            <h3>5. Liability</h3>
            <p>
                While we take every precaution to ensure your safety, Illashimwe Adventure accepts no liability for loss, damage, injury, or death that may occur during the safari, trek, or transfer. Clients participate at their own risk.
            </p>
        </ResourcePageLayout>
    );
}

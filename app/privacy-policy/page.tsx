import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export default function PrivacyPage() {
    return (
        <ResourcePageLayout
            title="Privacy Policy"
            subtitle="How we protect and use your personal information."
            backgroundImage="/images/generated/tarangire-elephants.webp"
        >
            <h3>Introduction</h3>
            <p>
                Illashimwe Adventure (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h3>Data We Collect</h3>
            <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul>
                <li><strong>Identity Data:</strong> Name, username or similar identifier, marital status, title, date of birth and gender.</li>
                <li><strong>Contact Data:</strong> Billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li><strong>Technical Data:</strong> Internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>

            <h3>How We Use Your Data</h3>
            <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
                <li>To perform the contract we are about to enter into or have entered into with you (e.g., booking your safari).</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h3>Data Security</h3>
            <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h3>Contact Us</h3>
            <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@illashimweadventures.com" className="text-primary hover:underline">info@illashimweadventures.com</a>.
            </p>
        </ResourcePageLayout>
    );
}

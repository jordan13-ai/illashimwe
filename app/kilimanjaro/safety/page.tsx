import { Metadata } from "next";
import KiliPages from "@/components/kilimanjaro/KiliPage";
import { KILI_GENERAL } from "@/data/kilimanjaro";

export const metadata: Metadata = {
    title: KILI_GENERAL.safety.metaTitle,
    description: KILI_GENERAL.safety.metaDescription,
};

export default function SafetyPage() {
    return <KiliPages data={KILI_GENERAL.safety} />;
}

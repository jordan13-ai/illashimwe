import { Metadata } from "next";
import KiliPages from "@/components/kilimanjaro/KiliPage";
import { KILI_GENERAL } from "@/data/kilimanjaro";

export const metadata: Metadata = {
    title: KILI_GENERAL.overview.metaTitle,
    description: KILI_GENERAL.overview.metaDescription,
};

export default function OverviewPage() {
    return <KiliPages data={KILI_GENERAL.overview} />;
}

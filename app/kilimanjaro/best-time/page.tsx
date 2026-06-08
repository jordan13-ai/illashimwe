import { Metadata } from "next";
import KiliPages from "@/components/kilimanjaro/KiliPage";
import { KILI_GENERAL } from "@/data/kilimanjaro";

export const metadata: Metadata = {
    title: KILI_GENERAL["best-time"].metaTitle,
    description: KILI_GENERAL["best-time"].metaDescription,
};

export default function BestTimePage() {
    return <KiliPages data={KILI_GENERAL["best-time"]} />;
}

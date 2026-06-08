import { Metadata } from "next";
import KiliPages from "@/components/kilimanjaro/KiliPage";
import { KILI_GENERAL } from "@/data/kilimanjaro";

export const metadata: Metadata = {
    title: KILI_GENERAL["packing-list"].metaTitle,
    description: KILI_GENERAL["packing-list"].metaDescription,
};

export default function PackingListPage() {
    return <KiliPages data={KILI_GENERAL["packing-list"]} />;
}

import { Metadata } from "next";
import KiliPages from "@/components/kilimanjaro/KiliPage";
import { KILI_PACKAGES } from "@/data/kilimanjaro";

export async function generateStaticParams() {
    return Object.keys(KILI_PACKAGES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const data = KILI_PACKAGES[params.slug];
    if (!data) return { title: "Page Not Found" };

    return {
        title: data.metaTitle,
        description: data.metaDescription,
    };
}

export default async function PackagePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const data = KILI_PACKAGES[params.slug];
    return <KiliPages data={data} />;
}

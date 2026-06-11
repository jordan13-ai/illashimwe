import { whyChooseItems } from "@/data/homepage";
import Image from "next/image";

export default function WhyChoose() {
    return (
        <section className="relative py-32 px-6 md:px-12 bg-[#FDFCF8] text-deep-brown overflow-hidden">
            <div className="container mx-auto max-w-[1400px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Col: Image */}
                    <div className="lg:w-5/12 relative w-full anim-fade-left">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[600px] lg:h-[750px] w-full">
                            <Image
                                src="/safari_guide_portrait_1768492265746.webp"
                                alt="Expert Guide"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover hover:scale-105 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="font-[family-name:var(--font-script)] text-primary text-4xl lg:text-5xl mb-2 drop-shadow-md">Authentic</p>
                                <h3 className="text-4xl font-serif font-bold text-white tracking-wide">Connections</h3>
                            </div>
                        </div>
                        <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-deep-brown/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Right Col: Features */}
                    <div className="lg:w-7/12">
                        <div className="mb-16 anim-fade-up">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-primary" />
                                <p className="font-[family-name:var(--font-script)] text-primary text-4xl lg:text-5xl">The Illashimwe</p>
                            </div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight text-deep-brown leading-none">
                                Difference
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {whyChooseItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="group cursor-default anim-fade-up"
                                    style={{ animationDelay: `${index * 120}ms` }}
                                >
                                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-deep-brown/5 text-deep-brown group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-4 text-deep-brown group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                        <p className="text-gray-500 leading-relaxed font-light text-lg">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

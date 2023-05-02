"use client";
import { qualitiesData, servicesImages } from "@/app/data/data";
import { useSlider } from "@/app/hooks/useSlider";
import { s } from "@/app/styles";
import { Cards } from "../Cards";

export const Qualities = () => {
    const [activeIdx, _] = useSlider(servicesImages);

    return <section className={`${s.container} ${s.bgImage} pt-20 md:pt-24 pb-20 !bg-cover overflow-x-hidden`}>
        <div className={`${s.gridRow} !place-items-start w-full`}>
            <h2 className={`${s.titleStart} mb-8`}>Your aircraft, our priority</h2>
            <p className={`${s.textStart} !text-xl !max-w-full mb-16`}>At HeavyTech MRO, we understand that choosing an MRO company for your aircraft maintenance, repair, and overhaul needs can be a daunting task. That&apos;s why we&apos;re here to make the decision easy for you. Here are a few reasons why choosing us is the best choice:</p>
            <Cards items={qualitiesData} />
            <p className="font-extralight text-base max-w-[37.5rem] mt-16">Choose HeavyTech  for all your MRO needs, and experience the highest level of expertise, quality, and customer service in the industry.</p>
        </div>
    </section>
}
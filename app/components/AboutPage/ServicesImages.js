"use client";
import { servicesImages } from "@/app/data/data";
import { useSlider } from "@/app/hooks/useSlider";
import { s } from "@/app/styles";

export const ServicesImages = () => {
    const [activeIdx, _] = useSlider(servicesImages);

    return <section className={`${s.container} ${s.bgImage} md:pt-24 pb-20 bg-[url('./images/bg_clouds.png')] !bg-cover`}>
        <div className={`hidden md:grid grid-flow-row place-items-center`}>
            <div className="flex items-center z-10">
                <div className={`${s.bgImage} h-[26rem] w-[26rem] bg-[url('./images/about_img_1.png')]`}></div>
                <div className={`${s.bgImage} h-[26rem] w-[26rem] bg-[url('./images/about_img_2.png')]`}></div>
                <div className={`${s.bgImage} h-[26rem] w-[26rem] bg-[url('./images/about_img_3.png')]`}></div>
            </div>
            <div className="flex items-center mt-[-4rem]">
                <div className={`${s.bgImage} h-[26rem] w-[26rem] bg-[url('./images/about_img_4.png')]`}></div>
                <div className={`${s.bgImage} h-[26rem] w-[26rem] bg-[url('./images/about_img_5.png')]`}></div>
            </div>
        </div>
        <div className={`${s.gridRow} gap-12 md:hidden w-full`}>
            <div className={`${s.bgImage} w-full aspect-square ${servicesImages[activeIdx]} transition-all`} />
            <div className="flex items-center gap-6">
                {servicesImages.map((_, i) => <div key={i} className={`${i === activeIdx ? 'bg-red' : 'bg-white'} h-3 w-3 rounded-sm rotate-45 select-none`} />)}
            </div>
        </div>
    </section>
}
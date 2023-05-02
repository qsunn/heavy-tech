"use client";
import { s } from "@/app/styles"
import Link from "next/link"
import { services } from "../data/data";
import { useSlider } from "../hooks/useSlider";
import { Service } from "./Service"

export const Services = () => {
    const [activeIdx, setActiveIdx] = useSlider(services);

    return <section className={`${s.container} relative bg-[url('./images/bg_mro.png')] bg-no-repeat bg-top bg-cover pt-32 pb-20`}>
        <div className={`absolute ${s.container} top-0 md:top-32 ${s.bgImage} bg-[length:auto_100%] bg-[url('./images/decor_line.svg')] h-24 md:h-44 w-full`}>
            <div className={`${s.gridCol} gap-16 absolute top-[4rem] md:top-[10.5rem]`}>
                {services.map((service, i) => <Service key={i} service={service.name} activeIdx={activeIdx} idx={i} setActiveIdx={setActiveIdx} />)}
            </div>
        </div>
        <div className={`${s.gridRow} gap-12 md:gap-6`}>
            <h2 className={`${s.title} mb-32 md:mb-96`}>Services</h2>
            <h2 className={`${s.title} font-normal hidden md:block`}>{services[activeIdx].name}</h2>
            <p className={`${s.text} mb-8 md:mb-4 !max-w-[51rem] h-[7rem] md:[h-4rem]`}>{services[activeIdx].description}</p>
            <div className="hidden md:flex gap-4 items-center">
                <Link href="about" className={s.button}>Learn more</Link>
                <Link href="contacts" className={s.button}>Contact us</Link>
            </div>
            <div className="flex items-center gap-6 md:hidden">
                {services.map((_, i) => <div key={i} className={`${i === activeIdx ? 'bg-red' : 'bg-white'} h-3 w-3 rounded-sm rotate-45 select-none`} />)}
            </div>
        </div>
    </section>
}
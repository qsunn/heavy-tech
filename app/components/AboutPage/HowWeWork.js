import { s } from "@/app/styles"
import { Cards } from "../Cards"
import { howWeWorkData } from "@/app/data/data"

export const HowWeWork = () => {
    return <section className={`${s.container} pt-26 pb-14 bg-[url('./images/bg_howWeWork_mob.png')] md:bg-[url('./images/bg_howWeWork.png')] bg-right bg-contain bg-no-repeat overflow-x-hidden`}>
        <div className={`${s.gridRow} !place-items-start gap-14 w-full`}>
            <p className="text-3xl font-['Times_New_Roman']">At Heavyetch MRO, we pride ourselves on delivering high-quality MRO services that keep your aircraft operating safely and efficiently. We&apos;re committed to providing personalized service that meets your unique needs, and we&apos;re always striving to exceed your expectations.</p>
            <h3 className="font-extralight text-base md:font-medium md:text-2xl">Here&apos;s how we work:</h3>
            <Cards items={howWeWorkData} />
            <p className={`font-extralight text-base max-w-[37.5rem]`}>We take pride in our work and are dedicated to providing you with the highest quality MRO services in the industry. Contact us today to see how we can help keep your aircraft operating at peak performance.</p>
        </div>
    </section>
}
import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} pt-80 md:pt-[36.5rem] pb-20`}>
        <div className="grid grid-flow-row place-items-center z-10">
            <div className="mb-14">
                <p className={`${s.mainSubtitle} mb-6 md:mb-1`}>Reliable and trust worthy partner for your business</p>
                <h1 className={s.mainTitle}>Experience the difference with our quality MRO services</h1>
            </div>
            <p className={`${s.text} mb-14 md:mb-36`}>We&apos;re dedicated to building long-term relationships with our customers and delivering personalized customer service that goes above and beyond. Our team takes the time to understand your business and your goals, and we work closely with you to develop a customized maintenance plan that fits your budget and timeline. We&apos;re not just another MRO company. We&apos;re your partner in success, and we&apos;re committed to helping you achieve your goals. Choose Heavytech MRO for exceptional service, quality, and customer satisfaction.</p>
            <Buttons />
        </div>
    </section>
}
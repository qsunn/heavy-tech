import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} ${s.bgImage} pt-80 md:pt-[31.375rem] pb-10 bg-[url('./images/bg_certificates_mob.png')] md:bg-[url('./images/bg_certificates.png')] !bg-top`}>
        <div className="grid grid-flow-row place-items-center gap-14">
            <div>
                <p className={`${s.mainSubtitle} mb-6 md:mb-1`}>Reliable and trust worthy partner for your business</p>
                <h1 className={s.mainTitle}>Certified excellence in every service</h1>
            </div>
            <p className={`${s.text} md:hidden`}>At Heavytech MRO we take pride in providing high-quality MRO services to our customers. We understand the importance ofquality and safety in aircraft maintenance, repair, and overhaul, and we&apos;re committed to meeting and exceeding industry standards.</p>
            <Buttons />
            <p className={`${s.text} hidden md:block`}>At Heavytech MRO we take pride in providing high-quality MRO services to our customers. We understand the importance ofquality and safety in aircraft maintenance, repair, and overhaul, and we&apos;re committed to meeting and exceeding industry standards.</p>
        </div>
    </section>
}
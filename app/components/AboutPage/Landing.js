import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} ${s.bgImage} pt-80 md:pt-[36.5rem] pb-20 md:pb-24 bg-[url('./images/bg_about_landing_mob.png')] md:bg-[url('./images/bg_about_landing.png')] !bg-top md:!bg-center md:!bg-cover`}>
        <div className="grid grid-flow-row place-items-center z-10">
            <div className="mb-14 md:mb-8">
                <p className={`${s.mainSubtitle} mb-6 md:mb-8`}>Reliable and trust worthy partner<br className="md:hidden" /> for your business</p>
                <h1 className={`${s.mainTitle} !text-4xl my-4`}>From routine maintenance to major repairs and overhauls, we have the expertise<br className="hidden md:block" /> and resources to get the job done right and on time.</h1>
            </div>
            <Buttons href='/' />
        </div>
    </section>
}
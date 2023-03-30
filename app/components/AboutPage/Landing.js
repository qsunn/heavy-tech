import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} ${s.bgImage} pt-80 md:pt-[36.5rem] pb-24 bg-[url('./images/bg_about_landing.png')] !bg-[100%_14%] md:!bg-center md:!bg-cover`}>
        <div className="grid grid-flow-row place-items-center z-10">
            <div className="mb-14 md:mb-5">
                <p className={`${s.mainSubtitle} mb-6 md:mb-1`}>Reliable and trust worthy partner<br className="md:hidden" /> for your business</p>
                <h1 className={s.mainTitle}>Lorem Ipsum <span className="text-red">is</span> simply dummy text</h1>
            </div>
            <Buttons />
        </div>
    </section>
}
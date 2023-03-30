import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} pt-80 md:pt-[36.5rem] pb-20 ${s.bgImage} !bg-cover !bg-bottom bg-[url('./images/bg_services.png')]`}>
        <div className="grid grid-flow-row place-items-center z-10">
            <div className="mb-14 md:mb-5">
                <p className={`${s.mainSubtitle} mb-6 md:mb-1`}>Reliable and trust worthy partner for your business</p>
                <h1 className={s.mainTitle}>Lorem Ipsum <span className="text-red">is</span> simply dummy text</h1>
            </div>
            <Buttons />
        </div>
    </section>
}
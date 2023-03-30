import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} ${s.bgImage} pt-64 pb-9 bg-[url('./images/bg_home_landing.png')] !bg-cover`}>
        <div className="grid grid-flow-row place-items-center z-10">
            <div className={`${s.bgImage} bg-[url('./images/img_plane.png')] h-26 md:h-96 w-full md:w-[80rem] mb-20`} />
            <div className="mb-14 md:mb-5">
                <p className={`${s.mainSubtitle} mb-6 md:mb-1`}>Reliable and trust worthy partner for your business</p>
                <h1 className={s.mainTitle}>Aircraft <span className="text-red">&</span> Component maintenance</h1>
            </div>
            <Buttons />
            <div className={`${s.bgImage} bg-[url('./images/icon_arrow_bottom.svg')] w-[5.625rem] h-[3.5rem] mt-18`} />
        </div>
    </section>
}
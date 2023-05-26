import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Landing = () => {
    return <section className={`${s.container} pt-80 md:pt-[36rem] pb-9 relative`}>
        <div className="absolute top-0 left-0 grid place-items-center h-full w-auto overflow-hidden">
            <div className="max-sm:w-[320%] h-full">
                <video autoPlay loop muted playsInline className="h-full w-auto">
                    <source src={"/heavy_11.mp4"} type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="grid grid-flow-row place-items-center z-10">
            <div className="mb-14 md:mb-5">
                <p className={`${s.mainSubtitle} mb-6 md:mb-1`}>Reliable and trust worthy partner for your business</p>
                <h1 className={`${s.mainTitle} mb-16`}>Maintenance, Repair & Operations</h1>
            </div>
            <Buttons />
            <div className={`${s.bgImage} bg-[url('./images/icon_arrow_bottom.svg')] w-[5.625rem] h-[3.5rem] mt-18`} />
        </div>
    </section>
}
import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Mro = () => {
    return <section className={`${s.container} py-20 bg-[url('./images/bg_mro.png')] bg-no-repeat bg-bottom bg-cover relative`}>
        <div className={`${s.bgImage} bg-[url('./images/decor_lines_mob.svg')] md:bg-[url('./images/decor_lines.svg')] !bg-cover h-[60rem] md:h-[49rem] w-full absolute top-[-10rem] md:top-[-20.25rem] select-none`} />
        <div className={`${s.gridRow} !place-items-start md:!place-items-center gap-14 z-10`}>
            <h2 className="max-w-[48rem] font-light text-4xl md:text-center">Heavy Tech is an <span className="text-red">MRO operator offering</span> aircraft and component maintenance.</h2>
            <div className="h-6 w-6 bg-red rotate-45 hidden md:block" />
            <p className={`${s.text} md:mb-12 text-start md:text-center`}>Heavytech is a group of MRO holding companies, headquarters are located in Cyprus, but hangars and facilities as its subsidiaries are located in Bulgaria (Varna), Romania, Kenya and Egypt (Cairo). Thanks to these locations we have full geographical coverage with optimal ferry costs.HeavyTech is fully EASA 145 approved for Base and Line maintenance, and PART 21 G and J approved.HeavyTech specialises in Base maintenance; C-checks, Bridging checks, SI inspections, CPCP programs inspections, parts and materials trading; engine, APU & LG management and replacement; Spare parts managements, full aircraft engineering &design modifications, and technical training services. We offer in total 4 base maintenance lines for different aircraft types like Airbus Family, Boeing.</p>
            <Buttons />
        </div>
    </section>
}
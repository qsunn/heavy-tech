import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Mro = () => {
    return <section className={`${s.container} pt-32 pb-20 relative`}>
        <div className={`${s.bgImage} bg-[url('./images/decor_lines_mob.svg')] md:bg-[url('./images/decor_lines.svg')] !bg-cover h-[60rem] md:h-[49rem] w-full absolute top-[-10rem] md:top-[-17.125rem] select-none`} />
        <div className={`${s.gridRow} !place-items-start md:!place-items-center gap-14 z-10`}>
            <h2 className="max-w-[48rem] text-4xl md:text-center font-['Times_New_Roman']">Heavy Tech is an <br className="md:hidden" /><span className="text-red">MRO operator</span> offering aircraft and component maintenance.</h2>
            <div className="h-6 w-6 bg-red rotate-45 hidden md:block" />
            <p className={`${s.text} md:mb-12 text-start md:text-center`}>
                Heavytech is a group of MRO holding companies, headquarters are located in Cyprus, but hangars and facilities as its subsidiaries are located in Bulgaria (Varna), Romania, Kenya and Egypt (Cairo). Thanks to these locations we have full geographical coverage with optimal ferry costs.HeavyTech is fully EASA 145 approved for Base and Line maintenance, and PART 21 G and J approved.
                <br /><br />
                HeavyTech specialises in Base maintenance; C-checks, Bridging checks, SI inspections, CPCP programs inspections, parts and materials trading; engine, APU & LG management and replacement; Spare parts managements, full aircraft engineering &design modifications, and technical training services. We offer in total 4 base maintenance lines for different aircraft types like Airbus Family, Boeing.
            </p>
            <Buttons />
        </div>
    </section>
}
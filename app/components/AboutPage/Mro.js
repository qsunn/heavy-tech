import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Mro = () => {
    return <section className={`${s.container} pt-20 pb-24 relative`}>
        <div className={`${s.gridRow} !place-items-start md:!place-items-center gap-14 z-10`}>
            <h2 className="max-w-[49rem] font-light text-4xl md:text-center">Heavy Tech is an <span className="text-red">MRO operator offering</span> aircraft and component maintenance.</h2>
            <p className={`${s.text} md:mb-12 text-start md:text-center`}>Company’s headquarter is situated in London UK, but hangars and facilities as its subsidiaries are located in Craiova (Romania), Tashkent (Uzbekistan), Sofia (Bulgaria), and Miami (USA). Thanks to these locations we have full geographical coverage and optimal ferry costs.HeavyTech is managed and operated by a highly experienced team and professional specialists with vast knowledge on the aircraft services and maintenance area. Using our extensive aviation background our mission is to deliver on time a high quality and costeffective product, focus on providing excellent customer support and become a top maintenance provider.<br /><br />HeavyTech specialises in Base maintenance; C-checks, Bridging checks , SI inspections, CPCP programs inspections, parts and materials trading; engine, APU & LG management and replacement; Spare parts managements, full aircraft engineering & design modifications, and technical training services. We offer in total 6 base maintenance lines for different aircraft types like Airbus Family, Boeing and ATR.</p>
            <Buttons />
        </div>
    </section>
}
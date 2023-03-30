import { s } from "@/app/styles"
import { Buttons } from "../Buttons"

export const Maintenance = () => {
    return <section className={`${s.container} pt-20 pb-20 md:pb-40 relative`}>
        <div className={`${s.bgImage} bg-[url('./images/bg_certificates_model_1_mob.png')] md:bg-[url('./images/bg_certificates_model_1.png')] h-[15.875rem] md:h-[29.625rem] w-[13.5rem] md:w-[39.75rem] absolute top-[-10rem] md:top-[-16rem] left-0`} />
        <div className={`${s.bgImage} bg-[url('./images/bg_certificates_model_2_mob.png')] md:bg-[url('./images/bg_certificates_model_2.png')] h-[18.375rem] md:h-[50rem] w-[10rem] md:w-[37.5rem] absolute bottom-0 md:bottom-[-4rem] right-0`} />
        <div className={`${s.gridRow} !place-items-start md:!place-items-center gap-14 z-10`}>
            <h2 className="max-w-[60rem] font-light text-4xl md:text-center">All the Lorem Ipsum generators <span className="text-red">on the Internet tend</span> to repeat predefined chunks as necessary</h2>
            <p className={`${s.text} text-start md:text-center`}>Company’s headquarter is situated in London UK, but hangars and facilities as its subsidiaries are located in Craiova (Romania), Tashkent (Uzbekistan), Sofia (Bulgaria), and Miami (USA). Thanks to these locations we have full geographical coverage and optimal ferry costs.HeavyTech is managed and operated by a highly experienced team and professional specialists with vast knowledge on the aircraft services and maintenance area. Using our extensive aviation background our mission is to deliver on time a high quality and costeffective product, focus on providing excellent customer support and become a top maintenance provider.<br /><br />HeavyTech specialises in Base maintenance; C-checks, Bridging checks , SI inspections, CPCP programs inspections, parts and materials trading; engine, APU & LG management and replacement; Spare parts managements, full aircraft engineering & design modifications, and technical training services. We offer in total 6 base maintenance lines for different aircraft types like Airbus Family, Boeing and ATR.</p>
            <Buttons />
        </div>
    </section>
}
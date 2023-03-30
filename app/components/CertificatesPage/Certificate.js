import { s } from "@/app/styles"

export const Certificate = () => {
    return <section className="grid place-items-center w-full">
        <div className={`${s.gridRow} w-full`}>
            <div className={`${s.container} py-18`}>
                <h2 className="max-w-[43.875rem] font-light text-4xl md:text-center"><span className="text-red">Certificates</span> simply dummy text of the printing and typesetting industry</h2>
            </div>
            <div className={`${s.bgImage} bg-[url('./images/bg_certificate.png')] md:bg-[url('./images/bg_certificates_planet.png')] !bg-cover !bg-top h-auto md:h-[23.625rem] w-full md:px-50 py-[4.325rem] flex items-center md:items-start justify-center md:justify-between flex-col md:flex-row gap-10 md:gap-0`}>
                <div className={`${s.gridRow} gap-10`}>
                    <p className="w-full max-w-[15.75rem] md:max-w-[28.5rem] text-center font-extralight text-xl md:text-2xl">HeavyTech is fully EASA 145 approved for Base and Line maintenance</p>
                    <div className="rounded-sm h-2 w-2 bg-red rotate-45" />
                </div>
                <div className={`${s.gridRow} gap-10 md:gap-18`}>
                    <p className="w-full max-w-[15.75rem] md:max-w-[28.5rem] text-center font-extralight text-xl md:text-2xl">PART 21 G and J approved</p>
                    <div className="rounded-sm h-2 w-2 bg-red rotate-45" />
                </div>
            </div>
        </div>
    </section>
}
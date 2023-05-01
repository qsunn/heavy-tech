import { s } from "@/app/styles"
import Link from "next/link"

export const Earth = () => {
    const services = [
        'A, C, and D checks',
        'Structural repairs',
        'SB, AD, MOD’s, SI’s accomplishments',
        'Avionics modifications: TCAS, FMS, EGPWS, etc.',
        'Engine services, removal/installation and adjustment',
        'Interior Refresh/repair'
    ]

    return <section className={`${s.container} !place-items-start pt-10 md:pt-18 pb-16 md:pb-[5.5rem] ${s.bgImage} bg-[url('./images/bg_earth_mob.png')] md:bg-[url('./images/bg_earth.png')] bg-right-top border-t border-[#202020] relative`}>
        <div className="bg-[url('./images/bg_we_can_perform.svg')] w-[35rem] h-[4.25rem] bg-contain bg-center bg-no-repeat absolute left-[-9.5rem] md:left-16 top-[13.125rem] md:top-[11rem]" />
        <div className="grid grid-flow-row place-items-start gap-16 w-full">
            <p className={s.textStart}>Our Base Maintenance facilities are situated at Bulgaria (Varna), Romania, Kenya and Egypt (Cairo), where we perform A, C, and D checks as well as modifications and repairs along with full range of aircraft SB and AD accomplishments.</p>
            <h2 className={s.titleStart}>We can perform</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-[0.625rem]">
                {services.map((s, i, arr) => <li key={s} className="font-light text-lg flex flex-col gap-[0.625rem]">
                    <span>{s}</span>
                    <div className="hidden md:block">{!(i === arr.length - 1 || i === arr.length - 2) && <div className="lineServices" />}</div>
                    <div className="md:hidden">{!(i === arr.length - 1) && <div className="lineServices" />}</div>
                </li>)}
            </ul>
            <Link href="services" className={`${s.button} hidden md:block`}>See more</Link>
        </div>
    </section>
}
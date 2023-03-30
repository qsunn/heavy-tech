import { s } from "@/app/styles"
import Link from "next/link"

export const Card = ({ service: { name, description }, index }) => {
    return <li className={`${s.bgImage} ${index % 2 > 0 ? "md:bg-[url('./images/bg_service_card_flipped.png')] !bg-right-bottom md:bg-right md:pr-[37.5rem] md:pl-[23rem]" : "md:bg-[url('./images/bg_service_card.png')] !bg-left-bottom md:bg-left md:pl-[37.5rem]"} md:h-[33.5rem] relative flex flex-col items-start justify-center gap-12 pb-[37.5rem] md:pb-0`}>
        <h2 className={s.titleStart}>{name}</h2>
        <p className={s.textStart}>{description}</p>
        <div className={`${s.bgImage} !bg-cover ${index % 2 > 0 ? "bg-[url('./images/bg_service_card_flipped.png')] !bg-[88%_0%]" : "bg-[url('./images/bg_service_card.png')] !bg-[12%_100%]"} block md:hidden min-w-full h-[34rem] absolute left-[-3.5rem] right-[-3.5rem] bottom-0`} />
        <Link href="#" className={`${s.buttonReversed} md:absolute bottom-[6.875rem] z-10 ${index % 2 > 0 ? "right-[44rem]" : "left-[44rem]"}`}>Learn more</Link>
    </li>
}
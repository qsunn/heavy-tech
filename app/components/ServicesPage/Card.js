import { s } from "@/app/styles"
import Link from "next/link"

export const Card = ({ service: { name, description, image }, index }) => {
    return <li className={`${s.bgImage} max-sm:bg-none ${image} ${index % 2 > 0 ? "!bg-right-bottom md:bg-right md:pr-[37.5rem] md:pl-[23rem]" : "!bg-left-bottom md:bg-left md:pl-[37.5rem]"} md:h-[33.5rem] relative flex flex-col items-start justify-center gap-12 pt-[28rem] md:pt-0 pb-12 md:pb-0`}>
        <div className={`${s.bgImage} ${image} !bg-cover ${index % 2 > 0 ? "!bg-[88%_0%]" : "!bg-[12%_100%]"} block md:hidden min-w-full h-[25rem] absolute left-[-3.5rem] right-[-3.5rem] top-0`} />
        <h2 className={s.titleStart}>{name}</h2>
        <p className={s.textStart}>{description}</p>
        <Link href="#" className={`${s.button3} md:w-[9.5rem] grid place-items-center absolute top-[11.5rem] md:top-[24.365rem] z-10 ${index % 2 > 0 ? "max-sm:left-8 md:right-[44rem]" : "max-sm:right-8 md:left-[44rem]"}`}>Learn more</Link>
    </li>
}
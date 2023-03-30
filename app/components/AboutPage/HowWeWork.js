import { s } from "@/app/styles"
import Link from "next/link"

export const HowWeWork = () => {
    return <section className={`${s.container} !place-items-start pt-28 md:pt-0 overflow-x-hidden`}>
        <div className={`${s.gridRow} md:grid-flow-col gap-28`}>
            <div className="grid grid-flow-row place-items-start gap-14 w-full">
                <h2 className={s.titleStart}>Lorem Ipsum is simply <span className="text-red">dummy text</span> of the printing and typesetting industry</h2>
                <p className={s.textStart}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                    <br /> <br />
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
                <Link href="#" className={s.button}>See more</Link>
            </div>
            <div className={`${s.bgImage} bg-[url('./images/about_img_6.png')] h-[56.5rem] w-[43rem]`} />
        </div>
    </section>
}
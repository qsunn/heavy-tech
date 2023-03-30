import { s } from "@/app/styles"
import Link from "next/link"

export const Earth = () => {
    return <section className={`${s.container} !place-items-start pt-50 pb-60 ${s.bgImage} bg-[url('./images/bg_earth.png')] !bg-right`}>
        <div className="grid grid-flow-row place-items-start gap-14 w-full">
            <h2 className={s.titleStart}>Lorem Ipsum is simply <span className="text-red">dummy text</span> of the printing and typesetting industry</h2>
            <p className={s.textStart}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                <br /> <br />
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <Link href="#" className={s.button}>See more</Link>
        </div>
    </section>
}
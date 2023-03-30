import { s } from "@/app/styles"
import Link from "next/link"

export const Buttons = () => {
    return <div className="flex gap-4 items-center justify-center flex-col md:flex-row">
        <Link href="about" className={s.button}>Learn more</Link>
        <Link href="contacts" className={s.button}>Contact us</Link>
    </div>
}
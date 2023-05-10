import Link from "next/link"
import { s } from "../styles"

export const Buttons = ({ href = 'about' }) => {
    return <div className="flex gap-4 items-center justify-center flex-col md:flex-row">
        <Link href={href} className={s.button}>Learn more</Link>
        <Link href="contacts" className={s.button}>Contact us</Link>
    </div>
}
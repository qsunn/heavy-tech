import Link from "next/link"
import { usePathname } from "next/navigation";

export const Modal = ({ links }) => {
    const pathName = usePathname();

    return <div className="bg-no-repeat bg-cover bg-top bg-[url('./images/bg_modal.png')] w-full grid place-items-center min-h-screen">
        <div className="h-full flex flex-col justify-between pb-11 pt-72">
            <ul className="grid grid-flow-row gap-9 place-items-center">
                {links.map((item, i) => <li key={item.name} className={`transition-all relative grid place-items-center ${pathName === '/' + item.href ? 'text-red' : 'text-white'} ${links.length - 1 !== i &&
                    "after:block after:w-[3rem] after:h-0 after:border after:border-[#4A4A4A] after:mt-9"
                    }`}>
                    <Link href={item.href} className="font-['Times_New_Roman'] text-3xl">{item.name}</Link>
                </li>)}
            </ul>
            <p className="font-light text-sm">Created by Salva Studio. HeavyTech All Rights Reserved</p>
        </div>
    </div>
}
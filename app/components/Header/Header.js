"use client";

import { s } from "@/app/styles"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";
import { Backdrop } from "../Modal/Backdrop";

export const Header = () => {
    const links = [
        {
            name: 'Homepage',
            href: ''
        }, {
            name: 'About Us',
            href: 'about'
        }, {
            name: 'Services',
            href: 'services'
        }, {
            name: 'Certificates',
            href: 'certificates'
        },
    ]

    const [showMenu, setShowMenu] = useState(false);
    const pathName = usePathname();
    const showMenuHandler = () => {
        setShowMenu(s => !s);
        showMenu
            ? (document.body.style.overflow = "unset")
            : (document.body.style.overflow = "hidden");
    };

    useEffect(() => {
        setShowMenu(false);
        document.body.style.overflow = "unset";
    }, [pathName]);

    return <><header className={`${s.container} pt-6 pb-40 fixed top-0 z-50 bg-[url('./images/bg_header.svg')] bg-no-repeat bg-cover bg-bottom`}>
        <button className={`${s.bgImage} ${showMenu ? "bg-[url('./images/icon_close.svg')]" : "bg-[url('./images/icon_burger.svg')]"} absolute right-[3.75rem] top-[4.75rem] h-[2.25rem] w-[2.25rem] md:hidden`} onClick={showMenuHandler} />
        <div className={`${s.bgImage} bg-[url('./images/logo.svg')] absolute w-[12rem] h-[4.75rem] top-8 md:top-12`} />
        <div className="hidden md:flex items-center justify-between w-full">
            <ul className="flex items-center justify-center gap-10">
                {links.map(item => <li key={item.name} className={`transition-all relative ${s.gridRow} text-sm ${pathName === '/' + item.href ? 'font-semibold' : 'font-light'}`}>
                    <Link href={item.href}>{item.name}</Link>
                    {pathName === '/' + item.href && <div className="absolute bottom-[-2rem] grid place-items-center">
                        <div className="bg-red h-2 w-2 rounded-sm rotate-45 select-none absolute" />
                        <div className="activeTabDecorator absolute" />
                    </div>}
                </li>)}
            </ul>
            <div className="flex items-center justify-center gap-10">
                <div className="flex items-center justify-center gap-3">
                    <div className={`${s.bgImage} bg-[url('./images/icon_planet.svg')] w-[1.125rem] h-[1.125rem]`} />
                    <div>English</div>
                </div>
                <Link href="contacts" className={s.button}>Contact Us</Link>
            </div>
        </div>
    </header>
        {showMenu && <Backdrop showMenuHandler={showMenuHandler} links={links} />}
    </>
}
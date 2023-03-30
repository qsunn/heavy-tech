import { s } from "@/app/styles"
import { Form } from "./Form"

export const ContactsUs = () => {
    return <section className={`${s.container} ${s.bgImage} bg-[url('./images/bg_contacts.png')] !bg-cover pb-60 pt-72`}>
        <div className="w-full flex items-start justify-between gap-40 flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start w-full max-w-[33rem] text-center md:text-start">
                <h1 className="text-5xl font-light mb-4">
                    Contact Us
                </h1>
                <p className={`${s.textStart} mb-16`}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                </p>
                <div className="md:hidden activeTabDecorator mb-14" />
                <div className="hidden md:block line mb-14" />
                <p className="text-xl font-semibold mb-12">85 Great Portland Street | London, United Kingdom W1W 7LT</p>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-7">
                    <div className={`${s.bgImage} bg-[url('./images/icon_phone.svg')] w-18 h-18`} />
                    <div className="flex flex-col items-center md:items-start gap-0.5">
                        <a href="tel:+447451865763" className="text-2xl font-light">
                            +44 745 186 57 63
                        </a>
                        <a
                            href="mailto:office@heavytech.com"
                            className="text-xs font-light"
                        >
                            office@heavytech.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden md:block mr-[-13.5rem]">
                <Form />
            </div>
        </div>
    </section>
}
"use client";
import { s } from "@/app/styles";
import Link from "next/link";

export const Form = () => {
    return (
        <form
            className="relative hidden md:grid grid-flow-row gap-6 w-full bg-[url('./images/bg_form.svg')] bg-cover bg-left bg-no-repeat pt-28 pb-16 pl-18 pr-60"
        >
            <label htmlFor="FullName" className={s.input2Col}>
                <p className={s.rhomb}>Full name</p>{" "}
                <div className={s.lineInForm} />
                <input
                    type="text"
                    name="FullName"
                    required
                    className={s.input2}
                />
            </label>
            <label htmlFor="Email" className={s.input2Col}>
                <div className={s.rhomb}>E-mail</div>{" "}
                <div className={s.lineInForm} />
                <input
                    type="mail"
                    name="Email"
                    required
                    className={s.input2}
                />
            </label>
            <label htmlFor="Phone" className={s.input2Col}>
                <div className={s.rhomb}>Phone</div>{" "}
                <div className={s.lineInForm} />
                <input
                    type="tel"
                    name="Phone"
                    required
                    className={s.input2}
                />
            </label>
            <label htmlFor="Message" className={s.input2Col}>
                <div className={s.rhomb}>Message</div>{" "}
                <div className={s.lineInForm} />{" "}
                <input
                    type="text"
                    name="Message"
                    required
                    className={s.input2}
                />
            </label>
            <div className="flex items-center justify-between mt-8 pl-36">
                <label
                    className="flex items-center gap-2 justify-self-start text-red"
                >
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        required
                    />
                    Accept{" "}
                    <Link href="#" className="underline">
                        Privacy Policy
                    </Link>
                </label>
                <button
                    type="submit"
                    className={`${s.button} font-['JUST_Sans'] px-16`}
                >
                    Send message
                </button>
            </div>
        </form>
    );
};

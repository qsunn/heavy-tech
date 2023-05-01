import { s } from "@/app/styles";
import Link from "next/link";

export const Form = () => {
  return (
    <div
      className={`${s.container} !flex flex-col md:flex-row justify-center items-center md:items-start gap-40 bg-black pt-16 md:pt-36 pb-24`}
    >
      <div className="flex flex-col text-center md:text-start md:max-w-[29.5rem]">
        <h2 className={`${s.titleStart} !text-4xl mb-10`}>Do you have questions?
          <br /><span className="text-red">Contact us</span></h2>
        <p className={s.textStart}>Get in touch with our team of experienced technicians and engineers to get the best MRO services in the industry.</p>
      </div>
      <form
        className={`${s.gridRow} gap-8 w-full md:max-w-[48.25rem] relative`}
      >
        <div
          className={`${s.bgImage} bg-[url('./images/divider.svg')] bg-cover grid md:hidden place-items-center absolute z-10 top-[-4rem] overflow-x-hidden h-5 w-screen`}
        />
        <div className={s.inputCol}>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="First name*"
              required
              className={s.input}
            />
            <div className={`${s.inputRhomb} !bottom-[-0.25rem]`} />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Last name*"
              required
              className={s.input}
            />
            <div className={`${s.inputRhomb} !bottom-[-0.25rem]`} />
          </div>
        </div>
        <div className={s.inputCol}>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Address Email*"
              required
              className={s.input}
            />
            <div className={s.inputRhomb} />
          </div>
          <div className="relative w-full">
            <input
              type="tel"
              placeholder="Phone*"
              required
              className={s.input}
            />
            <div className={s.inputRhomb} />
          </div>
        </div>
        <div className="relative w-full">
          <textarea
            placeholder="Message"
            className={`${s.input} resize-none h-24`}
          ></textarea>
          <div className={`${s.inputRhomb} !bottom-[0.25rem]`} />
        </div>
        <div
          className={`${s.gridRow} gap-8 w-full md:flex md:items-center md:justify-between`}
        >
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Accept{" "}
            <Link href="#" className="text-red">
              Privacy Policy
            </Link>
          </label>
          <button type="submit" className={`${s.button}`}>
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

import { s } from "@/app/styles";
import Link from "next/link";

export const Form = () => {
  return (
    <div
      className={`${s.container} !flex flex-col md:flex-row justify-center items-center gap-40 bg-black pt-10 md:pt-36 pb-24`}
    >
      <div className="flex flex-col text-center md:text-start md:max-w-[29.5rem]">
        <p className="font-extralight text-xl text-red mb-5 md:hidden">
          RitzyJet is a world leader in private aviation.
        </p>
        <h2 className="font-extralight text-4xl mb-10">Do you have questions?
          Contact us</h2>
        <p className="font-extralight text-xl text-red mb-5 hidden md:block">
          RitzyJet is a world leader in private aviation.
        </p>
        <p className="text-base">Flying in private jets have become a go-to choice for those looking to have an ultra-luxury, convenient, and comfortable travel experience. We are offering great flexibility</p>
      </div>
      <form
        className={`${s.gridRow} gap-8 w-full md:max-w-[48.25rem] relative`}
      >
        <div
          className={`${s.bgImage} bg-[url('./images/divider.svg')] bg-cover grid md:hidden place-items-center absolute z-10 top-[-4rem] overflow-x-hidden h-5 w-screen`}
        />
        <div className={s.inputCol}>
          <input
            type="text"
            placeholder="First name*"
            required
            className={s.input}
          />
          <input
            type="text"
            placeholder="Last name*"
            required
            className={s.input}
          />
        </div>
        <div className={s.inputCol}>
          <input
            type="email"
            placeholder="Address Email*"
            required
            className={s.input}
          />
          <input
            type="tel"
            placeholder="Phone*"
            required
            className={s.input}
          />
        </div>
        <select defaultValue="" className={`${s.input}`}>
          <option disabled value="">
            Select Category Charter
          </option>
        </select>
        <textarea
          placeholder="Message"
          className={`${s.input} resize-none h-24`}
        ></textarea>
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

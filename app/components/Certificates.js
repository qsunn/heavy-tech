import { s } from "@/app/styles"

export const Certificates = () => {
    return <section className={`${s.container} justify-items-start h-[13.25rem] bg-no-repeat bg-left-top bg-cover md:bg-[length:100%_100%] bg-[url('./images/bg_small_certificates.png')]`}>
        <div className="text-xl font-extralight max-w-[47rem] w-full">
            <span className="font-medium text-red">Certificates</span> - HeavyTech is fully EASA 145 approved for Base and Line
            maintenance, and PART 21 G and J approved.
        </div>
    </section>
}
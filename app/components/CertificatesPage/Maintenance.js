import { s } from "@/app/styles"

export const Maintenance = () => {
    return <section className={`${s.container} pt-36 pb-20 md:pt-[14rem] relative`}>
        <div className="absolute top-3 left-0 grid place-items-center h-full w-auto overflow-hidden">
            <div className="w-[508%] md:w-[110%]">
                <video autoPlay loop muted playsInline className="h-full w-auto">
                    <source src={"/heavy3.mp4"} type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="absolute top-[-3rem] md:top-[-16rem] h-32 md:h-[28rem] w-full bg-[url('./images/line_1_mob.svg')] md:bg-[url('./images/line_1.svg')] bg-center bg-cover bg-no-repeat mx-auto" />
        <div className="z-10">
            <p className={`${s.text} max-w-[77.8125rem] mb-20`}>
                We&apos;re proud to hold an EASA 145 certificate approved for Base and Line maintenance, which is a testament to our commitment to providing high-quality maintenance, repair, and overhaul services for aircraft. The EASA 145 certification is a comprehensive standard that covers all aspects of aircraft maintenance and ensures that our operations are conducted safely and efficiently. To obtain and maintain our EASA 145 certification, we undergo regular audits by the European Aviation Safety Agency (EASA), which is responsible for regulating civil aviation safety in Europe. This certification demonstrates that we have met and exceeded the strict standards set by EASA for aircraft maintenance and repair. To ensure that we deliver the best possible service, we invest in the ongoing education and certification of our team of expert technicians and engineers. We work with industry-leading organizations to obtain certifications that demonstrate our commitment to excellence, safety, and environmental responsibility.
                <br /><br />
                Our certifications are more than just pieces of paper - they represent our dedication to providing exceptional service to our customers. When you choose Heavytech MRO you can trust that you&apos;re working with a team that is highly trained and certified in the latest industry standards and best practices. We&apos;re also proud to hold both PART 21G and J approvals, which allow us to design, manufacture, and certify aircraft components and modifications. These certifications are a testament to our commitment to providing high-quality MRO services and ensuring the airworthiness of the aircraft we work on. The PART 21G certification allows us to design and manufacture aircraft parts and components, while the J approval enables us to modify and certify these components for installation on aircraft. Together, these certifications enable us to offer a wide range of customized solutions for our customers, from minor modifications to complete overhauls.
            </p>
            <div className="hidden md:block absolute left-0 h-[5rem] w-full bg-[url('./images/line_2.svg')] bg-center bg-contain bg-no-repeat" />
            <div className="h-[14.375rem] w-auto bg-[url('./images/logo_big.svg')] bg-center bg-contain bg-no-repeat md:mt-[21rem] md:mb-[16rem]" />
            <div className="absolute left-0 bottom-0 h-[5rem] w-full bg-[url('./images/line_2_mob.svg')] md:bg-[url('./images/line_2.svg')] bg-center bg-contain bg-no-repeat md:rotate-180" />
        </div>
    </section>
}
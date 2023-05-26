import { s } from "@/app/styles"
import { services } from "@/app/data/data"
import { Card } from "./Card"
export const Cards = () => {
    return <section className={`${s.container} py-20 relative`}>

        <div className="w-[300%] h-auto overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full fixed top-0 left-0 object-cover mix-blend-lighten opacity-30">
                <source src={"/heavy_ss.mp4"} type="video/mp4" />
            </video>
        </div>

        <ul className={`${s.gridRow} w-full gap-16 md:gap-0`}>
            {services.map((service, i) => {
                return <Card key={service.name} service={service} index={i}></Card>
            })}
        </ul>
    </section>
}
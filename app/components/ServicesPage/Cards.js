import { s } from "@/app/styles"
import { services } from "@/app/data/data"
import { Card } from "./Card"
export const Cards = () => {
    return <section className={`${s.container} py-20`}>
        <ul className={`${s.gridRow} w-full gap-16 md:gap-0`}>
            {services.map((service, i) => {
                return <Card key={service.name} service={service} index={i}></Card>
            })}
        </ul>
    </section>
}
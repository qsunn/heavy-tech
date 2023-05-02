import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Card = ({ item: { name, description, v2 = false }, idx, activeIdx }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return <li key={name} onMouseMove={handleMouseMove} className={`group h-[16rem] md:h-auto relative border ${idx === activeIdx ? 'card active border-red/10 border-r-0' : 'border-white/10 hidden md:block'} bg-transparent backdrop-blur py-12 px-14 shadow-2xl}`}>
        <motion.div
            className="pointer-events-none z-[-1] absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
                background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(200,42,45, 0.8),
              transparent 80%
            )
          `,
            }}
        />
        <div className={`flex flex-col gap-6`}>
            <h3 className={v2 ? "text-xl" : "font-['Times_New_Roman'] text-2xl"}>{name}</h3>
            <p className="text-base font-extralight">{description}</p>
        </div>
    </li>
}
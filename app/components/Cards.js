export const Cards = ({ items }) => {
    return (
        <div className="relative">
            <ul>
                {items.map(item => {
                    return <li key={item.name} className="flex flex-col gap-6 py-12 px-14">
                        <h3 className="font-['Times_New_Roman'] text-2xl">{item.name}</h3>
                        <p className="text-base font-extralight">{item.description}</p>
                    </li>
                })}
            </ul>
            <div className="flex gap-4 items-center justify-center absolute bottom-[-7.5rem]">
                <button type="button" className="h-16 w-16 bg-white rounded-full"></button>
                <button type="button" className="h-16 w-16 bg-white rounded-full"></button>
            </div>
        </div>
    )
}
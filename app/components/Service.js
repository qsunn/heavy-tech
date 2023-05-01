export const Service = ({ service, activeIdx, idx, setActiveIdx }) => {
    const isActiveIdx = activeIdx === idx;
    return <button type="button" onClick={() => setActiveIdx(idx)} className={`transition-all relative grid grid-flow-row gap-4 place-items-center text-xl md:text-sm ${isActiveIdx ? 'text-red font-medium' : 'text-white font-light hidden md:grid'}`}>
        <div className="bg-red h-2 w-2 rounded-sm rotate-45 select-none" />
        {isActiveIdx && <div className="activeTabDecorator absolute top-[0.2rem]" />}
        <div>{service}</div>
    </button>
}


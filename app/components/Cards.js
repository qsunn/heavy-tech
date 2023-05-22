"use client";

import { useState } from "react";
import { Card } from "./Card";

export const Cards = ({ items }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const handleNext = (activeIdx) => {
        activeIdx === items.length - 1 ? setActiveIdx(0) : setActiveIdx(s => s + 1);
    }
    const handleBack = (activeIdx) => {
        activeIdx === 0 ? setActiveIdx(items.length - 1) : setActiveIdx(s => s - 1);
    }
    return (
        <div className="relative min-w-full grid place-items-center mr-[-3.5rem] md:mr-0 pb-32 md:pb-0">
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {items.map((item, i) => <Card key={item.name} item={item} idx={i} activeIdx={activeIdx} />)}
            </ul>
            <div className="flex gap-4 items-center justify-center absolute bottom-0 md:bottom-[-7.5rem] left-0 md:left-[calc(50%-11.25rem)] md:hidden">
                <button type="button" onClick={() => handleBack(activeIdx)} className="h-16 w-16 rounded-full bg-center bg-contain bg-no-repeat rotate-180 bg-[url('./images/btn_slider.svg')] transition-all"></button>
                <button type="button" onClick={() => handleNext(activeIdx)} className="h-16 w-16 rounded-full bg-center bg-contain bg-no-repeat bg-[url('./images/btn_slider.svg')] transition-all"></button>
            </div>
        </div>
    )
}
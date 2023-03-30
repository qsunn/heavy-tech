import { useState, useEffect } from "react";

export const useSlider = (data, defaultValue = 0) => {
    const [state, setState] = useState(defaultValue);
    const length = data.length;

    useEffect(() => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            const handleNext = () => {
                setState(state === length - 1 ? 0 : state + 1);
            };
            const intervalId = setInterval(() => {
                handleNext();
            }, 4000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [state, length]);

    return [state, setState];
}
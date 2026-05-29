import {useEffect, useState} from "react";
import "./ScrollDownPrompt.scss";

import Lottie from "lottie-react";
const LottieComponent = Lottie.default ?? Lottie;
import scrollDown from "@/assets/animations/scroll_down.json";

function ScrollDownPrompt({minY, maxY})
{
    const [isInRange, setIsInRange] = useState(false);

    useEffect(() =>
    {
        const updateState = () =>
        {
            const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

            setIsInRange(scrollY >= minY && scrollY <= maxY)
        };

        updateState();

        window.addEventListener("scroll", updateState);
        return () => window.removeEventListener("scroll", updateState);
    }, [minY, maxY]);

    return <div className={`scroll-down-wrapper ${isInRange ? "" : "invisible"}`}>
        <LottieComponent animationData={scrollDown} loop autoplay />
    </div>
}

export default ScrollDownPrompt;
import {useEffect} from "react";

function useTilt(elementRef)
{
    useEffect(() =>
    {
        const element = elementRef.current;
        if (!element) return;

        element.style.transformStyle = "preserve-3d";

        let scheduledFrame = null

        const handleMouseMove = (e) =>
        {
            if (scheduledFrame) return;

            scheduledFrame = requestAnimationFrame(() =>
            {
                scheduledFrame = null;

                const rect = element.getBoundingClientRect();

                const xFromCenter = e.clientX - rect.left - rect.width / 2;
                const yFromCenter = e.clientY - rect.top - rect.height / 2;

                element.style.transform = `rotateX(${-yFromCenter / 20}deg) rotateY(${xFromCenter / 20}deg)`;
            });
        }

        const tiltReset = () =>
        {
            if (scheduledFrame)
            {
                cancelAnimationFrame(scheduledFrame)
                scheduledFrame = null;
            }

            element.style.transform = "rotateX(0deg) rotateY(0deg)";
        }

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", tiltReset);

        return () =>
        {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", tiltReset);

            if (scheduledFrame) cancelAnimationFrame(scheduledFrame);
        };
    }, [elementRef])
}

export default useTilt;
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
            if (scheduledFrame) return; // Prevent frame queue

            scheduledFrame = requestAnimationFrame(() =>
            {
                scheduledFrame = null;

                const rect = element.getBoundingClientRect();

                // Get X, Y offsets from element center
                const xOffset = e.clientX - rect.left - rect.width / 2;
                const yOffset = e.clientY - rect.top - rect.height / 2;

                element.style.transform = `rotateX(${-yOffset / 20}deg) rotateY(${xOffset / 20}deg) scale(1.05)`;
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
import "@/styles/globals.scss";
import "./StarBackground.scss";
import {useEffect, useRef} from "react";
import {useRenderMode} from "@/context/RenderModeContext.jsx";

const STARS_PER_LAYER = 200;
const SPEED = 0.2;

function StarBackground()
{
    const canvasRefs = useRef([]);

    const { perfModeEnabled } = useRenderMode();

    useEffect(() =>
    {
        const canvases = canvasRefs.current.filter(Boolean);

        canvases.forEach(canvas =>
        {
            // canvas size
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            const ctx = canvas.getContext("2d");

            // draw stars randomly
            for (let i = 1; i <= STARS_PER_LAYER * (perfModeEnabled ? 3 : 1); i++)
            {
                const x = Math.random() * rect.width;
                const y = Math.random() * rect.height;
                const alpha = Math.random(); // random brightness

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fillRect(x, y, 2, 2);
            }
        });

        let targetScroll = 0;

        const handleScroll = () =>
        {
            targetScroll = window.scrollY;
        }

        handleScroll();

        const animate = () =>
        {
            canvases.forEach((canvas, index) =>
            {
                canvas.style.transform = `translateY(${targetScroll * SPEED * (index + 2)}px)`; // introduce parallax
            });

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);

    }, [perfModeEnabled]);

    return <div className="star-background">
        {
            (perfModeEnabled ? [0] : [0, 1, 2]).map((i) =>
                <canvas
                    key={i}
                    ref={c => canvasRefs.current[i] = c}
                />)
        }
    </div>;
}

export default StarBackground;
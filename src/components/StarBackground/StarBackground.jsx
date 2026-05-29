import "@/styles/globals.scss";
import "./StarBackground.scss";
import {useEffect, useRef} from "react";

const STARS_PER_LAYER = 200;
const SPEED = 0.2;

function StarBackground()
{
    const canvasRefs = useRef([]);

    useEffect(() =>
    {
        const canvases = canvasRefs.current.map(c => c);

        const dpr = window.devicePixelRatio || 1; // handle device pixel ratio

        canvases.forEach(canvas =>
        {
            // canvas size
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            const ctx = canvas.getContext("2d");
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scaling canvas down (compensating for size * dpr)

            // draw stars randomly
            for (let i = 1; i <= STARS_PER_LAYER; i++)
            {
                const x = Math.random() * rect.width;
                const y = Math.random() * rect.height;
                const color = Math.floor(Math.random() * 245 + 10); // random brightness

                ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
                ctx.fillRect(x, y, 2, 2);
            }
        });

        let scheduledFrame = null;

        const handleScroll = () =>
        {
            if (scheduledFrame) return;

            scheduledFrame = requestAnimationFrame(() =>
            {
                scheduledFrame = null;

                const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

                canvases.forEach((canvas, index) =>
                {
                    canvas.style.transform = `translateY(${scrollY * SPEED * (index + 2)}px)`; // introduce parallax
                });
            });
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return <div className="star-background">
        {
            [0, 1, 2].map((i) =>
                <canvas
                    key={i}
                    ref={c => canvasRefs.current[i] = c}
                />)
        }
    </div>;
}

export default StarBackground
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import "@/index.css";
import Avatar from "@/components/Avatar/Avatar.jsx";
import Button from "@/components/Button/Button.jsx";
import { DiscordIcon, EmailIcon } from "@/components/UiIcons/UiIcons.jsx";

function Home()
{
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") navigate("/home");
    }, [location.pathname, navigate]);

    return <main className="home">
        <header className="w-100 h-100 g-15 flex-center fullscreen">

            <Avatar />

            <div className="text-center">
                <h1 className="text-accent">ATHLAS</h1>
                <h3>Self-taught Full Stack Developer</h3>
                <p className="text-dim text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum purus, eget malesuada odio. Donec tristique tortor dui, et ullamcorper eros accumsan sit amet. Nulla at ultrices eros.</p>
            </div>


            <address className="text-center col g-15">

                <span>Contact me!</span>

                <div className="row g-15">
                    <Button
                        label="Discord"
                        color="discord"
                        icon={DiscordIcon}
                        url={import.meta.env.VITE_DISCORD_URL}
                    />
                    <Button
                        label="Email"
                        color="black"
                        icon={EmailIcon}
                        url={`mailto:${import.meta.env.VITE_EMAIL_ADRESS}`}
                    />
                </div>

            </address>
        </header>


        <section className="w-100 g-15 flex-center">
            <h2>My works</h2>
        </section>
    </main>
}
export default Home;
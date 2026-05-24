import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import "@/index.css";
import Avatar from "@/components/Avatar/Avatar.jsx";
import Button from "@/components/Button/Button.jsx";
import {DiscordIcon, EmailIcon} from "@/components/UiIcons/UiIcons.jsx";
import ProjectCardList from "@/components/ProjectCardList/ProjectCardList.jsx";

function Home()
{
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") navigate("/home");
    }, [location.pathname, navigate]);

    return <main className="flex-center">
        <header className="h-100 g-15 flex-center fullscreen page-center-col">

            <Avatar />

            <div className="text-center flex-center w-100">
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


        <section className="g-15 flex-center">
            <h2>My deployed works</h2>
            <ProjectCardList />
        </section>
    </main>
}
export default Home;
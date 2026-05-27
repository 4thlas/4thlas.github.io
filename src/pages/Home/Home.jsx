import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import "@/styles/index.scss";
import "./Home.scss";
import Avatar from "@/components/Avatar/Avatar.jsx";
import Button from "@/components/Button/Button.jsx";
import {DiscordIcon, EmailIcon} from "@/components/UiIcons/UiIcons.jsx";
import ProjectCardList from "@/components/ProjectCardList/ProjectCardList.jsx";
import Lottie from "lottie-react";
const LottieComponent = Lottie.default ?? Lottie;
import scrollDown from "@/assets/animations/scroll_down.json";

function Home()
{
    const location = useLocation();
    const navigate = useNavigate();
    const [scrollTop, setScrollTop] = useState(true);

    useEffect(() =>
    {
        const handleScroll = () => setScrollTop(window.scrollY < 20);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() =>
    {
        if (location.pathname === "/") navigate("/home");
    }, [location.pathname, navigate]);

    return <main className="flex-center">
        <header className={`h-100 g-15 flex-center page-center-col`}>

            <Avatar />

            <div className="text-center flex-center w-100">
                <h1 className="text-accent">ATHLAS</h1>
                <h2>Self-taught Full Stack Developer</h2>
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

            <div className={`scroll-down-wrapper ${scrollTop ? "" : "invisible"}`}>
                <LottieComponent animationData={scrollDown} loop autoplay />
            </div>
        </header>


        <section className="g-15 flex-center">
            <ProjectCardList />
        </section>
    </main>
}
export default Home;
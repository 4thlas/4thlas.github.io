import StarBackground from "@/components/StarBackground/StarBackground.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ProjectCardList from "@/components/ProjectCardList/ProjectCardList.jsx";

import "@/styles/index.scss";
import FixedContainer from "@/components/FixedContainer/FixedContainer.jsx";
import Switch from "@/components/Switch/Switch.jsx";
import { useRenderMode } from "@/context/RenderModeContext.jsx";
import { PerformanceIcon } from "@/components/UiIcons/UiIcons.jsx";
import {useEffect} from "react";

function App()
{
    const { perfModeEnabled, setPerfMode } = useRenderMode();

    useEffect(() =>
    {
        const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollY >= 20) return;

        document.querySelectorAll(".fade-in").forEach((element, index) =>
        {
            element.style.animationDelay = index * 0.2 + "s";
        });
    }, []);

    return <>
        <StarBackground />

        <FixedContainer x="right" y="top">
            <Switch
                labelIcon={PerformanceIcon}
                title="Performance Mode"
                value={perfModeEnabled}
                onChange={setPerfMode}
            />
        </FixedContainer>

        <Header />

        <main className="flex-center">
            <section className="g-15 flex-center">
                <ProjectCardList />
            </section>
        </main>

        <Footer />
    </>
}

export default App

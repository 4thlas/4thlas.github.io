import StarBackground from "@/components/StarBackground/StarBackground.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ProjectCardList from "@/components/ProjectCardList/ProjectCardList.jsx";

import "@/styles/index.scss";
import FixedContainer from "@/components/FixedContainer/FixedContainer.jsx";
import Switch from "@/components/Switch/Switch.jsx";
import { useRenderMode } from "@/context/RenderModeContext.jsx";

function App()
{
    const { perfModeEnabled, setPerfMode } = useRenderMode();
    return <>
        <StarBackground />

        <FixedContainer x="right" y="top">
            <Switch label="Lightweight mode" value={perfModeEnabled} onChange={setPerfMode} />
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

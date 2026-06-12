import StarBackground from "@/components/StarBackground/StarBackground.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ProjectCardList from "@/components/ProjectCardList/ProjectCardList.jsx";

import "@/styles/index.scss";

function App()
{
    return <>
        <StarBackground />

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

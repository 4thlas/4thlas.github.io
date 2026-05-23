import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import "@/index.css"
import "./Home.css";
import Avatar from "@/components/Avatar/Avatar.jsx";

function Home()
{
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") navigate("/home");
    }, [location.pathname, navigate]);

    return <main className="home">
        <header className="w-100 flex-center">
            <Avatar />

            <h1>
                Athlas
            </h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-center text-dim">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum purus, eget malesuada odio. Donec tristique tortor dui, et ullamcorper eros accumsan sit amet. Nulla at ultrices eros.</p>
        </header>
    </main>
}
export default Home;
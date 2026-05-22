import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

function Home()
{
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") navigate("/home");
    }, [location.pathname, navigate]);

    return (
        <div>
            Home
        </div>
    )
}
export default Home;
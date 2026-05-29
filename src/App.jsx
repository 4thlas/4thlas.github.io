import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "@/pages/Home/Home.jsx";
import StarBackground from "@/components/StarBackground/StarBackground.jsx";

function App()
{
    return (
        <Router>
            <StarBackground />

            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default App

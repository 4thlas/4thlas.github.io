import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "@/pages/Home/Home.jsx";
import StarBackground from "@/components/StarBackground/StarBackground.jsx";
import Layout from "@/pages/Layout.jsx";
import {Navigate} from "react-router";

function App()
{
    return (
        <Router>
            <StarBackground />

            <Routes>
                <Route path="/" element={<Layout />}> <Route index element={<Home/>}/> </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default App

import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Route, Routes} from "react-router";
import {Home} from "@/pages/Home.tsx";
import {NotFound} from "@/pages/NotFound.tsx";
import {lazy} from "react";

const About = lazy(() => import("@/pages/About.tsx"))

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"About"} element={<About/>}/>
                    <Route path={"/*"} element={<NotFound/>}/>

                </Route>

            </Routes>
        </>
    );
}

export default App

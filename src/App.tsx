import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Route, Routes, useLocation} from "react-router";
import {Home} from "@/pages/Home.tsx";
import {NotFound} from "@/pages/NotFound.tsx";
import {useEffect} from "react";
import About from "@/pages/About.tsx";
import Crewing from "@/pages/Crewing.tsx";
import {Contacts} from "@/pages/Contacts.tsx";

function App() {
    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, [pathname]);
    const apiUrl = import.meta.env.VITE_MAIL_API_URL;
    console.log("API URL:", apiUrl);
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"About"} element={<About/>}/>
                    <Route path={"Crewing"} element={<Crewing/>}/>
                    <Route path={"Contacts"} element={<Contacts/>}/>
                    <Route path={"/*"} element={<NotFound/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App

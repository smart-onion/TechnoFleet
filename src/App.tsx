import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Route, Routes, useLocation} from "react-router";
import {Home} from "@/pages/Home.tsx";
import {NotFound} from "@/pages/NotFound.tsx";
import {useEffect} from "react";
import About from "@/pages/About.tsx";
import Crewing from "@/pages/Crewing.tsx";
import {Contacts} from "@/pages/Contacts.tsx";
import {Cerificates} from "@/pages/Cerificates.tsx";
import {Subscribe} from "@/pages/Subscribe.tsx";
import {TermsAndPrivacy} from "@/pages/TermsAndPrivacy.tsx";

export default function App() {
    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, [pathname.pathname]);

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"About"} element={<About/>}/>
                    <Route path={"Crewing"} element={<Crewing/>}/>
                    <Route path={"Certificates"} element={<Cerificates/>}/>
                    <Route path={"Contacts"} element={<Contacts/>}/>
                    <Route path={"subscribe"} element={<Subscribe/>}/>
                    <Route path={"term-and-privacy"} element={<TermsAndPrivacy/>}/>
                    <Route path={"/*"} element={<NotFound/>}/>
                </Route>

            </Routes>
        </>
    );
}


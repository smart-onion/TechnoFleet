import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Route, Routes, useLocation} from "react-router";
import {Home} from "@/pages/Home.tsx";
import {NotFound} from "@/pages/NotFound.tsx";
import {useEffect} from "react";
import About from "@/pages/About.tsx";
import Crewing from "@/pages/Crewing.tsx";
import {Contacts} from "@/pages/Contacts.tsx";
import {useAppDispatch} from "@/app/hooks.ts";
import {changeHeader} from "@/app/reducers/headerSlice.ts";
import {bgColors} from "@/theme/main-colors.ts";

function App() {
    const pathname = useLocation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
        console.log(pathname.pathname);
        if(pathname.pathname !== "/home"){
            dispatch(changeHeader({height: "fit", bg: bgColors.main}));
        }
    }, [pathname.pathname]);

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

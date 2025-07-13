import {Header} from "../components/Header.tsx"
import {Outlet} from "react-router";

export function Layout(){
    return <>
        <Header/>
        <Outlet/>
    </>
}
import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Route, Routes} from "react-router";
import {Home} from "@/pages/Home.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"/"} element={<Home/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App

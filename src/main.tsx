import {StrictMode, Suspense, lazy} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "./components/ui/provider.tsx"
import {BrowserRouter} from "react-router";
import './index.css'
import {Loading} from "@/components/Loading.tsx";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "@/app/store.ts";

const App = lazy(() => import("./App.tsx"))
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <Provider>
                    <Suspense fallback={<Loading/>}>
                        <App/>
                    </Suspense>
                </Provider>
            </BrowserRouter>
        </ReduxProvider>
    </StrictMode>,
)

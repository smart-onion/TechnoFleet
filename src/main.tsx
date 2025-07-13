import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "./components/ui/provider.tsx"
import {BrowserRouter} from "react-router";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Provider>
            <App />
          </Provider>
      </BrowserRouter>
  </StrictMode>,
)

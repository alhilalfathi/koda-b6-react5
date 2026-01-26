import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"
import { Router } from './Router.jsx'

const el = document.getElementById("root")
const root = createRoot(el)



root.render(<Router />)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { setVh } from "./utils/setVh";

setVh();

window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
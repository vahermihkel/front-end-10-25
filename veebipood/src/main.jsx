import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// URLi vahetuseks (navigeerimiseks):
// 1. npm i react-router-dom   (paneme node_modules kausta sobilikud koodifailid)
// 2. import {BrowserRouter}   (võtane sealtsamast installitud kaustast BrowserRouteri)
// 3. ümbritseme App.jsx faili BrowserRouteriga (anname terve rakendusele navigeerimise võimekuse)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Esindused from './pages/Esindused'
import Kinkekaardid from './pages/Kinkekaardid'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">
        <img className="pilt" src="https://i.etsystatic.com/40533556/r/il/11cc06/6233144364/il_fullxfull.6233144364_918l.jpg" alt="" />
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaart</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaardid /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    
    </>
  )
}

export default App

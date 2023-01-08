import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/avaleht.css';
import './css/lisatooted.css';
import './css/meist.css';
import './css/ostukorv.css';
import './css/poed.css';
import './css/seaded.css';
  
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Tooted from './pages/Tooted';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import YksikToode from './pages/YksikToode';

import { useState } from 'react';
import { useRef } from 'react';


function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah")
      muudaSonum("Oled sisselogitud");
   } else { 
      muudaSonum("Vale parool");
   }
  }

  return (
<div className="App">
      <div>{sonum}</div>
    { sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br />
      <input ref={kasutajaNimiRef} type="text" /> <br />

      <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /> <br />
    </div> }

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
      { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button> }

      





{/* Vana kodutöö */}


    <div className="container">
      <div class="container-buttons">
         
            
      <div className="button-spacer">
      <Link to="">
        <button className="button">Avaleht</button>
      </Link>
          </div>
          
      <div className="button-spacer">
      <Link to="/ostukorv">
        <button className="button">Ostukorv</button>
      </Link>
          </div>
          
      <div className="button-spacer">
      <Link to="/lisa-toode">
        <button className="button">Lisa tooted</button>
      </Link>
      </div>

      <div className="button-spacer">
            <Link to="/meist">
        <button className="button">Meist</button>
      </Link>
      </div>

      <div className="button-spacer">
            <Link to="/poed">
        <button className="button">Poed</button>
      </Link>
      </div>

                <div className="button-spacer">
            <Link to="/books">
        <button className="button">Raamatud</button>
      </Link>
      </div>

      <div className="button-spacer">
            <Link to="/seaded">
        <button className="button">Seaded</button>
      </Link>
          </div>
          
                <div className="button-spacer">
            <Link to="/haldatooteid">
        <button className="button">Halda tooteid</button>
      </Link>
          </div>
          
              <div className="button-spacer">
            <Link to="/tooted">
        <button className="button">Tooted</button>
      </Link>
        </div>
            
      </div>
    
    </div>
      
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={<LisaToode />} />
        <Route path="meist" element={ <Meist /> } />
        <Route path="poed" element={<Poed />} />
        <Route path="seaded" element={<Seaded />} />
        <Route path="books" element={<Books />} />
        
        <Route path="muuda/:i" element={<MuudaToode />} />
        <Route path="haldatooteid" element={<HaldaTooteid />} />
        <Route path="tooted" element={<Tooted />} />
        <Route path="toode/:index" element={<YksikToode />} />

      </Routes>


</div>
  );
}

export default App;


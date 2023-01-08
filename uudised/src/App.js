import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht
function App() {
  return (
    <div>

      <Link to="/avaleht">
        <button className="avaleht">Avaleht</button>
      </Link>
      
      <Link to="/avaleht">
        <button className="avaleht">Avaleht</button>
      </Link>
      
      <Link to="/ostukorv">
        <button className="ostukorv">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="/lisa-toode">Lisa tooted</button>
      </Link>
    
      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path="uudised" element={<Uudised />} />
        <Route path="kontakt" element={ <Kontakt/> } />
        <Route path="meist" element={ <Meist /> } />
      </Routes>


    </div>
  );
}

export default App;

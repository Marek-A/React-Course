import { useState } from "react";
import { Link } from "react-router-dom";

function Tooted() {
    const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

    
    const lisaOstukorvi = (klikitudToode) => {
        let ostukorvLS = localStorage.getItem("ostukorv");
        ostukorvLS = JSON.parse(ostukorvLS) || [];
        ostukorvLS.push(klikitudToode);
        ostukorvLS = JSON.stringify(ostukorvLS);
        localStorage.setItem("ostukorv", ostukorvLS);
    }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }
  const sorteeriZA = () => { 
      tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
      uuendaTooted(tooted.slice());
  }
  
  const sorteeriHindAsc = () => { 
    tooted.sort((a,b) => a.hind - b.hind);
          uuendaTooted(tooted.slice());
  }
  
  const sorteeriHindDesc = () => { 
    tooted.sort((a,b) => b.hind - a.hind);
          uuendaTooted(tooted.slice());
  }

  const sorteeriTahedAsc = () => { 
      tooted.sort((a, b) => a.nimi.length - b.nimi.length); 
      uuendaTooted(tooted.slice());
  }
  
  const sorteeriTahedDesc = () => { 
      tooted.sort((a, b) => b.nimi.length - a.nimi.length); 
      uuendaTooted(tooted.slice());
  }
  
  const sorteeriUudsusAsc = () => { 
  uuendaTooted(JSON.parse(localStorage.getItem("tooted")) || [])
      }
  const sorteeriUudsusDesc = () => { 
  uuendaTooted(JSON.parse(localStorage.getItem("tooted")).reverse() || [])
  }


  const filtreeriTaheJargi = (taht) => { 
    const tulem = tooted.filter(element => element.nimi.startsWith(taht));
    uuendaTooted(tulem);  
  }

    return (
      

      <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriHindAsc}>Sorteeri hinna järgi kasvavalt</button>
        <button onClick={sorteeriHindDesc}>Sorteeri hinna järgi kahanevalt</button>
        <button onClick={sorteeriTahedAsc}>Sorteeri tähemärkide järgi kasvavalt</button>
        <button onClick={sorteeriTahedDesc}>Sorteeri tähemärkide järgi kahanevalt</button>
        <button onClick={sorteeriUudsusAsc}>Sorteeri uudsuse järgi kasvavalt</button>
        <button onClick={sorteeriUudsusDesc}>Sorteeri uudsuse järgi kahanevalt</button>
        <button onClick={() => filtreeriTaheJargi ("V")}>V</button>
        <button onClick={() => filtreeriTaheJargi ("L")}>L</button>
        <button onClick={() => filtreeriTaheJargi("a")}>a</button>

        
        {tooted.filter(element => element.aktiivne === true).map( (element, index) =>
          <div key={index}>
            <Link to={"/toode/" + index}>
              <img src={element.pilt} alt=""/>
              <div>{element.nimi}</div>
              <div>{element.hind}</div>
              <div>{element.aktiivne}</div>
            </Link>
            <button onClick={() => lisaOstukorvi (element)}>Lisa ostukorvi</button>
          </div>)}
        </div>
        

  )
}

export default Tooted
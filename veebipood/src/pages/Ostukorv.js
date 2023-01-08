import { useState } from "react";

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

    const kustuta = (i) => {
        ostukorv.splice(i, 1);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    }

    const lisa = (toode) => {
        ostukorv.push(toode);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    }

        const tyhjenda= () => {
        uuendaOstukorv([]);
        localStorage.setItem("ostukorv", JSON.stringify([]));
    }

    const arvutaKoguSumma = () => {
        let KoguSumma = 0;
        ostukorv.forEach(element => KoguSumma = KoguSumma + element.hind);
        return KoguSumma.toFixed(2);
        
    }

    return (
        <div>

            {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
            {ostukorv.length > 0 && <div>{ostukorv.length} tk</div>}
            {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}

            {ostukorv.map( (element, index) =>
                <div key={index}>
                  <img src={element.pilt} alt=""/>
                  <div>{element.nimi}</div>
                  <div>{element.hind} €</div>
                  <div>{element.aktiivne}</div>
                  <button onClick={() => kustuta(index)}>x</button>
                  <button onClick={() => lisa(element)}>+</button> 
                </div>
            )}

            







            <div>Ostukorvi kogu hind: {arvutaKoguSumma()} €</div>

            











      <div>
       
      </div>






        </div>
    )
}

export default Ostukorv;
// "RFCE" on template command - esimese asjana sisse kirjutada

import { useState } from "react";

function Avaleht() {
    const [kogus, uuendaKogus] = useState(7);
    const [sonum, uuendaSonum] = useState("");
    const [liketud, uuendaLiketud] = useState(false); // false true - kahendväärtus (boolean)

    function nulli() {
        uuendaKogus(0);
        uuendaSonum("Panid tagasi nulli");
    }

    function vahenda() {
        uuendaKogus(kogus - 1);
        uuendaSonum("Vähendasid kogust");
    }
    
    function suurenda() {
        uuendaKogus(kogus + 1);
        uuendaSonum("Suurendasid kogust");
    
    }
    
// Too many re-renders. React limits
    // Lagenuds: onCLick?={() => }     ()    } => puudu

    return (
        <div>
            {liketud === true && <img onClick={() => uuendaLiketud(false)} src="/liketud.svg" alt="" />}
            {liketud === false && <img onClick={() => uuendaLiketud(true)} src="/mitteliketud.svg" alt="" />}
            <button onClick={() => uuendaLiketud (!liketud)}>Muuda lemmikut</button>
            <div>{sonum}</div>
            { kogus > 0 && <button onClick={nulli}>Nulli</button> }
            <br />
            <button disabled={kogus === 0} onClick={vahenda}>-</button>
            <div>{kogus}</div>
            <button onClick={suurenda}>+</button>
            
        </div>
    );
}

export default Avaleht;
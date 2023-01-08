import { useRef, useState } from "react";


function LisaToode() {
    const [sonum, uuendaSonum] = useState("Lisa uus toode!");

    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef();



    function lisa() {

        if (nimiRef.current.value === "") {
        
        uuendaSonum("Tühja nimega ei saa toodet lisada!")
    } else { 
        uuendaSonum("Uus toode listatud " + nimiRef.current.value);
        
        // BACKEND local STORAGE    
        
            let tootedLS = localStorage.getItem("tooted"); 
            tootedLS = JSON.parse(tootedLS) || [];
            const uusToode = {
                "nimi": nimiRef.current.value,
                "hind": Number(hindRef.current.value),
                "pilt": piltRef.current.value,
                "aktiivne": aktiivneRef.current.checked,
                
            }
            tootedLS.push(uusToode);
            tootedLS = JSON.stringify(tootedLS);
            localStorage.setItem("tooted", tootedLS); // key | value



// 1. võtame localStoragest kõik varasemad väärtused
      // 2. võtame jutumärgid maha (sest localStorage annab meile VAID jutumärkidega väärtusi)
      //            VÕI kui on tühjus, asendame tühja Array-ga
      // 3. lisame ühe toote vastsaadud Array-sse juurde
      // 4. paneme jutumärgid tagasi (sest localStorage võtab vastu VAID jutumärkidega väärtusi)
      // 5. paneme localStorage-sse uued väärtused

      // localStorage.getItem
      // JSON.parse()   || []
      // [].push
// JSON.stringify()
      // localStorage.setItem <--- setItem kustutab ära vana väärtuse, asendades sellega, mis ma ütlen


  }
}

    return ( 
        <div>
            <div>{sonum}</div>
            <label>Toote nimi</label> <br />
            <input ref={nimiRef} type="text" /> <br />
            <label>Toote hind</label> <br />
            <input ref={hindRef} type="number" /> <br />
            <label>Toote pilt</label> <br />
            <input ref={piltRef} type="text" /> <br />
            <label>Toote aktiivsus</label> <br />
            <input ref={aktiivneRef} type="checkbox" /> <br />
            <button onClick={lisa}>Sisesta</button><br />
        </div>
    ) 
    
        }
        
    export default LisaToode;
    
// // Parsing error: 'import' and 'export' may only appear at the top level. (34:4)
// Kui loogeline sulg kadus ära




//             // if (true) {} else {}
//         // if (inputiLuger.current.value.startsWith("C")) === true) {
//         //     uuendaSonum("Tõene, jei!")
//         // } else { 
//         //     uuendaSonum("Väär!")
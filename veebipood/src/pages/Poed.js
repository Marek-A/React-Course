import poedFailist from "../poed.json";
import { useState, useRef } from "react";
// import { PoodRef } from "react";

function Poed() {
 
  const [poed, uuendaPoed] = useState(poedFailist.slice());
  const [ostukorv, uuendaOstukorv] = useState(["Nboe, Tesla, BMW"]);
  const poodRef = useRef(); //koos impordiga!
  const aegRef = useRef();
  
      const paneTagasi= () => {;
      uuendaPoed(poedFailist.slice())
  }
  

// sort
      const sorteeriAZ = () => {
      poed.sort((a, b) => a.nimi.localeCompare(b.nimi));
      console.log(poed);
      uuendaPoed(poed.slice()); //alati kasuta kui tegeled arrayga - kui uuendan arrayd useState funktsiooni abil
    }

      const sorteeriZA = () => {
      poed.sort((a, b) => b.nimi.localeCompare(a.nimi)); //ei tee defalti kasutusjuhtu
      uuendaPoed(poed.slice());
    }
    
      const sorteeriT2hed = () => {
      poed.sort((a, b) => a.nimi.length - b.nimi.length); 
      uuendaPoed(poed.slice());
    }
    
      const sorteeriT2hedVastupidi = () => {
      poed.sort((a, b) => b.nimi.length - a.nimi.length); 
      uuendaPoed(poed.slice());
    }

      const sorteeriT2hedTeise = () => {
      poed.sort((a, b) => a.nimi.charAt(1).localeCompare(b.nimi.charAt(1)));
      uuendaPoed(poed.slice());
    }

// filter
      const filtreeriM2e = () => {
      const tulem = poed.filter(element => element.nimi.endsWith("mäe") === true);
      uuendaPoed(tulem);
    }
  
      const filtreeriLinn = () => {
      const tulem = poed.filter(element => element.nimi.includes("linn") === true);
      uuendaPoed(tulem);    
    }
    
      const filtreeriT2heArv8 = () => {
      const tulem = poed.filter(element => element.nimi.length === 8);
      uuendaPoed(tulem);    
    }
  
      const filtreeriT2heArvV2iksemKui7 = () => {
      const tulem = poed.filter(element => element.nimi.length <= 7);
      uuendaPoed(tulem);    
    }
  
      const filtreeriKellelKolmasS = () => {
      const tulem = poed.filter(element => element.nimi.charAt(2) === "s");
      uuendaPoed(tulem);    
  }
// map element - tüle millega asendan ühaühe
  
      const muudaKoikSuureks = () => {
        const tulem = poed.map(element => {return{"nimi":element.nimi.toUpperCase(), "aeg": element.aeg}});
      uuendaPoed(tulem);    
  }
  
      const muudaKoikVaikseks = () => {
      const tulem = poed.map(element => {return{"nimi":element.nimi.toLowerCase(), "aeg": element.aeg}});
      uuendaPoed(tulem);    
  }

      const muudaKoikKriipsuga = () => {
      const tulem = poed.map(element => {return{"nimi": "--" + element.nimi.toUpperCase(), "aeg": element.aeg}});
      uuendaPoed(tulem);    
  }

      const muudaKoikNumberLoppu = () => {
      const tulem = poed.map(element => {return{"nimi": element.nimi + element.nimi.length, "aeg": element.aeg}});
      uuendaPoed(tulem);
  }

      const muudaKogilIO = () => {
      const tulem = poed.map(element => {return{"nimi": element.nimi.replaceAll("i", "o"), "aeg": element.aeg}});
      uuendaPoed(tulem);    
  }
  

// WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
  
  const kustuta = (j2rjekorraNr) => {
      
    poed.splice(j2rjekorraNr, 1);
      uuendaPoed(poed.slice())
  }


  const lisa = () => {
    poed.push({"nimi": poodRef.current.value, "aeg": aegRef.current.value});
    uuendaPoed(poed.slice());
  }

  return (
   
<div>
  <div>
      <button onClick={paneTagasi}>Reset</button> 
      <button onClick={sorteeriT2hedTeise}>Sorteeri teise tähe järgi</button>
      <button onClick={sorteeriT2hedVastupidi}>Sorteeri vastpidises tähtede järjekorras</button>
      <button onClick={sorteeriT2hed}>Sorteeri tähte järjekorras</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriM2e}>Jäte alles vaid "mäe"-ga lõppevad</button>
      <button onClick={filtreeriLinn}>Jäte alles vaid "linn" sisaldavad</button>
      <button onClick={filtreeriT2heArv8}>Rohkem kui 8 tähte</button>
      <button onClick={filtreeriT2heArvV2iksemKui7}>Vähem kui 7 tähte</button>
      <button onClick={filtreeriKellelKolmasS}>Kolmas täht S</button>
      <button onClick={muudaKoikSuureks}>Muuda kõik suurteks tähtedeks</button>
      <button onClick={muudaKoikVaikseks}>Muuda kõik väikesteks tähtedeks</button>
      <button onClick={muudaKoikKriipsuga}>Muuda kõik kriipsudega</button>
      <button onClick={muudaKoikNumberLoppu}>Pane kõigile number lõppu</button>
      <button onClick={muudaKogilIO}>Asenda I O-ga</button>
    </div>
 
      
      <label>Poe nimi</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

      <label>Poe lahtioleku ajad</label> <br />
      <input ref={aegRef} type="text" /> <br />

      
      <div>{poed.length}</div>
      {poed.map((yksPood, index) =>
      <div key={index}>
          {index} {yksPood.nimi} {yksPood.aeg}
          {/* {{"keskus": "Kristiine"}.keskus} */}
          <button onClick={() => kustuta(index)}>x</button>
      </div>)} 
      

  

      <div>-------------------------</div>
      <div>
      <div>Kristiine</div>
      <div>Mustamäe</div>
      <div>Kesklinn</div>
      <div>Haabersti</div>
      <div>Õismäe</div>
      <div>Lasnamäe</div>
      <div>Telliskivi</div>
      <div>Loo Keskus</div>
      </div>
     
  

    </div>
  )
}

export default Poed
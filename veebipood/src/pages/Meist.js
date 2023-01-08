import { useState } from "react";

function Meist() {
  const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("meie_telefon") || "");
  


  
  return (
    <div>

      <div>Email: <br />
        {n2itaEmaili === true && localStorage.getItem("meie_email")}
        {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita emaili</button> }
      </div>
      <div>Telefon: <br />
      {telefon}
        {telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefon("+372" + telefon)}>Lisa +372</button>}
      </div>
      </div>
  )
}

export default Meist


// {/* <div>Meie telefon: { localStorage.getItem("meie_telefon") || "53050833"}</div> */ }

// function = kollane

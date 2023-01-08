import { useRef, useState } from "react";

function Seaded() {

    const [keel, muudaKeel] = useState(localStorage.getItem("veebilehe_keel") || "ee");
    const telefonViide = useRef();
    const emailViide = useRef(); 
    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

    const tumeLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
        muudaKujundus("dark_mode");
    }

    const heleLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "light_mode");
        muudaKujundus("light_mode");
    }


    const salvestaTelefon = () => {
        localStorage.setItem("meie_telefon", telefonViide.current.value);
    }
    const salvestaEmail = () => {
        localStorage.setItem("meie_email", emailViide.current.value);
    }


    //     const muudaKeelEE = () => {
    //     muudaKeel("ee");
    //     localStorage.setItem("veebilehe_keel", "ee");
    // }

    //     const muudaKeelEN = () => {
    //     muudaKeel("en");
    //     localStorage.setItem("veebilehe_keel", "en");
    // }

    //     const muudaKeelRU = () => {
    //     muudaKeel("ru");
    //     localStorage.setItem("veebilehe_keel", "ru");
    // }

    
    // FUNKTSIOON MIS PANEB KÕIK KEELED ÜHTE - uus lahendus

        const uuendaKeel = (uusKeel) => {
        muudaKeel(uusKeel);
        localStorage.setItem("veebilehe_keel", uusKeel);
    }


return (
        
    <div>
            
        <div>
            <button id="mode" onClick={tumeLeht}>Tume leht</button>
            <button id="mode" onClick={heleLeht}>Hele leht</button>
            { kujundus==="dark_mode" && <div>TUME LEHT</div> }
            { kujundus==="light_mode" && <div>HELE LEHT</div> }
        </div>
            
            
        <label>Telefon</label>
        <input ref={telefonViide} defaultValue={localStorage.getItem("meie_telefon")} type="text" />
        <button onClick={salvestaTelefon}>Salvesta telefon</button>
        <br />
        <label>Email</label>
        <input ref={emailViide} defaultValue={localStorage.getItem("meie_email")} type="text" />
        <button onClick={salvestaEmail}>Salvesta email</button>
        <br />

        {/* vana lahendus */}
        
        {/* <button onClick={() => muudaKeelEE("ee")}>EST</button>
        <button onClick={() => muudaKeelEN("en")}>ENG</button>
        <button onClick={() => muudaKeelRU("ru")}>RUS</button> */}

        {/* uus lahendus */}
        
        <button onClick={() => uuendaKeel("ee")}>EST</button>
        <button onClick={() => uuendaKeel("en")}>ENG</button>
        <button onClick={() => uuendaKeel("ru")}>RUS</button>

        {keel === "ee" && <div>Veebileht on Eesti keelne</div>}

        {keel === "en" && <div>Veebileht on Inglise keelne</div>}

        {keel === "ru" && <div>Veebileht on Vene keelne</div>}
          

    </div>);
 }

export default Seaded




//Keele puhul salvestus//
      
    // function muudaKeelEE() {

    // }

    // VÕI ALTERNATIIV

    //     const muudaKeelEE = () => {

    // }


    //  const muudaKeelEE = () => {
    //     muudaKeel("ee");
    //     localStorage.setItem("veebilehe_keel", "ee");
    // }

    //     const muudaKeelEN = () => {
    //     muudaKeel("ee");
    //     localStorage.setItem("veebilehe_keel", "en");
    // }

    //         const muudaKeelRU = () => {
    //     muudaKeel("ee");
    //     localStorage.setItem("veebilehe_keel", "ru");
    // }


        // con salvestaTelefon = () => {}
    // con salvestaEmail = () => {}
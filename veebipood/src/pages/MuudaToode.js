import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"

function MuudaToode() {
  const {i} = useParams();
  const tootedLS = JSON.parse(localStorage.getItem("tooted")) ||[];
  const leitudToode = tootedLS[i];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  
  const navigate = useNavigate();


  const muuda = () => {

    const uuenenudToode = {
                "nimi": nimiRef.current.value,
                "hind": Number(hindRef.current.value),
                "pilt": piltRef.current.value,
                "aktiivne": aktiivneRef.current.checked,
}
    tootedLS[i] = uuenenudToode;

    localStorage.setItem("tooted", JSON.stringify(tootedLS));
    navigate("/haldatooteid");
  }


  return (
    <div>
      
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitudToode.nimi} type="text" /> <br />
 

      <label>Toote hind</label> <br />
      <input ref={hindRef} defaultValue={leitudToode.hind} type="number" /> <br />


      <label>Toote pilt</label> <br />
      <input ref={piltRef} defaultValue={leitudToode.pilt} type="text" /> <br />
  

      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitudToode.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button> <br />



    </div>
  )
}

export default MuudaToode
import { useState } from "react"
import { Link } from "react-router-dom";

function HaldaTooteid() {
        const [tooted, muudaTooted] = useState (JSON.parse(localStorage.getItem("tooted")) || []);

    const kustuta = (index) => {

        tooted.splice(index,1);
        muudaTooted(tooted.slice());
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }

    
  return (
      <div>
          {tooted.map((element, index) =>
              <div key={index} className={element.aktiivne === true ? "aktiivne" : "mitteaktiivne"}>
              <img src={element.pilt} alt=""/>
              <div>{element.nimi}</div>
              <div>{element.hind} €</div>
              <div>{element.aktiivne + 0}</div>

              <button onClick={() => kustuta(index)}>Kustuta</button>
              <Link to={"/muuda/" + index}>
              <button>Muuda</button>
              </Link>
              </div>
          )}
    </div>
  )
}

export default HaldaTooteid
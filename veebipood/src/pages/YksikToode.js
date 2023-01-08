import { useParams } from "react-router-dom"


function YksikToode() {
  const { index } = useParams(); // localhost:3000/toode/:index --> // localhost3000:/toode/0
  const tooted = JSON.parse(localStorage.getItem("tooted")) ||[];
  // siia_tuleb_leitud_toode = ["Nobe", "Tesla", "BMW"][0];
  const leitudToode = tooted[index];

  return (

    <div>
              <img src={leitudToode.pilt} alt=""/>
              <div>{leitudToode.nimi}</div>
              <div>{leitudToode.hind}</div>
              <div>{leitudToode.aktiivne}</div>
    </div>
  )
}

export default YksikToode
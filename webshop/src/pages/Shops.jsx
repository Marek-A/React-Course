import { useEffect, useState } from 'react';
import Map from '../components/Map';
import config from "../data/config.json";
import Spinner from 'react-bootstrap/Spinner';

function Shops() {
  const [coordinaates, setCoordinates] = useState({ lngLat: [58.8243, 25.5786], zoom: 11 });
  const [shops, setShops] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.shopsDbUrl1)
      .then(res => res.json())
      .then(json => {
        setShops(json || [])
        setLoading(false);
      });
  }, []);

  //---------LOADER BEFORE RETURN--------------
  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }
  return (<div>
    <button onClick={() => setCoordinates({ lngLat: [58.8243, 25.5786], zoom: 6 })}>Kõik poed</button>
    <button onClick={() => setCoordinates({ lngLat: [59.4206, 24.7744], zoom: 11 })}>Kõik Tallinna poed</button>
    {/* <button onClick={() => setCoordinates({ lngLat: [59.4231, 24.7991], zoom: 13 })}>Ülemiste</button>
    <button onClick={() => setCoordinates({ lngLat: [59.4277, 24.7193], zoom: 13 })}>Kristiine</button>
    <button onClick={() => setCoordinates({ lngLat: [58.3779, 26.7308], zoom: 13 })}>Tasku</button> */}
    {shops.map(element =>
      <button key={element.name} onClick={() => setCoordinates({ lngLat: [element.longitude, element.latitude], zoom: 13 })}>{element.name}</button>)};

    <Map mapCoordinaates={coordinaates} />
  </div>)
}

export default Shops;
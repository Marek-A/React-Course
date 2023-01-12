
import { useState } from 'react';
import Map from '../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({ lngLat: [58.8243, 25.5786], zoom: 11 });

  return (<div>
    <button onClick={() => setCoordinates({ lngLat: [58.8243, 25.5786], zoom: 6 })}>Kõik poed</button>
    <button onClick={() => setCoordinates({ lngLat: [59.4206, 24.7744], zoom: 11 })}>Kõik Tallinna poed</button>
    <button onClick={() => setCoordinates({ lngLat: [59.4231, 24.7991], zoom: 13 })}>Ülemiste</button>
    <button onClick={() => setCoordinates({ lngLat: [59.4277, 24.7193], zoom: 13 })}>Kristiine</button>
    <button onClick={() => setCoordinates({ lngLat: [58.3779, 26.7308], zoom: 13 })}>Tasku</button>
    <Map mapCoordinaates={coordinaates} />
  </div>)
}

export default Shops;
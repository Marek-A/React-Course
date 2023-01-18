import { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";

function MaintainShops() {
    const [shops, setShops] = useState([]);
    const shopNameRef = useRef();
    const openTimeRef = useRef();
    const closingTimeRef = useRef();
    const cityRef = useRef();
    const lngLatRef = useRef();

    useEffect(() => {
        fetch(config.shopsDbUrl1)
            .then(res => res.json())
            .then(json => setShops(json || []));
    }, []);

    const addShops = () => {
        shops.push({ "name": shopNameRef.current.value, "openTime": openTimeRef.current.value, "closingTime": closingTimeRef.current.value, "city": cityRef.current.value, "lngLat": lngLatRef.current.value });
        fetch(config.shopsDbUrl1, { "method": "PUT", "body": JSON.stringify(shops) })
            .then(() => {
                setShops(shops.slice());
                shopNameRef.current.value = "";
                openTimeRef.current.value = "";
                closingTimeRef.current.value = "";
                cityRef.current.value = "";
                lngLatRef.current.value = "";
            });
    }

    const deleteShop = (index) => {
        shops.splice(index, 1);
        fetch(config.shopsDbUrl1, { "method": "PUT", "body": JSON.stringify(shops) })
            .then(() => setShops(shops.slice()));
    }

    return (
        <div>
            <label>Shop name</label><br />
            <input ref={shopNameRef} type="text" /><br />
            <label>Open time</label><br />
            <input ref={openTimeRef} type="time" /><br />
            <label>Closing time</label><br />
            <input ref={closingTimeRef} type="time" /><br />
            <label>City</label><br />
            <input ref={cityRef} placeholder="Tallinn" type="text" /><br />
            <label>Longitude and Latitude</label><br />
            <input ref={lngLatRef} placeholder="58.8243, 25.5786" type="text" /><br />
            <button onClick={addShops}>Add new shop</button><br /><br />
            {shops.map((element, index) => <div key={index}>{element.name}<button onClick={() => deleteShop(index)}>X</button></div>)}
        </div>

    )
}

export default MaintainShops




// export default function MaintainShops() {
//   // lisada, vaadata, kustutada

//   // xCoord, yCoord, name, openTime
//   // xCoordRef
//   // openTimeRef

//   // input 4x

//   // addShop() {  const newShop = {"xCoord": xCoordRef.current.value, "yCoord": ....} }
//   return (
//     <div>MaintainShops</div>
//   )
// }

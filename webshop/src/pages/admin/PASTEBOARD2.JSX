import { useEffect, useState } from 'react';
import config from "../../data/config.json";

function MaintainShops() {
    const [shopName, setShopName] = useState('');
    const [openTime, setOpenTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [city, setCity] = useState('');
    const [xCoord, setXCoord] = useState('');
    const [yCoord, setYCoord] = useState('');
    const [shops, setShops] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(config.shopsDbUrl1)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(json => setShops(json || []))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const addShops = (event) => {
        event.preventDefault();
        if (!shopName || !openTime || !closingTime || !city || !xCoord || !yCoord) {
            setError('All fields are required!');
            return
        }
        setIsLoading(true);
        const newShop = { "xCoord": xCoord, "yCoord": yCoord, "name": shopName, "openTime": openTime, "closingTime": closingTime, "city": city }
        fetch(config.shopsDbUrl1, {
            method: "POST",
            body: JSON.stringify([...shops, newShop]),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(() => {
                setShops([...shops, newShop]);
                setXCoord('');
                setYCoord('');
                setShopName('');
                setOpenTime('');
                setClosingTime('');
                setCity('');
                setError('');
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }

    const deleteShop = (index) => {
        setIsLoading(true);
        const newShops = shops.filter((_, i) => i !== index);
        fetch(config.shopsDbUrl1, {
            method: "PUT",
            body: JSON.stringify(newShops),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(() => {
                setShops(newShops);
                setError('');
            })
            .catch(err => setError(err.message)).finally(() => setIsLoading(false));
    }

    return (
        <div>
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading">Loading...</div>}
            <form onSubmit={addShops}>
                <label>Shop name</label><br />
                <input value={shopName} onChange={e => setShopName(e.target.value)} type="text" /><br />
                <label>Open time</label><br />
                <input value={openTime} onChange={e => setOpenTime(e.target.value)} type="time" /><br />
                <label>Closing time</label><br />
                <input value={closingTime} onChange={e => setClosingTime(e.target.value)} type="time" /><br />
                <label>City</label><br />
                <input value={city} onChange={e => setCity(e.target.value)} placeholder="Tallinn" type="text" /><br />
                <label>X Coord</label><br />
                <input value={xCoord} onChange={e => setXCoord(e.target.value)} placeholder="58.8243" type="text" /><br />
                <label>Y Coord</label><br />
                <input value={yCoord} onChange={e => setYCoord(e.target.value)} placeholder="25.5786" type="text" /><br />
                <button type="submit">Add new shop</button><br /><br />
            </form>
            {shops.map((element, index) => (
                <div key={index}>
                    {element.name}
                    <button onClick={() => deleteShop(index)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default MaintainShops;

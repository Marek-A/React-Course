import { useEffect, useState } from "react";
import config from "../data/config.json";


function SingleProduct() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(config.productsDbUrl1)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            });
    }, []);


    return (
        <div>

            {products.map((element, index) => (
                <div keys={element.id}>
                    <img src={element.image} alt="" />
                    <div>{element.id}</div>
                    <div>{element.name}</div>
                    <div>{element.price}</div>
                    <div>{element.image}</div>
                    <div>{element.category}</div>
                    <div>{element.description}</div>
                    <div>{element.active}</div>
                </div>

            ))
            }
        </div >
    );
}

export default SingleProduct

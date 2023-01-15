import { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const searchedRef = useRef();
  const [DbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => {
        setProducts(json)
        setDbProducts(json);
      });
  }, []);

  const deleteProduct = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    toast("Product deleted!", { "positsion": "top-right", "theme": "dark" });
  };

  const searchFromProducts = () => {
    const result = DbProducts.filter(element =>
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <ToastContainer />

      <input ref={searchedRef} onChange={searchFromProducts}
        placeholder="Search here" type="text" />
      <div>{products.length} products</div>

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
          <img
            className="kustuta"
            onClick={() => deleteProduct(index)}
            src="/trash.png"
            alt="Remove"
          />
          <Link to={"/admin/edit-product/" + element.id}>
            <button onClick="">Edit product</button></Link>
        </div>

      ))
      }
    </div >
  );
}

export default MaintainProducts;

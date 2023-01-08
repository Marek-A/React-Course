import { useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    toast("Product deleted!", { "positsion": "top-right", "theme": "dark" });
  };


  return (
    <div>
      <ToastContainer />
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
        </div>
      ))}
    </div>
  );
}

export default MaintainProducts;

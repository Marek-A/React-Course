import "../css/Homepage.css";
import config from "../data/config.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";




function Homepage() {

  const { t } = useTranslation();
  const [products, setProducts] = useState([])
  const [DbProducts, SetDbProducts] = useState([]);

  const navigate = useNavigate()
  const handleClick = (productId) => {
    navigate(`/single-product/${productId}`);
  }
  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => {
        SetDbProducts(json)
        setProducts(json);
      });

  }, []);

  // const [products] = useState(productsFromFile);  // LocalStorage file 

  const addToCart = (clickedProduct) => {
    let cartBB = localStorage.getItem("cart");
    cartBB = JSON.parse(cartBB) || [];

    const index = cartBB.findIndex(element => element.product.id === clickedProduct.id);
    if (index >= 0) {
      cartBB[index].quantity = cartBB[index].quantity + 1;
    } else {
      cartBB.push({ "product": clickedProduct, "quantity": 1 });
    }
    cartBB = JSON.stringify(cartBB);
    localStorage.setItem("cart", cartBB);
    toast(t("added-to-cart"), { "positsion": "top-right", "theme": "dark" });
  };
  // const categories = ["Backpacks", "Glasses", "boots", "HEHEH"]

  const categories = [...new Set(DbProducts.map(element => element.category))];

  const filterByCategory = (categoryClicked) => {
    const result = DbProducts.filter(element => element.category === categoryClicked)
    setProducts(result);
  }

  return (
    <div>

      <button>Sorteeri AZ - kodus</button>
      <button>Sorteeri ZA - kodus</button>
      <button>Sorteeri price increasing - kodus</button>
      <button>Sorteeri price decreasing - kodus</button>
      <br />
      <div>
        {products.length} products
      </div>
      {/* <button onClick={() => filterByCategory("Backpacks")}>Backpacks</button>
      <button onClick={() => filterByCategory("Glasses")}>Eyewear</button>
      <button onClick={() => filterByCategory("boots")}>Footwear</button> */}
      {categories.map(element => <button onClick={() => filterByCategory(element)}>{element}</button>)}

      <ToastContainer />
      {products.map((element) => (
        <div className="home-product" key={element.id}>
          <div className="home-product-category">{t("Category:")}{element.category}</div>
          <div className="home-product-name">{t("Product name:")}{element.name}</div>
          <div className="home-product-description">{t("Description:")}{element.description}</div>
          <div className="home-product-id">{t("Product ID:")}{element.id}</div>
          <img className="home-product-image" src={element.image} alt="" />
          <button onClick={() => handleClick(element.id)}>More info about this product</button>
          <div className="home-product-price">{t("Price:")}{element.price} $</div>
          <div className="home-product-activity">{t("Product is available")}{element.active}</div>
          <img
            className="home-add-to-cart"
            onClick={() => addToCart(element)}
            src="/addcart.png"
            alt="Add to basket"
          />
        </div>
      ))}


    </div>
  );
}
export default Homepage;
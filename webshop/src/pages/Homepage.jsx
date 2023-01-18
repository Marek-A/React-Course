import "../css/Homepage.css";
import config from "../data/config.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

function Homepage() {
  //-----------------------------------------------------------------------------
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [DbProducts, SetDbProducts] = useState([]);
  const categories = [...new Set(DbProducts.map(element => element.category))];
  const [sort, setSort] = useState("A-Z");
  const [isLoading, setLoading] = useState(true);
  //-----------------------------------------------------------------------------
  const handleClick = (productId) => {
    navigate(`/single-product/${productId}`);
  }
  //-----------------------------------------------------------------------------
  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => {
        SetDbProducts(json)
        setProducts(json);
        setLoading(false);
      });
  }, []);
  //-----------------------------------------------------------------------------
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
  //-----------------------------------------------------------------------------
  const filterByCategory = (categoryClicked) => {
    const result = DbProducts.filter(element => element.category === categoryClicked)
    setProducts(result);
  }
  //-----------------------------------------------------------------------------
  const sortProducts = () => {
    switch (sort) {
      case "A-Z":
        setProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "Z-A":
        setProducts(products.sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case "Price increasing":
        setProducts(products.sort((a, b) => a.price - b.price));
        break;
      case "Price decreasing":
        setProducts(products.sort((a, b) => b.price - a.price));
        break;
      default:
        console.error("Invalid sort parameter passed.");
    }
  };
  //-----------------------------------------------------------------------------
  const resetFilters = () => {
    setProducts(DbProducts);
  };
  //-----------------------------------------------------------------------------
  const showAllProducts = () => {
    setProducts(DbProducts);
  };
  //-----------------------------------------------------------------------------


  //---------LOADER BEFORE RETURN--------------
  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }

  return (
    <div className="webshop-container">
      <div>
        <div> {products.length} products</div>
        <button onClick={resetFilters}>Reset Filters</button>
        <button onClick={() => { setSort("A-Z"); sortProducts(); }}>Sort A-Z</button>
        <button onClick={() => { setSort("Z-A"); sortProducts(); }}>Sort Z-A</button>
        <button onClick={() => { setSort("Price increasing"); sortProducts(); }}>Sort Price Increasing</button>
        <button onClick={() => { setSort("Price decreasing"); sortProducts(); }}>Sort Price Decreasing</button>
        <button onClick={showAllProducts}>Show All Products</button>
        {categories.map(element => <button onClick={() => filterByCategory(element)}>{element}</button>)}
      </div>

      <ToastContainer />
      {products.map((element) => (
        <div className="product-card" key={element.id}>
          <img className="product-image" src={element.image} alt="" />
          <div className="product-details">
            <div className="product-name">{element.name}</div>
            <div className="product-category">{t("Category:")}{element.category}</div>
            <div className="product-description">{element.description}</div>
            <div className="product-price">{t("Price:")} ${element.price}</div>
            <div className="product-activity">{t("Product is available")}{element.active}</div>
            <button onClick={() => handleClick(element.id)} className="more-info-btn">More info about this product</button>
            <button onClick={() => addToCart(element)} className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Homepage;


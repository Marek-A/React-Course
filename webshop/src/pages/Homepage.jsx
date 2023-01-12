import "../css/Homepage.css";
import productsFromFile from "../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Homepage() {

  const { t } = useTranslation();

  const [products] = useState(productsFromFile);

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



  return (
    <div>
      <ToastContainer />
      {products.map((element) => (
        <div className="home-product" key={element.id}>
          <div className="home-product-category">{t("Category:")}{element.category}</div>
          <div className="home-product-name">{t("Product name:")}{element.name}</div>
          <div className="home-product-description">{t("Description:")}{element.description}</div>
          <div className="home-product-id">{t("Product ID:")}{element.id}</div>
          <img className="home-product-image" src={element.image} alt="" />
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


const itemContainerClass = "s-item";
const imageClass = "s-item__image-img";
const titleClass = "s-item__title";
const priceClass = "s-item__price";

const items = document.getElementsByClassName(itemContainerClass);

const arr = [];

Array.from(items).forEach((item) => {
  const imgs = item.getElementsByClassName(imageClass);
  if (imgs.length === 0) return;
  const img = imgs[0];
  const src = img.src;
  if (!src) return;
  let name = item.getElementsByClassName(titleClass)[0].textContent;
  const description = name;
  name = name.split(" ").slice(0, 3).join(" ");
  const _price = item.getElementsByClassName(priceClass)[0].textContent;
  let price = _price.split("$")[2]
    ? _price.split("$")[2]
    : _price.split("$")[1];
  price = price.replace(/,(?=.*\.\d+)/g, "");
  price = Number(price);

  arr.push({
    id: Math.floor(Math.random() * 89999999 + 10000000),
    image: src,
    name,
    price,
    description,
    category: document.title.split(":")[0].trim(),
    active: true,
  });
});

console.log(JSON.stringify(arr));


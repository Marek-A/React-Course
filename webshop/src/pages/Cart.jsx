import { useState } from "react";
import "../css/Cart.css";
import Button from 'react-bootstrap/Button';

import { useTranslation } from "react-i18next";
// import Button from '@mui/material/Button';

function Cart() {

  const { t } = useTranslation();

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const emptyCart = () => {
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }
  const deleteProduct = (i) => {
    cart.splice(i, 1);
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateCartPrice = () => {
    let allPrice = 0;
    cart.forEach(element => allPrice = allPrice + element.product.price * element.quantity);
    return allPrice.toFixed(2);
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteProduct(index);
    }
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }


  return (

    <div className="cart-top">
      {cart.length === 0 && <div>{t("Shopping cart is empty")}</div>}

      {cart.map((element, index) =>
        <div key={element.product.id} className="product">
          <img className="product-image" src={element.product.image} alt="" />
          <div className="product-name">{element.product.name}</div>
          <div className="product-price">{(element.product.price * element.quantity).toFixed(2)} $</div>
          <div className="cart-button-container"><img className="cart-button" src="/plus.png" onClick={() => increaseQuantity(index)} alt="plus" /></div>
          <div className="product-quantity">{element.quantity} {t("quantity-of-products")}</div>
          <div className="cart-button-container"><img className="cart-button" src="/minus.png" onClick={() => decreaseQuantity(index)} alt="minus" /></div>
          <img className="cart-button" src="/trash.png" onClick={() => deleteProduct(index)} alt="trash" />
        </div>
      )}

      <div className="cart-bottom">{t("Cart price:")} {calculateCartPrice()} $ </div>
      <div className="cart-bottom"> {cart.length > 0 && <div>{cart.length} {t("unique products")}</div>}</div>
      <div className="cart-bottom"> {cart.length > 0 && <Button variant="warning" onClick={emptyCart}>{t("Empty the cart")}</Button>}</div></div>
    


  )
}

export default Cart

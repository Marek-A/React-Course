import { useEffect, useState, useRef } from "react";
import "../css/Cart.css";
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
// import Button from '@mui/material/Button';

function Cart() {

  const searchedRef = useRef();
  const searchFromParcelMachines = () => {
    const result = DbparcelMachines.filter(element =>
      element.NAME.toLowerCase().includes(searchedRef.current.value.toLowerCase())

    );
    setParcelMachines(result);
  }

  const { t } = useTranslation();
  const [parcelMachines, setParcelMachines] = useState([]);
  const [DbparcelMachines, setDbParcelMachines] = useState([]); //search function

  useEffect(() => { //useEffect kui tulen lehele ja kohe toimub API päring
    fetch('https://www.omniva.ee/locations.json')
      .then(res => res.json())
      .then(json => setParcelMachines(json))
  }, []);

  useEffect(() => { //Search function for pakiautomaat
    fetch('https://www.omniva.ee/locations.json')
      .then(res => res.json())
      .then(json => {
        setParcelMachines(json);
        setDbParcelMachines(json);
      })

  }, []);

  // -------------------------------------
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

  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentData = {

      "api_username": "92ddcfab96e34a5f", // NEED VAJA MUUTA KUI OMA KONTO SAAN
      "account_name": "EUR3D1",
      "amount": calculateCartPrice(),
      "order_reference": Math.random() * 9999,
      "nonce": "m1293a" + new Date() + Math.random() * 9999,
      "timestamp": new Date(),
      "customer_url": "https://milygear.web.app/"

    };
    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==", // NEED VAJA MUUTA KUI OMA KONTO SAAN
      "Content-Type": "application/json"
    };

    fetch(paymentUrl, { "method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders })
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
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
      <div className="cart-bottom"> {cart.length > 0 && <Button variant="warning" onClick={emptyCart}>{t("Empty the cart")}</Button>}</div>
      <button onClick={pay}>Pay</button>
      <div className="parcel-container">
        <input ref={searchedRef} onChange={searchFromParcelMachines} placeholder="Search for parcel here" type="text" /><br />
        <select className="parcel-menu">
          {parcelMachines
            .filter(element => element.NAME !== "1. eelistus minu.omniva.ee-s",) // !==   - hüümärk tähendab seda et ta ei otsi seda elementi
            .filter(element => element.A0_NAME === "EE") // === - 3 võrdusmärki filtreerib ja näitba ainult neid elemente
            .map(element => <option key={element.NAME}>{element.NAME}</option>)}
        </select>
      </div>
    </div>


  )
}

export default Cart

import "../css/Cart.css";
import { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Spinner from 'react-bootstrap/Spinner';

function Cart() {
  const [isLoading, setLoading] = useState(true);
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
      .then(json => {
        setParcelMachines(json);
        setDbParcelMachines(json);
        setLoading(false);
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


  //---------LOADER BEFORE RETURN--------------
  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }

  return (
    <div>{cart.length === 0 && <div>{t("Shopping cart is empty")}</div>}
      <div>
        <div className="cart-page-main-container">
          <div className="cart-top-btn"> {cart.length > 0 && <Button variant="primary" as={Link} to="/">{t("Continue shopping")}</Button>}{cart.length > 0 && <Button variant="danger" onClick={emptyCart}>{t("Empty the cart")}</Button>}</div>
          {cart.map((element, index) =>
            <div key={element.product.id}>

              <div className="cart-card-container">
                <img className="image" src={element.product.image} alt="" />
                <div className="name">{element.product.name}</div>
                <div className="price">{(element.product.price * element.quantity).toFixed(2)} $</div>
                <div className="cart-product-quantity">{element.quantity} {t("quantity-of-products")}</div>
                <img className="cart-button" src="/plus.png" onClick={() => increaseQuantity(index)} alt="plus" />
                <img className="cart-button" src="/minus.png" onClick={() => decreaseQuantity(index)} alt="minus" />
                <img className="cart-button" src="/trash.png" onClick={() => deleteProduct(index)} alt="trash" />
              </div>
            </div>


          )}
          <div className="cart-page-bottom-container">
            <div className="cart-checkout">

              <div className="cart-parcel-container">
                <input className="searchbar" ref={searchedRef} onChange={searchFromParcelMachines} placeholder="Search for parcel machine" type="text" /><br />
                {/* <textarea className="cart-additional-info" placeholder="Additional information..." name="message" /> */}
                <select className="searchresult">
                  {parcelMachines
                    .filter(element => element.NAME !== "1. eelistus minu.omniva.ee-s",) // !==   - hüümärk tähendab seda et ta ei otsi seda elementi
                    .filter(element => element.A0_NAME === "EE") // === - 3 võrdusmärki filtreerib ja näitba ainult neid elemente
                    .map(element => <option key={element.NAME}>{element.NAME}</option>)}
                </select>
              </div>
              <div className="cart-checkout-container">
                <div>{t("Cart price:")} {calculateCartPrice()} $ </div>
                <div> {cart.length > 0 && <div>{cart.length} {t("unique products")}</div>}
                </div>
                <Button variant="success" onClick={pay}>Checkout & Pay</Button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div >
  )
}

// 150 + RIDA HAKKAME MÕTLEMA VÄLJATÕSTIMISE PEALE
// 200 RIDA TÕSTMAE VÄLJA
// ET OLEKS ILUSAM JA VÄHEM KEERULISEM
export default Cart

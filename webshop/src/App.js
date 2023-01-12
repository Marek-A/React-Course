import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops";
import SingleProduct from "./pages/SingleProduct"; // imported by export default RFCE
import { ContactUs } from "./pages/ContactUs"; // imported by export default RFC
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProduct from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import MaintainCategory from "./pages/admin/MaintainCategory";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
  return (
    <div>
      <Navbar className="navbar-z">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="swiss" src="/swiss.png" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbar-x" as={Link} to="/cart">
              {t("cart")}
            </Nav.Link>
            <Nav.Link className="navbar-x" as={Link} to="/shops">
              {t("shops")}
            </Nav.Link>
            <Nav.Link className="navbar-x" as={Link} to="/contact">
              {t("contact")}
            </Nav.Link>
          </Nav>
          <Nav.Link className="navbar-x" as={Link} to="/admin">
            {t("admin")}
          </Nav.Link>
          <img
            className="lang"
            onClick={() => changeLang("en")}
            src="/english.png"
            alt="ENG"
          />
          <img
            className="lang"
            onClick={() => changeLang("ee")}
            src="/estonia.png"
            alt="EE"
          />
          <img
            className="lang"
            onClick={() => changeLang("tr")}
            src="/turkey.png"
            alt="TR"
          />
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shops" element={<Shops />} />
        <Route path="single-product" element={<SingleProduct />} />
        <Route path="contact" element={<ContactUs />} />

        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product/:productId" element={<AddProduct />} />

        <Route path="admin/edit-product/:productId" element={<EditProduct />} />

        <Route path="admin/maintain-category" element={<MaintainCategory />} />
        <Route path="admin/maintain-product" element={<MaintainProduct />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
      </Routes>
    </div>
  );
}

export default App;

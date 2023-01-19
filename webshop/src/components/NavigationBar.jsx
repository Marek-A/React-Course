import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import CartSumContext from "../store/CartSumContext";

function NavigationBar() {
    //-------------------------------------------------------
    const { t, i18n } = useTranslation();
    const changeLang = (newLang) => {
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    };
    //-------------------------------------------------------
    const cartSumCtx = useContext(CartSumContext);

    
    //-------------------------------------------------------

    return (

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

                <div style={{ color: "white" }}>Cart price: {cartSumCtx.cartSum} $</div>

                <NavDropdown title={t("Settings")} id="collasible-nav-dropdown">
                    <Nav.Link className="admin-drop" as={Link} to="/admin">
                        {t("admin")}
                    </Nav.Link>
                </NavDropdown>
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
    )
}

export default NavigationBar
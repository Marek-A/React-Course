import { Route, Routes } from "react-router-dom";
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
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shops" element={<Shops />} />
        <Route path="single-product/:productId" element={<SingleProduct />} />
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

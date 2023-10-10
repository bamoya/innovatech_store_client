import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Shop from "./pages/shop/Shop";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Singup";
import Contact from "./pages/contact/Contact";
import Legals from "./pages/legals/Legals";
import SearchModal from "./components/searchmodal/SearchModal";
import ProductPage from "./pages/shop/productdetails/ProductPage";
import ShopByCategory from "./pages/shop/ShopByCategory";
import ShopByType from "./pages/shop/ShopByType";
import Profile from "./components/user/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import { Head } from "./components/header/Head";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <Router>
      {/* <Header setOpenCart={setOpenCart} setOpenSearch={setOpenSearch} /> */}
      <Head setOpenCart={setOpenCart} setOpenSearch={setOpenSearch} />
      <SearchModal openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="shop" element={<Shop />} />
        <Route path="shop/products" element={<Shop />} />
        <Route path="shop/products/type/:type" element={<ShopByType />} />
        <Route path="shop/products/category/:id" element={<ShopByCategory />} />
        <Route path="shop/product/:id" element={<ProductPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/user/profile" element={<Profile />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/legals" element={<Legals />} />

        <Route path="/shop/checkout/success" element={<CheckoutSuccess />} />
      </Routes>
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;

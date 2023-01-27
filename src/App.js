import './App.css';
import './css/Navbar.css';
import Products from "./components/Products.js";
import Cart from "./components/Cart.js";
import ProductDetail from "./components/ProductDetail.js";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {

  const localStorageCart = window.localStorage.getItem('cart');
  const [cart, setCart] = useState(JSON.parse(localStorageCart));
  const [productList, setProductList] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(cart.length);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY":
        "5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262",
    },
  };

  async function getProductList() {
    await fetch("https://api.chimoney.io/v0.2/info/assets", options)
      .then((response) => response.json())
      .then((response) => setProductList(response.data.ecommerce))
      .catch((err) => console.error(err));
  };


  const getCartQuantity = () => {
    window.localStorage.setItem('cartQuantity', JSON.stringify(cart.length));
    setCartQuantity(cart.length);
  };

  useEffect(() => {
    getProductList();
  }, []);

  useEffect(() => {
    getCartQuantity();
  }, [cart]);

  return (
    <Routes>
      <Route path="/" element={<Products productList={productList} cart={cart} setCart={setCart} />} />
      <Route path="cart" element={<Cart productList={productList} cart={cart} setCart={setCart} />} />
      <Route path="/:productId" element={<ProductDetail productList={productList} cart={cart} setCart={setCart} />} />
    </Routes>
  );
}

export default App;

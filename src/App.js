import './App.css';
import './css/Navbar.css'
import Products from "./components/Products.js";
import Cart from "./components/Cart.js";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
      <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="cart" element={<Cart/>}/>
      </Routes>
  );
}

export default App;

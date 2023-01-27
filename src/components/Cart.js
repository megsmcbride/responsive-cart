import Navbar from "./Navbar.js";
import CartItem from "./CartItem.js";
import { useEffect } from "react";


function Cart(props) {

  //Get cart from local storage and parse data
  const localStorageCart = window.localStorage.getItem('cart');
  const parsedLocalStorageCart = JSON.parse(localStorageCart);
  console.log("----", parsedLocalStorageCart);
  let cartItems = [];

  //map cart items data into cart item component
  const getCartItems = () => {
    if (parsedLocalStorageCart) {
      cartItems = parsedLocalStorageCart.map((product, index) => {

        return (
          <CartItem
            category={product.category}
            key={index}
            productId={product.productId}
            img={product.thumbnail}
            url={product.url}
            name={product.name}
            price={product.price}
            currency={product.currency}
          />
        );
      });
    }

    console.log("hello", cartItems);
  };



  getCartItems();


  return (
    <div>
      <Navbar />

      {cartItems}

    </div>
  );
}

export default Cart;

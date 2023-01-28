import Navbar from "./Navbar.js";
import CartItem from "./CartItem.js";
import { useEffect, useState } from "react";

function Cart(props) {
  const { cart, productList } = props;
  const [filteredCart, setFilteredCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cart) {
      setFilteredCart(
        props.productList.filter((product) => cart.includes(product.productId))
      );
    }
  }, [productList]);


  useEffect(() => {
    getCartItems();
  }, [filteredCart]);

  const getCartItems = () => {
    if (filteredCart) {
      setCartItems(
        filteredCart.map((product, index) => {
          let itemQuantity = 0;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i] === product.productId) {
              itemQuantity++;
            }
          }

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
              itemQuantity={itemQuantity}
            />
          );
        })
      );
    }
  };

  return (
    <div>
      <Navbar />

      {cartItems}

      {cart === null && (
        <div className="emptyCart">
          <p>Your cart is empty</p>
          <button>Shop Now</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

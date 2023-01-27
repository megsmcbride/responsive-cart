import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function ProductDetail(props) {
  const productId = window.location.pathname.slice(1);
  const [info, setInfo] = useState({});
  const { cart, setCart } = props;

  // Filter productList for specific product info
  const getProductInfo = () => {
    if (props.productList) {
      setInfo(props.productList.filter(product => product.productId.includes(`${productId}`)));
    }
  };

  //Rerender DOM when API data updates productList state
  useEffect(() => {
    getProductInfo();
  }, [props.productList]);


  //Add Item to cart updating local storage and state
  const addItem = () => {
    console.log(cart);
    setCart((prev) => [...prev, info[0]]);

  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  console.log("Cart", cart)
  return (
    <div>
      <Navbar />
      <div>
        <img src={info[0]?.thumbnail} alt="product" />
        <h2>{info[0]?.name}</h2>
        <p>{info[0]?.currency} {info[0]?.price} </p>
        <p>id: {info[0]?.productId}</p>
        <button onClick={() => addItem()}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;

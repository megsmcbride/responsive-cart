import { useEffect, useState } from "react";
import "../css/ProductDetail.css";
import Navbar from "./Navbar";

function ProductDetail(props) {
  const productId = window.location.pathname.slice(1);
  const [info, setInfo] = useState([]);
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


  //Does cart exist yes add productId
  const addItem = () => {
    if (cart && cart.length !== 0) {
      setCart((prev) => [...prev, info[0].productId]);
    } else {
      console.log("no cart", info);
      setCart([info[0].productId]);
    }

  };

  //Reload DOM when cart state changes
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);


  return (
    <div>
      <Navbar />

      {info.length > 0 ? <div className="productDetailsContainer">
        <img src={info[0]?.thumbnail} alt="product" />
        <div className="productDetails">
          <h2>
            <a href={info[0]?.url}>
              {info[0]?.name}
            </a>
          </h2>
          <p>{info[0]?.category}</p>
          <p>Sold by: {info[0]?.marketplace}</p>
          <p>{info[0]?.currency} {info[0]?.price} </p>
          <p>id: {info[0]?.productId}</p>
          <button onClick={() => addItem()}>add to cart</button>

        </div>
      </div> : <>loading</>}

    </div>
  );
}

export default ProductDetail;
